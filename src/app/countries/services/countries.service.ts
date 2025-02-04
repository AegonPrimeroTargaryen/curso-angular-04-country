import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchByCapital(value: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${value}`)
      .pipe(
        catchError( () => of( [] ))
      );
  }

  searchByCountry(value: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${value}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( () => of( [] ))
      );
  }

  searchByRegion(value: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/region/${value}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( () => of( [] ))
      );
  }

  searchByAlphaCode(value: string): Observable<Country | null> {
    const url: string = `${this.apiUrl}/alpha/${value}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null),
        catchError( () => of( null ))
      );
  }
}
