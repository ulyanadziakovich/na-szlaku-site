import config from "./gtagIds"
const { gtagId } = config

export default defineNuxtPlugin(() => {
  const gtagAsync = document.createElement('script')
  gtagAsync.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`
  gtagAsync.async = true
  document.head.appendChild(gtagAsync)

  const gtag = document.createElement('script')
  gtag.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gtagId}');
  `
  document.head.appendChild(gtag)
})
