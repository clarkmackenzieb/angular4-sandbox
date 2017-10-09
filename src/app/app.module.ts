import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PracticeComponent } from './components/practice.component';
import { DatabindingComponent } from './components/databinding.component';
import { TypescriptComponent } from './components/typescript.component';
import { ObjectInterfaceComponent } from './components/object.interface.component';
import { TemplateCompleteComponent} from './components/template_complete/template.complete.component';
import { LoopingComponent } from './components/looping.component';
import { ConditionalsComponent } from './components/conditionals.component';
import { PropertyBindingComponent } from './components/property.binding.component';
import { NgclassExampleComponent } from './components/ngclass.example.component';
import { PipesComponent } from './components/pipes.component';
import { MouseEventComponent } from './components/mouse.event.component';
import { ChangeEventComponent } from './components/change.event.component';
import { KeyboardEventComponent } from './components/keyboard.event.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    DatabindingComponent,
    TypescriptComponent,
    ObjectInterfaceComponent,
    TemplateCompleteComponent,
    LoopingComponent,
    ConditionalsComponent,
    PropertyBindingComponent,
    NgclassExampleComponent,
    PipesComponent,
    MouseEventComponent,
    ChangeEventComponent,
    KeyboardEventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
