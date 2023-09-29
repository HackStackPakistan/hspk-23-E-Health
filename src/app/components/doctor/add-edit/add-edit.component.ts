import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {

  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

   ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      fullName: ['', Validators.required],
      field: ['', Validators.required],
      education: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
