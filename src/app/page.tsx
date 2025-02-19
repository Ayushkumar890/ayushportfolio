import { Sidebar } from "@/app/sidebar"
// import { MobileNav } from "@/app/mobile-nav"
import { Profile } from "@/app/profile"
import Project from "@/app/project/page"
import Skill from "@/app/skills/page"
import Experience from "@/app/experience/page"
import { Footer } from "@/app/footer/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      <div className="fixed">

      <Sidebar />
      </div>
      <main className=" md:ml-64 flex-1 p-6 md:p-12">
        <Profile />
        <Project/>
        <Skill/>
        <Experience/>
        <Footer/>
      </main>
      {/* <MobileNav /> */}
    </div>
  )
}

