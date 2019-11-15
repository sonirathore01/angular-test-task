import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }

  getProjects() {
    return new Promise<any>((resolve, reject) => {
      // -- will be replaced with actul API Url
      const apiUrl = `\assets\\data.json`;
      this.http.get(apiUrl)
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject();
        })
    });
  }

}
