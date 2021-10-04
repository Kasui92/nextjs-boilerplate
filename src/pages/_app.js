import '../../styles/styles.scss';

export default function App({
  Component,
  pageProps
}){
  const withLayout = Component.Layout || (page => page);

  return withLayout(<Component {...pageProps}/>)
}
