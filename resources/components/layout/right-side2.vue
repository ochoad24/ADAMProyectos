<template>
    <aside class="right-aside">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1 v-html="this.$route.meta.title">Title</h1>
            <!-- <ol class="breadcrumb" v-html="this.$route.meta.breadcrumb"></ol> -->
            <b-breadcrumb :items="this.$route.meta.breadcrumb"/>
        </section>
        <!-- Main content -->
        <section class="content">
            <slot></slot>


            <!--rightside bar -->
            <!--<right-side-bar></right-side-bar>-->
            <rightSideBar2></rightSideBar2>

        </section>
        <!-- /.content -->
    </aside>
</template>
<script>
    import rightSideBar2 from '../pages/example'
    // import rightSideBar from './right-side_chatbox'


    export default {
        name: "right-side",
        components:{
            rightSideBar,
            rightSideBar2
        }
    }
</script>
