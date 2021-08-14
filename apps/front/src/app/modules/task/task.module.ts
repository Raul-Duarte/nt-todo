// noinspection AngularInvalidImportedOrDeclaredSymbol

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { MatCardModule } from '@angular/material/card';
import { TaskEditorComponent } from './components/task-editor/task-editor.component';


@NgModule({
  declarations: [
    TaskComponent,
    TaskEditorComponent,
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatCardModule
  ]
})
export class TaskModule { }
