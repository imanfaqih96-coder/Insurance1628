import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './verify.html'
})
export class VerifyComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      code: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]]
    });
  }

  get code() {
    return this.form.get('code');
  }

  submit() {
    if (this.form.valid) {
      // اعتبارسنجی کد → هدایت به Policies
      this.router.navigate(['/policies']);
    }
  }
}
