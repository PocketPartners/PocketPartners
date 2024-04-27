import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GroupEntity } from '../../model/group.entity';

@Component({
  selector: 'app-form-create-group',
  templateUrl: './form-create-group.component.html',
  styleUrl: './form-create-group.component.css'
})
export class FormCreateGroupComponent {
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

  constructor(private _formBuilder: FormBuilder) {
  }

  onChanges(): void {
    // obtain the value of the first form group
    this.firstFormGroup.valueChanges.subscribe(val => {
      console.log('First form group value: ', val);
    });
  }

  createNewGroup() {
    console.log('Creating new group...');
    // random id
    this.group.id = Math.floor(Math.random() * 1000);
    this.group.name = this.firstFormGroup.get('firstCtrl')?.value as string;
    let members = this.secondFormGroup.get('firstCtrl')?.value as string;
    let membersArray = members.split(',');
    this.group.members = membersArray.map((member, index) => {
      return {
        id: index,
        name: member
      }
    });
    this.group.currency = this.thirdFormGroup.get('firstCtrl')?.value as string;
    this.createGroup.emit(this.group);
  }
}
