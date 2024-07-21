import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-instruction',
  templateUrl: './quiz-instruction.component.html',
  styleUrls: ['./quiz-instruction.component.css'],
})
export class QuizInstructionComponent implements OnInit {
  id = 0;
  quiz = {
    qid: 152,
    active: true,
    title: 'java basic',
    description: 'basic question of java',
    maxmarks: '200',
    numberOfQuestion: 0,
    cid: {
      cid: 1,
      title: 'java programming',
      description: 'fun with java programming',
    },
  };
  constructor(private quzService: QuizService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.quzService.getQuizById(this.id).subscribe(
      (data: any) => {
        this.quiz = data;
      },
      (error) => {
        Swal.fire('error', 'error in db', 'error');
      }
    );
  }
}
