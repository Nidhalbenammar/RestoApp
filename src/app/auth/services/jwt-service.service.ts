import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class JwtServiceService {
  decodeToken(token: string): any {
    try {
      // JWT tokens are in the format "header.payload.signature"
      // We only need the payload part, so we split the token and decode the payload
      const payload = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(payload));
      return decodedPayload;
    } catch (Error) {
      return null;
    }
  }
}