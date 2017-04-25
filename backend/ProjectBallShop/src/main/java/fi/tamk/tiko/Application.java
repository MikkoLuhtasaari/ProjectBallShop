
package fi.tamk.tiko;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.*;

@SpringBootApplication
@EnableAutoConfiguration(exclude = {
org.springframework.boot.autoconfigure.security.SecurityAutoConfiguration.class})
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}