import './css/style.css';
import openaiLogoUrl from './img/openai-lockup.svg';

document.querySelector('#app').innerHTML = `
  <a href="https://openai.com/" target="_blank">
    <img src="${openaiLogoUrl}" class="logo" alt="openai logo" />
  </a>
  <h1>Hello ChatGPT !</h1>
  <a href="https://platform.openai.com/docs/" target="_blank">Documentation</a>
`;
