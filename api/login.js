import service from "./service";

const login = (data) => {
    return new Promise((resolve, reject) => {
        service("post", "swuLogin", data)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
};

export default login;
