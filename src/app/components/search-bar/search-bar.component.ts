import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  constructor(private countriesService: CountriesService) {}

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input?.value.trim();
    this.countriesService.filterByCountry(value);
  }
}
