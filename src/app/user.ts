export interface User {
    'user': {
        'first_name': string,
        'last_name': string,
        'email': string,
        'avatar': {
            'url': string
        };
        'positions': string[]
    };
}
