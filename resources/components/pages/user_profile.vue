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
                                            label="Nombre" maxlength="50"  required  :counter="50" v-model="this.$store.state.user.name"></v-text-field>
                                       <v-text-field 
                                            label="Apellido" maxlength="50"  required  :counter="50" ></v-text-field>
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
     data: () => ({
          search: '',
            dialog: false,
            mostrar: false,
            error: 0,
            switch1: false,
            errorMsj: [],
            listaRoles: [],
 users: [],
            editedIndex: -1,
            editedItem: {
                id: 0,
                Nombre: '',
                Apellido: '',
                Usuario: '',
                pass: '',
                confirmPass: '',
                rol: 0,
            },
            defaultItem: {
                id: 0,
                Nombre: '',
                  Apellido: '',
                Usuario: '',
                pass: '',
                confirmPass: '',
                rol: 0,
            },
              rules: {
              required: value => !!value || 'Campo requerido.',
              counter: value => value.length <= 20 || 'Max 20 caracteres',
              email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Correo electrónico invalido.'
              }
            },
     }),
     save() {
                let me = this;
                if (this.validate()) {
                        return;
                    }
                if (this.editedIndex > -1) {
                    axios({
                        method: 'put',
                        url: '/user_profile/actualizar',
                        data: {
                            id: this.editedItem.id,
                            Nombre: this.editedItem.name,
                            Apellido: this.editedItem.Apellido,
                            Usuario: this.editedItem.Usuario,
                            Pass: this.editedItem.pass,
                            confirmPass: this.editedItem.confirmPass,
            
                        }
                    }).then(function (response) {
                        swal.fire({
                            position: 'top-end',
                            type: 'success',
                            title: response.data,
                            showConfirmButton: false,
                            timer: 1500});
                        me.initialize();
                        me.close();
                    }).catch(function (error) {
                        swal.fire({
                            position: 'top-end',
                            type: 'error',
                            title: error.response.data.error,
                            showConfirmButton: true});
                        me.initialize();
                        me.close();
                    });                    
                } else {
                    axios({
                        method: 'post',
                        url: '/user_profile/registrar',
                        data: {
                            name: me.editedItem.name,
                            email: me.editedItem.email,
                            pass: me.editedItem.pass,
                            rol: me.editedItem.rol.id
                        }
                    }).then(function (response) {
                        swal.fire({
                            position: 'top-end',
                            type: 'success',
                            title: response.data,
                            showConfirmButton: false,
                            timer: 1500});
                        me.initialize();
                        me.close();
                    }).catch(function (error) {
                        swal.fire({
                            position: 'top-end',
                            type: 'error',
                            title: error.response.data.error,
                            showConfirmButton: true});
                        me.initialize();
                        me.close();
                    }); 
                }
            },
}
</script>
<style src="simple-line-icons/css/simple-line-icons.css"></style>
<style src="../../css/custom_css/user_profile.css" scoped></style>
