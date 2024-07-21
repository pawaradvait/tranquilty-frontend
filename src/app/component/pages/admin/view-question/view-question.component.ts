import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css'],
})
export class ViewQuestionComponent implements OnInit {
  quizeid: any;
  title: any;

  questions = [
    {
      quesid: 1,
      content: 'what is oops',
      op1: 'funt',
      op2: 'method',
      op3: 'interface',
      op4: 'objects oriented programming',
      answer: 'objects oriented programming',
      quiz: {
        qid: 117,
      },
    },
  ];
  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.quizeid = this.route.snapshot.params['id'];
    this.title = this.route.snapshot.params['title'];

    this.questionService.getQuestionByQuizeId(this.quizeid).subscribe(
      (data: any) => {
        this.questions = data;
      },
      (error) => {
        Swal.fire('error', 'error in db', 'error');
      }
    );
  }
  deleteQuestion(questionid: any) {}
}
