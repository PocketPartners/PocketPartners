import { Component, OnInit } from '@angular/core';
import { PartnerEntity } from "../../model/partnerEntity";
import { PartnerService } from "../../services/Partner.service";
import {ExpensesEntity} from "../../../expenses/model/expenses.entity";
import {ExpensesService} from "../../../expenses/services/expenses.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  partner: PartnerEntity | undefined;
  userId: number = 151; // Aquí defines el ID del usuario que quieres obtener
  expenses: ExpensesEntity[] = [];

  constructor(private partnerService: PartnerService, private expensesService: ExpensesService) { }

  ngOnInit(): void {
    this.getPartnerById(this.userId);
    this.getExpenses();
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

  getExpenses(): void {
    this.expensesService.getExpenses()
      .subscribe(
        (expenses: ExpensesEntity[]) => {
          // Filtrar los gastos del usuario especificado
          // @ts-ignore
          this.expenses = expenses.filter(expense => expense.userId !== this.userId);
          console.log('Gastos obtenidos:', this.expenses);
        },
        (error) => {
          console.error('Error al obtener gastos:', error);
        }
      );
  }
}
