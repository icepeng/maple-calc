import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material';
import { RandomboxTableDataSource } from './randombox-table-datasource';
import { RandomboxService } from '../services/randombox.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-randombox',
  templateUrl: './randombox.component.html',
  styleUrls: ['./randombox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomboxComponent implements OnInit {
  @ViewChild(MatSort)
  sort: MatSort;
  dataSource: RandomboxTableDataSource;

  displayedColumns = ['name', 'percentage'];

  constructor(private randomboxService: RandomboxService) {}

  async ngOnInit() {
    this.dataSource = new RandomboxTableDataSource(this.sort);

    const data = await this.randomboxService.getAll().toPromise();
    const appleData = data.lists.find(x => x.type === 'NORMAL').items;

    this.dataSource.setData(appleData);
  }
}
