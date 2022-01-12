import { Provider } from 'react-redux'
import { useStore } from '../store'
import CssBaseline from '@mui/material/CssBaseline';


export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <CssBaseline />
      <Component {...pageProps} />
    </Provider>
  )
}