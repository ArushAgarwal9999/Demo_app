import { ChangeDetectionStrategy, Component ,Input, Output, EventEmitter } from '@angular/core';
import { todoData } from '../constant/contants-file';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-done-list-component',
  templateUrl: './done-list-component.component.html',
  styleUrls: ['./done-list-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoneListComponentComponent  {
  tableArr: todoData[] = [];
  @Input () set tableData( data:todoData[])
  {
      this.tableArr = data.filter(x => !x.isWorkToDo);
  }
  get tableData(): todoData[] {
    return this.tableArr;
  }
  constructor(public _TodoService:TodoService) { }

  @Output() changeData  = new EventEmitter<todoData[]>();
  onCheckClick(index:any)
  {
    this._TodoService.allTableData = this._TodoService.allTableData.map(x => {
      if (x.index == index) {
        x.isWorkToDo = true;
        //return x;
      }
      return x;

    }

    )
    this.changeData.emit([...this._TodoService.allTableData]);
  }
 

}
