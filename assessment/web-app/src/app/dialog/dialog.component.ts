import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

    no(){
      this.route.navigateByUrl('/fav');
      window.location.reload();
    }
    yes(){
        localStorage.removeItem('favour');
        this.route.navigateByUrl('/fav');
        window.location.reload();
    }
}
