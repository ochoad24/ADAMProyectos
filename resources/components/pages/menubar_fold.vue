<template>
    <div>
        <div class="outer">
            <h2>Code</h2>
            <pre><code class="language-markup">&lt;nav class=&quot;leftmenubar-fold&quot;&gt;
...
&lt;/nav&gt;</code></pre>
        </div>
        <div class="col-lg-12">
            <p class="text-justify">
                &emsp; &emsp; Sed sed blandit urna. Proin ac sem nisl. Mauris risus orci, tristique eget velit at,
                congue euismod
                lacus. Curabitur id purus sit amet urna rutrum bibendum ac at quam. In hendrerit enim eu turpis
                molestie, et euismod tellus viverra. Suspendisse molestie at leo sit amet volutpat. Integer augue
                libero, scelerisque vitae luctus ac, consequat et arcu. Nullam malesuada turpis eu ullamcorper
                tincidunt. Integer aliquam felis eget neque facilisis ornare.
            </p>
            <p>
                &emsp; &emsp; Integer pharetra vitae dolor vel
                elementum. In nisl risus, dignissim non fermentum ac, pretium sit amet dui. Phasellus fringilla orci
                sapien, vel lacinia mi dapibus ut. Donec euismod congue nulla, in porttitor sapien. Pellentesque
                facilisis luctus adipiscing.
            </p>
            <p class="text-justify">
                &emsp; &emsp;
                Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Nam massa eros, dictum ut imperdiet eget, laoreet
                placerat orci. Aliquam eget neque neque. Donec dictum, enim convallis gravida fringilla, velit sem
                condimentum nunc, in pretium libero est sit amet elit. Nam ut arcu ac eros commodo rutrum ac nec
                purus. Fusce sodales pulvinar odio, vulputate fringilla ligula bibendum sit amet. Duis risus neque,
                molestie tincidunt odio vel, sodales vulputate mauris. Sed adipiscing justo tristique enim pharetra,
                nec ultricies metus sagittis.Duis varius id massa ut pellentesque.
            </p>
            <p> &emsp; &emsp; Nulla commodo erat eu mi aliquet
                aliquam. Vivamus commodo massa et nunc ullamcorper, vel pharetra purus consequat. Suspendisse a
                neque quis nibh dictum posuere ac et enim. Aliquam sit amet accumsan erat. Nullam euismod elit
                tellus, vel luctus enim luctus feugiat. Vestibulum quis placerat ipsum, porta vehicula massa. Etiam
                nec risus ac lacus gravida tincidunt. Vivamus eu ante vehicula, aliquam nisl et, suscipit ipsum.
                Vivamus velit nulla, tincidunt ac risus et, congue lobortis mauris. In condimentum consectetur
                purus, vel adipiscing felis sollicitudin vitae. Phasellus luctus, ligula eu tempor ullamcorper,
                lectus elit posuere augue, eget tempus lacus nibh a purus. Ut risus velit, adipiscing eu leo quis,
                vestibulum porttitor nunc. Sed sed blandit urna. Proin ac sem nisl.
            </p>
            <p> &emsp; &emsp; Mauris risus orci, tristique
                eget velit at, congue euismod lacus. Curabitur id purus sit amet urna rutrum bibendum ac at quam. In
                hendrerit enim eu turpis molestie, et euismod tellus viverra. Suspendisse molestie at leo sit amet
                volutpat. et euismod tellus viverra.
            </p>
            <div class="clearfix"></div>
            <p class="text-justify">
                Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Nam massa eros, dictum ut imperdiet eget, laoreet
                placerat orci. Aliquam eget neque neque. Donec dictum, enim convallis gravida fringilla, velit sem
                condimentum nunc, in pretium libero est sit amet elit. Nam ut arcu ac eros commodo rutrum ac nec
                purus. Fusce sodales pulvinar odio, vulputate fringilla ligula bibendum sit amet. Duis risus neque,
                molestie tincidunt odio vel, sodales vulputate mauris. Sed adipiscing justo tristique enim pharetra,
                nec ultricies metus sagittis. Duis varius id massa ut pellentesque. Nulla commodo erat eu mi aliquet
                aliquam. Vivamus commodo massa et nunc ullamcorper, vel pharetra purus consequat.
            </p>
            <div class="clearfix"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "menubar_fold",
    mounted: function() {
        $(document).ready(function() {
            setTimeout(function() {
                //leftmenu init
                $('.menu-dropdown>a').off("click").on("click", function(e) {
                    e.preventDefault();
                });

                $("#menu").find('ul>.menu-dropdown').hover(function() {
                    var sideoffset = $(".sidebar").offset();
                    var submenuoffset = $(this).children("ul").offset();
                    if (sideoffset.top + $(".sidebar").height() < submenuoffset.top + $(this).children("ul").height()) {
                        $(this).children("ul").addClass("sidebarbottom");
                    }
                });
            }, 0);

        });
    },
    destroyed: function() {
        location.reload();
    }
}
</script>
<style src="../../css/menubarfold.css"></style>
<style>
#menu .navigation>li>a>span.mm-text,
#menu .navigation>li>a>span.fa.arrow,
.content-profile {
    display: none;
}

#menu .navigation>li>a> {
    text-align: center;
}
</style>
