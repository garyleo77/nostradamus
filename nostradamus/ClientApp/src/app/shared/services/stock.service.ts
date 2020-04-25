import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class StockService {
  constructor(private dataService: DataService) {

  }

  getStock(ticker: string) {
    return this.dataService.get(`function=TIME_SERIES_WEEKLY&symbol=${ticker}`);
  }

}
