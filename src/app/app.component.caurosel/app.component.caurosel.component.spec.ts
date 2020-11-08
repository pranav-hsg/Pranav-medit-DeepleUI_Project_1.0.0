import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCarouselComponent } from './app.component.caurosel.component';

describe('App.Component.CauroselComponent', () => {
  let component: AppCarouselComponent;
  let fixture: ComponentFixture<AppCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
