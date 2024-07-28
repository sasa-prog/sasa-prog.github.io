import { BaseImg } from "@/components/microcmsImage";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: 'Home | sasa-prog.github.io',
};
export default function Home() {
  return (
    <div className="mx-auto text-white">
      <h1 className="text-xl">Profile</h1>
      <img src="sasa.png" width={128} height={128} alt="profile" className="mx-auto my-auto border-solid border-2 rounded-full border-violet-600"/>
      <br/>
      <section>
        <h2 className="text-lg">Bio</h2>
        <p>15yo / Second year junior high school student<br />プログラミングが好きな学生。適当にサイトとか作ってます<br/>学校では帰宅部エースだったけど3年から吹奏楽<br/>ピアノも一応やってます。</p>
      </section>
      <section>
        <h2 className="text-lg">I&apos;m good at:</h2>
        <p>Java / JavaScript / TypeScript / C / C++ / Python</p>
      </section>
    </div>
  );
}
