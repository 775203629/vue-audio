/**
 * The type of `value` passed in `setAttribure` is string.
 * However, According to the spec, the type of `value` is one of the Boolean、String、Number
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
 */

declare class Element extends Node {
   setAttribute(name?: string, value?: mixed): void;
}
