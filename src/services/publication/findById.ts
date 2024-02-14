import PublicationRepository from "../../repository/PublicationRepository"
import { getCustomRepository } from "typeorm"

class FindPublicationService {
  async execute(id: string): Promise<{}> {
    const publicationRepository = getCustomRepository(PublicationRepository)
    return await publicationRepository.findOne({where:{id}})
  }
}
export default FindPublicationService
