import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface MainTableItem {
  name: string;
  id: string;
  amount: number,
  date: Date,
  type: string,
  message: string,
  // account_summary: string
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: MainTableItem[] = [
  { id: 'gs12376723', name: 'Sachin', amount: 1223.45, date: new Date(12/10/2019), type: 'Credit', message: 'Tranfer to self',  },
  { id: 'gs12376723', name: 'Sachin', amount: 1223.45, date: new Date(12/10/2019), type: 'Credit', message: 'Tranfer to self',  },
  { id: 'gs12376723', name: 'Sachin', amount: 1223.45, date: new Date(12/10/2019), type: 'Credit', message: 'Tranfer to self',  },
  { id: 'gs12376723', name: 'Sachin', amount: 1223.45, date: new Date(12/10/2019), type: 'Credit', message: 'Tranfer to self',  },
  { id: 'gs12376723', name: 'Sachin', amount: 1223.45, date: new Date(12/10/2019), type: 'Credit', message: 'Tranfer to self',  },
  { id: 'gs12376723', name: 'Sachin', amount: 1223.45, date: new Date(12/10/2019), type: 'Credit', message: 'Tranfer to self',  },
  { id: 'gs12376723', name: 'Sachin', amount: 1223.45, date: new Date(12/10/2019), type: 'Credit', message: 'Tranfer to self',  },
  { id: 'gs12376723', name: 'Sachin', amount: 1223.45, date: new Date(12/10/2019), type: 'Credit', message: 'Tranfer to self',  },
  { id: 'gs12376723', name: 'Sachin', amount: 1223.45, date: new Date(12/10/2019), type: 'Credit', message: 'Tranfer to self',  },

];

/**
 * Data source for the MainTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MainTableDataSource extends DataSource<MainTableItem> {
  data: MainTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<MainTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: MainTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: MainTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'date': return compare(+a.date, +b.date, isAsc);
        case 'amount': return compare(+a.amount, +b.amount, isAsc);
        case 'type': return compare(+a.type, +b.type, isAsc);
        case 'message': return compare(+a.message, +b.message, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
