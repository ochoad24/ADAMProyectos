<template>
    <div>
        <clear_header></clear_header>
        <div class="wrapper">
            <left_side v-show="this.$store.state.left_open && this.$store.state.user.role===0"></left_side>
            <left_side_tecnico v-show="this.$store.state.left_open && this.$store.state.user.role===1"></left_side_tecnico>
            <right_side>
                <router-view></router-view>
            </right_side>
        </div>
        <div class="background-overlay" @click="right_close"></div>
    </div>
</template>
<script>
    import clear_header from "./components/layout/clear_header";
    import left_side_tecnico from './components/layout/left-side/default/left-side-tecnico';
    import left_side from "./components/layout/left-side/default/left-side";
    import right_side from "./components/layout/right-side";
    export default {
        name: 'default_layout',
        components: {
            clear_header,
            left_side,
            right_side,
            left_side_tecnico
        },
        created: function() {},
        methods: {
            right_close() {
                this.$store.commit('rightside_bar', "close");
            }
        },
        mounted() {
            window.onscroll = function(event){
                var top = ( document.getElementById('menu') &&  document.getElementById('menu').scrollTop  || document.body && document.body.scrollTop  || 0);
                if(top<=56){
                    document.getElementById("right").style.marginTop=-top+"px"
                }
                else{
                    document.getElementById("right").style.marginTop=-56+"px"
                }

            }
        }
    }
</script>
<style src="./css/custom_css/metisMenu.css"></style>
<style lang="scss" src="./sass/dark/custom.scss"></style>
<style src="themify-icons/css/themify-icons.css"></style>

<style >
    body.fixed-header #app .navbar{
        position: relative;
    }
    body.fixed-header #app .header{
        margin-bottom: 0;
    }
    @media(max-width: 320px){
        .message_dropdown .dropdown-menu.show{
            left:20px !important;
        }
    }
</style>
