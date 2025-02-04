import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  standalone: false,

  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  private _placeholder: string = 'Buscar region...';
  private _countries: Country[] = [];

  get placeholder(): string {
    return this._placeholder;
  }

  get countries() : Country[] {
    return [...this._countries];
  }

  constructor( private countriesService: CountriesService ){ }

  searchByRegion( value: string ): void {
    this.countriesService.searchByRegion( value )
      .subscribe( countries => {
        this._countries = countries;
      } );
  }
}
