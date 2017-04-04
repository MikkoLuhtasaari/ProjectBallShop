

package fi.tamk.tiko;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

// This class acts as a controller.
// Usually when using @Controller, you will use also @RequestMapping
@Controller
public class MyController {
    // When HTTP GET, POST, PUT or OTHER request happens
    // to http://localhost:8080/greeting
    // invoke this method
    @RequestMapping("/greeting")
    // The return value will be the HTTP Body
    @ResponseBody
    public String greeting() {
        return "Test";
    }
}