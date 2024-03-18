import { alternarContenido } from "./funciones"
(()=> {
    const indicadores = document.querySelector('#indicadores')

    indicadores.addEventListener('click', (e)=> {
        alternarContenido(e)
    })

})()