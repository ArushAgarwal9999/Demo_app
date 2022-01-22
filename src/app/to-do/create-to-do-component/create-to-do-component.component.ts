import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { todoData } from '../constant/contants-file';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-create-to-do-component',
  templateUrl: './create-to-do-component.component.html',
  styleUrls: ['./create-to-do-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateToDoComponentComponent implements OnInit {

  constructor(public _TodoService:TodoService) { }
  arr:todoData[] =[];
  counter:number = 0;

  ngOnInit(): void {
  }
  form = new FormGroup({
    Name:new FormControl('', Validators.required),
    description:new FormControl('', Validators.required),
    repeatingTask: new FormControl('Repeating Task', Validators.required)
  });
  onSubmit()
  {
      console.log("on submin -->>" + this.form.controls['Name'].value)
      if(this.form.controls['Name'].value && this.form.controls['description'].value &&  this.form.controls['repeatingTask'].value !="Repeating Task")
      {
        console.log("value is corrct -->>");
        let json:todoData = {
          index:this.counter,
          isWorkToDo:true,
          taskname:this.form.controls['Name'].value ,
          taskDescription :this.form.controls['description'].value ,
          repeatingTask:this.form.controls['repeatingTask'].value ,

        }
        this._TodoService.allTableData.push(json);
        this.counter++;
        this._TodoService.allTableData = [...this._TodoService.allTableData];
        //this._TodoService.addValue(json);
        console.log("this.service variable change 11111-->>",this._TodoService.allTableData)

      }
  }
  getUpdatedData(arr: any)
  {
    this._TodoService.allTableData = [...arr];
  }

}
