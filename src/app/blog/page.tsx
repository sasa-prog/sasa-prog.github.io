import microCMSLoader from "@/lib/loader";
import { BaseImg } from "@/components/microcmsImage";
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
        
            <div className="px-auto">
                <h1 className="text-3xl mb-3">Blog</h1>
                <div className="flex">
                    {
                        data.contents.map((data:any) => {
                            return (
                                <Link href={`/blog/${data.id}`} key={data.id}className="mx-5">
                                    <article className="border-solid border-black w-[20vw]">
                                        <BaseImg imgUrl={data.thumbnail.url} size="thumbnail" imgAlt="aaa"/>
                                        <h3>{data.title}</h3>
                                    </article>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
    )
}