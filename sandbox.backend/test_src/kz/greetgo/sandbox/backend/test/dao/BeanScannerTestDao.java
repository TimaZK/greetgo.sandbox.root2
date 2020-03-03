package kz.greetgo.sandbox.backend.test.dao;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@MapperScan(
    basePackages = "kz.greetgo.sandbox.backend.test.dao",
    sqlSessionFactoryRef = "masterSqlSessionFactory"
)
public class BeanScannerTestDao {}
