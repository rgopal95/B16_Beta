import { Component, OnInit } from '@angular/core';
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'app-toaster-message',
  templateUrl: './toaster-message.component.html',
  styleUrls: ['./toaster-message.component.scss'],
})
export class ToasterMessageComponent implements OnInit {
  constructor(private toastService: ToastService) {}

  showToasterSuccess() {
    this.toastService.showSuccess('Successful Data', 'BookCart.com');
  }

  showToasterError() {
    this.toastService.showError('Wrong Data', 'BookCart.com');
  }

  showToasterInfo() {
    this.toastService.showInfo('Required Information', 'BookCart.com');
  }

  showToasterWarning() {
    this.toastService.showWarning('Warning Message', 'BookCart.com');
  }

  ngOnInit(): void {}
}
