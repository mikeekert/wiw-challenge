export interface ApiUserResponse {
    'user': {
        'first_name': string,
        'last_name': string,
        'email': string,
        'id': number,
        'avatar': {
            'url': string
        };
        'positions': number[],
    };
}

export class User {
    FirstName: string;
    LastName: string;
    Email: string;
    Id: number;
    Avatar: Avatar;
    Positions: number[];

    constructor(apiResponse: ApiUserResponse) {
        this.FirstName = apiResponse.user.first_name;
        this.LastName = apiResponse.user.last_name;
        this.Email = apiResponse.user.email;
        this.Id = apiResponse.user.id;
        this.Avatar = new Avatar(apiResponse.user.avatar.url);
        this.Positions = apiResponse.user.positions;
    }
}

export class Avatar {
    Url: string;
    constructor(url: string) {
        this.Url = url;
    }
}
