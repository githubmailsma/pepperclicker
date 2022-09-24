import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bouncer',
  templateUrl: './bouncer.component.html',
  styleUrls: ['./bouncer.component.scss']
})
export class BouncerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  OnHotPepperClick() {
    console.log("Clicked on hot pepper!");
  }

}
