<template>
    <div id="right1" :class="{ open: this.$store.state.right_open }">
        <div class="right-chatbox-heading">
            <b-card header-tag="header"
                    footer-tag="footer">
                <h4 slot="header"
                    class="mb-0">Chat</h4>
                <b-tabs>
                    <b-tab title="Recent Chat" active>

                        <b-list-group>
                            <b-list-group-item button class="d-flex justify-content-between align-items-center">
                       <span>
                           <img :src="require('../../../../img/authors/chat1.jpg')" alt="image missing" class="img-fluid mr-4">
                                     <label>Sheela Pande</label>
                       </span>

                                <b-badge variant="light" pill><i class="fa fa-circle" aria-hidden="true"></i>
                                </b-badge>
                            </b-list-group-item>
                            <b-list-group-item button class="d-flex justify-content-between align-items-center">
                       <span>
                           <img :src="require('../../../../img/authors/chat2.jpg')" alt="image missing" class="img-fluid mr-4">
                                     <label>Rahena</label>
                       </span>

                                <b-badge  variant="light" pill><i class="fa fa-circle" aria-hidden="true"></i>
                                </b-badge>
                            </b-list-group-item>

                            <b-list-group-item button class="d-flex justify-content-between align-items-center">
                       <span>
                           <img :src="require('../../../../img/authors/chat3.jpg')" alt="image missing" class="img-fluid mr-4">
                                     <label>Mark borne</label>
                       </span>

                                <b-badge  variant="light" pill><i class="fa fa-circle" aria-hidden="true"></i>
                                </b-badge>
                            </b-list-group-item>
                            <b-list-group-item button class="d-flex justify-content-between align-items-center">
                       <span>
                           <img :src="require('../../../../img/authors/chat2.jpg')" alt="image missing" class="img-fluid mr-4">
                                    <label> Ashiya Lius</label>
                       </span>

                                <b-badge  variant="Secondary" pill><i class="fa fa-circle" aria-hidden="true"></i>
                                </b-badge>
                            </b-list-group-item>
                            <b-list-group-item button class="d-flex justify-content-between align-items-center">
                       <span>
                           <img :src="require('../../../../img/authors/chat2.jpg')" alt="image missing" class="img-fluid mr-4">
                                    <label> Ashiya Lius</label>
                       </span>
                        <b-badge  variant="Secondary" pill class="previou-chat"><i class="fa fa-circle" aria-hidden="true"></i></b-badge>
                            </b-list-group-item>
                        </b-list-group>
                    </b-tab>
                    <b-tab title="Previous Chat" >

                        <b-list-group>
                            <b-list-group-item button class="d-flex justify-content-between align-items-center">
                       <span>
                           <img :src="require('../../../../img/authors/chat1.jpg')" alt="image missing" class="img-fluid mr-4">
                           <label>Sheela Pande</label>
                       </span>

                                <!--<b-badge variant="secondary" pill><i class="fa fa-circle" aria-hidden="true"></i>-->
                                <!--</b-badge>-->
                            </b-list-group-item>
                            <b-list-group-item button class="d-flex justify-content-between align-items-center">
                       <span>
                           <img :src="require('../../../../img/authors/chat2.jpg')" alt="image missing" class="img-fluid mr-4">
                           <label>Rahena</label>

                       </span>

                                <!--<b-badge  variant="secondary" pill><i class="fa fa-circle" aria-hidden="true"></i>-->
                                <!--</b-badge>-->
                            </b-list-group-item>

                            <b-list-group-item button class="d-flex justify-content-between align-items-center">
                       <span>
                           <img :src="require('../../../../img/authors/chat3.jpg')" alt="image missing" class="img-fluid mr-4">
                           <label>Mark borne</label>
                       </span>

                                <!--<b-badge  variant="secondary" pill><i class="fa fa-circle" aria-hidden="true"></i>-->
                                <!--</b-badge>-->
                            </b-list-group-item>
                        </b-list-group>
                    </b-tab>

                </b-tabs>




            </b-card>
        </div>
    </div>
</template>
<script>
    export default {
        name: "example",
        mounted: function() {

        },
        destroyed: function() {

        },
        methods: {
            change_skin() {
            }
        }
    }
</script>
<style scoped>
    /*.right-chatbox-heading .card-header*/
    /*{*/
        /*background-color: #1B9AF7;*/
        /*color:white;*/
    /*}*/
    /*.right-chatbox-heading .card*/
    /*{*/
    /*width: 50%;*/
    /*}*/
    .right-chatbox-heading .card-body ul li.nav-item
    {
        width: 50%;
    }
    .right-chatbox-heading .nav-tabs .nav-link.active,
    .right-chatbox-heading .nav-tabs .nav-link:hover,
    .right-chatbox-heading .nav-tabs .nav-link.active:hover
    {
        border-bottom: 3px solid #6699cc;
        border-top: 0 !important;

    }
    .right-chatbox-heading .nav-tabs .nav-link:hover
    {
        border-bottom: 0;
    }
    .right-chatbox-heading .list-group-item img
    {
        border-radius: 50%;
    }
    .right-chatbox-heading .nav-tabs .nav-link
    {
        border-top: 3px solid transparent !important;
    }
    .right-chatbox-heading .nav-tabs
    {
        border-bottom: 0;
    }
    .right-chatbox-heading .list-group-item
    {
        border: 0;
    }
    .right-chatbox-heading .list-group-item-action:active
    {
        background-color: #f8f9fa;
        outline:none;
    }
    .right-chatbox-heading .badge-pill
    {
        color:#66cc99;
    }
    .right-chatbox-heading .badge-pill.badge-secondary
    {
        color: #868e96 !important;
        background-color: #fff
    }
    .right-chatbox-heading .badge.previou-chat
    {
        color: #495057;
    }
    .right-chatbox-heading .card
    {
        height:414px;
    }
    /*.right-chatbox-heading .card*/
    /*{*/
        /*position: fixed;*/
        /*top: 0;*/
        /*width: 25%;*/
        /*right: -20%;*/
        /*z-index: 9;*/
    /*}*/
</style>
