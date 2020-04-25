import { Component, OnInit } from '@angular/core';
import { StockService } from '../shared/services/stock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private stockService: StockService) {

  }

  ngOnInit() {
    this.stockService.getStock('IBM').subscribe((result: any) => {
      console.log('test: ', result);
    });
  }
}
