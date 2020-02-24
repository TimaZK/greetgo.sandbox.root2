package kz.greetgo.sandbox.controller.model;

import java.util.Arrays;
import java.util.Date;


public class ClientToSave {
  public String id;
  public String firstName;
  public String lastName;
  public String patron;
  public Gender gender;
  public Date birthDay;
  public String charm;
  public Address factAddress;
  public Address regAddress;
  public Phones[] phones;

  public ClientToSave() {
  }

  public ClientToSave(String id, String firstName, String lastName, String patron, Gender gender, Date birthDay, String charm, Address factAddress, Address regAddress, Phones[] phones) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.patron = patron;
    this.gender = gender;
    this.birthDay = birthDay;
    this.charm = charm;
    this.factAddress = factAddress;
    this.regAddress = regAddress;
    this.phones = phones;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getPatron() {
    return patron;
  }

  public void setPatron(String patron) {
    this.patron = patron;
  }

  public Gender getGender() {
    return gender;
  }

  public void setGender(Gender gender) {
    this.gender = gender;
  }

  public Date getBirthDay() {
    return birthDay;
  }

  public void setBirthDay(Date birthDay) {
    this.birthDay = birthDay;
  }

  public String getCharm() {
    return charm;
  }

  public void setCharm(String charm) {
    this.charm = charm;
  }

  public Address getFactAddress() {
    return factAddress;
  }

  public void setFactAddress(Address factAddress) {
    this.factAddress = factAddress;
  }

  public Address getRegAddress() {
    return regAddress;
  }

  public void setRegAddress(Address regAddress) {
    this.regAddress = regAddress;
  }

  public Phones[] getPhones() {
    return phones;
  }

  public void setPhones(Phones[] phones) {
    this.phones = phones;
  }

  @Override
  public String toString() {
    return "ClientToSave{" +
      "id='" + id + '\'' +
      ", firstName='" + firstName + '\'' +
      ", lastName='" + lastName + '\'' +
      ", patron='" + patron + '\'' +
      ", gender=" + gender +
      ", birthDay=" + birthDay +
      ", charm='" + charm + '\'' +
      ", factAddress=" + factAddress +
      ", regAddress=" + regAddress +
      ", phones=" + Arrays.toString(phones) +
      '}';
  }
}
