<template>
  <div>
    <v-layout>
        <v-flex>
            <v-card>
                <gantt-elastic
                  :options="options"
                  :tasks="tasks"
                  @options-changed="optionsUpdate"
                  @dynamic-style-changed="styleUpdate"
                  @chart-project-click="click(task)"
                >
                <gantt-header slot="header"></gantt-header>
                </gantt-elastic>
            </v-card>
        </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import GanttElastic from "gantt-elastic";
import GanttHeader from "gantt-elastic-header";
import dayjs from "dayjs";
// just helper to get current dates
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
        width: 130,
        html: true
      },
      {
        id: 3,
        label: "Inicio",
        value: task => dayjs(task.start).format('DD-MM-YYYY'),
        width: 78
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
export default {
  name: "Gantt",
  components: {
    GanttElastic,
    GanttHeader
  },
  data: () => ({
      tasks,
      options,
      dynamicStyle: {},
      lastId: 16,
      proyectos: [],
  }),

  created () {
    this.initialize()
  },

  methods: {
    initialize() {
      let me = this;
      tasks =[ {}, ];
      axios.get('/proyecto')
        .then(function (response) {
            me.proyectos = response.data;
            me.cargarDatos(me.proyectos);
        })
        .catch(function (error) {
            console.log(error.response);
        });
    },

    cargarDatos(proyectos1) {
      let array = proyectos1;
      let me = this;
      for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if(index === 0) {
          let task = new Object();
          let per = 0;
          if(item.actividadesCompletadas === 0) {
              per = 0;
          } else {
              per = ((item.actividadesCompletadas * 100) / item.actividades); 
          }
          task.id = item.IdProyecto;
          task.label = `<a href="/#/GanttProyecto/${item.IdProyecto}" style="color:#0077c0;">${item.Titulo}</a>`;
          task.user = item.Descripcion;
          task.start = Date.parse(item.FechaInicio);
          task.end = Date.parse(item.FechaFin);
          task.percent = per;
          task.type = "project";
          me.tasks.splice(0, 1, task);
        } else {
          let task = new Object();
          let per = 0;
          if(item.actividadesCompletadas === 0) {
              per = 0;
          } else {
              per = ((item.actividadesCompletadas * 100) / item.actividades); 
          }
          task.id = item.IdProyecto;
          task.label =  `<a href="/#/GanttProyecto/${item.IdProyecto}" style="color:#0077c0;">${item.Titulo}</a>`;
          task.user = item.Descripcion;
          task.start = Date.parse(item.FechaInicio);
          task.end = Date.parse(item.FechaFin);
          task.percent = per;
          task.type = "project";
          me.tasks.push(task);
        }
      }
      console.log("LARGO" + this.tasks.length);
      
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
    click(task) {
      console.log(task);
      console.log('click');
    }
  }
};
</script>

<style lang="scss">
    @import '~vuetify/dist/vuetify.min.css';
</style>