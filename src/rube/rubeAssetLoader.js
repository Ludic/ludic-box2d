import RubeAsset from './rubeAsset'
import RubeImageAsset from './rubeImageAsset'

class RubeAssetLoader {
  constructor() {

  }

  load(name, url, type, options){
    switch (type) {
      case 'rube':
        return new RubeAsset(name, url, type, options);
        break;
      case 'rubeImage':
        return new RubeImageAsset(name, url, type, options);
        break;
      default:
        console.error('RubeAssetLoader: unknown asset type:: ', arguments);
        return null;
    }
  }
}

export default new RubeAssetLoader();
