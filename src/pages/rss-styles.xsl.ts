import { rssXsl } from '@fediblog/core/lib/rss-xsl';

// Hoja de estilo con la que el navegador muestra el feed (los lectores RSS la ignoran).
export const GET = () =>
  rssXsl({
    light: { bg: '#ffffff', fg: '#111111', muted: '#71717a', line: '#f0f0f1', soft: '#fafafa', accent: '#52525b' },
    dark: { bg: '#09090b', fg: '#e4e4e7', muted: '#a1a1aa', line: '#27272a', soft: '#18181b', accent: '#d4d4d8' },
    font: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  });
