import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  jobForm = new FormGroup({
   
    MobileNumber: new FormControl('', [Validators.required, Validators.minLength(11)]),

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
