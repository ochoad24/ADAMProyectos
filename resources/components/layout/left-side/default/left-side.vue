 <style>
 .hrt {


  width: 80%;
}

 </style>
 <template>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="left-aside sidebar-offcanvas">
        <!-- sidebar: style can be found in sidebar -->
        <section class="sidebar">
            <div id="menu" role="navigation">
                <div class="nav_profile">
                 
                    <br>
                    <center> <img src="/../images/adam.jpg" width="100" height="100"></center>
                    <br>
                    
                       
                       <center> <h4 style="color: #668C2D"> proyecto {{ this.$store.state.proyecto.nombre }}</h4></center>
                   <center><hr class="hrt"></center>
                   <br>
        
                </div>
               
                <vmenu>
           
                    <vmenu-item link="/Gantt" icon="fa fa-fw fa-tasks">
                        Progreso de proyectos
                    </vmenu-item>
                    <hr>
                    <vmenu-item link="/CrearProyecto" icon="fa fa-fw fa-plus-square">
                        Crear Nuevo Proyecto
                    </vmenu-item>
                    <hr>
                   
                    <vsub-menu title="Administrar proyectos" icon="fa fa-fw fa-stack-overflow" class="menufold-bottom">
                        <vmenu-item link="/Proyectos" icon="fa fa-fw fa-sitemap">
                            Editar proyectos
                        </vmenu-item>
                        <vmenu-item link="/Actividades" icon="fa fa-fw fa-code-fork">
                            Editar actividades
                        </vmenu-item>
                        <vmenu-item link="/Tarea" icon="fa fa-fw fa-spinner">
                            Editar tareas
                        </vmenu-item>
                        <vmenu-item link="/Organizaciones" icon="fa fa-fw fa-globe">
                            Editar organizaciones
                        </vmenu-item>
                    </vsub-menu>
                    <hr>
                    <vsub-menu title="Usuarios" icon="fa fa-fw fa-user" class="menufold-bottom">
                        <vmenu-item link="/Roles" icon="fa fa-fw fa-users">
                            Roles
                        </vmenu-item>
                        <vmenu-item link="/Permisos" icon="fa fa-fw fa-list">
                            Permisos
                        </vmenu-item>
                        <vmenu-item link="/Usuarios" icon="fa fa-fw fa-user">
                            Usuarios
                        </vmenu-item>
                    </vsub-menu>
                    <hr>
                      <vmenu-item link="/Subir" icon="fa fa-fw fa-upload">
                        Subir reporte
                    </vmenu-item>
                    <hr>
                     <vmenu-item link="/Reportes" icon="fa fa-fw fa-file-text-o">
                        Reportes
                    </vmenu-item>
                    <hr>
                  
                    <vsub-menu title="Ajustes" icon="fa fa-fw fa-gear" class="menufold-bottom">
                        <vmenu-item link="/Estadistica" icon="fa fa-fw fa-paste">
                            Estadisticas
                        </vmenu-item>
                    </vsub-menu>
                    <hr>
                </vmenu>
                <!-- / .navigation -->
            </div>
            <!-- menu -->
        </section>
        <!-- /.sidebar -->
    </aside>
</template>
<script>
import {
    vmenu,
    vmenuItem,
    vsubMenu
} from './menu';
import profile from "../left-profile/user_profile.vue"

export default {
    name: "left-side",
    components: {
        vmenu,
        vsubMenu,
        vmenuItem,
        profile
    },    
}
</script>
