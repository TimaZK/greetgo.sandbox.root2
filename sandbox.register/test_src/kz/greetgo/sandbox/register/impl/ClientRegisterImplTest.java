package kz.greetgo.sandbox.register.impl;

import kz.greetgo.depinject.core.BeanGetter;
import kz.greetgo.sandbox.controller.errors.IllegalLoginOrPassword;
import kz.greetgo.sandbox.controller.model.PersonDisplay;
import kz.greetgo.sandbox.controller.model.SessionHolder;
import kz.greetgo.sandbox.controller.model.UserCan;
import kz.greetgo.sandbox.controller.register.AuthRegister;
import kz.greetgo.sandbox.register.test.dao.AuthTestDao;
import kz.greetgo.sandbox.register.test.util.ParentTestNg;
import kz.greetgo.security.password.PasswordEncoder;
import kz.greetgo.security.session.SessionIdentity;
import kz.greetgo.security.session.SessionService;
import kz.greetgo.util.RND;
import org.testng.annotations.Test;

import java.util.Arrays;

import static org.fest.assertions.api.Assertions.assertThat;

public class ClientRegisterImplTest extends ParentTestNg {

}
