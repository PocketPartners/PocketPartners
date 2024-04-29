import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { GroupEntity } from '../../model/group.entity';

@Component({
  selector: 'app-page-group',
  templateUrl: './page-group.component.html',
  styleUrl: './page-group.component.css'
})
export class PageGroupComponent implements OnInit {
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
