webpackJsonp([17],{609:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(28),o=(i.n(r),i(228)),a=i.n(o);t.default={name:"Usuario",data:function(){return i=[{text:"Administrador",value:0},{text:"Técnico",value:1}],(t="roles")in(e={dialog:!1,idRol:0,repetir:"",search:"",headers:[{text:"Id",align:"left",value:"id"},{text:"Nombre",value:"nombre"},{text:"Apellido",value:"apellido"},{text:"Email",value:"email"},{text:"Rol",value:"rol"}],error:0,errorMsj:[],usuarios:[],roles:[],editedIndex:-1,editedItem:{id:0,nombre:"",apellido:"",usuario:"",rol:0},defaultItem:{id:0,nombre:"",apellido:"",usuario:"",rol:0}})?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e;var e,t,i},computed:{formTitle:function(){return-1===this.editedIndex?"Nuevo Usuario":"Editar Usuario"}},watch:{dialog:function(e){e||this.close()}},mounted:function(){this.initialize()},methods:{validate:function(){return this.error=0,this.errorMsj=[],this.editedItem.nombre||this.errorMsj.push("El nombre no puede estar vacio"),this.editedItem.apellido||this.errorMsj.push("El apellido no puede estar vacio"),this.editedItem.nombre||this.errorMsj.push("El correo no puede estar vacio"),this.idRol||this.errorMsj.push("Se debe asignar un rol al usuario"),this.errorMsj.length&&(this.error=1),this.error},initialize:function(){var e=this;a.a.get("/User/load").then(function(t){e.usuarios=t.data}).catch(function(e){console.log(e)})},deleteItem:function(e){var t=this;swal.fire({title:"Quieres eliminar este Usuario?",text:"No podras revertir la eliminacion!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, Eliminalo!",cancelButtonText:"Cancelar"}).then(function(i){i.value&&a.a.delete("/User/"+e.id+"/delete").then(function(e){t.initialize(),swal.fire({position:"top-end",type:"success",title:e.data,showConfirmButton:!1,timer:1500})}).catch(function(e){swal.fire({position:"top-end",type:"error",title:e.response.data.error,showConfirmButton:!0})})})},close:function(){var e=this;this.dialog=!1,setTimeout(function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1},300)},save:function(){var e=this;a()({method:"post",url:"/User/nuevo",data:{nombre:e.editedItem.nombre,apellido:e.editedItem.apellido,email:e.editedItem.usuario,role:e.idRol}}).then(function(t){swal.fire({position:"top-end",type:"success",title:t.data,showConfirmButton:!1,timer:1500}),e.initialize(),e.close()}).catch(function(t){console.log(t.response),swal.fire({position:"top-end",type:"error",title:t.response.data.error,showConfirmButton:!0}),e.initialize(),e.close()})}}}},610:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row user-list"},[i("div",{staticClass:"col-lg-12"},[i("b-card",{staticClass:"bg-primary-card",attrs:{header:"Usuarios","header-tag":"h4"}},[i("div",{staticClass:"table-responsive"},[i("v-toolbar",{attrs:{flat:"",color:"white"}},[i("v-text-field",{attrs:{"append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),i("v-spacer"),e._v(" "),i("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[i("v-btn",e._g({staticClass:"mb-2",attrs:{color:"#668c2d",dark:""}},r),[e._v("Nuevo Usuario")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),i("v-card",[i("v-toolbar",{attrs:{dark:"",color:"#668c2d"}},[i("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog2=!1}}},[i("v-icon",{attrs:{col:"white"}},[e._v("clear")])],1),e._v(" "),i("v-toolbar-title",[e._v("Nuevo Usuario")])],1),e._v(" "),i("v-card-text",[i("v-container",{attrs:{"grid-list-md":""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-text-field",{attrs:{label:"Nombre"},model:{value:e.editedItem.nombre,callback:function(t){e.$set(e.editedItem,"nombre",t)},expression:"editedItem.nombre"}})],1),e._v(" "),i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-text-field",{attrs:{label:"Apellido"},model:{value:e.editedItem.apellido,callback:function(t){e.$set(e.editedItem,"apellido",t)},expression:"editedItem.apellido"}})],1),e._v(" "),i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-text-field",{attrs:{type:"email",label:"Ingrese su email"},model:{value:e.editedItem.usuario,callback:function(t){e.$set(e.editedItem,"usuario",t)},expression:"editedItem.usuario"}})],1),e._v(" "),i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-select",{attrs:{items:e.roles,label:"Seleccione un Rol"},model:{value:e.idRol,callback:function(t){e.idRol=t},expression:"idRol"}})],1)],1)],1)],1),e._v(" "),e.error?[i("v-divider"),e._v(" "),i("div",{staticClass:"text-xs-center"},[e._l(e.errorMsj,function(t){return i("strong",{key:t,staticClass:"red--text text--lighten-1",domProps:{textContent:e._s(t)}})}),e._v(" "),i("br")],2),e._v(" "),i("v-divider")]:e._e(),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"#668c2d",flat:""},on:{click:e.close}},[e._v("Cancelar")]),e._v(" "),i("v-btn",{attrs:{color:"#668c2d",flat:""},on:{click:e.save}},[e._v("Guardar")])],1)],2)],1)],1),e._v(" "),i("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.usuarios,search:e.search},scopedSlots:e._u([{key:"items",fn:function(t){return[i("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.id))]),e._v(" "),i("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.nombre))]),e._v(" "),i("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.apellido))]),e._v(" "),i("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.email))]),e._v(" "),i("td",{staticClass:"text-xs-left"},[e._v(e._s(1!=t.item.role?"Administrador":"Técnico"))]),e._v(" "),i("td",{staticClass:"justify-center"},[i("v-icon",{attrs:{small:""},on:{click:function(i){return e.deleteItem(t.item)}}},[e._v("\n                                delete\n                            ")])],1)]}},{key:"no-data",fn:function(){return[i("v-btn",{staticClass:"mb-2",attrs:{color:"#668c2d",dark:""},on:{click:e.initialize}},[e._v("Recargar")])]},proxy:!0},{key:"no-results",fn:function(){return[i("v-alert",{attrs:{value:!0,color:"error",icon:"warning"}},[e._v('\n                            No hay resultados de "'+e._s(e.search)+'".\n                        ')])]},proxy:!0}])})],1)])],1)])},staticRenderFns:[]}},697:function(e,t,i){var r=i(44)(i(609),i(610),!1,null,null,null);e.exports=r.exports}});