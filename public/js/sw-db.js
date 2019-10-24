// Utilidades para grabar PouchDB
const db = new PouchDB('mensajes');


function guardarMensaje( mensaje ) {

    return db.put( mensaje ).then( () => {

        self.registration.sync.register('nuevo-post');

        const newResp = { ok: true,offline:true ,data:'El reporte se subira cuando se tenga internet' };
        return new Response( JSON.stringify(newResp) );

    });

}


// Postear mensajes a la API
function postearMensajes() {

    const posteos = [];

    return db.allDocs({ include_docs: true }).then( docs => {


        docs.rows.forEach( row => {

            const doc = row.doc;
            var form = new FormData();
                form.append('id', doc.id);
                form.append('descripcion', doc.descripcion);
                form.append('participantes', doc.participantes);
                form.append('latitud', doc.latitud);
                form.append('longitud', doc.longitud);
                form.append('fotos[]', doc.fotos);
                form.append('estadisticas', doc.estadisticas);
                const ajuste = { headers: { 'Content-Type': 'multipart/form-data' } };
                // const fetchPom=axios.post('/Tarea/subir',form, ajuste).then(function (response) {
                //     console.log(response);
                //     return db.remove(doc);
                // }).catch(errors => {
                //     console.log(errors.data);
                //     return db.remove(doc);
                // });
            const fetchPom =  fetch('/api/v1/Tarea/subir', {
                method: 'POST',
                body: form,
                }).then( res => {
                    console.log(res);
                    return db.remove( doc );

                }).catch(err=>{
                    console.log(err.response);
                    return db.remove(doc);
                });
            posteos.push( fetchPom );
        }); // fin del foreach

        return Promise.all( posteos );

    });





}

