import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class StockService {
  constructor(private dataService: DataService) {

  }

  getStockInfo(query: string) {
    return this.dataService.get(`Stock/${query}`);
  }
}
