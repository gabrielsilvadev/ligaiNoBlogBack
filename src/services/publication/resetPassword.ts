import CompanyRepository from "../../repository/PublicationRepository"
import { getCustomRepository } from "typeorm"

class ResetPasswordCompanyService {
  async execute(email: string, token: string, password: string): Promise<{}> {
    const companyRepository = getCustomRepository(CompanyRepository)
    return await companyRepository.resetPassword(email,token, password)
  }
}
export default ResetPasswordCompanyService
