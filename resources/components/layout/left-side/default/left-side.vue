 <template>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="left-aside sidebar-offcanvas">
        <!-- sidebar: style can be found in sidebar -->
        <section class="sidebar">
            <div id="menu" role="navigation">
                <div class="nav_profile">
                    <profile></profile>
                </div>
                <vmenu>
                    <vmenu-item link="/" icon="fa fa-fw fa-desktop">
                        Inicio
                    </vmenu-item>
                    <vmenu-item link="/Gantt" icon="fa fa-fw fa-tasks">
                        Proyectos
                    </vmenu-item>
                    <vmenu-item link="/CrearProyecto" icon="fa fa-fw fa-tasks">
                        Crear Nuevo Proyecto
                    </vmenu-item>
                    <vmenu-item link="/Reportes" icon="fa fa-fw fa-tasks">
                        Reportes
                    </vmenu-item>
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
                    <vsub-menu title="Proyectos" icon="fa fa-fw fa-folder" class="menufold-bottom">
                        <vmenu-item link="/Organizaciones" icon="fa fa-fw fa-globe">
                            Organizaciones
                        </vmenu-item>
                        <vmenu-item link="/Proyectos" icon="fa fa-fw fa-folder">
                            Proyectos
                        </vmenu-item>
                        <vmenu-item link="/GanttProyecto" icon="fa fa-fw fa-tasks">
                            Progreso de proyectos
                        </vmenu-item>
                    </vsub-menu>
                    <vsub-menu title="Actividades" icon="fa fa-fw fa-code-fork" class="menufold-bottom">
                        <vmenu-item link="/Actividades" icon="fa fa-fw fa-code-fork">
                            Actividades
                        </vmenu-item>
                        
                        <vmenu-item link="/Tarea" icon="fa fa-fw fa-tasks">
                            Tareas
                        </vmenu-item>
                        <vmenu-item link="/Subir" icon="fa fa-fw fa-location-arrow">
                            Subir Reporte
                        </vmenu-item>
                    </vsub-menu>
                    <vsub-menu title="Ajustes" icon="fa fa-fw fa-gear" class="menufold-bottom">
                        <vmenu-item link="/TipoActividad" icon="fa fa-fw fa-list">
                            Tipo Actividades
                        </vmenu-item>
                        <vmenu-item link="/Estadistica" icon="fa fa-fw fa-paste">
                            Estadisticas
                        </vmenu-item>
                    </vsub-menu>
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
