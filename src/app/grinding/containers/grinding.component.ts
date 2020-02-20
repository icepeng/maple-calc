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

  constructor() {}

  ngOnInit(): void {
    this.list = new MatTableDataSource(
      maps.map(map => {
        const countPerHour = (map.count * 60 * 60) / 7.5;
        const expPerHour = countPerHour * map.exp;
        const mesoPerHour = countPerHour * map.level * 7.5;
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

  private getExpPerHour(data: MapView, expBuff: number) {
    return (
      data.countPerHour * data.exp * (1 + expBuff / 100 + data.burning / 10)
    );
  }

  trackByName(data: MapView) {
    return data.name;
  }

  setBurning(data: MapView, value: number) {
    data.burning = value;
    data.expPerHour = this.getExpPerHour(data, this.expBuff);
  }

  setExpBuff(buff: number) {
    this.expBuff = buff;
    this.list.data = this.list.data.map(x => ({
      ...x,
      expPerHour: this.getExpPerHour(x, buff),
    }));
  }
}
