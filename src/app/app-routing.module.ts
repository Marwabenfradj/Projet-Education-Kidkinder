import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { AdminComponent } from './components/admin/admin.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TeachersComponent } from './components/teachers/teachers.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, //http://localhost:4200/
  { path: 'teachers', component: TeachersComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'add-course', component: AddCourseComponent },
  { path: 'add-teacher', component: AddTeacherComponent },
  { path: 'courses-table', component: CoursesTableComponent },
  { path: 'course', component: CoursesComponent },
  { path: 'teacher', component: TeachersComponent },
  { path: 'teachers-table', component: TeachersComponent },
  { path: 'header', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
