import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.css'],
})
export class CoursesTableComponent implements OnInit {
  courses: any = [];
  constructor(private router: Router, private cService: CourseService) {}

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.cService.getAllCourses().subscribe((res) => {
      this.courses = res.courses;
    });
  }

  deleteMatch(id: any) {}
}
