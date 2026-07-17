import { ARABICTRANSLATION } from "../data/consts"
import { useLanguage } from "../context/languageContext"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

gsap.registerPlugin(useGSAP)

export default function Home(){
    const {language} = useLanguage()

    const moon = useRef(null)

    const handleTranslation = (key) => {
        if(language === 'ar'){
            return ARABICTRANSLATION[key] 
        }
        return key
    }

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults : {
                ease : "none"
            }
        })
        tl.from(moon.current, {
            scale : 6,
            x : -200,
            opacity : 0
        })
        tl.from(".heroTitle", {
            y : 10,
            opacity : 0
        })
        tl.from(".heroText", {
            y : 20,
            opacity : 0
        }, '>')

    })

    return(
        <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="home overflow-hidden relative w-full min-h-[calc(100vh-90px)] flex flex-col items-center justify-center text-slate-200 p-4">
            <h1 className="heroTitle text-center md:w-10/12 text-6xl/tight md:text-9xl/tight mb-4 font_kufi">{handleTranslation('SIRAJ')} - {handleTranslation('Light of')} <span className="bg-slate-400 text-slate-900">{handleTranslation('Guidance')}</span></h1> 
            <p className="heroText text-center z-20">{handleTranslation('Built for the Ummah as a free guide everyday')}.</p>
            <img src="assets/images/moon.png" ref={moon} alt="Hilal" className="absolute opacity-70 left-4 bottom-7 md:bottom-1 w-32 h-32 md:w-56 md:h-56 lg:w-66 lg:h-66 " />
            <div className="fanoos-wrapper">
                <img src="assets/images/fanoos.png" alt="Fanoos" className="fanoos" />
            </div>
        </div>
    )
}