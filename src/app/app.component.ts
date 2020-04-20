import { Component, OnInit } from '@angular/core';
import { GoogleSheetsService } from './services/google-sheets.service';
import { Pages } from './entities/pages.enum';
import { DataRow } from './entities/DataRow.class';
import { Observable } from 'rxjs';
import { GoogleSheetsResponse } from './entities/GoogleSheetsResponse.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OW SR Tracker';
  response: GoogleSheetsResponse;

  constructor(
    private sheetsService: GoogleSheetsService
  ) {
    sheetsService.getSheet(Pages.dps)
      .subscribe((info) => {
        this.response = new GoogleSheetsResponse(info);

        console.log(this.response);
      },
      (err) => {
        console.error('ERROR in app.component: ', err);
      }
      );
  }

  ngOnInit() {
  }
}
