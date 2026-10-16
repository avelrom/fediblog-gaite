import { defineCollection } from 'astro:content';
import { siteLoader } from '@fediblog/core/site-loader';
import { notaSchema } from '@fediblog/core/schema';
import { SITE } from './config';

// La colección «notas» no vive en disco: la puebla el loader a partir de la
// cuenta del fediverso indicada en src/config.ts (SITE.handle).
const notas = defineCollection({
  loader: siteLoader(SITE, {
    dicebearBackground: ['e4e4e7', 'd4d4d8', 'a1a1aa'], // paleta del tema
  }),
  schema: notaSchema,
});

export const collections = { notas };
