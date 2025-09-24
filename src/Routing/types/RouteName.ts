/**
 * @fileoverview Defines the type and constant values for navigable pages in the application.
 * Using a string literal union for the type provides compile-time safety.
 * The `PAGES` object provides a convenient way to access page identifiers,
 * mimicking the behavior of an enum without violating erasable syntax rules.
 */

// String literal union for type safety
export type RouteName = "monde-bleu" | "monde-orange" | "monde-vert";
