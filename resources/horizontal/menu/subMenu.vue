<template>
    <li class="collapse-item submenu -hasSubmenu -noChevron">
        <a class="submenu-header touchable">
            <i :class="icon"></i>
            <span class="submenu-header-title">{{ title }}</span>
            <span class="submenu_icon pull-right"><i class="ti-angle-right"></i></span>
        </a>
        <ul class="submenu-content">
            <slot></slot>
        </ul>
    </li>
</template>
<script>
import anime from 'animejs'
export default {
    props: {
        selected: Boolean,
        icon: String,
        title: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../css/blue";
.collapse-item {
    .submenu-header {
        cursor: pointer;
        color: $menu_color;
        padding: 0 10px 0 20px;
        &:hover {
            color: $menu_hover_color;
        }
    }
    .submenu-content {
        background-color: $submenu_color;
        overflow-y: hidden;
        z-index: 5;
    }
    .submenu_icon {
        transition: all 0.3s;
        font-size: 9px;
        padding-top: 4px;
    }
    &.-active {
        >.submenu-header {
            background-color: $menu_active;
            color:$horizontal_hover;
            > .submenu_icon {
                transform: rotate(90deg);
            }
        }
    }
}
@media(max-width: 768px){
    .submenu-content{
        background-color:#fff !important;
    }
}
</style>
