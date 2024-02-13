import { Request, Response } from 'express';
import PublicationServices from '../services/publication';
import fs from 'fs';




export default class PublicationController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const publicationData = request.body;
      const file = request.file as Express.Multer.File;
      
      const body = await readFileText(file.path)
      await deleteFile(file.path)
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


async function readFileText(docFilePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(docFilePath, 'utf8', (err, data) => {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
});
}

function deleteFile(docFilePath) {
  return new Promise((resolve, reject) => {
      fs.unlink(caminhoArquivo, (err) => {
          if (err) {
              reject(err);
          } else {
              resolve();
          }
      });
  });
}
