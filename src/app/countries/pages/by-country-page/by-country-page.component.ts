import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  standalone: false,

  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  private _placeholder: string = 'Buscar País...';
  private _countries: Country[] = [];

  get placeholder(): string{
    return this._placeholder;
  }

  get countries(): Country[] {
    return [...this._countries];
  }

  constructor(private countriesService: CountriesService){}

  searchByCountry(value: string): void {
    this.countriesService.searchByCountry(value)
      .subscribe(countries => {
        this._countries = countries;
      });
  }
}
