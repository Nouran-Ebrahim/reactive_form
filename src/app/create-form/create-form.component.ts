import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
})
export class CreateFormComponent implements OnInit {
  contactForm = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  });

  constructor(private formService: GetDataService) { }

  ngOnInit(): void {}

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

  saveData() {
    if (this.contactForm.valid) {
      const editId = this.contactForm.getRawValue().id;
      if (editId != '' && editId != null) {
        this.formService
          .update(editId, this.contactForm.getRawValue())
          .subscribe(() => {
            console.log('Updated');
          });
      } else {
        this.formService.save(this.contactForm.value).subscribe(() => {
          console.log('Saved');
        });
      }
    }
  }
}
