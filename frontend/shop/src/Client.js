export default class Client{

    ballsByName(sporttype, balltype){
        console.log("yasd")
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
}