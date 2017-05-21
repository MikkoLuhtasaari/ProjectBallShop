export default class Client {

    /**
     * Gets all balls from a specific sport type
     *
     * Type can be netsportsballs, batandraquetsgames, goalsportsballs or targetsportsballs.
     *
     * @param sporttype type of balls to be retrieved.
     * @returns {Promise}
     */
    ballsByType(sporttype) {
        return this.getPromise("GET", "http://localhost:8080/" + sporttype);
    }

    ballsByName(sporttype, balltype) {
        return this.getPromise("GET", "http://localhost:8080/" + sporttype + "/type/" + balltype);
    }

    ballById(sporttype, id) {
        return this.getPromise("GET", "http://localhost:8080/" + sporttype + "/" + id);
    }

    /**
     * Gets reviews for specific ball
     *
     * @param sporttype - type of sport that the ball that's reviews are to be retrieved represents
     * @param ballId - id of the ball that's reviews are to be retrieved
     * @returns {Promise}
     */
    reviewsByBallId(sporttype, ballId) {
        return this.getPromise("GET", "http://localhost:8080/" + sporttype + "/reviews").then(r => this.filterArray(r, ballId));
    }

    filterArray(array, ballId) {
      let parsed = [];
      for(let i=0; i<array.length; i++) {
        if(array[i].ownerBallId === ballId) {
          parsed.push(array[i]);
        }
      }
      return parsed;
    }

    sendReview(sporttype, ballId, userId, rating, header, content){
        let targetUrl = "http://localhost:8080/" + sporttype + "/" + ballId + "/review/user/" + userId;

        fetch(targetUrl,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                  'score':rating,
                  'header': header,
                  'content': content
                })
            }).then(function (response) {
                console.log(response);
                return response;
            }).catch(function (error) {
                console.log(error);
            });
        console.log(targetUrl);
    }

    getPromise(type, address) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open(type, address);
            request.onreadystatechange = () => {
                try{
                    if (request.readyState === 4 && request.status === 200) {
                        let raw = request.responseText;
                        let objectified = JSON.parse(raw);
                        resolve(objectified);
                    }
                }catch (e) {
                    reject(' :( ')
                }
            };
            request.send();
        });
    }

    createAccount(array) {
        // TODO: Warning suppressed: Expected to  return a value in this function   array-callback-return
        Object.keys(array).map((e) => {
            console.log(array[e])
            return e;
        });
        return this.getPromise("GET", "http://localhost:8080/netsportsball/1")
    }

    userLogin(userName) {
        return this.getPromise("GET", "http://localhost:8080/user/username/" + userName);
    }
}