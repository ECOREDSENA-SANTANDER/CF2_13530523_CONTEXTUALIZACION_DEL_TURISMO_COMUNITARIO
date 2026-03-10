<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Actividades turísticas comunitarias

    .bloque-texto-g.bloque-texto-g--inverso.bg7.p-3.p-sm-4.p-md-5(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema3/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La comunidad constituye el eje central del turismo comunitario. Su comprensión permite reconocer las dinámicas organizativas, culturales y territoriales que hacen posible el desarrollo de iniciativas turísticas sostenibles e incluyentes. En este punto se abordan el concepto, las características, las formas de organización y las expresiones culturales que definen a la comunidad como actor principal del territorio.
            br
            br
    separador 
    #t_3_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.1  Concepto y características

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text.text-white Concepto de actividades turísticas comunitarias

    .bg5.mb-4.p-0(data-aos="zoom-in-left")
      .row.align-items-center.g-0
        .col-lg-5.p-0(data-aos="fade-right")
          img.w-100.d-none.d-lg-block(src='@/assets/curso/Tema3/img02.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4.text-white
            p Las actividades turísticas comunitarias corresponden al conjunto de experiencias, servicios y productos diseñados y gestionados por la comunidad anfitriona con el propósito de compartir su patrimonio cultural, natural y social con las personas visitantes. Estas actividades se desarrollan desde un enfoque participativo y buscan generar beneficios económicos, sociales y culturales para el territorio.
            p El turismo comunitario se fundamenta en la articulación entre prácticas cotidianas de la comunidad y la experiencia turística, evitando la artificialización de la cultura local. Las actividades deben construirse a partir de los saberes, las tradiciones y las dinámicas productivas del territorio. En este sentido, el MinCIT (2022) señala que las iniciativas de turismo comunitario se orientan a fortalecer la identidad territorial y generar oportunidades de desarrollo sostenible mediante la participación activa de la comunidad.


    p Las actividades turísticas constituyen el núcleo de la oferta comunitaria, ya que permiten la interacción directa entre visitantes y habitantes del territorio. Su diseño debe responder a las capacidades organizativas de la comunidad, a la disponibilidad de recursos y a la demanda del mercado turístico.

    .cajon.color-secundario.p-4.mb-4
      .h5 Punto clave
      p Las actividades turísticas comunitarias no son escenarios artificiales creados para el turista. Nacen de la vida cotidiana de la comunidad, sus saberes y sus dinámicas productivas reales.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text.text-white Características de las actividades turísticas comunitarias

    p.mb-5 Las actividades turísticas comunitarias presentan características que las diferencian de otras ofertas convencionales. Estas características orientan su diseño, ejecución y evaluación:

    .row.justify-content-center.mb-5
       .col-lg-10.position-relative
        .avatar
          figure
            img.d-none.d-lg-block(src="@/assets/curso/Tema3/img04.png", alt="alt").img250
          
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/Tema3/1.svg", alt="alt").img100
            .col
              h5 Participación comunitaria
              p Las personas del territorio no solo prestan servicios, sino que también toman decisiones sobre el uso de los recursos y la orientación de las actividades turísticas.
          
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/Tema3/2.svg", alt="alt").img100
            .col
              h5 Autenticidad
              p Las actividades reflejan las prácticas culturales y productivas reales de la comunidad, evitando representaciones estereotipadas que desvirtúen la identidad local (ONU Turismo, 2021).
          
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/Tema3/3.svg", alt="alt").img100
            .col
              h5 Sostenibilidad
              p En los análisis de resultados, el determinante es saber mostrar la información, tenga en cuenta la objetividad, la claridad, la transparencia y la organización de la información.
































</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass">
.avatar
  position: absolute
  bottom: 0
  right: -4rem
  z-index: 1
  @media (max-width: 1000px)
    display: none
.crd--avatarHorizontal
  position: relative
  padding-right: 12rem
  & > *
    position: relative
  h5
    color: #12263F
  p
    margin-bottom: 0
  &::before
    position: absolute
    content: ''
    top: 0
    right: 0
    width: calc( 100% - 60px)
    height: 100%
    background-color: #C5E5FE
  @media (max-width: 1000px)
    padding-right: 2rem

.crd--first, .crd--last
  &::before
    background-color: #A5D6A7 !important
.crd--first
  &::before
    border-top-left-radius: 30px
.crd--last
  &::before
    border-bottom-left-radius: 30px
</style>
