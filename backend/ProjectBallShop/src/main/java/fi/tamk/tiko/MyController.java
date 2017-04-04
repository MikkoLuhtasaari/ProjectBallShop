package fi.tamk.tiko;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class MyController {
    @Autowired
    FootballRepository fbRepository;
    
    @RequestMapping(value = "/populate",  method=RequestMethod.GET)
    public String populate() {
        Football football1 = new Football("Placeholder1", "Red", 12, 500, "None", "Rubber", 1);
        Football football2 = new Football("Placeholder2", "Green", 15, 1000, "Some details", "Rubber", 2);
        Football football3 = new Football("Placeholder3", "Yellow", 13, 3000, "Crappy ball", "Duck skin", 3);
        Football football4 = new Football("Placeholder4", "Red", 22, 2000, "None", "Lamb skin", 4);
        Football football5 = new Football("Placeholder5", "Red", 25, 1000, "None", "Plastic", 5);
        fbRepository.save(football1);
        fbRepository.save(football2);
        fbRepository.save(football3);
        fbRepository.save(football4);
        fbRepository.save(football5);
        return "Populate succesfull";
    }
    
    
    @RequestMapping(value = "/football",  method=RequestMethod.POST)
    public void saveLocations(@RequestBody Football football) {
        fbRepository.save(football);
    }
    
    
    @RequestMapping(value = "/footballs",  method=RequestMethod.GET)
    public Iterable<Football> fetchFootballs() {
        return fbRepository.findAll();
    }
    
    @RequestMapping(value = "/football/{footballId}",  method=RequestMethod.GET)
    public Football fetchFootballs(@PathVariable long footballId) {
        return fbRepository.findOne(footballId);
    }
}