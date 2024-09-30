import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators} from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
    
  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("sample123@gmail.com", [Validators.email]),
    phone: new FormControl("", [Validators.required, Validators.minLength(10)]),
    city: new FormControl(""),
    state: new FormControl(""),
    postalCode: new FormControl("")
  })

  formValue: any;

  onSubmit() {
    this.formValue = this.studentForm.value;
  }

  resetData() {
    this.studentForm.reset({
      firstName: '',
      lastName: '',
      email: 'sample123@gmail.com',
      phone: '',
      city: '',
      state: '',
      postalCode: ''
    })
  }

}
