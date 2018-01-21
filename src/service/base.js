import wepy from 'wepy';

export default class {
  makeSuccess(payload) {
    return {
      success: true,
      payload,
    }
  }
  makeFail(errorMsg) {
    return {
      success: false,
      errorMsg
    }
  }
  async request(...props) {
    return wepy.request(...props);
  }
}
