<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Alianzas estratégicas y calidad

    .bg14.mb-0.p-0(data-aos="zoom-in-left")
        .row.align-items-center.g-0
          .col-lg-5.p-0(data-aos="fade-right")
            img.w-100.d-none.d-lg-block(src='@/assets/curso/Tema4/img01.png', alt='')
          .col-lg-7(data-aos="fade-left")
            .p-4.text-white
              p En este punto se abordan los mecanismos de cooperación entre actores del territorio, las capacidades que deben desarrollar los prestadores de servicios y los criterios de calidad que orientan una oferta pertinente, accesible y competitiva.
    separador 
    #t_4_1.titulo-segundo.mb-2(data-aos="zoom-in-left")
      h2 4.1  Alianzas estratégicas

    .row.justify-content-start.mb-3(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text.text-white Concepto e importancia

    p Las alianzas estratégicas en el turismo comunitario corresponden a los acuerdos de cooperación y articulación que se establecen entre la comunidad, entidades públicas, organizaciones privadas, academia y otros actores del territorio. Su propósito es fortalecer la oferta turística, mejorar la calidad de los servicios y promover el desarrollo sostenible.

    .bloque-texto-g.bloque-texto-g--inverso.bg1.p-3.p-sm-4.p-md-5(data-aos="zoom-in-left").mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema4/img02.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Estas alianzas permiten optimizar recursos, compartir conocimientos, ampliar la cobertura de mercado y consolidar procesos de formación y acompañamiento técnico. En el contexto del turismo comunitario, la articulación institucional se reconoce como un factor clave para la sostenibilidad de los proyectos turísticos locales. El MinCIT (2022) señala que el turismo comunitario requiere procesos de gobernanza colaborativa que integren a la comunidad y a los actores del territorio en la planificación y gestión del turismo.
            br
            br

    p Estudios recientes destacan que las alianzas estratégicas fortalecen la resiliencia de los emprendimientos turísticos comunitarios al facilitar el acceso a mercados, capacitación y financiamiento (Banco Interamericano de Desarrollo [BID], 2023). De esta manera, la cooperación entre actores contribuye a la consolidación de modelos de turismo sostenible e inclusivo.
    ImagenInfografica.color-acento-botones.mb-4(data-aos="zoom-in-left")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/Tema4/interactiva.svg', alt='')
      .tarjeta.row.img-infog.color-primario.align-items-center.p-4(numero="+" x="36%" y="59%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido.text-white
          p #[b Optimización de recursos:] gestión colaborativa del conocimiento y recursos económicos.

      .tarjeta.row.img-infog.color-primario.align-items-center.p-4(numero="+" x="64%" y="59%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido.text-white
          p #[b Gobernanza colaborativa:] participación activa de actores locales.
        

      .tarjeta.row.img-infog.color-primario.align-items-center.p-4(numero="+" x="64%" y="42%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido.text-white
          p #[b Alianzas estratégicas:] acuerdos entre comunidad, Estado, empresas y academia.


      .tarjeta.row.img-infog.color-primario.align-items-center.p-4(numero="+" x="36%" y="42%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido.text-white
          p #[b Fortalecimiento de la resiliencia:] acceso a mercados, capacitación y financiamiento.


      .tarjeta.row.img-infog.color-primario.align-items-center.p-4(numero="+" x="36%" y="75%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido.text-white
          p #[b Modelos sostenibles:] desarrollo turístico inclusivo que beneficia a toda la comunidad.

      .tarjeta.row.img-infog.color-primario.align-items-center.p-4(numero="+" x="64%" y="75%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido.text-white
          p #[b Articulación institucional:] coordinación entre instituciones para la sostenibilidad.

    .cajon.color-secundario.p-4.mb-2
      .h5 Punto clave
      p Las alianzas estratégicas no son opcionales en el turismo comunitario. Son el mecanismo que conecta la comunidad con instituciones, mercados y recursos para garantizar la sostenibilidad del destino turístico (BID, 2023).


    .row.justify-content-start.mb-3(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text.text-white Importancia de las alianzas estratégicas

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-12.mb-4
        img(src="@/assets/curso/Tema4/img03.png")
      .col-lg-12
        p Las alianzas estratégicas son fundamentales para el desarrollo del turismo comunitario porque permiten integrar capacidades, mejorar la calidad de la oferta turística y garantizar la sostenibilidad de las iniciativas. A través de la cooperación, se facilita el acceso a formación, asistencia técnica, promoción y comercialización.
        p La literatura reciente señala que el trabajo articulado entre comunidad, instituciones y sector privado fortalece la competitividad de los destinos turísticos comunitarios y favorece la innovación en los productos turísticos (Córdova-Buiza et al., 2025). Asimismo, las alianzas contribuyen a la construcción de confianza entre actores y al fortalecimiento de la gobernanza territorial.
        p Desde una perspectiva de desarrollo local, la articulación estratégica permite:

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text.text-white Beneficios de las alianzas estratégicas


    .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-6
          ul.lista-ul.lista-ul--separador
            li.d-flex
              i.fas.fa-folder
              p.mb-0 Fortalecer las capacidades organizativas y técnicas de la comunidad.

            li.d-flex
              i.fas.fa-folder
              p.mb-0 Mejorar la calidad de los servicios turísticos.

            li.d-flex
              i.fas.fa-folder
              p.mb-0 Promover la comercialización responsable de la oferta.

            li.d-flex
              i.fas.fa-folder
              p.mb-0 Garantizar la sostenibilidad ambiental y cultural del destino.

            li.d-flex
              i.fas.fa-folder
              p.mb-0 Favorecer la inclusión social y económica de todas las personas.

        .col-lg-6.col-10.col-md-8
          img(src="@/assets/curso/Tema4/img04.png")



    separador 
    #t_4_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 4.2  Capacidades a desarrollar


    p El fortalecimiento de capacidades en las personas prestadoras de servicios turísticos es un aspecto clave para garantizar experiencias de calidad, seguras e inclusivas. Estas comprenden conocimientos, habilidades y actitudes orientadas a la prestación de servicios turísticos sostenibles.
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text.text-white Capacidades a desarrollar en prestadores de servicios turísticos

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="Capacidades organizativas")
        .col-lg-6.mb-4.mb-md-0
          p • Planificación y gestión administrativa de los procesos turísticos.
          p • Toma de decisiones participativa y trabajo en equipo.
          p • Distribución de responsabilidades con transparencia y gobernanza.
          p • La formación en gestión comunitaria y empresarial permite a las comunidades asumir un rol protagónico en la toma de decisiones (BID, 2023).

        .col-lg-5.col-10.col-md-8
          figure
            img(src='@/assets/curso/Tema4/1.png', alt='Texto que describa la imagen')
      
      .row.justify-content-center(titulo="Capacidades técnicas y operativas")
          .col-lg-6.mb-4.mb-md-0
            p • Atención a visitantes y guianza turística.
            p • Interpretación del patrimonio natural y cultural.
            p • Seguridad turística y prestación de servicios de alojamiento, alimentación y recreación.
            p • Estas capacidades deben desarrollarse considerando estándares de calidad y accesibilidad.
            p • El fortalecimiento de competencias técnicas mejora la experiencia de las personas visitantes y contribuye al posicionamiento del destino (ONU Turismo, 2021).

          .col-lg-5.col-10.col-md-8
            figure
              img(src='@/assets/curso/Tema4/2.png', alt='Texto que describa la imagen')
        
      .row.justify-content-center(titulo="Capacidades en sostenibilidad")
          .col-lg-6.mb-4.mb-md-0
            p • Gestión ambiental y uso responsable de los recursos naturales.
            p • Conservación del patrimonio cultural e implementación de prácticas sostenibles.
            p • Equilibrio entre desarrollo económico y protección del entorno natural y cultural.
            p • La sostenibilidad es un elemento central en la formación de prestadores de servicios, ya que garantiza la permanencia de los recursos y la identidad territorial (UNESCO, 2022).
          
          .col-lg-5.col-10.col-md-8
            figure
              img(src='@/assets/curso/Tema4/3.png', alt='Texto que describa la imagen')
      .row.justify-content-center(titulo="Capacidades en comercialización y comunicación")
          .col-lg-6.mb-4.mb-md-0
            p • Uso de herramientas digitales y plataformas accesibles.
            p • Promoción de productos turísticos y atención al cliente.
            p • Construcción de narrativas territoriales que visibilicen la oferta.
            p • La digitalización se reconoce como estrategia clave para la comercialización del turismo comunitario en contextos actuales (BID, 2023).
          
          .col-lg-5.col-10.col-md-8
            figure
              img(src='@/assets/curso/Tema4/4.png', alt='Texto que describa la imagen')

    separador 
    #t_4_3.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 4.3  Estándares de calidad

    .row.justify-content-center.align-items-stretch.mb-4(data-aos="zoom-in-left")
      .col-lg-4.d-flex
        img.w-100.h-100.object-fit-cover.d-none.d-lg-block(src='@/assets/curso/Tema4/img05.png', alt='')
      .col-lg-8.bg13.p-5.text-white.d-flex.flex-column.justify-content-center
        p Los estándares de calidad del turismo comunitario corresponden a los criterios y lineamientos que orientan la prestación de servicios turísticos de manera segura, sostenible e inclusiva. Estos estándares buscan garantizar la satisfacción de las personas visitantes y el bienestar de la comunidad anfitriona.
        p La calidad en el turismo comunitario no se limita a la infraestructura o a la prestación del servicio. Incluye aspectos como la autenticidad cultural, la sostenibilidad ambiental, la participación comunitaria y la accesibilidad. La ONU Turismo (2021) señala que la calidad turística debe integrar principios de sostenibilidad, inclusión y responsabilidad social.

    p Entre los principales estándares de calidad se destacan:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-8
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Tabla 2.
              span Estándares de calidad en turismo comunitario
            .tabla-a.color-acento-contenido
              table
                thead
                  tr
                    th.bg2.w-30 Estándar
                    th.bg2.text-izq Descripción
                tbody
                  tr
                    th.text-izq Seguridad para visitantes y comunidad
                    td.text-izq Los destinos turísticos comunitarios deben contar con condiciones y protocolos que garanticen la seguridad física y emocional de visitantes y anfitriones.
                  tr
                    th.text-izq Protección del patrimonio natural y cultural
                    td.text-izq Las actividades turísticas deben desarrollarse con pleno respeto por el patrimonio natural y cultural del territorio, evitando impactos negativos irreversibles.
                  tr
                    th.text-izq Participación comunitaria en la gestión
                    td.text-izq La comunidad debe intervenir activamente en la planificación, ejecución y evaluación de las actividades turísticas, garantizando la gobernanza local.
                  tr
                    th.text-izq Transparencia en la distribución de beneficios
                    td.text-izq Los ingresos generados por el turismo deben distribuirse de manera equitativa entre los miembros de la comunidad, con criterios claros y verificables.
                  tr
                    th.text-izq Mejora continua en los servicios
                    td.text-izq Las iniciativas turísticas comunitarias deben implementar mecanismos de evaluación y retroalimentación que permitan mejorar continuamente la calidad de la oferta.
      .col-lg-4.col-8.col-md-6
        img(src='@/assets/curso/Tema4/img06.png', alt='Texto que describa la imagen')

    p La implementación de estándares de calidad fortalece la confianza de las personas visitantes, mejora la reputación del destino y contribuye a la sostenibilidad de los proyectos turísticos comunitarios.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text.text-white Articulación de alianzas para el fortalecimiento de la calidad

    .bg5.mb-4.p-0(data-aos="zoom-in-left")
      .row.align-items-center.g-0
        .col-lg-5.p-0(data-aos="fade-right")
          img.w-100.d-none.d-lg-block(src='@/assets/curso/Tema4/img07.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4.text-white
            p La construcción de alianzas estratégicas facilita la implementación de estándares de calidad mediante procesos de formación, certificación, asistencia técnica y acompañamiento institucional. La articulación con entidades públicas, organizaciones no gubernamentales, academia y sector privado permite fortalecer las capacidades de la comunidad y mejorar la competitividad del destino.
            p La cooperación interinstitucional se reconoce como un factor determinante para la consolidación del turismo comunitario, ya que promueve la innovación, el acceso a recursos y la sostenibilidad de las iniciativas (Córdova-Buiza et al., 2025).
    p Las alianzas estratégicas son más efectivas cuando se formalizan mediante acuerdos claros que definan roles, responsabilidades y mecanismos de seguimiento. La transparencia en la gestión fortalece la confianza entre actores y garantiza la sostenibilidad del proceso.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text.text-white Las alianzas estratégicas y los estándares de calidad son interdependientes

    .row(data-aos="zoom-in-left")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-left.mb-0.text-white Las alianzas facilitan la implementación de estándares.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-left.mb-0.text-white Los estándares orientan el desarrollo de capacidades.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-left.mb-0.text-white Las capacidades fortalecen la calidad de la oferta turística.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-left.mb-0.text-white La calidad consolida la sostenibilidad del modelo comunitario.
     


































</template>

<script>
export default {
  name: 'Tema4',
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
