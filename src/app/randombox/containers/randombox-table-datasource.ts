import { DataSource } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, Observable, merge } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

// TODO: Replace this with your own data model type
export interface RandomboxTableItem {
  id: number;
  name: string;
  percentage: string;
}

/**
 * Data source for the RandomboxTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class RandomboxTableDataSource extends DataSource<RandomboxTableItem> {
  data$ = new BehaviorSubject<RandomboxTableItem[]>([]);

  constructor(private sort: MatSort) {
    super();
  }

  setData(data: RandomboxTableItem[]) {
    this.data$.next(data);
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<RandomboxTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [this.data$, this.sort.sortChange];

    return merge(...dataMutations).pipe(
      switchMap(() => this.data$),
      map(data => {
        return this.getSortedData([...data]);
      }),
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: RandomboxTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'percentage':
          return compare(+a.percentage, +b.percentage, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
