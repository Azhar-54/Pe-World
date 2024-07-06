import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { wrapper } from '@/configs/redux/store';
import '@/styles/globals.css';

export default function App({ Component, ...rest }) {
	const { store, props } = wrapper.useWrappedStore(rest);
	return (
		<>
			<Provider store={store}>
				<Component {...props.pageProps} />
				<Toaster containerStyle={{ bottom: 20, right: 20 }} />
			</Provider>
		</>
	);
}
