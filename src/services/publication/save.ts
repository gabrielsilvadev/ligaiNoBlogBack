import { CompanyInterface } from "../../base-interfaces/company.interface"
import CompanyRepository from "../../repository/PublicationRepository"
import { getCustomRepository } from "typeorm"

class SavePublicationService {
  async execute(publication: CompanyInterface): Promise<{}> {
    const companyRepository = getCustomRepository(CompanyRepository)
    return await companyRepository.save(publication)
  }
}

export default SavePublicationService
