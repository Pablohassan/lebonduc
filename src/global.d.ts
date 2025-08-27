// Minimal JSX definitions for a non‑typed React environment.
// Without this file, TypeScript will error on any JSX element because
// it can't find the standard JSX namespace.  This definition tells
// TypeScript to accept any intrinsic elements and attributes.
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
  interface IntrinsicAttributes {
    [attrName: string]: any;
  }
}
