import { Component, ViewChild } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,

  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  public placeholder: string = 'Buscar por capital...';

  public countries: Country[] = [];

  constructor (private countriesService: CountriesService){}

  searchByCapital(value: string): void {
    this.countriesService.searchByCapital(value)
      .subscribe(countries => {
        this.countries = countries;
      });
  }
}
