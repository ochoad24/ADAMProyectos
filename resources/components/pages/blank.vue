<template>
    <div>
        <div class="demo-content nested">
            <!--<v-title>Nested</v-title>-->
            <div class="v-row">
                <div class="row">
                    <div v-for="(list, zone) in dropzones" class="col-4">

                        <div class="card">
                            <div class="card-header">
                                <h3>Dropzone {{zone}}</h3>
                            </div>
                            <div class="card-body">
                                <vddl-list class="panel__body--list "
                                           :list="list"
                                           :inserted="inserted"
                                           effect-allowed="move"
                                           :disable-if="disable"
                                           :drop="handleDrop"
                                           :external-sources="true">
                                    <list v-for="(item, index) in list"
                                          :key="item.id"
                                          :item="item"
                                          :list="list"
                                          :index="index"
                                          :moved="handleMoved"
                                          :selected="handleSelected"
                                          :selected-item="selectedItem"
                                          :disable="disable" class="p-1 border border-f5 mt-2">
                                    </list>
                                </vddl-list>
                            </div>
                        </div>

                    </div>
                    <div class="col-4">
                        <div class="new-elements ">
                            <div class="card panel--info">
                                <div class="card-header">
                                    <h3>New Elements</h3>
                                </div>
                                <div class="card-body">
                                    <vddl-draggable class="button btn btn-success btn-block"
                                                    :draggable="itemMock"
                                                    :copied="copied"
                                                    effect-allowed="copy">
                                        Add Item
                                    </vddl-draggable>
                                    <br>
                                    <vddl-draggable class="button btn btn-primary btn-block mt-2"
                                                    :draggable="containerMock"
                                                    :copied="copied"
                                                    effect-allowed="copy">
                                        Add Container
                                    </vddl-draggable>
                                </div>
                            </div>
                        </div>
                        <div class="new-elements disable-element ">
                            <div class="card panel--info">
                                <div class="card-header">
                                    <h3>Toggle Disable</h3>
                                </div>
                                <div class="card-body">
                                    <div class="button btn btn-danger" @click="toggleDisable">
                                        Disable: {{disable}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="selected-item" v-if="selectedItem">
                            <div class="card panel--info">
                                <div class="card-header">
                                    <h3>Selected</h3>
                                </div>
                                <div class="card-body">
                                    {{selectedItem.type}} {{selectedItem.id}}
                                </div>
                            </div>
                        </div>
                        <div class="ashcan">
                            <div class="card panel--info">
                                <div class="card-header">
                                    <h3>Ashcan</h3>
                                </div>
                                <vddl-list :list="[]" class="card-body">
                                    <span class="fa fa-trash fa-3x ashcan-logo"></span>
                                </vddl-list>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import Vddl from 'vddl';
    Vue.use(Vddl);
    import list from '../plugins/nestable/nested-list.vue';
    export default {
        name:'blank',
        data(){
            return{
                selectedItem: null,
                disable: false,
                itemMock: { type: "new element", id: 1 },
                containerMock: {
                    "type": "container",
                    "id": 4,
                    "columns": []
                },
                dropzones: {
                    "A": [
                        {
                            "type": "container",
                            "id": 1,
                            "columns": [
                                {
                                    "type": "item",
                                    "id": "1"
                                },
                                {
                                    "type": "item",
                                    "id": "2"
                                },
                                {
                                    "type": "item",
                                    "id": "3"
                                }
                            ]
                        },
                        {
                            "type": "item",
                            "id": "4"
                        },
                        {
                            "type": "item",
                            "id": "5"
                        },
                        {
                            "type": "item",
                            "id": "6"
                        }
                    ],
                    "B": [
                        {
                            "type": "item",
                            "id": 7
                        },
                        {
                            "type": "item",
                            "id": "8"
                        },
                        {
                            "type": "container",
                            "id": "2",
                            "columns": [
                                {
                                    "type": "item",
                                    "id": "9"
                                },
                                {
                                    "type": "item",
                                    "id": "10"
                                },
                                {
                                    "type": "container",
                                    "id": "3",
                                    "columns": [
                                        {
                                            "type": "item",
                                            "id": "13"
                                        },
                                        {
                                            "type": "item",
                                            "id": "14"
                                        }
                                    ]
                                },
                                {
                                    "type": "item",
                                    "id": "15"
                                }
                            ]
                        }
                    ]
                }
            }
        },
        components:{
            list
        },
        mounted:function(){


        },
        methods: {
            copied(item){
                item.id++;
            },
            inserted(data){
                console.log(data);
            },
            toggleDisable() {
                this.disable = !this.disable;
            },
            handleSelected(item) {
                this.selectedItem = item;
            },
            handleDrop(data) {
                console.log(':v-list: drop');
                console.log(data);
                const { index, list, item } = data;
                // change the id
                item.id = new Date().getTime();
                list.splice(index, 0, item);
            },
            handleMoved(item) {
                console.log(':v-draggable: moved');
                console.log(item);
                const { index, list } = item;
                list.splice(index, 1);
            },
        }
    }
</script>
<style scoped>
    .search{
        border: 1px solid #bdb3b3;
    }
    .contact-profile{
        width:50px;
        height: 50px;
    }
    .box-shadow{
        box-shadow: 0px 0px 1px 1px #cfcfcf;
    }
    .contact-pic{
        width: 50px;
        height: 50px;
    }
    .table td{
        padding: 16px;
        vertical-align: middle;
    }
    .contacts-box .custom-control-inline{
        margin-right: 0;
    }
    .custom-control-label::before{
        width: 100px;
        height: 100px;
    }
    .contact-page{
        font-size: 14px;
    }
    .options a:hover,.options2 a:hover{
        background-color: #eee;
    }
    .bg-title{
        background-color: #f5f5f5;
    }


</style>