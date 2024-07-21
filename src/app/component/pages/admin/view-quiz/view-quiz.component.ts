import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css'],
})
export class ViewQuizComponent implements OnInit {
  quiz = [
    {
      qid: 0,
      title: 'java quiz',
      description: 'Do it with fun',
      maxMarks: '200',
      nosOfQuestion: '2',
      active: false,
      category: {
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
  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.viewQuizes().subscribe(
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
