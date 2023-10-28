var userSessionToken = null;

export function setsessionToken(token) {
    userSessionToken = token
}

export function getsessionToken() {
    return userSessionToken
}

export function clearsessionToken()
{
    userSessionToken = null;
}