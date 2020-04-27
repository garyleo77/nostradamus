import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class StockService {
  constructor(private dataService: DataService) {

  }

  getStock(ticker: string) {
    return this.dataService.get(`StockTimeSeries/${ticker}`);
  }

  getStockNet() {
    return this.dataService.get2('/api/Stock/5');
  }
}
