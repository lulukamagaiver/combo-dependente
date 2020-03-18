import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  carros = 'carros/marcas';
  constructor(private http: HttpClient) {}

  getMarcas(): Promise<any> {
    return this.http.get<any>(`${environment.url}/${this.carros}`).toPromise();
  }

  getModelos(codigo: any): Promise<any> {
    return this.http.get<any>(`${environment.url}/${this.carros}/${codigo}/modelos`).toPromise();
  }

  getAnos(codigo: any, codModelo: any): Promise<any> {
    return this.http
      .get<any>(`${environment.url}/${this.carros}/${codigo}/modelos/${codModelo}/anos`)
      .toPromise();
  }

  getValor(codigo: any, codModelo: any, codAnos: any): Promise<any> {
    return this.http
      .get<any>(`${environment.url}/${this.carros}/${codigo}/modelos/${codModelo}/anos/${codAnos}`)
      .toPromise();
  }
}
