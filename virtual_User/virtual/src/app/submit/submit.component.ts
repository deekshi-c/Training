import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../services/test/test.service';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css'],
})
export class SubmitComponent implements OnInit {
  remTime: any;
  counter: any;
  pause: any;
  chose: any;
  notchose: any;
  answers: any;
  constructor(
    private service: TestService,
    private router: Router,
    public dialogRef: MatDialogRef<SubmitComponent>
  ) {}

  ngOnInit(): void {
    this.answers = sessionStorage.getItem('answers');
    console.log(this.answers);
    this.remTime = sessionStorage.getItem('timer');
  }
  submitTest() {
    this.chose = true;
    this.notchose = false;
    this.answers = JSON.parse(this.answers);

    this.service.submit().subscribe({
      next: (data) => {
        console.log(data);
        let show: any = data;
        confirm(show.message);
        if (show.message == 'You have passed this test') {
          this.router.navigate(['/congrats']);
        } else {
          this.router.navigate(['/overview']);
        }
      },
      error: (e) => {},
    });
    this.dialogRef.close({ data: 'done' });
  }
}
