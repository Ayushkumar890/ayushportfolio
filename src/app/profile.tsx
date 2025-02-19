"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Github, Instagram, Linkedin, Twitter } from "lucide-react"
import Ayush from '@/../public/images/profile.jpg'
import { MaskContainer } from "../components/ui/svg-mask-effect";

export function Profile() {
    return (
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:mx-12 gap-12 min-h-[500px] md:py-12 pb-16 md:pb-0">
            <div className="flex-1 space-y-6 mx-auto px-4 w-full max-w-xl">
                <div className="w-full h-64 md:h-80 relative">
                    <MaskContainer
                        revealText={
                            <div className="space-y-2 w-full overflow-auto">
                                <h1 className="text-4xl md:text-6xl font-bold">HELLO!</h1>
                                <p className="text-3xl md:text-5xl font-semibold">
                                    I&apos;m <span className="bg-gradient-to-r from-blue-500 via-blue-300 to-blue-800 inline-block text-transparent bg-clip-text">Ayush</span>
                                </p>
                                <p className="text-xl md:text-2xl text-blue-400">I am a Full Stack Develover.</p>
                            </div>
                        }
                        className="rounded-xl z-50"
                        size={5}
                        revealSize={400}
                    >
                        <div className="space-y-2 w-full">
                            <h1 className="text-4xl md:text-6xl font-bold underline">About me</h1>
                            <p className="text-3xl md:text-5xl font-semibold">
                                I&apos;m <span className="bg-gradient-to-r from-blue-500 via-blue-300 to-blue-800 inline-block text-transparent bg-clip-text">Ayush</span>
                            </p>
                            <p className="text-xl md:text-2xl text-blue-400">Debugging one bug at a time... and creating two more in the process! 🐛</p>
                        </div>
                    </MaskContainer>
                </div>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Button
                        variant="outline"
                        className="rounded-full text-white bg-blue-500 border-blue-500 hover:bg-blue-700 hover:text-white transition-colors"
                    >
                        Resume <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                        variant="link"
                        className="rounded-full text-white bg-blue-500 border-blue-500 hover:bg-blue-700 hover:text-white transition-colors no-underline"
                    >
                        <Link href="mailTo:ayushbhatia0904@gmail.com" className="flex">
                            Contact Us <ChevronRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>

                <div className="flex gap-6 pt-6 justify-center md:justify-start">
                    <Link href="https://github.com/Ayushkumar890" className="text-zinc-400 hover:text-green-700 transition-colors">
                        <Github className="w-6 h-6" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/ayushkumar0911/" className="text-zinc-400 hover:text-blue-700 transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </Link>
                    <Link href="https://www.instagram.com/ayushkumar_0911/" className="text-zinc-400 hover:text-red-600 transition-colors">
                        <Instagram className="w-6 h-6" />
                    </Link>
                    <Link href="https://x.com/Ayush__890" className="text-zinc-400 hover:text-blue-500 transition-colors">
                        <Twitter className="w-6 h-6" />
                    </Link>
                </div>
            </div>

            <div className="relative mt-8 md:mt-0">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-blue-500 relative mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                    <Image
                        src={Ayush}
                        alt="Profile"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </div >
    )
}