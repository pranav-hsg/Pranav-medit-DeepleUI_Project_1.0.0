import { DataPopulateService } from './data-populate.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { sectionBgVideoI, featuredCoursesI} from './section-data';
declare var Rellax: any;
declare var ScrollOut: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','./app.component.glitch.scss']
})
export class AppComponent {
  @ViewChild('glitchWrapper')glWrp : ElementRef;
  sectionBgVideo:sectionBgVideoI;
  featuredCourses:featuredCoursesI[] | null;
  doGlitch1:boolean = false;
  doGlitch2:boolean = false;
  so:any;
  title = 'DeepleUI';
  videoSettings={
    muted:true,
    loop:true,
    playsinline:true,
    autoplay:true
  }

  constructor(private dataPopulateService:DataPopulateService){}
  glitchOnce(){
    this.doGlitch1 = true;
    setTimeout(() => {
      this.doGlitch1 = false;
      this.doGlitch2 = true;
    }, 2000);
    setTimeout(() => {
      this.doGlitch2 = false;
    }, 4000);
  }
  ngAfterViewInit() {
    this.so = ScrollOut({
      targets: '.div__featureCard,#headingFeature,.footer__info',
      threshold:0.1
    });
  }

  ngOnDestroy() {
    this.so.teardown();
  }
  ngOnInit() {
    var rellax = new Rellax('.rellax');
    this.sectionBgVideo = this.dataPopulateService.getSectionBgVideo();
    this.featuredCourses=this.dataPopulateService.getFeaturedCourses()
    this.glitchOnce();
    // this.glWrp.nativeElement
  }
}
