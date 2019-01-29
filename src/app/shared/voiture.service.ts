import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  constructor(private firestore: AngularFirestore) { }
  constructor( private angularfd:AngularFireDatabase) { }
getVoitures(){
  return this.angularfd.list('voitures').valueChanges();
}
}