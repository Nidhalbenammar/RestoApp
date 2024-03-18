import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class JwtServiceService {
  decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(payload));
      return decodedPayload;
    } catch (Error) {
      return null;
    }
  }
}