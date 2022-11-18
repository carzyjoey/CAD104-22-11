<template>
    <div class="container">
        <!-- submit 事件觸發時，執行 login -->
        <form @submit.prevent="login">
            <div class="mb-3">
                <label for="inputEmail" class="form-label">Email address</label>
                <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp"
                    v-model="user.email" />
            </div>
            <div class="mb-3">
                <label for="inputPassword" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPassword" v-model="user.password" />
            </div>
            <!-- type 為 submit 讓按下後得以觸發 submit -->
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="button" class="btn btn-primary ml-5" @click="getData">
                Get Data
            </button>
            <button type="button" class="btn btn-primary" @click="logout">
                Logout
            </button>
        </form>
    </div>
</template>

<script>
// 記得要先 import axois
import axios from "axios";
export default {
    name: "Login",
    data() {
        return {
            // 與使用者輸入的帳密欄位 v-model 雙向綁定
            user: {
                email: "",
                password: "",
            },
            // getData 時會先從瀏覽器 cookie 叫出 Token 存來此元件
            token: "",
        };
    },
    methods: {
        login() {
            // 如果一開始沒有 import axios 的話
            // 用 require("axios").default 也可以讓我們使用 axios
            // const axios = require("axios").default;
            axios
                .post(`你的 api 喔`, this.user)
                .then((res) => {
                    const token = res.data.token;
                    const expired = res.data.expired;
                    // 將 token 與他的到期時間存到瀏覽器 cookie 裡
                    document.cookie = `loginToken = ${token}; expires = ${new Date(
                        expired * 1000
                    )};`;
                });
        },
        getData() {
            // 先從瀏覽器 cookie 取得 token
            this.token = document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
            const api = `你的 api 喔`;

            // https://github.com/axios/axios#global-axios-defaults
            // 並且 header 按照後端 api 文件的規格要求填上 Bearer token 字樣
            axios.defaults.headers.common.Authorization = `this.token`;
            axios.get(api).then((res) => {
                console.log(res);
            });
        },
        logout() {
            // 清除瀏覽器 cookie 的 Token
            document.cookie = `loginToken = ""; expires = "";`;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
