import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { LandingComponent } from './app/pages/landing/landing';
import { VerifyComponent } from './app/pages/verify/verify';
import { PoliciesComponent } from './app/pages/policies/policies';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';

const routes = [
  { path: '', component: LandingComponent },
  { path: 'verify', component: VerifyComponent },
  { path: 'policies', component: PoliciesComponent }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(
      BrowserModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatListModule
    )
  ]
}).catch(err => console.error(err));
