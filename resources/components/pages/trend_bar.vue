<template>
    <div class="row">
        <div class="col-sm-6">
            <card title="Trend chart">
                <trend
                        :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
                        :gradient="['#6fa8dc', '#42b983', '#f27a09','#ff5454']"

                        smooth>
                </trend>
            </card>
            <!--<b-card class="bg-success-card trendvue">-->
               <!---->
            <!--</b-card>-->

        </div>
        <div class="col-sm-6">
            <card title="Vue-bar chart">

                <bars
                        :data="[1, 2, 5, 9, 5, 10, 3, 5, 8, 12, 1, 8, 2, 9, 10, 2, 9, 4, 5, 6, 7, 3, 2, 3, 5]"
                        :gradient="['#ffbe88', '#ff93df']"
                        :barWidth="5"
                        :growDuration="1">
                </bars>

            </card>
        </div>
    </div>
</template>
<script>
    import card from "./card/card.vue"
    import Vue from 'vue'
    import Trend from 'vuetrend';
    Vue.use(Trend);
    import Bars from 'vuebars'
    Vue.use(Bars);
    export default {
        name: "blank",
        components:{
            card
        },
        data(){
            return{

            }
        },
        methods:{

    }
    }
</script>
<style>
    .trendvue svg path{
    stroke-width:2px;
    }
    .card svg{
        height: 40vh;
    }
</style>