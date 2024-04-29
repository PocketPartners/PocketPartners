import { Component , OnInit } from '@angular/core';
import {GroupEntity} from "../../../group/model/group.entity";
import {GroupService} from "../../../group/services/group.service";

@Component({
  selector: 'app-pages',
  templateUrl: './outgoing.component.html',
  styleUrl: './outgoing.component.css'
})
export class OutgoingComponent {
  public groups: GroupEntity[] = [];
  constructor(private groupService: GroupService) { }

  getAllGroups() {
    this.groupService.getAll()
      .subscribe((groups: any) => {
        this.groups = groups;
      });
  }

  ngOnInit() {
    this.getAllGroups();
  }
}
