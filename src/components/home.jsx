import { ARABICTRANSLATION } from "../constants/consts"
import { useLanguage } from "../context/languageContext"

export default function Home(){
    const {language} = useLanguage()

    const handleTranslation = (key) => {
        if(language === 'ar'){
            return ARABICTRANSLATION[key] 
        }
        return key
    }

    return(
        <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="home relative w-full min-h-[calc(100vh-90px)] flex flex-col items-center justify-center text-slate-200 p-4">
            <h1 className="text-center w-10/12 text-8xl mb-4 leading-tight z-20">{handleTranslation('SIRAJ')} - {handleTranslation('Light of')} <span className="bg-slate-400 text-slate-900">{handleTranslation('Guidance')}</span></h1> 
            <p className="z-20">{handleTranslation('Built for the Ummah as a free guide everyday')}.</p>
            <img src="assets/images/moon.png" alt="Hilal" className="absolute opacity-70 left-4 bottom-1 hidden md:inline md:w-56 md:h-56 lg:w-72 lg:h-72 " />
            <div className="fanoos-wrapper">
                <img src="assets/images/fanoos.png" alt="Fanoos" className="fanoos" />
            </div>
        </div>
    )
}