import { Component } from "@angular/core";
import { User } from "./user";
import { EnrollService } from "./enroll.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  topic = ["AA", "BB", "CC", "DD", "EE", "EF"];
  submitted=false;
  errorMsg="";
  

  constructor(private _enrollService: EnrollService){}

  hasError = true;

  userModel = new User(
    "",
    "email@.com",
    91,
    "",
    "3rd street",
    "",
    "default",
    false
  );

  validate(value: any){
    if(value ==='default'){
      this.hasError=true;
  }
  else {
    this.hasError=false;
  }
  }
  onSubmit(){
    this.submitted=true;
    this._enrollService.enrol(this.userModel)
        .subscribe(
          data => console.log("Success", data),
          error => this.errorMsg=error.statusText
    )  
}
}
function data(data: any) {
  throw new Error("Function not implemented.");
}

