export class DataProvider {

  data = 1;

  constructor() {
    setInterval(() => {
      this.data = this.data * 2;
      console.log('setInterval', this.data);
    }, 2000);
  }
}