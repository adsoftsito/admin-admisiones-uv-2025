import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestUvWebService } from './services/test-uv-web.service';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Admisiones UV';
  showDeleteButton: boolean = false;

  constructor(
    private readonly testService: TestUvWebService,
    private readonly dialog: MatDialog,
    private readonly snackBar: MatSnackBar
  ) {}

  deleteFirestoreCollection() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Confirmar eliminación',
        message:
          '¿Estás seguro de que deseas eliminar todos los documentos de la base de datos? Esta acción no se puede deshacer.',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.testService
          .clearCollection()
          .then(() => {
            this.snackBar.open('Los documentos han sido eliminados correctamente.', 'Cerrar', {
              duration: 3000,
              panelClass: ['snackbar-success'],
            });
            
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          })
          .catch((error) => {
            this.snackBar.open(
              'Hubo un error al eliminar los documentos: ' + error.message,
              'Cerrar',
              { duration: 4000, panelClass: ['snackbar-error'] }
            );
          });
      }
    });
  }
}
