import { Component, OnInit } from '@angular/core';
import {PartnerEntity} from "../../model/partnerEntity";
import {PartnerService} from "../../services/Partner.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  partner: PartnerEntity | undefined;
  userId: number = 1; // Aquí defines el ID del usuario que quieres obtener

  constructor(private partnerService: PartnerService) { }

  ngOnInit(): void {
    this.getPartnerById(this.userId);
  }

  getPartnerById(id: number): void {
    this.partnerService.getPartnerById(id)
      .subscribe(
        (partner: PartnerEntity) => {
          this.partner = partner;
          console.log('Usuario obtenido:', this.partner);
        },
        (error) => {
          console.error('Error al obtener usuario por ID:', error);
        }
      );
  }
}
