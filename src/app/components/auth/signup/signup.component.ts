import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

   ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      userName: ['', Validators.required],
      fullName: ['', Validators.required],
      contactNo: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      asDoctor: [false, Validators.required],
      asPatient: [false, Validators.required],
    });
  }

}
