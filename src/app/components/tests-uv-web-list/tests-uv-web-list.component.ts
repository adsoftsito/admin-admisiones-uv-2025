import { Component, OnInit } from '@angular/core';
import { TestUvWebService } from 'src/app/services/test-uv-web.service';
import { map } from 'rxjs/operators';
import { Test } from 'src/app/models/test.model';

@Component({
  selector: 'app-tests-uv-web-list',
  templateUrl: './tests-uv-web-list.component.html',
  styleUrls: ['./tests-uv-web-list.component.css']
})
export class TestsUvWebListComponent implements OnInit {
  tests?: Test[];
  currentTest?: Test;
  currentIndex = -1;
  title = '';
  programaInteres = '';
  n = 0;

  constructor(private testUvWebService: TestUvWebService) { }

  ngOnInit(): void {
    //this.retrieveTestsByProgram('gestion');
  }

  refreshList(): void {
    this.currentTest = undefined;
    this.currentIndex = -1;
    //this.retrieveTests();
  }

  retrieveTestsByProgram(): void {
    //lert(this.programaInteres)
    this.testUvWebService.getByProgram(this.programaInteres).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.tests = data;
      this.n = this.tests.length;
    });
  }


  retrieveTests(): void {
    this.testUvWebService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.tests = data;
    });
  }

  setActiveTest(test: Test, index: number): void {
    this.currentTest = test;
    this.currentIndex = index;
  }
}