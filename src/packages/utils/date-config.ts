export default class DateConfig {
  private date: Date = new Date();

  getFullYear() {
    return this.date.getFullYear();
  }

  getMonth() {
    return this.date.getMonth() + 1;
  }

  getDate() {
    return this.date.getDate();
  }

  get() {
    return this.date;
  }
}
