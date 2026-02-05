import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-policies',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule
  ],
  templateUrl: './policies.html'
})
export class PoliciesComponent {
  policies = [
    { id: '1', name: 'بیمه نامه اول', date: '1402/01/15' },
    { id: '2', name: 'بیمه نامه دوم', date: '1402/05/23' },
  ];
}
