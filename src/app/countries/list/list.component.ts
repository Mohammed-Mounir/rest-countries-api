import { Component } from '@angular/core';
import { FilterComponent } from '../../components/filter/filter.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { CardComponent } from '../../components/card/card.component';
import { AsyncPipe } from '@angular/common';
import { CountriesService } from '../../services/countries.service';
import { Observable } from 'rxjs';
import { ICountry } from '../../model';

@Component({
  selector: 'app-list',
  imports: [FilterComponent, SearchBarComponent, CardComponent, AsyncPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  countries$: Observable<ICountry[]>;

  constructor(private countriesService: CountriesService) {
    this.countries$ = this.countriesService.countries$;
  }
}
