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
    const publications = name ? (await this
    .createQueryBuilder()
    .select()
    .where("name LIKE %:name%", { name })) : (await this.find())
    const total_count = await this.count()
    return {items: publications,total_count }
  }

}
export default publicationRepository;
