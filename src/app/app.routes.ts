import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveComponent } from './Forms/reactive/reactive.component';
import { TemplateComponent } from './Forms/template/template.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "registration",
        component: RegistrationComponent
    },
    {
        path: "reactive-form",
        component: ReactiveComponent
    },
    {
        path: "template",
        component: TemplateComponent
    }
];
