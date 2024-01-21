import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  public name = "Giovani "
  public lastName = signal("Feitosa")

  public nomes = signal(["Kleber", "Gomes"])

  public fullname = computed(()=>{
    return this.name + this.lastName()
  })

  constructor(){
    effect(()=>{
      console.log(this.lastName())
    })
  }

  public alterarSobrenome(value: string){
    this.lastName.set(value)
  }

  public alterarArray(value: string){
    this.nomes.update((oldValue : Array<string>)=>{
      return [...oldValue, value]
    })
  }
}
