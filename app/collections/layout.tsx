

import NavBar from "@/components/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'La vida es un meme',
  description: 'La vida es un meme',
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen flex flex-col">
    {/* <div className="flex h-screen flex-col md:flex-row md:overflow-hidden"> */}
      <div className="bg-background border-solid border-1 border-b-slate-600">
          <NavBar/>
      </div>
      {/* <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div> */}
      <div className="flex w-full justify-center overflow-auto">
        {children}
      </div>
    </div>
  );
}