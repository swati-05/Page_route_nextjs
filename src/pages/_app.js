import '@/styles/globals.css'
import { Provider as ReduxProvider } from 'react-redux';
import { wrapper } from '../Redux/store';

export default function App(prop) {
  const { Component, ...rest } = prop;
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <ReduxProvider store={store}>
      <Component {...props.pageProps} />
    </ReduxProvider>
  )
}
