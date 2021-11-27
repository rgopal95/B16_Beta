import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(private mService:MessageService) { }

  showToasterSuccess(){
    this.mService.showSuccess("Data Loading Successful","BookKart.com");
  }

  showToasterError(){
    this.mService.showError("Failed To Load Data","BookKart.com");
  }

  showToasterInfo(){
    this.mService.showInfo("Need Some Information","BookKart.com");
  }

  showToasterWarning(){
    this.mService.showWarning("Do Not Repeat This Again","BookKart.com");
  }
  

  ngOnInit(): void {
  }

}
