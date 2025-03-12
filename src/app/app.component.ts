import { Component } from '@angular/core';
import { TestUvWebService } from './services/test-uv-web.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Admisiones UV';
  showDeleteButton: boolean = false;

  constructor(private readonly testService: TestUvWebService) {}

  deleteFirestoreCollection() {
    const isConfirmed = window.confirm(
      '¿Estás seguro de que deseas eliminar todos los documentos de la base de datos? Esta acción no se puede deshacer.'
    );

    if (isConfirmed) {
      new Promise<void>((resolve, reject) => {
        try {
          this.testService.clearCollection();
          resolve();
        } catch (error) {
          reject(error);
        }
      })
        .then(() => {
          window.alert('Los documentos han sido eliminados correctamente.');
          window.location.reload();
        })
        .catch((error) => {
          window.alert(
            'Hubo un error al eliminar los documentos: ' + error.message
          );
        });
    }
  }
}
