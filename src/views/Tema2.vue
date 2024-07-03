<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Sistemas de información

    .row.justify-content-center 
      .col-lg-5.col-md-10.col-12.mb-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/1.png' alt='Imagen decoractiva')
      .col-lg-7.col-md-10.col-12
        p(data-aos="fade-left") Las medidas de seguridad de la información son indispensables en cualquier empresa. Como uno de los activos más valiosos es la información, es importante tener claridad que día a día se ven diferentes ataques y vulnerabilidades que amenazan la confidencialidad de los datos en las empresas.
        p(data-aos="fade-left") La seguridad en la información ha cobrado importancia en los últimos años; en el tema de calidad se han estandarizado los procesos y en la seguridad informática y de la información se han implementado algunos controles y planes, tal como se explica a continuación.
      

    .container.py-2.fondo-1.mb-5
      .row.justify-content-center
        .col-lg-10.col-12.mb-5
          .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
            h5 Figura 6.
            span <i>Estandarización de procesos.</i> 
          figure(data-aos="zoom-in")
            img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/2.svg' alt='Imagen que hace referencia a la importancia de la Norma ISO 27000 en la aparición de los conceptos de Gestión en Sistemas de Seguridad Informática y de la Información (SGSI).')
            img.d-block.d-md-none(src='@/assets/curso/temas/tema2/2A.svg' alt='Imagen que hace referencia a la importancia de la Norma ISO 27000 en la aparición de los conceptos de Gestión en Sistemas de Seguridad Informática y de la Información (SGSI).')
        .col-lg-10.col-12
          .cajon.color-secundario.p-4.mb-4(data-aos="fade-right") 
            p En la actualidad, la mayor parte de la información reside en servidores, redes de información y almacenamientos como la nube, los discos extraíbles y <i>backups</i>, enmarcados dentro de lo que se conoce como sistemas de información. Dichos sistemas de información están sujetos a vulnerabilidades, ataques informáticos, riesgos e inseguridades, tanto dentro de la propia organización como desde fuera.

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 <i>Software</i> malicioso
    p.mb-3(data-aos="fade-left") Más conocido como <i>“malware”</i>, es un <i>software</i> diseñado por un tercero con la única finalidad de obtener acceso no autorizado a un equipo para robar información o simplemente dañarlo. En la actualidad existen diferentes tipos de <i>malware</i>: <i>spyware</i>, registradores de pulsaciones, virus, gusanos, etc. En el siguiente video se explica en qué consiste este tipo de <i>software</i> y cómo se puede evitar en un inicio.

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/JJMqkRYFdc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Herramientas de seguridad
    
    .row.justify-content-center 
      .col-lg-7.col-md-10.col-12
        p(data-aos="fade-left") La seguridad informática y la seguridad de la información están encargadas de proteger los datos contra robo de información, acceso no autorizado, obstaculización al sistema informático, manipulación y/o eliminación de datos. Cuando se habla de procesos empresariales impulsados en la transformación digital con tecnología de punta se entiende que están expuestos a diferentes vulnerabilidades, amenazas y ataques informáticos dirigidos a la seguridad y la privacidad de la información. Mediante la Norma ISO 27001, la implementación del SGSI sigue el modelo Planificar – Hacer – Verificar – Actuar para la mejora continua de los procesos.
        p(data-aos="fade-left") Sin embargo, la seguridad para las empresas es un tema cada vez más crítico y de preocupación constante, debido a que los ciberataques pueden ser tan catastróficos como un robo, explosión o un incendio. Para prevenir estos ataques informáticos se hace necesario el uso de una poderosa infraestructura de TI que ayude a detectar y frenar amenazas.
      .col-lg-5.col-md-10.col-12.mb-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/3.png' alt='Imagen decoractiva')

          .row.justify-content-center
      TabsC.color-acento-botones
        .py-3.py-md-4(titulo="<i>Software </i>Antivirus")
          .row
            .col-lg-5.col-md-6.col-10
              figure
                img(src='@/assets/curso/temas/tema2/4.svg', alt='Imagen decorativa')
            .col-lg-7.col-md-6.mb-4.mb-md-0.col-12
              p Todos los computadores que estén conectados a una red interna o a Internet deben contar con un antivirus gratuito o pago, pero que sea confiable. Estos programas permiten contar con medidas de protección efectivas cuando el equipo se encuentre expuesto a <i>software</i> malicioso o a cualquier otro tipo de <em>malware</em>. Estos programas ofrecen la oportunidad de eliminarlo por completo o poner en estado de cuarentena.
              p Kaspersky, Avast, Nod32, McAfee, son algunas de las posibilidades que se pueden encontrar en el mercado actual; lo más importante es que cualquier solución de antivirus en la que el usuario quiera confiar debe tener la certeza que se adapte a las necesidades de seguridad y cuentan con actualizaciones constantes, debido a que los <em>malware</em> están en continua evolución.
        .py-3.py-md-4(titulo="<i>Firewall </i>perimetral de red")
          .row
            .col-lg-5.col-md-6.col-10
              figure
                img(src='@/assets/curso/temas/tema2/5.svg', alt='Imagen decorativa')
            .col-lg-7.col-md-6.mb-4.mb-md-0.col-12
              p Como su nombre lo indica, hace la función de una pared de bloqueo. Es un sistema cuya función es prevenir y proteger lo privado de ataques de otras redes.
              p Su funcionamiento es sencillo: escanea los paquetes de red, permitiéndoles o bloqueándolos según las reglas definidas por un administrador.

        .py-3.py-md-4(titulo="Servidor <em>proxy</em>")
          .row
            .col-lg-5.col-md-6.col-10
              figure
                img(src='@/assets/curso/temas/tema2/6.svg', alt='Imagen decorativa')
            .col-lg-7.col-md-6.mb-4.mb-md-0.col-12
              p Un <em>proxy</em> es un servidor, puede ser un programa o dispositivo físico, que actúa de intermediario entre conexiones del navegador e Internet, filtrando todos los paquetes entre ambos.
              p Asimismo, establece un sistema de autentificación, que limita el acceso a la red externa, por lo cual, se pueden generar los registros sobre sitios, visitas y demás datos de navegación.
        .py-3.py-md-4(titulo="Cifrado de punto final o <i>end point disk encryption</i>")
          .row
            .col-lg-5.col-md-6.col-10
              figure
                img(src='@/assets/curso/temas/tema2/7.svg', alt='Imagen decorativa')
            .col-lg-7.col-md-6.mb-4.mb-md-0.col-12
              p Es un proceso de codificación de datos para que no pueda ser leído o utilizado por nadie que no tenga la clave de descifrado correcta.
              p En esencia, protege los sistemas operativos de la instalación de archivos de arranque corruptos, bloqueando los archivos almacenados en computadores, servidores, entre otros puntos finales.

        .py-3.py-md-4(titulo="Escáner de vulnerabilidades")
          .row
            .col-lg-5.col-md-6.col-10
              figure
                img(src='@/assets/curso/temas/tema2/8.svg', alt='Imagen decorativa')
            .col-lg-7.col-md-6.mb-4.mb-md-0.col-12
              p Es una de las herramientas de seguridad en sistemas informáticos fundamentales en las empresas de cualquier tamaño. Consiste en un <i>software</i> que se encarga de detectar, analizar y gestionar los puntos débiles del sistema.
              p Gracias a esta plataforma se puede mantener controlada la exposición de los recursos empresariales a las amenazas de ciberseguridad y sus posibles consecuencias. Además, permite alertar en tiempo real, lo que ayuda a la solución de problemas de forma oportuna y sin comprometer la continuidad del negocio.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Políticas de usuario
    
    p(data-aos="fade-left") Cuando una empresa está interesada en realizar un sistema exhaustivo de gestión de seguridad de la información debe iniciar documentando procesos y conociendo cómo opera la misma, también debe revisar el manual de funciones de cada empleado; esto es fundamental al empezar a aplicar el ciclo PHVA.
    p(data-aos="fade-left") Asimismo, se hace necesario conocer los procesos digitales críticos en la organización, luego detalladamente, analizar toda la información para implementar controles que puedan proteger los procesos implementados ante amenazas cibernéticas, las cuales se podrán detectar si son de carácter interno o externo.

    .row.justify-content-center
      .col-md-10.col-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso//temas/tema2/9.png')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4
            p.mb-0 Las amenazas que están en Internet no son la causa de un ser humano con intenciones maliciosas, si no de los mismos empleados, que al no estar capacitados pueden descargar programas que vienen con troyanos o sin intención maliciosa que pueden mover un directorio o archivo.
    p.mb-4(data-aos="fade-left") De ahí la importancia de revisar también las políticas de usuario por el departamento TI de la organización, las cuales describen y establecen las reglas o requisitos que se deben tener en cuenta en los distintos procedimientos de uso en las cuentas del sistema de información de la empresa, entre ellas se encuentran las siguientes:

    .row.justify-content-center
      .col-lg-10.col-12.d-none.d-sm-none.d-md-block
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/10.svg', alt='Imagen decorativa')
          .tarjeta.color-acento-contenido-x.p-3(x="60%" y="16%" numero="+")
            .h5.mb-2 Proteger los equipos
            p Mantener actualizado el sistema operativo y el antivirus es fundamental porque corrigen agujeros de seguridad.
          .tarjeta.color-acento-contenido-x.p-3(x="68%" y="53%" numero="+")
            .h5.mb-2 No descargar contenido pirata
            p Descargar música, libros, películas, videos, <i>software</i> de sitios recomendables, siempre tener cuidado con páginas poco conocidas.
          .tarjeta.color-acento-contenido-x.p-3(x="59.5%" y="87%" numero="+")
            .h5.mb-2 Evitar dar datos personales
            p Mantener la cautela y desconfianza en redes sociales, no compartir datos con contactos o perfiles sospechosos, no aceptar sugerencias o amigos no conocidos.
          .tarjeta.color-acento-contenido-x.p-3(x="40.5%" y="87%" numero="+")
            .h5.mb-2 Contraseñas fuertes
            p Números consecutivos, fechas de cumpleaños, nombre de nuestros hijos, equipo de fútbol favorito, son ejemplos de contraseñas poco seguras.
            p Se recomienda usar contraseñas cambiando letras mayúsculas y minúsculas, números y caracteres especiales, por ejemplo, AbgDho-9823*#.
          .tarjeta.color-acento-contenido-x.p-3(x="32%" y="50%" numero="+")
            .h5.mb-2 Utilizar protocolos de seguridad
            p Colocar una clave de acceso al computador o servidor, generar cuentas de usuario con contraseñas para equipos compartidos y bloquear el equipo cuando no se esté en frente de él, son buenos protocolos de seguridad.
          .tarjeta.color-acento-contenido-x.p-3(x="40.3%" y="16.2%" numero="+")
            .h5.mb-2 Realizar una copia de seguridad
            p Es importante no depender de una sola fuente de información, es recomendable tener copia de respaldo de nuestro equipo, algún disco duro externo o en la nube.
      .col-12.d-block.d-md-none
        figure
          img(src='@/assets/curso/temas/tema2/10b.svg', alt='') 
        .row.mt-4
          .col-12.mb-2
            .tarjeta.color-primario-x.p-3.mb-2
              .h5.mb-2 Proteger los equipos
              p.mb-0 Mantener actualizado el sistema operativo y el antivirus es fundamental porque corrigen agujeros de seguridad.
            .tarjeta.color-primario-x.p-3.mb-2
              .h5.mb-2 No descargar contenido pirata
              p.mb-0 Descargar música, libros, películas, videos, <i>software</i> de sitios recomendables, siempre tener cuidado con páginas poco conocidas.
            .tarjeta.color-primario-x.p-3.mb-2
              .h5.mb-2 Evitar dar datos personales
              p.mb-0 Mantener la cautela y desconfianza en redes sociales, no compartir datos con contactos o perfiles sospechosos, no aceptar sugerencias o amigos no conocidos.
            .tarjeta.color-primario-x.p-3.mb-2
              .h5.mb-2 Contraseñas fuertes
              p Números consecutivos, fechas de cumpleaños, nombre de nuestros hijos, equipo de fútbol favorito, son ejemplos de contraseñas poco seguras.
              p.mb-0 Se recomienda usar contraseñas cambiando letras mayúsculas y minúsculas, números y caracteres especiales, por ejemplo, AbgDho-9823*#.
            .tarjeta.color-primario-x.p-3.mb-2
              .h5.mb-2 Utilizar protocolos de seguridad
              p.mb-0 Colocar una clave de acceso al computador o servidor, generar cuentas de usuario con contraseñas para equipos compartidos y bloquear el equipo cuando no se esté en frente de él, son buenos protocolos de seguridad.
            .tarjeta.color-primario-x.p-3.mb-2
              .h5.mb-2 Realizar una copia de seguridad
              p.mb-0 Es importante no depender de una sola fuente de información, es recomendable tener copia de respaldo de nuestro equipo, algún disco duro externo o en la nube.
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Conservación de la información
    .row.justify-content-center 
      .col-lg-5.col-md-10.col-12.mb-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/11.png' alt='Imagen decoractiva')
      .col-lg-7.col-md-10.col-12
        p(data-aos="fade-left") De acuerdo con los nuevos requerimientos de la administración pública derivadas de la Ley de Transparencia, Ley de Protección de Datos y Ley General de Archivos, nace la necesidad de crear una directriz que permita a las entidades garantizar la accesibilidad y perdurabilidad de la información digital. De este modo, se genera el uso de diversos formatos y medios de almacenamiento digital, también surgen nuevas formas de buscar y analizar la información.
        p(data-aos="fade-left") La preservación digital de acuerdo con el Archivo General de la Nación (2018) aplica al documento electrónico de archivo de naturaleza digital con su medio correspondiente en cualquier etapa de su ciclo vital. Esta forma parte de los procesos de la gestión documental, específicamente del proceso de preservación a largo plazo e implica el establecimiento de acciones desde la planeación de la gestión documental hasta la disposición final de los documentos, tal como lo presenta el siguiente recurso.

    .row.justify-content-center
      .col-lg-10.col-12.d-none.d-sm-none.d-md-block
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/12.svg', alt='Imagen decorativa')
          .tarjeta.color-acento-contenido-x.p-3(x="21.3%" y="73.6%" numero="+")
            .h5.mb-2 Planeación
            p Está conformada por todas aquellas actividades administrativas que permiten la adecuada revisión y valoración de toda la información documental, teniendo en cuenta el contexto legal, técnico y funcional de la empresa.
          .tarjeta.color-acento-contenido-x.p-3(x="29.7%" y="27.8%" numero="+")
            .h5.mb-2 Producción
            p Se evalúan todos los documentos de la empresa, desde su creación, ingreso y categorización, sin olvidar su relevancia y funcionalidad en todos los procesos administrativos.
          .tarjeta.color-acento-contenido-x.p-3(x="41.2%" y="27.8%" numero="+")
            .h5.mb-2 Gestión y Trámite
            p Se analizan los documentos con base en su incidencia en los procesos internos y externos de la empresa. En este tercer paso se revisan a profundidad todos los trámites por los que debe pasar dicho archivo o documento.
          .tarjeta.color-acento-contenido-x.p-3(x="52.4%" y="27.8%" numero="+")
            .h5.mb-2 Organización
            p Se abarcan todas las operaciones técnicas de gestión documental. Se establecen los elementos de categorización, serie documental, valorización, tiempo de almacenamiento, departamento al que pertenece, tipo de archivo, entre otros.
          .tarjeta.color-acento-contenido-x.p-3(x="63.4%" y="27.8%" numero="+")
            .h5.mb-2 Transferencia
            p Aquí se implementan las políticas de transferencia a los documentos en su fase de archivo.
          .tarjeta.color-acento-contenido-x.p-3(x="74.6%" y="27.8%" numero="+")
            .h5.mb-2 Disposición de Documentos
            p Aquí se consideran todos los procesos de selección y valoración del archivo o documento, todo en beneficio de su conservación. La adecuada disposición de documentos permite el seguimiento de todos los ciclos de vida de cada archivo, con el único fin de darle un tratamiento eficaz, lo que además sirve, posteriormente, para establecer los protocolos de seguridad para su eliminación y destrucción.
          .tarjeta.color-acento-contenido-x.p-3(x="74.6%" y="53.8%" numero="+")
            .h5.mb-2 Valoración
            p Se implementa el procedimiento en el que se determinarán los valores primarios y secundarios de los diferentes archivos o documentos, los cuales ayudan a establecer su relevancia dentro de la empresa para la debida conservación y disposición final, temporal o definitiva.
          .tarjeta.color-acento-contenido-x.p-3(x="74.6%" y="67.8%" numero="+")
            .h5.mb-2 Preservación a Largo Plazo
            p Se identifican todos los procedimientos y requerimientos que se deben llevar a cabo durante todo el procedimiento de gestión documental, de manera que se pueda garantizar su preservación a largo plazo.
      .col-12.d-block.d-md-none
        figure
          img(src='@/assets/curso/temas/tema2/12A.svg', alt='') 
        .row.mt-4
          .col-12.mb-2
            .tarjeta.color-primario-x.p-3.mb-2
              .h5.mb-2 Planeación
              p.mb-0 Está conformada por todas aquellas actividades administrativas que permiten la adecuada revisión y valoración de toda la información documental, teniendo en cuenta el contexto legal, técnico y funcional de la empresa.
            .tarjeta.color-primario-x.p-3.mb-2
              .h5.mb-2 Producción
              p.mb-0 Se evalúan todos los documentos de la empresa, desde su creación, ingreso y categorización, sin olvidar su relevancia y funcionalidad en todos los procesos administrativos.
            .tarjeta.color-primario-x.p-3.mb-2
              .h5.mb-2 Gestión y Trámite
              p.mb-0 Se analizan los documentos con base en su incidencia en los procesos internos y externos de la empresa. Es en este tercer paso se revisan a profundidad todos los trámites por los que debe pasar dicho archivo o documento.
            .tarjeta.color-primario-x.p-3.mb-2
              .h5.mb-2 Organización
              p.mb-0 Se abarcan todas las operaciones técnicas de gestión documental. Se establecen los elementos de categorización, serie documental, valorización, tiempo de almacenamiento, departamento al que pertenece, tipo de archivo, entre otros.
            .tarjeta.color-primario-x.p-3.mb-2
              .h5.mb-2 Transferencia
              p.mb-0 Aquí se implementan las políticas de transferencia a los documentos en su fase de archivo.
            .tarjeta.color-primario-x.p-3.mb-2
              .h5.mb-2 Disposición de Documentos
              p.mb-0 Aquí se consideran todos los procesos de selección y valoración del archivo o documento, todo en beneficio de su conservación. La adecuada disposición de documentos permite el seguimiento de todos los ciclos de vida de cada archivo, con el único fin de darle un tratamiento eficaz, lo que además sirve, posteriormente, para establecer los protocolos de seguridad para su eliminación y destrucción.
            .tarjeta.color-primario-x.p-3.mb-2
              .h5.mb-2 Valoración
              p.mb-0 Se implementa el procedimiento en el que se determinarán los valores primarios y secundarios de los diferentes archivos o documentos, los cuales ayudan a establecer su relevancia dentro de la empresa para la debida conservación y disposición final, temporal o definitiva.
            .tarjeta.color-primario-x.p-3.mb-2
              .h5.mb-2 Preservación a Largo Plazo
              p.mb-0 Se identifican todos los procedimientos y requerimientos que se deben llevar a cabo durante todo el procedimiento de gestión documental, de manera que se pueda garantizar su preservación a largo plazo.
    
    separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Gestión del sistema basado en riesgos
    
    p(data-aos="fade-left") La valoración del riesgo asegura que el SGSI logre los efectos previstos, donde con las mismas herramientas se puede prevenir o reducir efectos indeseados, logrando la mejora progresiva, integrando e implementando acciones en los procesos del sistema de gestión de la seguridad de la información. El siguiente recurso presenta visualmente el SGSI y la gestión del riesgo.

    .row.justify-content-center.mb-5
      .col-lg-6.col-12.mb-5
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
          h5 Figura 7.
          span <i>SGSI.</i> 
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/13.svg' alt='Imagen que contiene un esquema gráfico sobre lo que representa el SGSI y la gestión del riesgo.')
    .row.justify-content-center.mb-4
      .col-lg-5.col-md-10.col-12
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/14.png' alt='Imagen decoractiva')
      .col-lg-7.col-md-10.col-12
        .row
          .col-sm.mb-sm-0
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | SpiraPlan de inflectra.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Rastreados a 1.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | IsoMetrix.
            p(data-aos="fade-left") En la identificación de riesgos se debe recordar que la inseguridad se enuncia en procesos de la composición de los resultados de un suceso y la probabilidad de ocurrencia asociada. A continuación, se presentan las posibles fuentes de riesgos y consecuencias que pueden traer a la seguridad de la información de la organización.
    .row.justify-content-center.mb-5
      .col-lg-11.col-12
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 8.
          span <i>Riesgos y consecuencias.</i> 
        figure(data-aos="zoom-in")
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/15.svg' alt='Imagen que menciona las posibles fuentes de riesgos y consecuencias relacionadas con la seguridad de la información de la organización.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/15A.svg' alt='Imagen que menciona las posibles fuentes de riesgos y consecuencias relacionadas con la seguridad de la información de la organización.')
    p.mb-5(data-aos="fade-left") El impacto, por su parte, es la capacidad de saber el estado real de seguridad de un activo antes y después de materializar las amenazas. En un SGSI al concretarse una amenaza el activo cambia de estado, es decir, antes de producirse la amenaza se tiene un valor al activo y después que se efectúe la amenaza se tiene la diferencia entre el estado anterior y el posterior a la amenaza. Se clasifica según el tipo de impacto como:
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
          h5 Figura 9.
          span <i>Clasificación del impacto.</i> 
        figure(data-aos="zoom-in")
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/16.svg' alt='Imagen que menciona las posibles fuentes de riesgos y consecuencias relacionadas con la seguridad de la información de la organización.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/16A.svg' alt='Imagen que menciona las posibles fuentes de riesgos y consecuencias relacionadas con la seguridad de la información de la organización.')
    .row.justify-content-center.mb-3
      .col-lg-10.col-12
        .cajon.color-secundario.p-4.mb-4(data-aos="fade-right") 
          p Ahora bien, adicional a todo lo anterior, en la era de la cuarta revolución industrial las organizaciones migraron al teletrabajo, <i>home office</i> y nacieron consigo conceptos como nómadas digitales, donde un trabajador desde cualquier parte del mundo puede cumplir con sus obligaciones y funciones contractuales, generando nuevos riesgos organizacionales, por lo que es fundamental el análisis constante del mercado y sus tendencias para blindarse de la fuga de información y de posibles ataques cibernéticos.

    p(data-aos="fade-left") Dentro de las generalidades y aplicaciones está la capacidad de identificar las maneras de tratamiento de los riesgos, los tipos de control existentes y su integración dentro de las políticas y procedimientos para la estructuración de SGSI. Esta es importante porque con ella se pueden establecer los controles existentes y planear el punto de partida de las mejoras a implementar.
    p(data-aos="fade-left") En definitiva, con un SGSI la empresa conoce los riesgos a los que está sometida su información y los gestiona mediante una sistemática definida, documentada y conocida por todos, que se revisa y mejora constantemente.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
