import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { CoreService } from '../../core/services/core.service';
import {
  backgroundColors,
  fieldAvailableLevels,
  maps,
  MapView,
} from '../models/map';
import { GrindingService } from '../services/grinding.service';

const localStorageAccessKey = 'grinding';
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

      .expbuff {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        max-width: 1200px;
        gap: 0px 20px;
      }

      mat-form-field {
        width: 240px;
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
    expBuff: new FormGroup({
      coupon: new FormControl(0),
      mvp: new FormControl(0),
      elixir: new FormControl(0),
      gold: new FormControl(0),
      mercedes: new FormControl(0),
      holySymbol: new FormControl(0),
      ring: new FormControl(0),
      zero: new FormControl(0),
      union: new FormControl(0),
      hyperstat: new FormControl(0),
      pendant: new FormControl(0),
      dice: new FormControl(0),
      pcroom: new FormControl(0),
      others: new FormControl(0),
    }),
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
      셀라스: new FormControl(true),
      문브릿지: new FormControl(true),
      미궁: new FormControl(true),
      리멘: new FormControl(true),
      '세르니움(전)': new FormControl(true),
      '세르니움(후)': new FormControl(true),
    }),
  });

  subscription$ = new Subject();

  constructor(
    private grindingService: GrindingService,
    private coreService: CoreService,
  ) {}

  ngOnInit(): void {
    const mapViews = maps.map(mapData => {
      const countPerHour = (mapData.count * 60 * 60) / 7.5;
      const expPerHour =
        (countPerHour * mapData.mobs.reduce((acc, mob) => acc + mob.exp, 0)) /
        mapData.mobs.length;
      const mesoPerHour =
        ((countPerHour *
          mapData.mobs.reduce((acc, mob) => acc + mob.level, 0)) /
          mapData.mobs.length) *
        7.5;
      const backgroundColor = backgroundColors[mapData.group];

      return {
        ...mapData,
        countPerHour,
        expPerHour,
        mesoPerHour,
        backgroundColor,
        burning: 0,
      };
    });

    this.list = new MatTableDataSource(mapViews);
    this.list.sort = this.sort;

    this.formGroup
      .get('playerLevel')
      .valueChanges.pipe(
        takeUntil(this.subscription$),
        filter(playerLevel => playerLevel >= 200),
        map(playerLevel =>
          Object.entries(fieldAvailableLevels).reduce((obj, [field, lv]) => {
            obj[field] = playerLevel >= lv;
            return obj;
          }, {}),
        ),
      )
      .subscribe(patchFilter =>
        this.formGroup.get('filter').patchValue(patchFilter),
      );

    this.formGroup.valueChanges
      .pipe(takeUntil(this.subscription$))
      .subscribe(value => {
        this.coreService.setLocalStorage(localStorageAccessKey, value);
        this.list.data = mapViews
          .filter(x => value.filter[x.group])
          .map(x => ({
            ...x,
            expPerHour: this.grindingService.getExpPerHour(
              x,
              this.calculateExpBuff(value.expBuff),
              value.playerLevel,
            ),
            mesoPerHour: this.grindingService.getMesoPerHour(
              x,
              value.playerLevel,
            ),
          }));
      });

    const storedForm = this.coreService.getLocalStorage(localStorageAccessKey);
    if (storedForm) {
      this.formGroup.patchValue(storedForm);
    }
  }

  trackByName(index: number, data: MapView) {
    return data.name;
  }

  setBurning(data: MapView, value: number) {
    data.burning = value;
    data.expPerHour = this.grindingService.getExpPerHour(
      data,
      this.calculateExpBuff(this.formGroup.value.expBuff),
      this.formGroup.value.playerLevel,
    );
  }

  calculateExpBuff(expObj: Record<string, number>) {
    return Object.values(expObj).reduce((sum, x) => sum + x, 0);
  }

  onBlur() {
    this.list.data = this.list.data.slice();
  }

  ngOnDestroy() {
    this.subscription$.next();
    this.subscription$.complete();
  }
}
