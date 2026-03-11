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

    .row.justify-content-start.mb-3(data-aos="zoom-in-left")
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


    separador 
    #t_3_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.2  Tipos de actividades
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text.text-white Tipos de actividades turísticas comunitarias

    TabsC.color-primario(data-aos="zoom-in-left").mb-4
      .py-3.py-md-4(titulo="Actividades culturales")
        .row.justify-content-center.align-items-center
          .col-lg-5.col-10.col-md-8
            img.mb-3(src='@/assets/curso/Tema3/01.png', alt='Grupo de personas con vestimenta tradicional colorida bailando y tocando guitarra durante una festividad local al aire libre, representando una actividad cultural comunitaria vinculada al turismo y la preservación de tradiciones.')
          .col-lg-6.mb-4.mb-md-0
            p • Permiten compartir tradiciones, expresiones artísticas, saberes ancestrales y prácticas cotidianas.
            p • Ejemplos: talleres de artesanías, demostraciones gastronómicas, narraciones orales, música tradicional y participación en festividades locales.
            p • La Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura [UNESCO] (2019) señala que el turismo cultural contribuye a la salvaguardia del patrimonio cuando se gestiona de manera participativa y respetuosa.

        
      .py-3.py-md-4(titulo="Actividades de naturaleza")
        .row.justify-content-center.align-items-center
          .col-lg-5.col-10.col-md-8
            img.mb-3(src='@/assets/curso/Tema3/02.png', alt='Grupo de personas realizando caminata ecológica por un sendero rodeado de vegetación abundante, guiadas en una actividad de turismo de naturaleza enfocada en la interpretación ambiental.')
          .col-lg-6.mb-4.mb-md-0
            p • Se desarrollan en entornos rurales o naturales y promueven el conocimiento de la biodiversidad y la conservación ambiental.
            p • Ejemplos: caminatas interpretativas, recorridos por senderos ecológicos, observación de fauna y flora, experiencias de turismo rural.
            p • Requieren protocolos de seguridad, señalización adecuada y guías capacitados en interpretación ambiental (ONU Turismo, 2021).
      
      .py-3.py-md-4(titulo="Actividades productivas")
        .row.justify-content-center.align-items-center
          .col-lg-5.col-10.col-md-8
            img.mb-3(src='@/assets/curso/Tema3/02.png', alt='Pescador artesanal lanzando una red en un río como parte de una actividad productiva comunitaria vinculada al turismo local y a los medios de vida tradicionales.')
          .col-lg-6.mb-4.mb-md-0
            p • Permiten a las personas visitantes conocer y participar en procesos económicos locales.
            p • Ejemplos: agricultura, pesca artesanal, elaboración de productos tradicionales y transformación de alimentos.
            p • Estas experiencias facilitan el aprendizaje sobre los medios de vida de la comunidad y fortalecen la valoración del trabajo local.

      .py-3.py-md-4(titulo="Actividades educativas y de intercambio")
        .row.justify-content-center.align-items-center
          .col-lg-5.col-10.col-md-8
            img.mb-3(src='@/assets/curso/Tema3/02.png', alt='Mujer de la comunidad enseñando y tocando instrumentos tradicionales frente a un grupo de visitantes en un taller cultural, como actividad educativa e intercambio comunitario.')
          .col-lg-6.mb-4.mb-md-0
            p • Se orientan al aprendizaje mutuo entre visitantes y comunidad.
            p • Ejemplos: talleres, encuentros culturales, procesos de investigación participativa y espacios de diálogo sobre prácticas de desarrollo territorial.
            p • Este tipo de actividades es frecuente en grupos estudiantiles, organizaciones sociales y personas interesadas en el turismo responsable.


    .cajon.color-acento-botones.p-4.mb-4(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center
          .col-lg-1.col-4.mb-4.col-md-3
            img(src="@/assets/curso/Tema1/adv.svg")
          .col-lg-10.text-white
            h5 Advertencia
            p Las actividades de naturaleza deben considerar la capacidad de carga del territorio. La sobreexplotación de senderos, ecosistemas y espacios naturales genera impactos negativos irreversibles en el destino turístico comunitario (ONU Turismo, 2021).

    separador 
    #t_3_3.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.3 Diseño de actividades turísticas comunitarias


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text.text-white Diseño de actividades turísticas comunitarias

    .row.justify-content-center.align-items-stretch.mb-2
      .col-lg-4.d-flex
        img.w-100.h-100.object-fit-cover.d-none.d-lg-block(src='@/assets/curso/Tema3/img03.png', alt='')
      .col-lg-8.bg13.p-5.text-white.d-flex.flex-column.justify-content-center
        p El diseño de actividades turísticas comunitarias debe partir de un proceso participativo en el que la comunidad identifique sus recursos, capacidades y expectativas. Este proceso implica la realización de diagnósticos territoriales, la definición de objetivos y la planificación de las experiencias.
        p Un aspecto clave en el diseño es la coherencia entre la actividad turística y la vida cotidiana de la comunidad. Las experiencias deben integrarse de manera armónica a las dinámicas locales, evitando la sobrecarga de trabajo o la alteración de las prácticas culturales.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text.text-white Proceso de diseño de actividades turísticas comunitarias


    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
        .col-lg-10
          PasosA.color-acento-contenido.mb-0(tipo="n")
            .row
              .col-md-9.mb-4.mb-md-0.col-lg-10
                h3 Diagnóstico participativo
                p La comunidad identifica sus recursos, capacidades y expectativas mediante un proceso colectivo de análisis territorial.
                ul.lista-ul--color
                  li
                    i.fas.fa-check
                    |  Inventario de recursos y capacidades documentado.
              .col-md-3.col-lg-2.col-6
                figure
                  img(src='@/assets/curso/Tema3/01.svg', alt='Texto que describa la imagen')
            .row
              .col-md-3.col-lg-2.col-6.mb-3
                figure
                  img(src='@/assets/curso/Tema3/02.svg', alt='Texto que describa la imagen')

              .col-md-9.mb-4.mb-md-0.col-lg-10
                h3.text-izq Definición de objetivos
                p.text-izq Se establecen los propósitos de cada actividad: qué experiencia se ofrece, a quién va dirigida y qué beneficios genera para el territorio.
                ul.lista-ul--color
                  li
                    i.fas.fa-check
                    | Ficha de actividad con objetivos definidos.

            .row
              .col-md-8.mb-4.mb-md-0.col-lg-10
                h3 Planificación logística
                p Se determinan la duración, el número de participantes, los recursos necesarios, las condiciones de seguridad y los protocolos de atención al visitante (MinCIT, 2022).
                ul.lista-ul--color
                  li
                    i.fas.fa-check
                    | Plan operativo de la actividad elaborado.

              .col-md-4.col-lg-2.col-6
                figure
                  img(src='@/assets/curso/Tema3/03.svg', alt='Texto que describa la imagen')
      

            .row
              .col-md-3.col-lg-2.col-6.mb-3
                figure
                  img(src='@/assets/curso/Tema3/04.svg', alt='Texto que describa la imagen')
              .col-md-9.mb-4.mb-md-0.col-lg-10
                h3.text-izq Evaluación y mejora continua
                p.text-izq Se implementan mecanismos de evaluación que permitan identificar oportunidades de mejora y ajustar la oferta según las expectativas de los visitantes.
                ul.lista-ul--color.text-izq
                  li
                    i.fas.fa-check
                    | Sistema de retroalimentación activo.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Comercialización de actividades turísticas comunitarias

    .bloque-texto-g.bloque-texto-g--inverso.bg7.p-3.p-sm-4.p-md-5(data-aos="zoom-in-left").mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema3/img05.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La comercialización de actividades turísticas comunitarias consiste en la promoción, difusión y venta de experiencias ofrecidas por la comunidad. Este proceso debe realizarse de manera organizada y coherente con la capacidad de atención en el territorio.
            br
            br
            | Una estrategia de comercialización efectiva requiere la definición de un mercado objetivo, la estructuración de paquetes turísticos y la utilización de canales de promoción adecuados. Las comunidades pueden recurrir a plataformas digitales, redes sociales, alianzas con agencias de viajes y participación en ferias turísticas para dar a conocer su oferta.

    ImagenInfografica.color-acento-botones.mb-4(data-aos="zoom-in-left")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/Tema3/interactiva.svg', alt='')
      .tarjeta.row.img-infog.bg4.align-items-center.p-4(numero="2" x="50%" y="12%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido.text-white
          h5 Estrategia y promoción de la experiencia  
          p • Duración de la actividad
          p • Nivel de dificultad
          p • Costos y condiciones de participación

      .tarjeta.row.img-infog.bg4.align-items-center.p-4(numero="5" x="91%" y="87%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido.text-white
          h5 Gestión económica y sostenibilidad
          p • Fijación de precios: costos operativos + tiempo de trabajo + valor cultural
          p • Distribución equitativa de ingresos entre la comunidad
          p • Reinversión en infraestructura comunitaria
          p • Sostenibilidad económica a largo plazo

      .tarjeta.row.img-infog.bg4.align-items-center.p-4(numero="3" x="83%" y="34%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido.text-white
          h5 Información clara y accesible para el turista  
          p • Presentar información en formatos comprensibles
          p • Compatible con lectores de pantalla
          p • Sin dependencia exclusiva de elementos visuales

      .tarjeta.row.img-infog.bg4.align-items-center.p-4(numero="1" x="17%" y="34%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido.text-white
          h5 Definir canales y mercado objetivo 
          p • Plataformas digitales y redes sociales
          p • Alianzas con agencias de viajes
          p • Participación en ferias turísticas

      .tarjeta.row.img-infog.bg4.align-items-center.p-4(numero="4" x="8%" y="87%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido.text-white
          h5 Estructuración de paquetes coherentes
          p • Organizar actividades según la capacidad del territorio
          p • Incluir: naturaleza, gastronomía, interacción comunitaria y recorridos
          p • Diseñar experiencias integradas y coherentes

    p Las personas visitantes valoran la información clara, detallada y transparente sobre las experiencias ofrecidas. Por ello, es importante describir las actividades de manera precisa, incluyendo su duración, nivel de dificultad, condiciones de participación y aportes económicos. La información debe presentarse en formatos accesibles, compatibles con lectores de pantalla y con descripciones que no dependan exclusivamente de elementos visuales.

    .cajon.color-primario.p-4.mb-4
      .h5 Buena práctica
      p La fijación de precios debe considerar los costos de operación, el tiempo de trabajo de las personas prestadoras y el valor cultural de las experiencias. La distribución de los ingresos debe realizarse de manera equitativa, garantizando beneficios para la comunidad y la sostenibilidad de las actividades.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Importancia de la comercialización en la sostenibilidad

    .bloque-texto-g.bg1.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema3/img06.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La comercialización adecuada de las actividades turísticas permite posicionar la oferta comunitaria en el mercado y generar ingresos que contribuyan al bienestar del territorio. Sin embargo, es fundamental evitar la sobreexplotación de los recursos y la saturación de las actividades.

          br
          br
          | La planificación de la demanda y la gestión de reservas permiten mantener un equilibrio entre la capacidad de la comunidad y el número de visitantes. Este equilibrio es esencial para preservar la calidad de las experiencias y evitar impactos negativos en la vida cotidiana del territorio.

    p El fortalecimiento de la comercialización también implica el desarrollo de capacidades de gestión administrativa, comunicación y uso de herramientas digitales. Las alianzas con instituciones públicas, organizaciones sociales y operadores turísticos facilitan el acceso a mercados y la promoción de la oferta comunitaria.

    .cajon.color-secundario.p-4(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-5.mb-4
            .h5 Para recordar
            p Una comercialización sostenible del turismo comunitario requiere:
            p.mb-0 • Definir claramente el mercado objetivo.
            p.mb-0 • Presentar información accesible y transparente al visitante.
            p.mb-0 • Fijar precios que reconozcan el valor cultural y el trabajo comunitario.
            p.mb-0 • Distribuir los ingresos de manera equitativa.
            p.mb-0 • Planificar la demanda para proteger la capacidad del territorio.
          .col-lg-6.col-md-9
            img(src="@/assets/curso/Tema3/img07.png")













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
