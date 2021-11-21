import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit {
  public bookList: any;
  public filterCategory: any;
  public searchText: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.bookList = res;
      this.filterCategory = res;
    });
    //console.log(this.bookList);
  }

  filter(category: string) {
    this.filterCategory = this.bookList.filter((c: any) => {
      if (c.category == category || category == '') {
        return c;
      }
    });
  }
}
