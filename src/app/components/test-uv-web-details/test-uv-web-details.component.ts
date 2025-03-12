import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Test } from 'src/app/models/test.model';
import { TestUvWebService } from 'src/app/services/test-uv-web.service';

@Component({
  selector: 'app-test-uv-web-details',
  templateUrl: './test-uv-web-details.component.html',
  styleUrls: ['./test-uv-web-details.component.css']
})
export class TestUvWebDetailsComponent implements OnInit {
  @Input() test?: Test;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentTest: Test = {
    appPaterno: '',
    appMaterno: '',
    nombre: ''
  };
  message = '';

  constructor(private testUvWebService: TestUvWebService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentTest = { ...this.test };
  }

  updatePublished(status: boolean): void {
    if (this.currentTest.id) {
      this.testUvWebService.update(this.currentTest.id, { published: status })
      .then(() => {
        // this.currentTest.published = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updateTest(): void {
    const data = {
      title: this.currentTest.appPaterno,
      description: this.currentTest.appMaterno
    };

    if (this.currentTest.id) {
      this.testUvWebService.update(this.currentTest.id, data)
        .then(() => this.message = 'The test was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteTest(): void {
    if (this.currentTest.id) {
      this.testUvWebService.delete(this.currentTest.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The test was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}