<template>
    <div class="container-lockscreen container-fluid lockscreen">
        <div class="row">
            <div class="col-10 col-lg-6 col-sm-8 m-auto">
                <div class="lockscreen-container">
                    <div id="output" :class="{displaynxt : isActive}" class="alert alert-success animated fadeInUp">Welcome back Addison</div>
                    <img :src='require("../../img/logo.png")' alt="Logo">
                    <div class="form-box">
                        <div class="avatar"></div>
                        <form  @submit.prevent="">
                            <div class="form">
                                <div class="row">
                                    <div class="col-12 text-center d-sm-none d-md-none d-lg-none d-xl-none">
                                        <h4 class="user-name">Addision</h4>
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" class="d-none d-sm-block" value="Addison" :class="{hide: isActive==0}" readonly>
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="password" name="user" class="form-control" placeholder="Password"  :class="{hide: isActive==0}" v-model="pass">
                                    </div>
                                </div>
                                <button class="btn login" id="index" type="submit" @click="submit" :class="{ mt80 : isActive==0 }">
                                    <img :src='require("../../img/pages/arrow-right.png")' alt="Go" width="30" height="30"  :class="{hide: isActive==0}">
                                    <span :class="{displaynxt : isActive}">Continue</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "lockscreen",
    data(){
        return{
            pass:'',
            isActive:1
        }
    },
    methods:{
      submit:function(){
          if(this.pass.length != 0){
              this.isActive=0;
          }
      }
    },
    mounted: function() {
    },
    destroyed: function() {

    }
}
</script>
<style src="../../css/lockscreen.css" scoped></style>
<style type="text/css" scoped>
.container-fluid.lockscreen {
    padding-top: 6.5%;
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: radial-gradient(ellipse at center, #5A93AF 0%, #004E74 100%);
    overflow-y: auto;
}
    .displaynxt{
        display: none;
    }
    .hide{
        display: none !important;
    }
    .continue_btn{
        display: none;
        margin-top: 100px;
    }
    .mt80{
        margin-top: 80px !important;
    }
</style>
