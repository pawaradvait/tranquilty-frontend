import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css'],
})
export class AddQuizComponent implements OnInit {
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

  quiz = {
    title: '',
    description: '',
    maxMarks: '',
    nosOfQuestion: '',
    active: true,
    category: {
      cid: '',
    },
  };
  constructor(
    private quizService: QuizService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.viewCategory().subscribe(
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

    this.quizService.addQuiz(this.quiz).subscribe(
      (data) => {
        Swal.fire('Success', 'addedd quiz', 'success');
      },
      (error) => {
        Swal.fire('error', 'er', 'error');
      }
    );
  }
}
