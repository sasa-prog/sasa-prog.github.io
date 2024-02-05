export default function navigationBar() {
    return (
        <nav className="flex items-center bg-slate-500">
            <div className="justify-start w-1/2 pl-2">
                <h2 className="text-2xl m-2">笹&apos;s homepage</h2>
            </div>
            <ul className="flex justify-end w-1/2 pr-4">
                <li className="m-1">Home</li>
                <li className="m-1">About me</li>
                <li className="m-1">Blog</li>
            </ul>
        </nav>
    )
}