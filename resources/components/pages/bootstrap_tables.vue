<template>
    <div>
        <!--First Table-->
        <div class="row">
            <div class="col-lg-12">
                <card title="<i class='ti-menu'></i> Basic Bootstrap Table" class="filterable">
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered" id="table2" data-toggle="table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>User Name</th>
                                <th>
                                    User E-mail
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Connie</td>
                                <td>Reynolds</td>
                                <td>Connie.Reynolds69</td>
                                <td>Connie12@hotmail.com</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Kurt</td>
                                <td>Quitzon</td>
                                <td>Kurt.Quitzon19</td>
                                <td>Kurt.Quitzon@yahoo.com</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Flossie</td>
                                <td>Cole</td>
                                <td>Flossie81</td>
                                <td>Flossie_Cole@gmail.com</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Rahsaan</td>
                                <td>Littel</td>
                                <td>Rahsaan8</td>
                                <td>Rahsaan_Littel@yahoo.com</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Zula</td>
                                <td>Simonis</td>
                                <td>Zula.Simonis</td>
                                <td>Zula_Simonis74@hotmail.com</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Mackenzie</td>
                                <td>O'Hara</td>
                                <td>Mackenzie85</td>
                                <td>Mackenzie.OHara31@hotmail.com</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Marty</td>
                                <td>Yundt</td>
                                <td>Marty_Yundt</td>
                                <td>Marty.Yundt17@gmail.com</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Harmon</td>
                                <td>Herzog</td>
                                <td>Harmon93</td>
                                <td>Harmon_Herzog@gmail.com</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Kameron</td>
                                <td>Morissette</td>
                                <td>Kameron_Morissette79</td>
                                <td>Kameron88@yahoo.com</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Miguel</td>
                                <td>Nikolaus</td>
                                <td>Miguel_Nikolaus</td>
                                <td>Miguel.Nikolaus@gmail.com</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </card>
            </div>
        </div>
        <!-- First Table End -->
        <!-- second table start -->
        <div class="row">
            <div class="col-lg-12">
                <card title="<i class='ti-menu'> Vue Handsontable</i>">
                    <div id="hot-preview">
                        <HotTable :root="root" :settings="hotSettings"></HotTable>
                    </div>
                </card>
            </div>
        </div>
        <!-- second table end -->
    </div>
</template>
<script>
import card from "./card/card.vue";
import HotTable from 'vue-handsontable-official';
// ================

export default {
    name: "bootstrap_tables",
    data: function() {
        return {
            showDate: new Date(),
            root: 'test-hot',
            hotSettings: {
                data: [['1','Shayna', 'Lang','Shayna74','Shayna.Lang@yahoo.com'],
                    ['2','Cleo', 'Abbott','Cleo_Abbott94','Cleo99@yahoo.com'],
                    ['3','Theodora', 'Kihn','Theodora_Kihn','Theodora2@gmail.com'],
                    ['4','Madison', 'Miller','Madison_Miller94','Madison5@gmail.com'],
                    ['5','Juwan', 'Smitham','Juwan90','Juwan13@yahoo.com'],
                    ['6','Jarrod', 'Bradtke','Jarrod.Bradtke23','Jarrod.Bradtke40@yahoo.com'],
                    ['7','Moses', 'Stark','Moses.Stark','Moses.Stark85@gmail.com'],
                    ['8','Garrett', 'Pacocha','Garrett.Pacocha94','Garrett.Pacocha@hotmail.com'],
                    ['9','Ellen', 'Treutel','Ellen63','Ellen5@gmail.com'],
                    ['10','Janis', 'Kautzer','Janis53','Janis32@gmail.com'],
                    ['11','Christian', 'Jaskolski','Christian87','Christian87@gmail.com'],
                    ['12','Elton', 'MacGyver','Elton5','Elton_MacGyver@hotmail.com'],
                    ['13','Jamaal', 'Morar','Jamaal66','Jamaal0@yahoo.com'],
                    ['14','Eddie', 'Blick','Eddie_Blick','Eddie.Blick@hotmail.com'],
                    ['15','Kallie', 'Murphy','Kallie_Murphy38','Kallie.Murphy@yahoo.com'],
                ],
                colHeaders: ['#','First Name','Last Name','User Name','User Email'],
                columnSorting: true,
                colWidths: [45, 100, 100, 60, 80, 80, 80],
            }
        };
    },
    components: {
        card,
        HotTable
    },
    mounted: function() {
    },
    methods: {

    },
    destroyed: function() {

    }
}
</script>
<style src="../../css/custom_css/bootstrap_tables.css"></style>
<style>
    .wtHider,.htCore,.handsontable table.htCore,.ht_clone_top.handsontable,.handsontable .wtSpreader,.handsontable .wtHider{
        min-width:100% !important;
    }@media(min-width:320px) and (max-width:425px) {
        #hot-preview {
            overflow-x: scroll;
        }

        .htMobileEditorContainer {
            height: 76pt !important;
        }

        .htMobileEditorContainer .positionControls > div {
            margin-top: 45px;
            height: auto;
        }

        .htMobileEditorContainer .inputs {
            width: 80%;
        }

        .htMobileEditorContainer .inputs textarea, .htMobileEditorContainer .positionControls {
            width: 100%;
        }
    }
    @media(max-width:320px)  {
        .htMobileEditorContainer .positionControls{
            left: -17px;
        }
        .htMobileEditorContainer .positionControls > div{
            margin-left: 28px;
            width: 7% !important;
        }
    }
    .wtHider{
        height: auto;
    }


</style>
