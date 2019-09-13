<template>
    <div id="app">
        <fullscreen ref="fullscreen" @change="fullscreenChange">
    <b-card-group deck id="serverload" v-if="cardhide">
        <b-card v-bind:style="cardstyles">
            <div v-if="cardstatus">
                <img :src="require('../../../../img/loader.gif')" alt='image missing' />
            </div>
            <div class="card-header" id="dropdown-card" >
               <h3 class="card-title"> Server Load</h3>

                    <b-dropdown variant="link" size="lg" no-caret >
                        <template slot="button-content" >
                            <span class="header-noti-icon" @click="menuOption"><i class="fa fa-ellipsis-v" aria-hidden="true" ></i></span>
                            <span class="sr-only">Search</span>
                        </template>
                        <div >
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

            <div class="card-text">
                <div class="row">
                <div class="col-lg-6 col-6">
                    <span>Space</span>
                    <div><span class="text-info text-size">98GB</span><span class="text-primary"> / 124GB</span></div>
                </div>
                <div class="col-lg-6 col-6  text-right">
                    <span>Bandwidth</span>
                    <div ><span class="text-danger text-size">512MB</span><span class="text-primary"> / 1024MB</span></div>
                </div>
                </div>
                <div class="col-12 px-0">
                    <div id="chartdiv" class="server-load-chart" style="width: 100%; height: 400px;"></div>
                </div>
            </div>
        </b-card>
    </b-card-group>
        </fullscreen>
    </div>

</template>
    <script>

        import AmCharts from 'amcharts3'
        import AmSerial from "amcharts3/amcharts/serial"
        import AmGauge from 'amcharts3/amcharts/gauge'
        import AmLight from "amcharts3/amcharts/themes/light"
        import AmExport from "amcharts3/amcharts/plugins/export/export.min"
        import Fullscreen from "vue-fullscreen/src/component.vue"

        export default {
        name: 'server',

            components: {Fullscreen},
            data() {

                return {
                    cardhide: true,
                    card: "closecard",
                    fullscreen: false,
                    carddropdown:"",
                    text:"",
                    cardstatus:false,
                    cardstyle:{
                        opacity:0.5
                    },
                    cardstyles:""


                }

            },
            methods: {
                menuOption:function()
                {


                    setTimeout( () => {
                        this.el=document.getElementById("dropdown-card").querySelectorAll(".dropdown .dropdown-menu.show");

                        this.el[0].style.left="auto";
                        this.el[0].style.right="0";


                    }, 10);
                },

                toggle () {
                    this.$refs['fullscreen'].toggle()
                },
                fullscreenChange (fullscreen) {
                    this.fullscreen = fullscreen
                },

                notificationClose: function () {

                    this.cardhide = !this.cardhide;
                },


                mounted: function () {

                },

                destroyed: function () {

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


        created () {
            setTimeout( () => {
                var chart = window.AmCharts.makeChart("chartdiv", {
                    "theme": "light",
                    "type": "gauge",
                    "axes": [{
                        "topTextFontSize": 20,
                        "topTextYOffset": 50,
                        "axisColor": "#42f4d7",
                        "axisThickness": 1,
                        "endValue": 100,
                        "gridInside": true,
                        "inside": true,
                        "radius": "50%",
                        "valueInterval": 20,
                        "tickColor": "#67b7dc",
                        "startAngle": -90,
                        "endAngle": 90,
                        "unit": "%",
                        "bandOutlineAlpha": 0,
                        "allLabels": [
                            {

                                "display": "false"
                            }
                        ],
                        "bands": [{
                            "color": "#e2e7ee",
                            "endValue": 100,
                            "innerRadius": "105%",
                            "radius": "170%",
                            "gradientRatio": [0, 0, 0],
                            "startValue": 0
                        }, {
                            "color": "#c23616",
                            "endValue": 0,
                            "innerRadius": "105%",
                            "radius": "170%",
                            "gradientRatio": [0, 0, 0],
                            "startValue": 0
                        }]

                    }],
                    "arrows": [{
                        "alpha": 1,
                        "innerRadius": "35%",
                        "nailRadius": 0,
                        "radius": "170%"
                    }]

                })

                setInterval(randomValue, 2000);

// set random value
                function randomValue() {


                    var value = Math.round(Math.random() * 100);
                        chart.arrows[0].setValue(value);

                    chart.axes[0].setTopText(value + "%");
                    // adjust darker band to new value
                    chart.axes[0].bands[1].setEndValue(value);
                }
            }, 500);

        },
            mounted:function() {
            $(document).ready(function () {

            setTimeout(function()
            {
                $(".amcharts-chart-div").css("width","253px !important");
                $(".amcharts-chart-div a").css("visibility","hidden");

            },200)
            })
            },
            beforeMount() {
            }

    }

</script>

<link rel="stylesheet" href="https://www.amcharts.com/lib/3/plugins/export/export.css" type="text/css" media="all" />
<style scoped>
    #chartdiv {
        width: 100%;
        height: 500px;
    }
    #serverload .card-body
    {
        padding: 0;
    }
    #serverload .card-text
    {
        padding: 1.25rem;
    }
    #serverload .card-header
    {
        padding:0.75rem 1.25rem 2.25rem;
    }
    #serverload .text-size
    {
        font-size:14px;
    }
    #chartdiv div.amcharts-chart-div a
    {
        visibility: hidden;
    }

    #serverload .card .card-header .dropdowngroup
    {
        width: 50%;
        float:right;
        position: absolute;
        z-index: 99;
        right: 2px;
        transition:all 1s;
    }
    #serverload .card .card-header .dropdowngroup .dropdown-item
    {
        cursor:pointer;
    }
    #app .fullscreen
    {
        overflow-x:hidden;
    }
    .fullscreen .card
    {
        box-shadow: none;
    }
    .fullscreen
    {
        background-color:#fff !important;
    }
    #serverload .btn-group.b-dropdown.dropdown
    {
        float:right;
    }
    #serverload  .btn-group.b-dropdown.dropdown i
    {
        color:#212529;
    }
    .drop-set
    {
       position:absolute;
        left: auto !important;
        right:0 !important;
    }

    .header-noti-icon:hover i,  .header-noti-icon i
    {
        padding: 5px 10px 4px 11px;
        border-radius:50px;

        position: relative;
        left: 9px;
        top: -8px;
    }
    .header-noti-icon i
    {
        background:none;
    }
    .header-noti-icon:hover i
    {
        background-color:#eee;
    }
    #app .fullscreen[data-v-3354e48c]
    {
        background-color:#fff !important;
    }
    #serverload .card .card-body
    {
        height: 386px;
    }
    #serverload .card
    {
        position:relative;

    }
    #serverload .card .card-body img
    {
        position: absolute;
        text-align: center;
        left: 43%;
        top: 40%;
        z-index:99;

    }
    @media (min-width:320px) and (max-width:767px)
    {
        #serverload .card .card-body
        {
            height:420px;
        }
    }
    .cardstyles
    {
        opacity:0.5
    }
    .amcharts-chart-div
    {
        width:253px !important;
    }

</style>
