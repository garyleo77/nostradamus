import { NgModule } from '@angular/core';
import { StockService } from './stock.service';
import { DataService } from './data.service';

@NgModule({})
export class SharedModule {
  imports: [
    StockService,
    DataService
  ];
  declarations: [];
  providers: [];
  export: [StockService, DataService]
}
