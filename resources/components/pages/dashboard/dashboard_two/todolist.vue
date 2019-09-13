<template>
    <div>
              <div class="card">
            <div class="card-header">
                <div class="card-title">Todo List

                </div>
            </div>
        <div class="col-12">
            <div class="row">
                <form @submit.prevent="submitTodo" class="col s6 offset-s3">
                    <div class="input-field">
                        <i class="material-icons prefix">list</i>
                        <textarea v-model="newTodo" id="icon_prefix2" class="materialize-textarea"></textarea>
                        <label for="icon_prefix2">What to do?</label>
                    </div>
                    <button class="btn waves-effect col s12">Add</button>
                </form>
            </div>
            <div id="to-list">
            <div class="row">
                <ul class="collection col s6 offset-s3">
                    <li data-v-767e2d2a="" class="collection-item"><p data-v-767e2d2a=""><label data-v-767e2d2a=""><input data-v-767e2d2a="" type="checkbox"> <span data-v-767e2d2a="">Create Menu</span> <span data-v-767e2d2a=""><a data-v-767e2d2a=""><i data-v-767e2d2a="" class="material-icons right teal-text">delete</i></a></span></label></p></li>
                    <li class="collection-item" v-for="todo in todos">
                        <p>
                            <label>
                                <input type="checkbox" :checked=todo.done @change="todo.done = !todo.done" />
                                <span>{{todo.title}}</span>
                                <span><a @click.prevent="deleteTodo(todo)"><i class="material-icons right teal-text">delete</i></a></span>
                            </label>
                        </p>
                    </li>
                </ul>
            </div>


        </div>
        </div>
        </div>
    </div>

</template>

<script>
    import Fullscreen from "vue-fullscreen/src/component.vue"
    import Materialiconjs from 'materialize-css/dist/js/materialize.min.js';


    export default {
        name: 'todolist',
        components: {Fullscreen},
        data() {

            return {
                cardhide: true,
                card: "closecard",
                fullscreen: false,
                carddropdown:"",
                text:"",
                cardstatus:false,
                cardstyle:{
                    opacity:0.5
                },
                cardstyles:"",
                todos: [],
                newTodo: ''


            }

        },
        watch: {
            todos: {
                handler() {
                    localStorage.todos = JSON.stringify(this.todos)
                },
                deep: true
            }
        },
        methods: {
            menuOption:function()
            {


                setTimeout( () => {
                    this.el=document.getElementById("dropdown-card").querySelectorAll(".dropdown .dropdown-menu.show");
                    this.text=document.getElementById("chartdiv").querySelectorAll(".amcharts-chart-div a");

                    this.el[0].style.left="auto";
                    this.el[0].style.right="0";
                    this.text[0].style.visibility="hidden";


                }, 10);
            },

            toggle () {
                this.$refs['fullscreen'].toggle()
            },
            fullscreenChange (fullscreen) {
                this.fullscreen = fullscreen
            },

            notificationClose: function () {

                this.cardhide = !this.cardhide;
            },


            mounted: function () {
                if(localStorage.todos){
                    this.todos = JSON.parse(localStorage.todos)
                }
            },

            destroyed: function () {

            },

            myReload:function ()
            {
                this.cardstatus=true,
                    this.cardstyles=this.cardstyle,

                    setTimeout( () => {
                        this.cardstatus=false
                        this.cardstyles={
                            opacity:1
                        }

                    },2000)
            },
            submitTodo() {
                this.todos.push({
                    title: this.newTodo,
                    done: false
                })
                this.newTodo = ''
            },
            deleteTodo(todo) {
                const todoIndex = this.todos.indexOf(todo)
                this.todos.splice(todoIndex, 1);
            }
        },

        created () {

        },
        mounted:function () {

            $(".btn.waves-effect").on("click",function()
            {

                setTimeout(function()
                {
                    $(".hiddendiv").remove();
                },500)
            });

        },
        beforeMount(){
        },

    }

</script>
<style scoped>
    .header-noti-icon:hover i,  .header-noti-icon i
    {
        padding: 5px 10px 4px 11px;
        border-radius:50px;
        position: relative;
        left: 9px;
        top: -8px;
    }
    .header-noti-icon i
    {
        background:none;
    }
    .header-noti-icon:hover i
    {
        background-color:#eee;
    }
    #todolist .btn-group.b-dropdown.dropdown i
    {
        color:#212529;
    }
    #todolist .row .col.offset-s3
    {
        margin-left: 0;
    }
    #todolist .card .card-title
    {
        font-size: 16px;
    }
    #todolist .card .collection .collection-item label
    {
        width: 100%;
    }
    #todolist .input-field
    {
        margin-top:4rem;
    }
    #to-list
    {
        height: 150px;
        overflow-y: scroll;
    }
    #todolist .btn.waves-effect:hover,#todolist .btn.waves-effect
    {
        background-color:#66cc99;
    }
    #todolist .teal-text, #todolist .prefix.active,#todolist label.active
    {
        color:#66cc99 !important;
    }
    #todolist [type="checkbox"]:checked+span[data-v-767e2d2a]:not(.lever):before
    {
        border-right: 2px solid #66cc99;
        border-bottom: 2px solid #66cc99;
    }
    #todolist .card
    {
        height:389px;
    }
    .collection .collection-item p
    {
        margin-bottom:0;
        position: relative;
        top: 4px;
    }
    .collection .collection-item p span
    {
        color:#555;
    }
    .hiddendiv
    {
        display:none;
    }
</style>
<style src="materialize-css/dist/css/materialize.min.css" scoped></style>


