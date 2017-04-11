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
    BowlingballRepository bbRepository;
    
    @Autowired
    GolfballRepository gbRepository;
    
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
        Bowlingball bowlingball1 = new Bowlingball("bb1", "Black", 40, 3030, "Somethingsomething", "Steel", "Adidas", "A ball not to kick", "Bowlingball", 109.95, 1, 3, 1);
        Bowlingball bowlingball2 = new Bowlingball("bb2", "Orange", 40, 200, "", "Rubber", "AnotherDas", "A ball not to kick", "Bowlingball", 105.95, 6, 4, 2);
        Bowlingball bowlingball3 = new Bowlingball("bb3", "Grey", 40, 6000, "Heavy ball", "Concrete", "Adidas", "A ball not to kick", "Bowlingball", 102.95, 22, 5, 3);
        
        bbRepository.save(bowlingball1);
        bbRepository.save(bowlingball2);
        bbRepository.save(bowlingball3);
        
        //GOLFBALLS
        Golfball golfball1 = new Golfball("gb1", 5, 50, "Basic ball", "Elastic rubber", "Adidas", "Golfball", "Golfball", 0.95, 5, 1);
        Golfball golfball2 = new Golfball("gb2", 4, 40, "Basic ball vol 2", "Duck skin", "SecondDas", "Golffibals", "Golfball", 0.65, 8, 2);
        Golfball golfball3 = new Golfball("gb3", 5, 500, "Prototype", "Goat stomach", "Nike", "A ball to hit", "Golfball", 0.45, 1, 3);
        
        gbRepository.save(golfball1);
        gbRepository.save(golfball2);
        gbRepository.save(golfball3);

        return "Populate succesfull";
    }
    
    //Golfball related stuff
    @RequestMapping(value = "/golfball",  method=RequestMethod.POST)
    public void saveGolfball(@RequestBody Golfball golfball) {
        gbRepository.save(golfball);
    }
    
    @RequestMapping(value = "/golfballs",  method=RequestMethod.GET)
    public Iterable<Golfball> fetchGolfballs() {
        return gbRepository.findAll();
    }
    
    @RequestMapping(value = "/golfball/{golfballId}",  method=RequestMethod.GET)
    public Golfball fetchgolfball(@PathVariable long golfballId) {
        return gbRepository.findOne(golfballId);
    }
    
    @RequestMapping(value = "/golfball/material/{footballMaterial}",  method=RequestMethod.GET)
    public List<Golfball> fetchGolfballsByMaterial(@PathVariable String golfballMaterial) {
        return gbRepository.findByMaterial(golfballMaterial);
    }
    
    @RequestMapping(value = "/golfball/name/{golfballName}",  method=RequestMethod.GET)
    public Golfball fetchGolfballByName(@PathVariable String golfballName) {
        return gbRepository.findByName(golfballName);
    }
    
    @RequestMapping(value = "/golfball/{golfballId}",  method=RequestMethod.DELETE)
    public Golfball deleteGolfball(@PathVariable long golfballId) {
        Golfball temp = gbRepository.findOne(golfballId);
        gbRepository.delete(gbRepository.findOne(golfballId));
        return temp;
    }
    

    // Bowlingball related stuff
    @RequestMapping(value = "/bowlingball",  method=RequestMethod.POST)
    public void saveBowlingball(@RequestBody Bowlingball bowlingball) {
        bbRepository.save(bowlingball);
    }
    
    @RequestMapping(value = "/bowlingballs",  method=RequestMethod.GET)
    public Iterable<Bowlingball> fetchBowlingballs() {
        return bbRepository.findAll();
    }
    
    @RequestMapping(value = "/bowlingball/{bowlingballId}",  method=RequestMethod.GET)
    public Bowlingball fetchBowlingball(@PathVariable long bowlingballId) {
        return bbRepository.findOne(bowlingballId);
    }
    
    @RequestMapping(value = "/bowlingball/{bowlingballId}",  method=RequestMethod.DELETE)
    public Bowlingball deleteBowlingball(@PathVariable long bowlingballId) {
        Bowlingball temp = bbRepository.findOne(bowlingballId);
        bbRepository.delete(bbRepository.findOne(bowlingballId));
        return temp;
    }
    
    @RequestMapping(value = "/bowlingball/color/{bowlingballColor}",  method=RequestMethod.GET)
    public List<Bowlingball> fetchBowlingballsByColor(@PathVariable String bowlingballColor) {
        return bbRepository.findByColor(bowlingballColor);
    }
    
    @RequestMapping(value = "/bowlingball/material/{bowlingballMaterial}",  method=RequestMethod.GET)
    public List<Bowlingball> fetchBowlingballsByMaterial(@PathVariable String bowlingballMaterial) {
        return bbRepository.findByMaterial(bowlingballMaterial);
    }
    
    @RequestMapping(value = "/bowlingball/name/{bowlingballName}",  method=RequestMethod.GET)
    public Bowlingball fetchBowlingballByName(@PathVariable String bowlingballName) {
        return bbRepository.findByName(bowlingballName);
    }
     
    @RequestMapping(value = "/bowlingball/holeamount/{holeamount}",  method=RequestMethod.GET)
    public List<Bowlingball> fetchBowlingballsByHoleAmount(@PathVariable int holeamount) {
        return bbRepository.findByHoleAmount(holeamount);
    }
    
  
    // Football related stuff
    @RequestMapping(value = "/football",  method=RequestMethod.POST)
    public void saveFootball(@RequestBody Football football) {
        fbRepository.save(football);
    }
    
    
    @RequestMapping(value = "/footballs",  method=RequestMethod.GET)
    public Iterable<Football> fetchFootballs() {
        return fbRepository.findAll();
    }
    
    @RequestMapping(value = "/football/{footballId}",  method=RequestMethod.GET)
    public Football fetchFootball(@PathVariable long footballId) {
        return fbRepository.findOne(footballId);
    }
    
    @RequestMapping(value = "/football/{footballId}",  method=RequestMethod.DELETE)
    public Football deleteFootball(@PathVariable long footballId) {
        Football temp = fbRepository.findOne(footballId);
        fbRepository.delete(fbRepository.findOne(footballId));
        return temp;
    }
    
    @RequestMapping(value = "/football/color/{footballColor}",  method=RequestMethod.GET)
    public List<Football> fetchFootballsByColor(@PathVariable String footballColor) {
        return fbRepository.findByColor(footballColor);
    }
    
    @RequestMapping(value = "/football/material/{footballMaterial}",  method=RequestMethod.GET)
    public List<Football> fetchFootballsByMaterial(@PathVariable String footballMaterial) {
        return fbRepository.findByMaterial(footballMaterial);
    }
    
    @RequestMapping(value = "/football/name/{footballName}",  method=RequestMethod.GET)
    public Football fetchFootballByName(@PathVariable String footballName) {
        return fbRepository.findByName(footballName);
    }
}