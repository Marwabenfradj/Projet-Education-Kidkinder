import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: any = [];
  constructor(private cService: CourseService) {}

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    console.log('here into courses', this.courses);
    this.cService.getAllCourses().subscribe((response) => {
      console.log('here response from BE', response);
    });
  }
}
