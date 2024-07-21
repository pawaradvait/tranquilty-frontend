import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseQuizService } from 'src/app/service/course-quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-instruction',
  templateUrl: './course-instruction.component.html',
  styleUrls: ['./course-instruction.component.css'],
})
export class CourseInstructionComponent implements OnInit {
  id = 0;
  quiz = {
    qid: 152,
    active: true,
    title: 'java basic',
    description: 'basic question of java',
    maxmarks: '200',
    numberOfQuestion: 0,
    courseCategory: {
      ccid: 1,
      title: 'java programming',
      description: 'fun with java programming',
    },
  };
  constructor(
    private quzService: CourseQuizService,
    private route: ActivatedRoute
  ) {}

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
