<template>
    <div id="app">
        <div class="header">
            Regular Expression Example
        </div>
        <div class="rex-display flex-end">
            <h1>{{regex_data[currnt_type]}}</h1>
        </div>
        <div class="flex-center">
            <div class="option-list ">
                <div class="option flex-1" v-for="item in menus" v-bind:key="item.name">
                    <router-link :to="{ name:item.name }" @click.native="selectItem(item.name)" v-bind:class="{ current: currnt_type == item.name }"> 
                        {{item.text}}
                    </router-link>
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
                currnt_type:'',
                menus: [
                    {text:'URL', name:'url'},
                    {text:'MOBILE', name:'mobile'},
                    {text:'PHONE', name:'phone'}
                ]
            }
        },
        mounted : function(){
            this.selectItem(this.$route.name);
        },
        methods: {
            selectItem(item){
                this.currnt_type = item;
            }
        },
    }
</script>

