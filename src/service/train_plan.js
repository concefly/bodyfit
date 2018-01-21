import Base from './base';

export default new class extends Base {
  async getPlanList() {
    const payload = {
      list: [
        {
          id: '1',
          title: '训练1',
        },
        {
          id: '2',
          title: ' 训练2',
        },
      ],
    };
    return this.makeSuccess(payload);
  }

  async getPlanDetail({trainId}) {
    const payload = {
      list: [
        {
          id: '1',
          title: '动作1',
        },
        {
          id: '2',
          title: ' 动作2',
        },
      ],
    };
    return this.makeSuccess(payload);
  }
}
