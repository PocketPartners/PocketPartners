import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { GroupEntity } from '../../model/group.entity';
import { PartnerEntity } from '../../../pockets/model/partnerEntity';
import { PartnerService } from '../../../pockets/services/Partner.service';
import { GroupMembersService } from '../../services/group-members.service';

@Component({
  selector: 'app-form-create-group',
  templateUrl: './form-create-group.component.html',
  styleUrl: './form-create-group.component.css'
})
export class FormCreateGroupComponent implements OnInit {
  // For the multi select
  groupMembers = new FormControl();
  groupMembersList: string[] = [];

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    secondCtrl: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  isLinear = false;

  @Output() createGroup: EventEmitter<GroupEntity> = new EventEmitter<GroupEntity>();

  private group: GroupEntity = new GroupEntity();
  private members: PartnerEntity = new PartnerEntity();

  constructor(@Inject(FormBuilder) private _formBuilder: FormBuilder, private groupMember: GroupMembersService) { }
  ngOnInit() {
    this.groupMember.getAllMembersByIdGroup(1).subscribe((partners: any) => {
      console.log(partners);
      partners.forEach((partner: any) => {
        this.groupMembersList.push(partner.fullName);
      });
    });
  }

  onChanges(): void {
    this.firstFormGroup.valueChanges.subscribe(val => {
    });
  }

  createNewGroup() {
    this.group.name = this.firstFormGroup.get('firstCtrl')?.value as string;
    this.group.groupPhoto = this.firstFormGroup.get('secondCtrl')?.value as string;
    let members: any = this.secondFormGroup.get('firstCtrl')?.value;
    this.group.members = members.map((member: string) => {
      return { name: member, id: Math.floor(Math.random() * 1000) };
    });
    let currency: any = this.thirdFormGroup.get('firstCtrl')?.value;
    this.group.currency = currency.map((currency: string) => {
      return { code: currency };
    });
    this.createGroup.emit(this.group);
  }
}
