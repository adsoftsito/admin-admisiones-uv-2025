import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUvWebDetailsComponent } from './test-uv-web-details.component';

describe('TestUvWebDetailsComponent', () => {
  let component: TestUvWebDetailsComponent;
  let fixture: ComponentFixture<TestUvWebDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestUvWebDetailsComponent]
    });
    fixture = TestBed.createComponent(TestUvWebDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
