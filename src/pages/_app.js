// pages/_app.js
import '@/src/styles/App.css'; // 全域樣式的導入

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
