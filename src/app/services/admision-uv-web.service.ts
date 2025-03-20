import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { Admision } from '../models/admision.model';

@Injectable({
  providedIn: 'root',
})
export class AdmisionUvWebService {
  private readonly dbPath = '/admisiones';

  admisionRef: AngularFirestoreCollection<Admision>;

  constructor(private readonly db: AngularFirestore) {
    this.admisionRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Admision> {
    return this.admisionRef;
  }

  getByProgram(programaInteres: string): AngularFirestoreCollection<Admision> {
    //return this.db.collection(this.dbPath, ref => ref.where('programaInteres','==', programaInteres )).valueChanges()
    //return this.testsRef.('programaInteres','==', programaInteres)
    return this.db.collection(this.dbPath, (ref) =>
      ref.where('programaInteres', '==', programaInteres)
    );
  }

  create(tutorial: Admision): any {
    return this.admisionRef.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.admisionRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.admisionRef.doc(id).delete();
  }

  clearCollection(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.admisionRef.get().subscribe({
        next: (snapshot) => {
          const batch = this.db.firestore.batch();

          snapshot.forEach((doc) => {
            batch.delete(doc.ref);
          });

          batch
            .commit()
            .then(() => {
              console.log('Todos los documentos han sido eliminados.');
              resolve();
            })
            .catch((error) => {
              console.error('Error al eliminar documentos:', error);
              reject(error);
            });
        },
        error: (error) => {
          console.error('Error al obtener documentos:', error);
          reject(error);
        },
      });
    });
  }
}
