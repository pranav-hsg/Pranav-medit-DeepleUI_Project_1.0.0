import { DataPopulateService } from './../data-populate.service';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {  parentSlideDataI, studentSlideDataI } from '.././section-data';
declare var ScrollOut: any;
@Component({
  selector: 'app-carousel',
  templateUrl: './app.caurosel.component.html',
  styleUrls: ['./app.caurosel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class AppCarouselComponent  {
  so:any;
  parentSlideData:parentSlideDataI[];
  studentSlideData:studentSlideDataI[];
  constructor(config: NgbCarouselConfig,private slideDataService: DataPopulateService) {
    // customize default values of carousels used by this component tree
    config.interval = 1000000;
    config.wrap = false;
    config.keyboard = true;
    config.wrap=true;
    config.pauseOnHover = false;
  }

  ngAfterViewInit() {
    this.so = ScrollOut({
      targets: '.div__CauroselSlideWrapper',
      threshold:0.1
    });
  }
  ngOnDestroy() {
    this.so.teardown();
  }
  ngOnInit() {
    this.parentSlideData= this.slideDataService.getParentSlideData();
    this.studentSlideData= this.slideDataService.getStudentSlideData();
  }
}
