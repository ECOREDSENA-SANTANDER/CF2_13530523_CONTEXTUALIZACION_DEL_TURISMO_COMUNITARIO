<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecoredsena.dev/ecored-pkg-sena/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Turismo comunitario: fundamentos y diagnóstico territorial',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> reconocer los elementos organizativos, culturales, sociales y económicos que sustentan el turismo comunitario sostenible, mediante el análisis de la comunidad, el perfil del turista y las actividades turísticas comunitarias, para fortalecer procesos de planificación, gestión y comercialización responsables en el territorio',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: 'El turismo comunitario se caracteriza principalmente por:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser gestionado por empresas privadas externas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Estar liderado por la comunidad y generar beneficios locales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Priorizar únicamente la rentabilidad económica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Desarrollarse solo en zonas urbanas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los elementos clave para la planificación estratégica del turismo comunitario y su aplicación en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: 'Una característica fundamental de la comunidad es:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La competencia individual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La ausencia de normas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La identidad y objetivos comunes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La dependencia externa permanente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los elementos clave para la planificación estratégica del turismo comunitario y su aplicación en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: 'El perfil del turista comunitario se distingue por:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Búsqueda exclusiva de lujo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Permanencias muy cortas sin contacto local.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Consumo masivo estandarizado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Interés en interacción cultural respetuosa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los elementos clave para la planificación estratégica del turismo comunitario y su aplicación en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: 'Las actividades turísticas comunitarias deben:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Artificializar la cultura local.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Excluir la participación comunitaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Basarse en prácticas reales del territorio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Priorizar solo visitantes extranjeros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los elementos clave para la planificación estratégica del turismo comunitario y su aplicación en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: 'La sostenibilidad en turismo comunitario implica:',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Equilibrio social, ambiental y económico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Crecimiento económico sin control.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Uso intensivo de recursos naturales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Beneficio exclusivo para operadores externos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los elementos clave para la planificación estratégica del turismo comunitario y su aplicación en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: 'La participación comunitaria permite:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Centralizar decisiones en actores externos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fortalecer la autogestión del territorio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la identidad cultural.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar alianzas institucionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los elementos clave para la planificación estratégica del turismo comunitario y su aplicación en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: 'Una actividad cultural comunitaria es:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Senderismo extremo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Turismo corporativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comercio industrial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Taller de artesanías tradicionales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los elementos clave para la planificación estratégica del turismo comunitario y su aplicación en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'La comercialización turística comunitaria busca:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ocultar información al visitante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Limitar la participación comunitaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la identidad cultural.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Promover y vender experiencias locales sostenibles.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los elementos clave para la planificación estratégica del turismo comunitario y su aplicación en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: 'Los estándares de calidad en turismo comunitario incluyen:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo hoteles de lujo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Servicios básicos y conectividad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Actividades culturales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Normas comunitarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los elementos clave para la planificación estratégica del turismo comunitario y su aplicación en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'Las alianzas estratégicas permiten:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Atención exclusiva a visitantes extranjeros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Trato digno, seguridad y protección del patrimonio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Rentabilidad sin criterios de sostenibilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Servicios solo para grupos organizados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los elementos clave para la planificación estratégica del turismo comunitario y su aplicación en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 11,
          texto: 'Una motivación del turista comunitario es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Consumo masivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aislamiento social.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aprendizaje cultural',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Desinterés ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los elementos clave para la planificación estratégica del turismo comunitario y su aplicación en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: 'El diseño de actividades turísticas debe ser:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Participativo y coherente con la comunidad',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Imposición externa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desarticulado del territorio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivo para expertos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los elementos clave para la planificación estratégica del turismo comunitario y su aplicación en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'La distribución de ingresos en turismo comunitario debe ser:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Concentrada en pocos actores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Equitativa para la comunidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Exclusiva del operador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No planificada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los elementos clave para la planificación estratégica del turismo comunitario y su aplicación en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: 'El patrimonio cultural en turismo comunitario debe:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Explotarse sin control.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituirse por cultura externa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Protegerse y transmitirse a futuras generaciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ignorarse en la planificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los elementos clave para la planificación estratégica del turismo comunitario y su aplicación en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'Las capacidades que deben desarrollar los prestadores de servicios turísticos comunitarios son:',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo habilidades de marketing digital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizativas, técnicas, de sostenibilidad y comercialización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Conocimientos exclusivamente financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Habilidades de negociación con operadores externos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los elementos clave para la planificación estratégica del turismo comunitario y su aplicación en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'El turismo comunitario contribuye principalmente a:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dependencia económica externa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pérdida cultural.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desarrollo local sostenible.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exclusión social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los elementos clave para la planificación estratégica del turismo comunitario y su aplicación en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: 'La autenticidad en turismo comunitario implica:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Escenarios artificiales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prácticas culturales reales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Adaptación total al mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminación de tradiciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los elementos clave para la planificación estratégica del turismo comunitario y su aplicación en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'El mercado objetivo permite:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Planificar productos turísticos adecuados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evitar la comercialización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir visitantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar promoción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los elementos clave para la planificación estratégica del turismo comunitario y su aplicación en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'La educación turística comunitaria favorece:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aprendizaje mutuo visitante-comunidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Relación distante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exclusión cultural.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Turismo masivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los elementos clave para la planificación estratégica del turismo comunitario y su aplicación en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: 'El turismo comunitario se consolida cuando:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se ignora la cultura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Predomina el interés externo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No hay planificación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Existe organización, sostenibilidad y beneficios locales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los elementos clave para la planificación estratégica del turismo comunitario y su aplicación en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
