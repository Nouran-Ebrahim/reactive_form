import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/services/get-data.service';

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.css']
})
export class CreateTableComponent implements OnInit {

  constructor(private data:GetDataService) { }

  ngOnInit(): void {
    this.getDate()
  }
  displayedColumns: string[] = ['name', 'email', 'address', 'phone','genders','actions'];
  dataSource :any;
 getDate(){
  this.data.getData().subscribe(user=>{
    this.dataSource=user
  })
 }
 deleteData(name:any){
  confirm("are you sure you want to delete")
  this.data.delete(name).subscribe(()=>{
    this.getDate()
  })
 }
}

