import StudentInfo from "./student-info";
import Link from "next/link";

export default function Page() {
    return (
        <main className="min-h-screen bg-aqua-500 m-5">       
            <div className="text-center">     
                <h1 className="text-5xl font-bold ">Shopping List</h1>
            </div>
            <div className="text-center m-5 text-3xl">
                <StudentInfo/>
            </div>
            
        </main>
        
    );
}

