import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js/auto';
import {PartnerEntity} from "../../model/partnerEntity";
import {PartnerService} from "../../services/Partner.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit{

  data: any;
  dataMonth: PartnerEntity[] = [];
  dataAmount: PartnerEntity[] = [];
  dataColor: any[] = [];

constructor(private pocketService: PartnerService) {
}



  ngOnInit() {

    this.pocketService.getAllChartData().subscribe((res) => {
      this.data = res;
      if (Array.isArray(this.data)) {
        for (let i = 0; i < this.data.length; i++) {
          this.dataMonth.push(this.data[i].month);
          this.dataAmount.push(this.data[i].amount);
          this.dataColor.push(this.data[i].color);
        }
      }

    })
    this.showChart(this.dataMonth, this.dataAmount, this.dataColor)

  }

  showChart(dataMonth: PartnerEntity[], dataAmount: PartnerEntity[], dataColor: any[]) {
    new Chart("myChart", {
      type: 'line',
      data: {
        labels: dataMonth,
        datasets: [{
          label: '# of Money Used',
          data: dataAmount,
          borderWidth: 1,
          borderColor: dataColor,
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

}
