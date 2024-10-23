const frases = [
    { texto: "Siempre hay luz detrás de las nubes más oscuras.", explicacion: "En la vida, las dificultades a menudo parecen insuperables, pero detrás de cada momento difícil, hay una oportunidad de crecimiento. La luz simboliza la esperanza que eventualmente disipa la oscuridad, recordándonos que incluso los peores momentos son temporales y que la claridad siempre regresa." },
    { texto: "Los tiempos difíciles no duran, pero las personas fuertes sí.", explicacion: "Las adversidades son pasajeras, pero la fortaleza que desarrollamos al enfrentarlas permanece con nosotros. Es a través de los desafíos que descubrimos nuestra verdadera resiliencia, y esta capacidad para resistir y adaptarnos es lo que nos define a largo plazo." },
    { texto: "No te rindas, el principio siempre es lo más difícil.", explicacion: "Los inicios son complicados porque todo es desconocido e incierto. Superar el primer obstáculo requiere valentía, pero una vez que tomas impulso, cada paso se vuelve más natural. La persistencia al comienzo es clave para desatar todo el potencial que tienes dentro." },
    { texto: "Eres más fuerte de lo que piensas.", explicacion: "A menudo subestimamos nuestras capacidades, especialmente cuando enfrentamos desafíos. Sin embargo, la fortaleza real no siempre se revela hasta que estamos bajo presión. Descubrir tu fortaleza interior es un proceso que solo se da cuando te atreves a probar tus propios límites." },
    { texto: "Cada día es una nueva oportunidad para cambiar tu vida.", explicacion: "Cada amanecer trae consigo una nueva página en blanco. No estamos atados a nuestro pasado, y cada día es una oportunidad para reescribir nuestra historia. El presente es donde reside el poder para transformar nuestro futuro." },
    { texto: "Lo que hoy parece un sacrificio, mañana será tu mayor logro.", explicacion: "El esfuerzo que realizamos hoy puede parecer agotador o infructuoso, pero es la semilla que, con el tiempo, florecerá en nuestros logros más grandes. A largo plazo, los sacrificios actuales son los cimientos de nuestras futuras victorias." },
    { texto: "La esperanza es el motor que nos mantiene en movimiento.", explicacion: "La esperanza es la fuerza silenciosa que nos impulsa a seguir adelante incluso cuando no tenemos garantías de éxito. Es esa pequeña chispa que nos mantiene luchando, porque sabemos que algo mejor es posible si seguimos intentando." },
    { texto: "Sigue caminando, aunque el camino parezca interminable.", explicacion: "El progreso a menudo es lento y lleno de obstáculos, pero la clave es la constancia. Aunque no veamos el final inmediato, cada paso que damos nos acerca a nuestras metas. Es la suma de pequeños avances lo que finalmente nos lleva al destino." },
    { texto: "No importa cuántas veces caigas, lo importante es levantarse.", explicacion: "Caer es inevitable en la vida. Lo que realmente importa no es la caída en sí, sino la capacidad de levantarse, aprender y seguir adelante. Cada vez que nos recuperamos, nos hacemos más fuertes y más sabios." },
    { texto: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.", explicacion: "El éxito no llega de un gran esfuerzo aislado, sino de la acumulación de acciones constantes y dedicadas a lo largo del tiempo. La disciplina y la perseverancia diaria son las que construyen grandes logros." },
    { texto: "Las mejores cosas llegan a quienes nunca dejan de intentarlo.", explicacion: "El verdadero éxito es el resultado de la persistencia. Las oportunidades y logros no siempre llegan en el primer intento, pero aquellos que siguen luchando, a pesar de las derrotas, son los que finalmente logran lo que desean." },
    { texto: "La vida es 10% lo que te ocurre y 90% cómo reaccionas.", explicacion: "No siempre podemos controlar las circunstancias externas, pero sí tenemos el poder de decidir cómo enfrentarlas. Nuestra actitud ante los desafíos define nuestra experiencia de la vida más que los propios eventos." },
    { texto: "Si puedes soñarlo, puedes lograrlo.", explicacion: "Los sueños son las semillas de la realidad. Lo que puedes imaginar es un reflejo de lo que puedes alcanzar. Si visualizas un futuro mejor y trabajas para ello, los sueños pueden convertirse en metas concretas." },
    { texto: "Los sueños no tienen fecha de caducidad. Respira hondo y sigue adelante.", explicacion: "No importa cuántas veces falles o cuánto tiempo tome, siempre puedes retomar el camino hacia tus sueños. La perseverancia no tiene límite de tiempo y cada intento te acerca más a lo que realmente deseas." },
    { texto: "Tu único límite es el que te pones a ti mismo.", explicacion: "A menudo, nuestras barreras más grandes no están en el mundo exterior, sino en nuestra mente. Las dudas y miedos internos son las que frenan nuestro potencial. Cuando superamos estos límites autoimpuestos, descubrimos que somos capaces de mucho más de lo que imaginamos." },
    { texto: "No te preocupes por las caídas, preocúpate por no levantarte.", explicacion: "El miedo a fallar es natural, pero lo que realmente debería preocuparnos es no tener la voluntad de levantarnos después. Cada caída es una oportunidad para aprender, y levantarse es lo que define el verdadero coraje." },
    { texto: "Cada paso hacia adelante es un paso hacia tus sueños.", explicacion: "Aunque el progreso pueda parecer lento o insignificante, cada pequeño paso te acerca a tus objetivos. Es la acumulación de estos pasos lo que eventualmente te llevará a donde deseas estar." },
    { texto: "Nunca es demasiado tarde para ser lo que siempre quisiste ser.", explicacion: "El tiempo es relativo cuando se trata de cumplir tus sueños. No importa la edad o las circunstancias, siempre hay una oportunidad para cambiar el rumbo de tu vida y alcanzar tus metas." },
    { texto: "El fracaso es solo una lección disfrazada.", explicacion: "Lo que percibimos como fracaso es, en realidad, una forma de aprendizaje. Cada error nos brinda la oportunidad de mejorar, y es a través de estos aprendizajes que nos acercamos al éxito verdadero." },
    { texto: "Incluso la noche más oscura terminará con el amanecer.", explicacion: "Los momentos más difíciles no duran para siempre. Siempre hay un nuevo comienzo al final de cada desafío. La esperanza es esa luz al final del túnel que nos recuerda que la oscuridad es temporal." },
    { texto: "La esperanza es la chispa que enciende el fuego de la acción.", explicacion: "La esperanza es lo que nos impulsa a actuar. Es esa creencia en un futuro mejor lo que nos motiva a tomar medidas, y la acción, a su vez, es lo que transforma la esperanza en realidad." },
    { texto: "El esfuerzo de hoy será la sonrisa de mañana.", explicacion: "Aunque el esfuerzo actual puede parecer arduo, es la base sobre la cual se construye el éxito futuro. Las recompensas llegarán, y cuando lo hagan, mirarás atrás y sonreirás al ver lo que has logrado." },
    { texto: "No subestimes el poder de un pequeño paso hacia adelante.", explicacion: "A veces, el cambio comienza con una sola acción. Incluso el gesto más pequeño puede desencadenar una cadena de eventos que eventualmente te llevará hacia grandes resultados." },
    { texto: "A veces, lo que parece un final es en realidad un nuevo comienzo.", explicacion: "Cuando algo termina, puede parecer el cierre definitivo, pero muchas veces es solo la puerta que se cierra para que otra mejor se abra. Cada final contiene dentro de sí el germen de un nuevo comienzo." },
    { texto: "No importa lo lento que avances, siempre y cuando no te detengas.", explicacion: "El progreso no siempre es rápido, pero lo importante es seguir moviéndote. La constancia, más que la velocidad, es lo que asegura que eventualmente llegarás a tu destino." },
    { texto: "El futuro pertenece a quienes creen en la belleza de sus sueños.", explicacion: "Los sueños son el mapa que guía el futuro. Aquellos que confían en sus visiones y trabajan hacia ellas son los que terminan creando el mundo que imaginaron." },
    { texto: "Todo gran logro comienza con la decisión de intentarlo.", explicacion: "El primer paso hacia cualquier éxito es tomar la decisión de empezar. El compromiso inicial es lo que abre la puerta a todas las posibilidades futuras." },
    { texto: "Las estrellas no pueden brillar sin oscuridad.", explicacion: "Las dificultades en la vida actúan como el contraste necesario para que nuestras virtudes y fortalezas brillen. Es en la oscuridad donde descubrimos nuestro verdadero potencial." },
    { texto: "Cada fracaso es una oportunidad para empezar de nuevo con más sabiduría.", explicacion: "Después de cada error, obtenemos un conocimiento que nos hace más sabios. El fracaso no es el fin, sino una parte esencial del aprendizaje que nos prepara para futuros éxitos." },
    { texto: "El cambio comienza cuando decides que lo mereces.", explicacion: "La transformación personal inicia cuando te das cuenta de que eres digno de algo mejor. Aceptar que mereces un cambio es el primer paso para crear una nueva realidad." },
    { texto: "Sé paciente. A veces el camino correcto no es el más rápido.", explicacion: "La paciencia es crucial en la búsqueda del éxito. Aunque el camino más largo puede parecer frustrante, a menudo es el que ofrece las lecciones y experiencias más valiosas." },
    { texto: "Eres capaz de superar cualquier obstáculo que la vida te ponga.", explicacion: "Todos enfrentamos desafíos, pero dentro de nosotros yace la fortaleza necesaria para superarlos. Cada obstáculo es una prueba que revela la capacidad infinita que tenemos para adaptarnos y triunfar." },
    { texto: "No estás definido por tus fracasos, sino por cómo te recuperas de ellos.", explicacion: "Lo que realmente define tu carácter no es cuántas veces fallas, sino cómo respondes a esos fallos. La verdadera medida del éxito radica en la capacidad de levantarse tras cada caída." },
    { texto: "A veces, la única forma de seguir adelante es simplemente no detenerse.", explicacion: "En momentos de incertidumbre o dificultad, lo más importante es no rendirse. Aun cuando no veas el camino claramente, avanzar con determinación te llevará eventualmente a donde necesitas estar." },
    { texto: "Incluso las olas más grandes eventualmente llegan a la orilla.", explicacion: "Las tormentas más intensas de la vida siempre terminan. La adversidad no dura para siempre, y con el tiempo, la calma regresa y la normalidad se restablece." },
    { texto: "Nunca dudes de ti mismo; eres capaz de cosas extraordinarias.", explicacion: "La autoconfianza es el cimiento de todos los grandes logros. Al creer en ti mismo, desbloqueas un poder interno que te permite superar límites y alcanzar alturas que parecían imposibles." },
    { texto: "La fuerza no viene de lo que puedes hacer, sino de superar lo que una vez creíste imposible.", explicacion: "El verdadero poder se descubre cuando enfrentas lo que antes pensabas que no podías hacer. Superar tus propias expectativas y romper barreras personales es la esencia de la fortaleza interior." },
    { texto: "Sigue tu camino, incluso si al principio parece el más difícil.", explicacion: "A menudo, los caminos que parecen más complicados al inicio son los que llevan a los destinos más gratificantes. Las dificultades iniciales son solo pruebas que fortalecen tu determinación para lograr algo verdaderamente valioso." },
    { texto: "El mayor éxito viene después de los mayores desafíos.", explicacion: "Las recompensas más grandes a menudo están reservadas para aquellos que han pasado por las pruebas más difíciles. Los desafíos son los que preparan el terreno para los logros más significativos." },
    { texto: "Tu historia aún no ha terminado; el próximo capítulo puede ser el mejor.", explicacion: "No dejes que un momento difícil defina toda tu vida. Siempre tienes la oportunidad de escribir un nuevo capítulo, y lo que venga a continuación puede ser lo mejor que hayas vivido." },
    { texto: "A veces es necesario caer para recordar cómo volar.", explicacion: "Las caídas nos recuerdan nuestra vulnerabilidad, pero también nos preparan para resurgir con más fuerza. Cada tropiezo es una oportunidad para reconectar con nuestra capacidad de elevarnos más alto que antes." },
    { texto: "Las tormentas hacen que los árboles tengan raíces más profundas.", explicacion: "Los desafíos fortalecen nuestro carácter y nos hacen más resistentes. Como los árboles que se aferran al suelo durante una tormenta, cada dificultad nos arraiga más profundamente en nuestras convicciones y fortalezas." },
    { texto: "Cada día es una nueva página en tu libro; escribe una historia que te haga sentir orgulloso.", explicacion: "El pasado no puede ser reescrito, pero cada día es una nueva oportunidad para construir una historia que ames. Eres el autor de tu vida, y cada elección que haces define el legado que dejarás." },
    { texto: "Cuando sientas que no puedes más, recuerda todo lo que ya has superado.", explicacion: "En momentos de duda o cansancio, es útil recordar los obstáculos que ya has superado. Estas victorias pasadas son una prueba de tu capacidad para enfrentarte a nuevos retos y seguir adelante." },
    { texto: "Incluso las noches más largas tienen un amanecer esperando.",explicacion: "Las dificultades son temporales. Por más oscura que sea una situación, siempre habrá un nuevo comienzo esperándonos al otro lado del túnel." },
    { texto: "Cada pequeño paso es un avance hacia tus sueños.", explicacion: "No subestimes el poder de los pequeños progresos. Cada esfuerzo, aunque parezca insignificante, es una pieza que construye tu éxito futuro." },
    { texto: "Lo que siembras hoy, lo cosecharás mañana.", explicacion: "El trabajo duro y la dedicación que pones en el presente darán frutos en el futuro. Las semillas que plantas con constancia florecerán en recompensas." },
    { texto: "A veces, ser valiente significa dar un paso más, incluso cuando duele.", explicacion: "La verdadera valentía no es la ausencia de miedo, sino la capacidad de seguir adelante a pesar del dolor. Cada paso difícil te fortalece para lo que está por venir." },
    { texto: "No estás fallando, solo estás aprendiendo.", explicacion: "Cada tropiezo es una oportunidad de aprendizaje. No lo veas como un fracaso, sino como una lección que te prepara mejor para el futuro." },
    { texto: "El esfuerzo constante crea resultados extraordinarios.", explicacion: "Los grandes logros no ocurren de un día para otro. La dedicación diaria y el esfuerzo constante son las claves para alcanzar lo extraordinario." },
    { texto: "Cuando el viento no está a tu favor, ajusta tus velas.",explicacion: "La vida no siempre sigue nuestros planes, pero podemos adaptarnos. Ajustar nuestro enfoque y dirección nos permite seguir avanzando incluso en contra de la adversidad." },
    { texto: "El cambio empieza en el momento en que decides intentarlo.",explicacion: "Todo cambio importante en la vida comienza con una sola decisión: dar el primer paso. El poder de transformar tu vida está en tu voluntad de comenzar." },
    { texto: "El presente es el único momento que puedes cambiar.",explicacion: "No podemos alterar el pasado ni controlar el futuro, pero tenemos el poder de actuar en el presente. Cada decisión que tomas hoy moldea tu mañana." },
    { texto: "Dentro de ti hay una fuerza que aún no has descubierto.",explicacion: "La fortaleza interior a menudo se revela en los momentos más desafiantes. Eres mucho más capaz de lo que imaginas, solo necesitas enfrentarte a lo desconocido para descubrirlo." },
    { texto: "No puedes cambiar el viento, pero puedes cambiar tu actitud.",explicacion: "No podemos controlar todo lo que nos sucede, pero sí podemos controlar cómo respondemos a ello. Nuestra actitud determina cómo enfrentamos los desafíos." },
    { texto: "La paciencia es el arte de seguir creyendo cuando no ves resultados inmediatos.",explicacion: "A veces los logros tardan en llegar, pero eso no significa que no estés avanzando. La paciencia y la persistencia son la clave para lograr grandes cosas a largo plazo." },
    { texto: "Lo que parece el final del camino, a menudo es el comienzo de una nueva aventura.",explicacion: "A veces, lo que creemos que es un final es solo una nueva etapa que nos llevará a experiencias aún más gratificantes. Los finales también son oportunidades." },
    { texto: "Sigue nadando, incluso cuando no veas la orilla.",explicacion: "En la vida, habrá momentos en los que no verás claramente tu destino. Aun así, sigue adelante. La constancia eventualmente te llevará a donde necesitas estar." },
    { texto: "La verdadera fuerza no radica en no caer, sino en levantarse cada vez.",explicacion: "Todos enfrentamos caídas en la vida, pero lo que realmente nos define es nuestra capacidad de levantarnos una y otra vez, con más determinación que antes." },
    { texto: "Cree en la posibilidad de lo imposible.",explicacion: "Las barreras más grandes a menudo están en nuestra mente. Si crees que algo es posible, abrirás las puertas a oportunidades que antes parecían inalcanzables." },
    { texto: "El coraje es la chispa que enciende el fuego del cambio.",explicacion: "Nada en la vida cambia sin el primer acto de coraje. Cuando te atreves a enfrentar tus miedos, enciendes el poder transformador dentro de ti." },
    { texto: "El éxito no se mide por lo rápido que llegas, sino por cuánto disfrutas el camino.",explicacion: "La vida no es una carrera de velocidad, sino un viaje de crecimiento y aprendizaje. Disfrutar cada paso es lo que realmente te llevará al éxito." },
    { texto: "Las cicatrices son recordatorios de lo lejos que has llegado.",explicacion: "Cada cicatriz, ya sea física o emocional, es una marca de tu valentía y resistencia. Son testimonios de las batallas que has superado y de tu capacidad para seguir adelante." },
    { texto: "A veces, perder es la forma en que el universo te guía hacia algo mejor.",explicacion: "No todas las derrotas son finales. A veces, perder algo es la manera en que la vida nos redirige hacia algo más alineado con nuestro verdadero propósito." },
        { 
            texto: "Eres el autor de tu propia historia.",
            explicacion: "Cada día es una página en blanco y tú decides cómo llenarla. Tus acciones y decisiones escriben el libro de tu vida, y siempre puedes empezar un nuevo capítulo." 
        },
        { 
            texto: "El miedo es un compañero en el viaje, pero nunca debe ser tu guía.",
            explicacion: "Sentir miedo es natural, pero no debes permitir que controle tus decisiones. Acepta el miedo como parte del proceso y sigue adelante con determinación." 
        },
        { 
            texto: "Las montañas están hechas para ser escaladas.",
            explicacion: "Los obstáculos que enfrentas no están allí para detenerte, sino para que los superes. Cada montaña en tu vida es una oportunidad para alcanzar nuevas alturas." 
        },
        { 
            texto: "Tus sueños no tienen fecha de caducidad.",
            explicacion: "No importa cuántas veces hayas sido desviado del camino, siempre puedes volver a perseguir tus sueños. Nunca es tarde para empezar o volver a intentarlo." 
        },
        { 
            texto: "A veces, la mejor forma de avanzar es parar y respirar.",
            explicacion: "El progreso no siempre significa moverse rápidamente. A veces, detenerse, reflexionar y tomar un respiro es lo que te permite avanzar con más claridad y propósito." 
        },
        { 
            texto: "Lo que construyes en la oscuridad, brilla en la luz.",
            explicacion: "Los momentos más duros y silenciosos son aquellos en los que forjas tu verdadero carácter. Todo el trabajo y esfuerzo detrás de escena saldrá a la luz en el momento adecuado." 
        },
        { 
            texto: "Tu mejor yo está siempre en proceso de creación.",
            explicacion: "Nunca dejarás de crecer y evolucionar. Cada día es una nueva oportunidad para mejorar, aprender y acercarte a la mejor versión de ti mismo." 
        },
        { 
            texto: "El camino hacia el éxito está pavimentado con caídas y levantadas.",
            explicacion: "No existe éxito sin dificultades. Cada caída es una parte esencial del viaje, y cada vez que te levantas, te haces más fuerte y más capaz." 
        },
        { 
            texto: "Cada día es una nueva oportunidad para comenzar de nuevo.",
            explicacion: "El pasado no define tu futuro. Cada amanecer te da la oportunidad de reinventarte y seguir avanzando hacia tus metas con una nueva perspectiva." 
        },
        { 
            texto: "El dolor es temporal, pero el orgullo por haberlo superado es eterno.",
            explicacion: "Las dificultades que enfrentas en el presente no durarán para siempre. Pero la satisfacción de haberlas superado permanecerá contigo, recordándote tu fuerza." 
        },
        { 
            texto: "Las grandes cosas comienzan con pequeños actos de valentía.",
            explicacion: "A veces, solo dar el primer paso es el acto más valiente que puedes hacer. Cada gran logro tiene sus raíces en pequeños actos que, juntos, crean algo increíble." 
        },
        { 
            texto: "El éxito no es la ausencia de fracasos, es la resistencia ante ellos.",
            explicacion: "Los fracasos no son el fin, son solo parte del proceso. Lo que te lleva al éxito es la persistencia y la capacidad de seguir adelante a pesar de los obstáculos." 
        }
];

// Mostrar frases al hacer clic en el botón
document.getElementById('generar-frase').addEventListener('click', function() {
    const indice = Math.floor(Math.random() * frases.length);
    document.getElementById('frase').textContent = frases[indice].texto;
    document.getElementById('explicacion').textContent = frases[indice].explicacion;
});