<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Comunidad
    
      .bloque-texto-g.bloque-texto-g--inverso.bg1.p-3.p-sm-4.p-md-5(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La comunidad constituye el eje central del turismo comunitario. Su comprensión permite reconocer las dinámicas organizativas, culturales y territoriales que hacen posible el desarrollo de iniciativas turísticas sostenibles e incluyentes. En este punto se abordan el concepto, las características, las formas de organización y las expresiones culturales que definen a la comunidad como actor principal del territorio.
            br
            br
      
      separador 
      #t_1_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 1.1  Concepto y características
      
      p El concepto de comunidad tiene sus raíces en la antigüedad. Surge de la necesidad humana de protección, cooperación y asentamiento compartido en un territorio. Proviene del latín communitas, que significa la convivencia y unión de individuos con intereses, valores, cultura o metas compartidas.
      p En el marco del turismo comunitario, el Ministerio de Comercio, Industria y Turismo (MinCIT, 2012) define la comunidad como un grupo de personas que se organizan e integran en busca de un objetivo común, a través del establecimiento de normas y funciones.

      .cajon.color-primario.p-4.mb-4(data-aos="zoom-in-left")
        .h5 Punto clave
        p La comunidad no es solo un grupo de personas. Es una organización viva con identidad, cultura y propósitos colectivos compartidos.

      p.mb-0 Las comunidades se reconocen por un conjunto de características que orientan su organización, identidad y proyección colectiva (MinCIT, 2022):

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text.text-white Características de la comunidad

      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-12
          .tarjeta--container.row.mb-3
            .col-md.tarjeta.bg8.p-5
              .row.justify-content-center.mb-4
                .col-5
                  figure
                    img(src='@/assets/curso/Tema1/1.svg', alt='Texto que describa la imagen')          
              h3.text-center Identidad
              p.text-center Intereses, costumbres y preferencias compartidas que fortalecen el sentido de pertenencia de sus integrantes.

            .col-md.tarjeta.bg9.p-5
              .row.justify-content-center.mb-4
                .col-5
                  figure
                    img(src='@/assets/curso/Tema1/2.svg', alt='Texto que describa la imagen')          
              h3.text-center Objetivo común
              p.text-center Metas y propósitos colectivos orientados al bienestar general y la distribución equitativa de beneficios.

            .col-md.tarjeta.bg10.p-5
              .row.justify-content-center.mb-4
                .col-5
                  figure
                    img(src='@/assets/curso/Tema1/3.svg', alt='Texto que describa la imagen')          
              h3.text-center Compromiso
              p.text-center Participación y corresponsabilidad de los integrantes para avanzar hacia el logro de objetivos comunes. 

      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-12
          .tarjeta--container.row.mb-3
            .col-md.tarjeta.bg5.p-5
              .row.justify-content-center.mb-4
                .col-5
                  figure
                    img(src='@/assets/curso/Tema1/4.svg', alt='Texto que describa la imagen')          
              h3.text-center.text-white Cultura
              p.text-center.text-white Valores, costumbres y prácticas compartidas que distinguen a cada comunidad y orientan su desarrollo social.

            .col-md.tarjeta.bg6.p-5
              .row.justify-content-center.mb-4
                .col-5
                  figure
                    img(src='@/assets/curso/Tema1/5.svg', alt='Texto que describa la imagen')          
              h3.text-center.text-white Interacción  
              p.text-center.text-white Relaciones permanentes entre integrantes y con otras comunidades que posibilitan la construcción conjunta de iniciativas.

            .col-md.tarjeta.bg7.p-5
              .row.justify-content-center.mb-4
                .col-5
                  figure
                    img(src='@/assets/curso/Tema1/6.svg', alt='Texto que describa la imagen')          
              h3.text-center Dinámica
              p.text-center Las comunidades evolucionan, se adaptan y redefinen su organización conforme a los cambios sociales, culturales y territoriales.


      separador 
      #t_1_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 1.2  Organización, cultura y creencias

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text.text-white Organización de la comunidad

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-3.col-7.mb-4.col-md-6
          img(src="@/assets/curso/Tema1/img02.png")
        .col-lg-9
          .row.justify-content-center.align-items-center.mb-3.bg13.p-5.text-white
            .col-lg-12
              p Para que los proyectos de turismo comunitario alcancen resultados sostenibles, es fundamental la participación organizada de la comunidad en el territorio. La organización colectiva permite que las personas se constituyan en gestoras de su propio progreso, favoreciendo la superación de condiciones de vulnerabilidad mediante el trabajo colaborativo y solidario.
              p Los actores que intervienen en estos procesos deben contar con vocación de servicio y conocimiento sobre las implicaciones, costos y beneficios del emprendimiento turístico. Asimismo, se requiere la participación de operadores turísticos comprometidos con la atención de calidad a las personas visitantes.
          p Es indispensable la implementación de buenas prácticas de calidad y sostenibilidad, orientadas al cuidado de los recursos naturales, la protección del patrimonio y la prestación de servicios accesibles e incluyentes para todas las personas.

      .cajon.color-acento-botones.p-4.mb-4(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center
          .col-lg-1.col-4.mb-4.col-md-3
            img(src="@/assets/curso/Tema1/adv.svg")
          .col-lg-10.text-white
            h5 Advertencia
            p Las limitaciones en conectividad e infraestructura incrementan los costos de operación y dificultan la comercialización del destino. La articulación con gobiernos locales es indispensable para superar estas barreras.

      p El MinCIT (2018) establece una ruta de implementación para el desarrollo del turismo comunitario en un territorio. Los pasos clave son:
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text.text-white Ruta de implementación del turismo comunitario


      .tarjeta.fondot1.p-4(data-aos="zoom-in-left").mb-4
        LineaTiempoC.color-acento-contenido(text-small)
          .row.justify-content-center.align-items-center(titulo="1")
            .col-md-5.mb-4
              figure
                img(src='@/assets/curso/Tema1/1.png', alt='')
            .col-md-6.mb-4.mb-md-0
              h5 Interés y vocación
              p Confirmar el interés del territorio en el turismo, la vocación turística de la comunidad y la claridad en los temas organizativos.
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  | Comunidad motivada y con disposición para el proceso.

          
          .row.justify-content-center.align-items-center(titulo="2")
            .col-md-5.mb-4
              figure
                img(src='@/assets/curso/Tema1/2.png', alt='')
            .col-md-6.mb-4.mb-md-0
              h5 Organización y legalidad
              p Desarrollar procesos asociativos desde la legalidad, definiendo el propósito y la finalidad del turismo comunitario en el territorio.
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  | Organización comunitaria constituida legalmente.

          .row.justify-content-center.align-items-center(titulo="3")
            .col-md-5.mb-4
              figure
                img(src='@/assets/curso/Tema1/1.png', alt='')
            .col-md-6.mb-4.mb-md-0
              h5 Conocimiento del sector
              p Fortalecer el conocimiento básico del sector turístico, la normatividad vigente y los requisitos para ser prestadores de servicios legalizados.
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  | Comunidad informada sobre el marco normativo.
          
          .row.justify-content-center.align-items-center(titulo="4")
            .col-md-5.mb-4
              figure
                img(src='@/assets/curso/Tema1/1.png', alt='')
            .col-md-6.mb-4.mb-md-0
              h5 Conectividad y atractivos
              p Identificar las rutas de acceso al territorio (aérea, terrestre, fluvial) y los principales atractivos y potencialidades turísticas del entorno.
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  |  Diagnóstico de conectividad y atractivos documentado.
          
          .row.justify-content-center.align-items-center(titulo="5")
            .col-md-5.mb-4
              figure
                img(src='@/assets/curso/Tema1/1.png', alt='')
            .col-md-6.mb-4.mb-md-0
              h5 Articulación institucional
              p Vincular los procesos comunitarios con las políticas públicas del sector, promoviendo la participación de entes territoriales y alianzas público-privadas.
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  | Plan de trabajo interinstitucional definido.

          
          .row.justify-content-center.align-items-center(titulo="6")
            .col-md-5.mb-4
              figure
                img(src='@/assets/curso/Tema1/1.png', alt='')
            .col-md-6.mb-4.mb-md-0
              h5 Competitividad y beneficio mutuo
              p Participar en actividades de competitividad turística, socializar decisiones con la comunidad y analizar los beneficios mutuos para el territorio.
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  | Modelo de negocio orientado al bienestar colectivo.
          
      .cajon.color-primario.p-4
        .h5 Buena práctica
        p El turismo comunitario trasciende la oferta de actividades. Se vincula con procesos integrales de desarrollo social, económico, cultural y ambiental que promueven el bienestar de todas las personas que habitan y visitan el territorio (MinCIT, 2012).       

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text.text-white Cultura y creencias

      .bg12.mb-4(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center
          .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right")
            img.d-none.d-lg-block(src='@/assets/curso/Tema1/img04.png', alt='')
          .col-lg-7(data-aos="fade-left")
            .row.p-4
              .col-lg-12.text-white
                p De acuerdo con las directrices de la ONU Turismo, las políticas y actividades turísticas deben desarrollarse con pleno respeto por el patrimonio artístico, arqueológico y cultural. Estos bienes constituyen elementos de alto valor histórico y social que deben preservarse para garantizar su transmisión a las generaciones futuras.
                p Las comunidades tienen la responsabilidad de proteger los monumentos, los centros de culto y los lugares de interés histórico o arqueológico presentes en sus territorios. Asimismo, es necesario promover la conservación y modernización de los museos y espacios culturales, garantizando su accesibilidad e inclusión para todas las personas visitantes.
      
      .cajon.color-secundario.p-4(data-aos="zoom-in-left")
        .h5 Punto clave
        p La gestión del turismo comunitario contribuye a la salvaguarda del patrimonio y al fortalecimiento de la identidad cultural, al tiempo que impulsa el desarrollo sostenible y el bienestar colectivo en los territorios.

















  </template>

<script>
export default {
  name: 'Tema1',
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
