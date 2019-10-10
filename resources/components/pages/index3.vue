<template>
    <div>
        <div class="row">
            <div class="col-md-6 card-alignment">
                <div>
                    <b-card class="p-0">
                        <div class="card-title bg-primary text-center mb-0 p-0"><h4 class="py-4 text-white">Top
                            Authors</h4></div>

                        <slick class="slider"
                               ref="slick"
                               :options="slickOptions">
                            <a href="#">
                                <div class="text-center">
                                    <b-img class="img-fluid"  :src="require('../../img/authors/avatar1.jpg')" rounded="circle" alt="Circle image"/>
                                </div>
                                <b-card-text>
                                    <h4 class="text-center mt-4 mb-5">Natasha Knight</h4>
                                    <ul class="list-group">
                                        <li class="list-group-item"><i class="fa fa-phone  mr-3"></i>+123456789</li>
                                        <li class="list-group-item"><i class="fa fa-envelope mr-3"></i>contact@contact.com
                                        </li>
                                        <li class="list-group-item"><i class="fa fa-map-marker mr-3"></i>US,Washington
                                        </li>
                                        <li class="list-group-item">
                                            <i class="fa fa-facebook bg-primary text-white p-1 mr-2"></i>
                                            <i class="fa fa-twitter bg-info text-white p-1 mr-2"></i>
                                            <i class="fa fa-google-plus bg-primary text-white p-1 mr-2"></i>
                                            <i class="fa fa-instagram bg-warning text-white p-1"></i>
                                        </li>
                                        <li class="list-group-item p-0">
                                            <div class="row">
                                                <div class="col-4 section">
                                                    <div class=" text-center">
                                                        <h5 class="mt-2">71</h5>
                                                        <p>Articles</p>
                                                    </div>
                                                </div>
                                                <div class="col-4 section">
                                                    <div class=" text-center">
                                                        <h5 class="mt-2">1400</h5>
                                                        <p>Followers</p>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class=" text-center">
                                                        <h5 class="mt-2">450</h5>
                                                        <p>Likes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </b-card-text>
                            </a>
                            <a href="#">
                                <div class="text-center">
                                    <b-img class="img-fluid"  :src='require("../../img/authors/avatar.jpg")' rounded="circle" alt="Circle image"/>
                                </div>
                                <b-card-text>
                                    <h4 class="text-center mt-4 mb-5">John Mark</h4>
                                    <ul class="list-group">
                                        <li class="list-group-item"><i class="fa fa-phone  mr-3"></i>+123456789</li>
                                        <li class="list-group-item"><i class="fa fa-envelope mr-3"></i>contact@contact.com
                                        </li>
                                        <li class="list-group-item"><i class="fa fa-map-marker mr-3"></i>US,Washington
                                        </li>
                                        <li class="list-group-item">
                                            <i class="fa fa-facebook bg-primary text-white p-1 mr-2"></i>
                                            <i class="fa fa-twitter bg-info text-white p-1 mr-2"></i>
                                            <i class="fa fa-google-plus bg-primary text-white p-1 mr-2"></i>
                                            <i class="fa fa-instagram bg-warning text-white p-1"></i>
                                        </li>
                                        <li class="list-group-item p-0">
                                            <div class="row">
                                                <div class="col-4 section">
                                                    <div class=" text-center">
                                                        <h5 class="mt-2">71</h5>
                                                        <p>Articles</p>
                                                    </div>
                                                </div>
                                                <div class="col-4 section">
                                                    <div class=" text-center">
                                                        <h5 class="mt-2">1400</h5>
                                                        <p>Followers</p>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class=" text-center">
                                                        <h5 class="mt-2">450</h5>
                                                        <p>Likes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </b-card-text>
                            </a>
                            <a href="#">
                                <div class="text-center">
                                    <b-img class="img-fluid"  :src="require('../../img/authors/avatar8.jpg')" rounded="circle" alt="Circle image"/>
                                </div>
                                <b-card-text>
                                    <h4 class="text-center mt-4 mb-5">Shubham Raj</h4>
                                    <ul class="list-group ">
                                        <li class="list-group-item"><i class="fa fa-phone  mr-3"></i>+123456789</li>
                                        <li class="list-group-item"><i class="fa fa-envelope mr-3"></i>contact@contact.com
                                        </li>
                                        <li class="list-group-item"><i class="fa fa-map-marker mr-3"></i>US,Washington
                                        </li>
                                        <li class="list-group-item">
                                            <i class="fa fa-facebook bg-primary text-white p-1 mr-2"></i>
                                            <i class="fa fa-twitter bg-info text-white p-1 mr-2"></i>
                                            <i class="fa fa-google-plus bg-primary text-white p-1 mr-2"></i>
                                            <i class="fa fa-instagram bg-warning text-white p-1"></i>
                                        </li>
                                        <li class="list-group-item p-0">
                                            <div class="row">
                                                <div class="col-4 section">
                                                    <div class=" text-center">
                                                        <h5 class="mt-2">71</h5>
                                                        <p>Articles</p>
                                                    </div>
                                                </div>
                                                <div class="col-4 section">
                                                    <div class=" text-center">
                                                        <h5 class="mt-2">1400</h5>
                                                        <p>Followers</p>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class=" text-center">
                                                        <h5 class="mt-2">450</h5>
                                                        <p>Likes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </b-card-text>
                            </a>
                            <a href="#">
                                <div class="text-center">
                                    <b-img class="img-fluid"  :src='require("../../img/authors/avatar3.jpg")' rounded="circle" alt="Circle image"/>
                                </div>
                                <b-card-text>
                                    <h4 class="text-center mt-4 mb-5">Sophia Snyder</h4>
                                    <ul class="list-group ">
                                        <li class="list-group-item"><i class="fa fa-phone  mr-3"></i>+123456789</li>
                                        <li class="list-group-item"><i class="fa fa-envelope mr-3"></i>contact@contact.com
                                        </li>
                                        <li class="list-group-item"><i class="fa fa-map-marker mr-3"></i>US,Washington
                                        </li>
                                        <li class="list-group-item">
                                            <i class="fa fa-facebook bg-primary text-white p-1 mr-2"></i>
                                            <i class="fa fa-twitter bg-info text-white p-1 mr-2"></i>
                                            <i class="fa fa-google-plus bg-primary text-white p-1 mr-2"></i>
                                            <i class="fa fa-instagram bg-warning text-white p-1"></i>
                                        </li>
                                        <li class="list-group-item p-0">
                                            <div class="row">
                                                <div class="col-4 section">
                                                    <div class=" text-center">
                                                        <h5 class="mt-2">71</h5>
                                                        <p>Articles</p>
                                                    </div>
                                                </div>
                                                <div class="col-4 section">
                                                    <div class=" text-center">
                                                        <h5 class="mt-2">1400</h5>
                                                        <p>Followers</p>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class=" text-center">
                                                        <h5 class="mt-2">450</h5>
                                                        <p>Likes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </b-card-text>
                            </a>
                        </slick>


                    </b-card>


                </div>
            </div>
            <div class="col-md-6">
                <b-card class="p-0">
                    <div class="card-title bg-success  mb-0 p-0">
                        <b-row class=" mx-2 py-3 text-white">
                            <b-col>
                                <h5 class="text-white font-weight-bold">Active Users</h5>
                                <p>Updated 10 min ago </p>
                            </b-col>
                            <b-col class="text-right">
                                <p class="font-weight-bold mr-3">50</p>

                            </b-col>
                        </b-row>

                    </div>
                        <table class="table user-country text-center">

                            <tbody>
                            <tr>
                                <th scope="row"> <b-img class="img-fluid" :src="require('../../img/pages/icons8-usa.png')" alt="Circle image"/></th>
                                <td><p class="font-weight-bold mb-0">United States</p></td>
                                <td>150</td>
                                <td> <span class="mr-3 text-success"><i class="fa fa-arrow-up" aria-hidden="true"></i></span>20%</td>
                            </tr>
                            <tr>
                                <th scope="row"><b-img class="img-fluid" :src="require('../../img/pages/icons8-hungary.png')"   alt="Circle image"/></th>
                                <td><p class="font-weight-bold mb-0">Hungary</p></td>
                                <td>150</td>
                                <td><span class="mr-3 text-danger"><i class="fa fa-arrow-down" aria-hidden="true"></i></span>20%</td>
                            </tr>
                            <tr>
                                <th scope="row"><b-img class="img-fluid" :src="require('../../img/pages/icons8-france.png')"    alt="Circle image"/></th>
                                <td><p class="font-weight-bold mb-0">France</p></td>
                                <td>150</td>
                                <td><span class="mr-3 text-success"><i class="fa fa-arrow-up" aria-hidden="true"></i></span>20%</td>
                            </tr>
                            <tr>
                                <th scope="row"><b-img class="img-fluid"  :src="require('../../img/pages/icons8-japan.png')"   alt="Circle image"/></th>
                                <td><p class="font-weight-bold mb-0">Japan</p></td>
                                <td>150</td>
                                <td><span class="mr-3 text-success"><i class="fa fa-arrow-up" aria-hidden="true"></i></span>20%</td>
                            </tr>
                            <tr>
                                <th scope="row"><b-img class="img-fluid"  :src="require('../../img/pages/icons8-china.png')"  alt="Circle image"/></th>
                                <td><p class="font-weight-bold mb-0">China</p></td>
                                <td>150</td>
                                <td><span class="mr-3 text-danger"><i class="fa fa-arrow-down" aria-hidden="true"></i></span>20%</td>
                            </tr>
                            <tr>
                                <th scope="row"><b-img class="img-fluid" :src="require('../../img/pages/ru.png')"  alt="Circle image"/></th>
                                <td><p class="font-weight-bold mb-0">Russia</p></td>
                                <td>150</td>
                                <td><span class="mr-3 text-danger"><i class="fa fa-arrow-down" aria-hidden="true"></i></span>20%</td>
                            </tr>
                            </tbody>
                        </table>





                </b-card>

            </div>

        </div>
    </div>

</template>
<script>

    import Vue from "vue";
    import Slick from 'vue-slick';
    import 'slick-carousel/slick/slick.css';

    export default {

        name: 'index3',
        components: {
            Slick
        },
        data() {
            return {
                slickOptions: {
                    slidesToShow: 1,
                    arrows: true,
                    nextArrow: '<span class="right"><i class="fa fa-chevron-right nextArrowBtn"></i></span>',
                    prevArrow: '<span class="left"><i class="fa fa-chevron-left preArrowBtn"></i></span>'
                },
            }
        },
        // All slick methods can be used too, example here
        methods: {
            next() {
                this.$refs.slick.next();
            },

            prev() {
                this.$refs.slick.prev();
            },

            reInit() {
                // Helpful if you have to deal with v-for to update dynamic lists
                this.$nextTick(() => {
                    this.$refs.slick.reSlick();
                });
            },


        },
    }
</script>
<style>
    .right {
        float: right;
        position: absolute;
        top: 4rem;
        right: 5rem;
    }
    .left {
        float: left;
        position: absolute;
        top: 4rem;
        left: 5rem;
    }
    .user-country img{
        height: 44px;
        width: 60px !important;
    }
    .user-country td{
        vertical-align: middle;
    }
</style>
<style scoped>
    .card .card-body {
        padding: 0;
    }

    .card-alignment .card-title {
        padding: 2rem 0 6rem;
    }


    .card-body img {
        width: 100px;
    }

    .list-group-item .section {
        border-right: 1px solid rgba(0, 0, 0, 0.125);
    }

    .slick-slide img {
        display: unset;
    }


</style>
