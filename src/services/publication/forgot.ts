import CompanyRepository from "../../repository/PublicationRepository"
import { getCustomRepository } from "typeorm"

class ForgotCompanyService {
  async execute(email: string): Promise<{}> {
    const companyRepository = getCustomRepository(CompanyRepository)
    return await companyRepository.forgot(email)
  }
}
export default ForgotCompanyService
