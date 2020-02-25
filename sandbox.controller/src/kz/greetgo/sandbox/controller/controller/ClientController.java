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
import kz.greetgo.sandbox.controller.model.Charm;
import kz.greetgo.sandbox.controller.model.ClientDisplay;
import kz.greetgo.sandbox.controller.model.ClientToSave;
import kz.greetgo.sandbox.controller.register.ClientRegister;
import kz.greetgo.sandbox.controller.security.PublicAccess;
import kz.greetgo.sandbox.controller.util.Controller;

import java.util.ArrayList;
import java.util.List;


@Bean
@ControllerPrefix("/client")
public class ClientController implements Controller{

  public BeanGetter<ClientRegister> clientRegister;


  @ToJson
  @OnGet("/list")
  public List<ClientDisplay> list() {
    ClientDisplay client = new ClientDisplay();
    client.fio = "Tima Zarlykov";
    List<ClientDisplay> clientDisplays = new ArrayList<>();
    clientDisplays.add(client);

//    clientRegister.get().getClientDisplayList();
    return clientDisplays;
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
  public ClientToSave clientToSave(@Par("id") String id) {
    ClientToSave clientToSave = new ClientToSave();
    clientToSave.setFirstName("Tima");
    System.out.println(clientToSave);
    return clientToSave;
  }

  @ToJson
  @OnGet("/detail/{id}")
  public ClientDisplay clientDisplay(@Par("id") String id) {
    System.out.println(id);
    return new ClientDisplay();
  }

}
