import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourceCertificateService } from 'src/app/service/cource-certificate.service';
import { CourceSolvedInfoService } from 'src/app/service/cource-solved-info.service';
import { CourseQuestionService } from 'src/app/service/course-question.service';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-question',
  templateUrl: './course-question.component.html',
  styleUrls: ['./course-question.component.css'],
})
export class CourseQuestionComponent implements OnInit {
  qid = 0;
  isSubmit = false;
  marksobtained = 0;
  correctAnswer = 0;
  attempted = 0;

  solvedInfp = {
    attempted: 0,
    correctAnswer: 0,
    marksObtained: 0,
    eligable: false,
    courseQuiz: {
      qid: 0,
    },
    user: {
      userid: 0,
    },
  };

  certificate = {
    marksObtained: 100,
    user: {
      userid: 52,
    },
    courseQuiz: {
      qid: 103,
    },
  };

  questions = [
    {
      qid: 1,
      content: 'what is oops',
      op1: 'funt',
      op2: 'method',
      op3: 'interface',
      op4: 'objects oriented programming',
      answer: 'objects oriented programming',
      givenAnswer: '',
      courseQuiz: {
        qid: 117,
        title: '',
        maxMarks: 0,
        nosOfQuestion: 0,
      },
    },
  ];
  tracker = false;

  constructor(
    private route: ActivatedRoute,
    private questionService: CourseQuestionService,
    private courseSolvedInfo: CourceSolvedInfoService,
    private loginService: LoginService,
    private certificatedb: CourceCertificateService
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
        let eligables;
        if (this.marksobtained >= 60) {
          this.solvedInfp = {
            attempted: this.attempted,
            correctAnswer: this.correctAnswer,
            marksObtained: this.marksobtained,
            eligable: true,
            courseQuiz: {
              qid: this.qid,
            },
            user: {
              userid: userid,
            },
          };
        } else {
          this.solvedInfp = {
            attempted: this.attempted,
            correctAnswer: this.correctAnswer,
            marksObtained: this.marksobtained,
            eligable: false,
            courseQuiz: {
              qid: this.qid,
            },
            user: {
              userid: userid,
            },
          };
        }

        if (this.solvedInfp.eligable) {
          this.certificate = {
            marksObtained: this.solvedInfp.marksObtained,
            user: {
              userid: this.solvedInfp.user.userid,
            },
            courseQuiz: {
              qid: this.solvedInfp.courseQuiz.qid,
            },
          };
          this.certificatedb.addCertificate(this.certificate).subscribe(
            (data) => {
              Swal.fire('Sucess', 'retrieve your certificate', 'success');
            },
            (error) => {
              Swal.fire('error', 'error occur in db', 'error');
            }
          );
        }

        this.courseSolvedInfo.addCourseSolvedInfo(this.solvedInfp).subscribe(
          (data) => {
            this.tracker = true;
            Swal.fire(
              'Success',
              'your Record is saved Successfully',
              'success'
            );
          },
          (error) => {
            this.tracker = false;
            Swal.fire({
              title: 'Error',
              text: 'this Quiz you have already solve So,Try solving another quiz you have not solved',
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
