package kz.greetgo.sandbox.register.impl;

import kz.greetgo.depinject.core.Bean;
import kz.greetgo.depinject.core.BeanGetter;
import kz.greetgo.sandbox.controller.model.ClientDisplay;
import kz.greetgo.sandbox.controller.model.ClientToSave;
import kz.greetgo.sandbox.controller.model.PageFilter;
import kz.greetgo.sandbox.controller.register.ClientRegister;
import kz.greetgo.sandbox.controller.register.PersonRegister;
import kz.greetgo.sandbox.register.dao.ClientDao;

import java.util.List;

@Bean
public class ClientRegisterImpl implements ClientRegister {
  public BeanGetter<ClientDao> clientDao;

  @Override
  public ClientDisplay getClient(String clientId) {
    return clientDao.get().loadDisplayClient(clientId);
  }

  @Override
  public List<ClientDisplay> list(PageFilter pageFilter) {
    return clientDao.get().list();
  }

  @Override
  public void saveClient(ClientToSave client) {
    clientDao.get().saveClient(client);
  }

//  @Override
//  public Boolean updateClient(ClientToSave detail) {
//    return clientDao.get().updateClient(detail);
//  }


}
