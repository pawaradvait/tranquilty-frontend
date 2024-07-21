import { Component, OnInit } from '@angular/core';
import { CourseQuizService } from 'src/app/service/course-quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-course-quiz',
  templateUrl: './admin-course-quiz.component.html',
  styleUrls: ['./admin-course-quiz.component.css'],
})
export class AdminCourseQuizComponent implements OnInit {
  quiz = [
    {
      qid: 0,
      title: 'java quiz',
      description: 'Do it with fun',
      maxMarks: '200',
      nosOfQuestion: '2',
      active: false,
      courseCategory: {
        title: '',
      },
    },
    {
      qid: 0,

      title: 'java quiz',
      description: 'Do it with fun',
      maxmarks: '200',
      numberOfQuestion: '2',
    },
  ];
  constructor(private quizService: CourseQuizService) {}

  ngOnInit(): void {
    this.quizService.getQuiz().subscribe(
      (data: any) => {
        this.quiz = data;
      },
      (error) => {
        Swal.fire('error', 'db is not connected', 'error');
      }
    );
  }

  deleteQuiz(arg0: any) {
    throw new Error('Method not implemented.');
  }
}
