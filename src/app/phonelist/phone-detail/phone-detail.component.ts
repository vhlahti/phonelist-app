import { Component, OnInit } from '@angular/core';
import { PhoneService } from 'src/app/phone.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {

  phoneId: string;
  chosenPhone: any;

  constructor(
    private phoneService: PhoneService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.phoneId = params['id'];
      this.getPhone(this.phoneId).subscribe(data => {
        this.chosenPhone = data;
      });
    });
  }

  getPhone(id: string) {
    return this.phoneService.getProduct(id);
  }

}