const routes = [{
    path: '/',
    component: resolve => require(['./fixed_header.vue'], resolve),
    children: [
        {
            path: '',
            component: resolve => require(['./components/pages/index.vue'], resolve),
            meta: {
                title: 'Dashboard1',
                breadcrumb: [{
                    html:'<i class="ti-home"></i> Dashboard 1',
                    href: '/',
                }]
            }
        },
        {
            path: 'index2',
            component: resolve => require(['./components/pages/index2.vue'], resolve),
            meta: {
                title: 'Dashboard2',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard 2',
                    href: '#/index2',
                }]
            }
        },{
            path: 'index3',
            component: resolve => require(['./components/pages/index3.vue'], resolve),
            meta: {
                title: 'Dashboard3',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard 3',
                    href: '#/index3',
                }]
            }
        },{
            path: 'edashboard',
            component: resolve => require(['./components/pages/edashboard.vue'], resolve),
            meta: {
                title: 'E-Commerce Dashboard',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                },{
                    html: 'E-Commerce',
                    href: '#',
                },{
                    html: 'E-commerce Dashboard',
                    href: '#/edashboard',
                }]
            }
        },{
            path: 'product_details',
            component: resolve => require(['./components/pages/product_details.vue'], resolve),
            meta: {
                title: 'Product Details',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                },{
                    html: 'E-Commerce',
                    href: '#',
                },{
                    html: 'Product Details',
                    href: '#/product_details',
                }]
            }
        }, {
            path: 'product_gallery',
            component: resolve => require(['./components/pages/product_gallery.vue'], resolve),
            meta: {
                title: 'Product Gallery',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                },{
                    html: 'E-Commerce',
                    href: '#',
                },{
                    html: 'Product Gallery',
                    href: '#/product_gallery',
                }]
            }
        },{
            path: 'task',
            component: resolve => require(['./components/pages/tasks.vue'], resolve),
            meta: {
                title: 'To-Do',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                },{
                    html: 'Task',
                    href: '#/edashboard',
                }]
            }
        },{
            path: 'contacts',
            component: resolve => require(['./components/pages/contacts.vue'], resolve),
            meta: {
                title: 'Form Elements',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Contacts',
                    href: '#/form-elements'
                }]
            }
        }, {
            path: 'form-elements',
            component: resolve => require(['./components/pages/form-elements.vue'], resolve),
            meta: {
                title: 'Form Elements',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Forms',
                    href: '#',
                }, {
                    html:'Features',
                    href:'#',
                },{
                    html: 'Form Elements',
                    href: '#/form-elements'
                }]
            }
        }, {
            path: 'form-validations',
            component: resolve => require(['./components/pages/form-validations.vue'], resolve),
            meta: {
                title: 'Form Validations',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Forms',
                    href: '#'
                }, {
                    html:'Features',
                    href:'#',
                }, {
                    html: 'Form Validations',
                    href: '#/form-validations'
                }]
            }
        }, {
            path: 'jstree',
            component: resolve => require(['./components/pages/jstree.vue'], resolve),
            meta: {
                title: 'JS Tree',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'UI Components',
                    href: '#'
                }, {
                    html: 'JS Tree',
                    href: '#/jstree'
                }]
            }
        },{
            path: 'form_layouts',
            component: resolve => require(['./components/pages/form-layouts.vue'], resolve),
            meta: {
                title: 'Form Layouts',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Forms',
                    href: '#',
                },{
                    html:'Features',
                    href:'#',
                }, {
                    html: 'Form Layouts',
                    href: '#/form_layouts'
                }]
            }
        }, {
            path: 'complex_forms',
            component: resolve => require(['./components/pages/complex_forms.vue'], resolve),
            meta: {
                title: 'Complex Forms',
                breadcrumb:  [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Forms',
                    href: '#',
                },{
                    html:'Features',
                    href:'#',
                }, {
                    html: 'Complex Forms',
                    href: '#/complex_forms'
                }]
            }
        }, {
            path: 'realtime_form',
            component: resolve => require(['./components/pages/realtime_form.vue'], resolve),
            meta: {
                title: 'Realtime Forms',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Forms',
                    href: '#',
                },{
                    html:'Features',
                    href:'#',
                }, {
                    html: 'Realtime Form',
                    href: '#/realtime_form'
                }]
            }
        }, {
            path: 'radio_check',
            component: resolve => require(['./components/pages/radio_checkboxes.vue'], resolve),
            meta: {
                title: 'Radio and Checkboxes',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Forms',
                    href: '#',
                },{
                    html:'Features',
                    href:'#',
                }, {
                    html: 'Radio and Checkbox',
                    href: '#/radio_check'
                }]
            }
        }, {
            path: 'form_editors',
            component: resolve => require(['./components/pages/form_editors.vue'], resolve),
            meta: {
                title: 'Form Editors',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Forms',
                    href: '#',
                },{
                    html:'Components',
                    href:'#',
                }, {
                    html: 'Form Editors',
                    href: '#/form_editors'
                }]
            }
        }, {
            path: 'form_wizards',
            component: resolve => require(['./components/pages/form_wizards.vue'], resolve),
            meta: {
                title: 'Form Wizards',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Forms',
                    href: '#',
                },{
                    html:'Components',
                    href:'#',
                }, {
                    html: 'Form Wizards',
                    href: '#/form_wizards'
                }]
            }
        }, {
            path: 'dropdowns',
            component: resolve => require(['./components/pages/dropdowns.vue'], resolve),
            meta: {
                title: 'Dropdowns',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Forms',
                    href: '#',
                },{
                    html:'Components',
                    href:'#',
                }, {
                    html: 'Dropdowns',
                    href: '#/dropdowns'
                }]
            }
        }, {
            path: 'date_pickers',
            component: resolve => require(['./components/pages/date_pickers.vue'], resolve),
            meta: {
                title: 'Date Pickers',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Forms',
                    href: '#',
                },{
                    html:'Components',
                    href:'#',
                }, {
                    html: 'Date Picker',
                    href: '#/date_picker'
                }]
            }
        }, {
            path: 'advanced_date_pickers',
            component: resolve => require(['./components/pages/advanced_date_pickers.vue'], resolve),
            meta: {
                title: 'Advanced Date Pickers',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Forms',
                    href: '#',
                },{
                    html:'Components',
                    href:'#',
                }, {
                    html: 'Advanced Date Pickers',
                    href: '#/advanced_data_pickers'
                }]
            }
        }, {
            path: 'vue_multiselect',
            component: resolve => require(['./components/pages/vue_multiselect.vue'], resolve),
            meta: {
                title: 'Vue Multiselect',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Forms',
                    href: '#',
                },{
                    html:'Components'
                }, {
                    html: 'Vue Multiselect',
                    href: '#/vue_multiselect'
                }]
            }
        }, {
            path: 'vue_slider',
            component: resolve => require(['./components/pages/vue_slider.vue'], resolve),
            meta: {
                title: 'Vue Slider',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Forms',
                    href: '#',
                },{
                    html:'Components',
                    href:'#',
                }, {
                    html: 'Vue Slider',
                    href: '#/vue_slider'
                }]
            }
        }, {
            path: 'vscroll',
            component: resolve => require(['./components/pages/vscroll.vue'], resolve),
            meta: {
                title: 'Vscroll',
                breadcrumb:[{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                },{
                    html: 'Vscroll',
                    href: '#/vscroll '
                }],
            }
        }, {
            path: 'general_components',
            component: resolve => require(['./components/pages/general_components.vue'], resolve),
            meta: {
                title: 'General Components',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'UI Features',
                    href: '#',
                }, {
                    html: 'General Components',
                    href: '#/general_components '
                }]
            }
        }, {
            path: 'buttons',
            component: resolve => require(['./components/pages/buttons.vue'], resolve),
            meta: {
                title: 'Buttons',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'UI Features',
                    href: '#',
                }, {
                    html: 'Buttons',
                    href: '#/buttons'
                }]
            }
        }, {
            path: 'advanced_modals',
            component: resolve => require(['./components/pages/advanced_modals.vue'], resolve),
            meta: {
                title: 'Advanced Modals',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'UI Features',
                    href: '#',
                }, {
                    html: 'Advanced Modals',
                    href: '#/advanced_modals'
                }]
            }
        }, {
            path: 'tabs_accordions',
            component: resolve => require(['./components/pages/tabs_accordions.vue'], resolve),
            meta: {
                title: 'Tabs Accordions',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'UI Features',
                    href: '#',
                }, {
                    html: 'Tabs and Accordions',
                    href: '#/tabs_accordions'
                }]
            }
        }, {
            path: 'font_icons',
            component: resolve => require(['./components/pages/font_icons.vue'], resolve),
            meta: {
                title: 'Font Icons',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'UI Features',
                    href: '#',
                }, {
                    html: 'Font Icons',
                    href: '#/font_icons'
                }]
            }
        }, {
            path: 'themify_icons',
            component: resolve => require(['./components/pages/themify_icons.vue'], resolve),
            meta: {
                title: 'Themify Icons',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'UI Features',
                    href: '#',
                }, {
                    html: 'Themify Icons',
                    href: '#/themify_icons'
                }]
            }
        }, {
            path: 'fontawesome_icons',
            component: resolve => require(['./components/pages/fontawesome_icons.vue'], resolve),
            meta: {
                title: 'Fontawesome Icons',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'UI Features',
                    href: '#',
                }, {
                    html: 'Font Awesome Icons',
                    href: '#/fontawesome_icons'
                }]
            }
        }, {
            path: 'simple_line_icons',
            component: resolve => require(['./components/pages/simple_line_icons.vue'], resolve),
            meta: {
                title: 'Simple Line Icons',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'UI Features',
                    href: '#',
                }, {
                    html: 'Simple Line Icons',
                    href: '#/simple_line_icons'
                }]
            }
        }, {
            path: 'timeline',
            component: resolve => require(['./components/pages/timeline.vue'], resolve),
            meta: {
                title: 'Timeline',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'UI Features',
                    href: '#',
                }, {
                    html: 'Timeline',
                    href: '#/timeline'
                }]
            }
        }, {
            path: 'pickers',
            component: resolve => require(['./components/pages/pickers.vue'], resolve),
            meta: {
                title: 'Pickers',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'UI Components',
                    href: '#',
                }, {
                    html: 'Pickers',
                    href: '#/pickers'
                }]
            }
        },{
            path: 'color_pickers',
            component: resolve => require(['./components/pages/color_pickers.vue'], resolve),
            meta: {
                title: 'Color Pickers',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'UI Components',
                    href: '#',
                }, {
                    html: 'Color Pickers',
                    href: '#/color_pickers'
                }]
            }
        }, {
            path: 'grid_layout',
            component: resolve => require(['./components/pages/grid_layout.vue'], resolve),
            meta: {
                title: 'Grid Layout',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'UI Components',
                    href: '#',
                }, {
                    html: 'Grid layout',
                    href: '#/grid_layout'
                }]
            }
        }, {
            path: 'tags_input',
            component: resolve => require(['./components/pages/tags_input.vue'], resolve),
            meta: {
                title: 'Tags Input',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'UI Components',
                    href: '#',
                }, {
                    html: 'Tags Input',
                    href: '#/tags_input'
                }]
            }
        }, {
            path: 'nestable_list',
            component: resolve => require(['./components/pages/nestable_list.vue'], resolve),
            meta: {
                title: 'Nestable List',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'UI Components',
                    href: '#',
                }, {
                    html: 'Nested List',
                    href: '#/nested_list'
                }]
            }
        }, {
            path: 'sweet_alert',
            component: resolve => require(['./components/pages/sweet_alert.vue'], resolve),
            meta: {
                title: 'Sweet Alert',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'UI Components',
                    href: '#',
                }, {
                    html: 'Sweet Alert',
                    href: '#/sweet_alert'
                }]
            }
        }, {
            path: 'toastr_notifications',
            component: resolve => require(['./components/pages/toastr_notifications.vue'], resolve),
            meta: {
                title: 'Toastr Notifications',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'UI Components',
                    href: '#',
                }, {
                    html: 'Toastr Notification',
                    href: '#/toastr_notifications'
                }]
            }
        }, {
            path: 'draggable_portlets',
            component: resolve => require(['./components/pages/draggable_portlets.vue'], resolve),
            meta: {
                title: 'Draggable Portlets',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'UI Components',
                    href: '#',
                }, {
                    html: 'Draggable Portlets',
                    href: '#/draggable_portlets'
                }]
            }
        }, {
            path: 'transitions',
            component: resolve => require(['./components/pages/transitions.vue'], resolve),
            meta: {
                title: 'Transitions',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'UI Components',
                    href: '#',
                }, {
                    html: 'Tranisitions',
                    href: '#/transitions'
                }]
            }
        },{
            path: 'listjs',
            component: resolve => require(['./components/pages/listjs.vue'], resolve),
            meta: {
                title: 'Listjs',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'UI Components',
                    href: '#',
                }, {
                    html: 'Listjs',
                    href: '#/listjs'
                }]
            }
        },  {
            path: 'widgets',
            component: resolve => require(['./components/pages/widgets.vue'], resolve),
            meta: {
                title: 'Widgets',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Widgets',
                    href: '#/widgets1'
                }]
            }
        }, {
            path: 'simple_tables',
            component: resolve => require(['./components/pages/simple_tables.vue'], resolve),
            meta: {
                title: 'Simple Tables',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'DataTables',
                    href: '#',
                }, {
                    html: 'Simple Tables',
                    href: '#/simple_tables'
                }]
            }
        }, {
            path: 'advanced-tables',
            component: resolve => require(['./components/pages/advanced_tables.vue'], resolve),
            meta: {
                title: 'DataTables',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'DataTables',
                    href: '#',
                }, {
                    html: 'Advanced Tables',
                    href: '#/advanced-tables'
                }]
            }
        }, {
            path: 'bootstrap_tables',
            component: resolve => require(['./components/pages/bootstrap_tables.vue'], resolve),
            meta: {
                title: 'Bootstrap Tables',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'DataTables',
                    href: '#',
                }, {
                    html: 'Bootstrap Tables',
                    href: '#/bootstrap_tables'
                }]
            }
        }, {
            path: 'flot_charts',
            component: resolve => require(['./components/pages/flot_charts.vue'], resolve),
            meta: {
                title: 'Flot Charts',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Charts',
                    href: '#',
                }, {
                    html: 'Flot Charts',
                    href: '#/flot_charts'
                }]
            }
        }, {
            path: 'nvd3_charts',
            component: resolve => require(['./components/pages/nvd3_charts.vue'], resolve),
            meta: {
                title: 'NVD3 Charts',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Charts',
                    href: '#',
                }, {
                    html: 'NVD3 Charts',
                    href: '#/nvd3_charts'
                }]
            }
        },
        {
            path: 'trend_bar',
            component: resolve => require(['./components/pages/trend_bar.vue'], resolve),
            meta: {
                title: 'Trend and Bar Charts',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Charts',
                    href: '#',
                }, {
                    html: 'Trend and Bar Charts',
                    href: '#/trend_bar'
                }]
            }
        },{
            path: 'frappe_charts',
            component: resolve => require(['./components/pages/frappe_charts.vue'], resolve),
            meta: {
                title: 'Frappe Charts',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Charts',
                    href: '#',
                }, {
                    html: 'Frappe Charts',
                    href: '#/frappe_charts'
                }]
            }
        }, {
            path: 'circle_sliders',
            component: resolve => require(['./components/pages/circle_sliders.vue'], resolve),
            meta: {
                title: 'Circle Sliders',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Charts',
                    href: '#',
                }, {
                    html: 'Circle Sliders',
                    href: '#/circle_sliders'
                }]
            }
        }, {
            path: 'chartist',
            component: resolve => require(['./components/pages/chartist.vue'], resolve),
            meta: {
                title: 'Chartist Charts',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Charts',
                    href: '#',
                }, {
                    html: 'Chartist Charts',
                    href: '#/chartist'
                }]
            }
        }, {
            path: 'calendar',
            component: resolve => require(['./components/pages/calendar.vue'], resolve),
            meta: {
                title: 'Calendar',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Calendar',
                    href: '#/calendar'
                }]
            }
        }, {
            path: 'masonry_gallery',
            component: resolve => require(['./components/pages/masonry_gallery.vue'], resolve),
            meta: {
                title: 'Masonry Gallery',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Gallery',
                    href: '#',
                }, {
                    html: 'Masonry Gallery',
                    href: '#/masonry_gallery'
                }]
            }
        }, {
            path: 'dropify',
            component: resolve => require(['./components/pages/dropify.vue'], resolve),
            meta: {
                title: 'Dropify',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Gallery',
                    href: '#',
                }, {
                    html: 'Dropify',
                    href: '#/dropify'
                }]
            }
        }, {
            path: 'image_hover',
            component: resolve => require(['./components/pages/image_hover.vue'], resolve),
            meta: {
                title: 'Image Hover',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Gallery',
                    href: '#',
                }, {
                    html: 'Image Hover',
                    href: '#/image_hover'
                }]
            }
        }, {
            path: 'image_filter',
            component: resolve => require(['./components/pages/image_filter.vue'], resolve),
            meta: {
                title: 'Image Filter',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Gallery',
                    href: '#',
                }, {
                    html: 'Image Filter',
                    href: '#/image_filter'
                }]
            }
        }, {
            path: 'image_magnifier',
            component: resolve => require(['./components/pages/image_magnifier.vue'], resolve),
            meta: {
                title: 'Image Magnifier',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Gallery',
                    href: '#',
                }, {
                    html: 'Image Magnifier',
                    href: '#/image_magnifier'
                }]
            }
        }, {
            path: 'gmaps',
            component: resolve => require(['./components/pages/gmaps.vue'], resolve),
            meta: {
                title: 'Google Maps',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Maps',
                    href: '#',
                }, {
                    html: 'Google Maps',
                    href: '#/gmaps'
                }]
            }
        }, {
            path: 'vector_maps',
            component: resolve => require(['./components/pages/vector_maps.vue'], resolve),
            meta: {
                title: 'Vector Maps',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Maps',
                    href: '#',
                }, {
                    html: 'Vector Maps',
                    href: '#/vector_maps'
                }]
            }
        }, {
            path: 'users_list',
            component: resolve => require(['./components/pages/users_list.vue'], resolve),
            meta: {
                title: 'Users List',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Users',
                    href: '#',
                }, {
                    html: 'Users List',
                    href: '#/users_list'
                }]
            }
        }, {
            path: 'addnew_user',
            component: resolve => require(['./components/pages/addnew_user.vue'], resolve),
            meta: {
                title: 'Add New User',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Users',
                    href: '#',
                }, {
                    html: 'Add New User',
                    href: '#/addnew_user'
                }]
            }
        }, {
            path: 'edit_user',
            component: resolve => require(['./components/pages/edit_user.vue'], resolve),
            meta: {
                title: 'Edit User',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Users',
                    href: '#',
                }, {
                    html: 'Edit User',
                    href: '#/edit_user'
                }]
            }
        }, {
            path: 'user_profile',
            component: resolve => require(['./components/pages/user_profile.vue'], resolve),
            meta: {
                title: 'User Profile',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Users',
                    href: '#',
                }, {
                    html: 'User Profile',
                    href: '#/user_profile'
                }]
            }
        }, {
            path: 'deleted_users',
            component: resolve => require(['./components/pages/deleted_users.vue'], resolve),
            meta: {
                title: 'Deleted Users',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Users',
                    href: '#',
                }, {
                    html: 'Deleted Users',
                    href: '#/deleted_users'
                }]
            }
        }, {
            path: 'blank',
            component: resolve => require(['./components/pages/blank.vue'], resolve),
            meta: {
                title: 'Blank',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Extra Pages',
                    href: '#',
                }, {
                    html: 'Blank',
                    href: '#/blank'
                }]
            }
        }, {
            path: 'invoice',
            component: resolve => require(['./components/pages/invoice.vue'], resolve),
            meta: {
                title: 'Invoice',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Extra Pages',
                    href: '#',
                }, {
                    html: 'Invoice',
                    href: '#/invoice'
                }]
            }
        }, {
            path: 'pricing',
            component: resolve => require(['./components/pages/pricing.vue'], resolve),
            meta: {
                title: 'Pricing',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Extra Pages',
                    href: '#',
                }, {
                    html: 'Pricing Table',
                    href: '#/pricing'
                }]
            }
        }, {
            path: 'boxed',
            component: resolve => require(['./components/pages/boxed.vue'], resolve),
            meta: {
                title: 'Boxed',
                breadcrumb:[{
                    html:'<i class="ti-home"></i> Dashboard',
                    href:'#/',
                },{
                    html:'Layouts',
                    href:'#',
                },{
                    html:'#/boxed'
                }]
            }
        }, {
            path: 'fixed_menu',
            component: resolve => require(['./components/pages/fixed_menu.vue'], resolve),
            meta: {
                title: 'Fixed Menu',
                breadcrumb:[{
                    html:'<i class="ti-home"></i> Dashboard',
                    href:'#/',
                },{
                    html:'Layouts',
                    href:'#',
                },{
                    html:'#/fixed_menu'
                }]
            }
        }, {
            path: 'movable_header',
            component: resolve => require(['./components/pages/movable_header.vue'], resolve),
            meta: {
                title: 'Movable Header',
                // breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Layouts</a></li></li><li><a href="#/movable_header">Movable Header</a></li>`
                breadcrumb:[{
                    html:'<i class="ti-home"></i> Dashboard',
                    href:'#/',
                },{
                    html:'Layouts',
                    href:'#',
                },{
                    html:'#/movable_header'
                }]
            }
        }, {
            path: 'boxed_movableheader',
            component: resolve => require(['./components/pages/boxed_movableheader.vue'], resolve),
            meta: {
                title: 'Boxed & Movable Header',
                breadcrumb:[{
                    html:'<i class="ti-home"></i> Dashboard',
                    href:'#/',
                },{
                    html:'Layouts',
                    href:'#',
                },{
                    html:'#/boxed_movableheader'
                }]
            }
        }, {
            path: 'menubar_fold',
            component: resolve => require(['./components/pages/menubar_fold.vue'], resolve),
            meta: {
                title: 'Menubar Fold',
                breadcrumb:[{
                    html:'<i class="ti-home"></i> Dashboard',
                    href:'#/',
                },{
                    html:'Layouts',
                    href:'#',
                },{
                    html:'#/menubar_fold'
                }]
            }
        }, {
            path: 'mini_sidebar',
            component: resolve => require(['./components/pages/mini_sidebar.vue'], resolve),
            meta: {
                title: 'Mini Sidebar',
                breadcrumb:[{
                    html:'<i class="ti-home"></i> Dashboard',
                    href:'#/',
                },{
                    html:'Layouts',
                    href:'#',
                },{
                    html:'#/mini_sidebar'
                }]
            }
        },
        {
            path: 'Roles',
            component: resolve => require(['./components/pages/src/rol.vue'], resolve),
            meta: {
                title: 'Roles',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Usuarios',
                    href: '#',
                }, {
                    html: 'Roles',
                    href: '#/Roles'
                }]
            }
        },
        {
            path: 'Permisos',
            component: resolve => require(['./components/pages/src/permiso.vue'], resolve),
            meta: {
                title: 'Permisos',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Usuarios',
                    href: '#',
                }, {
                    html: 'Permisos',
                    href: '#/Permisos'
                }]
            }
        },
        {
            path: 'Usuarios',
            component: resolve => require(['./components/pages/src/usuario.vue'], resolve),
            meta: {
                title: 'Usuarios',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
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
                    html: '<i class="ti-home"></i> Dashboard',
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
                    html: '<i class="ti-home"></i> Dashboard',
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
                    html: '<i class="ti-home"></i> Dashboard',
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
                title: 'Organizaciones',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Proyectos',
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
                    html: '<i class="ti-home"></i> Dashboard',
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
                    html: '<i class="ti-home"></i> Dashboard',
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
                    html: '<i class="ti-home"></i> Dashboard',
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
                    html: '<i class="ti-home"></i> Dashboard',
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
                    html: '<i class="ti-home"></i> Dashboard',
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
                title: 'Progreso general de proyectos',
                breadcrumb: [{
                    html: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    html: 'Gantt',
                    href: '#',
                }, {
                    html: 'Gantt',
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
                    html: '<i class="ti-home"></i> Dashboard',
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
        breadcrumb: ``
    }
}, {
    path: '/login',
    component: resolve => require(['./components/pages/login.vue'], resolve),
    meta: {
        title: 'Login',
        breadcrumb: ``
    }
}, {
    path: '/register',
    component: resolve => require(['./components/pages/register.vue'], resolve),
    meta: {
        title: 'Register',
        breadcrumb: ``
    }
}, {
    path: '/lockscreen',
    component: resolve => require(['./components/pages/lockscreen.vue'], resolve),
    meta: {
        title: 'Lockscreen',
        breadcrumb: ``
    }
}, {
    path: '/forgot_password',
    component: resolve => require(['./components/pages/forgot_password.vue'], resolve),
    meta: {
        title: 'Forgot Password',
        breadcrumb: ``
    }
}, {
    path: '/reset_password',
    component: resolve => require(['./components/pages/reset_pass.vue'], resolve),
    meta: {
        title: 'Reset Password',
        breadcrumb: ``
    }
}, {
    path: '*',
    component: resolve => require(['./components/pages/404.vue'], resolve),
    meta: {
        title: '404',
        breadcrumb: ``
    }
},
]

export default routes
