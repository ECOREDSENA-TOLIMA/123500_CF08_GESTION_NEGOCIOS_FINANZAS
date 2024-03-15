<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-left") La tecnología está presente en casi todos los rincones del mundo desde hace mucho tiempo, y en la actualidad presenta grandes niveles de sofisticación y costos de adquisición cada vez más bajos. La electricidad, el computador e incluso las telecomunicaciones avanzan a pasos agigantados y la ciencia de datos no es la excepción, debido al auge del tratamiento de millones de volúmenes de datos que implica una gran revolución en la sociedad. En el siguiente video se puede apreciar la importancia de la ciencia de datos en la toma de decisiones estratégicas empresariales.
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-3(data-aos="fade-left") El manejo de grandes volúmenes de información trae consigo también un alto grado de responsabilidad primero, porque la información no es propiedad de la empresa que gestiona los datos, sino de la persona directamente implicada, y segundo, porque la información mal utilizada puede ser robada, borrada o alterada, lo que afectaría su disponibilidad, veracidad y fidelidad, que pondrían en alto riesgo a los propietarios de esa información. 

    .row.justify-content-center.mb-5
      .col-md-10.col-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso//temas/intro/1.png')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4
            p.mb-0 Por ejemplo, si la información etiquetada como confidencial por una empresa llegara a manos de su competidor, quedarían expuestos todos los registros de los clientes, las estrategias comerciales, los estados financieros y los datos de acceso a portales bancarios, lo que causaría pérdidas de negocios, clientes, demandas por exponer información confidencial, incluso, hasta el cierre de la compañía.

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
