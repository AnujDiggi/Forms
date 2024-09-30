import { Component } from '@angular/core';
import { ReactiveComponent } from '../Forms/reactive/reactive.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

}
