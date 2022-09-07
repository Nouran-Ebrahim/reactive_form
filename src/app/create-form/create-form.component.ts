import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
})
export class CreateFormComponent implements OnInit {
  contactForm = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  });

  constructor(private formService: GetDataService) { }

  ngOnInit(): void {}

  

  saveData() {
    if (this.contactForm.valid) {

        this.formService.save(this.contactForm.value).subscribe(() => {
            console.log('saved');
          });
      
    }
    else {
      alert("complete the data")
   }
  }

  get id() {
    return this.contactForm.get('id');
  }
  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get phone() {
    return this.contactForm.get('phone');
  }
  get address() {
    return this.contactForm.get('address');
  }
  get gender() {
    return this.contactForm.get('gender');
  }
}
