import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseQuestionService } from 'src/app/service/course-question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-add-course-question',
  templateUrl: './admin-add-course-question.component.html',
  styleUrls: ['./admin-add-course-question.component.css'],
})
export class AdminAddCourseQuestionComponent implements OnInit {
  title: any;
  question = {
    content: '',
    op1: '',
    op2: '',
    op3: '',
    op4: '',
    answer: '',
    courseQuiz: {
      qid: 0,
    },
  };

  quizeid!: number;
  constructor(
    private route: ActivatedRoute,
    private questionService: CourseQuestionService
  ) {}

  ngOnInit(): void {
    this.quizeid = this.route.snapshot.params['id'];
    console.log(this.quizeid);
  }
  Questionform() {
    this.question.courseQuiz.qid = this.quizeid;
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
