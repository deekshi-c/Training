import { Component, OnInit } from '@angular/core';
import { OverViewSerService } from '../services/overViewService/over-view-ser.service';
import{ saveAs} from'file-saver' 
@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css'],
})
export class CertificateComponent implements OnInit {
  
  completionDate: any = [];
  joiningDate: any = [];
  name:any;
  val: any;
  certificate: any;
  title: any;
  image:any
  constructor(private service: OverViewSerService) {}

  ngOnInit(): void {
    this.getDetail();
    this.title = sessionStorage.getItem('courseName')
    this.name = localStorage.getItem('name');
    this.certi();

  }
  getDetail(){
    this.service.getProgress().subscribe({
      next: (data) => {
        this.val = data;
        console.log(this.val);
        let sDate = this.val.dateOfCompletion;
        let cDate = this.val.enrolledOn;
        sDate = sDate.substring(0, sDate.indexOf('T'));
        cDate = cDate.substring(0, cDate.indexOf('T'));
        this.completionDate = cDate.split('-');
        this.joiningDate = sDate.split('-');
      },
      error: (err) => {
        console.log(err);
      }
    });       
  }

  certi(){
    this.service.getCertificate().subscribe({
      next:(data)=>{
      this.certificate = data;
      console.log(this.certificate[0].certificate);
      this.image = this.certificate[0].certificate;
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  download(){
    this.service.download(this.image).subscribe({
      next: (data:Blob |MediaSource) => {
        let downUrl = window.URL.createObjectURL(data);
        saveAs(downUrl);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
