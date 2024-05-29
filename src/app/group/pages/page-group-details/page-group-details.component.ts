import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../../services/group.service';
import { GroupEntity } from '../../model/group.entity';
import { Chart, ChartConfiguration } from 'chart.js/auto';

@Component({
  selector: 'app-page-group-details',
  templateUrl: './page-group-details.component.html',
  styleUrls: ['./page-group-details.component.css']
})
export class PageGroupDetailsComponent implements OnInit {
  idOfUser = 1;
  id: number = 0;
  group: GroupEntity = new GroupEntity();
  amountOfPayToYou: number = 0;
  amountEachMemberShouldPay: number = 0;
  paidMembers: Set<number> = new Set<number>(); // Set to store paid member IDs

  pieChart!: Chart<"pie", number[], string>;

  constructor(private route: ActivatedRoute, private groupService: GroupService) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.url[1].path, 10);
    console.log(this.id);

    if (this.id) {
      this.groupService.getById(this.id).subscribe((group: any) => {
        this.group = group;
        console.log(this.group);
        this.calculateAmountToYou();
        this.calculateAmountEachMemberShouldPay();
        this.updatePieChart();
      });
    }
  }

  calculateAmountToYou() {
    let totalAmount = 0;
    this.group.paymentHistory.forEach((payment: any) => {
      if (payment.paidBy === this.idOfUser) {
        totalAmount += payment.amount;
      }
    });
    this.amountOfPayToYou = totalAmount;
    console.log(this.amountOfPayToYou);
  }

  calculateAmountEachMemberShouldPay() {
    const numberOfMembers = this.group.members.length;
    if (numberOfMembers > 0) {
      this.amountEachMemberShouldPay = this.amountOfPayToYou / numberOfMembers;
    }
  }

  togglePaidMember(memberId: number) {
    if (this.paidMembers.has(memberId)) {
      this.paidMembers.delete(memberId);
    } else {
      this.paidMembers.add(memberId);
    }
    this.updatePieChart();
  }

  isMemberPaid(memberId: number): boolean {
    return this.paidMembers.has(memberId);
  }

  updatePieChart() {
    const numberOfPaidMembers = this.paidMembers.size;
    const numberOfUnpaidMembers = this.group.members.length - numberOfPaidMembers;

    if (this.pieChart) {
      this.pieChart.destroy(); // Destroy existing chart to prevent memory leaks
    }

    const canvas = document.getElementById('pieChart') as HTMLCanvasElement;
    this.pieChart = new Chart(canvas, {
      type: 'pie',
      data: {
        labels: ['Pendiente', 'Pagado'],
        datasets: [{
          data: [numberOfUnpaidMembers, numberOfPaidMembers],
          backgroundColor: ['#C682FFE4', '#36A2EB'],
          hoverBackgroundColor: ['#C682FFE4', '#36A2EB']
        }]
      },
      options: {}
    });
  }
}
