export class GroupEntity {
    id: number;
    name: string;
    currency: string;
    image: string;
    members: {
        id: number;
        name: string;
    }[];
    createdAt: Date;
    expenseHistory: {
        id: number;
        date: Date;
        amount: number;
        member: {
            id: number;
            name: string;
        }
    }[];
    paymentHistory: {
        id: number;
        date: Date;
        amount: number;
        member: {
            id: number;
            name: string;
        }
    }[];
    constructor(id: number = 0, image: string = '', currency: string = 'PEN', name: string = '', members: {
        id: number;
        name: string;
    }[] = [], createdAt: Date = new Date(), paymentHistory: {
        id: number;
        date: Date;
        amount: number;
        member: {
            id: number;
            name: string;
        }
    }[] = [],
        expenseHistory: {
            id: number;
            date: Date;
            amount: number;
            member: {
                id: number;
                name: string;
            }
        }[] = []
    ) {
        this.id = id;
        this.currency = currency;
        this.image = image;
        this.name = name;
        this.members = members;
        this.createdAt = createdAt;
        this.expenseHistory = expenseHistory;
        this.paymentHistory = paymentHistory;
    };
}
