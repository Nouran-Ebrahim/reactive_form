import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetDataService } from 'src/services/get-data.service';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.css']
})
export class CreateTableComponent implements OnInit {
 
  formService: any;
  users: any;

  constructor(private data:GetDataService,private dialog: MatDialog) { }

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
 deleteData(id:any){
  confirm("are you sure you want to delete")
  this.data.delete(id).subscribe(()=>{
    this.getDate()
  })
 }
 editUser(id:any){
  const editedUser = this.dialog.open(EditComponent,{
    width: '500px',
    exitAnimationDuration: '1000ms',
    enterAnimationDuration: '1000ms',
    data:{id: id}
  })
  editedUser.afterClosed().subscribe(r => {
    this.load();
  });
}
load() {
  this.data.getData().subscribe((res: any) => {
    this.users=res;
})}
}

