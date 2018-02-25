export interface Positions {
    'id': number;
    'account_id': number;
    'name': string;
    'color': string;
    'sort': number;
    'created_at': string;
    'updated_at': string;
    'updated_by': number;
    'is_deleted': boolean;
}

export interface PositionsWrapper {
    'positions': Positions[];
}

export class UserPosition {
    Id: number;
    Account_Id: number;
    Name: string;

    constructor(apiResponse: Positions) {
        this.Id = apiResponse.id;
        this.Account_Id = apiResponse.account_id;
        this.Name = apiResponse.name;
    }
}
