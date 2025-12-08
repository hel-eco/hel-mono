import { createDraft } from 'limu';

export {
  delay,
  helloAsync,
} from '@ml/utils/path/to/async-hello';

/**
 * 对 hel 说你好
 */
export function hello() {
  return 'hel hello v1.0.3';
}

export function callGet() {
  const draft = createDraft({ a: 1 });
  return draft;
}
