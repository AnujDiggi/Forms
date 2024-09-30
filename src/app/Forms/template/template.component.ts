import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [JsonPipe, FormsModule, RouterLink],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  studentObj: any = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    postalCode: ''
  }

  formvalue: any;

  onSubmit() {
    debugger;
    this.formvalue = this.studentObj
  }

  resetButton() {
    this.studentObj = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      state: '',
      postalCode: ''
    }
  }

}
