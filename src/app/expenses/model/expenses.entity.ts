export class ExpensesEntity {
    id: string;
    name: string;
    amount: number;
    date: Date;
    member: {
        id: number;
        name: string;
    };
    constructor(id = '', name = '', amount = 0, date = new Date(), member = { id: 0, name: '' }) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.date = date;
        this.member = member;
    }
}
