/**
 * Ajustes del sitio, agrupados por secciones. Casi todo lo que se ve o se hace
 * se controla desde aquí.
 *
 * Gaite no lleva contenido propio: las entradas son los
 * mensajes públicos de una cuenta del fediverso (Mastodon, Pixelfed,
 * GoToSocial…), descargados en la compilación desde su «outbox» de ActivityPub.
 */
export const SITE = {
  // ═══════════════════════════════════════════════════════════════════════
  //  CUENTA
  // ═══════════════════════════════════════════════════════════════════════

  /**
   * De dónde viene la cuenta:
   *   'mastodon' → ActivityPub (Mastodon, Pixelfed, GoToSocial…).
   *   'bluesky'  → AT Protocol (Bluesky).
   */
  source: 'mastodon' as 'mastodon' | 'bluesky',
  /**
   * Cuenta de la que se leen las entradas. Debe ser pública.
   *   Mastodon/Pixelfed: '@usuario@instancia'.
   *   Bluesky: 'usuario.bsky.social' o tu dominio propio (con o sin @).
   */
  handle: '@fediblogtest@mastodon.social',

  // ═══════════════════════════════════════════════════════════════════════
  //  SITIO
  // ═══════════════════════════════════════════════════════════════════════

  site: {
    /** Título: barra del navegador, cabecera y RSS. */
    title: 'Gaite',
    /** Descripción corta: metadatos y RSS. Vacía → se usa la bio de la cuenta. */
    description: 'Notas sobre los cuadros del almacén: los que están en depósito, los que viajan, los que nadie mira.',
    /** Idioma de la interfaz y los metadatos ('es-ES', 'en', 'gl-ES'…). */
    locale: 'es-ES',
    /**
     * Entradas del menú de arriba y su orden. Opciones:
     * 'home', 'archive', 'about', 'rss'.
     * (Cada una aparece solo si su sección está activada.)
     */
    nav: ['about', 'archive', 'rss'] as (
      | 'home'
      | 'about'
      | 'archive'
      | 'rss'
    )[],
    /**
     * Enlaces del menú: el texto que se muestra y su icono (de Lucide, o de
     * Phosphor con prefijo `ph:`, p. ej. `'ph:house'`). Icono vacío = solo texto.
     */
    menu: {
      about: {
        label: 'Acerca de',
        icon: 'user',
      },
      archive: {
        label: 'Archivo',
        icon: 'archive',
      },
      rss: {
        label: 'RSS',
        icon: 'rss',
      },
      home: {
        label: 'Inicio',
        icon: '',
      },
    },
    /**
     * Tamaños de texto (S / M / L) que ofrece el selector. Uno solo = el blog
     * siempre se ve a ese tamaño y no aparece el selector.
     */
    sizes: ['sm', 'md', 'lg'] as ('sm' | 'md' | 'lg')[],
    /** Tamaño con el que se abre el blog (debe estar en `sizes`; si no, M o el primero). */
    defaultSize: 'md' as 'sm' | 'md' | 'lg',
    /**
     * Dónde sustituir los enlaces de texto por iconos de Lucide:
     *   'both'    → en móvil y en escritorio.
     *   'mobile'  → solo en móvil (en escritorio se muestra el texto).
     *   'desktop' → solo en escritorio (en móvil se muestra el texto).
     *   'none'    → desactivado (siempre texto, aunque haya iconos configurados).
     * También acepta: 'ambos', 'movil', 'escritorio', 'ninguno'.
     */
    navIconsMode: 'both' as
      | 'both'
      | 'mobile'
      | 'desktop'
      | 'none'
      | 'ambos'
      | 'movil'
      | 'escritorio'
      | 'ninguno',
    /**
     * En móvil (pantallas estrechas), ocultar los iconos de redes sociales del menú
     * para no saturar la barra superior. Se consultan en «Acerca de».
     */
    hideSocialOnMobile: true,
    /**
     * Favicon del sitio (icono en la pestaña del navegador).
     * Puedes personalizar la letra (o emoji) y el color de fondo.
     */
    favicon: {
      /** Letra, inicial o emoji a mostrar en el icono de la pestaña. */
      letter: 'G',
      /** Color de fondo del favicon. */
      background: '#1a1a1a',
      /** Color del texto o letra (por defecto blanco). */
      color: '#ffffff',
    },
    /**
     * Formato de fecha en todo el sitio. SOLO números.
     * Tokens: d, dd (día) · m, mm (mes) · yy, yyyy (año).
     * Separadores: «/», «-», «.». Ejemplos: 'dd/mm/yyyy', 'dd/mm/yy',
     * 'dd/mm', 'yyyy-mm-dd', 'd.m.yy'.
     */
    dateFormat: 'dd/mm/yyyy',
    /**
     * Letra del blog:
     *   'sans'  → sans-serif nítida (por defecto).
     *   'serif' → serifa, de lectura clásica.
     *   'mono'  → monoespaciada, más austera.
     */
    font: 'sans' as 'sans' | 'serif' | 'mono',
    /**
     * Paleta de colores del sitio.
     * Puedes personalizar cualquiera de estos valores (hex, rgb o hsl).
     */
    colors: {
      title: null as string | null,
      accent: '#52525b',
      bg: '#ffffff',
      fg: '#111111',
      prose: '#2d2d32',
      muted: '#71717a',
      meta: '#d4d4d8',
      rule: '#f0f0f1',
      // Paleta en modo oscuro
      darkBg: '#09090b',
      darkFg: '#f4f4f5',
      darkProse: '#e4e4e7',
      darkMuted: '#a1a1aa',
      darkMeta: '#71717a',
      darkRule: '#27272a',
    },
    /**
     * Color de acento: borde del buscador, etiquetas, aviso de contenido,
     * destacados… Un color CSS cualquiera (hex, rgb, hsl).
     */
    accent: '#52525b',
    /**
     * Tamaño del texto en cada elemento, a elegir entre xs, s, m, l y xl
     * (m = el del tema). No tiene que ver con el S/M/L de los lectores, que
     * cambia el diseño general.
     */
    fontSize: {
      /** Nombre del sitio en la cabecera. */
      brand: 'm' as 'xs' | 's' | 'm' | 'l' | 'xl',
      /** Títulos de los listados (inicio, archivo, etiquetas). */
      title: 'm' as 'xs' | 's' | 'm' | 'l' | 'xl',
      /** Título dentro de cada entrada. */
      postTitle: 'm' as 'xs' | 's' | 'm' | 'l' | 'xl',
      /** Texto de lectura de las entradas y extractos. */
      body: 'm' as 'xs' | 's' | 'm' | 'l' | 'xl',
    },
    /**
     * Modo oscuro:
     *   'auto'   → sigue al sistema, sin botón ni JavaScript.
     *   'toggle' → botón en la cabecera (claro/oscuro), recordado en el navegador.
     *   'light'  → siempre claro.
     *   'dark'   → siempre oscuro.
     */
    darkMode: 'toggle' as 'toggle' | 'auto' | 'light' | 'dark',
    /**
     * Disposición:
     *   'single'  → una columna centrada (por defecto).
     *   'sidebar' → dos columnas: título, foto y menú a la izquierda; las
     *               entradas a la derecha. Más ancha.
     * En pantallas estrechas ambas colapsan a una columna.
     */
    layout: 'single' as 'single' | 'sidebar',
    /** Ancho máximo del sitio, en rem. En 'sidebar' se ensancha para la barra. */
    width: 52,
    /**
     * Ancho de la columna de texto de las entradas, en rem. Ponlo menor que
     * `width` para una medida de lectura más estrecha; igual, para aprovechar
     * todo el ancho.
     */
    readingWidth: 52,
    /**
     * URLs legibles (`/una-frase-123456/`). En `false`, solo el id numérico
     * del mensaje, que nunca cambia aunque edites el texto.
     */
    readableSlugs: true,
    /**
     * Panel lateral de vista previa: un botón flotante que deja marcar o
     * desmarcar, sobre las propias páginas del sitio, qué elementos mostrar
     * en cada vista (listado, entrada, «Acerca de», archivo…) y exportar
     * después los cambios listos para pegar aquí. Pensado para decidir la
     * configuración antes de tocar este archivo, no para un blog ya en
     * marcha — por eso viene en `false`: quien clona este tema para su
     * propio blog no lo lleva puesto. Si aun así lo quieres en tu blog
     * (para ti, no para tus lectores), ponlo en `true` aquí.
     *
     * El «Live Preview» de Fediblog lo activa aparte, con la variable de
     * entorno `PUBLIC_FB_LIVE_PREVIEW=1` en su propio despliegue — no hace
     * falta tocar esta línea para eso, y esa variable no viaja al clonar el
     * repo (no está en ningún archivo, vive en la configuración del hosting).
     */
    previewSidebar: false,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  INGESTA  (qué se descarga y cómo se agrupa)
  // ═══════════════════════════════════════════════════════════════════════

  ingest: {
    /** Unir las autorrespuestas encadenadas en una sola entrada larga. */
    joinThreads: true,
    /**
     * Publicar solo los mensajes que llevan esta marca (emoji o texto), y
     * quitarla del contenido. `null` = todos los mensajes de nivel raíz.
     */
    marker: '✍🏻' as string | null,
    /** Dónde debe ir la marca: 'start' | 'end' | 'contain'. */
    markerMode: 'end' as 'start' | 'end' | 'contain',
    /**
     * Marca para destacar una entrada: si el mensaje raíz lleva este emoji (en
     * cualquier posición), la entrada aparece resaltada y agrupada arriba en el
     * archivo. Se quita del contenido. `null` = solo cuentan los fijados de la
     * cuenta.
     */
    featureMarker: '⭐' as string | null,
    /**
     * Marca para silenciar comentarios en una entrada: si el mensaje raíz
     * lleva este emoji (en cualquier posición), esa entrada no trae ni
     * muestra comentarios, aunque `post.showComments` esté activo. Se quita
     * del contenido. Útil para un toot donde cerraste las respuestas o no
     * quieres que se vean. `null` = nunca se silencian por marca.
     */
    muteCommentsMarker: '🔇' as string | null,
    /** Techo de mensajes a recorrer hacia atrás en la primera descarga. */
    maxPosts: 120,
    /**
     * Usar la primera frase del mensaje como título de la entrada. Al activarlo,
     * esa frase se quita del cuerpo (no se repite). No aplica si el mensaje
     * lleva aviso de contenido (ahí el título es el aviso).
     */
    firstSentenceAsTitle: true,
    /**
     * Renderizar como Markdown los segmentos que llevan un bloque de código
     * (```…```) o una cita (`> …`); Mastodon de serie los deja como texto
     * plano. Solo se toca el segmento que los usa; el resto queda tal cual.
     */
    renderMarkdown: true,
    // Las respuestas a otras personas y los reimpulsos (boosts) NUNCA entran.
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  PÁGINA DE INICIO
  // ═══════════════════════════════════════════════════════════════════════

  home: {
    /** Entradas por página en el índice. */
    postsPerPage: 10,

    /** Bloque de presentación en la cabecera de la primera página. */
    intro: {
      show: true,
      /** Imagen cuadrada (el avatar de la cuenta) a la izquierda del bloque. */
      avatar: true,
      /** Tokens disponibles: {title} {name} {handle} {bio} {count}. Vacío por defecto para un inicio sobrio. */
      title: '',
      /** Igual; si es exactamente «{bio}» se muestra la bio con su formato. */
      subtitle: '{bio}',
    },

    /** Mostrar el título de cada entrada en la tarjeta. */
    showTitle: true,
    /** Mostrar la descripción/subtítulo de la entrada si la tiene. */
    showDescription: true,

    /**
     * Fila de datos (fecha, lectura, métricas) en cada tarjeta:
     *   'always' → siempre visible.
     *   'hover'  → aparece al pasar el ratón (siempre visible en táctil).
     *   'never'  → nunca.
     */
    metaVisibility: 'hover' as 'always' | 'hover' | 'never',
    /** Mostrar la fecha de cada entrada en la tarjeta. */
    showDate: true,
    /** Mostrar las métricas (me gusta y compartidas). */
    showMetrics: true,
    /** Mostrar la primera imagen de la entrada como portada de la tarjeta. */
    showCover: true,

    excerpt: {
      /** Mostrar un extracto del cuerpo bajo el título o descripción. */
      show: true,
      /** Longitud máxima del extracto, en caracteres. */
      maxChars: 220,
    },
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  ENTRADA
  // ═══════════════════════════════════════════════════════════════════════

  post: {
    /** Mostrar la fecha (y la de última novedad si la hay). */
    showDate: true,
    /** Mostrar las métricas (me gusta y compartidas). */
    showMetrics: true,
    /** Mostrar las etiquetas al final de la entrada. */
    showTags: true,

    /**
     * Mostrar los comentarios (respuestas de otras cuentas). Usa la API
     * pública de la instancia y añade una petición por entrada.
     */
    showComments: true,
    /** Máximo de comentarios de primer nivel por entrada. */
    commentLimit: 30,
    /**
     * Avatares de los comentarios:
     *   'remote'   → foto real de cada cuenta (DiceBear de reserva si falta).
     *   'dicebear' → siempre generado; no se descarga ninguna imagen real.
     */
    commentAvatars: 'remote' as 'remote' | 'dicebear',
    /** Estilo de DiceBear (dicebear.com/styles). */
    dicebearStyle: 'notionists-neutral', // caras a línea: trazo fino, a juego con la tipografía
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  PERFIL  (página «Acerca de»)
  // ═══════════════════════════════════════════════════════════════════════

  profile: {
    /** Página «Acerca de» y su enlace en el menú. Si la desactivas, ni existe la página ni sale el enlace. */
    show: true,
    /** Tu nombre en «Acerca de». `null` = el de tu cuenta del fediverso. */
    name: null as string | null,
    /** Tu texto en «Acerca de» (párrafos separados por una línea en blanco). `null` = la biografía de tu cuenta. */
    bio: null as string | null,
    /** Texto libre adicional, bajo la biografía (párrafos separados por una línea en blanco). Vacío = nada: no se añade ningún texto automático. */
    extraText: null as string | null,
    /** Mostrar la imagen de cabecera del perfil (el banner de la cuenta). */
    showBanner: true,
    /** Mostrar la foto de perfil junto al nombre. */
    showAvatar: true,
    /** Mostrar la biografía. */
    showBio: true,
    /** Mostrar el número de seguidores (si la instancia lo hace público). */
    showFollowers: true,
    /** Mostrar los campos personalizados del perfil de la cuenta (sitio web, pronombres…). */
    showFields: true,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  ARCHIVO
  // ═══════════════════════════════════════════════════════════════════════

  archive: {
    /** Página `/archivo/` con todas las entradas por año. */
    show: true,
    /**
     * Buscador oculto: no ocupa sitio; se abre con el botón de la cabecera o
     * con «/» (también Ctrl/Cmd+K). Índice estático (título, extracto,
     * etiquetas) y un JS mínimo.
     */
    showSearch: true,
    /** Nube de etiquetas en la cabecera (si hay etiquetas). */
    showTagCloud: true,
    /** Bloque de destacados (mensajes fijados en la cuenta) al principio. */
    showFeatured: true,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  EDITOR  (página oculta /editor/ — nunca sale en el menú)
  // ═══════════════════════════════════════════════════════════════════════

  editor: {
    /** Genera la página /editor/: un editor Markdown para redactar y copiar a Mastodon. */
    show: true,
    /**
     * Sustituciones tipográficas por defecto en el editor: -- → «–»,
     * --- → «—», ... → «…», comillas rectas → curvas, flechas… El editor
     * tiene un interruptor para activarlas o desactivarlas.
     */
    smartTypography: true,
    /**
     * Límite de caracteres de tu instancia (Mastodon de serie: 500). Cuando el
     * texto lo supera, el editor lo parte en varios mensajes para copiar y
     * pegar en hilo. Se puede cambiar sobre la marcha en la propia página.
     */
    charLimit: 500,
    /**
     * Icono o marca opcional para incluir al final del texto o junto al enlace
     * (ej: '✍🏻', '🔗', etc. Vacío = sin icono). Se puede cambiar sobre la marcha
     * en el editor.
     */
    endIcon: '✍🏻',
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  REDES SOCIALES  (todas opcionales; deja en '' las que no uses)
  // ═══════════════════════════════════════════════════════════════════════

  /**
   * Cuentas de redes sociales enlazadas en el menú / cabecera.
   * Puedes usar la URL completa o simplemente el usuario / cuenta de cada aplicación
   * (ej: 'bluesky', 'instagram', 'pixelfed', '@mastodon@mastodon.social').
   * Deja en '' las que no uses.
   */
  social: {
    mastodon: 'https://mastodon.social/@mastodon',
    bluesky: 'https://bsky.app/profile/bsky.app',
    instagram: 'https://www.instagram.com/instagram/',
    pixelfed: 'https://pixelfed.social/pixelfed',
    substack: '',
  },
} as const;

/** Rutas fijas del sitio. */
export const PATHS = {
  tags: 'etiquetas',
} as const;
