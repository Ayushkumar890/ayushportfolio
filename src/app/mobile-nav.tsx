import Link from "next/link"
import { Home, User2, FolderGit2, Wrench, Contact } from "lucide-react"

export function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 p-4 flex justify-around md:hidden z-50">
      <Link href="/" className="text-zinc-400 hover:text-white">
        <Home className="w-6 h-6" />
      </Link>
      <Link href="/" className="text-zinc-400 hover:text-white">
        <User2 className="w-6 h-6" />
      </Link>
      <Link href={'/project'} className="text-zinc-400 hover:text-white">
        <FolderGit2 className="w-6 h-6" />
      </Link>
      <Link href={'skills'} className="text-zinc-400 hover:text-white">
        <Wrench className="w-6 h-6" />
      </Link>
      <Link href="mailTo:ayushbhatia0904@gmail.com" target="_blank" className="text-zinc-400 hover:text-white">
        <Contact className="w-6 h-6" />
      </Link>
    </div>
  )
}

