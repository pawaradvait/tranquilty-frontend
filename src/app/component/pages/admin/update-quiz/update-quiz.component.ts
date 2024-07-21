import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css'],
})
export class UpdateQuizComponent implements OnInit {
  qid: any;

  quiz = {
    qid: 0,
    title: 'java quiz',
    description: 'Do it with fun',
    maxMarks: '',
    nosOfQuestion: '',
    active: false,
    category: {
      cid: 0,
      title: '',
    },
  };
  category = [
    {
      cid: 1,
      title: 'java',
    },
    {
      cid: 1,
      title: 'java',
    },
    {
      cid: 1,
      title: 'java',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private quizSservice: QuizService
  ) {}

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['id'];
    console.log(this.qid);
    this.categoryService.viewCategory().subscribe((data: any) => {
      this.category = data;
    });
    this.quizSservice.getQuizById(this.qid).subscribe((data: any) => {
      this.quiz = data;
    });
  }
  updatequiz() {
    this.quizSservice.addQuiz(this.quiz).subscribe(
      (data) => {
        Swal.fire('Success', 'addedd quiz', 'success');
      },
      (error) => {
        Swal.fire('error', 'er', 'error');
      }
    );
  }
}
