package kz.greetgo.sandbox.controller.controller;

import kz.greetgo.depinject.core.Bean;
import kz.greetgo.depinject.core.BeanGetter;
import kz.greetgo.mvc.annotations.ToJson;
import kz.greetgo.mvc.annotations.on_methods.ControllerPrefix;
import kz.greetgo.mvc.annotations.on_methods.OnGet;
import kz.greetgo.sandbox.controller.model.PersonRecord;
import kz.greetgo.sandbox.controller.register.PersonRegister;
import kz.greetgo.sandbox.controller.util.Controller;

import java.util.List;


@Bean
@ControllerPrefix("/client")
public class ClientController implements Controller{


  @OnGet("/")
  public void list() {
    System.out.println("blaaaa");
  }
}
