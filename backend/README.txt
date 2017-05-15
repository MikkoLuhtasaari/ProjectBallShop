To run the server navigate to ProjectBallShop\ProjectBallShop\backend\ProjectBallShop and type mvn compile. After compiling type mvn spring-boot:run
Port is http://localhost:8080/

Review related requests
-----------------------
POST review/ curl -H "Content-Type: application/json" -X POST -d "{\"category\" : \"Bat and Racquet games\", \"userId\" : 1, \"itemId\" : \"1\", \"score\" : 2, \"header\" : \"Header\", \"content\" : \"Content\"}" http://localhost:8080/review/
DELETE curl -X DELETE localhost:/review/{id}
GET reviews/
GET review/{id}
GET review/{category}/{itemId}
GET review/user/{userId}

User related requests
---------------------
POST user/ curl -H "Content-Type: application/json" -X POST -d "{\"firstName\" : \"Jeppe\", \"lastName\" : \"Jeppenen\", \"userName\" : \"Jeppetes\", \"password\" : \"jeppe\", \"email\" : \"jeppe@jeppe.com\", \"city\" : \"Tampere\", \"address\" : \"Ruhtinaankatu 1\" : \"zipCode\" : 33560, \"accessLevel\" : \"Admin\"}" http://localhost:8080/user/
PUT user/{id} curl -H "Content-Type: application/json" -X PUT -d "{\"firstName\" : \"Jeppe\", \"lastName\" : \"Jeppenen\", \"userName\" : \"Jeppetes\", \"password\" : \"jeppe\", \"email\" : \"jeppe@jeppe.com\", \"city\" : \"Tampere\", \"address\" : \"Ruhtinaankatu 1\" : \"zipCode\" : 33560, \"accessLevel\" : \"Admin\"}" http://localhost:8080/user/{id}
DELETE curl -X DELETE localhost:8080/user/{id}
GET users/
GET user/{id}
GET user/username/{userName}


Volleyball and Handball related requests
----------------------------------------
POST netsportsball/ curl -H "Content-Type: application/json" -X POST -d "{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Baseball\", \"price\" : 15.95, \"amount\" : 1}" http://localhost:8080/netsportsball/
PUT netsportsball/{id} curl -H "Content-Type: application/json" -X PUT -d "{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Baseball\", \"price\" : 15.95, \"amount\" : 1}" http://localhost:8080/netsportsball/{id}
DELETE curl -X DELETE localhost:8080/netsportsball/{id}
GET netsportsballs/
GET netsportsball/{id}/
GET netsportsball/{name}
GET netsportsball/material/{material}
GET netsportsball/color/{color}
GET netsportsball/type/{Volleyball | Handball}

Baseball and Tennisball related requests
----------------------------------------
POST batandraquetsgame/ curl -H "Content-Type: application/json" -X POST -d "{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Baseball\", \"price\" : 15.95, \"amount\" : 1}" http://localhost:8080/batandraquetsgame/
PUT batandraquetsgame/{id} curl -H "Content-Type: application/json" -X PUT -d "{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Baseball\", \"price\" : 15.95, \"amount\" : 1}" http://localhost:8080/batandraquetsgame/{id}
DELETE curl -X DELETE localhost:8080/batandraquetsgame/{id}
GET batandraquetsgames/
GET batandraquetsgame/{id}/
GET batandraquetsgame/{name}
GET batandraquetsgame/material/{material}
GET batandraquetsgame/color/{color}
GET batandraquetsgame/type/{Baseball | Tennisball}


Football and Basketball related requests
----------------------------
POST goalsportsball/ curl -H "Content-Type: application/json" -X POST -d "{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Football\", \"price\" : 15.95, \"amount\" : 1}" http://localhost:8080/goalsportsball/
PUT goalsportsball/{id} curl -H "Content-Type: application/json" -X PUT -d "{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Football\", \"price\" : 15.95, \"amount\" : 1}" http://localhost:8080/goalsportsball/{id}
DELETE curl -X DELETE localhost:8080/goalsportsball/{id}
GET goalsportsballs/
GET goalsportsball/{id}/
GET goalsportsball/{name}
GET goalsportsball/material/{material}
GET goalsportsball/color/{color}
GET goalsportsball/type/{Football | Basketball}


Bowlingball and Golfball related requests
------------------------------
POST targetsportsball/ curl -H "Content-Type: application/json" -X POST -d "{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Extremely bad ball\", \"type\" : \"Bowlingball\", \"price\" : 109.95, \"amount\" : 1}" http://localhost:8080/targetsportsball/
PUT targetsportsball/{id} curl -H "Content-Type: application/json" -X PUT -d "{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Extremely bad ball\", \"type\" : \"Bowlingball\", \"price\" : 109.95, \"amount\" : 1}" http://localhost:8080/targetsportsball/{id}
DELETE curl -X DELETE localhost:8080/targetsportsball/{id}
GET targetsportsballs/
GET targetsportsball/{id}/
GET targetsportsball/name/{name}
GET targetsportsball/material/{material}
GET targetsportsball/color/{color}
GET targetsportsball/type/{Bowlingball | Golfball}

