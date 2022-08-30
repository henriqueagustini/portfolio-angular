import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  certificados: any[] = [];
  formacao: any[] = [];
  competencias: any[] = [];
  servicos: any[] = [];

  constructor(private http: HttpClient) {
    this.CarregarCertificados();
    this.CarregarFormacao();
    this.CarregarCompetencias();
    this.CarregarServicos();
  }

  private CarregarCertificados() {
    this.http
      .get(
        'https://portfolio-henrique-a3392-default-rtdb.firebaseio.com/Certificados.json'
      )
      .subscribe((resp: any) => {
        this.certificados = resp;
        console.log(resp);
      });
  }

  private CarregarFormacao() {
    this.http
      .get(
        'https://portfolio-henrique-a3392-default-rtdb.firebaseio.com/Formacao.json'
      )
      .subscribe((resp: any) => {
        this.formacao = resp;
        console.log(resp);
      });
  }
  private CarregarCompetencias() {
    this.http
      .get(
        'https://portfolio-henrique-a3392-default-rtdb.firebaseio.com/Competencias.json'
      )
      .subscribe((resp: any) => {
        this.competencias = resp;
        console.log(resp);
      });
  }
  private CarregarServicos() {
    this.http
      .get(
        'https://portfolio-henrique-a3392-default-rtdb.firebaseio.com/Servicos.json'
      )
      .subscribe((resp: any) => {
        this.servicos = resp;
        console.log(resp);
      });
  }
}
