import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './landing.html'
})
export class LandingComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern(/^09\d{9}$/)]]
    });
  }

  get mobile() {
    return this.form.get('mobile');
  }

  submit() {
    if (this.form.valid) {
      // هدایت به صفحه Verify
      this.router.navigate(['/verify'], { queryParams: { mobile: this.mobile?.value } });
    }
  }
}
