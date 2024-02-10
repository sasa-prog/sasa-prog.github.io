import { client } from "@/lib/microcmsClient";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Blog | sasa-prog.github.io',
};

export default async function Blog() {
    const data = await client.get({
        endpoint: "blog"
    })
    return (
        <main className="min-h-screen p-6">
            <div className="px-auto">
                <h1>Blog</h1>
                <div className="flex">
                    {
                        data.contents.map((data:any) => {
                            return (
                                <Link href={`/blog/${data.id}`} key={data.id}>
                                    <article>
                                    <Image src={data.thumbnail.url} width="848" height="1200" alt="aaa"/>
                                    <h3>{data.title}</h3>
                                    </article>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}