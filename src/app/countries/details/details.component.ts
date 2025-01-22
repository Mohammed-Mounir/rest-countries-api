import { Component, Input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ICountry } from '../../model';

@Component({
  selector: 'app-details',
  imports: [RouterLink, AsyncPipe, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  @Input()
  set country(countryName: string) {
    this.country$ = this.countriesService.fetchCountry(countryName);
  }
  country$!: Observable<ICountry[]>;

  constructor(private countriesService: CountriesService) {}

  getCurrencies(currencies: ICountry['currencies']) {
    return Object.entries(currencies).reduce(
      (acc, curr) =>
        acc + `${acc.length ? ',' : ''} ${curr[0]} (${curr[1].symbol})`,
      ''
    );
  }

  getLanguages(languages: ICountry['languages']) {
    return Object.values(languages).join(', ');
  }
}
