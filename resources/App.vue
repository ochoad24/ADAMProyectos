<template>
    <v-app id="app" >
    <preloader v-show="this.$store.state.preloader"></preloader>
    <router-view ></router-view>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </v-app>
    
</template>
<script>
import preloader from "./components/layout/preloader";

// style="background: white" import icheck from "../static/iCheck/icheck.min.js";
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

    
