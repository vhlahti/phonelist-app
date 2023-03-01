import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phonelist',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.css']
})
export class PhonelistComponent implements OnInit {

  data: any[];
  productList: any[];
  
  constructor(private phoneService: PhoneService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.phoneService.getAllProducts().subscribe((data) => {this.productList = data;
    },
    (error) => {
      console.log('http-error:');
      console.log(error);
    });
  }

}
