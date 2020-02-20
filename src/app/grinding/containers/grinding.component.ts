import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { backgroundColors, maps, MapView } from '../models/map';

@Component({
  selector: 'app-grinding',
  templateUrl: './grinding.component.html',
  styles: [
    `
      .grid-container {
        margin: 20px;
      }

      table {
        width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrindingComponent implements OnInit {
  @ViewChild('sort', { static: true })
  sort: MatSort;

  list: MatTableDataSource<MapView>;
  displayedColumns = [
    'group',
    'name',
    'count',
    'countPerHour',
    'expPerHour',
    'mesoPerHour',
    'burning',
  ];

  expBuff = 0;
  playerLevel = 250;

  constructor() {}

  ngOnInit(): void {
    this.list = new MatTableDataSource(
      maps.map(map => {
        const countPerHour = (map.count * 60 * 60) / 7.5;
        const expPerHour =
          (countPerHour * map.mobs.reduce((acc, mob) => acc + mob.exp, 0)) /
          map.mobs.length;
        const mesoPerHour =
          ((countPerHour * map.mobs.reduce((acc, mob) => acc + mob.level, 0)) /
            map.mobs.length) *
          7.5;
        const backgroundColor = backgroundColors[map.group];

        return {
          ...map,
          countPerHour,
          expPerHour,
          mesoPerHour,
          backgroundColor,
          burning: 0,
        };
      }),
    );
    this.list.sort = this.sort;
  }

  private getExpPerHour(data: MapView, expBuff: number, playerLevel: number) {
    return (
      data.mobs.reduce(
        (acc, mob) =>
          acc +
          data.countPerHour *
            mob.exp *
            (1 + expBuff / 100 + data.burning / 10) *
            this.getLevelModifier(mob.level, playerLevel),
        0,
      ) / data.mobs.length
    );
  }

  private getLevelModifier(mobLevel: number, playerLevel: number) {
    if (playerLevel - mobLevel >= 40) {
      return 0.7;
    }
    if (playerLevel - mobLevel >= 21) {
      return 0.9 - (playerLevel - mobLevel - 20) / 100;
    }
    if (playerLevel - mobLevel >= 19) {
      return 0.95;
    }
    if (playerLevel - mobLevel >= 17) {
      return 0.96;
    }
    if (playerLevel - mobLevel >= 15) {
      return 0.97;
    }
    if (playerLevel - mobLevel >= 13) {
      return 0.98;
    }
    if (playerLevel - mobLevel >= 11) {
      return 0.99;
    }
    if (playerLevel - mobLevel === 10) {
      return 1;
    }
    if (playerLevel - mobLevel >= 5) {
      return 1.05;
    }
    if (playerLevel - mobLevel >= -4) {
      return 1.1;
    }
    if (playerLevel - mobLevel >= -9) {
      return 1.05;
    }
    if (playerLevel - mobLevel >= -20) {
      return 1 + (playerLevel - mobLevel + 10) / 100;
    }
    if (playerLevel - mobLevel >= -35) {
      return 0.7 + ((playerLevel - mobLevel + 21) / 100) * 4;
    }
    if (playerLevel - mobLevel >= -39) {
      return 0.1;
    }
    return 0;
  }

  trackByName(index: number, data: MapView) {
    return data.name;
  }

  setBurning(data: MapView, value: number) {
    data.burning = value;
    data.expPerHour = this.getExpPerHour(data, this.expBuff, this.playerLevel);
  }

  setPlayerLevel(value: number) {
    this.playerLevel = value;
    this.list.data = this.list.data.map(x => ({
      ...x,
      expPerHour: this.getExpPerHour(x, this.expBuff, this.playerLevel),
    }));
  }

  setExpBuff(buff: number) {
    this.expBuff = buff;
    this.list.data = this.list.data.map(x => ({
      ...x,
      expPerHour: this.getExpPerHour(x, buff, this.playerLevel),
    }));
  }

  onBlur() {
    this.list.data = this.list.data.slice();
  }
}
