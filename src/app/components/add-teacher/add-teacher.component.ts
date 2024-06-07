import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css'],
})
export class AddTeacherComponent implements OnInit {
  addTeacherForm!: FormGroup;
  title: string = 'Add Teacher';
  teacher: any = {};
  constructor(private router: Router, private tService: TeacherService) {}

  ngOnInit(): void {}

  addTeacher() {
    console.log('here into teacher', this.teacher);
    this.tService.addTeacher(this.teacher).subscribe((response) => {
      console.log('here response from BE', response);
    });

    // let T = JSON.parse(localStorage.getItem('teachers') || '[]');
    // this.teacher.id = T.length === 0 ? 0 : T.at(-1).id + 1;
    // T.push(this.teacher);
    // localStorage.setItem('courses', JSON.stringify(T));
    // console.log(this.teacher);
  }
}
