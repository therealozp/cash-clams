// app/providers.tsx
'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { MessageProvider } from '@/context/MessagesContext';
import { ThemeProvider } from '@/context/ThemeContext';

export function Providers({ children }) {
	return (
		<ThemeProvider>
			<MessageProvider>
				<CacheProvider>
					<ChakraProvider>{children}</ChakraProvider>
				</CacheProvider>
			</MessageProvider>
		</ThemeProvider>
	);
}
