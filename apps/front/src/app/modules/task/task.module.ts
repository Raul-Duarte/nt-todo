// noinspection AngularInvalidImportedOrDeclaredSymbol

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { MatCardModule } from '@angular/material/card';
import { TaskEditorComponent } from './components/task-editor/task-editor.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    TaskComponent,
    TaskEditorComponent,
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class TaskModule { }
