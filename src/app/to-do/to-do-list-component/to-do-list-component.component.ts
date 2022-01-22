import { ChangeDetectionStrategy, Component, OnInit ,DoCheck, ChangeDetectorRef, Input,OnChanges, SimpleChanges, SimpleChange, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';
import { todoData } from '../constant/contants-file';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListComponentComponent  {

  constructor(public _TodoService:TodoService,
    private changeDetectorRef: ChangeDetectorRef  ) { }
  

  
  
  // @Input() tableData:todoData[] = [];
  tableArr :todoData[] = [];
  @Input () set tableData( data:todoData[])
  {
      this.tableArr = data.filter(x => x.isWorkToDo);
  }
  get tableData(): todoData[] {
    return this.tableArr;
  }
  @Output() changeData  = new EventEmitter<todoData[]>();
  onCheckClick(inedx:any)
  {
    this._TodoService.allTableData = this._TodoService.allTableData.map(x => {
      console.log("x-->>",x);
      if (x.index == inedx) {
        x.isWorkToDo = false;
        //return x;
      }
      return x;

    }

    )
    console.log("return value from to do list -->>",this._TodoService.allTableData);
    this.changeData.emit([...this._TodoService.allTableData]);
  }
}
