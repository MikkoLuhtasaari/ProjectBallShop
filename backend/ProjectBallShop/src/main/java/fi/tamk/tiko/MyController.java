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
  
    @Autowired
    TargetSportsBallRepository tsbRepository;
    
    @RequestMapping(value= "/categories", method=RequestMethod.GET)
    public String getCategories() {
        return "Bat and Racquet games, Goal sports, Net sports, Target sports";
    }
    
    @RequestMapping(value = "/populate",  method=RequestMethod.GET)
    public String populate() {
        //FOOTBALLS
        Football football1 = new Football("Placeholder1", "Red", 12, 500, "None", "Rubber", "Adidas", "A ball to kick", "Football", 25.95 , 1, 1);
        Football football2 = new Football("Placeholder2", "Green", 15, 1000, "Some details", "Rubber", "Nike", "Basic kickball", "Football", 15.0, 2, 2);
        Football football3 = new Football("Placeholder3", "Yellow", 13, 3000, "Crappy ball", "Duck skin", "Adidas", "For professionals", "Football", 16.95, 1, 3);
        Football football4 = new Football("Placeholder4", "Red", 22, 2000, "None", "Lamb skin", "Diipadaa", "Another ball", "Football", 10.45, 3, 4);
        Football football5 = new Football("Placeholder5", "Red", 25, 1000, "None", "Plastic", "Adidas", "Best ball", "Football", 16.55, 1, 5);
        
        fbRepository.save(football1);
        fbRepository.save(football2);
        fbRepository.save(football3);
        fbRepository.save(football4);
        fbRepository.save(football5);
        
        //BOWLINGBALLS
        TargetSportsBall tempTarget1 = new TargetSportsBall("Bowlingball1", "Black", 40, 3030, "Somethingsomething", "Steel", "Adidas", "A ball not to kick", "Bowlingball", 109.95, 3, 1);
        TargetSportsBall tempTarget2 = new TargetSportsBall("Golfball1", "Orange", 40, 200, "", "Rubber", "AnotherDas", "A ball not to kick", "Golfball", 105.95, 4, 2);
        TargetSportsBall tempTarget3 = new TargetSportsBall("bb3", "Grey", 40, 6000, "Heavy ball", "Concrete", "Adidas", "A ball not to kick", "Bowlingball", 102.95, 5, 3);
        
        tsbRepository.save(tempTarget1);
        tsbRepository.save(tempTarget2);
        tsbRepository.save(tempTarget3);

        return "Populate succesfull";
    }
    

    // Bowlingball related stuff
    @RequestMapping(value = "/targetsportsball",  method=RequestMethod.POST)
    public void saveTargetSportsBall(@RequestBody TargetSportsBall targetsportsball) {
        tsbRepository.save(targetsportsball);
    }
    
    @RequestMapping(value = "/targetsportsballs",  method=RequestMethod.GET)
    public Iterable<TargetSportsBall> fetchTargetSportsBalls() {
        return tsbRepository.findAll();
    }
    
    @RequestMapping(value = "/targetsportsball/{targetsportsballId}",  method=RequestMethod.GET)
    public TargetSportsBall fetchTargetSportsBall(@PathVariable long targetsportsballId) {
        return tsbRepository.findOne(targetsportsballId);
    }
    
    @RequestMapping(value = "/targetsportsball/{targetsportsballId}",  method=RequestMethod.DELETE)
    public TargetSportsBall deleteTargetSportsBall(@PathVariable long targetsportsballId) {
        TargetSportsBall temp = tsbRepository.findOne(targetsportsballId);
        tsbRepository.delete(tsbRepository.findOne(targetsportsballId));
        return temp;
    }
    
    @RequestMapping(value = "/targetsportsball/color/{targetsportsballColor}",  method=RequestMethod.GET)
    public List<TargetSportsBall> fetchTargetSportsBallsByColor(@PathVariable String targetsportsballColor) {
        return tsbRepository.findByColor(targetsportsballColor);
    }
    
    @RequestMapping(value = "/targetsportsball/material/{targetsportsballMaterial}",  method=RequestMethod.GET)
    public List<TargetSportsBall> fetchTargetSportsBallsByMaterial(@PathVariable String targetsportsballMaterial) {
        return tsbRepository.findByMaterial(targetsportsballMaterial);
    }
    
    @RequestMapping(value = "/targetsportsball/name/{bowlingballName}",  method=RequestMethod.GET)
    public TargetSportsBall fetchTargetSportsBallByName(@PathVariable String targetsportsballName) {
        return tsbRepository.findByName(targetsportsballName);
    }
     
    @RequestMapping(value = "/targetsportsball/type/{type}",  method=RequestMethod.GET)
    public List<TargetSportsBall> fetchTargetSportsBallsByType(@PathVariable String type) {
        return tsbRepository.findByType(type);
    }
}