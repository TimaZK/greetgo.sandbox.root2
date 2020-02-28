package kz.greetgo.sandbox.register.impl;

import kz.greetgo.depinject.core.Bean;
import kz.greetgo.depinject.core.BeanGetter;
import kz.greetgo.sandbox.controller.model.ClientDisplay;
import kz.greetgo.sandbox.controller.register.ClientRegister;
import kz.greetgo.sandbox.controller.register.PersonRegister;
import kz.greetgo.sandbox.register.dao.ClientDao;

import java.util.List;

@Bean
public class ClientRegisterImpl implements ClientRegister {
  public BeanGetter<ClientDao> clientDao;

  @Override
  public List<ClientDisplay> list() {
    return clientDao.get().list();
  }
}
