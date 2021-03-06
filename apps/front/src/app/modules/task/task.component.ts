import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { ITask } from '@nt-al/api-interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'nt-al-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  public tasks: ITask[] | undefined;
  constructor(public service: TaskService, public router: Router) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.service.getAll().then((tasks) => {
      this.tasks = tasks;
      console.log(this.tasks);
    });
  }
  toEdit(task: ITask): void {
    this.router.navigateByUrl(`tarefas/${task?.id}`);
  }
}
