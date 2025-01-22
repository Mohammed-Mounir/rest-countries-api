import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICountry } from '../../model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() country!: ICountry;
}
