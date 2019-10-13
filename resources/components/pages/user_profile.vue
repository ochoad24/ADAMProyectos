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
                               
                                        <img :src='require("../../img/authors/man.png")' alt="img" class="rounded-circle img-bor"/>
                                    </div>
                                </div>
                                <div class="profile_user">
                                   <h1 class="user_name_max">
                                {{ this.$store.state.user.name }}
                            </h1>
                              
                                
                                </div>
                                &nbsp;&nbsp;
                               
                                <br/>
                             
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <b-tabs ref="tabs" class="profile-tabs">
                                            <b-tab title="Perfil" active>
                                                <div id="tab-activity" class="tab-pane animated fadeInRight  active">
                                                    <div class="table-responsive">
                                                        <br>
                                                           <v-text-field 
                                            label="Nombre" maxlength="50"  required  :counter="50" ></v-text-field>
                                       <v-text-field 
                                            label="Apellido" maxlength="50"  required  :counter="50"></v-text-field>
                                                  <v-text-field 
                                            label="Usuario" maxlength="50"  required  :counter="50"></v-text-field>
                                               <v-btn
                   color="#668c2d" class="ma-2" dark
                   
                    >
                        Guardar
                    </v-btn>
                                                    </div>
                                                </div>
                                            </b-tab>
                                            <b-tab title="Contraseña">
                                                <div class="row m-t-l-10">
                                                    <div class="col-md-6 col-lg-6 col-sm-6 bord">
                                                   
                                                                             <v-text-field 
                                            label="Contraseña actual" maxlength="50"  required  :counter="50" ></v-text-field>
                                          
                                       <v-text-field 
                                      
                                            label="Nueva Contraseña" maxlength="50"  required  :counter="50"></v-text-field>
                                                  <v-text-field 
                                            label="Confirmar Contraseña" maxlength="50"  required  :counter="50"></v-text-field>
                                                                                    <v-btn
                   color="#668c2d" class="ma-2" dark
                   
                    >
                        Guardar
                    </v-btn>
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
