/**
 * Created by liulingling on 2017/9/27.
 * Mutations 事件
 */

/**
 * 加载框
 */
export const showLoading = (state, isLoading) => {
  state.isLoading = isLoading
};

export const setLoadingText = (state, loadingText) => {
  state.loadingText = loadingText
};

// /**
//  * 店铺
//  */
// export const setShopTabList = (state, list) => {
//   state.shopTabList = list
// };
//
// export const setShopTabValue = (state, value) => {
//   state.shopTabValue = value
// };
//
// export const setClassifyList = (state, classifyList) => {
//   state.classifyList = classifyList
// };
