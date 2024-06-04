import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { GroupEntity } from '../../model/group.entity';
import { PartnerEntity } from '../../../pockets/model/partnerEntity';
import { PartnerService } from '../../../pockets/services/Partner.service';

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

  constructor(@Inject(FormBuilder) private _formBuilder: FormBuilder, private partnerService: PartnerService) { }
  ngOnInit() {
    this.partnerService.getAll().subscribe((partners: any) => {
      partners.forEach((partner: any) => {
        if (partner.id == 0) {
          this.members = partner;
          partner.contacts.forEach((contact: any) => {
            this.groupMembersList.push(contact.name);
          });
        }
      });
    });

  }


  onChanges(): void {
    this.firstFormGroup.valueChanges.subscribe(val => {
    });
  }

  createNewGroup() {
    // random id
    this.group.id = Math.floor(Math.random() * 1000);
    this.group.name = this.firstFormGroup.get('firstCtrl')?.value as string;
    let members: any = this.secondFormGroup.get('firstCtrl')?.value;
    this.group.members = members.map((member: string) => {
      return { name: member, id: Math.floor(Math.random() * 1000) };
    });
    this.group.currency = this.thirdFormGroup.get('firstCtrl')?.value as string;
    this.createGroup.emit(this.group);
  }
}
