"use client"
import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

function HeroSection() {
    const headingControls = useAnimation()
    const paragraphControls = useAnimation()
    const buttonControls = useAnimation()

    useEffect(() => {
        async function sequence() {
            await headingControls.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } });
            await paragraphControls.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } });
            await buttonControls.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } });
        }

        sequence();
    }, [headingControls, paragraphControls, buttonControls]); 


    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
            <div className="p-4 relative z-10 w-full text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 35 }}
                    animate={headingControls}
                    className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                >
                    Master the art of music
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={paragraphControls}
                    className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
                >
                    Dive into our comprehensive music courses and transform your musical journey today. Whether you&apos;re a beginner or looking to refine your skills, join us to unlock your true potential.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={buttonControls}
                    className="mt-4">
                    <Link href="/courses">
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            Explore courses
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default HeroSection
