import { Component, OnInit } from '@angular/core';
import { TestUvWebService } from 'src/app/services/test-uv-web.service';
import { map } from 'rxjs/operators';
import { Test } from 'src/app/models/test.model';
import { MatDialog } from '@angular/material/dialog';
import { StatisticsTestUvWebComponent } from 'src/app/components/statistics-test-uv-web/statistics-test-uv-web.component';

@Component({
  selector: 'app-tests-uv-web-list',
  templateUrl: './tests-uv-web-list.component.html',
  styleUrls: ['./tests-uv-web-list.component.css'],
})
export class TestsUvWebListComponent implements OnInit {
  tests?: Test[];
  currentTest?: Test;
  currentIndex = -1;
  title = '';
  programaInteres = '';
  n = 0;

  constructor(
    private readonly testUvWebService: TestUvWebService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    //this.retrieveTestsByProgram('gestion');
  }

  openStatsDialog(): void {
    this.dialog.open(StatisticsTestUvWebComponent, {
      width: '80%',
      maxWidth: '600px',
      height: '80%',
      maxHeight: '500px',
      panelClass: 'custom-dialog',
      autoFocus: false
    });
  }

  refreshList(): void {
    this.currentTest = undefined;
    this.currentIndex = -1;
    //this.retrieveTests();
  }

  retrieveTestsByProgram(): void {
    //lert(this.programaInteres)
    this.testUvWebService
      .getByProgram(this.programaInteres)
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.tests = data;
        this.n = this.tests.length;
      });
  }

  retrieveTests(): void {
    this.testUvWebService
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.tests = data;
      });
  }

  setActiveTest(test: Test, index: number): void {
    this.currentTest = test;
    this.currentIndex = index;
  }
}
