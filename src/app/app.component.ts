import { Component } from '@angular/core';
import { ToastService } from './presentation/toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'idleclicker-ui';

  private toastDelay:number = 5000;

  constructor(
    public toastService: ToastService
  ) {}

  public showStandard(toasttxt: string) {
    this.toastService.show(toasttxt, {
      delay: this.toastDelay,
      autohide: true
    });
  }

  showSuccess(toasttxt: string) {
    this.toastService.show(toasttxt, {
      classname: 'bg-success text-light',
      delay: this.toastDelay ,
      autohide: true,
      headertext: 'Success'
    });
  }
  showError(toasttxt: string) {
    this.toastService.show(toasttxt, {
      classname: 'bg-danger text-light',
      delay: this.toastDelay ,
      autohide: true,
      headertext: 'Error!!!'
    });
  }

  showCustomToast(customTpl:any) {
    this.toastService.show(customTpl, {
      classname: 'bg-info text-light',
      delay: this.toastDelay,
      autohide: true
    });
  }
}
