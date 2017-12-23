export function doOnce(fun) {
  fun()
  return fun
}
