export class ContactEntity {

  id: number;
  name: string;
  email: string;
  phone: string;
  photo: string;

  constructor(id: number = 0, name: string = '', email: string = '', phone: string = '', photo: string = '') {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.photo = photo;
  }

}
