import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  jobForm = new FormGroup({
   
    MobileNumber: new FormControl('', [Validators.required, Validators.minLength(11)]),
    Email: new FormControl('', Validators.required),

    Password: new FormControl('', Validators.required),
  });
  preview: string = '';

  ngOnInit(): void {
  }
  save() {
    // console.log(this.jobForm.get('MobileNumber'));
    console.log(this.jobForm.value);
   }
}
