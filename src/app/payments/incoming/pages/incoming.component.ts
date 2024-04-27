import {Component, OnInit} from '@angular/core';
import {GroupEntity} from "../../../group/model/group.entity";
import {GroupService} from "../../../group/services/group.service";

@Component({
  selector: 'app-pages',
  templateUrl: './incoming.component.html',
  styleUrl: './incoming.component.css'
})
export class IncomingComponent {
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
