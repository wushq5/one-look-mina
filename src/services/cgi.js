import wepy from 'wepy'

const login = async code => {
  return wepy.request({
    method: 'POST',
    // url: 'https://rcrab.top/srv/user/wxLogin',
    url: 'https://rcrab.top/srv/user/wxLogin',
    data: { code }
  })
}

const message = {
  /**
   * 创建消息
   * @param  {string} options.content 
   * @param  {string} options.openid
   * @param  {string} options.nickname
   * @param  {string} options.avatar
   *
   * @return {object} {id, sender_name}
   */
  create: async ({ content, openid, nickname, avatar }) => {
    const res = await wepy.request({
      method: 'POST',
      url: 'https://rcrab.top/srv/message',
      data: {
        content,
        sender_name: nickname,
        sender_avatar: avatar,
        sender_openid: openid
      }
    })
    if (res.data.status === 1) {
      return res.data.data
    } else {
      throw new Error('error')
    }
  },

  query: async messageId => {
    const res = await wepy.request({
      method: 'GET',
      url: 'https://rcrab.top/srv/message',
      data: {
        messageId
      }
    })
    if (res.data.status === 1) {
      return res.data.data
    } else {
      throw new Error('error')
    }
  },

  destroy: async ({ mid, avatar, nickname }) => {
    const res = await wepy.request({
      method: 'POST',
      url: `https://rcrab.top/srv/message/${mid}`,
      data: {
        terminator_name: nickname,
        terminator_avatar: avatar,
      }
    })
    if (res.data.status === 1) {
      return true
    } else {
      throw new Error('error')
    }
  }
}

export default {
  login,
  message
}