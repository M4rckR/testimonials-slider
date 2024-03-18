export function alternarContenido(e) {
    const contenido = document.querySelector('#contenido');
    const autor = document.querySelector('#autor');
    const trabajo = document.querySelector('#trabajo');
    const foto = document.querySelector('#foto')

    const informarcion = {
        fotos : ["tanya","john"],
        testimonial : 
        ["\“ I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
        "\“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”"],
        names: ["Tanya Sinclair","John Tarkpor"],
        jobs: ["UX Engineer","Junior Front-end Developer"]
    }

    if(e.target.id === "adelante"){
        foto.src = `images/image-${informarcion.fotos[1]}.jpg`
        // foto.classList.add('slide-right-img')
        // setTimeout(() => {
        //     foto.classList.remove('slide-right-img')
        // }, 500);


        contenido.textContent = informarcion.testimonial[1]
        // contenido.parentElement.classList.add('slide-right')
        // setTimeout(() => {  
        //     contenido.parentElement.classList.remove('slide-right')
        // }, 500);

        
        autor.textContent = informarcion.names[1]
        trabajo.textContent = informarcion.jobs[1]

    }
    else if(e.target.id === "atras"){
        foto.src = `images/image-${informarcion.fotos[0]}.jpg`
        // foto.classList.add('slide-right-img')
        // setTimeout(() => {
        //     foto.classList.remove('slide-right-img')
        // }, 500);


        contenido.textContent = informarcion.testimonial[0]
        // contenido.parentElement.classList.add('slide-right')
        // setTimeout(() => {
        //     contenido.parentElement.classList.remove('slide-right')
        // }, 500);
        autor.textContent = informarcion.names[0]
        trabajo.textContent = informarcion.jobs[0]
    }
}

