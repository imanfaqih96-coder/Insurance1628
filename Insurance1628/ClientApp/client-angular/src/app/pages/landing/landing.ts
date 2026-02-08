import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CarouselModule
  ],
  templateUrl: './landing.html'
})
export class LandingComponent {
  form: FormGroup;

  customOptions: OwlOptions = {
    autoplay: true,
    autoplayTimeout:3500,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

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
