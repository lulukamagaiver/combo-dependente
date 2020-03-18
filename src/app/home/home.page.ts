import { HomeService } from './home.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  marcas: any;
  modelos: any;
  anos: any;
  valores: any;
  marcaSelecionada: any;
  modeloSelecionado: any;
  anoSelecionado: any;
  valorSelecionado: any;
  constructor(private homeSrv: HomeService) {
    this.homeSrv.getMarcas().then(result => {
      this.marcas = result;
      console.log(result);
    });
  }

  selecionado() {
    console.log('codigo selecionado: ' + this.marcaSelecionada);
  }

  carregarModelos() {
    this.homeSrv.getModelos(this.marcaSelecionada).then(result => {
      this.modelos = result['modelos'];
      console.log(result['modelos']);
    });
  }

  carregarAnos() {
    this.homeSrv.getAnos(this.marcaSelecionada, this.modeloSelecionado).then(result => {
      this.anos = result;
      console.log(result);
    });
  }

  carregarValores() {
    this.homeSrv
      .getValor(this.marcaSelecionada, this.modeloSelecionado, this.anoSelecionado)
      .then(result => {
        this.valores = result;
        console.log(result);
      });
  }
}
