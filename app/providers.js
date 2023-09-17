// app/providers.tsx
'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { MessageProvider } from '@/context/MessagesContext';

export function Providers({ children }) {
	return (
		<MessageProvider>
			<CacheProvider>
				<ChakraProvider>{children}</ChakraProvider>
			</CacheProvider>
		</MessageProvider>
	);
}