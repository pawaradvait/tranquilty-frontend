import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-internship-result',
  templateUrl: './internship-result.component.html',
  styleUrls: ['./internship-result.component.css'],
})
export class InternshipResultComponent implements OnInit {
  solveddataByUser = [
    {
      id: 707,
      marksObtained: null,
      correctAnswer: null,
      attempted: '10',
      eligable: false,
      createdAt: '2024-07-15T12:31:07.6435737',
      quiz: {
        qid: 453,
        active: false,
        description: null,
        maxMarks: 0,
        nosOfQuestion: 0,
        title: null,
        category: null,
      },
      user: {
        userid: 252,
        firstName: null,
        lastName: null,
        email: null,
        username: null,
        password: null,
        enable: null,
        phonenos: null,
        photoUser: null,
        authorities: [],
        enabled: true,
        credentialsNonExpired: true,
        accountNonExpired: true,
        accountNonLocked: true,
      },
    },
  ];

  userid_current: any;
  constructor(
    private questionService: QuestionService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    let userid_current = this.loginService.getUser().userid;
    this.questionService.getSolvedInfoBYUserId(userid_current).subscribe(
      (data: any) => {
        this.solveddataByUser = data;
      },
      (error) => {
        Swal.fire('error', 'error db is not connected', 'error');
      }
    );
  }
}
