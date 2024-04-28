export class PartnerEntity {

  id: number;
  name: string;
  email: string;
  password: string;
  balance: number;
  photo: string;
  groups: [
    {
      id: number;
      name: string;
    }
  ];

  constructor() {
    this.id = 0;
    this.name = "";
    this.email = "";
    this.password = "";
    this.balance = 0;
    this.groups = [
      {
        id: 0,
        name: "",
      }
    ];
    this.photo = "";
  }

}
