import type { UiDict } from './i18n-id';

export type { UiDict } from './i18n-id';
export { id } from './i18n-id';

export function loadEnDict(): Promise<UiDict> {
  return import('./i18n-en').then((m) => m.en);
}
