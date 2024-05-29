export class GroupEntity {
  id: number;
  name: string;
  currency: string;
  image: string;
  members: {
    id: number;
    name: string;
  }[];
  creationDate: Date;
  expenseHistory?: {
    id: string;
    name: string;
    amount: number;
    date: Date;
    member: {
      id: number;
      name: string;
    };
    group: {
      id: number;
      name: string;
    };
  }[];
  paymentHistory: {
    id: number;
    description: string;
    amount: number;
    date: Date;
    paidBy: number;
    usersToDivide: number[];
    membersPaying:
      {
      userId: number;
      amountPaid: number;
      paymentMade: boolean;
    }[];
  }[];

  constructor(
    id: number = 0,
    name: string = '',
    currency: string = '',
    image: string = '',
    members: {
      id: number;
      name: string;
      email?: string;
      phone?: number;
      photo?: string;
      joined?: Date;
    }[] = [],
    creationDate: Date = new Date(),
    paymentHistory: {
      id: number;
      description: string;
      amount: number;
      date: Date;
      paidBy: number;
      usersToDivide: number[];
      membersPaying:
        {
        userId: number;
        amountPaid: number;
        paymentMade: boolean;
      }[];
    }[] = [],
    expenseHistory: {
      id: string;
      name: string;
      amount: number;
      date: Date;
      member: {
        id: number;
        name: string;
      };
      group: {
        id: number;
        name: string;
      };
    }[] = []
  ) {
    this.id = id;
    this.name = name;
    this.currency = currency;
    this.image = image;
    this.members = members;
    this.creationDate = creationDate;
    this.paymentHistory = paymentHistory;
    this.expenseHistory = expenseHistory;
  }
}
