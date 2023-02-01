import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-close-test',
  templateUrl: './close-test.component.html',
  styleUrls: ['./close-test.component.css'],
})
export class CloseTestComponent implements OnInit {
  chose: any;
  notchose: any;
  constructor(public dialogRef: MatDialogRef<CloseTestComponent>,
    private router:Router) {}

  ngOnInit(): void {}
  cancel() {
    this.chose = true;
    this.notchose = false;
  }
  quit() {
    this.chose = false;
    this.notchose = true;
    this.dialogRef.close({ data: 'done' });
    
  }
}