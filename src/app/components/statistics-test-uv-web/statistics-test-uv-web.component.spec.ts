import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsTestUvWebComponent } from './statistics-test-uv-web.component';

describe('StatisticsTestUvWebComponent', () => {
  let component: StatisticsTestUvWebComponent;
  let fixture: ComponentFixture<StatisticsTestUvWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticsTestUvWebComponent]
    });
    fixture = TestBed.createComponent(StatisticsTestUvWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
