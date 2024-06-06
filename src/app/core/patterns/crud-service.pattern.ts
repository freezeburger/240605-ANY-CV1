import { Observable } from "rxjs";
import { TextShort, UniqueId, Url } from "../types/generics.types";

/**
 * CRUD Service Pattern
 *
 * All  services that are responsible for CRUD operations should implement this pattern.
 *
 * CRUD operations:
 * - Create POST
 * - Read GET
 * - Update PUT
 * - Delete DELETE
 *
 * All services sould have a api endpoint that is used to make requests to the server.
 */
export interface YCrudServicePattern<Entity extends YEntityWithId, Endpoint extends Url> {

  /**
   * The api endpoint of the service
   */
  endpoint:Endpoint;

  /**
   * Outgoing data should not contain the id field
   * @param data - The entity to be created
   */
  create( data:Omit<Entity,'id'> ):Observable< YCrudServiceResponse<Entity> >;

  /**
   * Read an entity
   * @param target - The entity to be read
   */
  read():Observable< YCrudServiceResponse<Entity[]> >;
  read(target:Entity['id']):Observable< YCrudServiceResponse<Entity> >;
  read(target?:Entity['id'] ):Observable< YCrudServiceResponse<Entity[] | Entity> >;

  /**
   * Update an entity
   * @param target - The entity to be updated
   * @param data - The new data to be updated
   */
  update(target:Entity, data:Partial<Omit<Entity,'id'>> ):Observable< YCrudServiceResponse<Entity> >;

  /**
   * Delete an entity
   * @param target - The entity to be deleted
   */
  delete(target:Entity):Observable< YCrudServiceResponse<Entity> >;
}

export interface YCrudServiceResponse<P> {
  status: 'success' | 'error';
  message: TextShort;
  payload: P | null;
}

/**
 * Entity with Id
 */
export interface YEntityWithId {
  id:UniqueId
}
