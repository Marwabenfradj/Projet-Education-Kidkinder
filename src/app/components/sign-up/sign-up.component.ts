import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/shared/cPwd';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup; // We can make it public in the constructor or add a ! (not null)

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.minLength(3), Validators.required]],
        lastName: ['', [Validators.maxLength(5), Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        password: [
          '',
          Validators.pattern(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          ),
          Validators.required,
        ],
        cPassword: [''],
      },
      {
        validators: MustMatch('password', 'cPassword'),
      }
    );
  }

  signUp() {
    console.log(this.signUpForm.value);
  }
}
