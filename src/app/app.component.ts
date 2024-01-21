import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from './components/binding/binding.component';
import { TemplateComponent } from './components/template/template.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { DeferrableViewsComponent } from './components/deferrable-views/deferrable-views.component';
import { SignalComponent } from './components/signal/signal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BindingComponent, TemplateComponent, ControlFlowComponent, DeferrableViewsComponent, SignalComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'iniciocurso';
}
