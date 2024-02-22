import { client } from "@/lib/microcmsClient";
import Head from "next/head";
import { BaseImg } from "@/components/microcmsImage";

export async function generateStaticParams() {
    const data = await client.get({
        endpoint: "blog"
    })
    const contents = data.contents
    return contents.map((content:any) => content)
}

export default async function Blog({ params }:any) {
    const blog = await client.get({
        endpoint: "blog",
        contentId: params.id,
    })
    return (
        <main className="flex min-h-screen flex-col p-6">
            <Head>
                <title>{`${blog.title} | sasa-prog.github.io`}</title>
            </Head>
            <div className="mx-auto">
                <h1 className="text-xl">{blog.title}</h1>
                <BaseImg imgUrl={blog.thumbnail.url} imgAlt="aa" size="xl"/>
                <h2>{blog.subtitle}</h2>
                <div dangerouslySetInnerHTML={{__html: blog.body}}></div>
            </div>
        </main>
    )
}