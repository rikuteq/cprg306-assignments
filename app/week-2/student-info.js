import Link from "next/link";

export default function StudentInfo(){
    return(
        <main>
            <div>Elias Irons</div>           
            <Link href="https://github.com/rikuteq" target="_blank">
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white m-2">
                    Github
                </button>
            </Link>
            
        </main>
        
        
    );
}