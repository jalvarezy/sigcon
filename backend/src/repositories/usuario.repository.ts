import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory} from '@loopback/repository';
import {SigconMainDbDataSource} from '../datasources';
import {Usuario, UsuarioRelations, Rol, Persona} from '../models';
import {RolRepository} from './rol.repository';
import {PersonaRepository} from './persona.repository';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.id,
  UsuarioRelations
> {

  public readonly rol_usuario: BelongsToAccessor<Rol, typeof Usuario.prototype.id>;

  public readonly persona: HasOneRepositoryFactory<Persona, typeof Usuario.prototype.id>;

  constructor(
    @inject('datasources.SigconMainDB') dataSource: SigconMainDbDataSource, @repository.getter('RolRepository') protected rolRepositoryGetter: Getter<RolRepository>, @repository.getter('PersonaRepository') protected personaRepositoryGetter: Getter<PersonaRepository>,
  ) {
    super(Usuario, dataSource);
    this.persona = this.createHasOneRepositoryFactoryFor('persona', personaRepositoryGetter);
    this.registerInclusionResolver('persona', this.persona.inclusionResolver);
    this.rol_usuario = this.createBelongsToAccessorFor('rol_usuario', rolRepositoryGetter,);
    this.registerInclusionResolver('rol_usuario', this.rol_usuario.inclusionResolver);
  }
}
