import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
})
export class TeachersComponent implements OnInit {
  teachers: any = [];

  constructor(private tService: TeacherService) {}

  ngOnInit(): void {
    this.getAllteachers();
  }
  getAllteachers() {
    console.log('here into teachers', this.teachers);
    this.tService.getAllTeachers().subscribe((response) => {
      console.log('here response from BE', response);
    });
  }
}
