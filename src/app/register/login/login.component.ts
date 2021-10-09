import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      address: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required]
    })
    console.log(this.registerForm);


  }
  submit() {
    localStorage.setItem('formValue', JSON.stringify(this.registerForm.value))
    console.log(this.registerForm.value);
    console.log('User added');

  }

  ngOnInit(): void {
  }

}
