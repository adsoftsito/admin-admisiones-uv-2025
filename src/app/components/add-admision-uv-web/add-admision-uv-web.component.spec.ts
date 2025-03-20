import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdmisionUvWebComponent } from './add-admision-uv-web.component';

describe('AddAdmisionUvWebComponent', () => {
  let component: AddAdmisionUvWebComponent;
  let fixture: ComponentFixture<AddAdmisionUvWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAdmisionUvWebComponent]
    });
    fixture = TestBed.createComponent(AddAdmisionUvWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
