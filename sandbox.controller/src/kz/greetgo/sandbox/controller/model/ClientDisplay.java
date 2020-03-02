package kz.greetgo.sandbox.controller.model;

public class ClientDisplay {
  public String id;
  public String fio;
  public String character;
  public Integer age;
  public Integer totalBalanceOfAccounts;
  public Integer maximumBalance;
  public Integer minimumBalance;

  public ClientDisplay() {
  }

  public ClientDisplay(String id, String fio, String character, Integer age, Integer totalBalanceOfAccounts, Integer maximumBalance, Integer minimumBalance) {
    this.id = id;
    this.fio = fio;
    this.character = character;
    this.age = age;
    this.totalBalanceOfAccounts = totalBalanceOfAccounts;
    this.maximumBalance = maximumBalance;
    this.minimumBalance = minimumBalance;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getFio() {
    return fio;
  }

  public void setFio(String fio) {
    this.fio = fio;
  }

  public String getCharacter() {
    return character;
  }

  public void setCharacter(String character) {
    this.character = character;
  }

  public Integer getAge() {
    return age;
  }

  public void setAge(Integer age) {
    this.age = age;
  }

  public Integer getTotalBalanceOfAccounts() {
    return totalBalanceOfAccounts;
  }

  public void setTotalBalanceOfAccounts(Integer totalBalanceOfAccounts) {
    this.totalBalanceOfAccounts = totalBalanceOfAccounts;
  }

  public Integer getMaximumBalance() {
    return maximumBalance;
  }

  public void setMaximumBalance(Integer maximumBalance) {
    this.maximumBalance = maximumBalance;
  }

  public Integer getMinimumBalance() {
    return minimumBalance;
  }

  public void setMinimumBalance(Integer minimumBalance) {
    this.minimumBalance = minimumBalance;
  }
}
