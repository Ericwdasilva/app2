import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../shared/voiture.service';

@Component({
  selector: 'app-liste-voitures',
  templateUrl: './liste-voitures.component.html',
  styleUrls: ['./liste-voitures.component.css']
})
export class ListeVoituresComponent implements OnInit {
  voitures;
  constructor( private vs:VoitureService) { }

  ngOnInit() {
    this.voitures = this.vs.getVoitures();
  }

}
