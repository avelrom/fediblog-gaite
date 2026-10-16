import { SITE } from '../config';
import { actor } from '../lib/actor';

/** Metadatos del feed (RSS y JSON Feed) de este tema. */
export const feedChannel = {
  title: SITE.site.title,
  description: SITE.site.description || `Entradas de ${actor.handle}`,
  language: SITE.site.locale,
  author: actor.name,
  avatar: actor.avatar,
};
