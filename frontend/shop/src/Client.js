export default class Client{
    footballs(){
        let result = new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open("GET", "http://localhost:8080/footballs");
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