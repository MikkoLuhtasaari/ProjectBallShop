To run the server navigate to ProjectBallShop\ProjectBallShop\backend\ProjectBallShop and type mvn compile. After compiling type mvn spring-boot:run
Port is http://localhost:8080/


AT THE START /populate

Football related requests
----------------------------
POST football/ curl -H "Content-Type: application/json" -X POST -d "{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"amount\" : 1}" http://localhost:8080/football/
GET footballs/
GET football/{id}/
GET football/name/{name}
GET football/material/{material}
GET football/color/{color}
DELETE curl -X DELETE "localhost:8080/football/{id}


Bowlingball related requests
------------------------------
POST bowlingball/ curl -H "Content-Type: application/json" -X POST -d "{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"amount\" : 1, \"holeAmount\" : 3}" http://localhost:8080/bowlingball/
GET bowlingballs/
GET bowlingball/{id}/
GET bowlingball/name/{name}
GET bowlingball/material/{material}
GET bowlingball/color/{color}
GET bowlingball/holeamount/{holeamount}
DELETE curl -X DELETE "localhost:8080/bowlingball/{id}

