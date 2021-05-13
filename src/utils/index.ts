// 第三版（解决 event 事件对象问题）
export function debounce(fn: any, wait: 100) {
  let timer: any;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments); // 把参数传进去
    }, wait);
  };
}
