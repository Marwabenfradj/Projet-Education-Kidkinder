import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers-table',
  templateUrl: './teachers-table.component.html',
  styleUrls: ['./teachers-table.component.css'],
})
export class TeachersTableComponent implements OnInit {
  teachers: any = [];
  constructor() {}

  ngOnInit(): void {
    this.getAllTeachers();
  }
  getAllTeachers() {}
}
