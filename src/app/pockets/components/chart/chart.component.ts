import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import {ExpensesService} from "../../../expenses/services/expenses.service";


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  dataMonth: string[] = [];
  dataAmount: number[] = [];
  dataColor: string[] = [];

  constructor(private expensesService: ExpensesService) {}

  ngOnInit() {
    const userId = 1; // ID del usuario para excluir, reemplázalo con el ID real o pasa el ID como un parámetro al componente.

    this.expensesService.getExpensesByUserId(userId).subscribe((expenses) => {
      expenses.forEach(expense => {
        if (expense.created_at) { // Comprueba si created_at tiene un valor definido
          this.dataMonth.push(this.formatDate(expense.created_at));
          this.dataAmount.push(expense.amount);
          this.dataColor.push(this.getRandomColor());
        }
      });
      this.showChart();
    });
  }

  showChart() {
    new Chart('myChart', {
      type: 'line',
      data: {
        labels: this.dataMonth,
        datasets: [{
          label: '# of Money Used',
          data: this.dataAmount,
          borderWidth: 1,
          borderColor: this.dataColor,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  formatDate(date: Date): string {
    // Aquí implementa tu lógica de formato de fecha.
    return date.toISOString(); // Esto es solo un ejemplo, reemplázalo con tu propia lógica.
  }

  getRandomColor(): string {
    // Genera un color aleatorio hexadecimal.
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}
