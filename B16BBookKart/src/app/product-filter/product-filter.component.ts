import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
// import { EventEmitter } from 'stream';
import { ApiService } from '../service/api.service';
//import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit {
  public bookList: any;
  public filterCategory: any;
  public searchText: any;

  // @Output()
  // priceValue = new EventEmitter<number>(true);

  // @Output()
  // priceValue = new EventEmitter<number>(true);
  max!: 100; min!: 0; step=5; thumbLabel=true; value!: number; 

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.bookList = res;
      this.filterCategory = res;
    });
    // this.setPriceFilterProperties();
    // console.log(this.filterCategory);
  }

  filter(category: string) {
    this.filterCategory = this.bookList.filter((c: any) => {
      if (c.category == category || category == '') {
        return c;
      }
    });
  }

  // setPriceFilterProperties() {
  //   this.api.books$.pipe().subscribe(
  //     (data: Book[]) => {
  //       this.setMinValue(data);
  //       this.setMaxValue(data);
  //     }
  //   );
  // }

  formatLabel(value: number) {
    if (value >= 5) {
      return Math.round(value / 5) + 'k';
    }
    return value;
  }

  // onSliderChange(event: MatSliderChange) {
  //   this.priceValue.emit(event.value!);
  // }

  // setMinValue(book: Book[]) {
  //   this.min = book.reduce((prev, curr) => {
  //     return prev.price < curr.price ? prev : curr;
  //   }).price;
  // }

  // setMaxValue(book: Book[]) {
  //   this.value = this.max = book.reduce((prev, curr) => {
  //     return prev.price > curr.price ? prev : curr;
  //   }).price;
  // }

  onSliderChange(event: MatSliderChange) {
    console.log(event.value);
  }
}
