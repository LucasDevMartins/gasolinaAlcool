import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public precoAlcool = "";
  public precoGasolina = "";
  public resultado: String = "Resultado";

  public calcular() {
    //Validar se os campos foram preenchidos
    if (this.precoAlcool && this.precoGasolina) {
      
      var pAlcool = parseFloat(this.precoAlcool);
      var pGasolina = parseFloat(this.precoGasolina);

      var res = pAlcool / pGasolina
      if (res>= 0.7) {
        this.resultado = "Melhor utilizar Gasolina"
      }else{
        this.resultado = "Melhor utilizar o Alcool"
      }

    } else {
      this.resultado = "Preencha corretamente os campos!";
    }
  }
  limparCampos() {
      this.precoAlcool = "";
      this.precoGasolina = "";
  }
}
