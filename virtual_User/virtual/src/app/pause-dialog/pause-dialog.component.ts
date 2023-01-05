import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pause-dialog',
  templateUrl: './pause-dialog.component.html',
  styleUrls: ['./pause-dialog.component.css'],
})
export class PauseDialogComponent implements OnInit {
  pauseTime: any;

  constructor() {}

  ngOnInit(): void {
    this.pauseTime = sessionStorage.getItem('pauseTime');
    this.pauseTime = (this.pauseTime / 60).toFixed(2);
  }
}