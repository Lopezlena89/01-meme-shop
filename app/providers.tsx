"use client";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export interface ProvidersProps {
	children: React.ReactNode;
	
}

export function Providers({ children }: ProvidersProps) {
  

	return (
		<NextUIProvider>
			<NextThemesProvider >{children}</NextThemesProvider>
		</NextUIProvider>
	);
}