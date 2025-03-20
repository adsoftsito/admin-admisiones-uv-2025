import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisionUvWebDetailsComponent } from './admision-uv-web-details.component';

describe('AdmisionUvWebDetailsComponent', () => {
  let component: AdmisionUvWebDetailsComponent;
  let fixture: ComponentFixture<AdmisionUvWebDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmisionUvWebDetailsComponent]
    });
    fixture = TestBed.createComponent(AdmisionUvWebDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
