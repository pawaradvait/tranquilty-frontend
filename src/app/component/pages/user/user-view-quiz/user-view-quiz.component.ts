import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-view-quiz',
  templateUrl: './user-view-quiz.component.html',
  styleUrls: ['./user-view-quiz.component.css'],
})
export class UserViewQuizComponent implements OnInit {
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
      maxMarks: '200',
      nosOfQuestion: '2',
    },
  ];
  catid: any;
  cattitle: any;
  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.catid = this.route.snapshot.params['id'];
    this.cattitle = this.route.snapshot.params['title'];
    console.log(this.catid);

    this.quizService.getAllquizOFcatid(this.catid).subscribe(
      (data: any) => {
        this.quiz = data;
      },
      (error) => {
        Swal.fire('error');

        console.log(error);
      }
    );
  }
}
