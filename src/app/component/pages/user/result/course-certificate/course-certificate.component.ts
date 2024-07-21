import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourceCertificateService } from 'src/app/service/cource-certificate.service';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

declare function download(): any;

@Component({
  selector: 'app-course-certificate',
  templateUrl: './course-certificate.component.html',
  styleUrls: ['./course-certificate.component.css'],
})
export class CourseCertificateComponent implements OnInit {
  userid: any;
  qid: any;

  certificate = {
    id: '0e62e9d9-f18e-46f8-b47c-947e846001c4',
    marksObtained: '100',
    user: {
      userid: 52,
      firstName: 'advait',
      lastName: 'pawar',
      email: 'pawaradvait2003@gmail.com',
    },
    courseQuiz: {
      qid: 103,
      active: true,
      description: 'as',
      maxMarks: 100,
      nosOfQuestion: 10,
      title: 'tetser',
      courseCategory: {
        ccid: 153,
        title: 'python programming',
      },
    },
  };
  constructor(
    private LoginServie: LoginService,
    private courseCertrificate: CourceCertificateService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    download();
    this.qid = this.router.snapshot.params['id'];
    this.userid = this.LoginServie.getUser().userid;
    console.log(this.userid);
    console.log(this.qid);
    this.courseCertrificate.getCertificate(this.userid, this.qid).subscribe(
      (data: any) => {
        this.certificate = data;
        console.log(this.certificate);
      },
      (error) => {
        console.log(error);
        Swal.fire('error', 'Some error occur', 'error');
      }
    );
  }
}
