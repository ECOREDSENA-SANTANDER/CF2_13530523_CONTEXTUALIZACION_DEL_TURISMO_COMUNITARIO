<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La planificación estratégica del turismo comunitario se fundamenta en el reconocimiento del territorio, la comunidad y sus potencialidades como punto de partida para la formulación de propuestas turísticas pertinentes y sostenibles. El componente aborda las características, organización, cultura y creencias de la comunidad como elementos esenciales para comprender la identidad territorial y las condiciones de participación que determinan la viabilidad de cualquier iniciativa turística. Asimismo, desarrolla el perfil del turista comunitario, considerando sus motivaciones, tipos, procedencia e importancia estratégica para orientar el diseño de una oferta diferenciada y competitiva. A partir de este análisis, se identifican y clasifican las actividades turísticas comunitarias, estableciendo criterios para su diseño y planificación desde un enfoque participativo e incluyente. Finalmente, el componente articula estos elementos con la construcción de alianzas estratégicas, el fortalecimiento de capacidades en los prestadores de servicios y la aplicación de estándares de calidad, configurando así una ruta integral para la validación y puesta en marcha de líneas estratégicas del turismo comunitario en el territorio.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual titulado “Planificación estratégica del turismo comunitario”. El tema central se ubica en la parte superior y se conecta con cuatro ejes principales: Comunidad, Perfil del turista comunitario, Actividades turísticas y Alianzas y calidad. El eje Comunidad incluye identidad y cultura, organización y participación. El eje Perfil del turista comunitario comprende motivaciones, características, mercado y procedencia. El eje Actividades turísticas integra actividades culturales, de naturaleza, productivas y su diseño y planificación. El eje Alianzas y calidad aborda gobernanza, capacidades y estándares. El esquema presenta de manera jerárquica los elementos que orientan la formulación y validación de líneas estratégicas en el turismo comunitario.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
