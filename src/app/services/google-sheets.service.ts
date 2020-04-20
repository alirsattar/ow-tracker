import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { credentials } from '../../environments/private';
import { Pages } from '../entities/pages.enum';
import { DataRow } from '../entities/DataRow.class';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { GoogleSheetsResponse } from '../entities/GoogleSheetsResponse.class';


@Injectable({
  providedIn: 'root',
})
export class GoogleSheetsService {
  public sheet: any = 'not assigned';
  public sheetId = '';
  public range = 'Sheet1';

  private key = credentials.key;
  private getUrl = '';

  constructor(
    private http: HttpClient
  ) {
    this.sheetId = credentials.sheetId;
    this.getUrl = `https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/`;
    this.getSheet(Pages.dps)
      .subscribe((sheet) => {
        console.log('returned sheet: ', sheet);
      },
      (err) => {
        console.error('returned error: ', err);
      }
      );

    // console.log(this.sheet);
  }

  getSheet(page: Pages) {
    const whichPage = page;
    const params = `?key=${this.key}`;
    const finalUrl = this.getUrl + whichPage + params;

    return this.http.get(finalUrl);
      // .pipe(
        // map((data: GoogleSheetsResponse) => data.values),
        // map(data => {
        //   return data.filter((row) => {
        //     return row[0] !== '';
        //   });
        // })
      // );
  }
}
