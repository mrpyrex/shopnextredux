import { wrapper } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/shared/Layout';
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const store = useStore((state)=>state)
  return (
    <PersistGate persistor={store.__persistor} loading={<div>loading...</div>}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PersistGate>
  )
}

export default wrapper.withRedux(MyApp) 