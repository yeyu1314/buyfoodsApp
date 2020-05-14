/*
通过mutation间接更新state的多个方法的对象
*/
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_USER_INFO,RESET_USER_INFO,RECEIVE_INFO} from './mutation_types'
import {reqAddress,reqFoodCategorys,reqShops,reqUserInfo,reqLogout, reqShopInfo} from '../api'
export default {
  //异步获取地址
  async getAddress({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude//发送ajax请求
    const result = await reqAddress(geohash)//得到结果
    //提交一个mutation
    if(result.code === 0){//判断结果是否正确
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})//提交一个mutation
    }
  },
  //异步获取食品分类列表
  async getCategorys({commit, state}) {
    const result = await reqFoodCategorys()//得到结果
    //提交一个mutation
    if(result.code === 0){//判断结果是否正确
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})//提交一个mutation
    }
  },
  //异步获取商家列表
  async getShops({commit, state}) {
    const {longitude,latitude} = state
    const result = await reqShops(longitude,latitude)//得到结果
    //提交一个mutation
    if(result.code === 0){//判断结果是否正确
      const shops = result.data
      console.log(shops)
      commit(RECEIVE_SHOPS, {shops})//提交一个mutation
    }
  },
  //记录用户信息
  async recordUserInfo({commit, state}){
    const {userInfo} = state
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  //异步获取用户信息
  async getUserInfo({commit}){
    const result = await reqUserInfo()
    if(result.code===0) {
      commit(RECEIVE_USER_INFO, {userInfo: result.data})
    }
  },
  // 异步登出
  async logout({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },


  // 异步获取商家信息
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    console.log(result)
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
}
