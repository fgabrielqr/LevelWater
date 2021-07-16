interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    }
}

export function signIn(): Promise<Response> {
    return new Promise((resolve) => {
        resolve({
            token: 'asgasfvr54asdfarvrgrr',
            user: {
                name: 'Gabriel',
                email: 'felipe@felipe.com'
            },
        });
    });
}