import { DataYoutube } from '@/type/video';
import Api from './config';

export class ApiService {
  async storeYoutube(body: DataYoutube) {
    return await Api.post('share-youtube', body);
  }
}

const authService = new ApiService();

export default authService;
