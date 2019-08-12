export function isLoggedIn() {
    return !!sessionStorage.token;
}