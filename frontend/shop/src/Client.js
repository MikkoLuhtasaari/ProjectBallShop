/**
 *
 *
 * @author      Sofia Piekkola
 * @version     4.0
 */
export default class Client {

    /**
     * Gets all balls from a specific sport type
     *
     * @param sporttype type of balls to be retrieved.
     * @returns {Promise}
     */
    ballsByType(sporttype) {
        return this.getPromise("GET", window.location.origin + "/" + sporttype);
    }

    /**
     * Gets all the balls by ball category
     *
     * @param sporttype type of balls to be retrieved.
     * @param balltype more specific category to be retrieved
     * @returns {*}
     */
    ballsByName(sporttype, balltype) {
        return this.getPromise("GET", window.location.origin + "/" + sporttype + "/type/" + balltype);
    }

    /**
     * Gets a ball of a specific id
     *
     * @param sporttype type of ball to fetch
     * @param id id of the ball to be fetched
     * @returns {*}
     */
    ballById(sporttype, id) {
        return this.getPromise("GET", window.location.origin + "/" + sporttype + "/" + id);
    }

    /**
     * Gets reviews for specific ball
     *
     * @param sporttype - type of sport that the ball that's reviews are to be retrieved represents
     * @param ballId - id of the ball that's reviews are to be retrieved
     * @returns {Promise}
     */
    reviewsByBallId(sporttype, ballId) {
        return this.getPromise("GET", window.location.origin + "/" + sporttype + "/reviews").then(r => this.filterArray(r, ballId));
    }

    /**
     * Filters reviews array to remove unwanted reviews
     *
     * @param array array of reviews of a specific category
     * @param ballId ball id of a specific ball in that category
     * @returns {Array}
     */
    filterArray(array, ballId) {
        let parsed = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i].ownerBallId === ballId) {
                parsed.push(array[i]);
            }
        }
        return parsed;
    }

    /**
     * Sends review to database
     *
     * @param sporttype category of the ball reviewed
     * @param ballId id of the ball reviewed
     * @param userId id of the user reviewing ball
     * @param rating rating given to ball
     * @param header header of the review
     * @param content content of the review
     */
    sendReview(sporttype, ballId, userId, rating, header, content) {
        let targetUrl = window.location.origin + "/" + sporttype + "/" + ballId + "/review/user/" + userId;

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

    /**
     * Controller that handles requests to backend
     *
     * @param type what kind of request to send
     * @param address address to send it to
     * @returns {Promise}
     */
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
                    reject(e)
                }
            };
            request.send();
        });
    }

    /**
     * Stores new user to database
     *
     * @param obj needed user details
     */
    createAccount(obj) {
        obj["accessLevel"] = "User";
        fetch(window.location.origin + "/user",
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

    /**
     * Gets a specific user from database to sign in purposes
     *
     * @param userName username to be fetched
     * @returns {Promise}
     */
    userLogin(userName) {
        return this.getPromise("GET", window.location.origin + "/" + userName);
    }

    /**
     * Gets all the users from database
     *
     * @returns {Promise}
     */
    getUsers() {
        return this.getPromise("GET", window.location.origin + "/users");
    }

    /**
     * Gets an image from database
     *
     * @param id name of the image file
     * @returns {Promise}
     */
    getImage(id) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open('GET', window.location.origin + "/" + id);
            request.responseType = 'blob';
            request.onreadystatechange = function () {
                if (request.status === 200) {
                    if(request.response !== null) {
                        resolve(request.response);
                    }
                } else {
                    reject(new Error('Image didn\'t load successfully; error code:' + request.statusText));
                }
            };
            request.send();
        });
    }


    /**
     * Puts ball to database for updating amount after purchase
     *
     * @param obj object to be updated
     * @param id id of the object to be updated
     * @param category category of the object to be updated
     */
    reduceQuantity(obj, id, category) {
        fetch(window.location.origin + "/" + category + "/" + id,
            {
                method: 'PUT',
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

    /**
     * Adds new item to database
     *
     * @param obj
     * @param category
     */
    addItemToDatabase(obj, category) {
        fetch(window.location.origin + "/" + category,
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
}
