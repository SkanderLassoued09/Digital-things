import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  ngOnInit(): void {
  }

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })



  }
  enter() {
    localStorage.setItem('formValue', JSON.stringify(this.registerForm.value))
    console.log(this.registerForm.value);
    console.log('User added');

  }

}
