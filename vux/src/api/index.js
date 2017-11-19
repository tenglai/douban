/**
 * 引入 异步请求API
 */
import "whatwg-fetch"

const host_addr='http://192.168.1.110:8081/'

/**
 * 获取资讯列表
 */
export let getList = async (page, tag) => {
  let response = await fetch(host_addr + `news_list?pageIndex=${page}&pageSize=20&catalog=${tag}`, {
    method: 'GET',
    mode: 'cors'
  }).catch((error) => {
    console.log(error)
  })
  return await response.json().catch((error) => {
    console.log(error)
  })
}

/**
 * 获取资讯详情
 */
export let getNewsDetail = async (id) => {
  let response = await fetch(host_addr + `news_detail?id=${id}`, {
    method: 'GET',
    mode: 'cors'
  }).catch((error) => {
    console.log(error)
  })
  return await response.json().catch((error) => {
    console.log(error)
  })
}

/**
 * 获取博客列表
 */
export let getBlogList = async (page, tag) => {
  let response = await fetch(host_addr + `blog_list?pageIndex=${page}&pageSize=20&catalog=${tag}`, {
    method: 'GET',
    mode: 'cors'
  }).catch((error) => {
    console.log(error)
  })
  return await response.json().catch((error) => {
    console.log(error)
  })
}

/**
 * 获取问答列表
 */
export let getQuestionList = async (page, tag) => {
  let response = await fetch(host_addr + `question_list?pageIndex=${page}&pageSize=20&catalog=${tag}`, {
    method: 'GET',
    mode: 'cors'
  }).catch((error) => {
    console.log(error)
  })
  return await response.json().catch((error) => {
    console.log(error)
  })
}

/**
 * 获取活动列表
 */
export let getEventList = async (page, tag) => {
  let response = await fetch(host_addr + `event_list?pageIndex=${page}&pageSize=20&catalog=${tag}`, {
    method: 'GET',
    mode: 'cors'
  }).catch((error) => {
    console.log(error)
  })
  return await response.json().catch((error) => {
    console.log(error)
  })
}
