import Image from "next/image";
import Header from "./week-2/header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Header/>             
      </div>
      <div className="font-mono my-5 hover:underline hover:text-blue-500">
        <Link href="/week-2">
            <span>Week 2 Page</span>
        </Link> 
      </div>
      <div className="font-mono my-5 hover:underline hover:text-blue-500">
        <Link href="/week-3">
            <span>Week 3 Page</span>
        </Link> 
      </div>
      
    </main>
  );
}
