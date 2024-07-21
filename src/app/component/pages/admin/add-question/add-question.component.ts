import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
})
export class AddQuestionComponent implements OnInit {
  title: any;
  question = {
    content: '',
    op1: '',
    op2: '',
    op3: '',
    op4: '',
    answer: '',
    quiz: {
      qid: 0,
    },
  };

  quizeid!: number;
  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.quizeid = this.route.snapshot.params['id'];
    console.log(this.quizeid);
  }
  Questionform() {
    this.question.quiz.qid = this.quizeid;
    console.log(this.question);
    this.questionService.addQuestion(this.question).subscribe(
      (data) => {
        Swal.fire('successs', 's', 'success');
      },
      (error) => {
        Swal.fire('error', 'error in db', 'error');
      }
    );
  }
}
