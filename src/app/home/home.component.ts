import { Component, OnInit } from '@angular/core';
import { type } from 'jquery';

import { HttpRequestService } from '../services/http-request.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  itemProducts: any;






  constructor(private api: HttpRequestService) {
    this.dealAPI();



  }

  ngOnInit(): void {
  }
  dealAPI() {
    this.api.getProduct().subscribe(param => {
      this.itemProducts = param

      console.log(this.itemProducts);

    });

  }


}
