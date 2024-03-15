<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Datos
    
    .row.justify-content-center 
      .col-lg-7.col-md-10.col-12
        p(data-aos="fade-left") Se denomina dato a cualquier objeto que pueda entregar información o significado para el lector. El dato puede ser manipulable en forma manuscrita o por medio de un computador, puede ser un caracter capturado desde un teclado, extraído de algún espacio de memoria en disco, almacenado en la memoria central, entre otras opciones. Los datos están conformados por algo más que números, pueden contener cualquier tipo de caracter bien sea alfabético, numérico, alfanumérico, símbolo especial, etc.
        p(data-aos="fade-left") Ahora bien, para que estos puedan representar información y por ende, significado, deben pasar por una serie de procesos de emparejamiento o integración con los demás datos para entregar un mensaje, tal como se aprecia en el siguiente recurso.
      .col-lg-5.col-md-10.col-12.mb-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/1.jpg' alt='Imagen decoractiva')

      .row.justify-content-center.mb-5
        .col-lg-4.col-md-8.col-10
          .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
            h5 Figura 1.
            span <i>Pasos para la clasificación.</i> 
        
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema1/2.svg' alt='Esquema que muestra el proceso para que se de la información, el cual debe tener: datos, procesos e información.')

    .row.justify-content-center.mb-5
      .cajon.color-secundario.p-4.mb-4(data-aos="fade-right")
        p  La calidad de la información se obtiene a partir del establecimiento de una metodología eficiente en recolección y almacenamiento de datos, para después implementar un instrumento con las preguntas adecuadas aplicando el análisis pertinente, con la finalidad de obtener conclusiones significativas para el tema que se desea abordar (glosarioit.com, 2022).

    .row.justify-content-center 
      .col-lg-5.col-md-10.col-12.mb-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/3.jpg' alt='Imagen decoractiva')
      .col-lg-7.col-md-10.col-12
        p(data-aos="fade-left") Los datos deben ser clasificados y organizados para lograr una categorización en busca de determinar la importancia o estrategia a implementar en las empresas. El sistema de clasificación aportará eficazmente en definir las prioridades y la variedad de acciones que se deben realizar sobre el universo de datos recopilados, a su vez mejora la calidad de la información eliminando aquellos datos poco significativos.
        p(data-aos="fade-left") La necesidad imperiosa de las empresas por crear una “cultura de datos” ha ido creciendo de manera acelerada a través del tiempo, dado que estas han comprendido el valor real que tienen en esa información. Muchas técnicas se han empezado a utilizar y están basadas en la seguridad de la información, el acceso transparente, la privacidad, la ética y la criticidad. Los pasos más comunes a seguir para clasificar los datos se pueden definir de esta manera:

    .row.justify-content-center.mb-5
      .col-lg-12.col-md-8.col-10
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
          h5 Figura 2.
          span <i>Pasos para la clasificación.</i> 
      
        figure.desktop(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/4.svg' alt='Imagen que describe los pasos más comunes a seguir para clasificar los datos.')
        figure.movil(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/5.svg' alt='Imagen que describe los pasos más comunes a seguir para clasificar los datos.')
      

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Clasificación
    
    p(data-aos="fade-left") Los datos se pueden clasificar de acuerdo con su tipo y estructura, dependiendo en qué categoría estén se pueden manipular mediante operaciones aritméticas o lógicas que darán como resultado la información que se quiere entregar.

    .row.justify-content-center.desktop
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/6.svg', alt='Imagen decorativa')
        .tarjeta.color-acento-botones.p-3(x="29.2%" y="24.9%" numero="+")
          .h5.mb-2 Complejo
          p Son datos compuestos por un par de datos reales y se caracterizan por representar números complejos. 
          p Por ejemplo, 2+3i, donde i es la parte imaginaria.
        .tarjeta.color-acento-botones.p-3(x="19.9%" y="41.5%" numero="+")
          .h5.mb-2 Cadena de caracteres (<i>string</i>)
          p Son datos formados por un conjunto de caracteres alfanuméricos delimitados por comilla simple o comillas dobles.
          p Por ejemplo, “Esto es una cadena”;  ‘Hola mundo 123’
        .tarjeta.color-acento-botones.p-3(x="13.8%" y="62%" numero="+")
          .h5.mb-2 Matrices
          p Son un conjunto de datos numéricos organizados para formar una matriz o un vector.
          p Por ejemplo, [1, 0, 7, 9] – vector fila con dimensión 4.
        .tarjeta.color-acento-botones.p-3(x="71%" y="24%" numero="+")
          .h5.mb-2 Enteros
          p Son los datos numéricos pertenecientes al subconjunto finito de números enteros. 
          p Por ejemplo, 1 ;  5 ;  -40 ;  0 ;  1300
        .tarjeta.color-acento-botones.p-3(x="78.8%" y="42.3%" numero="+")
          .h5.mb-2 Reales
          p Son los datos numéricos pertenecientes al subconjunto finito de números reales. Estos datos tienen la particularidad de contar con una parte entera y una parte decimal.
          p Por ejemplo, 0,34 ;  -9,87
        .tarjeta.color-acento-botones.p-3(x="86.5%" y="63%" numero="+")
          .h5.mb-2 Lógicos
          p Son los datos que pueden tomar solo dos valores lógicos: verdadero (true) o falso (false).
        .tarjeta.color-acento-botones.p-3(x="82%" y="83.8%" numero="+")
          .h5.mb-2 Caracteres
          p Son datos que pueden tomar diferentes valores numéricos, alfanuméricos o especiales. 
          p Por ejemplo,  A24k-32*;  -d8+PL/2

    .row.justify-content-center.mb-5
      .col-md-8.col-10
        figure.movil
          img(src='@/assets/curso/temas/tema1/7.svg', alt='Texto que describa la imagen')
    
    p.mb-5(data-aos="fade-left") De acuerdo con el tipo de datos y su estructura se puede realizar una serie de operaciones básicas o aritméticas (si se quiere obtener un resultado de un conjunto de variables) y operaciones de comparación (si el resultado deseado es una respuesta lógica -verdadero o falso-). En cualquier caso, se pueden combinar los dos tipos de operaciones, siempre que la estructura del dato así lo permita, es decir, no se puede sumar un dato tipo entero con un dato tipo lógico o elevar a una potencia un dato real con un dato <i>string</i>. A continuación se describe en qué consiste cada una de estas operaciones.

    .row.justify-content-center.mb-5
        .col-lg-6.col-md-8.col-10
          .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
            h5 Figura 3.
            span <i>Operaciones con datos.</i> 
        
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema1/8.svg' alt='Imagen que contiene un esquema explicativo sobre las operaciones aritméticas utilizadas para obtener datos y todo lo que ello requiere.')
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Variables
    p.mb-5(data-aos="fade-left") Es el nombre que se le da a una serie de caracteres con el fin de categorizar o interpretar de una forma más sencilla alguna información que se quiera estudiar, también pueden almacenar distintos tipos de datos: enteros, reales, matriciales, caracteres, etc. Las variables cuentan con instrucciones de asignación que sirven para almacenar ese valor del dato, por ejemplo, VARIABLE = EXPRESIÓN, donde el signo = significa “ALMACENAR EN”. En el siguiente recurso se presentan otros ejemplos de almacenamiento.
    .row.justify-content-center.mb-5
        .col-lg-6.col-md-8.col-10
          .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
            h5 Figura 4.
            span <i>Ejemplo de almacenamiento.</i> 
        
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema1/9.svg' alt='Imagen que contiene un esquema explicativo sobre las operaciones aritméticas utilizadas para obtener datos y todo lo que ello requiere.')
    p.mb-5(data-aos="fade-left") Las variables se pueden clasificar según el nivel de medida y según su influencia. Según su nivel de medida se pueden subdividir en cualitativas y cuantitativas, y según su influencia, pueden ser independientes o dependientes. En el recurso interactivo se explica en qué consiste cada una de estas.

    .row.justify-content-center
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/10.svg', alt='Imagen decorativa')
        .tarjeta.color-acento-botones.p-3(x="8.5%" y="5.2%" numero="+")
          .h5.mb-2 Variables cualitativas
          p Son las variables que expresan características y/o cualidades. Cada cualidad que se presente se denomina atributo o categoría. Las variables cualitativas pueden ser dicotómicas, es decir, solo toman dos valores, como falso o verdadero, sí o no, alto o bajo, hombre o mujer, etc., o también puede ser politómicas cuando pueden tomar tres o más valores, y se subcategorizan en ordinal y nominal.
        .tarjeta.color-acento-botones.p-3(x="12.7%" y="32.5%" numero="+")
          .h5.mb-2 Variable cualitativa ordinal
          p Toman distintos valores ordenados de acuerdo con una escala predefinida, donde no es necesario que los intervalos de medición sean uniformes, por ejemplo, regular, bueno, excelente.
        .tarjeta.color-acento-botones.p-3(x="37.5%" y="32.5%" numero="+")
          .h5.mb-2 Variable cualitativa nominal
          p Los valores de las variables indican una categoría o atributo y no necesariamente debe ser ordenable, como por ejemplo, nacionalidad, color de piel, religión.
        .tarjeta.color-acento-botones.p-3(x="58.2%" y="5%" numero="+")
          .h5.mb-2 Variables cuantitativas
          p Son las variables que se pueden expresar a través de cantidades numéricas, se categorizan como variables matemáticas. Las variables cuantitativas se pueden subcategorizar en discreta y continua.
        .tarjeta.color-acento-botones.p-3(x="62.5%" y="32.8%" numero="+")
          .h5.mb-2 Variable discreta
          p Es la variable que presenta valores enteros, no presenta interrupciones en su escala de valor, por ejemplo, el número de hijos (1, 2, 3, 4, 5), cantidad de dedos de la mano (1, 2, 3, 4, 5).
        .tarjeta.color-acento-botones.p-3(x="87.5%" y="32.8%" numero="+")
          .h5.mb-2 Variable continua
          p Es la variable que puede tomar un número infinito de valores entre dos valores aleatorios de una característica, por ejemplo, la altura de 3 amigos (1,74 m, 1,85 m, 1,92 m).
        .tarjeta.color-acento-botones.p-3(x="12.8%" y="83%" numero="+")
          .h5.mb-2 Variable independiente
          p Su valor no depende de otra variable. Es la característica que supone es la causa del fenómeno estudiado. Es la variable que determina el valor de la variable dependiente. En el plano cartesiano se ubica en el eje de las X o eje de abscisas, y se le asignan valores arbitrarios.
        .tarjeta.color-acento-botones.p-3(x="37.6%" y="83%" numero="+")
          .h5.mb-2 Variable dependiente
          p Su valor depende de los valores que tome la variable independiente. Es la característica que supone el efecto del fenómeno de estudio. En el plano cartesiano se ubica en el eje de las Y o eje de ordenadas, y se le asignan valores arbitrarios y toma valores como resultado de los valores arbitrarios de la variable independiente.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Analítica

    p.mb-5(data-aos="fade-left") En la actualidad existen procesos en las empresas que requieren ser optimizados y estos a su vez deben reflejar el análisis de la producción; de este modo, se puede realizar la comparación entre actividades realizadas por personas vs. las realizadas por las máquinas, teniendo como resultados conclusiones en cuanto a tiempo, desempeño y calidad de entrega del producto final. También permite conocer en qué épocas del año es más rentable producir cierto bien o servicio, para así estimar el tiempo de inicio de su producción.

    .row.justify-content-center.mb-3
      .col-md-10.col-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso//temas/tema1/11.png')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4
            p.mb-0 De esta forma si se quiere vender productos para el día de la madre es conveniente revisar cuál es el más vendido. Se puede identificar si los electrodomésticos ya no son tan importantes en estas fechas, si las madres prefieren rosas o visitar un restaurante, o si por el contrario prefieren celebrar en casa con una comida especial, además sería conveniente tener los datos de cuántas madres han fallecido en el año anterior y cuántas personas pasan ese día visitando a su ser querido en el cementerio, así se puede obtener la certeza sobre qué producto ofrecer y el lugar óptimo para vender.
    p(data-aos="fade-left") Todos los datos representan tendencias que ayudan e inciden en las condiciones del mercado. Cuando se sabe que hay un producto escaso o existen necesidades insatisfechas surge una posibilidad en el mercado para las empresas. 
    p.mb-5(data-aos="fade-left") En la analítica de datos se pueden encontrar diversos procesos que buscan dar respuesta en tiempo y alcance a las situaciones que se presentan en el día a día. Existen diferentes tipos de análisis que se pueden realizar, entre los que se destacan:

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-8.col-12
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/12.svg', alt='Imagen decorativa')
          .tarjeta.color-acento-botones.p-3(x="15.5%" y="35.4%" numero="+")
            .h5.mb-2 Análisis exploratorio
            p  Somete los datos a un proceso de investigación con tratamiento estadístico de resumen y representaciones gráficas, para conocer los datos y comprender qué se puede explorar con estos.
          .tarjeta.color-acento-botones.p-3(x="30.8%" y="59.5%" numero="+")
            .h5.mb-2 Análisis descriptivo
            p Explora los datos a través de una aproximación de análisis desde su descripción y diferentes perspectivas, sin una hipótesis previa para saber qué sucedió.
          .tarjeta.color-acento-botones.p-3(x="74%" y="16%" numero="+")
            .h5.mb-2 Análisis predictivo
            p Permite a través de análisis de datos predecir valores o respuestas a eventos que se estén estudiando.
          .tarjeta.color-acento-botones.p-3(x="85.2%" y="53.7%" numero="+")
            .h5.mb-2 Análisis prescriptivo
            p Ofrece evaluación a decisiones en escenarios que generan un resultado positivo a futuro.
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .cajon.color-secundario.p-4.mb-4(data-aos="fade-right")
          p  De acuerdo con las conclusiones que se obtienen del análisis de los datos, las empresas pueden generar una tendencia de su producto o servicio, maximizando su rentabilidad y penetración en el mercado.
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Normativa
    
    .row.justify-content-center.mb-3 
      .col-lg-7.col-md-10.col-12
        p(data-aos="fade-left") En Colombia las normas asociadas a la explotación de datos surgen por diferentes necesidades y objetivos, que requieren un alcance que no está directamente relacionado con la aplicabilidad del <i>big data</i>; sin embargo, es importante conocer que existen normas, decretos y leyes que respaldan y protegen la explotación de los datos.
        p(data-aos="fade-left") En el CONPES 3920 - Marco de la Política Nacional de Explotación de Datos el desarrollo de marcos normativos y políticas públicas se adaptan a todos los avances tecnológicos y responden de manera pertinente a los requerimientos de la sociedad; es por ello, que se ha convertido en una necesidad imperiosa el aprovechamiento óptimo y eficiente de los datos, que generan beneficios para todas las entidades cumpliendo con los requisitos de transparencia, divulgación de información y toma de decisiones.
      .col-lg-5.col-md-10.col-12.mb-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/13.jpg' alt='Imagen decoractiva')
    p.mb-5(data-aos="fade-left") El marco jurídico aplicable en Colombia para el aprovechamiento y recolección de datos está regido por la siguiente normativa.

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-8.col-12
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/14.svg', alt='Imagen decorativa')
          .tarjeta.color-acento-botones.p-3(x="8.3%" y="66.4%" numero="+")
            .h5.mb-2 Constitución Política de Colombia 1991
            p  Artículo 15 mediante el cual se establece el derecho que tienen las personas a conocer, actualizar y ratificar la información personal.
          .tarjeta.color-acento-botones.p-3(x="19.1%" y="28.5%" numero="+")
            .h5.mb-2 Ley 1273 de 2009
            p Modifica el código penal y crea como bien jurídico tutelado la protección de la información y de los datos.
          .tarjeta.color-acento-botones.p-3(x="50%" y="25.3%" numero="+")
            .h5.mb-2 Decreto 1377 de 2012
            p Reglamento aspectos relacionados con la titularidad del uso de la información para el tratamiento de sus datos personales.
          .tarjeta.color-acento-botones.p-3(x="86.5%" y="25.3%" numero="+")
            .h5.mb-2 Ley 1266 de 2008
            p Por medio de la cual se dictan las disposiciones generales de habeas data.
          .tarjeta.color-acento-botones.p-3(x="90%" y="67%" numero="+")
            .h5.mb-2 Ley 1581 de 2012
            p Principios y disposiciones que definen los derechos sobre los datos personales. Art 9. Exigencia de consentimiento previo del uso de datos personales.
    
    p.mb-5(data-aos="fade-left") La cantidad de datos que las entidades públicas recolectan y/o generan requieren la implementación de una adecuada gestión de la información para asegurar <b>la protección, almacenamiento y acceso de los mismos.</b> 
    
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .cajon.color-secundario.p-4.mb-4(data-aos="fade-right")
          p Es importante que las entidades públicas consideren el diseño e implementación de una arquitectura de almacenamiento de datos, que respalde la confidencialidad, integridad y disponibilidad de estos.
    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Herramientas de análisis
    .row.justify-content-center.mb-5 
      .col-lg-4.col-md-8.col-10
        figure
          img(src='@/assets/curso/temas/tema1/15.jpg', alt='Imagen decorativa')
      .col-lg-8.col-12
        p(data-aos="fade-left") El análisis de datos es un proceso que permite obtener conocimiento de la información subyacente de los datos, con el propósito de extraer conclusiones que contribuyan a tomar decisiones informadas. Sin la analítica de datos, empresas y organizaciones se encuentran limitadas a la hora de examinar sus resultados y determinar la dirección a seguir para tener mayores probabilidades de éxito.
        p(data-aos="fade-left") Existen herramientas que no implican realizar tareas de programación, dirigidas a usuarios sin conocimientos técnicos avanzados, y herramientas que presentan una mayor versatilidad, pero necesitan el manejo de lenguajes de programación, por lo que están dirigidas a usuarios con estos conocimientos.

    p.mb-5(data-aos="fade-left") A continuación se describen las <b>herramientas de análisis de datos para no programadores.</b>

    .row.justify-content-center.mb-5
      .col-lg-7.col-md-10.col-12
        .row.mb-5
          .col-md-12.mb-5.mb-md-0
            //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            LineaTiempoD.color-secundario
              p.text-small(numero="1" titulo="WEKA") Es una plataforma de software libre desarrollado por la Universidad de Waikato (Nueva Zelanda), que sirve para desarrollar minería de datos y aprendizaje automático mediante herramientas integradas de preparación, clasificación, regresión, agrupación, minería de reglas de asociación y visualización de datos. Weka está escrito en <i>Java</i> y se puede descargar en el siguiente enlace: https://www.cs.waikato.ac.nz/ml/weka/
              
              p.text-small(numero="2" titulo="KNIME") Es una plataforma para minería de datos que permite desarrollar modelos en un entorno gráfico. El software permite crear mediante mezcla, transformación, modelación y visualización de los datos de manera gráfica, también permite la producción para implementar, administrar, consumir e interactuar con todo el volumen de datos recopilados. KNIME tiene una versión de prueba que puede descargarse en: https://www.knime.com/downloads
              
              p.text-small(numero="3" titulo="ORANGE") Es un programa de código abierto que permite realizar minería de datos y análisis predictivo desarrollado por la Universidad de Ljubljana (Eslovenia). Permite crear flujos de trabajo de análisis de datos visualmente con una caja de herramientas grande y diversa. ORANGE puede descargarse en https://orangedatamining.com/
      .col-lg-5.col-md-8.col-10
        figure
          img(src='@/assets/curso/temas/tema1/16.svg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") Ahora se expondrán las <b>herramientas de análisis de datos para programadores.</b>

    .row.justify-content-center
      TabsC.color-acento-botones
        .py-3.py-md-4(titulo="<i>R (The R Project for statistical computing)</i>")
          .row
            .col-lg-5.col-md-6.col-10
              figure
                img(src='@/assets/curso/temas/tema1/17.svg', alt='Imagen decorativa')
                figcaption Tomado de HgDeviasse (2015)
            .col-lg-7.col-md-6.mb-4.mb-md-0.col-12
              p Es un entorno de software libre para computación estadística y gráficos. Es unos de los lenguajes más populares, debido a que cuenta con una amplia gama de librerías que incrementan sus funcionalidades. La comunidad de R-Studio mantiene actualizaciones constantes y respaldo continuo.
              p R puede ser descargado gratuitamente en https://www.r-project.org/
        .py-3.py-md-4(titulo="<i>Python</i>")
          .row
            .col-lg-5.col-md-6.col-10
              figure
                img(src='@/assets/curso/temas/tema1/18.svg', alt='Imagen decorativa')
                figcaption Tomado de 1840151sudarshan (2019)
            .col-lg-7.col-md-6.mb-4.mb-md-0.col-12
              p Es un lenguaje de alto nivel de programación interpretado, permite un trabajo rápido e integración de sistemas de manera eficaz. <i>Python</i> tiene una gran variedad de bibliotecas que permiten el desarrollo de análisis de datos, <i>machine learning</i> e inteligencia artificial de una manera sencilla, logrando explotar al máximo la información recopilada.
              p <i>Python</i> es un <i>software</i> de código abierto y puede descargarse en la página oficial https://www.python.org/

        .py-3.py-md-4(titulo="<i>GNU Octave</i>")
          .row
            .col-lg-5.col-md-6.col-10
              figure
                img(src='@/assets/curso/temas/tema1/19.svg', alt='Imagen decorativa')
                figcaption Tomado de Lutz 007 (2015)
            .col-lg-7.col-md-6.mb-4.mb-md-0.col-12
              p Es un programa y lenguaje de programación que permite realizar cálculos numéricos. GNU Octave es considerado el equivalente de <i>software</i> libre de MATLAB. Presenta una sintaxis orientada a las matemáticas con herramientas de visualización y trazado 2D/3D, y se ejecuta <i>GNU/Linux</i>, <i>macOS</i>, <i>BSD</i> y <i>Microsoft Windows</i>.
              p Por ser <i>software</i> libre se puede descargar una versión en su página oficial https://www.gnu.org/software/octave/index
        .py-3.py-md-4(titulo="<i>Microsoft Power BI</i>")
          .row
            .col-lg-5.col-md-6.col-10
              figure
                img(src='@/assets/curso/temas/tema1/20.svg', alt='Imagen decorativa')
                figcaption Tomado de Krauss (2019)
            .col-lg-7.col-md-6.mb-4.mb-md-0.col-12
              p Es una herramienta desarrollada por <i>Microsoft</i> que permite el análisis de datos, proporcionando visualización gráfica en el campo del <i>business</i> <i>intelligence</i>. Una de las grandes ventajas de <i>Power</i> <i>BI</i> es su integración con libros de <i>Excel</i>, lo cual permite ampliar el marco de trabajo desde lo más básico hacia lo más avanzado, además de tener un tablero de trabajo colaborativo para el seguimiento de objetivos personales y grupales.
              p Por ser desarrollado por <i>Microsoft</i> no es de versión libre, pero se puede descargar una versión de prueba en https://powerbi.microsoft.com/es-es/

        .py-3.py-md-4(titulo="SAS")
          .row
            .col-lg-5.col-md-6.col-10
              figure
                img(src='@/assets/curso/temas/tema1/21.svg', alt='Imagen decorativa')
                figcaption Tomado de Hennerfeind (2021)
            .col-lg-7.col-md-6.mb-4.mb-md-0.col-12
              p Es un <i>software</i> de solución para el análisis de datos. Permite explorar, analizar y visualizar datos independientemente de su fuente. SAS es muy usado en aplicaciones de redes sociales, <i>Web</i>, <i>marketing</i> <i>digital</i> que permite realizar o perfilar tipos de clientes para lograr predecir sus gustos y comportamiento de consumo.
              p Se puede obtener una versión de prueba en https://www.sas.com/es_co/home.html#

        .py-3.py-md-4(titulo="<i>Excel</i>")
          .row
            .col-lg-5.col-md-6.col-10
              figure
                img(src='@/assets/curso/temas/tema1/22.svg', alt='Imagen decorativa')
                figcaption Tomado de Ihsanaadil223 (2020)
            .col-lg-7.col-md-6.mb-4.mb-md-0.col-12
              p Es un <i>software</i> de hoja de cálculo desarrollado por <i>Microsoft</i>. <i>Excel</i> aprende patrones y organiza datos para el ahorro de tiempo. Permite el trabajo colaborativo en línea, presenta los datos de una forma convincente, con formato, minigráficos y tablas para una mejor interpretación y visualización. Quizá, la función más importante es su integración con <i>Power</i> <i>BI</i>.
              p Por ser desarrollado por <i>Microsoft</i> no es versión libre, pero se puede descargar una versión de prueba para el hogar o la empresa en https://www.microsoft.com/es-es/microsoft-365/excel       
            
    separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 <i>Big data</i>
    
    p.mb-5(data-aos="fade-left") El desarrollo de las Tecnologías de la Información y la Comunicación (TIC) y el aumento de la cobertura de Internet ha facilitado que en los últimos años se generen datos de manera exponencial y en diversas fuentes de información. El volumen, la velocidad y la variedad de los datos generados en este contexto inicialmente fue un reto tecnológico; pero con la aparición de nuevas técnicas y formas de almacenamiento, procesamiento, análisis y visualización se crearon las condiciones para aprovechar su potencial. Por medio de la datificación las elecciones de consumo, las preferencias individuales, colectivas y los aspectos de la vida diaria se han transformado en datos.

    .row.justify-content-center.mb-3
      .col-md-10.col-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso//temas/tema1/23.jpg')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4
            p.mb-0 El reto actual para los distintos gobiernos y organizaciones privadas consiste en reducir las barreras de tipo técnico, jurídico y organizacional que disminuyen el aprovechamiento de los datos para generar valor social y económico.

    .row.justify-content-center.mb-3 
      .col-lg-10.col-12
        .tarjeta.p-4.mb-3(style="background-color: #0C5E46")
          p(style="color: #ffff") En ese contexto los datos se han convertido en uno de los activos más importantes para el sector público en la medida en que aportan beneficios para tomar decisiones informadas. La adecuada gestión de los datos a lo largo de todo su ciclo de vida, desde su recopilación o generación, clasificación, almacenamiento, uso, compartición y reutilización, conlleva a extraer el valor de estos para crear un análisis descriptivo, predictivo o prescriptivo que permita diseñar nuevas estrategias, analizar con un enfoque más amplio problemáticas de carácter público y tomar decisiones. 
    
    p.mb-5(data-aos="fade-left") En el contexto actual uno de los habilitadores para la transformación digital es la explotación de los datos para aumentar el valor público de las entidades, de cara a la prestación de bienes y servicios para los ciudadanos.

    .row.justify-content-center.mb-3
      .cajon.color-secundario.p-4.mb-4(data-aos="fade-right")
        p En el sector público la explotación de datos suele referirse al uso de fuentes de datos no tradicionales y a las innovaciones en materia de datos, para que las soluciones gubernamentales tengan más capacidad de respuesta y sean más eficaces. Las entidades públicas tienen la oportunidad de aprovechar soluciones basadas en el <i>big</i> <i>data</i> para mejorar su productividad y reducir costos administrativos. Hoy el manejo de grandes bases de datos es una cuestión apremiante, especialmente en un momento en que muchos están preocupados por el papel de la información en las decisiones políticas. En el contexto actual, las entidades gubernamentales tienen que actuar como productoras, consumidoras y facilitadoras del <i>big</i> <i>data</i> (<i>World</i> <i>Bank</i> <i>Group</i>, 2017 , citado en DNP, 2020).

    p.mb-5(data-aos="fade-left") El <i>big</i> <i>data</i> es un fenómeno que se caracteriza por la generación de grandes volúmenes de datos, en diversas fuentes de información y a una rápida velocidad en su generación. El siguiente video desarrolla un poco más en qué consiste.

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.7 Confidencialidad

    p.mb-5(data-aos="fade-left") Una gobernanza de datos implementada de manera efectiva facilita el cumplimiento de la normatividad vigente en Colombia, en la medida en que se identifican roles y responsables para acceder a los datos se clasifican, organizan y documentan; luego, se definen de manera clara mecanismos de acceso para su uso y compartición y finalmente, se gestionan los riesgos relacionados con la confidencialidad y protección de la información.

    .row.justify-content-center.mb-3
      .col-md-10.col-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso//temas/tema1/24.png')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4
            p.mb-0 Todas las personas que intervengan en el tratamiento de datos personales que no tengan la naturaleza de públicos están obligadas a garantizar la reserva de la información, inclusive después de finalizada su relación con alguna de las labores que comprende el tratamiento, pudiendo solo realizar suministro o comunicación de datos personales cuando ello corresponda al desarrollo de las actividades autorizadas.

    .row.justify-content-center.mb-5
      .col-lg-7.col-md-10.col-12
        p(data-aos="fade-left") Ahora bien, dentro de ese vínculo la privacidad desde el diseño busca garantizar un correcto tratamiento de los datos en los procesos de inteligencia artificial, incluso antes de la materialización de los riesgos. Lo anterior conduce a que se use la privacidad como un factor relevante del diseño, la arquitectura de software o el algoritmo para fomentar el uso adecuado del tratamiento de los datos, porque la confidencialidad dentro del ciclo de vida del producto busca convertirse además en un modo de operación predeterminado para las organizaciones, en el que antes de recolectada la información se puedan adoptar medidas preventivas de diversa naturaleza que eviten fallas de seguridad, vulneración en los derechos de privacidad y confidencialidad, y el uso indebido del tratamiento de datos personales.
      .col-lg-5.col-md-8.col-10
        figure
          img(src='@/assets/curso/temas/tema1/25.svg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-left") Las medidas adoptadas para asegurar el tratamiento de los datos en la inteligencia artificial deben cumplir con los siguientes objetivos.

    .row.justify-content-center.mb-5
        .col-lg-6.col-md-8.col-10
          .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
            h5 Figura 5.
            span <i>Objetivos.</i> 
        
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema1/26.svg' alt='Imagen que menciona cinco objetivos que se deben tener en cuenta al momento de querer asegurar el tratamiento de los datos.')

    p.mb-5(data-aos="fade-left") Cuando las medidas siguen estos objetivos se puede establecer un tratamiento debido a los datos personales desde cualquier perspectiva o naturaleza de los datos, a pesar que dentro del desarrollo de las tecnologías, <i>software</i> y algoritmo del sistema de información de la inteligencia artificial se presenten unos riesgos que influyen sobre la planificación en el tratamiento de los datos o sistemas de información.

    .row.justify-content-center.mb-5 
      .col-lg-10.col-12
        .tarjeta.p-4.mb-3(style="background-color: #0C5E46")
          p(style="color: #ffff") Por ejemplo, dentro de la operación del algoritmo se pueden producir sesgos humanos o fallas técnicas en la implementación. A través de estas medidas se podrán controlar y evaluar los riesgos desde la normativa para que no afecten el tratamiento de los datos y no se vulneren los derechos de los titulares de los datos y se puedan proteger los mismos (Red Iberoamericana de Protección de Datos, 2019 , citado en DNP, 2020).
    
    .row.justify-content-center 
      .col-lg-4.col-md-6.col-10
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/27.png' alt='Imagen que menciona cinco objetivos que se deben tener en cuenta al momento de querer asegurar el tratamiento de los datos.')
      .col-lg-8.col-md-8.col-12
        p(data-aos="fade-left") En la actualidad, al realizar alguna investigación se obtienen grandes cantidades de datos debido a la medición de variables, que sin el uso de la tecnología es casi imposible su manipulación, estudio y análisis. Es por ello que un análisis eficiente de los datos aporta de manera significativa a estrategias que permiten crear soluciones a las diferentes problemáticas de las empresas, de los países y del mundo. Pero lo más importante es que la depuración eficiente y el análisis predictivo de una situación en concreto que se pueda medir contribuye a evitar sus consecuencias, aplicando acciones preventivas de acuerdo con las conclusiones que puedan derivarse del análisis de los datos.

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
