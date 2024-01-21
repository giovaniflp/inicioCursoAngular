import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
  public nome: string = "Giovani Binding"
  public idade = 19;

  public subtracao(num1: number, num2: number): number {
    return num1 - num2;
  }

  public contador = 0

  public contadorSomar(){
    return this.contador++
  }

  public contadorSubtrair(){
    return this.contador--
  }

  public onKeyDown(event: Event){
    window.alert(event);
    console.log(event);
  }

  public onMouseMove(event: MouseEvent){
    return console.log({
      clientX : event.clientX,
      clientY : event.clientY
    });
  }

  public condition = this.nome == "Giovani Binding" ? true : false;

  public desabilitado = false;

  public cor = this.idade > 18 ? "red" : "blue"; // só funciona com css padrão

  public imgLink = "https://th.bing.com/th/id/OIP.9dLztDg1pEKtRCahK9hFWgHaHj?rs=1&pid=ImgDetMain"
}
