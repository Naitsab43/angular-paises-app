import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ){}

  ngOnInit(): void {

    /* this.activatedRoute.params
    .subscribe( ({id}) => {
      
      this.paisService.buscarPaisPorCodigo(id)
      .subscribe(pais => {
        console.log(pais)
      })

    }) */

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.paisService.buscarPaisPorCodigo(id)),
      tap(console.log)
    )
    .subscribe( pais => this.pais = pais[0])

  }

  get moneda(){
    return Object.keys(this.pais.currencies)
  }

}
