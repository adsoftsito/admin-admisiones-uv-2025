import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsUvWebListComponent } from './tests-uv-web-list.component';

describe('TestsUvWebListComponent', () => {
  let component: TestsUvWebListComponent;
  let fixture: ComponentFixture<TestsUvWebListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestsUvWebListComponent]
    });
    fixture = TestBed.createComponent(TestsUvWebListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
