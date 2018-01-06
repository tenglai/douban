/**
 * 加入请求报头,防止ip被屏蔽
 */
module.exports = {
  header : {
    'User-Agent': 'request',
    "Referer":"http://www.ivsky.com/",
  },
  // 并发数
  ajax_timeout : 2000,
  // 下载图片速度
  download_v : 5
}