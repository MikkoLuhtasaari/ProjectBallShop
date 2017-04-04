AT THE START /populate

POST football/ curl -H "Content-Type: application/json" -X POST -d "{\"name\" : \"Placeholder1\", \"color\" : \"red\", \"diameter\" : 12, \"weigth\" : 500, \"details\" : \"none\", \"material\" : \"rubber\"}" http://localhost:8080/football/
GET footballs/
GET football/{id}/

