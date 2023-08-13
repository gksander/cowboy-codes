import katex from "katex";
import { createElement, type ComponentChild, cloneElement } from "preact";
import { useEffect, useRef } from "preact/hooks";
import type { JSXInternal } from "preact/src/jsx";

type MathDisplayProps<T extends keyof JSXInternal.IntrinsicElements> = {
  tag: T;
  children: string;
} & JSXInternal.IntrinsicElements[T];

export function MathDisplay<T extends keyof JSXInternal.IntrinsicElements>({
  tag,
  children,
  ...rest
}: MathDisplayProps<T>) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      katex.render(children, ref.current, { throwOnError: false });
    }
  }, [children]);

  return createElement(tag, { ...rest, ref });
}
