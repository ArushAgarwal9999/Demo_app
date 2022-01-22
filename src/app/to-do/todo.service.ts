import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { todoData } from './constant/contants-file';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  player: Observable<todoData[]> | undefined ;
  constructor() { }

  allTableData:todoData[] = [];
  // addValue(json :todoData)
  // {
  //     this.tableData.push(json);
  //     this.changeValue();
      
  // }
  // changeValue():Observable<todoData[]>{
  //   return of(this.tableData);
  // }
}
