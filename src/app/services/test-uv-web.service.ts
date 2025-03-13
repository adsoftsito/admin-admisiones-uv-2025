import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { Test } from '../models/test.model';

@Injectable({
  providedIn: 'root',
})
export class TestUvWebService {
  private dbPath = '/tests';

  testsRef: AngularFirestoreCollection<Test>;

  constructor(private db: AngularFirestore) {
    this.testsRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Test> {
    return this.testsRef;
  }

  getByProgram(programaInteres: string): AngularFirestoreCollection<Test> {
    //return this.db.collection(this.dbPath, ref => ref.where('programaInteres','==', programaInteres )).valueChanges()
    //return this.testsRef.('programaInteres','==', programaInteres)
    return this.db.collection(this.dbPath, (ref) =>
      ref.where('programaInteres', '==', programaInteres)
    );
  }

  create(tutorial: Test): any {
    return this.testsRef.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.testsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.testsRef.doc(id).delete();
  }

  clearCollection(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.testsRef.get().subscribe({
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
