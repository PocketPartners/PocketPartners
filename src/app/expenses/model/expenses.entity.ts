export class ExpensesEntity {
    id: string;
    name: string;
    amount: number;
    created_at: Date;
    member: {
        id: number;
        name: string;
    };
    group: {
        id: number;
        name: string;
    };
    userId: number;
    constructor(id = '', name = '', amount = 0, created_at = new Date(), member = { id: 0, name: '' }, group = { id: 0, name: '' }, userId = 0) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.created_at = created_at;
        this.member = member;
        this.group = group;
        this.userId = userId;
    }
}
