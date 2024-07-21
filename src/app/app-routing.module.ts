import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './component/pages/signup/signup.component';
import { LoginComponent } from './component/pages/login/login.component';
import { UserDashboardComponent } from './component/pages/user/user-dashboard/user-dashboard.component';
import { UserGuard } from './user.guard';
import { AdminDashboardComponent } from './component/pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './admin.guard';
import { ViewCategoryComponent } from './component/pages/admin/view-category/view-category.component';
import { AddCategoryComponent } from './component/pages/admin/add-category/add-category.component';
import { ViewQuizComponent } from './component/pages/admin/view-quiz/view-quiz.component';
import { InternComponent } from './component/pages/user/intern/intern.component';
import { ProfileComponent } from './component/pages/user/profile/profile.component';
import { AddQuizComponent } from './component/pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './component/pages/admin/update-quiz/update-quiz.component';
import { UserViewQuizComponent } from './component/pages/user/user-view-quiz/user-view-quiz.component';
import { AddQuestionComponent } from './component/pages/admin/add-question/add-question.component';
import { ViewQuestionComponent } from './component/pages/admin/view-question/view-question.component';
import { HomeComponent } from './component/pages/home/home.component';
import { QuizInstructionComponent } from './component/pages/user/quiz-instruction/quiz-instruction.component';
import { UserViewQuestionComponent } from './component/pages/user/user-view-question/user-view-question.component';
import { UseSolvedInfoComponent } from './component/pages/user/use-solved-info/use-solved-info.component';
import { EligableComponent } from './component/pages/admin/eligable/eligable.component';
import { ForgetComponent } from './component/pages/forget/forget.component';
import { UserServiceComponent } from './component/pages/user-service/user-service.component';
import { AdminCourseCatgeoryComponent } from './component/pages/admin/admin-course-catgeory/admin-course-catgeory.component';
import { AdminCourseQuizComponent } from './component/pages/admin/admin-course-quiz/admin-course-quiz.component';
import { AdminAddCourseQuizComponent } from './component/pages/admin/admin-add-course-quiz/admin-add-course-quiz.component';
import { AdminAddCourseCategryComponent } from './component/pages/admin/admin-add-course-categry/admin-add-course-categry.component';
import { AdminAddCourseQuestionComponent } from './component/pages/admin/admin-add-course-question/admin-add-course-question.component';
import { AdminCourseQuestionComponent } from './component/pages/admin/admin-course-question/admin-course-question.component';
import { CourseCategoryComponent } from './component/pages/user/Course/course-category/course-category.component';
import { CourseQuizComponent } from './component/pages/user/Course/course-quiz/course-quiz.component';
import { CourseInstructionComponent } from './component/pages/user/Course/course-instruction/course-instruction.component';
import { CourseQuestionComponent } from './component/pages/user/Course/course-question/course-question.component';
import { InternshipResultComponent } from './component/pages/user/result/internship-result/internship-result.component';
import { CourseResultComponent } from './component/pages/user/result/course-result/course-result.component';
import { CourseCertificateComponent } from './component/pages/user/result/course-certificate/course-certificate.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'forget', component: ForgetComponent, pathMatch: 'full' },
  { path: 'service', component: UserServiceComponent, pathMatch: 'full' },

  {
    path: 'start/:id',
    component: UserViewQuestionComponent,
    pathMatch: 'full',
    canActivate: [UserGuard],
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [UserGuard],
    children: [
      { path: 'internship', component: InternComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'quiz/:id/:title', component: UserViewQuizComponent },
      { path: 'question/:id', component: QuizInstructionComponent },
      { path: 'course', component: CourseCategoryComponent },
      { path: 'course-quiz/:id/:title', component: CourseQuizComponent },
      { path: 'course-question/:id', component: CourseInstructionComponent },
      { path: 'course-question/start/:id', component: CourseQuestionComponent },
      { path: 'result/internship', component: InternshipResultComponent },
      { path: 'result/course', component: CourseResultComponent },
      { path: 'course/certificate/:id', component: CourseCertificateComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'category', component: ViewCategoryComponent },
      { path: 'add-category', component: AddCategoryComponent },
      { path: 'quiz', component: ViewQuizComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'add-quiz', component: AddQuizComponent },
      { path: 'quiz/:id', component: UpdateQuizComponent },
      { path: 'question/:id/:title', component: AddQuestionComponent },
      { path: 'questions/:id/:title', component: ViewQuestionComponent },
      { path: 'eligableusers', component: EligableComponent },
      { path: 'course-category', component: AdminCourseCatgeoryComponent },
      { path: 'course-quiz', component: AdminCourseQuizComponent },
      { path: 'add-course-quiz', component: AdminAddCourseQuizComponent },
      {
        path: 'add-course-category',
        component: AdminAddCourseCategryComponent,
      },
      {
        path: 'course-question/:id/:title',
        component: AdminAddCourseQuestionComponent,
      },
      {
        path: 'course-questions/:id/:title',
        component: AdminCourseQuestionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
