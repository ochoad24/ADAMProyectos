

// Guardar  en el cache dinamico
function actualizaCacheDinamico( dynamicCache, req, res ) {


    if ( res.ok ) {

        return caches.open( dynamicCache ).then( cache => {

            cache.put( req, res.clone() );
            
            return res.clone();

        });

    } else {
        return res;
    }

}

// Cache with network update
function actualizaCacheStatico( staticCache, req, APP_SHELL_INMUTABLE ) {


    if ( APP_SHELL_INMUTABLE.includes(req.url) ) {
        // No hace falta actualizar el inmutable
        // console.log('existe en inmutable', req.url );

    } else {
        // console.log('actualizando', req.url );
        return fetch( req )
                .then( res => {
                    return actualizaCacheDinamico( staticCache, req, res );
                });
    }


}
function manejoApiMensajes( cacheName, req ) {

    if ( req.clone().method === 'POST') {
        if(req.clone().url==='http://localhost:8000/api/v1/Tarea/subir'){
            if ( self.registration.sync ) {
                return req.clone().formData().then(data => {
                    var myDoc = {
                        _id: new Date().toISOString(),
                        id:0,
                        descripcion:'',
                        participantes:'',
                        estadisticas:'',
                        fotos:''
                    }
                    for (var pair of data.entries()) {
                        
                        if(pair[0]==='id')
                            myDoc.id=pair[1];
                        else if(pair[0]==='descripcion')
                            myDoc.descripcion=pair[1];
                        else if(pair[0]==='participantes')
                            myDoc.participantes=pair[1];
                        else if(pair[0]==='estadisticas')
                            myDoc.estadisticas=pair[1];
                        else if(pair[0]==='fotos[]')
                            myDoc.fotos=pair[1];    
                        else
                            console.log(pair[0]+ ',' + pair[1]);
                    }
                    return guardarMensaje(myDoc);
                });
            }
        } else {
            return fetch( req );
        }
    } 
    else if(req.clone().method==='DELETE')
    {
        return fetch(req);
    }else {

        return fetch( req ).then( res => {
    
            if ( res.ok ) {
                actualizaCacheDinamico( cacheName, req, res.clone() );
                return res.clone();
            } else {
                return caches.match( req );
            }
      
        }).catch( err => {
            return caches.match( req );
        });

    }


}

