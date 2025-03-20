import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisionUvWebListComponent } from './admision-uv-web-list.component';

describe('AdmisionUvWebListComponent', () => {
  let component: AdmisionUvWebListComponent;
  let fixture: ComponentFixture<AdmisionUvWebListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmisionUvWebListComponent]
    });
    fixture = TestBed.createComponent(AdmisionUvWebListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
