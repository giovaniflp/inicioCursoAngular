import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  public controlFlowExport = "Control Flow Export";

  public numeroComparator = 2

  public dataArray = ['uno', 'dos', 'tres']
  public dataObject = {aluno: "pedro", idade: 20, curso: "angular"}
  public arrayObjects = [{aluno: "pedro", idade: 20, curso: "angular"}, {aluno: "maria", idade: 30, curso: "react"}]
  public dataConvert = [this.dataObject]

  public addAluno(value : string){
    this.arrayObjects.push({aluno: value, idade: 0, curso: "angular"})

  }

  public listaVazia = []

  public switchVar = "A"
}
