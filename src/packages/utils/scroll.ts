/**
 * get scrollHeight
 * @param ref
 * @returns
 */
export const getScrollHeight = (ref: any) => {
  return ref.offsetHeight;
};

/**
 * 滑动视窗的高度
 * @param ref
 */
export const getWindowHeight = (ref: any) => {
  let windowHeight = 0;
  if (ref) {
    windowHeight = ref.clientHeight;
  }
  return windowHeight;
};

/**
 * get scrollTop
 * @param ref
 */
export const getScrollTop = (ref: any) => {
  return ref.scrollTop;
};
