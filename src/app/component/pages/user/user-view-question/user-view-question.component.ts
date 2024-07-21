import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-view-question',
  templateUrl: './user-view-question.component.html',
  styleUrls: ['./user-view-question.component.css'],
})
export class UserViewQuestionComponent implements OnInit {
  qid = 0;
  isSubmit = false;
  marksobtained = 0;
  correctAnswer = 0;
  attempted = 0;

  questions = [
    {
      quesid: 1,
      content: 'what is oops',
      op1: 'funt',
      op2: 'method',
      op3: 'interface',
      op4: 'objects oriented programming',
      answer: 'objects oriented programming',
      givenAnswer: '',
      qid: {
        qid: 117,
        title: '',
        maxmarks: 0,
        numberOfQuestion: 0,
      },
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['id'];
    this.questionService
      .getQuestionByQuizeId(this.qid)
      .subscribe((data: any) => {
        this.questions.forEach((q) => {
          q['givenAnswer'] = '';
        });

        this.questions = data;
      });
  }

  formofquestions() {
    Swal.fire({
      title: 'Do you want to Submit',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      cancelButtonColor: 'red',
      confirmButtonColor: 'green',
      icon: 'info',
    }).then((e) => {
      if (e.isConfirmed) {
        this.isSubmit = true;
        console.log(this.questions);
        let singlequestion = 100 / this.questions.length;
        this.questions.forEach((q) => {
          if (q.answer == q.givenAnswer) {
            this.correctAnswer++;
          }
          if (q.givenAnswer) {
            this.attempted++;
          }
        });
        this.marksobtained = this.correctAnswer * singlequestion;
        console.log(this.correctAnswer);
        console.log(this.attempted);
        console.log(this.marksobtained);

        let userid = this.loginService.getUser().userid;
        console.log(userid);
        let eligable;
        if (this.marksobtained >= 60) {
          eligable = true;
        }
        let solvedInfp = {
          attempted: this.attempted,
          correctAnswer: this.correctAnswer,
          marksObtained: this.marksobtained,
          eligable: eligable,
          quiz: {
            qid: this.qid,
          },
          user: {
            userid: userid,
          },
        };

        this.questionService.addSolvedInfo(solvedInfp).subscribe(
          (data) => {
            Swal.fire(
              'Success',
              'your Record is saved Successfully',
              'success'
            );
          },
          (error) => {
            Swal.fire({
              title: 'Error',
              text: 'Try solving another quiz you have not solved',
              icon: 'error',
              confirmButtonText: 'Okay',
              confirmButtonColor: 'blue',
            });
            console.log(error);
          }
        );
      }
    });
  }
}
