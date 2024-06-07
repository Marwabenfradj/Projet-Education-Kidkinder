import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courseUrl = 'http://localhost:3001/courses';

  constructor(private http: HttpClient) {}

  addCourse(course: any) {
    return this.http.post<{ message: any }>(this.courseUrl, course);
  }

  getAllCourses() {
    return this.http.get<{ courses: any }>(this.courseUrl);
  }
  getCourseById(id: any) {}
}
