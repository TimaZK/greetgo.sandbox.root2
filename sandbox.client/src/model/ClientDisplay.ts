export class ClientDisplay {
  public id: number;
  public fio: string;
  public character: string;
  public age: number;
  public totalBalanceOfAccounts: number;
  public maximumBalance: number;
  public minimumBalance: number;

  public static create(a: any): ClientDisplay {
    const ret = new ClientDisplay();
    ret.assign(a);
    return ret;
  }

  assign(a: any) {
    this.id = a.id;
    this.fio = a.fio;
    this.character = a.character;
    this.age = a.age;
    this.totalBalanceOfAccounts = a.totalBalanceOfAccounts;
    this.maximumBalance = a.maximumBalance;
    this.minimumBalance = a.minimumBalance;
  }

}
