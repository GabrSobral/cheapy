import { getToken } from "./JsonWebToken";

export function parseJwt (token: string) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

export const GetUserId = () => {
  const token = getToken(); 
  
  if(!token) return;

  return parseJwt(token).Id;
}

export const IsTokenExpired = () => {
  const token = getToken(); 
  
  if(!token) return;

  const expirexIn = parseJwt(token).exp;
  const unixNow = new Date().getTime()/1000;

  return unixNow > expirexIn
}