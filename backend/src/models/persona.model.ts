import {Entity, model, property} from '@loopback/repository';

@model()
export class Persona extends Entity {
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
  primer_nombre: string;

  @property({
    type: 'string',
  })
  sugundo_nombre?: string;

  @property({
    type: 'string',
    required: true,
  })
  primer_apellido: string;

  @property({
    type: 'string',
  })
  segundo_apellido?: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo_documento: string;

  @property({
    type: 'string',
    required: true,
  })
  num_documento: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha_creacion: string;

  @property({
    type: 'string',
  })
  usuarioId?: string;

  constructor(data?: Partial<Persona>) {
    super(data);
  }
}

export interface PersonaRelations {
  // describe navigational properties here
}

export type PersonaWithRelations = Persona & PersonaRelations;
