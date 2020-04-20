export class DataRow {
  SR: number;
  time: string;
  diff: number;
  date: string;

  constructor(data: string[]) {
    this.SR = Number(data[0]);
    this.time = data[1];
    this.diff = Number(data[2]);
    this.date = data[3];
  }
}
