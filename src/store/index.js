import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: null,
    phone: null,
    address: null,
    fund_applicant_detail: null,
    activity_volunteer_detail: null,
    joinedActivity: [],
    storedFund: [],
  },
  mutations: {
    //保存姓名
    saveUserName(state, data) {
      state.username = data
    },
    //保存用户手机号
    savePhone(state, data) {
      state.phone = data;
    },
    //保存地址
    saveAddress(state, data) {
      state.address = data;
    },
    //保存申请帮助信息
    saveFundApplicantDetail(state, data) {
      state.fund_applicant_detail = data;
    },
    //保存申请志愿者
    saveActivityVolunteerDetail(state, data) {
      state.activity_volunteer_detail = data;
    },
    //保存参加的活动
    addJoinedActivity(state, data) {
      state.joinedActivity.push(data);
    },
    removeJoinedActivity(state, data) {
      let index;
      for (let i = 0; i < state.joinedActivity.length; i++) {
        if (state.joinedActivity[i].activityid == data) {
          index = i;
          break;
        }
      }
      state.joinedActivity.splice(index, 1);
    },
    saveJoinedActivity(state, data) {
      state.joinedActivity = data;
    },
    //保存收藏的基金
    addStoredFund(state, data) {
      state.storedFund.push(data);
    },
    removeStoredFund(state, data) {
      let index;
      for (let i = 0; i < state.storedFund.length; i++) {
        if (state.storedFund[i].fundid == data) {
          index = i;
          break;
        }
      }
      state.storedFund.splice(index, 1);
    },
    saveStoredFund(state, data) {
      state.storedFund = data;
    }
  },
  actions: {
    clearLogin(context) {
      context.commit("saveUserName", null);
      context.commit("savePhone", null);
      context.commit("saveAddress", null);
      context.commit("saveFundApplicantDetail", null);
      context.commit("saveActivityVolunteerDetail", null);
      context.commit("saveJoinedActivity", []);
      context.commit("saveStoredFund", []);
    }
  },
  modules: {
  }
})
