import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators';

import { Organization } from '../model/organization';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizationRepository {
  constructor(private httpClient: HttpClient) {}

  async getAllCompanies(): Promise<Organization[]> {
    return await this.httpClient
      .get<{ data: Organization[] }>('/data/organizations.json')
      .pipe(
        map(resp => resp.data),
        delay(2000)
      )
      .toPromise();
  }
}
