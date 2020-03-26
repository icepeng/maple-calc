import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { backgroundColors, maps, MapView } from '../models/map';
import { GrindingService } from '../services/grinding.service';
import { Subscription } from 'rxjs';

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

      .margin-top {
        margin-top: 12px;
      }

      mat-checkbox ~ mat-checkbox {
        margin-left: 12px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrindingComponent implements OnInit, OnDestroy {
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

  formGroup = new FormGroup({
    expBuff: new FormControl(0),
    playerLevel: new FormControl(null),
    filter: new FormGroup({
      여로: new FormControl(true),
      리버스: new FormControl(true),
      츄츄: new FormControl(true),
      얌얌: new FormControl(true),
      레헬른: new FormControl(true),
      아르카나: new FormControl(true),
      모라스: new FormControl(true),
      에스페라: new FormControl(true),
      문브릿지: new FormControl(true),
      미궁: new FormControl(true),
      리멘: new FormControl(true),
    }),
  });

  subscription: Subscription;

  constructor(private grindingService: GrindingService) {}

  ngOnInit(): void {
    const mapViews = maps.map(map => {
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
    });

    this.list = new MatTableDataSource(mapViews);
    this.list.sort = this.sort;

    this.subscription = this.formGroup.valueChanges.subscribe(value => {
      this.list.data = mapViews
        .filter(x => value.filter[x.group])
        .map(x => ({
          ...x,
          expPerHour: this.grindingService.getExpPerHour(
            x,
            value.expBuff,
            value.playerLevel,
          ),
          mesoPerHour: this.grindingService.getMesoPerHour(
            x,
            value.playerLevel,
          ),
        }));
    });
  }

  trackByName(index: number, data: MapView) {
    return data.name;
  }

  setBurning(data: MapView, value: number) {
    data.burning = value;
    data.expPerHour = this.grindingService.getExpPerHour(
      data,
      this.formGroup.value.expBuff,
      this.formGroup.value.playerLevel,
    );
  }

  onBlur() {
    this.list.data = this.list.data.slice();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
