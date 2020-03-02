package kz.greetgo.sandbox.register.impl;

import com.sun.security.ntlm.Client;
import kz.greetgo.depinject.core.BeanGetter;
import kz.greetgo.sandbox.controller.model.*;
import kz.greetgo.sandbox.controller.register.ClientRegister;
import kz.greetgo.sandbox.register.test.dao.ClientTestDao;
import kz.greetgo.sandbox.register.test.util.ParentTestNg;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.List;

import static org.fest.assertions.api.Assertions.assertThat;

public class ClientRegisterImplTest extends ParentTestNg {

  public BeanGetter<ClientTestDao> clientTestDao;
  public BeanGetter<ClientRegister> clientRegister;

  @BeforeMethod
  public void deleteAll() {
    clientTestDao.get().deleteAll();
  }

  private static final String ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
  private static final SecureRandom RANDOM = new SecureRandom();

  public static String generate(int count) {
    StringBuilder sb = new StringBuilder();
    for (int i = 0; i < count; ++i) {
      sb.append(ALPHABET.charAt(RANDOM.nextInt(ALPHABET.length())));
    }
    return sb.toString();
  }

  ClientToSave randomClient() {
    String surname = generate(10);
    String name = generate(5);
    String patronymic = generate(5);
    ClientToSave client = new ClientToSave();
    client.setId("1");
    client.setLastName(surname);
    client.setFirstName(name);
    client.setPatron(patronymic);
    client.setGender(null);
    client.setBirthDay(null);
    client.setFactAddress(null);
    client.setRegAddress(null);
    client.setPhones(null);
    return client;
  }

  @Test
  public void getClient() {

    ClientToSave client = new ClientToSave();
    String id = client.id = "1";
    String surname = client.lastName = "Zarlykov";
    String name = client.firstName = "Tima";
    String patronymic = client.patron = "Kairatovic";
    //
    //

    clientTestDao.get().saveClient(id, surname, name, patronymic);

    //
    //

    ClientDisplay clientDisplay = clientRegister.get().getClient(id);

    assertThat(clientDisplay.fio).isEqualTo(surname + ' ' + name + ' '+ patronymic);
    assertThat(clientDisplay.character).isEqualTo(client.getCharm());
    assertThat(clientDisplay).isNotNull();
  }

  @Test
  public void sortWithIdAsc() {

    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i=1; i<101; i++) {

      String id = Integer.toString(i);
      String surname = generate(10);
      String name = generate(10);
      String patronymic = generate(10);
      ClientDisplay clientDisplay = new ClientDisplay();
      clientDisplay.id = id;
      clientDisplay.fio = surname + ' ' + ' ' + name + ' ' + patronymic;

      clientDisplaysArr.add(clientDisplay);

      //
      clientTestDao.get().saveClient(id, surname, name, patronymic);
      clientTestDao.get().saveAccountDatas(id, id, 9999f, "100");

      //
    }

    PageFilter pageFilter = new PageFilter("", "id", "asc", 100, 0);

    assertThat(clientDisplaysArr).isEqualTo(clientRegister.get().list(pageFilter));

  }

  @Test
  public void sortWithIdDesc() {

    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i=1; i<101; i++) {

      String id = Integer.toString(i);
      String surname = generate(10);
      String name = generate(10);
      String patronymic = generate(10);
      ClientDisplay clientDisplay = new ClientDisplay();
      clientDisplay.id = id;
      clientDisplay.fio = surname + ' ' + ' ' + name + ' ' + patronymic;

      clientDisplaysArr.add(clientDisplay);
      //

      clientTestDao.get().saveClient(id, surname, name, patronymic);
      clientTestDao.get().saveAccountDatas(id, id, 9999f, "100");

      //
    }

    PageFilter pageFilter = new PageFilter("", "id", "desc", 100, 0);

    assertThat(clientDisplaysArr).isEqualTo(clientRegister.get().list(pageFilter));

  }

  @Test
  public void sortWithFioAsc() {

    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i=1; i<101; i++) {

      String id = Integer.toString(i);
      String surname = generate(10);
      String name = generate(10);
      String patronymic = generate(10);
      ClientDisplay clientDisplay = new ClientDisplay();
      clientDisplay.id = id;
      clientDisplay.fio = surname + ' ' + ' ' + name + ' ' + patronymic;

      clientDisplaysArr.add(clientDisplay);
      //

      clientTestDao.get().saveClient(id, surname, name, patronymic);
      clientTestDao.get().saveAccountDatas(id, id, 9999f, "100");

      //
    }

    PageFilter pageFilter = new PageFilter("", "fio", "asc", 100, 0);

    assertThat(clientDisplaysArr).isEqualTo(clientRegister.get().list(pageFilter));

  }

  @Test
  public void sortWithFioDesc() {

    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i=1; i<101; i++) {

      String id = Integer.toString(i);
      String surname = generate(10);
      String name = generate(10);
      String patronymic = generate(10);
      ClientDisplay clientDisplay = new ClientDisplay();
      clientDisplay.id = id;
      clientDisplay.fio = surname + ' ' + ' ' + name + ' ' + patronymic;

      clientDisplaysArr.add(clientDisplay);
      //

      clientTestDao.get().saveClient(id, surname, name, patronymic);
      clientTestDao.get().saveAccountDatas(id, id, 9999f, "100");

      //
    }

    PageFilter pageFilter = new PageFilter("", "fio", "desc", 100, 0);

    assertThat(clientDisplaysArr).isEqualTo(clientRegister.get().list(pageFilter));

  }

  @Test
  public void sortWithAgeAsc() {

    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i=1; i<101; i++) {

      String id = Integer.toString(i);
      String surname = generate(10);
      String name = generate(10);
      String patronymic = generate(10);
      ClientDisplay clientDisplay = new ClientDisplay();
      clientDisplay.id = id;
      clientDisplay.fio = surname + ' ' + ' ' + name + ' ' + patronymic;

      clientDisplaysArr.add(clientDisplay);
      //

      clientTestDao.get().saveClient(id, surname, name, patronymic);
      clientTestDao.get().saveAccountDatas(id, id, 9999f, "100");

      //
    }

    PageFilter pageFilter = new PageFilter("", "age", "asc", 100, 0);

    assertThat(clientDisplaysArr).isEqualTo(clientRegister.get().list(pageFilter));

  }

  @Test
  public void sortWithAgeDesc() {

    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i=1; i<101; i++) {

      String id = Integer.toString(i);
      String surname = generate(10);
      String name = generate(10);
      String patronymic = generate(10);
      ClientDisplay clientDisplay = new ClientDisplay();
      clientDisplay.id = id;
      clientDisplay.fio = surname + ' ' + ' ' + name + ' ' + patronymic;

      clientDisplaysArr.add(clientDisplay);
      //

      clientTestDao.get().saveClient(id, surname, name, patronymic);
      clientTestDao.get().saveAccountDatas(id, id, 9999f, "100");

      //
    }

    PageFilter pageFilter = new PageFilter("", "age", "desc", 100, 0);

    assertThat(clientDisplaysArr).isEqualTo(clientRegister.get().list(pageFilter));

  }

  @Test
  public void sortWithCharAsc() {

    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i=1; i<101; i++) {

      String id = Integer.toString(i);
      String surname = generate(10);
      String name = generate(10);
      String patronymic = generate(10);
      ClientDisplay clientDisplay = new ClientDisplay();
      clientDisplay.id = id;
      clientDisplay.fio = surname + ' ' + ' ' + name + ' ' + patronymic;

      clientDisplaysArr.add(clientDisplay);
      //

      clientTestDao.get().saveClient(id, surname, name, patronymic);
      clientTestDao.get().saveAccountDatas(id, id, 9999f, "100");

      //
    }

    PageFilter pageFilter = new PageFilter("", "character", "asc", 100, 0);

    assertThat(clientDisplaysArr).isEqualTo(clientRegister.get().list(pageFilter));

  }

  @Test
  public void sortWithCharDesc() {

    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i=1; i<101; i++) {

      String id = Integer.toString(i);
      String surname = generate(10);
      String name = generate(10);
      String patronymic = generate(10);
      ClientDisplay clientDisplay = new ClientDisplay();
      clientDisplay.id = id;
      clientDisplay.fio = surname + ' ' + ' ' + name + ' ' + patronymic;

      clientDisplaysArr.add(clientDisplay);
      //

      clientTestDao.get().saveClient(id, surname, name, patronymic);
      clientTestDao.get().saveAccountDatas(id, id, 9999f, "100");

      //
    }

    PageFilter pageFilter = new PageFilter("", "character", "desc", 100, 0);

    assertThat(clientDisplaysArr).isEqualTo(clientRegister.get().list(pageFilter));

  }

  @Test
  public void sortWithTotalbAsc() {

    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i=1; i<101; i++) {

      String id = Integer.toString(i);
      String surname = generate(10);
      String name = generate(10);
      String patronymic = generate(10);
      ClientDisplay clientDisplay = new ClientDisplay();
      clientDisplay.id = id;
      clientDisplay.fio = surname + ' ' + ' ' + name + ' ' + patronymic;

      clientDisplaysArr.add(clientDisplay);
      //

      clientTestDao.get().saveClient(id, surname, name, patronymic);
      clientTestDao.get().saveAccountDatas(id, id, 9999f, "100");

      //
    }

    PageFilter pageFilter = new PageFilter("", "totalBalanceOfAccounts", "asc", 100, 0);

    assertThat(clientDisplaysArr).isEqualTo(clientRegister.get().list(pageFilter));

  }

  @Test
  public void sortWithTotalbDesc() {

    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i=1; i<101; i++) {

      String id = Integer.toString(i);
      String surname = generate(10);
      String name = generate(10);
      String patronymic = generate(10);
      ClientDisplay clientDisplay = new ClientDisplay();
      clientDisplay.id = id;
      clientDisplay.fio = surname + ' ' + ' ' + name + ' ' + patronymic;

      clientDisplaysArr.add(clientDisplay);
      //

      clientTestDao.get().saveClient(id, surname, name, patronymic);
      clientTestDao.get().saveAccountDatas(id, id, 9999f, "100");

      //
    }

    PageFilter pageFilter = new PageFilter("", "totalBalanceOfAccounts", "desc", 100, 0);

    assertThat(clientDisplaysArr).isEqualTo(clientRegister.get().list(pageFilter));

  }

  @Test
  public void sortWithMaxAsc() {

    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i=1; i<101; i++) {

      String id = Integer.toString(i);
      String surname = generate(10);
      String name = generate(10);
      String patronymic = generate(10);
      ClientDisplay clientDisplay = new ClientDisplay();
      clientDisplay.id = id;
      clientDisplay.fio = surname + ' ' + ' ' + name + ' ' + patronymic;

      clientDisplaysArr.add(clientDisplay);
      //

      clientTestDao.get().saveClient(id, surname, name, patronymic);
      clientTestDao.get().saveAccountDatas(id, id, 9999f, "100");

      //
    }

    PageFilter pageFilter = new PageFilter("", "maximumBalance", "asc", 100, 0);

    assertThat(clientDisplaysArr).isEqualTo(clientRegister.get().list(pageFilter));

  }

  @Test
  public void sortWithMaxDesc() {

    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i=1; i<101; i++) {

      String id = Integer.toString(i);
      String surname = generate(10);
      String name = generate(10);
      String patronymic = generate(10);
      ClientDisplay clientDisplay = new ClientDisplay();
      clientDisplay.id = id;
      clientDisplay.fio = surname + ' ' + ' ' + name + ' ' + patronymic;

      clientDisplaysArr.add(clientDisplay);
      //

      clientTestDao.get().saveClient(id, surname, name, patronymic);
      clientTestDao.get().saveAccountDatas(id, id, 9999f, "100");

      //
    }

    PageFilter pageFilter = new PageFilter("", "maximumBalance", "desc", 100, 0);

    assertThat(clientDisplaysArr).isEqualTo(clientRegister.get().list(pageFilter));

  }

  @Test
  public void sortWithMinAsc() {

    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i=1; i<101; i++) {

      String id = Integer.toString(i);
      String surname = generate(10);
      String name = generate(10);
      String patronymic = generate(10);
      ClientDisplay clientDisplay = new ClientDisplay();
      clientDisplay.id = id;
      clientDisplay.fio = surname + ' ' + ' ' + name + ' ' + patronymic;

      clientDisplaysArr.add(clientDisplay);
      //

      clientTestDao.get().saveClient(id, surname, name, patronymic);
      clientTestDao.get().saveAccountDatas(id, id, 9999f, "100");

      //
    }

    PageFilter pageFilter = new PageFilter("", "minimumBalance", "asc", 100, 0);

    assertThat(clientDisplaysArr).isEqualTo(clientRegister.get().list(pageFilter));

  }

  @Test
  public void sortWithMinDesc() {

    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i=1; i<101; i++) {

      String id = Integer.toString(i);
      String surname = generate(10);
      String name = generate(10);
      String patronymic = generate(10);
      ClientDisplay clientDisplay = new ClientDisplay();
      clientDisplay.id = id;
      clientDisplay.fio = surname + ' ' + ' ' + name + ' ' + patronymic;

      clientDisplaysArr.add(clientDisplay);
      //

      clientTestDao.get().saveClient(id, surname, name, patronymic);
      clientTestDao.get().saveAccountDatas(id, id, 9999f, "100");

      //
    }

    PageFilter pageFilter = new PageFilter("", "minimumBalance", "desc", 100, 0);

    assertThat(clientDisplaysArr).isEqualTo(clientRegister.get().list(pageFilter));

  }

  @Test
  public void clientWithNullValueTest() {
    clientRegister.get().saveClient(null);
  }

  @Test
  public void paginClientListFirstPage() {
    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i=1; i<101; i++) {

      String id = Integer.toString(i);
      String surname = generate(10);
      String name = generate(10);
      String patronymic = generate(10);
      ClientDisplay clientDisplay = new ClientDisplay();
      clientDisplay.id = id;
      clientDisplay.fio = surname + ' ' + ' ' + name + ' ' + patronymic;

      clientDisplaysArr.add(clientDisplay);
      //

      clientTestDao.get().saveClient(id, surname, name, patronymic);
      clientTestDao.get().saveAccountDatas(id, id, 9999f, "100");

      //
    }

    PageFilter pageFilter = new PageFilter("", "", "", 20, 0);
    assertThat(clientRegister.get().list(pageFilter)).isEmpty();

  }

  @Test
  public void paginClientListLastPage() {
    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i=1; i<101; i++) {

      String id = Integer.toString(i);
      String surname = generate(10);
      String name = generate(10);
      String patronymic = generate(10);
      ClientDisplay clientDisplay = new ClientDisplay();
      clientDisplay.id = id;
      clientDisplay.fio = surname + ' ' + ' ' + name + ' ' + patronymic;

      clientDisplaysArr.add(clientDisplay);
      //

      clientTestDao.get().saveClient(id, surname, name, patronymic);
      clientTestDao.get().saveAccountDatas(id, id, 9999f, "100");

      //
    }

    PageFilter pageFilter = new PageFilter("", "", "", 20, 4);
    assertThat(clientRegister.get().list(pageFilter)).isEmpty();

  }

  @Test
  public void filteringClientList() {
    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i=1; i<101; i++) {

      String id = Integer.toString(i);
      String surname = generate(10);
      String name = generate(10);
      String patronymic = generate(10);
      ClientDisplay clientDisplay = new ClientDisplay();
      clientDisplay.id = id;
      clientDisplay.fio = surname + ' ' + ' ' + name + ' ' + patronymic;

      clientDisplaysArr.add(clientDisplay);
      //

      clientTestDao.get().saveClient(id, surname, name, patronymic);
      clientTestDao.get().saveAccountDatas(id, id, 9999f, "100");

      //
    }

    for (int i=0; i<clientDisplaysArr.size(); ++i) {

      PageFilter pageFilter = new PageFilter(clientDisplaysArr.get(i).fio, "", "", 100, 0);
      assertThat(clientDisplaysArr).isEqualTo(clientRegister.get().list(pageFilter));

    }

  }

}
