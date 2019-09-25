<template>
    <v-app id="app">
    <preloader v-show="this.$store.state.preloader"></preloader>
    <router-view></router-view>
    </v-app>
</template>
<script>
import preloader from "./components/layout/preloader";

//import icheck from "../static/iCheck/icheck.min.js";
export default {
    name: 'app',
    components: {
        preloader
    }
}
</script>
<style lang="scss" src="./sass/bootstrap/bootstrap.scss"></style>
<style src="font-awesome/css/font-awesome.min.css"></style>
<style src="themify-icons/css/themify-icons.css"></style>
