<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card ">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <div class="text-center mbl m-t-10">
                                        <img :src='require("../../img/authors/avatar1.jpg")' alt="img" class="rounded-circle img-bor"/>
                                    </div>
                                </div>
                                <div class="profile_user">
                                    <h3 class="user_name_max">Addison</h3>
                                    <p>Addisone@sf.com</p>
                                    <span class="fa-stack faceb fa-lg">
                                         <i class="fa fa-circle fa-stack-2x"></i>
                                        <i class="fa fa-stack-1x fa-facebook fa-inverse"></i>
                                    </span>
                                    <span class="fa-stack googleplus fa-lg">
                                         <i class="fa fa-circle fa-stack-2x"></i>
                                        <i class="fa fa-flag fa-stack-1x fa-google-plus fa-inverse"></i>
                                    </span>
                                    <span class="fa-stack tweet-btn fa-lg">
                                         <i class="fa fa-circle fa-stack-2x"></i>
                                        <i class="fa fa-flag fa-stack-1x fa-twitter fa-inverse"></i>
                                    </span>
                                </div>
                                &nbsp;&nbsp;
                               
                                <br/>
                             
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <b-tabs ref="tabs" class="profile-tabs">
                                            <b-tab title="Activities" active>
                                                <div id="tab-activity" class="tab-pane animated fadeInRight  active">
                                                    <div class="table-responsive">
                                                        <table class="table table-responsive ">
                                                            <tbody class="text-align">
                                                            <tr>
                                                                <td class="text-center">
                                                                    <i class="icon-bubble icons"></i>
                                                                </td>
                                                                <td>
                                                                    Jasmine Barlee posted a comment in Avengers Initiative
                                                                    project.
                                                                </td>
                                                                <td>
                                                                    2016/08/15 10:50
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-center">
                                                                    <i class="icon-rocket icons"></i>
                                                                </td>
                                                                <td>
                                                                    Beau Pomeroy changed order status from <span
                                                                        class="label label-primary">Pending</span> to <span
                                                                        class="label label-success">Completed</span>
                                                                </td>
                                                                <td>
                                                                    2015/07/19 07:16
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-center">
                                                                    <i class="icon-emotsmile icons"></i>
                                                                </td>
                                                                <td>
                                                                    Flynn Toosey posted a comment in Lost in Translation
                                                                    opening scene discussion.
                                                                </td>
                                                                <td>
                                                                    2014/09/16 10:10
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-center">
                                                                    <i class="icon-people icons"></i>
                                                                </td>
                                                                <td>
                                                                    Alex Smithers posted a comment in Avengers Initiative
                                                                    project.
                                                                </td>
                                                                <td>
                                                                    2015/11/20 05:15
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-center">
                                                                    <i class="icon-heart icons"></i>
                                                                </td>
                                                                <td>
                                                                    Ben Drennan changed order status from <span
                                                                        class="label label-warning">On Hold</span> to <span
                                                                        class="label label-danger">Disabled</span>
                                                                </td>
                                                                <td>
                                                                    2015/03/13 06:16
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-center">
                                                                    <i class="icon-key icons"></i>
                                                                </td>
                                                                <td>
                                                                    Darcy Whitford posted a comment in Lost in Translation
                                                                    opening scene discussion.
                                                                </td>
                                                                <td>
                                                                    2015/11/10 08:15
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-center">
                                                                    <i class="icon-hourglass icons"></i>
                                                                </td>
                                                                <td>
                                                                    Jordan Quinlivan changed order status from <span
                                                                        class="label label-primary">Pending</span> to <span
                                                                        class="label label-success">Completed</span>
                                                                </td>
                                                                <td>
                                                                    2014/05/02 10:08
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-center">
                                                                    <i class="icon-info icons"></i>
                                                                </td>
                                                                <td>
                                                                    Mary Dobbie posted a comment in Avengers Initiative
                                                                    project.
                                                                </td>
                                                                <td>
                                                                    2015/09/15 11:08
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-center">
                                                                    <i class="icon-present icons"></i>
                                                                </td>
                                                                <td>
                                                                    Lauren Monahan posted a comment in Avengers Initiative
                                                                    project.
                                                                </td>
                                                                <td>
                                                                    2015/08/08 12:08
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </b-tab>
                                            <b-tab title="Followers">
                                                <div class="row m-t-l-10">
                                                    <div class="col-md-6 col-lg-6 col-sm-6 bord">
                                                        <div class="row">
                                                            <div class="col-md-3 col-lg-4 col-4">
                                                                <div class="img">
                                                                    <a href="#">
                                                                        <img class="media-object img-thumbnail img-fluid"
                                                                             height="60" width="60"
                                                                             :src='require("../../img/authors/avatar2.jpg")'
                                                                             alt="avatar image">
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-9  col-lg-8 col-8">
                                                                <div class="details">
                                                                    <div class="name">
                                                                        <a href="#">Scarlett Johansson</a>
                                                                    </div>
                                                                    <div class="time">
                                                                        <i class="icon-clock icons"></i> Last online: 7
                                                                        minutes ago
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-6 col-sm-6 bord">
                                                        <div class="row">
                                                            <div class="col-md-3 col-lg-4 col-4">
                                                                <div class="img">
                                                                    <a href="#">
                                                                        <img class="media-object img-thumbnail img-fluid"
                                                                             :src='require("../../img/authors/avatar.jpg")'
                                                                             alt="avatar image" height="60" width="60">
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-9 col-lg-8 col-8">
                                                                <div class="details">
                                                                    <div class="name">
                                                                        <a href="#">Mila Kunis</a>
                                                                    </div>
                                                                    <div class="time online">
                                                                        <i class="icon-check icons"></i> Online
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-6 col-sm-6 bord">
                                                        <div class="row">
                                                            <div class="col-md-3 col-lg-4 col-4">
                                                                <div class="img">
                                                                    <a href="#">
                                                                        <img class="media-object img-thumbnail img-fluid"
                                                                             :src='require("../../img/authors/avatar4.jpg")'
                                                                             alt="avatar image" height="60" width="60">
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-9 col-lg-8 col-8">
                                                                <div class="details">
                                                                    <div class="name">
                                                                        <a href="#">Ryan Gossling</a>
                                                                    </div>
                                                                    <div class="time online">
                                                                        <i class="icon-check icons"></i> Online
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-6 col-sm-6 bord">
                                                        <div class="row">
                                                            <div class="col-md-3 col-lg-4 col-4">
                                                                <div class="img">
                                                                    <a href="#">
                                                                        <img class="d-flex mr-3 img-thumbnail img-fluid"
                                                                             :src='require("../../img/authors/avatar3.jpg")'
                                                                             alt="avatar image" height="60" width="60">
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-9 col-lg-8 col-8">
                                                                <div class="details">
                                                                    <div class="name">
                                                                        <a href="#">Robert Downey Jr.</a>
                                                                    </div>
                                                                    <div class="time">
                                                                        <i class="icon-clock icons"></i> Last online:
                                                                        Tuesday
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-6 col-sm-6 bord">
                                                        <div class="row">
                                                            <div class="col-md-3 col-lg-4 col-4">
                                                                <div class="img">
                                                                    <a href="#">
                                                                        <img class="d-flex mr-3 img-thumbnail img-fluid"
                                                                             :src='require("../../img/authors/avatar8.jpg")'
                                                                             alt="avatar image" height="60" width="60">
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-9 col-lg-8 col-8">
                                                                <div class="details">
                                                                    <div class="name">
                                                                        <a href="#">Emma Watson</a>
                                                                    </div>
                                                                    <div class="time">
                                                                        <i class="icon-clock icons"></i> Last online: 1
                                                                        week ago
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-6 col-sm-6 bord">
                                                        <div class="row">
                                                            <div class="col-md-3 col-lg-4 col-4">
                                                                <div class="img">
                                                                    <a href="#">
                                                                        <img class="d-flex mr-3 img-thumbnail img-fluid"
                                                                             :src='require("../../img/authors/avatar7.jpg")'
                                                                             alt="avatar image" height="60" width="60">
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-9 col-lg-8 col-8">
                                                                <div class="details">
                                                                    <div class="name">
                                                                        <a href="#">George Clooney</a>
                                                                    </div>
                                                                    <div class="time">
                                                                        <i class="icon-clock icons"></i> Last online: 1
                                                                        month ago
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-6 col-sm-6 bord">
                                                        <div class="row">
                                                            <div class="col-md-3 col-lg-4 col-4">
                                                                <div class="img">
                                                                    <a href="#">
                                                                        <img class="d-flex mr-3 img-thumbnail img-fluid"
                                                                             :src='require("../../img/authors/avatar3.jpg")'
                                                                             alt="avatar image" height="60" width="60">
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-9 col-lg-8 col-8">
                                                                <div class="details">
                                                                    <div class="name">
                                                                        <a href="#">Mila Kunis</a>
                                                                    </div>
                                                                    <div class="time online">
                                                                        <i class="icon-check icons"></i> Online
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-6 col-sm-6 bord">
                                                        <div class="row">
                                                            <div class="col-md-3 col-lg-4 col-4">
                                                                <div class="img">
                                                                    <a href="#">
                                                                        <img class="d-flex mr-3 img-thumbnail img-fluid"
                                                                             :src='require("../../img/authors/avatar.jpg")'
                                                                             alt="avatar image" height="60" width="60">
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-9 col-lg-8 col-8">
                                                                <div class="details">
                                                                    <div class="name">
                                                                        <a href="#">Ryan Gossling</a>
                                                                    </div>
                                                                    <div class="time online">
                                                                        <i class="icon-check icons"></i> Online
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </b-tab>
                                       
                                        </b-tabs>
                                        <!-- Tab panes -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import animate_css from "animate.css/animate.min.css"
export default {
    name: "user_profile",
    mounted: function() {

    },
    destroyed: function() {

    }
}
</script>
<style src="simple-line-icons/css/simple-line-icons.css"></style>
<style src="../../css/custom_css/user_profile.css" scoped></style>
