import { EntityRepository, Like, Repository } from 'typeorm';
import Publication from '../entities/Publication';

@EntityRepository(Publication)
class publicationRepository extends Repository<Publication> {
  async Create(publication: Object) {
    const savepublication = await this.create(publication);
    await this.save(savepublication);

    return { publication: savepublication };
  }
  async Update(id: string, publication: Object) {
    await this.update(id, publication);
    return { message: 'atualizado com sucesso' };
  }
  async Find(name: string){
    const publications = await this
    .createQueryBuilder()
    .select()
    .where("name LIKE %:name%", { name })

    return publications
  }

}
export default publicationRepository;
