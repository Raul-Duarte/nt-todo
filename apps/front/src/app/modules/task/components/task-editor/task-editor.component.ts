import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'nt-al-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.scss'],
})
export class TaskEditorComponent implements OnInit {
  public form!: FormGroup;
  private id: any;
  public data: any;
  constructor(
    public activateRoute: ActivatedRoute,
    public router: Router,
    public service: TaskService
  ) {
    this.activateRoute.params.subscribe((params) => {
      if (params.id) {
        this.id = params?.id;
        this.loadData();
      }
    });
    this.form = new FormGroup({
      id: new FormControl(null),
      status: new FormControl(null, [
        Validators.maxLength(50),
        Validators.minLength(5),
      ]),
      description: new FormControl(null, [
        Validators.maxLength(50),
        Validators.minLength(5),
      ]),
    });
  }

  ngOnInit(): void {}

  loadData(): void {
    this.service.getOne(this.id).then((res) => {
      this.data = res;
      this.form.patchValue(this.data);
      console.log(this.form.value);
    });
  }
  save(): void {
    if (!this.id) {
      this.createItem();
    } else {
      this.editItem();
    }
  }

  editItem(): void {
    const requestObject = {
      status: this.form?.value?.status,
      description: this.form?.value?.description,
    };

    this.service
      .edit(this.id, requestObject)
      .then(() => {
        this.router.navigate(['../'], { relativeTo: this.activateRoute });
      })
      .catch((rej: any) => {});
  }
  createItem(): void {
    const requestObject = {
      status: this.form?.value?.status,
      description: this.form?.value?.description,
    };

    this.service
      .create(requestObject)
      .then((res) => {
        this.router.navigate(['../'], { relativeTo: this.activateRoute });
      })
      .catch((rej: any) => {});
  }
}
