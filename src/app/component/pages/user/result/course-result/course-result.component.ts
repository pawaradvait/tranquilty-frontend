import { Component, OnInit } from '@angular/core';
import { CourceSolvedInfoService } from 'src/app/service/cource-solved-info.service';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-result',
  templateUrl: './course-result.component.html',
  styleUrls: ['./course-result.component.css'],
})
export class CourseResultComponent implements OnInit {
  solveddataByUser = [
    {
      id: 707,
      marksObtained: null,
      correctAnswer: null,
      attempted: '10',
      eligable: false,
      createdAt: '2024-07-15T12:31:07.6435737',
      courseQuiz: {
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
    private questionService: CourceSolvedInfoService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    let userid_current = this.loginService.getUser().userid;
    this.questionService.getCourseSolvedInfoByUserid(userid_current).subscribe(
      (data: any) => {
        this.solveddataByUser = data;
      },
      (error) => {
        Swal.fire('error', 'error db is not connected', 'error');
      }
    );
  }
}
