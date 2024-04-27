import { Component } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { GroupEntity } from '../../model/group.entity';

@Component({
  selector: 'app-page-create-group',
  templateUrl: './page-create-group.component.html',
  styleUrl: './page-create-group.component.css'
})
export class PageCreateGroupComponent {
  constructor(private groupService: GroupService) { }

  createNewGroup(group: GroupEntity) {
    console.log('Creating new group... In parent component');
    this.groupService.create(group).subscribe((response) => {
      console.log('Group created successfully', response);
    });
  }
}
