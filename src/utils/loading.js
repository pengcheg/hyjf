/**
 * Created by liulingling on 2017/9/27.
 * TODO loading动画
 */
export const loader = {
  show () {
    if ($('.ball-beat')[0]) {
      return
    }
    let modalContainer = document.body
    $(modalContainer).append('<div class="loader-inner ball-beat"><div></div><div></div><div></div></div>')
  },
  hide () {
    $('.ball-beat').remove()
  }
}
