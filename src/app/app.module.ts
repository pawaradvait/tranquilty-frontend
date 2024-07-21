import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignupComponent } from './component/pages/signup/signup.component';
import { LoginComponent } from './component/pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authInterceptorProvider } from './service/auth.interceptor';
import { AdminDashboardComponent } from './component/pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './component/pages/user/user-dashboard/user-dashboard.component';
import { SlidebarComponent } from './component/pages/admin/slidebar/slidebar.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { AddCategoryComponent } from './component/pages/admin/add-category/add-category.component';
import { ViewCategoryComponent } from './component/pages/admin/view-category/view-category.component';
import { InternComponent } from './component/pages/user/intern/intern.component';
import { ViewQuizComponent } from './component/pages/admin/view-quiz/view-quiz.component';
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
import {
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
} from 'ngx-ui-loader';
import { UserServiceComponent } from './component/pages/user-service/user-service.component';
import { AdminCourseCatgeoryComponent } from './component/pages/admin/admin-course-catgeory/admin-course-catgeory.component';
import { AdminCourseQuizComponent } from './component/pages/admin/admin-course-quiz/admin-course-quiz.component';
import { AdminAddCourseQuizComponent } from './component/pages/admin/admin-add-course-quiz/admin-add-course-quiz.component';
import { AdminAddCourseCategryComponent } from './component/pages/admin/admin-add-course-categry/admin-add-course-categry.component';
import { AdminAddCourseQuestionComponent } from './component/pages/admin/admin-add-course-question/admin-add-course-question.component';
import { AdminCourseQuestionComponent } from './component/pages/admin/admin-course-question/admin-course-question.component';
import { CourseCategoryComponent } from './component/pages/user/Course/course-category/course-category.component';
import { CourseQuizComponent } from './component/pages/user/Course/course-quiz/course-quiz.component';
import { CourseQuestionComponent } from './component/pages/user/Course/course-question/course-question.component';
import { CourseInstructionComponent } from './component/pages/user/Course/course-instruction/course-instruction.component';
import { InternshipResultComponent } from './component/pages/user/result/internship-result/internship-result.component';
import { CourseResultComponent } from './component/pages/user/result/course-result/course-result.component';
import { CourseCertificateComponent } from './component/pages/user/result/course-certificate/course-certificate.component';
import { FooterComponent } from './component/pages/footer/footer.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#00ACC1',
  bgsOpacity: 0.5,
  bgsPosition: 'bottom-right',
  bgsSize: 60,
  bgsType: 'square-loader', // background loader type
  fgsType: 'square-loader', // foreground loader type
  fgsColor: '#00ACC1',
  pbDirection: 'ltr',
  pbThickness: 5,
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,

    AdminDashboardComponent,
    UserDashboardComponent,
    SlidebarComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    InternComponent,
    ViewQuizComponent,
    ProfileComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    UserViewQuizComponent,
    AddQuestionComponent,
    ViewQuestionComponent,
    HomeComponent,
    QuizInstructionComponent,
    UserViewQuestionComponent,
    UseSolvedInfoComponent,
    EligableComponent,
    ForgetComponent,
    UserServiceComponent,
    AdminCourseCatgeoryComponent,
    AdminCourseQuizComponent,
    AdminAddCourseQuizComponent,
    AdminAddCourseCategryComponent,
    AdminAddCourseQuestionComponent,
    AdminCourseQuestionComponent,
    CourseCategoryComponent,
    CourseQuizComponent,
    CourseQuestionComponent,
    CourseInstructionComponent,
    InternshipResultComponent,
    CourseResultComponent,
    CourseCertificateComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatListModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
