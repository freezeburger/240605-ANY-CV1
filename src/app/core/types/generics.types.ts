/**
 * Generics Types
 *
 * Semantics: "alias de types" pour les valeurs standards utilisées dans l'application
 */


/**
 * UniqueId - A unique identifier for an entity within the same collection
 */
export type UniqueId = string | number;


/**
 * Username - A capitalized user name
 */
export type Username = Capitalize<string> ;


/**
 * TextLong - An unbounded text value
 */
export type TextLong = string;

/**
 * TextShort - A text value bounded to 15 characters
 */
export type TextShort = string;


/**
 * Email - A valid corporate email address
 */
export type Email<Domain extends string> = Lowercase<`${string}.${string}@${Domain}`>;

/**
 * Url - A url link
 */
export type Url= Lowercase<`${'http'| 'https'}://${string}`>;

