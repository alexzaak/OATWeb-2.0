import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsOverviewComponent } from './sms-overview.component';

describe('SmsOverviewComponent', () => {
  let component: SmsOverviewComponent;
  let fixture: ComponentFixture<SmsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
