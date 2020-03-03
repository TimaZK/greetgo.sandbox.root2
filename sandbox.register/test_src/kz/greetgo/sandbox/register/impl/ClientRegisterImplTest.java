package kz.greetgo.sandbox.register.impl;

import com.sun.security.ntlm.Client;
import kz.greetgo.depinject.core.BeanGetter;
import kz.greetgo.sandbox.controller.model.*;
import kz.greetgo.sandbox.controller.register.ClientRegister;
import kz.greetgo.sandbox.register.test.dao.ClientTestDao;
import kz.greetgo.sandbox.register.test.util.ParentTestNg;
import kz.greetgo.util.RND;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.fest.assertions.api.Assertions.assertThat;

public class ClientRegisterImplTest extends ParentTestNg {

  public BeanGetter<ClientTestDao> clientTestDao;
  public BeanGetter<ClientRegister> clientRegister;

  @BeforeMethod
  public void deleteAll() {
    clientTestDao.get().deleteAll();
  }


  @Test
  public void sortWithIdAsc() {

    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i = 1; i < 101; i++) {

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

    for (int i = 0; i < 100; i++) {
      assertThat(clientDisplaysArr.get(i).id).isEqualTo(clientRegister.get().list(pageFilter).get(i).id);
    }

  }


  @Test
  public void sortWithIdDesc() {

    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i = 1; i < 101; i++) {

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

    for (int i = 0; i < 100; i++) {
      assertThat(clientDisplaysArr.get(i).id).isEqualTo(clientRegister.get().list(pageFilter).get(i).id);
    }

  }
 

  @Test
  public void sortWithFioAsc() {

    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i = 1; i < 101; i++) {

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

    for (int i = 0; i < 100; i++) {
      assertThat(clientDisplaysArr.get(i).fio).isEqualTo(clientRegister.get().list(pageFilter).get(i).fio);
    }
  }


  @Test
  public void sortWithFioDesc() {

    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i = 1; i < 101; i++) {

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

    for (int i = 0; i < 100; i++) {
      assertThat(clientDisplaysArr.get(i).fio).isEqualTo(clientRegister.get().list(pageFilter).get(i).fio);
    }
  }


  @Test
  public void filterNameValueTest() {

    List<ClientDisplay> clientDisplaysArr = new ArrayList<>();
    for (int i = 1; i < 101; i++) {

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

    PageFilter pageFilter = new PageFilter("blaaa", "", "", 100, 0);

    for (int i = 0; i < 100; i++) {
      assertThat(clientRegister.get().list(pageFilter).get(i).fio).isEqualTo(clientDisplaysArr.get(i).fio);
    }
  }


  @Test
  public void clientWithNullValueTest() {
    clientRegister.get().saveClient(null);
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

}
