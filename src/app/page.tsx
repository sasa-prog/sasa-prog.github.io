import { BaseImg } from "@/components/microcmsImage";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: 'Home | sasa-prog.github.io',
};
export default function Home() {
  return (
    <div className="mx-auto text-white">
      <h1 className="text-3xl">Profile</h1>
      <img src="sasa.png" width={128} height={128} alt="profile" className="mx-auto my-auto border-solid border-4 rounded-full border-teal-600 bg-white"/>
      <br/>
      <section className="border-solid border-1 border-white rounded mb-2">
        <h2 className="text-2xl">Bio</h2>
        <p className="pt-1 pl-1">15yo / Third year junior high school student<br />プログラミングが好きな学生。適当にサイトとか作ってます<br/>学校では帰宅部エースだったけど3年から吹奏楽<br/>ピアノも一応弾けます。<br/>Liberluna member<br/>Fulxcore Technical Director</p>
      </section>
      <section className="mt-2">
        <h2 className="text-2xl">I&apos;m good at:</h2>
        <p className="pl-1">Languages: Java / JavaScript / TypeScript / C / C++ / Python</p>
        <p className="pl-1">Frameworks: Next.js / Nest.js / React / etc.</p>
      </section>
    </div>
  );
}
