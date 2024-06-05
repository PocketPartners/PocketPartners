export class ExpensesEntity {
    id: string;
    name: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    userId: number;
    constructor(id = '', name = '', amount = 0, created_at = new Date(), updated_at=new Date(),  userId = 0) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.userId = userId;
    }
}
