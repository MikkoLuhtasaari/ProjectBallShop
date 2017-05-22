To run the server navigate to ProjectBallShop\ProjectBallShop\backend\ProjectBallShop and type mvn compile. After compiling type mvn spring-boot:run
Port is http://localhost:8080/

User related requests
---------------------
POST user/ curl -H "Content-Type: application/json" -X POST -d "{\"userName\" : \"TestUser\" , \"email\" : \"testEmail@mail.com\" , \"password\" : \"jeppe\" , \"firstName\" : \"Jeppe\", \"lastName\" : \"Jeppenen\" , \"city\" : \"Tampere\", \"address\" : \"Ruhtinaankatu\" , \"zipCode\" : 33560, \"accessLevel\" : \"Admin\"}" http://localhost:8080/user/
PUT user/{id} curl -H "Content-Type: application/json" -X PUT -d "{\"firstName\" : \"Jeppe\", \"lastName\" : \"Jeppenen\", \"userName\" : \"TestUser2\", \"password\" : \"jeppe\", \"email\" : \"email@asd.com\", \"city\" : \"Tampere\", \"address\" : \"Ruhtinaankatu 1\" , \"zipCode\" : 33560, \"accessLevel\" : \"Admin\"}" http://localhost:8080/user/{id}
DELETE curl -X DELETE localhost:8080/user/{id}
GET users/
GET user/{id}
GET user/username/{userName}


Volleyball and Handball related requests
----------------------------------------
POST netsportsball/ curl -H "Content-Type: application/json" -X POST -d "{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Baseball\", \"price\" : 15.95, \"amount\" : 1}" http://localhost:8080/netsportsball/
PUT netsportsball/{id} curl -H "Content-Type: application/json" -X PUT -d "{\"name\" : \"ChangedName1\", \"color\" : \"blood red\", \"diameter\" : 15, \"weigth\" : 50000, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Baseball\", \"price\" : 15.95, \"amount\" : 1}" http://localhost:8080/netsportsball/{id}
DELETE curl -X DELETE localhost:8080/netsportsball/{id}
GET netsportsballs/
GET netsportsball/{id}/
GET netsportsball/{name}
GET netsportsball/material/{material}
GET netsportsball/color/{color}
GET netsportsball/type/{Volleyball | Handball}

Reviews:
POST /netsportsball/{ballid}/review/user/{userid} curl -H "Content-Type: application/json" -X POST -d "{\"score\" : 1, \"header\" : \"testHeader\", \"content\" : \"testContent\"}" http://localhost:8080/netsportsball/1/review/user/1
DELETE curl -X DELETE localhost:8080/netsportsball/review/{reviewid}
GET netsportsballs/reviews
GET netsportsballs/review/{id}

Baseball and Tennisball related requests
----------------------------------------
POST batandraquetsgame/ curl -H "Content-Type: application/json" -X POST -d "{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Baseball\", \"price\" : 15.95, \"amount\" : 1}" http://localhost:8080/batandraquetsgame/
PUT batandraquetsgame/{id} curl -H "Content-Type: application/json" -X PUT -d "{\"name\" : \"New name 1\", \"color\" : \"blood red\", \"diameter\" : 1200, \"weigth\" : 50, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Baseball\", \"price\" : 15.95, \"amount\" : 1}" http://localhost:8080/batandraquetsgame/{id}
DELETE curl -X DELETE localhost:8080/batandraquetsgame/{id}
GET batandraquetsgames/
GET batandraquetsgame/{id}/
GET batandraquetsgame/{name}
GET batandraquetsgame/material/{material}
GET batandraquetsgame/color/{color}
GET batandraquetsgame/type/{Baseball | Tennisball}

Reviews:
POST /batandraquetsgame/{ballid}/review/user/{userid} curl -H "Content-Type: application/json" -X POST -d "{\"score\" : 1, \"header\" : \"testHeader\", \"content\" : \"testContent\"}" http://localhost:8080/batandraquetsgame/1/review/user/1
DELETE curl -X DELETE localhost:8080/batandraquetsgame/review/{reviewid}
GET batandraquetsgames/reviews
GET batandraquetsgames/review/{id}


Football and Basketball related requests
----------------------------
POST goalsportsball/ curl -H "Content-Type: application/json" -X POST -d "{\"name\" : \"New name 1\", \"color\" : \"blue\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Football\", \"price\" : 15.95, \"amount\" : 1}" http://localhost:8080/goalsportsball/
PUT goalsportsball/{id} curl -H "Content-Type: application/json" -X PUT -d "{\"name\" : \"New name 2\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Best ball\", \"type\" : \"Football\", \"price\" : 15.95, \"amount\" : 1}" http://localhost:8080/goalsportsball/{id}
DELETE curl -X DELETE localhost:8080/goalsportsball/{id}
GET goalsportsballs/
GET goalsportsball/{id}/
GET goalsportsball/{name}
GET goalsportsball/material/{material}
GET goalsportsball/color/{color}
GET goalsportsball/type/{Football | Basketball}

Reviews:
POST /goalsportsball/{ballid}/review/user/{userid} curl -H "Content-Type: application/json" -X POST -d "{\"score\" : 1, \"header\" : \"testHeader\", \"content\" : \"testContent\"}" http://localhost:8080/goalsportsball/1/review/user/1
DELETE curl -X DELETE localhost:8080/goalsportsball/review/{reviewid}
GET goalsportsballs/reviews
GET goalsportsballs/review/{id}


Bowlingball and Golfball related requests
------------------------------
POST targetsportsball/ curl -H "Content-Type: application/json" -X POST -d "{\"name\" : \"New name 1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Extremely bad ball\", \"type\" : \"Bowlingball\", \"price\" : 109.95, \"amount\" : 1}" http://localhost:8080/targetsportsball/
PUT targetsportsball/{id} curl -H "Content-Type: application/json" -X PUT -d "{\"name\" : \"New name 2\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\", \"manufacturer\" : \"Adidas\", \"shortDetails\" : \"Extremely bad ball\", \"type\" : \"Bowlingball\", \"price\" : 99.95, \"amount\" : 6}" http://localhost:8080/targetsportsball/{id}
DELETE curl -X DELETE localhost:8080/targetsportsball/{id}
GET targetsportsballs/
GET targetsportsball/{id}/
GET targetsportsball/name/{name}
GET targetsportsball/material/{material}
GET targetsportsball/color/{color}
GET targetsportsball/type/{Bowlingball | Golfball}

Reviews:
POST /targetsportsball/{ballid}/review/user/{userid} curl -H "Content-Type: application/json" -X POST -d "{\"score\" : 1, \"header\" : \"testHeader\", \"content\" : \"testContent\"}" http://localhost:8080/targetsportsball/1/review/user/1
DELETE curl -X DELETE localhost:8080/targetsportsball/review/{reviewid}
GET targetsportsballs/reviews
GET targetsportsballs/review/{id}

