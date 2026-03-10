<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Perfil del turista comunitario

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.d-flex
        img.w-100.h-100.object-fit-cover(src='@/assets/curso/Tema2/img01.png', alt='')
      .col-lg-8.bg13.p-5.text-white.d-flex.flex-column.justify-content-center
        p El conocimiento del turista comunitario es fundamental para diseñar productos y experiencias que respondan a sus intereses y expectativas. Su perfil se distingue por una actitud de respeto, aprendizaje y corresponsabilidad frente al territorio y la comunidad anfitriona.
        p En este punto se estudian el concepto, las características, los tipos de turista comunitario y los factores que determinan su procedencia, motivaciones e importancia estratégica para la planificación turística del territorio.

      separador 
      #t_2_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 2.1  Concepto, características y tipos

      .row.justify-content-center.mb-4
        .col-lg-12
          img.w-100(
            src='@/assets/curso/Tema2/podcast.svg'
            alt='Texto que describa la imagen'
            data-aos="zoom-in-left"
          )
        .col-lg-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100.bg12
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-botones(
                texto="¿Quién viaja al territorio y qué espera encontrar?"
                :audio="require('@/assets/curso/Tema2/prueba.mp3')"
              )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p.mt-3
                em Pódcast:
                |  Para contextualizar el perfil del turista comunitario y su importancia en la planificación estratégica del territorio, se recomienda escuchar el #[em pódcast] "¿Quién viaja al territorio y qué espera encontrar?" que introduce los conceptos clave de esta sección de manera conversacional.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text.text-white Concepto de turista comunitario

      p El turista comunitario es la persona que participa en experiencias turísticas gestionadas por comunidades locales y que busca un contacto directo, respetuoso y significativo con el territorio y sus habitantes. A diferencia de otros perfiles de visitantes, este tipo de turista se interesa por conocer las dinámicas culturales, sociales y ambientales del lugar, valorando la autenticidad de las prácticas comunitarias y la sostenibilidad de las actividades ofrecidas.

      .bloque-texto-g.bloque-texto-g--inverso.bg1.p-3.p-sm-4.p-md-5(data-aos="zoom-in-left").mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Desde el enfoque del turismo sostenible, el visitante que participa en iniciativas comunitarias asume un rol activo en la conservación del patrimonio y en el fortalecimiento de la economía local. La ONU Turismo (2021) señala que el turismo responsable implica la participación informada de los visitantes en actividades que respeten la cultura local y contribuyan al bienestar de la comunidad anfitriona. En este sentido, el perfil del turista comunitario se caracteriza por una actitud de respeto, aprendizaje y corresponsabilidad frente al territorio que visita.
            br
            br

      p La identificación del perfil del visitante resulta fundamental para la formulación de líneas estratégicas en turismo comunitario, ya que permite diseñar productos y servicios acordes con sus expectativas, necesidades y comportamientos. Asimismo, facilita la definición de estrategias de comunicación, comercialización y atención que favorezcan experiencias satisfactorias tanto para la comunidad como para las personas visitantes.

      .cajon.color-secundario.p-4(data-aos="zoom-in-left")
        .h5 Punto clave
        p El perfil del turista comunitario se caracteriza por una actitud de respeto, aprendizaje y corresponsabilidad frente al territorio. Su identificación es clave para diseñar productos turísticos pertinentes y sostenibles.


      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text.text-white Características del turista comunitario

      p El turista comunitario presenta características que lo diferencian de los visitantes orientados exclusivamente al consumo de servicios turísticos convencionales. Entre estas se destacan el interés por la cultura local, la valoración de la sostenibilidad y la disposición para participar en actividades comunitarias (Wearing y McDonald, 2002):

      .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
        .col-lg-10
          PasosA.color-acento-contenido.mb-0(tipo="n")
            .row
              .col-md-9.mb-4.mb-md-0.col-lg-10
                h3 Sensibilidad ambiental y social
                p Procura minimizar su huella ecológica y adopta comportamientos responsables durante su estancia, fomentando el respeto mutuo entre visitantes y anfitriones.
              .col-md-3.col-lg-2.col-6
                figure
                  img(src='@/assets/curso/Tema2/1.svg', alt='Texto que describa la imagen')
            .row
              .col-md-3.col-lg-2.col-6.mb-3
                figure
                  img(src='@/assets/curso/Tema2/2.svg', alt='Texto que describa la imagen')

              .col-md-9.mb-4.mb-md-0.col-lg-10
                h3.text-izq Motivación por el aprendizaje intercultural
                p.text-izq Se interesa por conocer las prácticas tradicionales, la gastronomía local, los saberes ancestrales y la forma de organización social de la comunidad.

            .row
              .col-md-8.mb-4.mb-md-0.col-lg-10
                h3 Búsqueda de experiencias auténticas
                p Valora la interacción directa con las personas de la comunidad y la posibilidad de participar en actividades cotidianas del territorio.
              .col-md-4.col-lg-2.col-6
                figure
                  img(src='@/assets/curso/Tema2/3.svg', alt='Texto que describa la imagen')
      

            .row
              .col-md-3.col-lg-2.col-6.mb-3
                figure
                  img(src='@/assets/curso/Tema2/4.svg', alt='Texto que describa la imagen')
              .col-md-9.mb-4.mb-md-0.col-lg-10
                h3.text-izq Corresponsabilidad territorial
                p.text-izq Asume un rol activo en la conservación del patrimonio y en el fortalecimiento de la economía local durante su experiencia turística.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text.text-white Tipos de turistas comunitarios

      p El turista comunitario no constituye un grupo homogéneo. Existen diferentes tipos de visitantes que se acercan a las iniciativas comunitarias con motivaciones específicas. La identificación de estos tipos permite orientar la oferta turística y definir estrategias de atención adecuadas:

      .row(data-aos="zoom-in-left")
        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100.w-100
            .row.justify-content-center
              .col-lg-7.mb-3
                img(src="@/assets/curso/Tema2/01.svg")
              .col-lg-12 
                h5.text-center.text-white Turista cultural
                p.text-left.mb-0.text-white Se interesa por las tradiciones, expresiones artísticas, festividades y patrimonio histórico de la comunidad. Busca comprender el significado cultural de las prácticas locales y participar en experiencias que favorezcan el intercambio de saberes.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100.w-100
            .row.justify-content-center
              .col-lg-7.mb-3
                img(src="@/assets/curso/Tema2/02.svg")
              .col-lg-12 
                h5.text-center.text-white Turista aventurero
                p.text-left.mb-0.text-white Valora los paisajes, la biodiversidad y las actividades relacionadas con la conservación ambiental. Se siente atraído por recorridos interpretativos, caminatas ecológicas y experiencias de turismo rural.
        
        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100.w-100
            .row.justify-content-center
              .col-lg-7.mb-3
                img(src="@/assets/curso/Tema2/03.svg")
              .col-lg-12 
                h5.text-center.text-white Turista educativo
                p.text-left.mb-0.text-white Participa en actividades con fines de aprendizaje académico o formativo. Este perfil incluye estudiantes, docentes e investigadores que buscan conocer procesos comunitarios, prácticas productivas y experiencias de desarrollo territorial.
        
        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100.w-100
            .row.justify-content-center
              .col-lg-7.mb-3
                img(src="@/assets/curso/Tema2/04.svg")
              .col-lg-12 
                h5.text-center.text-white Turista solidario
                p.text-left.mb-0.text-white Se interesa por apoyar proyectos comunitarios mediante su participación en actividades que contribuyan al bienestar local. Este tipo de visitante valora la cooperación y el intercambio cultural.
      
      separador 
      #t_2_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 2.2  Procedencia, motivaciones e importancia estratégica

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text.text-white Procedencia y tendencia del mercado




































































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
