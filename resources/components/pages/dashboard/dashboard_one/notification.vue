<template>
    <div id="app">
    <fullscreen ref="fullscreen" @change="fullscreenChange">


        <b-card-group deck v-if="cardhide" id="notification">
            <b-card v-bind:style="cardstyles">
                <div v-if="cardstatus">
                    <img :src="require('../../../../img/loader.gif')" alt='image missing' />
                </div>
                <div class="card-header" id="dropdown-card" >
                    <h3 class="card-title mt-2"> Notification</h3>
                    <!--<span class="header-noti-icon"><i class="fa fa-ellipsis-v" aria-hidden="true" ></i></span>-->
                    <div>
                    <b-dropdown variant="link" size="lg" no-caret>
                        <template slot="button-content" >
                            <span class="header-noti-icon"><i class="fa fa-ellipsis-v" aria-hidden="true" ></i></span>
                            <span class="sr-only">Search</span>
                        </template>
                        <div class="float-right">
                            <b-dropdown-item href="#" @click="toggle">
                                <span class="pr-3"> <i class='fa fa-arrows-alt'></i></span>
                                <span>Full Screen</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="#" @click="myReload(this)" >
                                <span class="pr-3"> <i class='fa fa-refresh'></i></span>
                                <span >Reload</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="#" @click="notificationClose">
                                <span class="pr-3"> <i class='fa fa-close'></i></span>
                                <span>Close</span>
                            </b-dropdown-item>
                        </div>
                    </b-dropdown>
                    </div>

                </div>


                <div class="card-text card-height">
                    <div class="row">
                    <div class="mr-3 notification-icon col-1">  <i class="fa fa-bell" aria-hidden="true"></i></div>
                    <div class="col-7">


                        <span class="card-admin">Admin</span><br>
                        <span class="card-notification">Header and footers.</span>
                    </div>

                    <div class="float-right mt-3 col-2 col-sm-3 px-0 card-admin">1 Hour ago</div>
                </div>

                    <div class="row">
                        <div class="mr-3 notification-icon col-1">  <i class="fa fa-bell" aria-hidden="true"></i></div>
                        <div class="col-7">


                        <span class="card-admin">Admin</span><br>
                            <span>Header and footers.</span>
                        </div>

                        <div class="float-right mt-3 col-2 col-sm-3 px-0 card-admin">1 Hour ago</div>
                    </div>

                    <div class="row">
                        <div class="mr-3 notification-icon col-1">  <i class="fa fa-bell" aria-hidden="true"></i></div>
                        <div class="col-7">
                        <span class="card-admin">Admin</span><br>
                         <span>Payment Receive.</span>
                        </div>

                        <div class="float-right mt-3 col-2 col-sm-3 px-0 card-admin ">1 Hour ago</div>
                    </div>
                    <div class="row">
                        <div class="mr-3 notification-icon col-1">  <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                        </div>
                        <div class="col-7">
                            <span class="card-admin">Admin</span><br>
                            <span>System Error.</span>
                        </div>

                        <div class="float-right mt-3 col-2 col-sm-3 px-0 card-admin">1 Hour ago</div>
                    </div>
                    <div class="row">
                        <div class="mr-3 notification-icon col-1">  <i class="fa fa-file" aria-hidden="true"></i></div>
                        <div class="col-7">
                            <span class="card-admin">Admin</span><br>
                            <span>Junk files cleaned</span>
                        </div>

                        <div class="float-right mt-3 col-2 col-sm-3 px-0 card-admin">1 Hour ago</div>
                    </div>
                    <div class="row">
                        <div class="mr-3 notification-icon col-1">  <i class="fa fa-info-circle" aria-hidden="true"></i></div>
                        <div class="col-7">
                            <span class="card-admin">Admin</span><br>
                            <span>Apps installed</span>
                        </div>

                        <div class="float-right mt-3 col-2 col-sm-3 px-0 card-admin">1 Hour ago</div>
                    </div>
                </div>
                <div class="card-text card-btn">
                <b-button href="#" variant="primary">View all</b-button>
                <span class="float-right mt-2">Updated 10 minutes ago</span>
                </div>
            </b-card>
        </b-card-group>


    </fullscreen>
    </div>
</template>
<script>
   import Fullscreen from "vue-fullscreen/src/component.vue"
    export default {

        name: "notification",
        components: {Fullscreen},
        data() {

            return {
                icon: "<i class='fa fa-facebook'></i>",

                seen: true,
                cardhide: true,
                card: "closecard",
                fullscreen: false,
                cardstatus:false,
                cardstyle:{
                    opacity:0.5
                },
                cardstyles:""

            }

        },
        methods: {

            toggle () {
                this.$refs['fullscreen'].toggle()
            },
            fullscreenChange (fullscreen) {
                this.fullscreen = fullscreen
            },

            notificationClose: function () {

                this.cardhide = !this.cardhide;
            },

            myReload:function ()
            {
                this.cardstatus=true,
                    this.cardstyles=this.cardstyle,

                    setTimeout( () => {
                        this.cardstatus=false
                        this.cardstyles={
                            opacity:1
                        }

                    },2000)
            }
        },
        mounted: function () {

        },

        destroyed: function () {

        },
    }
</script>
<style scoped>
    .card-deck .card .card-text .notification-icon i
    {
        padding: 10px;
        border: 1px solid rgba(0, 0, 0, 0.05);
        border-radius: 50px;
        background-color: rgba(0, 0, 0, 0.05);
    }
    .card-deck .card .card-height
    {
        overflow-y: scroll;
        height: 302px;
        overflow-x: hidden;
    }

    .card-deck .card .card-text .card-notification
    {
        font-size: 13px;
    }
    .card-deck .card .card-text .card-admin
    {
        font-size: 11px;
        color:#777;
    }
    .card-deck .card .card-text .row
    {
        padding-top:10px;
        padding-bottom:10px;
        border-bottom:1px solid #ececec;
    }
    .card-deck .card .card-text .row:hover
    {
        background-color: #f8f9fa;
    }
    .card-deck .card .card-text
    {
        padding:1.25rem;

    }
    .card-deck .card .card-btn
    {
        box-shadow: 0 0 14px rgba(0, 0, 0, 0.2);
    }
    .card-deck .card .card-header .list-group
    {
        width: 50%;
        float:right;
        position: absolute;
        z-index: 99;
        right: 2px;
        transition:all 1s;
    }
    .card-deck .card .card-header .list-group .list-group-item
    {
        cursor:pointer;
    }
    .card-deck .card .card-body
    {
        padding: 0;
    }
  .btn-group.b-dropdown.dropdown i
    {
        color:#212529;
    }

    #app .fullscreen
    {
        overflow-x:hidden;
    }
     .card .card-header .dropdowngroup
    {
        width: 50%;
        float:right;
        position: absolute;
        z-index: 99;
        right: 2px;

    }
     #dropdown-card
     {
         padding: 0.25rem 1.25rem;
     }
    #dropdown-card .btn-group
    {
        display: block !important;
    }
    .fullscreen .card
    {
        box-shadow: none;
    }
    #app .fullscreen
    {
        background:#fff !important;
    }
    .fullscreen .card-title.col-9
    {
        min-width:94%;
    }
    #notification .card-body div>img
    {
        position: absolute;
        top: 43%;
        left: 42%;
    }

    #dropdown-card>div
    {
        display: block;
        text-align: right;
        /* margin-left: auto; */
        width: 100%;
    }
    #notification .card-btn .btn-primary
    {
    box-shadow: none;
    }


</style>
