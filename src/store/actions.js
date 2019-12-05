/*
通过mutation间接更新state的多个方法的对象
*/
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation_types'
import {reqAddress,reqFoodCategorys,reqShops} from '../api'
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
      commit(RECEIVE_SHOPS, {shops})//提交一个mutation
    }
  }
}
