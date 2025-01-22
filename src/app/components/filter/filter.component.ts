import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  regions = [
    null,
    'Antarctic',
    'Americas',
    'Europe',
    'Africa',
    'Asia',
    'Oceania',
  ];
  showList = false;
  selectedRegion: string | null = null;

  constructor(private countriesService: CountriesService) {}

  onShowList() {
    this.showList = !this.showList;
  }

  onFilter(region: string | null) {
    this.countriesService.filterByRegion(region);
    this.showList = false;
    this.selectedRegion = region;
  }
}
