To run the server navigate to ProjectBallShop\ProjectBallShop\backend\ProjectBallShop and type mvn compile. After compiling type mvn spring-boot:run
Port is http://localhost:8080/


AT THE START /populate

Football and Basketball related requests
----------------------------
POST goalsportsball/ curl -H "Content-Type: application/json" -X POST -d "{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Football\", \"price\" : 15.95, \"amount\" : 1}" http://localhost:8080/football/
GET goalsportsballs/
GET goalsportsball/{id}/
GET goalsportsball/{name}
GET goalsportsball/material/{material}
GET goalsportsball/color/{color}
GET goalsportsball/type/{Football | Basketball}
DELETE curl -X DELETE "localhost:8080/goalsportsball/{id}


Bowlingball and Golfball related requests
------------------------------
POST targetsportsball/ curl -H "Content-Type: application/json" -X POST -d "{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Extremely bad ball\", \"type\" : \"Bowlingball\", \"price\" : 109.95, \"amount\" : 1}" http://localhost:8080/bowlingball/
GET targetsportsballs/
GET targetsportsball/{id}/
GET targetsportsball/name/{name}
GET targetsportsball/material/{material}
GET targetsportsball/color/{color}
GET targetsportsball/type/{Bowlingball | Golfball}
DELETE curl -X DELETE "localhost:8080/targetsportsball/{id}

