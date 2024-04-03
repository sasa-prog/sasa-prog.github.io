import { BaseImg } from "@/components/microcmsImage";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: 'Home | sasa-prog.github.io',
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mx-auto">
        <img src="sasa.png" width={115} height={115} alt="profile" className="mx-auto"/>
          <h1>笹&apos;s profile</h1><br/>
          <section>
            <h2>自己紹介</h2>
            <p>14yo / Second year junior high school student<br />プログラミングが好きな学生。適当にサイトとか作ってます<br/>学校では帰宅部エースだったけど3年から吹奏楽に入った<br/>ピアノも一応やってます。</p>
          </section>
          <section>
            <h2>言語</h2>
            <p>Java / JavaScript / TypeScript / C / C++ / Python</p>
          </section>
      </div>
    </main>
  );
}
