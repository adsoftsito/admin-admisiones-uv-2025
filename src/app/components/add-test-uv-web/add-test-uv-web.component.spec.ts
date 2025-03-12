import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestUvWebComponent } from './add-test-uv-web.component';

describe('AddTestUvWebComponent', () => {
  let component: AddTestUvWebComponent;
  let fixture: ComponentFixture<AddTestUvWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTestUvWebComponent]
    });
    fixture = TestBed.createComponent(AddTestUvWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
