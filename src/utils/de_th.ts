
//防抖
export function debounce (callback: Function, wait: number) {
  let timer: number | null = null
  return function (...args: Array<any>) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      callback(...args)
    }, wait)
  }
}
//节流
export function throttle (callback: Function, wait: number) {
  let flag = false
  return function () {
    const args = arguments
    if (flag) return
    flag = true
    setTimeout(() => {
      callback(...args)
      flag = false
    }, wait)
  }
}
