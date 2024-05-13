export default {
  global: {
    componenteFormativo: 'Datos y sistemas de información',
    descripcionCurso:
      'Los cambios que afrontan las organizaciones, producto de la globalización y de los avances tecnológicos, donde el almacenamiento y la clasificación de los datos es cada vez más importante, permite  considerar la manipulación de dichos volúmenes de datos, lo cual trae consigo un alto grado de responsabilidad en seguridad, conservación y no duplicación, monitoreando siempre los riesgos que pueden presentarse.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clasificación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Variables',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Analítica',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Normativa',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Herramientas de análisis',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: '<i>Big data</i>',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Confidencialidad',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistemas de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '<i>Software</i> malicioso',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas de seguridad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Políticas de usuario',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Conservación de la información',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Gestión del sistema basado en riesgos',
            hash: 't_2_5',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/123500_CF08_DU.zip',
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
  complementario: [
    {
      tema: '<i>Big data</i>',
      referencia:
        'Dawn, H. &  Otero-Piñeiro, D. (2018). <i>Big data</i>: una breve introducción. Antoni Bosch Editor.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_elibroELB122682',
    },
    {
      tema: '<i>Big data</i>',
      referencia:
        'Spain BS. (2015). <em>Webinar "big data para dummies"</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fZhpLdZx5Qg&ab_channel=SpainBS',
    },
    {
      tema: 'Sistemas de información',
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (2014). Tecnología de la información: técnicas de seguridad. Gestión de incidentes de seguridad de la información. ICONTEC. ',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000075887',
    },
    {
      tema: '<i>Software</i> malicioso',
      referencia:
        'Razak, M., Anuar, N., Salleh, R. & Firdaus, A. (2016). The rise of <em>“malware”</em>: bibliometric analysis of malware study. <em>Journal of network and computer applications</em> (75), p. 58-76. ',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_gale_infotracacademiconefile_A518245030',
    },
  ],
  glosario: [
    {
      termino: '<i>Big data</i>',
      significado:
        'Fenómeno que se caracteriza por la generación de grandes volúmenes de datos en diversas fuentes de información y a una rápida velocidad en su generación. Es un sistema sociotécnico para la explotación masiva de datos, que requiere en las entidades públicas la disponibilidad de recursos tecnológicos para enfrentar los retos de procesamiento, el diseño y ejecución de procesos que permitan la replicabilidad y la sistematización de la explotación de datos y el recurso humano para ejecutarlos.',
    },
    {
      termino: 'Datos',
      significado:
        'Se denomina dato a cualquier objeto que pueda entregar información o significado para el lector. El dato puede ser manipulable en forma manuscrita o por medio de un computador. Puede ser un carácter capturado desde un teclado, extraído de algún espacio de memoria en disco o almacenado en la memoria central.',
    },
    {
      termino: 'Seguridad de la información',
      significado:
        'Es la encargada de proteger los datos contra robo de información, acceso no autorizado, obstaculización al sistema informático, manipulación y/o eliminación de datos. Cuando se habla de procesos empresariales impulsados en la transformación digital con tecnología de punta se entiende que están expuestos a diferentes vulnerabilidades, amenazas y ataques informáticos dirigidos a la seguridad y la privacidad de la información. Mediante la Norma ISO 27001 la implementación del SGSI sigue el modelo Planificar – Hacer – Verificar – Actuar para la mejora continua de los procesos.',
    },
    {
      termino: 'Variables',
      significado:
        'Es el nombre que se da a una serie de caracteres con el fin de categorizar o interpretar de una forma más sencilla alguna información que se quiera estudiar, también pueden almacenar distintos tipos de datos: enteros, reales, matriciales, caracteres, etc.',
    },
  ],
  referencias: [
    {
      referencia:
        'Archivo General de la Nación. (2018). Fundamentos de preservación digital a largo plazo. Archivo General de la Nación.',
      link:
        'https://www.archivogeneral.gov.co/caja_de_herramientas/docs/6.%20preservacion/DOCUMENTOS%20TECNICOS/FUNDAMENTOS%20PRESERVACION%20DIGITAL%20LARGO%20PLAZO.pdf',
    },
    {
      referencia:
        'DNP. (2020). Guía normativa aplicable a la explotación de datos. DNP.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Desarrollo%20Digital/Documentos/Modelo%20Explotacion%20de%20datos/2.3%20Gu%C3%ADa%20normativa%20explotaci%C3%B3n%20de%20datos_VF.pdf',
    },
    {
      referencia:
        'Glosarioit.com. (2022). Dato - Sección informática. Glosarioit.',
      link: 'https://www.glosarioit.com/Dato',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Abel Fernando Becerra Carrillo',
          cargo: 'Experto temático',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Miroslava GonzálezHernández',
          cargo: 'Diseño y evaluadora instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Silvia Milena SequedaCárdenas',
          cargo: 'Asesoría metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de desarrollo curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluación instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseño web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollo Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
