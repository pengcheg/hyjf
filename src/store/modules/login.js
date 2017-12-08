const state  = {
  mobileCheck :/^1[3|4|5|8]\d{9}$/,
  passwordCheck:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/,
  status:{
    mobileFailure:false,
    passwordFailure:false,
    mobileNull:false,
    passwordNull:false,
    login:null,
  },
  passwordToggle:false,
  valueUp:{
    mobile:false,
    password:false,
  },
}
// getters
const getters = {
  status: state => state.status,
  password:state => state.passwordToggle,
  valueUp:state => state.valueUp,
}
//actions
const actions = {
  login({commit,state},data){
      //判断状态
      if(data.mobile.length===0){
        commit('mobileNull')
      }else if(!state.mobileCheck.test(data.mobile.replace(/\s+/g, ""))){
        commit('mobileCheckFailure')
      }else if(data.password.length===0){
        commit('passwordNull')
      }else if(!state.passwordCheck.test(data.password.replace(/\s+/g, ""))){
        commit('passwordCheckFailure')
      }else {
        commit('loginCheckSuccess')
      }
      if(state.loginCheckStatus){
        alert('success')
      }
  },
  passwordToggle({commit}){
    commit('passwordToggle')
  },
  //文本上移效果
  valueUp({commit},data){
    if(data.valueType === 'mobile'){
      const check = data.valueLength === 0?false:true;
      commit('mobileUp',check)
    }else if(data.valueType === 'password'){
      const check = data.valueLength === 0?false:true;
      commit('passwordUp',check)
    }

  }
}
//mutations
const mutations = {
  mobileNull(){
    state.status.mobileNull= true;
  },
  passwordNull(){
    state.status.passwordNull= true;
  },
  mobileCheckFailure(state){
    state.status.mobileFailure = true;
  },
  passwordCheckFailure(state){
    state.status.passwordFailure = true;
  },
  loginCheckSuccess(state){
    state.status.login = true;
  },
  passwordToggle(state){
    state.passwordToggle = !state.passwordToggle;
  },
  mobileUp(state,check){
    state.valueUp.mobile = check;
  },
  passwordUp(state,check){
    state.valueUp.password = check;
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
