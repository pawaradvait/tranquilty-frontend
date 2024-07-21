import { Component, OnInit } from '@angular/core';
import { CourseCategoryService } from 'src/app/service/course-category.service';
import { CourseQuizService } from 'src/app/service/course-quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-add-course-quiz',
  templateUrl: './admin-add-course-quiz.component.html',
  styleUrls: ['./admin-add-course-quiz.component.css'],
})
export class AdminAddCourseQuizComponent implements OnInit {
  category = [
    { ccid: '', title: 'aa', description: 'aass', courseCategoryImage: '' },
  ];

  quiz = {
    title: '',
    description: '',
    maxMarks: '',
    nosOfQuestion: '',
    active: true,
    courseCategory: {
      ccid: '',
    },
  };
  constructor(
    private courseQuiz: CourseQuizService,
    private courseCategory: CourseCategoryService
  ) {}

  ngOnInit(): void {
    this.courseCategory.getCategory().subscribe(
      (data: any) => {
        this.category = data;
      },
      (error) => {
        console.log(error);
        Swal.fire('error', 'error in db', 'error');
      }
    );
  }
  addQuizeDetails() {
    console.log(this.category);
    console.log(this.quiz);

    this.courseQuiz.addQuiz(this.quiz).subscribe(
      (data) => {
        Swal.fire('Success', 'addedd quiz', 'success');
      },
      (error) => {
        Swal.fire('error', 'er', 'error');
      }
    );
  }
}
