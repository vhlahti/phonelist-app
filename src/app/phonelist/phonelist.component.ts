import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phonelist',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.css']
})
export class PhonelistComponent implements OnInit {

  data: any[];
  productList: any[];
  searchTerm: string = '';
  
  constructor(private phoneService: PhoneService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.phoneService.getAllProducts().subscribe((data) => {
      this.data = data;
      this.productList = this.data.sort((a, b) => a.age - b.age);
    },
    (error) => {
      console.log('http-error:');
      console.log(error);
    });
  }

  sortData(direction: string) {
    if (direction === 'newest') {
      this.productList = this.data.sort((a, b) => b.age - a.age);
    }
    else if (direction === 'oldest') {
      this.productList = this.data.sort((a, b) => a.age - b.age);
    }
    else if (direction === 'asc') {
      this.productList = this.data.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (direction === 'desc') {
      this.productList = this.data.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  // search filter

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchTerm);
  }

  onSearchTextEntered(searchValue: string) {
    this.searchTerm = searchValue;
  }

}
