export default class Client{

    ballsByName(sporttype, balltype){
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open("GET", "http://localhost:8080/" + sporttype + "/type/" + balltype);
            request.onreadystatechange = () => {
                if (request.readyState === 4 && request.status === 200) {
                    let raw = request.responseText;
                    let objectified = JSON.parse(raw);
                    resolve(objectified);
                }
            };
            request.send();
        });
    }

    ballsByType(sporttype){
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open("GET", "http://localhost:8080/" + sporttype);
            request.onreadystatechange = () => {
                if (request.readyState === 4 && request.status === 200) {
                    let raw = request.responseText;
                    let objectified = JSON.parse(raw);
                    resolve(objectified);
                }
            };
            request.send();
        });
    }

    ballById(sporttype, id){
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open("GET", "http://localhost:8080/" + sporttype + "/" + id);
            request.onreadystatechange = () => {
                if (request.readyState === 4 && request.status === 200) {
                    let raw = request.responseText;
                    let objectified = JSON.parse(raw);
                    resolve(objectified);
                }
            };
            request.send();
        });
    }

    reviewByBallId(sporttype, ballId){
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            let link = "http://localhost:8080/review/" + sporttype + "/" + ballId;
            request.open("GET", link);
            console.log();
            request.onreadystatechange = () => {
                if (request.readyState === 4 && request.status === 200) {
                    let raw = request.responseText;
                    let objectified = JSON.parse(raw);
                    resolve(objectified);
                }
            };
            request.send();
        });
    }
}