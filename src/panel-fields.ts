/**
 * Ajustes del panel de configuración que solo tiene Gaite (los comunes están en
 * @fediblog/core/lib/config-fields). Salen siempre, en cualquier página.
 */
import type { ConfigField } from '@fediblog/core/lib/config-fields';

export const GAITE_FIELDS: ConfigField[] = [
  { field: 'site.layout', label: 'Disposición', group: 'Sitio', type: 'select', apply: 'root-attr:data-layout', options: [['single', 'Una columna'], ['sidebar', 'Dos columnas']], hint: 'Una columna o dos (cabecera lateral).' },
  { field: 'site.colors.bg', label: 'Color de fondo', group: 'Colores', type: 'color', apply: 'css-var', cssVar: '--bg', hint: 'Fondo de todo el sitio.' },
  { field: 'site.colors.fg', label: 'Color del texto', group: 'Colores', type: 'color', apply: 'css-var', cssVar: '--fg', hint: 'Color del texto principal.' },

  { field: 'home.postsPerPage', label: 'Entradas por página', group: 'Inicio', type: 'text', preview: false },
  { field: 'home.intro.show', label: 'Bloque de presentación', group: 'Inicio', preview: false },
  { field: 'home.intro.avatar', label: 'Avatar en la presentación', group: 'Inicio', preview: false },
  { field: 'home.showTitle', label: 'Título de cada entrada', group: 'Inicio', preview: false },
  { field: 'home.showDescription', label: 'Descripción de cada entrada', group: 'Inicio', preview: false },
  { field: 'home.showCover', label: 'Imagen de portada de cada entrada', group: 'Inicio', preview: false },
  { field: 'home.showDate', label: 'Fecha de cada entrada', group: 'Inicio', preview: false },
  { field: 'home.showMetrics', label: '«Me gusta» y compartidas en el listado', group: 'Inicio', preview: false },
  { field: 'home.excerpt.show', label: 'Extracto', group: 'Inicio', preview: false },
  { field: 'home.excerpt.maxChars', label: 'Longitud del extracto (caracteres)', group: 'Inicio', type: 'text', preview: false },
  {
    field: 'home.metaVisibility', label: 'Cuándo mostrar fecha y métricas', group: 'Inicio', type: 'select', preview: false,
    options: [['always', 'Siempre'], ['hover', 'Al pasar el ratón'], ['never', 'Nunca']],
  },

  { field: 'post.showDate', label: 'Fecha de la entrada', group: 'Entradas', preview: false },
  { field: 'post.showTags', label: 'Etiquetas de la entrada', group: 'Entradas', preview: false },
  { field: 'ingest.firstSentenceAsTitle', label: 'Usar la primera frase como título', group: 'Contenido', preview: false },


  { field: 'archive.showTagCloud', label: 'Nube de etiquetas', group: 'Archivo', preview: false },
  { field: 'archive.showFeatured', label: 'Bloque de destacados', group: 'Archivo', preview: false },
  { field: 'archive.showSearch', label: 'Buscador', group: 'Archivo', preview: false },
];
