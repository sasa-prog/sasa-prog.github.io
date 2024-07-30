import { Metadata } from "next"
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Works | sasa-prog.github.io'
};

export default function About() {
    return (
        <>
          <h1 className="text-3xl">Works</h1>
          <h2 className="text-xl pl-2">Nothing here yet...</h2>
        </>
    )
}