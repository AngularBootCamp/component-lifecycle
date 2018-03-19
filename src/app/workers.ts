import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

const API_URL = 'https://api.angularbootcamp.com';

export interface Worker {
  first_name: string;
}

@Injectable()
export class Workers {
  constructor(private http: HttpClient) { }

  workerList() {
    const delayUntil: Date = new Date(Date.now() + 1600);
    return this.http.get<Worker[]>(API_URL + '/employees')
      .pipe(delay(delayUntil));
  }
}
