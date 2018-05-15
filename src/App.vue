<template>
    <div id="app">
        <div class="header">
            Regular Expression Example
        </div>
        <div class="rex-display flex-end">
            <h1 class="text-center">{{regex_data[currnt_type]}}</h1>
        </div>
        <div class="flex-center">
            <div class="option-list ">
                <div class="option flex-1">
                    <a href="javascrip:;" v-bind:class="{ current: currnt_type == 'url' }" @click="checkFunc('url')">
                        URL
                    </a>
                </div>
                <div class="option flex-1">
                    <a href="javascrip:;" v-bind:class="{ current: currnt_type == 'mobile' }" @click="checkFunc('mobile')">
                        MOBILE
                    </a>    
                </div>
                <div class="option flex-1">
                    <a href="javascrip:;" v-bind:class="{ current: currnt_type == 'phone' }" @click="checkFunc('phone')">
                        PHONE
                    </a>
                </div>
            </div>
        </div>
        <div class="footer">
            Made with by 
            <a href="">Sun Kuo</a>
            on GitHub
        </div>
    </div>
</template>


<style src="./css/reset.css"></style>
<style src="./css/style.css"></style>
<script src="./js/index.js" type="text/javascript"></script>
<script>
    export default {
        name:'app',
        data() {
            return {
                regex_data: {
                    url: '/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/',
                    mobile: '/^09\d{8}$/',
                    phone:'/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/',
                    birthday:'/^\d{4}-\d{2}-\d{2}$/',
                },
                currnt_type:''
            }
        },
        mounted : function(){
            this.checkFunc('url');
        },
        methods: {
            checkFunc(type){
                this.currnt_type = type;
            },
        },
    }
</script>

