import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eligable',
  templateUrl: './eligable.component.html',
  styleUrls: ['./eligable.component.css'],
})
export class EligableComponent implements OnInit {
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

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questionService.getallUsersthatareEligable().subscribe(
      (data: any) => {
        this.solveddataByUser = data;
      },
      (error) => {
        Swal.fire('error', 'error in db', 'error');
      }
    );
  }
}
