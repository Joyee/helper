/**
 * 获取元素相对于页面的绝对位置
 * @param dom 
 * @returns {domX: number, domY: number}
 */
export function getDomXY(dom: any) {
  let x = 0
  let y = 0
  if (dom.getBoundingClientRect) {
    const box = dom.getBoundingClientRect()
    const D = document.documentElement
    x = box.left + Math.max(D.scrollLeft, document.body.scrollLeft) - D.clientLeft
    y = box.top + Math.max(D.scrollTop, document.body.scrollTop) - D.clientTop
  } else {
    while (dom !== document.body) {
      x += dom.offsetLeft
      y += dom.offsetTop
      dom = dom.offsetParent
    }
  }
  return {
    domX: x,
    domY: y,
  }
}
