import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
      <img src="/vite.svg" class="logo" alt="Vite logo" />
      <img src="/javascript.svg" class="logo vanilla" alt="JavaScript logo" />
    <h1>傻逼赵乾坤</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
