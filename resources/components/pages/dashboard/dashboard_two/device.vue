<template>
    <div id="app">
        <fullscreen ref="fullscreen" @change="fullscreenChange">
            <b-card-group deck id="deviceload" v-if="cardhide">
                <b-card v-bind:style="cardstyles">
                    <div v-if="cardstatus">
                        <img :src="require('../../../../img/loader.gif')" alt='image missing' />
                    </div>
                    <div class="card-header" id="dropdown-card">
                        <h3 class="card-title"> Device Separations</h3>
                        <div >
                            <b-dropdown variant="link" size="lg" no-caret >
                                <template slot="button-content"   >
                                    <span class="device-header-noti-icon"><i class="fa fa-ellipsis-v" aria-hidden="true" ></i></span>

                                    <span class="sr-only">Search</span>
                                </template>
                                <div >
                                    <b-dropdown-item href="#" @click="toggle">
                                        <span class="pr-3"> <i class='fa fa-arrows-alt'></i></span>
                                        <span>Full Screen</span>
                                    </b-dropdown-item>
                                    <b-dropdown-item href="#"  @click="myReload">
                                        <span class="pr-3"> <i class='fa fa-refresh'></i></span>
                                        <span >Reload</span>
                                    </b-dropdown-item>
                                    <b-dropdown-item href="#" @click="notificationClose">
                                        <span class="pr-3 "> <i class='fa fa-close'></i></span>
                                        <span>Close</span>
                                    </b-dropdown-item>
                                </div>
                            </b-dropdown>
                        </div>
                    </div>
                    <div class="card-text" id="doughchart">

                        <div class="col-7 mx-auto">

                            <chartjs-doughnut v-bind:width="mywidth" v-bind:height="myheight" :scalesdisplay="false" :datasets="mydatasets" :labels="['Computer','Mobile','Tablets']" :option="myoption"></chartjs-doughnut>
                        </div>
                        <div class="row">
                            <div class="col-4 text-center px-0">
                                <b-badge><i class="fa fa-circle text-primary fa-2x"></i></b-badge><span class="">Computer</span>

                            </div>
                            <div class="col-4 text-center ">
                                <b-badge ><i class="fa fa-circle text-mobile fa-2x"></i></b-badge><span class="">Mobile</span>

                            </div>
                            <div class="col-4 text-center ">
                                <b-badge><i class="fa fa-circle text-tablet fa-2x"></i></b-badge><span class="">Tablets</span>

                            </div>

                        </div>
                    </div>
                </b-card>
            </b-card-group>
        </fullscreen>
    </div>

</template>


<script>

    import "chart.js/dist/Chart.js";
    import "hchs-vue-charts/dist/vue-charts.js";

    import Fullscreen from "vue-fullscreen/src/component.vue"

    export default {

        name:"app",


        components: {Fullscreen},
        data() {

            return {

                cardhide: true,
                card: "closecard",
                fullscreen: false,
                mywidth: 300,
                myheight: 500,
                cardstyle:{
                    opacity:0.5
                },
                cardstyles:"",
                cardstatus:false,
                mydatasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#1da1f2",
                        "#3b5998",
                        "#f0ad4e"
                    ],


                }],
                myoption:{
                    legend: {
                        display: false
                    },
                    responsive:true,
                    maintainAspectRatio:true,
                    title: {
                        display: false,
                        position: 'top',
                        text: '3000'
                    }
                }


            }
        },

        methods: {


            myReload: function () {
                this.cardstatus = true,
                    this.cardstyles = this.cardstyle

                    setTimeout(() => {
                        this.cardstatus = false
                        this.cardstyles = {
                            opacity: 1
                        }

                    }, 2000)

            },
            // menuOption:function()
            // {
            //     setTimeout( () => {
            //         this.el=document.getElementById("dropdown-card").querySelectorAll(".dropdown .dropdown-menu.show");
            //         // this.text=document.getElementById("chartdiv").querySelectorAll(".amcharts-chart-div a");
            //         this.el[0].style.left="auto";
            //         this.el[0].style.right="0";
            //
            //
            //     }, 10);
            // },

            toggle () {
                this.$refs['fullscreen'].toggle()
            },
            fullscreenChange (fullscreen) {
                this.fullscreen = fullscreen
            },

            notificationClose: function () {

                this.cardhide = !this.cardhide;
            },

        },

        mounted: function () {
            $(document).ready(function () {



                    $(".fa-ellipsis-v").on("click", function () {

                            $(this).closest(".card").find(".dropdown-menu.show").addClass("hi");

                    })

            })
        },

        destroyed: function () {

        },

    }

</script>
<link rel="stylesheet" href="https://www.amcharts.com/lib/3/plugins/export/export.css" type="text/css" media="all" />
<style scoped>
    #chartdiv {
        width: 100%;
        height: 500px;
    }
    #deviceload .card-body
    {
        padding: 0;
    }
    #deviceload .card-text
    {
        padding: 1.25rem;
    }
    #deviceload .card-header
    {
        padding:0.75rem 1.25rem 2.25rem;
    }
    #deviceload .text-size
    {
        font-size:14px;
    }
    #chartdiv div.amcharts-chart-div a
    {
        visibility: hidden;
    }
    .server-load-chart
    {
        bottom: -5.5rem;
        left: 0;
        position: relative;
        right: 0;
    }
    #deviceload .card .card-header .dropdowngroup
    {
        width: 50%;
        float:right;
        position: absolute;
        z-index: 99;
        right: 2px;
        transition:all 1s;
    }
    #deviceload .card .card-header .dropdowngroup .dropdown-item
    {
        cursor:pointer;
    }
    #app .fullscreen
    {
        overflow-x:hidden;
    }
    .fullscreen
    {
        background-color:#fff !important;
    }
    #deviceload .btn-group.b-dropdown.dropdown
    {
        float:right;
    }
    #deviceload .btn-group.b-dropdown.dropdown i
    {
        color:#212529;
    }

    #deviceload  .dropdown-menu[x-placement^="bottom"]{

        position:absolute;
        left: auto !important;
        right:0 !important;
        background-color:red;

    }
    #__BVID__196 > div
    {
        position:absolute;
        left: auto !important;
        right:0 !important;
        background-color:red;
    }
    .drop-set
    {
        position:absolute;
        left: auto !important;
        right:0 !important;
    }
    #deviceload canvas
    {
        margin: auto;
    }
    #doughchart .overlay-content
    {
        position: absolute;
        top: 44%;
        left: 36%;
        font-size: 24px;
        color: #212529;
        right: 0;
        bottom: 0;
        font-weight: 700;
    }
    .badge-secondary
    {
        background: none;
    }

    #doughchart .text-mobile
    {
        color:#f0ad4e;
    }
    #doughchart .text-tablet
    {
        color:#3b5998;
    }
    #serverload .card
    {
        position:relative;

    }
    #deviceload .card .card-body img
    {
        position: absolute;
        text-align: center;
        left: 43%;
        top: 40%;
        z-index:99;

    }

    .device-header-noti-icon:hover i,  .device-header-noti-icon i
    {
        padding: 5px 10px 4px 11px;
        border-radius:50px;
        position: relative;
        left: 9px;
        top: -8px;
    }
    .device-header-noti-icon i
    {
        background:none;
    }
    .device-header-noti-icon:hover i
    {
        background-color:#eee;
    }
    #deviceload .card
    {
        height: 389px;
    }
    .fullscreen .card
    {
        height: 100% !important;
    }
    @media (max-width: 768px)
    {
        #deviceload .card
        {
            height: auto;
        }
    }

</style>
