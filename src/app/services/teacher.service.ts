import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  teacherUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  addTeacher(teacher: any) {
    return this.http.post<{ message: any }>(this.teacherUrl, teacher);
  }

  getAllTeachers() {
    return this.http.get<{ teachers: any }>(this.teacherUrl);
  }
}
