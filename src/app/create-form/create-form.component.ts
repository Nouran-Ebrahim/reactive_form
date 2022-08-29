import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetDataService } from 'src/services/get-data.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  users: any;
  constructor(private formService : GetDataService) { }

  ngOnInit(): void {
  }
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(10)]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required])
  })

  load() {
    this.formService.getData().subscribe((res: any) => {
      this.users=res;
  })}
  get name(){
    return this.contactForm.get('name');
  }
  get email(){
    return this.contactForm.get('email');
  }
  get phone(){
    return this.contactForm.get('phone');
  }
  get address(){
    return this.contactForm.get('address');
  }
  get gender(){
    return this.contactForm.get('gender');
  }
   
  onsubmit() {
    if (this.contactForm.valid){

    this.formService.save(this.contactForm.value).subscribe(() => {
      this.load();
      //alertify.success("Saved Successfully.")
      console.log(this.contactForm.value)
    
  })}}


}
