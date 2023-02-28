import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phonelist',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.css']
})
export class PhonelistComponent implements OnInit {
  products: Observable<any>;
  constructor(private phoneService: PhoneService) {}

  ngOnInit(): void {
    this.products = this.phoneService.getAllProducts();
    // this.getProducts();
  }

  // alternate option if not using Observable:

  // getProducts(): void {
  //   this.phoneService.getAllProducts().subscribe((data) => {this.productList = data;
  //   },
  //   (error) => {
  //     console.log('http-error:');
  //     console.log(error);
  //   });
}
