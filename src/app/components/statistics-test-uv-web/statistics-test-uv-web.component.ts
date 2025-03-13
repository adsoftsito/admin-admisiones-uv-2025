import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TestUvWebService } from 'src/app/services/test-uv-web.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-statistics-test-uv-web',
  templateUrl: './statistics-test-uv-web.component.html',
  styleUrls: ['./statistics-test-uv-web.component.css'],
})
export class StatisticsTestUvWebComponent implements OnInit {
  displayedColumns: string[] = ['carrera', 'cantidad'];

  careerCounts: Record<string, number> = {
    lae: 0,
    conta: 0,
    gestion: 0,
    isw: 0,
    ltio: 0,
    cspol: 0,
  };

  careerNames: Record<string, string> = {
    lae: 'Lic. en Administración de Empresas',
    conta: 'Lic. en Contaduría',
    gestion: 'Gestión y Dirección de Negocios',
    isw: 'Ing. de Software',
    ltio: 'Lic. Tecnologías de la Información en las Org.',
    cspol: 'Lic. en Ciencias Políticas y Gestión Pública',
  };

  constructor(
    public dialogRef: MatDialogRef<StatisticsTestUvWebComponent>,
    private readonly testUvWebService: TestUvWebService
  ) {}

  ngOnInit(): void {
    this.loadStatistics();
  }

  loadStatistics(): void {
    this.testUvWebService
      .getAll()
      .snapshotChanges()
      .pipe(map((changes) => changes.map((c) => c.payload.doc.data())))
      .subscribe((tests: any[]) => {
        Object.keys(this.careerCounts).forEach(
          (key) => (this.careerCounts[key] = 0)
        );

        tests.forEach((test) => {
          if (this.careerCounts.hasOwnProperty(test.programaInteres)) {
            this.careerCounts[test.programaInteres]++;
          }
        });
      });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
