import { DataRow } from './DataRow.class';

export class GoogleSheetsResponse {
  majorDimension: string;
  range: string;
  values: DataRow[] = [];

  constructor(response) {
    this.majorDimension = response.majorDimension;
    this.range = response.range;

    // Get rid of first index in response.values
    response.values = response.values.slice(1);
    const cleanedValues = this.removeEmptyValues(response.values);

    for (const row of cleanedValues) {
      const newRow = new DataRow(row);
      this.values.push(newRow);
    }
  }

  removeEmptyValues(values) {
    return values.filter((row) => row[0] !== '');
  }
}
