package kz.greetgo.sandbox.register.dao;

import kz.greetgo.sandbox.controller.model.ClientDisplay;
import kz.greetgo.sandbox.controller.model.ClientToSave;
import kz.greetgo.sandbox.controller.model.PersonDisplay;
import kz.greetgo.sandbox.controller.model.PersonRecord;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface ClientDao {
  @Select("select surname||' '||name||' '||patronymic as fio " +
    "from Client inner join client_account on client.id = client_account.client")
  List<ClientDisplay> list();

  @Select("select surname||' '||name||' '||patronymic as fio" +
    " from Client where id = #{clientId}")
  ClientDisplay loadDisplayClient(@Param("clientId") String clientId);

  @Insert("insert into Client "
    + "values (#{client.id}, #{client.surname}, #{client.name}, #{client.patronymic})")
  void saveClient(@Param("client") ClientToSave client
  );

  @Select("update client set surname = #{client.lastName}, name = #{client.firstName}, patronymic = #{client.patron},"
    + "gender = #{client.gender}, birth_date = #{client.birthDay}, charm = #{client.charm} where id = #{client.id}")
  Boolean updateClient(@Param("client") ClientToSave client);
}
