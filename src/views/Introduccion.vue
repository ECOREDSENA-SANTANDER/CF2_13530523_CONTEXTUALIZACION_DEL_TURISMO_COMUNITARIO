<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    .bloque-texto-g.bg1.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/portada/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el desarrollo del turismo comunitario, se aborda el reconocimiento integral de la comunidad como eje del desarrollo turístico territorial, considerando sus características organizativas, expresiones culturales, creencias y formas de participación social. Este abordaje permite comprender las dinámicas locales y su relación con la construcción de propuestas turísticas sostenibles, incluyentes y pertinentes para las personas y colectivos que habitan el territorio.
          br
          br
          | Es importante analizar el perfil del turista comunitario, sus motivaciones, tipologías e intereses, con el propósito de identificar oportunidades de interacción respetuosa entre visitantes y comunidad anfitriona. De igual manera, se estudian las actividades turísticas propias del contexto comunitario, sus características, modalidades de desarrollo y posibilidades de comercialización responsable, promoviendo la generación de beneficios sociales, culturales y económicos para la población local.
    
    p El componente también fortalece la comprensión de las alianzas estratégicas como mecanismo para consolidar procesos de turismo comunitario con criterios de calidad, corresponsabilidad y sostenibilidad. En este sentido, se reconocen las capacidades que deben desarrollar los prestadores de servicios turísticos y los estándares que orientan una oferta pertinente, accesible e incluyente para todas las personas.
    p.mb-4 A partir de estos elementos, el proceso formativo conduce al establecimiento de líneas estratégicas con enfoque comunitario y a su posterior validación con los actores locales, garantizando que las iniciativas respondan a las posibilidades reales de desarrollo turístico del territorio y contribuyan al bienestar colectivo, la preservación cultural y el uso responsable de los recursos.
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
