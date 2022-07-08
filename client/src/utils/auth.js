import decode from 'jwt-decode';

class AuthService {
    // retrieve data saved in token
    getProfile() {
        return decode(this.getToken());
    }
    // check if the user is still logged in
    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken();
        // use type coersion to check if token is NOT undefined and the token is NOT expired
        return !!token && !this.isTokenExpired(token);
    }

    
}

export default new AuthService();