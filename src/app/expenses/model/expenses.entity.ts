export class ExpensesEntity {
    id: string;
    name: string;
    amount: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    constructor(id = '', name = '', amount = 0, createdAt = new Date(), updatedAt=new Date(),  userId = 0) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.userId = userId;
    }
}
