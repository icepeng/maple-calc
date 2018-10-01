import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material';
import { RandomboxService } from '../services/randombox.service';
import { RandomboxTableDataSource } from './randombox-table-datasource';
import { linkSkills } from '../../deal/entities/skill/skill-link';

@Component({
  selector: 'app-randombox',
  templateUrl: './randombox.component.html',
  styleUrls: ['./randombox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomboxComponent implements OnInit {
  @ViewChild('apple')
  appleSort: MatSort;
  @ViewChild('royal')
  royalSort: MatSort;
  appleDataSource: RandomboxTableDataSource;
  royalDataSource: RandomboxTableDataSource;

  displayedColumns = ['name', 'percentage', 'price'];
  skills = linkSkills;

  appleExpect = 0;
  royalExpect = 0;

  applePrice: { [id: number]: string } = {};
  royalPrice: { [id: number]: string } = {};

  constructor(private randomboxService: RandomboxService) {}

  async ngOnInit() {
    this.appleDataSource = new RandomboxTableDataSource(this.appleSort);
    this.royalDataSource = new RandomboxTableDataSource(this.royalSort);

    const data = await this.randomboxService.getAll().toPromise();
    const appleData = data.lists.find(x => x.type === 'NORMAL').items;
    const royalData = data.lists.find(x => x.type === 'DECORATION').items;

    this.applePrice = appleData.reduce(
      (obj, x) => ({ ...obj, [x.id]: '' }),
      {},
    );
    this.royalPrice = royalData.reduce(
      (obj, x) => ({ ...obj, [x.id]: '' }),
      {},
    );

    this.appleDataSource.setData(appleData);
    this.royalDataSource.setData(royalData);
  }

  setApplePrice(id: number, price: string) {
    this.applePrice[id] = price;
    this.appleExpect = this.appleDataSource.data$
      .getValue()
      .reduce((sum, x) => {
        return sum + +this.applePrice[x.id] * +x.percentage / 100;
      }, 0);
  }

  setRoyalPrice(id: number, price: string) {
    this.royalPrice[id] = price;
    this.royalExpect = this.royalDataSource.data$
      .getValue()
      .reduce((sum, x) => {
        return sum + +this.royalPrice[x.id] * +x.percentage / 100;
      }, 0);
  }
}
