<template>
    <div>
        <center> <h1 style="color:#668c2d">proyecto   {{ this.project[0].Titulo }}</h1></center>
        
        <v-layout row>
           
            <v-flex>
                <v-card v-if="!gantt">
                    <gantt-elastic
                    :options="options"
                    :tasks="tasks"
                    @options-changed="optionsUpdate"
                    @dynamic-style-changed="styleUpdate"
                    >
                        <gantt-header slot="header"></gantt-header>
                    </gantt-elastic>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
    import Multiselect from 'vue-multiselect';
    import axios from 'axios';
    import GanttElastic from "gantt-elastic";
    import GanttHeader from "gantt-elastic-header";
    import dayjs from "dayjs";
    import {mapGetters} from 'vuex';
    //Variables para el componente vue del diagrama de gantt
    function getDate(hours) {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const currentDay = currentDate.getDate();
        const timeStamp = new Date(
            currentYear,
            currentMonth,
            currentDay,
            0,
            0,
            0
        ).getTime();
        return new Date(timeStamp + hours * 60 * 60 * 1000).getTime();
    }
    let tasks = [
        {
        
        //collapsed: true,
        },
    ];
    let options = {
        taskMapping: {
            progress: "percent"
        },
        maxRows: 100,
        maxHeight: 1500,
        title: {
            label: "Your project title as html (link or whatever...)",
            html: false
        },
        row: {
            height: 34
        },
        calendar: {
            hour: {
            display: false
            }
        },
        chart: {
            progress: {
            bar: true
            },
            expander: {
            display: true
            }
        },
        taskList: {
            expander: {
            straight: false
            },
            columns: [
            {
                id: 2,
                label: "Título",
                value: "label",
                width: 200,
                expander: true,
                html: true,
            },
            {
                id: 3,
                label: "Descripción",
                value: "user",
                width: 250,
                html: true
            },
            {
                id: 3,
                label: "Fecha de inicio",
                value: task => dayjs(task.start).format('DD-MM-YYYY'),
                width: 150
            },
            {
                id: 5,
                label: "% Completado",
                value: "progress",
                width: 130,
                style: {
                "task-list-header-label": {
                    "text-align": "center",
                    width: "100%"
                },
                "task-list-item-value-container": {
                    "text-align": "center",
                    width: "100%"
                }
                }
            }
            ]
        },
        locale: {
            'name': "es",
            'Now': "Ahora",
            "X-Scale": "Zoom-X",
            "Y-Scale": "Zoom-Y",
            "Task list width": "Lista",
            "Before/After": "Expandir",
            "Display task list": "Lista",
            "weekdays": 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_'),
            'months': 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
            'monthsShort': 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dec'.split('_'),
            'relativeTime': {
            'future': 'en %s',
            'past': 'hay %s',
            's': 'algunos segundos',
            'm': 'un minuto',
            'mm': '%d minutos',
            'h': 'una hora',
            'hh': '%d horas',
            'd': 'un día',
            'dd': '%d días',
            'M': 'un mes',
            'MM': '%d meses',
            'y': 'un año',
            'yy': '%d años'
            },
        }
    };
    //Fin de las variables del diagrama de gantt


    //Componente de VUE
    export default {
        name: "GanttProyecto",
        components: {
            Multiselect,
            GanttElastic,
            GanttHeader,
        },
        data: () => ({
            proyecto: {
                id:0,
                nombre:'',
            },
            project: [],
            actividades: [],
            tareas: [],
            gantt: true,
            titulo: '',
            lastId: 500,
            tasks,
            options,
            dynamicStyle: {},
            id: -1,
        }),

        computed: {
            formTitle() {
                return this.editedIndex === -1 ? 'Nueva Actividad' : 'Editar Actividad'
            },
            ...mapGetters(["seleccion"])
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
            seleccion:{
                deep:true,
                handler(val){
                    this.proyecto=val;
                    this.initialize();
                }
            }
        },

        // created() {
        //     this.initialize()
        // },
        mounted() {
            this.proyecto=this.$store.state.proyecto;
            this.id = this.$route.params.id;
            console.log(this.proyecto);
            console.log("PARAM" + ' ' + this.$route.params.id);
            this.initialize();
        },
        methods: {
            initialize() {
                if(this.id === -1)
                    this.gantt = false;
                else {
                    console.log('Initialize');
                    let me = this;
                    tasks = [ {}, ];
                    axios.get(`/proyecto/selectproject?id=${this.id}`)
                    .then(function (response) {
                        me.project = response.data;
                        me.cargarActividades(me.id);
                    })
                    .catch(function (error) {
                        console.log("Error " + error.response);
                    });
                }
            },
            cargarActividades(id) {
                let me = this;
                axios.get(`/proyecto/selectactividad?id=${id}`)
                .then(function (response) {
                    me.actividades = response.data;
                    console.log(response.data);
                    me.cargarTareas(me.id);
                })
                .catch(function (error) {
                    console.log(error.response);
                });
            },
            cargarTareas(id) {
                let me = this;
                axios.get(`/proyecto/selecttareas?id=${id}`)
                .then(function (response) {
                    me.tareas = response.data;
                    me.cargarDatos();
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                });
            },
            cargarDatos() {
                console.log("Cargar datos");
                let array1 = this.project;
                let array2 = this.actividades;
                let array3 = this.tareas;
                console.log(array1);
                console.log(array2);
                let me = this;
                array1.forEach((item) => {
                    let task = new Object();
                    let per = 0;
                    if(item.actividadesCompletadas === 0) {
                        per = 0;
                    } else {
                        per = ((item.actividadesCompletadas * 100) / item.actividades); 
                    }
                    task.id = 100;
                    task.label = item.Titulo;
                    me.titulo = item.Titulo;
                    task.user = item.Descripcion;
                    task.start = Date.parse(item.FechaInicio);
                    task.end = Date.parse(item.FechaFin);
                    task.percent = per;
                    task.type = "project";
                    me.tasks.splice(0, 1, task);
                });
                this.gantt = false;
                array2.forEach((item) => {
                    let task = new Object();
                    let per = 0;
                    if(item.tareasCompletadas === 0) {
                        per = 0;
                    } else {
                        per = ((item.tareasCompletadas * 100) / item.tareas);
                    }
                    task.parentId = 100;
                    task.id = item.id;
                    task.label = item.codigo_actividad + ' - ' + item.actividad;
                    task.user = item.descripcion;
                    task.start = Date.parse(item.fechaInicio);
                    task.end = Date.parse(item.fechaFinal);
                    task.percent = per;
                    task.type = "task";
                    task.dependentOn = [100];
                    task.style = {
                        base: {
                            fill: '#1EBC61',
                            stroke: '#0EAC51'
                        }
                    };
                    me.tasks.push(task);
                });
                array3.forEach((item) => {
                    let task = new Object();
                    let per = 0;
                    if(item.estado === 0) {
                        per = 0;
                    } else {
                        per = 100;
                    }
                    task.id = me.lastId++;
                    task.label = item.tarea;
                    task.user = `<a style="color:#0077c0;">Tarea</a>`;
                    task.start = Date.parse(item.fechaInicio);
                    task.end = Date.parse(item.fechaFinal);
                    task.percent = per;
                    task.type = "milestone";
                    task.dependentOn = [item.idActividad];
                    task.parentId = item.idActividad;
                    task.style = {
                        base: {
                            fill: '#185BC2',
                            stroke: '#5394F8'
                        }
                    };
                    me.tasks.push(task);
                });
            },
            tasksUpdate(tasks) {
                this.tasks = tasks;
            },
            optionsUpdate(options) {
                this.options = options;
            },
            styleUpdate(style) {
                this.dynamicStyle = style;
            },
        }
    }
</script>