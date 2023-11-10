import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/theme';
import { Routes } from './routes';

export function App(): JSX.Element {
	return (
		<ChakraProvider theme={theme}>
			<Routes />
		</ChakraProvider>
	);
}
