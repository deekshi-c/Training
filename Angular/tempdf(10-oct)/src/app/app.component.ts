import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topic =['AA','BB','CC','DD','EE','EF'];

  userModel = new User('','email@.com',91,'','3rd street','','',true);
}
