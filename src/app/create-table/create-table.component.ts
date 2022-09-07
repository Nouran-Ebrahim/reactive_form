import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { GetDataService } from 'src/app/services/get-data.service';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.css'],
})
export class CreateTableComponent implements OnInit {
  users: any;
  displayedColumns: string[] = [
    'NO.',
    'Name',
    'Email',
    'Phone',
    'Address',
    'Gender',
    'Actions',
  ];
  dataSource!: MatTableDataSource<any>;
  constructor(private data: GetDataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.data.getData().subscribe((user: any) => {
      this.dataSource = new MatTableDataSource(user);
    });
  }

  deleteData(id: any) {
    confirm('are you sure you want to delete');
    this.data.delete(id).subscribe(() => {
      this.getData();
    });
  }

  editUser(id: any) {
    const editedUser = this.dialog.open(EditComponent, {
      width: '500px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
      data: { id: id },
    });
    editedUser.afterClosed().subscribe((r) => {
      this.getData();
    });
  }
}

