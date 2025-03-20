import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AdmisionUvWebService } from 'src/app/services/admision-uv-web.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-statistics-admision-uv-web',
  templateUrl: './statistics-admision-uv-web.component.html',
  styleUrls: ['./statistics-admision-uv-web.component.css'],
})
export class StatisticsAdmisionUvWebComponent implements OnInit {
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
    public dialogRef: MatDialogRef<StatisticsAdmisionUvWebComponent>,
    private readonly admisionUvWebService: AdmisionUvWebService
  ) {}

  ngOnInit(): void {
    this.loadStatistics();
  }

  loadStatistics(): void {
    this.admisionUvWebService
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
