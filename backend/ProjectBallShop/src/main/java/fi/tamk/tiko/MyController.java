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