import { Component, OnInit } from '@angular/core';
import { GroupEntity } from "../../../group/model/group.entity";
import { GroupService } from "../../../group/services/group.service";
import {GroupOperationsService} from "../../../group/services/group-operations.service";

@Component({
  selector: 'app-pages',
  templateUrl: './incoming.component.html',
  styleUrl: './incoming.component.css'
})
export class IncomingComponent {
  public groups: GroupEntity[] = [];
  public groupExpenses: any = {};
  constructor(private groupService: GroupService, private groupOperations: GroupOperationsService) { }

  getAllGroups() {
    this.groupService.getAll()
      .subscribe((groups: any) => {
        this.groups = groups;
      });
  }

  getAllPayments() {
    this.groupOperations.getAll()
      .subscribe((groups: any) => {
        this.groups = groups;
      });
  }

  ngOnInit() {
    this.getAllGroups();
  }
}
