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
        for (let i = 0; i < array.length; i++) {
            if (array[i].ownerBallId === ballId) {
                parsed.push(array[i]);
            }
        }
        return parsed;
    }

    sendReview(sporttype, ballId, userId, rating, header, content) {
        let targetUrl = "http://localhost:8080/" + sporttype + "/" + ballId + "/review/user/" + userId;

        fetch(targetUrl,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'score': rating,
                    'header': header,
                    'content': content
                })
            }).then(function (response) {
            return response;
        }).catch(function (error) {
            console.log(error);
        });
    }

    getPromise(type, address) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open(type, address);
            request.onreadystatechange = () => {
                try {
                    if (request.readyState === 4 && request.status === 200) {
                        let raw = request.responseText;
                        let objectified = JSON.parse(raw);
                        resolve(objectified);
                    }
                } catch (e) {
                    reject(' :( ')
                }
            };
            request.send();
        });
    }

    createAccount(obj) {
        obj["accessLevel"] = "User";
        console.log(obj);
        for (const i in obj) {
            console.log(i + ": " + obj[i]);
        }
        fetch("http://localhost:8080/user",
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            }).then(function (response) {
            console.log(response);
            return response;
        }).catch(function (error) {
            console.log(error);
        });
    }

    userLogin(userName) {
        return this.getPromise("GET", "http://localhost:8080/user/username/" + userName);
    }

    getUsers() {
        return this.getPromise("GET", "http://localhost:8080/users");
    }

    reduceQuantity(balls) {
        for (let i = 0; i < balls.length; i++) {
            let o = balls[i].content;
            let category = o.category.replace(/ /g, '').toLowerCase();
            if (!category.includes("game")) category += "sball";

            fetch("http://localhost:8080/" + category + "/" + o.id,
                {
                    method: 'PUT',
                    mode: 'cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'name': o.name,
                        'color': o.color,
                        'diameter': o.diameter,
                        'weigth': o.weigth,
                        'details': o.details,
                        'material': o.material,
                        'manufacturer': o.manufacturer,
                        'shortDetails': o.shortDetails,
                        'type': o.type,
                        'price': o.price,
                        'amount': o.amount - balls[i].count
                    })
                }).then(function (response) {
                return response;
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

    addItemToDatabase(obj, category, image) {
        console.log(image);
        fetch("http://localhost:8080/" + category,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            }).then(function (response) {
            return response;
        }).catch(function (error) {
            console.log(error);
        });
    }

    addImageToDatabase(value) {
        console.log("PERKELE")
        fetch("http://localhost:8080/image",
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'enctype':'multipart/form-data'
                },
                body: ({
                    object: value
                })
            }).then(function (response) {
            return response;
        }).catch(function (error) {
            console.log(error);
        });
    }
}