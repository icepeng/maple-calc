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
  playerLevel = null;

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
            this.getLevelExpModifier(mob.level, playerLevel),
        0,
      ) / data.mobs.length
    );
  }

  private getLevelExpModifier(mobLevel: number, playerLevel: number) {
    const diff = playerLevel - mobLevel;
    if (diff >= 40) {
      return 0.7;
    }
    if (diff >= 21) {
      return 0.9 - (diff - 20) / 100;
    }
    if (diff >= 19) {
      return 0.95;
    }
    if (diff >= 17) {
      return 0.96;
    }
    if (diff >= 15) {
      return 0.97;
    }
    if (diff >= 13) {
      return 0.98;
    }
    if (diff >= 11) {
      return 0.99;
    }
    if (diff >= 10) {
      return 1;
    }
    if (diff >= 5) {
      return 1.05;
    }
    if (diff >= -4) {
      return 1.1;
    }
    if (diff >= -9) {
      return 1.05;
    }
    if (diff >= -20) {
      return 1 + (diff + 10) / 100;
    }
    if (diff >= -35) {
      return 0.7 + ((diff + 21) / 100) * 4;
    }
    if (diff >= -39) {
      return 0.1;
    }
    return 0;
  }

  private getMesoPerHour(data: MapView, playerLevel: number) {
    return (
      data.mobs.reduce(
        (acc, mob) =>
          acc +
          data.countPerHour *
            mob.level *
            7.5 *
            this.getLevelMesoModifier(mob.level, playerLevel),
        0,
      ) / data.mobs.length
    );
  }

  private getLevelMesoModifier(mobLevel: number, playerLevel: number) {
    const diff = playerLevel - mobLevel;
    if (diff >= 30) {
      return 0;
    }
    if (diff >= 29) {
      return 0.03;
    }
    if (diff >= 28) {
      return 0.16;
    }
    if (diff >= 27) {
      return 0.24;
    }
    if (diff >= 26) {
      return 0.35;
    }
    if (diff >= 25) {
      return 0.45;
    }
    if (diff >= 24) {
      return 0.54;
    }
    if (diff >= 23) {
      return 0.62;
    }
    if (diff >= 22) {
      return 0.69;
    }
    if (diff >= 21) {
      return 0.75;
    }
    if (diff >= 11) {
      return 1 - ((diff - 10) / 100) * 2;
    }
    if (diff >= -10) {
      return 1;
    }
    if (diff >= -20) {
      return 1 + ((diff + 10) / 100) * 3;
    }
    if (diff >= -33) {
      return 0.7 + ((diff + 20) / 100) * 5;
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
      expPerHour: this.getExpPerHour(x, this.expBuff, value),
      mesoPerHour: this.getMesoPerHour(x, value),
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
