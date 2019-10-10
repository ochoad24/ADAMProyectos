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
                    <vsub-menu title="Proyectos" icon="fa fa-fw fa-folder" class="menufold-bottom">
                        <vmenu-item link="/Organizaciones" icon="fa fa-fw fa-globe">
                        Organizaciones
                        </vmenu-item>
                        <vmenu-item link="/Proyectos" icon="fa fa-fw fa-folder">
                        Proyectos
                        </vmenu-item>
                    </vsub-menu>
                    <hr>
                    <vsub-menu title="Actividades" icon="fa fa-fw fa-code-fork" class="menufold-bottom">
                        <vmenu-item link="/Actividades" icon="fa fa-fw fa-code-fork">
                        Actividades
                        </vmenu-item>
                        <vmenu-item link="/Proyectos" icon="fa fa-fw fa-tasks">
                        Tareas
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
    data() {
        return {
        }
    }
}
</script>
