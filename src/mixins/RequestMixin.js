import Axios from "axios";


export default {
    methods :  {
        getRequest: function (url, headers) {
            return new Promise((res, rej) => {
                Axios.get(url, headers)
                    .then((response) => {
                        res(response);
                }).catch((error)=>{
                    this.removeToken(error);
                    rej(error)
                });
            });
        },

        postRequest: function (url, params, headers) {
            return new Promise((res, rej) => {
                Axios.post(url, params, headers)
                    .then((response) => {
                        res(response);
                }).catch((error)=>{
                    this.removeToken(error);
                    rej(error)
                });
            });
        },


        putRequest: function (url, params, headers) {
            return new Promise((res, rej) => {
                Axios.put(url, params, headers)
                    .then((response) => {
                        res(response);
                }).catch((error)=>{
                    this.removeToken(error);
                    rej(error)
                });
            });
        },

        patchRequest: function (url, params, headers) {
            return new Promise((res, rej) => {
                Axios.patch(url, params, headers)
                    .then((response) => {
                        res(response);
                }).catch((error)=>{
                    this.removeToken(error);
                    rej(error)
                });
            });
        },

        deleteRequest: function (url, headers) {
            return new Promise((res, rej) => {
                Axios.put(url, headers)
                    .then((response) => {
                        res(response);
                }).catch((error)=>{
                    this.removeToken(error);
                    rej(error)
                });
            });
        },

        removeToken: function(error) {
            if(error.response.status == 403 || error.response.status == 401) {
                this.$store.commit("removeToken");
                this.$router.push("/login");   
            }
        }
    }
}
