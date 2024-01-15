import CompanyRepository from "../../repository/PublicationRepository"
import { getCustomRepository } from "typeorm"

class FindPublicationService {
  async execute(name: string) {
    const companyRepository = getCustomRepository(CompanyRepository)
    return await companyRepository.Find(name)
  }
}

export default FindPublicationService
