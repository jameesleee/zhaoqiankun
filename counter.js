export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `赵乾坤是 ${counter}`
  }
  element.addEventListener('click', () => setCounter(250))
  setCounter(0)
}
