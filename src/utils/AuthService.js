import decode from 'jwt-decode';
import auth0 from 'auth0-js';


const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';

const CLIENT_ID = '{AUTH0_CLIENT_ID}';
const CLIENT_DOMAIN = 'AUTH0_DOMAIN';
const REDIRECT = 'YOUR_CALLBACK_URL';
const SCOPE = 'YOUR_SCOPE';
const AUDIENCE = 'AUDIENCE_ATTRIBUTE';

var auth = new auth0.WebAuth({
  clientID: CLIENT_ID,
  domain: CLIENT_DOMAIN
});

export function login() {
  // auth.authorize({
  //   responseType: 'token id_token',
  //   redirectUri: REDIRECT,
  //   audience: AUDIENCE,
  //   scope: SCOPE
  // });

  var formData  = new FormData();
  formData.append('username', 'cito');
  formData.append('password', 'cito1234');

    var options = {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'undefined',//'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
        'Accept': 'application/json',                  
      },
      body: formData
      // JSON.stringify({
      //   username: 'cito',
      //   password: 'cito1234',
      // })
    }
    fetch('http://localhost:8000/api-token-auth/', options)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        console.log(response.token)
        let idToken = getParameterByName('id_token');
        localStorage.setItem(ID_TOKEN_KEY, response.token);
      })

}

export function logout() {
  clearIdToken();
  clearAccessToken();
}

export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({pathname: '/'});
  }
}

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
}

function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName(name) {
  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
  // return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Get and store access_token in local storage
export function setAccessToken() {
  let accessToken = getParameterByName('access_token');
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

// Get and store id_token in local storage
export function setIdToken() {
  let idToken = getParameterByName('id_token');
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { return null; }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}
