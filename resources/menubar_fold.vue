<template>
    <div class="menubar_fold">
        <clear_header></clear_header>
        <div class="wrapper">
            <left_side v-show="this.$store.state.left_open"></left_side>
            <right_side>
                <router-view></router-view>
            </right_side>
        </div>
        <div class="background-overlay" @click="right_close"></div>
    </div>
</template>
<script>
    import clear_header from "./components/layout/clear_header";
    import left_side from "./components/layout/left-side/default/left-side";
    import right_side from "./components/layout/right-side";

    export default {
        name: 'layout',
        components: {
            clear_header,
            left_side,
            right_side
        },

        created: function() {},
        mounted: function() {},
        methods: {
            right_close() {
                this.$store.commit('rightside_bar', "close");
            }
        },
        mounted() {}
    }
</script>
<style src="./css/custom_css/metisMenu.css"></style>
<style lang="scss" src="./sass/dark/custom.scss"></style>
<style >
   .menu-item .name ,.submenu.collapse-item .submenu-header-title,.ti-angle-right,.content-profile,.submenu.collapse-item.active  .submenu-content{
       display: none;
   }
    .submenu-content-box .name{
        display: inline-block;
    }
    .left-aside .sidebar,.left-aside{
        width: 90px;
    }
   .leftmenu_icon{
        font-size: 20px !important;
    }
   .collapse-item .submenu-content{
       overflow-y: visible !important;
   }
   .submenu-content{
       position: absolute !important;
   }
    .submenu-content-box{
        position: absolute;
        background-color: #fff;
        width: 250px;
        z-index: 99;
        left: 90px;
        margin-top: -50px;
        box-shadow: 1px 1px 1px #eee;
    }
    .submenu-content-box .vuemenu.navigation .submenu-header-title{
        display: inline-block;
    }
    .submenu.collapse-item:hover > .submenu-content{
        display: block !important;
    }
    .submenu.collapse-item .submenu-content .submenu-content{
        position: relative !important;
    }
    .submenu.collapse-item .submenu-content .submenu-content .submenu-content-box{
        position: static;
        margin-top: 0px;
    }
</style>
