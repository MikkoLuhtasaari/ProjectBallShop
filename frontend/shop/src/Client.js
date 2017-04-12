export default class Client{
    footballs(){
        let result = new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open("GET", "http://localhost:8080/goalsportsball/type/Football");
            request.onreadystatechange = () => {
                if (request.readyState === 4 && request.status === 200) {
                    let raw = request.responseText; //array
                    let objectified = JSON.parse(raw); //array of objects
                    resolve(objectified);
                }};
            request.send();
        });
        return result;
    }

    bowlingballs(){
        let result = new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open("GET", "http://localhost:8080/targetsportsball/type/Bowlingball");
            request.onreadystatechange = () => {
                if (request.readyState === 4 && request.status === 200) {
                    let raw = request.responseText; //array
                    let objectified = JSON.parse(raw); //array of objects
                    resolve(objectified);
                }};
            request.send();
        });
        return result;
    }

    golfballs(){
        let result = new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open("GET", "http://localhost:8080/targetsportsball/type/Golfball");
            request.onreadystatechange = () => {
                if (request.readyState === 4 && request.status === 200) {
                    let raw = request.responseText; //array
                    let objectified = JSON.parse(raw); //array of objects
                    resolve(objectified);
                }};
            request.send();
        });
        return result;
    }

    chocolateballs(){
        let result = new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open("GET", "http://localhost:8080/chocolateballs");
            request.onreadystatechange = () => {
                if (request.readyState === 4 && request.status === 200) {
                    let raw = request.responseText; //array
                    let objectified = JSON.parse(raw); //array of objects
                    resolve(objectified);
                }};
            request.send();
        });
        return result;
    }
}