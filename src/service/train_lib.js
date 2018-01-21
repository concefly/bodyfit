import Base from './base';

class TrainLib extends Base {
  async getMuscleGroupList() {
    const payload = {
      list: [
        {
          id: 'all',
          title: '所有项目',
        },
        {
          id: 'chest',
          title: '胸部',
        },
      ],
    };
    return this.makeSuccess(payload);
  }

  /**
   * @param {string} groupId groupId
   */
  async getProjectList(groupId) {
    const payload = {
      list: [
        {
          id: '1',
          title: '1',
        },
        {
          id: '2',
          title: '2',
        },
      ],
    };
    return this.makeSuccess(payload);
  }
}

export default new TrainLib();
