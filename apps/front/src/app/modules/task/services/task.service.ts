import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITask } from '@nt-al/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getAll(): Promise<ITask[] | undefined> {
    return this.http.get<ITask[]>('/api/tasks').toPromise();
  }
  getOne(id: number): Promise<ITask[] | undefined> {
    return this.http.get<ITask[]>('/api/tasks/' + id).toPromise();
  }
  edit(id: any, data: any): Promise<any> {
    return this.http.put(`/api/tasks/${id}`, data).toPromise();
  }
  create(data: any): Promise<any> {
    return this.http.post('/api/tasks', data).toPromise();
  }
}
