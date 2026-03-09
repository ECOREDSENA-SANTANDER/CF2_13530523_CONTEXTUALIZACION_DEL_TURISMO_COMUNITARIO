export default {
  global: {
    Name: 'Planificación estratégica del turismo comunitario',
    Description:
      'Cada territorio esconde un potencial turístico que solo la comunidad puede activar. Este componente formativo desarrolla las capacidades para reconocer la comunidad como actor central, comprender el perfil del turista comunitario y diseñar actividades turísticas pertinentes, con el propósito de formular y concertar líneas estratégicas sostenibles, inclusivas y coherentes con las realidades del territorio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Comunidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y características',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Organización, cultura y creencias',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Perfil del turista comunitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto, características y tipos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Procedencia, motivaciones e importancia estratégica',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Actividades turísticas comunitarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto y características',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de actividades',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Diseño de actividades',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Alianzas estratégicas y calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Alianzas estratégicas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Capacidades a desarrollar',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Estándares de calidad',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Alianzas estratégicas',
      significado:
        'Acuerdos de cooperación entre actores para fortalecer sostenibilidad, calidad y gestión del turismo comunitario.',
    },
    {
      termino: 'Autogestión comunitaria',
      significado:
        'Capacidad de la comunidad para organizarse, tomar decisiones y administrar su propio desarrollo turístico.',
    },
    {
      termino: 'Comercialización turística',
      significado:
        'Proceso de promoción, difusión y venta organizada de experiencias turísticas comunitarias sostenibles.',
    },
    {
      termino: 'Comunidad',
      significado:
        'Grupo de personas organizadas con identidad, normas, cultura y objetivos compartidos en un territorio.',
    },
    {
      termino: 'Cultura',
      significado:
        'Conjunto de valores, saberes, prácticas y expresiones que identifican a una comunidad.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'Modelo que equilibra bienestar social, protección ambiental y viabilidad económica a largo plazo.',
    },
    {
      termino: 'Identidad territorial',
      significado:
        'Rasgos culturales, históricos y sociales que distinguen a una comunidad y su territorio.',
    },
    {
      termino: 'Infraestructura turística',
      significado:
        'Servicios básicos, vías, equipamientos y conectividad que permiten la actividad turística.',
    },
    {
      termino: 'Participación comunitaria',
      significado:
        'Intervención activa de la comunidad en decisiones, planificación y gestión del turismo.',
    },
    {
      termino: 'Perfil del turista comunitario',
      significado:
        'Características, motivaciones e intereses de visitantes que buscan experiencias responsables y auténticas.',
    },
    {
      termino: 'Prestadores de servicios turísticos',
      significado:
        'Personas u organizaciones que ofrecen experiencias, atención y servicios a visitantes.',
    },
    {
      termino: 'Sostenibilidad sociocultural',
      significado:
        'Protección de la cultura, tradiciones y relaciones sociales en la actividad turística.',
    },
    {
      termino: 'Turismo comunitario',
      significado:
        'Actividad turística gestionada por comunidades que genera beneficios sociales, culturales y económicos locales.',
    },
    {
      termino: 'Turista comunitario',
      significado:
        'Visitante interesado en interacción respetuosa, aprendizaje cultural y apoyo al desarrollo local.',
    },
    {
      termino: 'Vocación turística',
      significado:
        'Potencial del territorio para desarrollar actividades turísticas según recursos y características locales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Banco Interamericano de Desarrollo. (2023). Turismo comunitario y desarrollo local sostenible en América Latina.',
      link: '',
    },
    {
      referencia:
        'Córdova-Buiza, F., Medina-Viruel, M. J., & Pérez-Gálvez, J. C. (2025). Community-based rural tourism: A mapping technique analysis study from 2005 to 2023. Humanities and Social Sciences Communications.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2012). Guía de turismo comunitario en Colombia.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2018). Ruta de implementación del turismo comunitario.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2021). Lineamientos de política para el desarrollo del turismo comunitario en Colombia.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2022). Política de turismo sostenible.',
      link: '',
    },
    {
      referencia: 'ONU Turismo. (2021). Turismo y comunidades locales.',
      link: '',
    },
    {
      referencia:
        'ONU Turismo. (2023). Panorama del turismo internacional 2023.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura. (2019). Cultura y turismo sostenible.',
      link: '',
    },
    {
      referencia:
        'ProColombia. (2024). Informe de turismo receptivo en Colombia.',
      link: '',
    },
    {
      referencia:
        'Wearing, S., & McDonald, M. (2002). The development of community-based tourism: Re-thinking the relationship between tour operators and development agents as intermediaries in rural and isolated area communities. Journal of Sustainable Tourism, 10(3), 191–206.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: ' ',
          cargo: ' ',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: ' ',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
