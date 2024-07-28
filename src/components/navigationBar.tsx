import Link from "next/link";

export default function navigationBar() {
    return (
        <nav className="flex items-center bg-slate-950 text-lime-600">
            <div className="justify-start w-1/2 pl-2 py-2">
                <a href="/"><h2 className="text-2xl m-2">笹&apos;s WEBSITE(制作中)</h2></a>
            </div>
            <ul className="flex justify-end w-1/2 pr-4">
                <Link href="/"><li className="m-1">Home</li></Link>
                <Link href="/works"><li className="m-1">Works</li></Link>
                <Link href="/blog"><li className="m-1">Blog</li></Link>
            </ul>
        </nav>
    )
}