import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {Rol} from './rol.model';
import {Persona} from './persona.model';

@model()
export class Usuario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre_usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  @property({
    type: 'boolean',
    required: true,
  })
  activo: boolean;

  @belongsTo(() => Rol, {name: 'rol_usuario'})
  rol_id: string;

  @hasOne(() => Persona)
  persona: Persona;

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
