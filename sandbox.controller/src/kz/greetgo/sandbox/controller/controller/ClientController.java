package kz.greetgo.sandbox.controller.controller;

import kz.greetgo.depinject.core.Bean;
import kz.greetgo.depinject.core.BeanGetter;
import kz.greetgo.mvc.annotations.Json;
import kz.greetgo.mvc.annotations.Par;
import kz.greetgo.mvc.annotations.ToJson;
import kz.greetgo.mvc.annotations.on_methods.ControllerPrefix;
import kz.greetgo.mvc.annotations.on_methods.OnDelete;
import kz.greetgo.mvc.annotations.on_methods.OnGet;
import kz.greetgo.mvc.annotations.on_methods.OnPost;
import kz.greetgo.sandbox.controller.model.*;
import kz.greetgo.sandbox.controller.register.ClientRegister;
import kz.greetgo.sandbox.controller.security.PublicAccess;
import kz.greetgo.sandbox.controller.util.Controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Bean
@ControllerPrefix("/client")
public class ClientController implements Controller{

  public BeanGetter<ClientRegister> clientRegister;


  @ToJson
  @OnGet("/list")
  public List<ClientDisplay> list() {
//    ClientDisplay client = new ClientDisplay();
//    ClientDisplay client1 = new ClientDisplay();
//    client1.fio = "Blaaaa";
//    client1.id = "2";
//    client.id = "1";
//    client.fio = "Tima Zarlykov";
//    client.age = 20;
//    client.character = "RUDE";
//    client.totalBalanceOfAccounts = 0;
//    client.maximumBalance = 0;
//    client.minimumBalance = 0;
//    List<ClientDisplay> clientDisplays = new ArrayList<>();
//    clientDisplays.add(client);
//    clientDisplays.add(client1);

    return clientRegister.get().list();
  }

  @PublicAccess
  @OnPost("/save")
  public void save(@Par("clientToSave") @Json ClientToSave client){
    System.out.println(client);
  }

  @PublicAccess
  @OnDelete("/delete/{id}")
  public void delete(@Par("id") String id) {
    System.out.println(id);
  }

  @ToJson
  @OnGet("/charm")
  public List<Charm> charm() {
    List<Charm> charms = new ArrayList<>();
    Charm charm = new Charm();
    charm.id = "1";
    charm.name = "RUDE";
    charms.add(charm);
    return charms;
  }

  @ToJson
  @PublicAccess
  @OnPost("/edit/{id}")
  public ClientToEdit clientToEdit(@Par("id") String id) {
    ClientToEdit clientToEdit = new ClientToEdit();
    clientToEdit.setId("1");
    clientToEdit.setFirstName("Tima");
    clientToEdit.setLastName("Zarlykov");
    clientToEdit.setBirthDay(new Date());
    clientToEdit.setRegAddress(new Address());
    clientToEdit.setFactAddress(new Address());
    System.out.println(clientToEdit.firstName);
    return clientToEdit;
  }

}
