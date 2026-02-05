import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing'
import { VerifyComponent } from './pages/verify/verify'
import { PoliciesComponent } from './pages/policies/policies'

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'verify', component: VerifyComponent },
  { path: 'policies', component: PoliciesComponent }
];
