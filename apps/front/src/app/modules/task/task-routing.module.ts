import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task.component';
import { TaskEditorComponent } from './components/task-editor/task-editor.component';

const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
  },
  {
    path: ':id',
    component: TaskEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
