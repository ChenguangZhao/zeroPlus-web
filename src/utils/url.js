/*
 *获取url参数
 */
export function getQuery() {
  let url = window.location.href;
  let theRequest = {};
  if (url.indexOf('?') !== -1) {
    let str = url.split('?')[1];
    let strs = str.split('&');
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
    }
  }
  return theRequest;
}
