const routes = [{
    path: '/',
    component: resolve => require(['./fixed_header.vue'], resolve),
    meta:{
        auth: true
    },
    children: [
        {
            path: '',
            component: resolve => require(['./components/pages/src/Gantt.vue'], resolve),
            meta: {
                title: 'Progreso',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Inicio',
                    href: '#/',
                }, {
                    html: 'Progreso',
                    href: '#/Gantt'
                }]
            }
        },
        {
            path: 'Usuarios',
            component: resolve => require(['./components/pages/src/usuario.vue'], resolve),
            meta: {
                title: 'Usuarios',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Inicio',
                    href: '#/',
                }, {
                    html: 'Usuarios',
                    href: '#',
                }, {
                    html: 'Usuarios',
                    href: '#/Usuarios'
                }]
            }
        },
        {
            path: 'CrearProyecto',
            component: resolve => require(['./components/pages/src/CrearProyecto.vue'], resolve),
            meta: {
                title: 'Crear Nuevo Proyecto',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Inicio',
                    href: '#/',
                }, {
                    html: 'Proyectos',
                    href: '#',
                }, {
                    html: 'CrearProyecto',
                    href: '#/CrearProyecto'
                }]
            }
        },
        {
            path: 'Organizaciones',
            component: resolve => require(['./components/pages/src/organizacion.vue'], resolve),
            meta: {
                title: 'Organizaciones',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Inicio',
                    href: '#/',
                }, {
                    html: 'Proyectos',
                    href: '#',
                }, {
                    html: 'Organizaciones',
                    href: '#/Organizaciones'
                }]
            }
        },
        {
            path: '/Reportes',
            component: resolve => require(['./components/pages/src/reportes.vue'], resolve),
            meta: {
                title: '',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Inicio',
                    href: '#/',
                }, {
                    html: 'Reportes',
                    href: '#/Reportes'
                }]
            }
        },
        {
            path: 'Proyectos',
            component: resolve => require(['./components/pages/src/proyecto.vue'], resolve),
            meta: {
                title: 'Editar proyectos',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Inicio',
                    href: '#/',
                }, {
                    html: 'Administrar proyectos',
                    href: '#',
                }, {
                    html: 'Proyectos',
                    href: '#/Proyectos'
                }]
            }
        },
        {
            path: 'Actividades',
            component: resolve => require(['./components/pages/src/actividad.vue'], resolve),
            meta: {
                title: 'Actividades',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Inicio',
                    href: '#/',
                }, {
                    html: 'Actividades',
                    href: '#',
                }, {
                    html: 'Actividades',
                    href: '#/Actividades'
                }]
            }
        },
        {
            path: 'TipoActividad',
            component: resolve => require(['./components/pages/src/tipoactividad.vue'], resolve),
            meta: {
                title: 'Tipo de Actividades',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Inicio',
                    href: '#/',
                }, {
                    html: 'Actividades',
                    href: '#',
                }, {
                    html: 'Tipo Actividades',
                    href: '#/TipoActividad'
                }]
            }
        },
        {
            path: 'Estadistica',
            component: resolve => require(['./components/pages/src/estadistica.vue'], resolve),
            meta: {
                title: 'Estadisticas',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Inicio',
                    href: '#/',
                }, {
                    html: 'Actividades',
                    href: '#',
                }, {
                    html: 'Estadisticas',
                    href: '#/Estadistica'
                }]
            }
        },
        {
            path: 'Tarea',
            component: resolve => require(['./components/pages/src/tarea.vue'], resolve),
            meta: {
                title: 'Tareas',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Inicio',
                    href: '#/',
                }, {
                    html: 'Actividades',
                    href: '#',
                }, {
                    html: 'Tareas',
                    href: '#/Tarea'
                }]
            }
        },
        {
            path: 'Subir',
            component: resolve => require(['./components/pages/src/subir.vue'], resolve),
            meta: {
                title: 'Subir',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Inicio',
                    href: '#/',
                }, {
                    html: 'Actividades',
                    href: '#',
                }, {
                    html: 'Tarea',
                    href: '#/Subir'
                }]
            }
        },
        {
            path: '/Gantt',
            component: resolve => require(['./components/pages/src/Gantt.vue'], resolve),
            meta: {
                title: 'Progreso',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Inicio',
                    href: '#/',
                }, {
                    html: 'Progreso',
                    href: '#/Gantt'
                }]
            }
        },
        {
            path: '/GanttProyecto/:id',
            component: resolve => require(['./components/pages/src/GanttProyecto.vue'], resolve),
            meta: {
                title: `Gantt`,
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Inicio',
                    href: '#/',
                },{
                    html: 'Proyecto',
                    href: '#/GanttProyecto'
                }]
            }
        }
    ]
}, {
    path: '/500',
    component: resolve => require(['./components/pages/500.vue'], resolve),
    meta: {
        title: '500',
        breadcrumb: ``,
        auth: false
    }
}, {
    path: '/login',
    component: resolve => require(['./components/pages/login.vue'], resolve),
    meta: {
        title: 'Login',
        breadcrumb: ``,
        meta:{
            auth: false
        }
    }
}, {
    path: '/register',
    component: resolve => require(['./components/pages/register.vue'], resolve),
    meta: {
        title: 'Register',
        breadcrumb: ``,
        auth: false
    }
}, {
    path: '/lockscreen',
    component: resolve => require(['./components/pages/lockscreen.vue'], resolve),
    meta: {
        title: 'Lockscreen',
        breadcrumb: ``,
        auth: false
    }
}, {
    path: '/forgot_password',
    component: resolve => require(['./components/pages/forgot_password.vue'], resolve),
    meta: {
        title: 'Forgot Password',
        breadcrumb: ``,
        auth: false
    }
}, {
    path: '/reset_password',
    component: resolve => require(['./components/pages/reset_pass.vue'], resolve),
    meta: {
        title: 'Reset Password',
        breadcrumb: ``,
        auth: false
    }
}, {
    path: '*',
    component: resolve => require(['./components/pages/404.vue'], resolve),
    meta: {
        title: '404',
        breadcrumb: ``,
        auth: false
    }
},
]

export default routes
