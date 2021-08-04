const { default: fetch } = require('node-fetch');


const peticionDataBody = async (data, url, method) => {
    const dataresult = await fetch(url, {
        method, // *GET, POST, PUT, DELETE, etc.
        credentials: 'omit', // include, *same-origin, omit
        mode: 'cors',
        cache: 'default',
        headers: {
            'Content-Type': 'application/json'
        },
        // referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)  //{ email: data.email, password: data.password }
    }).then(async (res) => {
        if (res.ok) {
            const respuesta = await res.json();
            return respuesta
        } else if (res.status !== 200) {
            const respuesta = await res.json();
            return respuesta
        } else {
            const respuesta = await res.json();
            return respuesta
        }
    }).then(respuesta => {
        // console.log('peticion APi fetch**', respuesta)
        return respuesta
    }).catch(error => console.error('Error:', error))
    return dataresult;
}

const peticionDataHeaders = async (dataHeaders, url, method) => {
    const dataresult = await fetch(url, {
        method, // *GET, POST, PUT, DELETE, etc.
        mode: 'same-origin', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: { ...dataHeaders },
        referrerPolicy: 'no-referrer'
    }).then(async (res) => {
        if (res.ok) {
            const respuesta = await res.json();
            if (respuesta.outdata.errno) {
                console.log('RES.error')
                return outdata
            } else {
                return respuesta
            }
        } else if (res.status !== 200) {
            console.log('!==200')
            const respuesta = await res.json();
            return respuesta
        } else {
            console.log('else ')
            const respuesta = await res.json();
            return respuesta
        }
    }).then(respuesta => {
        return respuesta
    }).catch(error => console.error('Error:', error))   

    return  dataresult;    
}

const peticionDataBodyHeaders = async (dataBody, dataHeader, url, method) => {

    // console.log('dataBody ', dataBody)
    console.log('dataHeader001 ', dataHeader)
    // console.log('Headers ', header)
    const dataresult = await fetch(url, {
        method, // *GET, POST, PUT, DELETE, etc.
        mode: 'same-origin', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: { ...dataHeader },
        // referrerPolicy: 'no-referrer',
        body: JSON.stringify(dataBody)
    }).then(async (res) => {
        if (res.ok) {
            const respuesta = await res.json();
            return respuesta
        } else if (res.status !== 200) {
            const respuesta = await res.json();
            return respuesta
        } else {
            const respuesta = await res.json();
            return respuesta
        }
    }).then(respuesta => {
        // console.log('peticion APi fetch**', respuesta)
        return respuesta
    }).catch(error => console.error('Error:', error))
    return dataresult;
}

const peticionData = async (url, method) => {
    const dataresult = await fetch(url, {
        method, // *GET, POST, PUT, DELETE, etc.
        mode: 'same-origin', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer'
    })
    return dataresult;
}

module.exports = {
    peticionDataBody,
    peticionDataHeaders,
    peticionDataBodyHeaders,
    peticionData
}