import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetDataService } from 'src/services/get-data.service';

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
    if (this.data.name != '' && this.data.name != null) {
      this.edit.getUserByname(this.data.name).subscribe(res=> {
        this.editData = res;
        this.contactForm.setValue({
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
    name: new FormControl('', [Validators.required,Validators.minLength(10)]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required])
  })


  onsubmit() {
    if (this.contactForm.valid){
      const name=this.contactForm.getRawValue().name
      if(name!="" && name!=null){
      this.edit.update(name,this.contactForm.getRawValue()).subscribe(()=>{
         
      })}
    }
  }

}
function MAT_DIALOG_DATA(MAT_DIALOG_DATA: any) {
  throw new Error('Function not implemented.');
}

