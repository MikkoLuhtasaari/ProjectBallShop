package fi.tamk.tiko;

import java.util.ArrayList;
import java.util.List;

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
    
    @RequestMapping(value= "/categories", method=RequestMethod.GET)
    public String getCategories() {
        return "Bat and Racquet games, Goal sports, Net sports, Target sports";
    }
    
    public void run(ApplicationArguments args) {
        
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
        
        //Paths (Users)
        System.out.println("User related requests");
        System.out.println("POST user/ curl -H "Content-Type: application/json" -X POST -d "{\"firstName\" : \"Jeppe\", \"lastName\" : \"Jeppenen\", \"userName\" : \"Jeppetes\", \"password\" : \"jeppe\", \"email\" : \"jeppe@jeppe.com\"}" http://localhost:8080/user/");
        System.out.println("DELETE curl -X DELETE localhost:8080/user/{id}");
        System.out.println("GET users/");
        System.out.println("GET user/{id}");
        System.out.println("GET user/username/{userName}");
        
        //Paths (Netsportsballs)
        System.out.println("Volleyball and Handball related requests");
        System.out.println("POST netsportsball/ curl -H \"Content-Type: application/json\" -X POST -d \"{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Baseball\", \"price\" : 15.95, \"amount\" : 1}\" http://localhost:8080/netsportsball/");
        System.out.println("DELETE curl -X DELETE localhost:8080/netsportsball/{id}");
        System.out.println("GET netsportsballs/");
        System.out.println("GET netsportsball/{id}/");
        System.out.println("GET netsportsball/{name}");
        System.out.println("GET netsportsball/material/{material}");
        System.out.println("GET netsportsball/color/{color}");
        System.out.println("GET netsportsball/type/{Volleyball | Handball}");
        System.out.println("");
        
        //Paths (BatAndRaquetsGames)
        System.out.println("Baseball and Tennisball related requests");
        System.out.println("POST batandraquetsgame/ curl -H \"Content-Type: application/json\" -X POST -d \"{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Baseball\", \"price\" : 15.95, \"amount\" : 1}\" http://localhost:8080/batandraquetsgame/");
        System.out.println("DELETE curl -X DELETE localhost:8080/batandraquetsgame/{id}");
        System.out.println("GET batandraquetsgames/");
        System.out.println("GET batandraquetsgame/{id}/");
        System.out.println("GET batandraquetsgame/{name}");
        System.out.println("GET batandraquetsgame/material/{material}");
        System.out.println("GET batandraquetsgame/color/{color}");
        System.out.println("GET batandraquetsgame/type/{Baseball | Tennisball}");
        
        //Paths (goalsportsball)
        System.out.println("Football and Basketball related requests");
        System.out.println("POST goalsportsball/ curl -H \"Content-Type: application/json\" -X POST -d \"{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Football\", \"price\" : 15.95, \"amount\" : 1}\" http://localhost:8080/goalsportsball/");
        System.out.println("DELETE curl -X DELETE localhost:8080/goalsportsball/{id}");
        System.out.println("GET goalsportsballs/");
        System.out.println("GET goalsportsball/{id}/");
        System.out.println("GET goalsportsball/{name}");
        System.out.println("GET goalsportsball/material/{material}");
        System.out.println("GET goalsportsball/color/{color}");
        System.out.println("GET goalsportsball/type/{Football | Basketball}");
        
        //Paths (targetsportsball)
        System.out.println("Golfball and Bowlingball related requests");
        System.out.println("POST targetsportsball/ curl -H \"Content-Type: application/json\" -X POST -d \"{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Bowlingball\", \"price\" : 15.95, \"amount\" : 1}\" http://localhost:8080/targetsportsball/");
        System.out.println("DELETE curl -X DELETE localhost:8080/targetsportsball/{id}");
        System.out.println("GET targetsportsballs/");
        System.out.println("GET targetsportsball/{id}/");
        System.out.println("GET targetsportsball/{name}");
        System.out.println("GET targetsportsball/material/{material}");
        System.out.println("GET targetsportsball/color/{color}");
        System.out.println("GET targetsportsball/type/{Football | Basketball}");
        
        //FOOTBALLS & BASKETBALLS
        GoalSportsBall tempGoal1 = new GoalSportsBall("Football1", "Black", 50, 300, "Somethingsomething", "Rubber", "Adidas", "A ball to kick", "Football", 30.95, 3, 1);
        GoalSportsBall tempGoal2 = new GoalSportsBall("Football2", "Orange", 40, 200, "LongDetails", "Rubber", "AnotherDas", "A ball not to kick", "Football", 105.95, 4, 2);
        GoalSportsBall tempGoal3 = new GoalSportsBall("Bad Basketball", "White", 40, 20000, "LongDetails", "Concrete", "AnotherDas", "A ball to throw", "Basketball", 19.95, 4, 3);
        
        gsbRepository.save(tempGoal1);
        gsbRepository.save(tempGoal2);
        gsbRepository.save(tempGoal3);
        
        //BOWLINGBALLS & GOLFBALLS
        TargetSportsBall tempTarget1 = new TargetSportsBall("Bowlingball1", "Black", 40, 3030, "Somethingsomething", "Steel", "Adidas", "A ball not to kick", "Bowlingball", 109.95, 3, 1);
        TargetSportsBall tempTarget2 = new TargetSportsBall("Golfball1", "Orange", 40, 200, "", "Rubber", "AnotherDas", "A ball not to kick", "Golfball", 105.95, 4, 2);
        TargetSportsBall tempTarget3 = new TargetSportsBall("bb3", "Grey", 40, 6000, "Heavy ball", "Concrete", "Adidas", "A ball not to kick", "Bowlingball", 102.95, 5, 3);
        
        tsbRepository.save(tempTarget1);
        tsbRepository.save(tempTarget2);
        tsbRepository.save(tempTarget3);
        
        //BASEBALLS & TENNISBALLS
        BatAndRaquetsGames tempBat1 = new BatAndRaquetsGames("Baseball1", "Black", 5, 30, "Somethingsomething", "Rubber", "Adidas", "A ball to throw", "Baseball", 4.95, 3, 1);
        BatAndRaquetsGames tempBat2 = new BatAndRaquetsGames("Baseball2", "White", 6, 35, "Somethingsomething", "Elastic rubber", "Adidas", "A ball to throw2", "Baseball", 4.95, 3, 2);
        BatAndRaquetsGames tempBat3 = new BatAndRaquetsGames("Tennisball1", "Yellow", 5, 336, "Somethingsomething", "Rubber", "Adidas", "A ball to smash", "Tennisball", 2.95, 3, 3);

        brRepository.save(tempBat1);
        brRepository.save(tempBat2);
        brRepository.save(tempBat3);
        
        // VOLLEYBALL & HANDBALL
        NetSportsBall tempNS1 = new NetSportsBall("Volleyball1", "Black", 5, 30, "Somethingsomething", "Rubber", "Adidas", "A ball to throw", "Volleyball", 4.95, 3, 1);
        NetSportsBall tempNS2 = new NetSportsBall("Volleyball2", "White", 50, 300, "Somethingsomeasdthing", "Rubber", "Adidas", "A ball to throw", "Volleyball", 8.95, 3, 2);
        NetSportsBall tempNS3 = new NetSportsBall("Handball1", "Black", 5, 360, "Somethingsomething", "Rubber", "Adidas", "A ball to throw", "Handball", 4.95, 3, 3);
        
        nsRepository.save(tempNS1);
        nsRepository.save(tempNS2);
        nsRepository.save(tempNS3);
    }
    
    // User related stuff
    @RequestMapping(value = "/user",  method=RequestMethod.POST)
    public void saveUser(@RequestBody User user) {
        userRepository.save(user);
    }
    
    @RequestMapping(value="/users", method=RequestMethod.GET)
    public Iterable<User> fetchUsers() {
        return userRepository.findAll();
    }
    
    @RequestMapping(value="/user/{userId}", method=RequestMethod.GET)
    public User fetchUserById(@PathVariable long userId) {
        return userRepository.findOne(userId);
    }
    
    @RequestMapping(value="/user/username/{userName}", method=RequestMethod.GET)
    public User fetchUserByUserName(@PathVariable String userName) {
        return userRepository.findByUserName(userName);
    }
    
    @RequestMapping(value = "/user/{userId}",  method=RequestMethod.DELETE)
    public User deleteUser(@PathVariable long userId) {
        User temp = userRepository.findOne(userId);
        userRepository.delete(userRepository.findOne(userId));
        return temp;
    }
    
    // Volleyball and Handball related stuff
    @RequestMapping(value = "/netsportsball",  method=RequestMethod.POST)
    public void saveNetSportsBall(@RequestBody NetSportsBall netsportsball) {
        nsRepository.save(netsportsball);
    }
   
    @RequestMapping(value = "/netsportsballs",  method=RequestMethod.GET)
    public Iterable<NetSportsBall> fetchNetSportsBalls() {
        return nsRepository.findAll();
    }
    
    @RequestMapping(value = "/netsportsball/{netsportsballId}",  method=RequestMethod.GET)
    public NetSportsBall fetchNetSportsBall(@PathVariable long netsportsballId) {
        return nsRepository.findOne(netsportsballId);
    }
    
    @RequestMapping(value = "/netsportsball/{netsportsballId}",  method=RequestMethod.DELETE)
    public NetSportsBall deleteNetSportsBall(@PathVariable long netsportsballId) {
        NetSportsBall temp = nsRepository.findOne(netsportsballId);
        nsRepository.delete(nsRepository.findOne(netsportsballId));
        return temp;
    }
    
    @RequestMapping(value = "/netsportsball/color/{netsportsballColor}",  method=RequestMethod.GET)
    public List<NetSportsBall> fetchNetSportsBall(@PathVariable String netsportsballColor) {
        return nsRepository.findByColor(netsportsballColor);
    }
    
    @RequestMapping(value = "/netsportsball/material/{netsportsballMaterial}",  method=RequestMethod.GET)
    public List<NetSportsBall> fetchNetSportsBallByMaterial(@PathVariable String netsportsballMaterial) {
        return nsRepository.findByMaterial(netsportsballMaterial);
    }
    
    @RequestMapping(value = "/netsportsball/name/{batandraquetsgameName}",  method=RequestMethod.GET)
    public NetSportsBall fetchNetSportsBallByName(@PathVariable String netsportsballName) {
        return nsRepository.findByName(netsportsballName);
    }
     
    @RequestMapping(value = "/netsportsball/type/{type}",  method=RequestMethod.GET)
    public List<NetSportsBall> fetchNetSportsBallByType(@PathVariable String type) {
        return nsRepository.findByType(type);
    }
    
    
    // Baseball and Tennisball related stuff
    @RequestMapping(value = "/batandraquetsgame",  method=RequestMethod.POST)
    public void saveBatAndRaquetsGame(@RequestBody BatAndRaquetsGames batandraquetsgame) {
        brRepository.save(batandraquetsgame);
    }
    
    @RequestMapping(value = "/batandraquetsgames",  method=RequestMethod.GET)
    public Iterable<BatAndRaquetsGames> fetchBatAndRaquetsGames() {
        return brRepository.findAll();
    }
    
    @RequestMapping(value = "/batandraquetsgame/{batandraquetsgameId}",  method=RequestMethod.GET)
    public BatAndRaquetsGames fetchBatAndRaquetsGame(@PathVariable long batandraquetsgameId) {
        return brRepository.findOne(batandraquetsgameId);
    }
    
    @RequestMapping(value = "/batandraquetsgame/{batandraquetsgameId}",  method=RequestMethod.DELETE)
    public BatAndRaquetsGames deleteBatAndRaquetsGame(@PathVariable long batandraquetsgameId) {
        BatAndRaquetsGames temp = brRepository.findOne(batandraquetsgameId);
        brRepository.delete(brRepository.findOne(batandraquetsgameId));
        return temp;
    }
    
    @RequestMapping(value = "/batandraquetsgame/color/{batandraquetsgameColor}",  method=RequestMethod.GET)
    public List<BatAndRaquetsGames> fetchBatAndRaquetsGameByColor(@PathVariable String batandraquetsgameColor) {
        return brRepository.findByColor(batandraquetsgameColor);
    }
    
    @RequestMapping(value = "/batandraquetsgame/material/{batandraquetsgameMaterial}",  method=RequestMethod.GET)
    public List<BatAndRaquetsGames> fetchBatAndRaquetsGamesByMaterial(@PathVariable String batandraquetsgameMaterial) {
        return brRepository.findByMaterial(batandraquetsgameMaterial);
    }
    
    @RequestMapping(value = "/batandraquetsgame/name/{batandraquetsgameName}",  method=RequestMethod.GET)
    public BatAndRaquetsGames fetchBatAndRaquetsGamesByName(@PathVariable String batandraquetsgameName) {
        return brRepository.findByName(batandraquetsgameName);
    }
     
    @RequestMapping(value = "/batandraquetsgame/type/{type}",  method=RequestMethod.GET)
    public List<BatAndRaquetsGames> fetchByType(@PathVariable String type) {
        return brRepository.findByType(type);
    }
    
    
    
    // Football and Basketball related stuff
    @RequestMapping(value = "/goalsportsball",  method=RequestMethod.POST)
    public void saveGoalSportsBall(@RequestBody GoalSportsBall goalsportsball) {
        gsbRepository.save(goalsportsball);
    }
    
    @RequestMapping(value = "/goalsportsballs",  method=RequestMethod.GET)
    public Iterable<GoalSportsBall> fetchGoalSportsBalls() {
        return gsbRepository.findAll();
    }
    
    @RequestMapping(value = "/goalsportsball/{goalsportsballId}",  method=RequestMethod.GET)
    public GoalSportsBall fetchGoalSportsBall(@PathVariable long goalsportsballId) {
        return gsbRepository.findOne(goalsportsballId);
    }
    
    @RequestMapping(value = "/goalsportsball/{goalsportsballId}",  method=RequestMethod.DELETE)
    public GoalSportsBall deleteGoalSportsBall(@PathVariable long goalsportsballId) {
        GoalSportsBall temp = gsbRepository.findOne(goalsportsballId);
        gsbRepository.delete(gsbRepository.findOne(goalsportsballId));
        return temp;
    }
    
    @RequestMapping(value = "/goalsportsball/color/{goalsportsballColor}",  method=RequestMethod.GET)
    public List<GoalSportsBall> fetchGoalSportsBallsByColor(@PathVariable String goalsportsballColor) {
        return gsbRepository.findByColor(goalsportsballColor);
    }
    
    @RequestMapping(value = "/goalsportsball/material/{goalsportsballMaterial}",  method=RequestMethod.GET)
    public List<GoalSportsBall> fetchGoalSportsBallsByMaterial(@PathVariable String goalsportsballMaterial) {
        return gsbRepository.findByMaterial(goalsportsballMaterial);
    }
    
    @RequestMapping(value = "/goalsportsball/name/{goalsportsballName}",  method=RequestMethod.GET)
    public GoalSportsBall fetchGoalSportsBallByName(@PathVariable String goalsportsballName) {
        return gsbRepository.findByName(goalsportsballName);
    }
     
    @RequestMapping(value = "/goalsportsball/type/{type}",  method=RequestMethod.GET)
    public List<GoalSportsBall> fetchGoalSportsBallsByType(@PathVariable String type) {
        return gsbRepository.findByType(type);
    }
    

    // Bowlingball and Golfball related stuff
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
    
    @RequestMapping(value = "/targetsportsball/name/{targetsportsballName}",  method=RequestMethod.GET)
    public TargetSportsBall fetchTargetSportsBallByName(@PathVariable String targetsportsballName) {
        return tsbRepository.findByName(targetsportsballName);
    }
     
    @RequestMapping(value = "/targetsportsball/type/{type}",  method=RequestMethod.GET)
    public List<TargetSportsBall> fetchTargetSportsBallsByType(@PathVariable String type) {
        return tsbRepository.findByType(type);
    }
}