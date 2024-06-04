export class PartnerEntity {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  photo: string;

  constructor() {
    this.id = 0;
    this.fullName = "";
    this.email = "";
    this.phoneNumber = "";
    this.password = "";
    this.photo = "";
  }

}
