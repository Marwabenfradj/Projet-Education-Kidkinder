import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {
  @Input() teacher: any;
  constructor() {}

  ngOnInit(): void {}
}
