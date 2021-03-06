package kz.greetgo.sandbox.debug.bean_containers;

import kz.greetgo.depinject.core.BeanContainer;
import kz.greetgo.depinject.core.Include;
import kz.greetgo.sandbox.debug.beans.DebugServer;

@Include(BeanConfigForDebugBeanContainer.class)
public interface DebugBeanContainer extends BeanContainer {
  DebugServer server();
}
