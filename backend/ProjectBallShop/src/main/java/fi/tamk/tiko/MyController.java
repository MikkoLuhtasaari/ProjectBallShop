package fi.tamk.tiko;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.HashSet;

import javax.*;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.ApplicationArguments;

@RestController
public class MyController implements ApplicationRunner {
    
    @Autowired
    GoalSportsBallRepository gsbRepository;
  
    @Autowired
    TargetSportsBallRepository tsbRepository;
    
    @Autowired
    BatAndRaquetsGamesRepository brRepository;
    
    @Autowired
    NetSportsBallRepository nsRepository;
    
    @Autowired
    UserRepository userRepository;
    
    @Autowired
    NSBReviewRepository nsReviewRepository;
    
    @Autowired
    GSBReviewRepository gsReviewRepository;
    
    @Autowired
    BARReviewRepository brReviewRepository;
    
    @Autowired
    TSBReviewRepository tsReviewRepository;
    
    @RequestMapping(value= "/categories", method=RequestMethod.GET)
    public String getCategories() {
        return "Bat and Racquet games, Goal sports, Net sports, Target sports";
    }
    
    public void run(ApplicationArguments args) {
        printHelloMessage();
        initStuff();
    }
        
    // User related stuff
    @RequestMapping(value = "/user",  method=RequestMethod.POST)
    public User saveUser(@RequestBody User user) {
        userRepository.save(user);
        return user;
    }
    
    @RequestMapping(value = "/user/{id}",  method=RequestMethod.PUT)
    public User saveUser(@PathVariable long id, @RequestBody User user) {
        
        if(userRepository.findOne(id) != null) {
            User temp = userRepository.findOne(id);
            
            temp.setUserName(user.getUserName());
            temp.setEmail(user.getEmail());
            temp.setPassword(user.getPassword());
            temp.setFirstName(user.getFirstName());
            temp.setLastName(user.getLastName());
            temp.setCity(user.getCity());
            temp.setAddress(user.getAddress());
            temp.setZipCode(user.getZipCode());
            temp.setAccessLevel(user.getAccessLevel());
            
            userRepository.save(temp);
            return userRepository.findOne(id);
        } else {
            System.out.println("Error! Invalid id");
            return null;
        }
    }
    
    @RequestMapping(value="/users", method=RequestMethod.GET)
    public Iterable<User> fetchUsers() {
        return userRepository.findAll();
    }
    
    @RequestMapping(value="/user/{userId}", method=RequestMethod.GET)
    public User fetchUserById(@PathVariable long userId) {
        
        if(userRepository.findOne(userId) != null) {
            return userRepository.findOne(userId);
        } else {
            System.out.println("Error! Invalid user id");
            return null;
        }
    }
    
    @RequestMapping(value="/user/username/{userName}", method=RequestMethod.GET)
    public User fetchUserByUserName(@PathVariable String userName) {
        
        if(userRepository.findByUserName(userName) != null) {
            return userRepository.findByUserName(userName);
        } else {
            System.out.println("Error! No user found with that username");
            return null;
        }
    }
    
    @RequestMapping(value = "/user/{userId}",  method=RequestMethod.DELETE)
    public User deleteUser(@PathVariable long userId) {
        
        if(userRepository.findOne(userId) != null) {
            User temp = userRepository.findOne(userId);
            userRepository.delete(userRepository.findOne(userId));
            return temp;
        } else {
            System.out.println("Error! Invalid user id");
            return null;
        }
    }
    
    // Volleyball and Handball related stuff
    @RequestMapping(value = "/netsportsball",  method=RequestMethod.POST)
    public NetSportsBall saveNetSportsBall(@RequestBody NetSportsBall netsportsball) {
        nsRepository.save(netsportsball);
        return netsportsball;
    }
    
    @RequestMapping(value = "/netsportsball/{id}",  method=RequestMethod.PUT)
    public NetSportsBall modifyNetSportsBall(@PathVariable long id, @RequestBody NetSportsBall netsportsball) {
        
        if(nsRepository.findOne(id) != null) {
            NetSportsBall temp = nsRepository.findOne(id);
            
            temp.setName(netsportsball.getName());
            temp.setColor(netsportsball.getColor());
            temp.setDiameter(netsportsball.getDiameter());
            temp.setWeigth(netsportsball.getWeigth());
            temp.setDetails(netsportsball.getDetails());
            temp.setMaterial(netsportsball.getMaterial());
            temp.setManufacturer(netsportsball.getManufacturer());
            temp.setShortDetails(netsportsball.getShortDetails());
            temp.setType(netsportsball.getType());
            temp.setPrice(netsportsball.getPrice());
            temp.setAmount(netsportsball.getAmount());
            
            nsRepository.save(temp);
            return nsRepository.findOne(id); 
        } else {
            System.out.println("Error! Invalid id");
            return null;
        }
    }
   
    @RequestMapping(value = "/netsportsballs",  method=RequestMethod.GET)
    public Iterable<NetSportsBall> fetchNetSportsBalls() {
        return nsRepository.findAll();
    }
    
    @RequestMapping(value = "/netsportsball/{netsportsballId}",  method=RequestMethod.GET)
    public NetSportsBall fetchNetSportsBall(@PathVariable long netsportsballId) {
        
        if(nsRepository.findOne(netsportsballId) != null) {
            return nsRepository.findOne(netsportsballId);
        } else {
            System.out.println("Error! Invalid netSportsBall id");
            return null;
        }
    }
    
    @RequestMapping(value = "/netsportsball/{netsportsballId}",  method=RequestMethod.DELETE)
    public NetSportsBall deleteNetSportsBall(@PathVariable long netsportsballId) {
        
        if(nsRepository.findOne(netsportsballId) != null) {
            NetSportsBall temp = nsRepository.findOne(netsportsballId);
            nsRepository.delete(nsRepository.findOne(netsportsballId));
            return temp;
        } else {
            System.out.println("Error! Invalid netSportsBall id");
            return null;
        }
    }
    
    @RequestMapping(value = "/netsportsball/color/{netsportsballColor}",  method=RequestMethod.GET)
    public List<NetSportsBall> fetchNetSportsBall(@PathVariable String netsportsballColor) {
        
        if(nsRepository.findByColor(netsportsballColor) != null) {
            return nsRepository.findByColor(netsportsballColor);
        } else {
            System.out.println("Error! No balls with that color");
            return null;
        }
    }
    
    @RequestMapping(value = "/netsportsball/material/{netsportsballMaterial}",  method=RequestMethod.GET)
    public List<NetSportsBall> fetchNetSportsBallByMaterial(@PathVariable String netsportsballMaterial) {
        
        if(nsRepository.findByMaterial(netsportsballMaterial) != null) {
            return nsRepository.findByMaterial(netsportsballMaterial);
        } else {
            System.out.println("Error! No balls with that material");
            return null;
        }
    }
    
    @RequestMapping(value = "/netsportsball/name/{netsportsballName}",  method=RequestMethod.GET)
    public NetSportsBall fetchNetSportsBallByName(@PathVariable String netsportsballName) {
        
        if(nsRepository.findByName(netsportsballName) != null) {
            return nsRepository.findByName(netsportsballName);
        } else {
            System.out.println("Error! No balls with that name");
            return null;
        }
    }
     
    @RequestMapping(value = "/netsportsball/type/{type}",  method=RequestMethod.GET)
    public List<NetSportsBall> fetchNetSportsBallByType(@PathVariable String type) {
        
        if(nsRepository.findByType(type) != null) {
            return nsRepository.findByType(type);
        } else {
            System.out.println("Error! No balls with that material");
            return null;
        }
    }
    
    @RequestMapping(value="/netsportsball/{ballid}/review/user/{userid}", method=RequestMethod.POST)
    public NSBReview saveNSBReview(@PathVariable long ballid, @PathVariable long userid, @RequestBody NSBReview review) {
        NSBReview temp = new NSBReview();
        temp.setUserOwner(userRepository.findOne(userid));
        temp.setUserId(userid);
        temp.setScore(review.getScore());
        temp.setHeader(review.getHeader());
        temp.setContent(review.getContent());
        temp.setOwner(nsRepository.findOne(ballid));
        temp.setOwnerBallId(ballid);
        nsReviewRepository.save(temp);
        return temp;
    }
    
    @RequestMapping(value = "/netsportsball/review/{reviewid}",  method=RequestMethod.DELETE)
    public NSBReview deleteNSBReviewById(@PathVariable long reviewid) {
        
        if(nsReviewRepository.findOne(reviewid) != null) {
            NSBReview temp = nsReviewRepository.findOne(reviewid);
            nsReviewRepository.delete(nsReviewRepository.findOne(reviewid));
            return temp;
        } else {
            System.out.println("Error! Invalid netSportsBall id");
            return null;
        }
    }  
    
    @RequestMapping(value="/netsportsballs/reviews", method=RequestMethod.GET)
    public Iterable<NSBReview> fetchReviews() {
        return nsReviewRepository.findAll();
    }
    
    @RequestMapping(value="/netsportsballs/review/{id}", method=RequestMethod.GET)
    public NSBReview fetchReviewById(@PathVariable long id) {
        return nsReviewRepository.findOne(id);
    }
    
    
    // Baseball and Tennisball related stuff
    @RequestMapping(value = "/batandraquetsgame",  method=RequestMethod.POST)
    public BatAndRaquetsGames saveBatAndRaquetsGame(@RequestBody BatAndRaquetsGames batandraquetsgame) {
        brRepository.save(batandraquetsgame);
        return batandraquetsgame;
    }
    
    @RequestMapping(value = "/batandraquetsgame/{id}",  method=RequestMethod.PUT)
    public BatAndRaquetsGames modifyBatAndRaquetsGame(@PathVariable long id, @RequestBody BatAndRaquetsGames batandraquetsgame) {
        
        if(brRepository.findOne(id) != null) {
            BatAndRaquetsGames temp = brRepository.findOne(id);
            
            temp.setName(batandraquetsgame.getName());
            temp.setColor(batandraquetsgame.getColor());
            temp.setDiameter(batandraquetsgame.getDiameter());
            temp.setWeigth(batandraquetsgame.getWeigth());
            temp.setDetails(batandraquetsgame.getDetails());
            temp.setMaterial(batandraquetsgame.getMaterial());
            temp.setManufacturer(batandraquetsgame.getManufacturer());
            temp.setShortDetails(batandraquetsgame.getShortDetails());
            temp.setType(batandraquetsgame.getType());
            temp.setPrice(batandraquetsgame.getPrice());
            temp.setAmount(batandraquetsgame.getAmount());
            
            brRepository.save(temp);
            return brRepository.findOne(id);
        } else {
            System.out.println("Error! Invalid id");
            return null;
        }
    }
    
    @RequestMapping(value = "/batandraquetsgames",  method=RequestMethod.GET)
    public Iterable<BatAndRaquetsGames> fetchBatAndRaquetsGames() {
        return brRepository.findAll();
    }
    
    @RequestMapping(value = "/batandraquetsgame/{batandraquetsgameId}",  method=RequestMethod.GET)
    public BatAndRaquetsGames fetchBatAndRaquetsGame(@PathVariable long batandraquetsgameId) {
        
        if(brRepository.findOne(batandraquetsgameId) != null) {
            return brRepository.findOne(batandraquetsgameId);
        } else {
            System.out.println("Error! No balls with that id");
            return null;
        }
    }
    
    @RequestMapping(value = "/batandraquetsgame/{batandraquetsgameId}",  method=RequestMethod.DELETE)
    public BatAndRaquetsGames deleteBatAndRaquetsGame(@PathVariable long batandraquetsgameId) {
        
        if(brRepository.findOne(batandraquetsgameId) != null) {
            BatAndRaquetsGames temp = brRepository.findOne(batandraquetsgameId);
            brRepository.delete(brRepository.findOne(batandraquetsgameId));
            return temp;
        } else {
            System.out.println("Error! No balls with that id");
            return null;
        }
    }
    
    @RequestMapping(value = "/batandraquetsgame/color/{batandraquetsgameColor}",  method=RequestMethod.GET)
    public List<BatAndRaquetsGames> fetchBatAndRaquetsGameByColor(@PathVariable String batandraquetsgameColor) {
        
        if(brRepository.findByColor(batandraquetsgameColor) != null) {
            return brRepository.findByColor(batandraquetsgameColor);
        } else {
            System.out.println("Error! No balls of that color");
            return null;
        }
    }
    
    @RequestMapping(value = "/batandraquetsgame/material/{batandraquetsgameMaterial}",  method=RequestMethod.GET)
    public List<BatAndRaquetsGames> fetchBatAndRaquetsGamesByMaterial(@PathVariable String batandraquetsgameMaterial) {
        
        if(brRepository.findByMaterial(batandraquetsgameMaterial) != null) {
            return brRepository.findByMaterial(batandraquetsgameMaterial);
        } else {
            System.out.println("Error! No balls with that material");
            return null;
        }
    }
    
    @RequestMapping(value = "/batandraquetsgame/name/{batandraquetsgameName}",  method=RequestMethod.GET)
    public BatAndRaquetsGames fetchBatAndRaquetsGamesByName(@PathVariable String batandraquetsgameName) {
        
        if(brRepository.findByName(batandraquetsgameName) != null) {
            return brRepository.findByName(batandraquetsgameName);
        } else {
            System.out.println("Error! No balls with that name");
            return null;
        }
    }
     
    @RequestMapping(value = "/batandraquetsgame/type/{type}",  method=RequestMethod.GET)
    public List<BatAndRaquetsGames> fetchByType(@PathVariable String type) {
        
        if(brRepository.findByType(type) != null) {
            return brRepository.findByType(type);
        } else {
            System.out.println("Error! No balls of that type");
            return null;
        }
    }
    
    @RequestMapping(value="/batandraquetsgame/{ballid}/review/user/{userid}", method=RequestMethod.POST)
    public BARReview saveBARReview(@PathVariable long ballid, @PathVariable long userid, @RequestBody BARReview review) {
        BARReview temp = new BARReview();
        temp.setUserOwner(userRepository.findOne(userid));
        temp.setUserId(userid);
        temp.setScore(review.getScore());
        temp.setHeader(review.getHeader());
        temp.setContent(review.getContent());
        temp.setOwner(brRepository.findOne(ballid));
        temp.setOwnerBallId(ballid);
        brReviewRepository.save(temp);
        return temp;
    }
    
    @RequestMapping(value = "/batandraquetsgame/review/{reviewid}",  method=RequestMethod.DELETE)
    public BARReview deleteBARReviewById(@PathVariable long reviewid) {
        
        if(brReviewRepository.findOne(reviewid) != null) {
            BARReview temp = brReviewRepository.findOne(reviewid);
            brReviewRepository.delete(brReviewRepository.findOne(reviewid));
            return temp;
        } else {
            System.out.println("Error! Invalid netSportsBall id");
            return null;
        }
    }  
    
    @RequestMapping(value="/batandraquetsgames/reviews", method=RequestMethod.GET)
    public Iterable<BARReview> fetchBARReviews() {
        return brReviewRepository.findAll();
    }
    
    @RequestMapping(value="/batandraquetsgames/review/{id}", method=RequestMethod.GET)
    public BARReview fetchBARReviewById(@PathVariable long id) {
        return brReviewRepository.findOne(id);
    }
    
    
    
    // Football and Basketball related stuff
    @RequestMapping(value = "/goalsportsball",  method=RequestMethod.POST)
    public GoalSportsBall saveGoalSportsBall(@RequestBody GoalSportsBall goalsportsball) {
        gsbRepository.save(goalsportsball);
        return goalsportsball;
    }
    
    @RequestMapping(value = "/goalsportsball/{id}",  method=RequestMethod.PUT)
    public GoalSportsBall modifyGoalSportsBall(@PathVariable long id, @RequestBody GoalSportsBall goalsportsball) {
        
        if(gsbRepository.findOne(id) != null) {
            GoalSportsBall temp = gsbRepository.findOne(id);
            
            temp.setName(goalsportsball.getName());
            temp.setColor(goalsportsball.getColor());
            temp.setDiameter(goalsportsball.getDiameter());
            temp.setWeigth(goalsportsball.getWeigth());
            temp.setDetails(goalsportsball.getDetails());
            temp.setMaterial(goalsportsball.getMaterial());
            temp.setManufacturer(goalsportsball.getManufacturer());
            temp.setShortDetails(goalsportsball.getShortDetails());
            temp.setType(goalsportsball.getType());
            temp.setPrice(goalsportsball.getPrice());
            temp.setAmount(goalsportsball.getAmount());
            
            gsbRepository.save(temp);
            return gsbRepository.findOne(id);
        } else {
            System.out.println("Error! Invalid id");
            return null;
        }
    }
    
    @RequestMapping(value = "/goalsportsballs",  method=RequestMethod.GET)
    public Iterable<GoalSportsBall> fetchGoalSportsBalls() {
        return gsbRepository.findAll();
    }
    
    @RequestMapping(value = "/goalsportsball/{goalsportsballId}",  method=RequestMethod.GET)
    public GoalSportsBall fetchGoalSportsBall(@PathVariable long goalsportsballId) {
        
        if(gsbRepository.findOne(goalsportsballId) != null) {
            return gsbRepository.findOne(goalsportsballId);
        } else {
            System.out.println("Error! No balls with that id found");
            return null;
        }
    }
    
    @RequestMapping(value = "/goalsportsball/{goalsportsballId}",  method=RequestMethod.DELETE)
    public GoalSportsBall deleteGoalSportsBall(@PathVariable long goalsportsballId) {
        
        if(gsbRepository.findOne(goalsportsballId) != null) {
            GoalSportsBall temp = gsbRepository.findOne(goalsportsballId);
            gsbRepository.delete(gsbRepository.findOne(goalsportsballId));
            return temp;
        } else {
            System.out.println("Error! No balls with that id found");
            return null;
        }
    }
    
    @RequestMapping(value = "/goalsportsball/color/{goalsportsballColor}",  method=RequestMethod.GET)
    public List<GoalSportsBall> fetchGoalSportsBallsByColor(@PathVariable String goalsportsballColor) {
        
        if(gsbRepository.findByColor(goalsportsballColor) != null) {
            return gsbRepository.findByColor(goalsportsballColor);
        } else {
            System.out.println("Error! No balls with that color");
            return null;
        }
    }
    
    @RequestMapping(value = "/goalsportsball/material/{goalsportsballMaterial}",  method=RequestMethod.GET)
    public List<GoalSportsBall> fetchGoalSportsBallsByMaterial(@PathVariable String goalsportsballMaterial) {
        
        if(gsbRepository.findByMaterial(goalsportsballMaterial) != null) {
            return gsbRepository.findByMaterial(goalsportsballMaterial);
        } else {
            System.out.println("Error! No balls with that material");
            return null;
        }
    }
    
    @RequestMapping(value = "/goalsportsball/name/{goalsportsballName}",  method=RequestMethod.GET)
    public GoalSportsBall fetchGoalSportsBallByName(@PathVariable String goalsportsballName) {
        
        if(gsbRepository.findByName(goalsportsballName) != null) {
            return gsbRepository.findByName(goalsportsballName);
        } else {
            System.out.println("Error! No balls with that name");
            return null;
        }
    }
     
    @RequestMapping(value = "/goalsportsball/type/{type}",  method=RequestMethod.GET)
    public List<GoalSportsBall> fetchGoalSportsBallsByType(@PathVariable String type) {
        
        if(gsbRepository.findByType(type) != null) {
            return gsbRepository.findByType(type);
        } else {
            System.out.println("Error no balls of that type");
            return null;
        }
    }
    
    @RequestMapping(value="/goalsportsball/{ballid}/review/user/{userid}", method=RequestMethod.POST)
    public GSBReview saveGSBReview(@PathVariable long ballid, @PathVariable long userid, @RequestBody GSBReview review) {
        GSBReview temp = new GSBReview();
        temp.setUserOwner(userRepository.findOne(userid));
        temp.setUserId(userid);
        temp.setScore(review.getScore());
        temp.setHeader(review.getHeader());
        temp.setContent(review.getContent());
        temp.setOwner(gsbRepository.findOne(ballid));
        temp.setOwnerBallId(ballid);
        gsReviewRepository.save(temp);
        return temp;
    }
    
    @RequestMapping(value = "/goalsportsball/review/{reviewid}",  method=RequestMethod.DELETE)
    public GSBReview deleteGSBReviewById(@PathVariable long reviewid) {
        
        if(gsReviewRepository.findOne(reviewid) != null) {
            GSBReview temp = gsReviewRepository.findOne(reviewid);
            gsReviewRepository.delete(gsReviewRepository.findOne(reviewid));
            return temp;
        } else {
            System.out.println("Error! Invalid goalsportsball id");
            return null;
        }
    }  
    
    @RequestMapping(value="/goalsportsballs/reviews", method=RequestMethod.GET)
    public Iterable<GSBReview> fetchGSBReviews() {
        return gsReviewRepository.findAll();
    }
    
    @RequestMapping(value="/goalsportsballs/review/{id}", method=RequestMethod.GET)
    public GSBReview fetchGSBReviewById(@PathVariable long id) {
        return gsReviewRepository.findOne(id);
    }
    

    // Bowlingball and Golfball related stuff
    @RequestMapping(value = "/targetsportsball",  method=RequestMethod.POST)
    public void saveTargetSportsBall(@RequestBody TargetSportsBall targetsportsball) {
        tsbRepository.save(targetsportsball);
    }
    
    @RequestMapping(value = "/targetsportsball/{id}",  method=RequestMethod.PUT)
    public void modifyTargetSportsBall(@PathVariable long id, @RequestBody TargetSportsBall targetsportsball) {
        
        if(tsbRepository.findOne(id) != null) {
            tsbRepository.delete(tsbRepository.findOne(id));
            
            TargetSportsBall temp = new TargetSportsBall(targetsportsball.getName(), targetsportsball.getColor(), targetsportsball.getDiameter(), targetsportsball.getWeigth(), targetsportsball.getDetails(), targetsportsball.getMaterial(), targetsportsball.getManufacturer(), targetsportsball.getShortDetails(), targetsportsball.getType(), targetsportsball.getPrice(), targetsportsball.getAmount(), id);
            
            tsbRepository.save(temp);
        } else {
            System.out.println("Error, invalid ID!");
        }
    }
    
    @RequestMapping(value = "/targetsportsballs",  method=RequestMethod.GET)
    public Iterable<TargetSportsBall> fetchTargetSportsBalls() {
        return tsbRepository.findAll();
    }
    
    @RequestMapping(value = "/targetsportsball/{targetsportsballId}",  method=RequestMethod.GET)
    public TargetSportsBall fetchTargetSportsBall(@PathVariable long targetsportsballId) {
        
        if(tsbRepository.findOne(targetsportsballId) != null) {
            return tsbRepository.findOne(targetsportsballId);
        } else {
            System.out.println("Error! No ball with that id");
            return null;
        }
    }
    
    @RequestMapping(value = "/targetsportsball/{targetsportsballId}",  method=RequestMethod.DELETE)
    public TargetSportsBall deleteTargetSportsBall(@PathVariable long targetsportsballId) {
        
        if(tsbRepository.findOne(targetsportsballId) != null) {
            TargetSportsBall temp = tsbRepository.findOne(targetsportsballId);
            tsbRepository.delete(tsbRepository.findOne(targetsportsballId));
            return temp;
        } else {
            System.out.println("Error! No ball with that id");
            return null;
        }
    }
    
    @RequestMapping(value = "/targetsportsball/color/{targetsportsballColor}",  method=RequestMethod.GET)
    public List<TargetSportsBall> fetchTargetSportsBallsByColor(@PathVariable String targetsportsballColor) {
        
        if(tsbRepository.findByColor(targetsportsballColor) != null) {
            return tsbRepository.findByColor(targetsportsballColor);
        } else {
            System.out.println("Error! No balls with that color");
            return null;
        }
    }
    
    @RequestMapping(value = "/targetsportsball/material/{targetsportsballMaterial}",  method=RequestMethod.GET)
    public List<TargetSportsBall> fetchTargetSportsBallsByMaterial(@PathVariable String targetsportsballMaterial) {
        
        if(tsbRepository.findByMaterial(targetsportsballMaterial) != null) {
            return tsbRepository.findByMaterial(targetsportsballMaterial);
        } else {
            System.out.println("Error! No balls with that material");
            return null;
        }
    }
    
    @RequestMapping(value = "/targetsportsball/name/{targetsportsballName}",  method=RequestMethod.GET)
    public TargetSportsBall fetchTargetSportsBallByName(@PathVariable String targetsportsballName) {
        
        if(tsbRepository.findByName(targetsportsballName) != null) {
            return tsbRepository.findByName(targetsportsballName);
        } else {
            System.out.println("Error! No balls with that name");
            return null;
        }
    }
     
    @RequestMapping(value = "/targetsportsball/type/{type}",  method=RequestMethod.GET)
    public List<TargetSportsBall> fetchTargetSportsBallsByType(@PathVariable String type) {
        
        if(tsbRepository.findByType(type) != null) {
            return tsbRepository.findByType(type);
        } else {
            System.out.println("Error! No balls of that type");
            return null;
        }
    }
    
     @RequestMapping(value="/targetsportsball/{ballid}/review/user/{userid}", method=RequestMethod.POST)
    public TSBReview saveTSBReview(@PathVariable long ballid, @PathVariable long userid, @RequestBody TSBReview review) {
        TSBReview temp = new TSBReview();
        temp.setUserOwner(userRepository.findOne(userid));
        temp.setUserId(userid);
        temp.setScore(review.getScore());
        temp.setHeader(review.getHeader());
        temp.setContent(review.getContent());
        temp.setOwner(tsbRepository.findOne(ballid));
        temp.setOwnerBallId(ballid);
        tsReviewRepository.save(temp);
        return temp;
    }
    
    @RequestMapping(value = "/targetsportsball/review/{reviewid}",  method=RequestMethod.DELETE)
    public TSBReview deleteTSBReviewById(@PathVariable long reviewid) {
        
        if(tsReviewRepository.findOne(reviewid) != null) {
            TSBReview temp = tsReviewRepository.findOne(reviewid);
            tsReviewRepository.delete(tsReviewRepository.findOne(reviewid));
            return temp;
        } else {
            System.out.println("Error! Invalid targetsportsball id");
            return null;
        }
    }  
    
    @RequestMapping(value="/targetsportsballs/reviews", method=RequestMethod.GET)
    public Iterable<TSBReview> fetchTSBReviews() {
        return tsReviewRepository.findAll();
    }
    
    @RequestMapping(value="/targetsportsballs/review/{id}", method=RequestMethod.GET)
    public TSBReview fetchTSBReviewById(@PathVariable long id) {
        return tsReviewRepository.findOne(id);
    }
    
    public void printHelloMessage() {
                
        //Welcome message
        System.out.println("                                                   ");
        System.out.println("                                                   ");
        System.out.println("  ____        _ _   _    _                _        ");
        System.out.println(" |  _ \\      | | | | |  | |              | |       ");
        System.out.println(" | |_) | __ _| | | | |__| | __ ___      _| | _____ ");
        System.out.println(" |  _ < / _` | | | |  __  |/ _` \\ \\ /\\ / / |/ / __|");
        System.out.println(" | |_) | (_| | | | | |  | | (_| |\\ V  V /|   <\\__ \\");
        System.out.println(" |____/ \\__,_|_|_| |_|  |_|\\__,_| \\_/\\_/ |_|\\_\\___/");
        System.out.println("                                                   ");
        System.out.println("                                                   ");
        
        // Paths (Reviews)
        System.out.println("Review related requests");
        System.out.println("POST review/ curl -H \"Content-Type: application/json\" -X POST -d \"{\"category\" : \"Bat and Racquet games\", \"userId\" : 1, \"itemId\" : \"1\", \"score\" : 2, \"header\" : \"Header\", \"content\" : \"Content\"}\" http://localhost:8080/review/");
        System.out.println("DELETE curl -X DELETE localhost:8080/review/{id}");
        System.out.println("GET reviews/");
        System.out.println("GET review/{id}");
        System.out.println("GET review/{category}/{itemId}");
        System.out.println("GET review/user/{userId}");
        System.out.println("");
        
        //Paths (Users)
        System.out.println("User related requests");
        System.out.println("POST user/ curl -H \"Content-Type: application/json\" -X POST -d \"{\"firstName\" : \"Jeppe\", \"lastName\" : \"Jeppenen\", \"userName\" : \"Jeppetes\", \"password\" : \"jeppe\", \"email\" : \"jeppe@jeppe.com\"}, \"city\" : \"Tampere\", \"address\" : \"Ruhtinaankatu 1\" : \"zipCode\" : 33560, \"accessLevel\" : \"Admin\" http://localhost:8080/user/");
        System.out.println("PUT user/{id} curl -H \"Content-Type: application/json\" -X PUT -d \"{\"firstName\" : \"Jeppe\", \"lastName\" : \"Jeppenen\", \"userName\" : \"Jeppetes\", \"password\" : \"jeppe\", \"email\" : \"jeppe@jeppe.com\"}, \"city\" : \"Tampere\", \"address\" : \"Ruhtinaankatu 1\" : \"zipCode\" : 33560, \"accessLevel\" : \"Admin\" http://localhost:8080/user/{id}");
        System.out.println("DELETE curl -X DELETE localhost:8080/user/{id}");
        System.out.println("GET users/");
        System.out.println("GET user/{id}");
        System.out.println("GET user/username/{userName}");
        System.out.println("");
        
        //Paths (Netsportsballs)
        System.out.println("Volleyball and Handball related requests");
        System.out.println("POST netsportsball/ curl -H \"Content-Type: application/json\" -X POST -d \"{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Baseball\", \"price\" : 15.95, \"amount\" : 1}\" http://localhost:8080/netsportsball/");
        System.out.println("PUT netsportsball/{id} curl -H \"Content-Type: application/json\" -X PUT -d \"{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Baseball\", \"price\" : 15.95, \"amount\" : 1}\" http://localhost:8080/netsportsball/{id}");
        System.out.println("DELETE curl -X DELETE localhost:8080/netsportsball/{id}");
        System.out.println("GET netsportsballs/");
        System.out.println("GET netsportsball/{id}/");
        System.out.println("GET netsportsball/{name}");
        System.out.println("GET netsportsball/material/{material}");
        System.out.println("GET netsportsball/color/{color}");
        System.out.println("GET netsportsball/type/{Volleyball | Handball}");
        System.out.println("POST /netsportsball/{ballid}/review/user/{userid} curl -H \"Content-Type: application/json\" -X POST -d \"{\"score\" : 1, \"header\" : \"testHeader\", \"content\" : \"testContent\"}\" http://localhost:8080/netsportsball/1/review/user/1");
        System.out.println("DELETE curl -X DELETE localhost:8080/netsportsball/review/{reviewid}");
        System.out.println("GET netsportsballs/reviews");
        System.out.println("GET netsportsballs/review/{id}");
        System.out.println("");
        
        //Paths (BatAndRaquetsGames)
        System.out.println("Baseball and Tennisball related requests");
        System.out.println("POST batandraquetsgame/ curl -H \"Content-Type: application/json\" -X POST -d \"{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Baseball\", \"price\" : 15.95, \"amount\" : 1}\" http://localhost:8080/batandraquetsgame/");
        System.out.println("PUT batandraquetsgame/{id} curl -H \"Content-Type: application/json\" -X PUT -d \"{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Baseball\", \"price\" : 15.95, \"amount\" : 1}\" http://localhost:8080/batandraquetsgame/{id}");
        System.out.println("DELETE curl -X DELETE localhost:8080/batandraquetsgame/{id}");
        System.out.println("GET batandraquetsgames/");
        System.out.println("GET batandraquetsgame/{id}/");
        System.out.println("GET batandraquetsgame/{name}");
        System.out.println("GET batandraquetsgame/material/{material}");
        System.out.println("GET batandraquetsgame/color/{color}");
        System.out.println("GET batandraquetsgame/type/{Baseball | Tennisball}");
        System.out.println("POST /batandraquetsgame/{ballid}/review/user/{userid} curl -H \"Content-Type: application/json\" -X POST -d \"{\"score\" : 1, \"header\" : \"testHeader\", \"content\" : \"testContent\"}\" http://localhost:8080/batandraquetsgame/1/review/user/1");
        System.out.println("DELETE curl -X DELETE localhost:8080/batandraquetsgame/review/{reviewid}");
        System.out.println("GET batandraquetsgames/reviews");
        System.out.println("GET batandraquetsgames/review/{id}");
        System.out.println("");
        
        //Paths (goalsportsball)
        System.out.println("Football and Basketball related requests");
        System.out.println("POST goalsportsball/ curl -H \"Content-Type: application/json\" -X POST -d \"{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Football\", \"price\" : 15.95, \"amount\" : 1}\" http://localhost:8080/goalsportsball/");
        System.out.println("PUT goalsportsball/{id} curl -H \"Content-Type: application/json\" -X PUT -d \"{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Football\", \"price\" : 15.95, \"amount\" : 1}\" http://localhost:8080/goalsportsball/{id}");
        System.out.println("DELETE curl -X DELETE localhost:8080/goalsportsball/{id}");
        System.out.println("GET goalsportsballs/");
        System.out.println("GET goalsportsball/{id}/");
        System.out.println("GET goalsportsball/{name}");
        System.out.println("GET goalsportsball/material/{material}");
        System.out.println("GET goalsportsball/color/{color}");
        System.out.println("GET goalsportsball/type/{Football | Basketball}");
        System.out.println("POST /goalsportsball/{ballid}/review/user/{userid} curl -H \"Content-Type: application/json\" -X POST -d \"{\"score\" : 1, \"header\" : \"testHeader\", \"content\" : \"testContent\"}\" http://localhost:8080/goalsportsball/1/review/user/1");
        System.out.println("DELETE curl -X DELETE localhost:8080/goalsportsball/review/{reviewid}");
        System.out.println("GET goalsportsballs/reviews");
        System.out.println("GET goalsportsballs/review/{id}");
        System.out.println("");
        
        //Paths (targetsportsball)
        System.out.println("Golfball and Bowlingball related requests");
        System.out.println("POST targetsportsball/ curl -H \"Content-Type: application/json\" -X POST -d \"{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Bowlingball\", \"price\" : 15.95, \"amount\" : 1}\" http://localhost:8080/targetsportsball/");
         System.out.println("PUT targetsportsball/{id} curl -H \"Content-Type: application/json\" -X PUT -d \"{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Bowlingball\", \"price\" : 15.95, \"amount\" : 1}\" http://localhost:8080/targetsportsball/{id}");
        System.out.println("DELETE curl -X DELETE localhost:8080/targetsportsball/{id}");
        System.out.println("GET targetsportsballs/");
        System.out.println("GET targetsportsball/{id}/");
        System.out.println("GET targetsportsball/{name}");
        System.out.println("GET targetsportsball/material/{material}");
        System.out.println("GET targetsportsball/color/{color}");
        System.out.println("GET targetsportsball/type/{Football | Basketball}");
        System.out.println("POST /targetsportsball/{ballid}/review/user/{userid} curl -H \"Content-Type: application/json\" -X POST -d \"{\"score\" : 1, \"header\" : \"testHeader\", \"content\" : \"testContent\"}\" http://localhost:8080/targetsportsball/1/review/user/1");
        System.out.println("DELETE curl -X DELETE localhost:8080/targetsportsball/review/{reviewid}");
        System.out.println("GET targetsportsballs/reviews");
        System.out.println("GET targetsportsballs/review/{id}");
    }
    
    public void initStuff() {
                
        //USERS
        User tempUser1 = new User("Jeppe", "Jeppenen", "Jeppetes", "salasana", "jeppe@jeppe.com", "Tampere", "Ruhtinaankatu 1", 33560, "Admin");
        User tempUser2 = new User("Jaska", "Jokunen", "MirrinSurma", "salasana123", "jaska@jeppe.com", "Vaasa", "Slottintie 19", 65220, "User");
        User tempUser3 = new User("Jorma", "Ylinen", "Meeemit", "salis", "jorma@jeppe.com", "Vaasa", "Merimiehenkatu 1a1", 65200, "User");
        
        userRepository.save(tempUser1);
        userRepository.save(tempUser2);
        userRepository.save(tempUser3);

        
        //FOOTBALLS & BASKETBALLS
        GoalSportsBall tempGoal1 = new GoalSportsBall("Football1", "Black", 50, 300, "Somethingsomething", "Rubber", "Adidas", "A ball to kick", "Football", 30.95, 3, 1);
        GoalSportsBall tempGoal2 = new GoalSportsBall("Football2", "Orange", 40, 200, "LongDetails", "Rubber", "AnotherDas", "A ball not to kick", "Football", 105.95, 0, 2);
        GoalSportsBall tempGoal3 = new GoalSportsBall("Bad Basketball", "White", 40, 20000, "LongDetails", "Concrete", "AnotherDas", "A ball to throw", "Basketball", 19.95, 4, 3);
        
        Set tempGSReview1 = new HashSet<GSBReview>(){{
            add(new GSBReview(1, 1, "Good product", "Nothing more to say", tempGoal1, 1, tempUser1, 1));
        }};
        
        tempGoal1.setReviews(tempGSReview1);
        
        Set tempGSReview2 = new HashSet<GSBReview>(){{
            add(new GSBReview(2, 1, "Hated it", "Absolutely disgusting product", tempGoal2, 2, tempUser2, 2));
        }};
        
        tempGoal2.setReviews(tempGSReview2);
        
        Set tempGSReview3 = new HashSet<GSBReview>(){{
            add(new GSBReview(3, 1, "Meh", "Meh", tempGoal3, 3, tempUser3, 3));
        }};
        
        tempGoal3.setReviews(tempGSReview3);
        
        gsbRepository.save(tempGoal1);
        gsbRepository.save(tempGoal2);
        gsbRepository.save(tempGoal3);
        
        //BOWLINGBALLS & GOLFBALLS
        TargetSportsBall tempTarget1 = new TargetSportsBall("Bowlingball1", "Black", 40, 3030, "Somethingsomething", "Steel", "Adidas", "A ball not to kick", "Bowlingball", 109.95, 3, 1);
        TargetSportsBall tempTarget2 = new TargetSportsBall("Golfball1", "Orange", 40, 200, "", "Rubber", "AnotherDas", "A ball not to kick", "Golfball", 105.95, 4, 2);
        TargetSportsBall tempTarget3 = new TargetSportsBall("bb3", "Grey", 40, 6000, "Heavy ball", "Concrete", "Adidas", "A ball not to kick", "Bowlingball", 102.95, 0, 3);
        
        Set tempTSReview1 = new HashSet<TSBReview>(){{
            add(new TSBReview(1, 1, "Good product", "Nothing more to say", tempTarget1, 1, tempUser1, 1));
        }};
        
        tempTarget1.setReviews(tempTSReview1);
        
        Set tempTSReview2 = new HashSet<TSBReview>(){{
            add(new TSBReview(2, 1, "Hated it", "Absolutely disgusting product", tempTarget2, 2, tempUser2, 2));
        }};
        
        tempTarget2.setReviews(tempTSReview2);
        
        tsbRepository.save(tempTarget1);
        tsbRepository.save(tempTarget2);
        tsbRepository.save(tempTarget3);
        
        //BASEBALLS & TENNISBALLS
        BatAndRaquetsGames tempBat1 = new BatAndRaquetsGames("Baseball1", "Black", 5, 30, "Somethingsomething", "Rubber", "Adidas", "A ball to throw", "Baseball", 4.95, 0, 1);
        BatAndRaquetsGames tempBat2 = new BatAndRaquetsGames("Baseball2", "White", 6, 35, "Somethingsomething", "Elastic rubber", "Adidas", "A ball to throw2", "Baseball", 4.95, 3, 2);
        BatAndRaquetsGames tempBat3 = new BatAndRaquetsGames("Tennisball1", "Yellow", 5, 336, "Somethingsomething", "Rubber", "Adidas", "A ball to smash", "Tennisball", 2.95, 3, 3);
        
        Set tempBARReview1 = new HashSet<BARReview>(){{
            add(new BARReview(1, 1, "Good product", "Nothing more to say. Hope it doesn't break anytime soon.", tempBat1, 1, tempUser1, 1));
        }};
        
        tempBat1.setReviews(tempBARReview1);
        
        
        Set tempBARReview3 = new HashSet<BARReview>(){{
            add(new BARReview(3, 1, "Meh", "Meh", tempBat3, 3, tempUser3, 3));
        }};
        
        tempBat3.setReviews(tempBARReview3);

        brRepository.save(tempBat1);
        brRepository.save(tempBat2);
        brRepository.save(tempBat3);
        
        // VOLLEYBALL & HANDBALL
        NetSportsBall tempNS1 = new NetSportsBall("Volleyball1", "Black", 5, 30, "Somethingsomething", "Rubber", "Adidas", "A ball to throw", "Volleyball", 4.95, 0, 1);
        NetSportsBall tempNS2 = new NetSportsBall("Volleyball2", "White", 50, 300, "Somethingsomeasdthing", "Rubber", "Adidas", "A ball to throw", "Volleyball", 8.95, 3, 2);
        NetSportsBall tempNS3 = new NetSportsBall("Handball1", "Black", 5, 360, "Somethingsomething", "Rubber", "Adidas", "A ball to throw", "Handball", 4.95, 3, 3);
        
        
        Set tempNSReview2 = new HashSet<NSBReview>(){{
            add(new NSBReview(1, 1, "Hated it", "Absolutely disgusting product", tempNS2, 2, tempUser2, 2));
            //add(new NSBReview(2, 3, "Kinda good", "Maybe I jumped the gun a bit with my previous review.", tempNS2, 2, tempUser2, 2));
        }};
        
        tempNS2.setReviews(tempNSReview2);
        
        Set tempNSReview3 = new HashSet<NSBReview>(){{
            add(new NSBReview(4, 1, "Meh", "Meh", tempNS3, 3, tempUser3, 3));
        }};
        
        tempNS3.setReviews(tempNSReview3);
          
        nsRepository.save(tempNS1);
        nsRepository.save(tempNS2);
        nsRepository.save(tempNS3);
    }
}