
import SideNav from "@/components/SideNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'La vida es un meme',
  description: 'La vida es un meme',
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen flex-row  md:overflow-hidden">
    {/* <div className="flex h-screen flex-col md:flex-row md:overflow-hidden"> */}
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      {/* <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div> */}
      <div className=" flex  p-4 w-full md:overflow-auto">
        {children}
      </div>
    </div>
  );
}