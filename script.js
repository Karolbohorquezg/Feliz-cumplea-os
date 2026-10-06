/* =========================================
   ELEMENTOS
========================================= */

const envelopeContainer =
    document.getElementById("envelopeContainer");

const envelope =
    document.getElementById("envelope");

const letter =
    document.getElementById("letter");

const message =
    document.getElementById("message");

const signature =
    document.getElementById("signature");

const postscript =
    document.getElementById("postscript");


/* =========================================
   CARTA
========================================= */

const text = `Feliz cumpleaños, mi amor.

Hoy cumples 18 años, un número que marca el inicio de un camino enorme. En esta etapa nueva que empiezas, 

Quiero agradecerle a Dios por haberte puesto en mi camino, por todo lo que vivimos, por las cosas que aprendí contigo.

Porque aunque nuestra historia no haya terminado como quizá alguna vez imaginamos, fue real, fue importante y fue parte de mí.

Y ahora comienza para ti una etapa nueva.

Cumplir 18 es abrir una puerta enorme.

Te queda muchísimo por descubrir, por aprender, por equivocarte, por reír, por conocer personas, perseguir sueños y construir la vida que algún día vas a mirar hacia atrás y reconocer como tuya.

Sé que estamos en etapas diferentes y que todavía tienes muchísimo por vivir.

Y sinceramente deseo que lo vivas todo.

Que no tengas miedo de crecer, de cambiar, de intentar cosas nuevas y de descubrir quién quieres ser.

Ojalá la vida sea bonita contigo.

Ojalá encuentres personas que te quieran de verdad, que sepan cuidarte, que celebren tus logros y que estén contigo también en los días difíciles.

Ojalá cumplas muchos de esos sueños que alguna vez me contaste.

Y ojalá, cuando seas mucho mayor y mires hacia atrás, recuerdes que hubo una niña que alguna vez te quiso con todo su corazón y que estuvo muy feliz de poder llamarte sebastián.

No sé qué lugar vamos a ocupar el uno en la vida del otro con el paso de los años.

Pero sí sé algo.

Siempre voy a guardar una parte muy bonita de mi corazón para recordar al Sebastián que conocí, al que amé, al que extrañé y al que alguna vez hizo que mi mundo se sintiera un poquito más especial.

Gracias por haber sido esa persona que ame con todo mi corazón.

Gracias por haberme hecho tan feliz.

Y gracias, simplemente, por haber existido en mi vida.

Feliz cumpleaños, Sebastián.

Que estos 18 sean solamente el comienzo de una vida llena de cosas bonitas.

Te deseo felicidad, amor, tranquilidad, sueños cumplidos y muchísimos motivos para sonreír.

Y siempre voy a querer que seas muy feliz.

Feliz cumpleaños, mi amor.

Te quiero mucho.`;


/* =========================================
   ABRIR SOBRE
========================================= */

envelopeContainer.addEventListener("click", () => {

    /* Abrimos el sobre */

    envelope.classList.add("open");


    /* Esperamos a que se vea la animación */

    setTimeout(() => {

        envelopeContainer.classList.add("hide");

    }, 900);


    /* Mostramos la carta */

    setTimeout(() => {

        envelopeContainer.style.display = "none";

        letter.classList.add("show");

        escribirCarta();

    }, 1500);

});


/* =========================================
   MÁQUINA DE ESCRIBIR
========================================= */

function escribirCarta() {

    let index = 0;

    const velocidad = 18;


    function escribir() {

        if (index < text.length) {

            let visibleText =
                text.substring(0, index + 1);


            /*
             Convertimos los saltos de línea
             en saltos HTML.
            */

            visibleText =
                visibleText.replace(/\n/g, "<br>");


            message.innerHTML =
                visibleText +
                '<span class="cursor"></span>';


            index++;


            /*
             Pausa ligeramente cuando
             encontramos un punto.
            */

            let pausa = velocidad;


            if (
                text[index - 1] === "." ||
                text[index - 1] === "!"
            ) {

                pausa = 120;

            }


            setTimeout(escribir, pausa);

        }

        else {

            /* Quitamos el cursor */

            message.innerHTML =
                text.replace(/\n/g, "<br>");


            /* Aparece la firma */

            setTimeout(() => {

                signature.classList.add("show");

            }, 800);


            /* Aparece la posdata */

            setTimeout(() => {

                postscript.classList.add("show");

            }, 2300);

        }

    }


    escribir();

}