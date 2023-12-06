"use client";

import { NextUIProvider } from "@nextui-org/system";
import { AuthProvider } from "@/context";

export interface ProvidersProps {
	children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
	return (
		<AuthProvider>
			<NextUIProvider >
				{children}
			</NextUIProvider>
		</AuthProvider>
	);
}

