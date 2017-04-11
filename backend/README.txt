To run the server navigate to ProjectBallShop\ProjectBallShop\backend\ProjectBallShop and type mvn compile. After compiling type mvn spring-boot:run
Port is http://localhost:8080/


AT THE START /populate


Volleyball and Handball related requests
----------------------------------------
POST netsportsball/ curl -H "Content-Type: application/json" -X POST -d "{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Baseball\", \"price\" : 15.95, \"amount\" : 1}" http://localhost:8080/netsportsball/
GET netsportsballs/
GET netsportsball/{id}/
GET netsportsball/{name}
GET netsportsball/material/{material}
GET netsportsball/color/{color}
GET netsportsball/type/{Volleyball | Handball}
DELETE curl -X DELETE "localhost:8080/netsportsball/{id}

Baseball and Tennisball related requests
----------------------------------------
POST batandraquetsgame/ curl -H "Content-Type: application/json" -X POST -d "{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Baseball\", \"price\" : 15.95, \"amount\" : 1}" http://localhost:8080/batandraquetsgame/
GET batandraquetsgames/
GET batandraquetsgame/{id}/
GET batandraquetsgame/{name}
GET batandraquetsgame/material/{material}
GET batandraquetsgame/color/{color}
GET batandraquetsgame/type/{Baseball | Tennisball}
DELETE curl -X DELETE "localhost:8080/batandraquetsgame/{id}


Football and Basketball related requests
----------------------------
POST goalsportsball/ curl -H "Content-Type: application/json" -X POST -d "{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Football\", \"price\" : 15.95, \"amount\" : 1}" http://localhost:8080/goalsportsball/
GET goalsportsballs/
GET goalsportsball/{id}/
GET goalsportsball/{name}
GET goalsportsball/material/{material}
GET goalsportsball/color/{color}
GET goalsportsball/type/{Football | Basketball}
DELETE curl -X DELETE "localhost:8080/goalsportsball/{id}


Bowlingball and Golfball related requests
------------------------------
POST targetsportsball/ curl -H "Content-Type: application/json" -X POST -d "{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Extremely bad ball\", \"type\" : \"Bowlingball\", \"price\" : 109.95, \"amount\" : 1}" http://localhost:8080/targetsportsball/
GET targetsportsballs/
GET targetsportsball/{id}/
GET targetsportsball/name/{name}
GET targetsportsball/material/{material}
GET targetsportsball/color/{color}
GET targetsportsball/type/{Bowlingball | Golfball}
DELETE curl -X DELETE "localhost:8080/targetsportsball/{id}

