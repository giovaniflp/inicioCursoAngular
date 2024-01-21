import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ControlFlowComponent } from '../control-flow/control-flow.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [ControlFlowComponent, CommonModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent implements AfterViewInit {

  @ViewChild('dados') public dadosInput!: ElementRef
  @ViewChild('h1') public h1!: ElementRef

  @ViewChild(ControlFlowComponent) public controlFlowComponent!: ControlFlowComponent

  ngAfterViewInit() {
    console.log(this.dadosInput.nativeElement.value)
    console.log(this.h1.nativeElement)
    console.log(this.controlFlowComponent.controlFlowExport)
  }
}
