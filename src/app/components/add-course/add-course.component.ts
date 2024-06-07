import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  addCourseForm!: FormGroup;
  id: any;
  course: any = {};
  title: string = 'Add Course';
  constructor(
    private router: Router,
    private cService: CourseService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  addCourse() {
    console.log('here into course', this.course);
    this.cService.addCourse(this.course).subscribe((response) => {
      console.log('here response from BE', response);
    });
  }

  getCourseById() {}
}
