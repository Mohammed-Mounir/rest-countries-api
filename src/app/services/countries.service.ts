import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICountry } from '../model';
import { BehaviorSubject, combineLatest, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private baseUrl = 'https://restcountries.com/v3.1';
  private fields = 'name,flags,capital,population,region';

  private regionFilter = new BehaviorSubject<string | null>(null);
  private searchCountryFilter = new BehaviorSubject<string>('');

  countries$!: Observable<ICountry[]>;

  constructor(private http: HttpClient) {
    this.countries$ = combineLatest([
      this.regionFilter,
      this.searchCountryFilter,
    ]).pipe(
      switchMap(([region, countryName]) => {
        if (!region && !countryName) {
          return this.http.get<ICountry[]>(`${this.baseUrl}/all`, {
            params: { fields: this.fields },
          });
        } else if (region && !countryName) {
          return this.http.get<ICountry[]>(`${this.baseUrl}/region/${region}`, {
            params: { fields: this.fields },
          });
        } else {
          return this.http.get<ICountry[]>(
            `${this.baseUrl}/name/${countryName}`,
            {
              params: { fields: this.fields },
            }
          );
        }
      })
    );
  }

  filterByRegion(region: string | null) {
    this.regionFilter.next(region);
  }

  filterByCountry(country: string) {
    this.searchCountryFilter.next(country);
  }

  fetchCountry(countryName: string) {
    return this.http.get<ICountry[]>(`${this.baseUrl}/name/${countryName}`);
  }
}
