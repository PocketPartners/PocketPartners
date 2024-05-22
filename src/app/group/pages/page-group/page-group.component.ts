import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { GroupEntity } from '../../model/group.entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-group',
  templateUrl: './page-group.component.html',
  styleUrl: './page-group.component.css'
})
export class PageGroupComponent implements OnInit {
  public groups: GroupEntity[] = [];
  constructor(private groupService: GroupService, private router: Router) { }

  getAllGroups() {
    this.groupService.getAll()
      .subscribe((groups: any) => {
        this.groups = groups;
      });
  }

  openGroup(id: number) {
    this.router.navigate(['/group-detail', id]);
  }

  ngOnInit() {
    this.getAllGroups();
  }

}
