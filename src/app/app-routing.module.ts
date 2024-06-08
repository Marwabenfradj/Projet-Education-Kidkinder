import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';

import { AdminComponent } from './components/admin/admin.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, //http://localhost:4200/
  { path: 'courses', component: CoursesComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-up/admin', component: SignUpComponent },

  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'add-course', component: AddCourseComponent },
  { path: 'add-course', component: AddCourseComponent },

  { path: 'courses-table', component: CoursesTableComponent },
  { path: 'course', component: CoursesComponent },
  { path: 'header', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
