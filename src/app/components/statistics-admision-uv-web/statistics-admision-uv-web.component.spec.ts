import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsAdmisionUvWebComponent } from './statistics-admision-uv-web.component';

describe('StatisticsTestUvWebComponent', () => {
  let component: StatisticsAdmisionUvWebComponent;
  let fixture: ComponentFixture<StatisticsAdmisionUvWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticsAdmisionUvWebComponent]
    });
    fixture = TestBed.createComponent(StatisticsAdmisionUvWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
