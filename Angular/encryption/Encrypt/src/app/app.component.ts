import { Component } from '@angular/core';
import * as cryptojs from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Encrypt';
  public result:any;
  public plain:any;
  public key:any;
  public decrypt:any;
  public encrypt:any;
  public delay:any;

  encr(){
    this.encrypt= cryptojs.AES.encrypt(this.plain.trim(),this.key.trim()).toString();
  }
  decr(){
    this.decrypt= cryptojs.AES.decrypt(this.encrypt.trim(),this.key.trim()).toString(cryptojs.enc.Utf8);
  }

  clickone(count: number){
    for(let i=0;i<count;i++){
      console.log(i);
    }
  }
  clicktwo(data: any){
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./app.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        this.result=data;
      };
      // worker.postMessage(this.result);
    } 
  }

}

// if (typeof Worker !== 'undefined') {
//   // Create a new
//   const worker = new Worker(new URL('./app.worker', import.meta.url));
//   worker.onmessage = ({ data }) => {
//     console.log(`page got message: ${data}`);
//   };
//   worker.postMessage('hello');
// } else {
//   // Web Workers are not supported in this environment.
//   // You should add a fallback so that your program still executes correctly.
// }