import Link from "next/link"
import {
    Home,
    User2,
    FolderGit2,
    Wrench,
    Contact,
    Instagram,
    Linkedin,
    Github,
    Twitter,
    ChevronRight,
    ChevronLeft,
} from "lucide-react"

export function Sidebar() {
    return (
        <aside className="w-64 border-r border-zinc-800 p-6 hidden md:block min-h-screen space-y-4 mt-4">
            <div className="flex items-center gap-2 mb-8">
                <ChevronLeft className="w-6 h-6" />
                <h1 className="text-xl font-semibold">Ayush</h1>
                <span className="-mr-2 text-xl">/</span>
                <ChevronRight className="w-6 h-6" />

            </div>

            <nav className="space-y-6">
                <div className="space-y-5 space-x-7">
                    <Link href={'/'} className=" mx-7 flex items-center gap-2 text text-zinc-400 hover:text-white transition-colors">
                        <Home className="w-6 h-6" />
                        Home
                    </Link>
                    <Link href={'/'} className="flex items-center gap-2 text-xl text-zinc-400 hover:text-white transition-colors">
                        <User2 className="w-6 h-6" />
                        About
                    </Link>
                    <Link href={'/project'} className="flex items-center gap-2 text-xl text-zinc-400 hover:text-white transition-colors">
                        <FolderGit2 className="w-6 h-6" />
                        Projects
                    </Link>
                    <Link href={'/skills'} className="flex items-center gap-2 text-xl text-zinc-400 hover:text-white transition-colors">
                        <Wrench className="w-6 h-6" />
                        Skill
                    </Link>
                    <Link href="mailTo:ayushbhatia0904@gmail.com" className="flex items-center gap-2 text-xl text-zinc-400 hover:text-white transition-colors">
                        <Contact className="w-6 h-6" />
                        Contact
                    </Link>
                </div>

                <div className="pt-6 border-t border-zinc-800 space-x-7 space-y-7">
                    <h2 className="text-zinc-400 mb-4">Socials</h2>
                    <div className="space-y-6 ">
                        <Link href="https://www.instagram.com/ayushkumar_0911/" className="flex items-center gap-2 text-lg text-zinc-400 hover:text-white transition-colors">
                            <Instagram className="w-6 h-6 text-red-600" />
                            Instagram
                        </Link>
                        <Link href="https://www.linkedin.com/in/ayushkumar0911/" className="flex items-center gap-2 text-lg text-zinc-400 hover:text-white transition-colors">
                            <Linkedin className="w-6 h-6 text-blue-700" />
                            LinkedIn
                        </Link>
                        <Link href="https://github.com/Ayushkumar890" className="flex items-center gap-2 text-lg text-zinc-400 hover:text-white transition-colors">
                            <Github className="w-6 h-6 text-green-600" />
                            Git-Hub
                        </Link>
                        <Link href="https://x.com/Ayush__890" className="flex items-center gap-2 text-lg text-zinc-400 hover:text-white transition-colors">
                            <Twitter className="w-6 h-6 text-blue-400" />
                            Twitter
                        </Link>
                    </div>
                </div>
            </nav>
        </aside>
    )
}

