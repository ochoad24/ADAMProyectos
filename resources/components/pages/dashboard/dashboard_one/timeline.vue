<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Timeline</h3>
        </div>
        <div class="card-body">
            <div>
                <ul class="timeline timeline-update">
                    <li>
                        <div class="timeline-badge primary wow lightSpeedIn center">
                            <img :src='require("../../../../img/authors/avatar1.jpg")' height="36" width="36"
                                 class="rounded-circle float-right" alt="avatar-image">
                        </div>
                        <div class="timeline-card wow slideInLeft"
                             style="display:inline-block;">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">Jade Project's Status </h4>
                                <p>
                                    <small class="text-primary">11 hours ago</small>
                                </p>
                            </div>
                            <div class="timeline-body">
                                <p>
                                    Jade Project team has completed their first phase.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="timeline-badge info wow lightSpeedIn center">
                            <img :src='require("../../../../img/authors/avatar.jpg")' height="36" width="36"
                                 class="rounded-circle float-right" alt="avatar-image">
                        </div>
                        <div class="timeline-card wow slideInLeft">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">Tinder Project</h4>
                                <p>
                                    <small class="text-primary">Sept 10, 2016</small>
                                </p>
                            </div>
                            <div class="timeline-body">
                                <p>
                                    Tinder Project's Final review has completed.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-badge default wow lightSpeedIn center">
                            <img :src='require("../../../../img/authors/avatar2.jpg")' height="36" width="36"
                                 class="rounded-circle float-right" alt="avatar-image">
                        </div>
                        <div class="timeline-card wow slideInLeft">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">A new branch in Virginia.</h4>
                                <p>
                                    <small class="text-primary">Jan 02, 2017</small>
                                </p>
                            </div>
                            <div class="timeline-body">
                                <p>
                                    Planning to have a branch in virginia in the coming year.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-badge primary wow lightSpeedIn center">
                            <img :src='require("../../../../img/authors/avatar3.jpg")' height="36" width="36"
                                 class="rounded-circle float-right" alt="avatar-image">

                        </div>
                        <div class="timeline-card wow slideInLeft"
                             style="display:inline-block;">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">Daily Status </h4>
                                <p>
                                    <small class="text-primary">2days ago</small>
                                </p>
                            </div>
                            <div class="timeline-body">
                                <p>
                                    Manager schedules to keep a daily project status track.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="timeline-badge info wow lightSpeedIn center">
                            <img :src='require("../../../../img/authors/avatar4.jpg")' height="36" width="36"
                                 class="rounded-circle float-right" alt="avatar-image">

                        </div>
                        <div class="timeline-card wow slideInLeft">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">Performance report</h4>
                                <p>
                                    <small class="text-primary">Aug 10, 2016</small>
                                </p>
                            </div>
                            <div class="timeline-body">
                                <p>
                                    Richard, updated his Team over view Performance report.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-badge default wow lightSpeedIn center">
                            <img :src='require("../../../../img/authors/avatar2.jpg")' height="36" width="36"
                                 class="rounded-circle float-right" alt="avatar-image">
                        </div>
                        <div class="timeline-card wow slideInLeft">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">Project Evaluation</h4>
                                <p>
                                    <small class="text-primary">Oct 05, 2016</small>
                                </p>
                            </div>
                            <div class="timeline-body">
                                <p>
                                    Variations Project Evaluation is going on to highlight
                                    project.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import newsticker from "jquery-advanced-news-ticker/assets/js/jquery.newsTicker.js";
    import vScroll from "../../../../components/plugins/scroll/vScroll.vue"
    export default {
        name:'timeline',
        components:{
            vScroll
        },
        mounted:function(){
            "use strict"
            //auto timeline update card
            if ($('.timeline-update').length > 0) {
        $('.timeline-update').newsTicker({
            row_height: 117,
            max_rows: 4,
            speed: 2000,
            direction: 'up',
            duration: 3500,
            autostart: 1,
            pauseOnHover: 1
        });
    }
    //auto timeline update panel ends

    }
    }
</script>
<style src="../../../../css/custom_css/dashboard1_timeline.css" scoped></style>
