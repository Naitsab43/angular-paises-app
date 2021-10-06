import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private params = new HttpParams()
  .set("fields", "name,capital,population,flags,cca2")

  private apiUrl: string = "https://restcountries.com/v3"

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/translation/${termino}?fields=name,capital,population,flags,cca2,translations`
    
    return this.http.get<Country[]>(url, { params: this.params })

  }

  buscarCapital(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${termino}`
    
    return this.http.get<Country[]>(url, { params: this.params })
    
  }

  buscarPaisPorCodigo(id: string): Observable<Country> {

    const url = `${this.apiUrl}/alpha/${id}`
    
    return this.http.get<Country>(url)
    
  }

  buscarRegion(region: string): Observable<Country[]> {

    const url = `${this.apiUrl}/region/${region}`

    return this.http.get<Country[]>(url, { params: this.params })

  }

}
