import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetDataService } from 'src/services/get-data.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editData:any
  constructor(private edit:GetDataService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data.id != '' && this.data.id != null) {
      this.edit.getUserByid(this.data.id).subscribe(res=> {
        this.editData = res;
        this.contactForm.setValue({
          id:this.editData.id,
          name: this.editData.name,
          email: this.editData.email,
          phone: this.editData.phone,
          address: this.editData.address,
          gender: this.editData.gender
        });
      });
    }
  }
  contactForm = new FormGroup({
    id:new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required,Validators.minLength(10)]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required])
  })


  onsubmit() {
    if (this.contactForm.valid){
      const id=this.contactForm.getRawValue().id
      if(id!="" && id!=null){
      this.edit.update(id,this.contactForm.getRawValue()).subscribe(()=>{
         
      })}
    }
  }

}
function MAT_DIALOG_DATA(MAT_DIALOG_DATA: any) {
  throw new Error('Function not implemented.');
}

