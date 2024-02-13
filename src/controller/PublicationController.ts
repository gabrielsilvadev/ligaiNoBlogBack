import { Request, Response } from 'express';
import PublicationServices from '../services/publication';

const pdf2html = require('pdf2html');




export default class PublicationController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const publicationData = request.body;
      const file = request.file as Express.Multer.File;
      const body = await convertPDFToText(file.path)
      const createPublication = new PublicationServices.CreatePublicationService
      publicationData.body = body
      const publication = await createPublication.execute(publicationData);
      return response.status(200).json(publication);
    } catch (err) {
      throw new Error(`Dados inválidos: ${err}`);
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { publication, id } = request.body;
      const UpdatePulbication = new PublicationServices.SaveCompanyService();
      const companySave = await UpdatePulbication.execute(id, publication);
      return response.status(200).json(companySave);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async find(request: Request, response: Response){
    const {name} = request.params
    const findPublication = new PublicationServices.FindCompanyService()
    const companyFind = await findPublication.execute(name)
    return response.status(200).json(companyFind)
  }
 
  async findById(request: Request, response: Response){
    const {id} = request.params
    const findPublication = new PublicationServices.FindPublicationById
    const companyFind = await findPublication.execute(id)
    return response.status(200).json(companyFind)
  }

}


async function convertPDFToText(docFilePath) {
  const text = await pdf2html.text(docFilePath);
  return text
}
