import PublicationRepository from "../../repository/PublicationRepository"
import { getCustomRepository } from "typeorm"

class CreatePublicationService {
  async execute(publication: Object): Promise<{}> {
    const publicationRepository = getCustomRepository(PublicationRepository)
    return await publicationRepository.Create(publication)
  }
}

export default CreatePublicationService
