import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valor = "0";
  memoria = "0";
  operacao = "";
  matricula = "221041007";
  pi = "3.14";

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  adicionaNoValor(conteudo: string) {

    if(this.valor == "0" && conteudo != ".") {
      this.valor = conteudo;
    } else {
      this.valor = this.valor + conteudo;
    }

    this.changeDetectorRef.detectChanges();

  }

  adicionaPonto() {

    const naoPossuiPonto = (this.valor.indexOf(".") == -1);
    if (naoPossuiPonto) this.adicionaNoValor(".");

  }

  limpaCalculadora() {
    this.valor = "0";
    this.memoria = "0";
    this.operacao = "";
    this.changeDetectorRef.detectChanges();
  }

  selecionaOperacao(operacao: string) {
    this.operacao = operacao;
    this.memoria = this.valor;
    this.valor = "0";
    this.changeDetectorRef.detectChanges();
  }

  calculaResultado() {

    const valor = parseFloat(this.valor);
    const memoria = parseFloat(this.memoria);

    if (this.operacao == "+") {
      this.valor = (memoria + valor).toString();
    } else if (this.operacao == "-") {
      this.valor = (memoria - valor).toString();
    } else if (this.operacao == "*") {
      this.valor = (memoria * valor).toString();
    } else if (this.operacao == "/") {
      this.valor = (memoria / valor).toString();
    } else if (this.operacao == "%") {
      this.valor = (memoria * (valor/ 100)). toString();
    } else if (this.operacao == "^") {
      this.valor = (Math.pow(memoria, valor)).toString();
    }

    this.memoria = "0";
    this.operacao = "";
    this.changeDetectorRef.detectChanges();

  }
  
  CalculaPi() {
    const valor = parseFloat(this.valor);
    const pi = parseFloat(this.pi);

    this.valor = (valor * pi).toString();

    this.memoria = "0";
    this.operacao = "";
    this.changeDetectorRef.detectChanges();

  }

  CalculaMatricula() {
    const valor = parseFloat(this.valor);
    const matricula = parseFloat(this.matricula);

    this.valor = (valor * matricula).toString();

    this.memoria = "0";
    this.operacao = "";
    this.changeDetectorRef.detectChanges();

  }

}






