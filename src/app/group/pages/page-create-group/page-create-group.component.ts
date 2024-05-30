import { Component } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { GroupEntity } from '../../model/group.entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-create-group',
  templateUrl: './page-create-group.component.html',
  styleUrl: './page-create-group.component.css'
})
export class PageCreateGroupComponent {
  constructor(private groupService: GroupService, private router: Router) { }

  createNewGroup(group: GroupEntity) {
    this.groupService.create(group).subscribe((response) => {
      this.redirectToGroupList();
    });
  }

  redirectToGroupList() {
    this.router.navigate(['/groups']);
  }
}
