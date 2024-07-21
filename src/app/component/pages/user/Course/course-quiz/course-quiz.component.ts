import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseQuizService } from 'src/app/service/course-quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-quiz',
  templateUrl: './course-quiz.component.html',
  styleUrls: ['./course-quiz.component.css'],
})
export class CourseQuizComponent implements OnInit {
  quiz = [
    {
      qid: 0,
      title: 'java quiz',
      description: 'Do it with fun',
      maxMarks: '200',
      nosOfQuestion: '2',
      active: false,
      CourseCategory: {
        title: '',
      },
    },
    {
      qid: 0,

      title: 'java quiz',
      description: 'Do it with fun',
      maxMarks: '200',
      nosOfQuestion: '2',
    },
  ];
  catid: any;
  cattitle: any;
  constructor(
    private quizService: CourseQuizService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.catid = this.route.snapshot.params['id'];
    this.cattitle = this.route.snapshot.params['title'];
    console.log(this.catid);

    this.quizService.getQuizByCategoryId(this.catid).subscribe(
      (data: any) => {
        this.quiz = data;
      },
      (error) => {
        Swal.fire('error');

        console.log(error);
      }
    );
  }
}
