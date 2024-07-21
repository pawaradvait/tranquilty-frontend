import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseQuestionService } from 'src/app/service/course-question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-course-question',
  templateUrl: './admin-course-question.component.html',
  styleUrls: ['./admin-course-question.component.css'],
})
export class AdminCourseQuestionComponent implements OnInit {
  quizeid: any;
  title: any;

  questions = [
    {
      qid: 1,
      content: 'what is oops',
      op1: 'funt',
      op2: 'method',
      op3: 'interface',
      op4: 'objects oriented programming',
      answer: 'objects oriented programming',
      CourseQuiz: {
        qid: 117,
      },
    },
  ];
  constructor(
    private questionService: CourseQuestionService,
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
