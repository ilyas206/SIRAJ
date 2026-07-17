import { Link, Outlet } from "react-router-dom";
import { useLanguage } from "../context/languageContext";
import { ARABICTRANSLATION } from "../data/consts";
import { Compass, House, Moon, Sparkles, UserStar } from "lucide-react";

export default function Layout(){

    const {language, toggleLanguage} = useLanguage()

    const handleTranslation = (key) => {
        if(language === 'ar'){
            return ARABICTRANSLATION[key] 
        }
        return key
    }

    const handleButtonTranslation = () => {
        if(language === 'ar'){
            return <div className="flex items-center justify-center gap-2">
                <img className="w-6 h-6" src="/assets/icons/saoudi-arabia.png" alt="Saoudi Arabia" />
                <span className="font-normal">العربية</span>
            </div>
        }
        return <div className="flex items-center justify-center gap-2">
                <img className="w-6 h-6" src="/assets/icons/united-states.png" alt="United States" />
                <span className="font-normal">English</span>
            </div>
    }

    return(
        <>
        {/* DESKTOP NAV */}
        <nav dir={language === 'ar' ? 'rtl' : 'ltr'} className="bg-slate-600 hidden md:flex items-center justify-around py-3">
            <Link to='/'>
                <img src="assets/images/logo.png" alt="Moon Logo" className="w-14 h-14 opacity-40 hover:opacity-100 transition-all duration-300 hidden md:inline" />
            </Link> 
            <ul className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 mb-2">
                <li><Link className="text-slate-200 no-underline md:opacity-40 md:hover:opacity-100 transition-all duration-200 inline md:hidden" to='/'>{handleTranslation('Home')}</Link></li>
                <li><Link className="text-slate-200 no-underline md:opacity-40 md:hover:opacity-100 transition-all duration-200" to='/prayerTimes'>{handleTranslation('Prayer Times')}</Link></li>
                <li><Link className="text-slate-200 no-underline md:opacity-40 md:hover:opacity-100 transition-all duration-200" to='/fastingTimes'>{handleTranslation('Fasting Times')}</Link></li>
                <li><Link className="text-slate-200 no-underline md:opacity-40 md:hover:opacity-100 transition-all duration-200" to='/asmaHusna'>{handleTranslation('Asma Husna')}</Link></li>
                <li><Link className="text-slate-200 no-underline md:opacity-40 md:hover:opacity-100 transition-all duration-200" to='/scholars'>{handleTranslation('Our scholars')}</Link></li>
                <button className="text-slate-200 md:opacity-40 md:hover:opacity-100 transition-all delay-100 duration-300 ease-in-out inline md:hidden" onClick={toggleLanguage}>{handleButtonTranslation()}</button>
            </ul>
            <button className="text-slate-200 opacity-40 hover:opacity-100 transition-all duration-300 ease-in-out hidden md:inline" onClick={toggleLanguage}>{handleButtonTranslation()}</button>
        </nav>
        {/* MOBILE NAV */}
        <div
            className="bg-slate-600/20 fixed top-2 left-2 z-50 flex md:hidden items-center gap-3 px-4 py-2 rounded-3xl"
        >
            <Link className="text-slate-200 no-underline opacity-40 hover:opacity-100 transition-all duration-200" to='/'><House /></Link>
            <Link className="text-slate-200 no-underline opacity-40 hover:opacity-100 transition-all duration-200" to='/prayerTimes'><Compass /></Link>
            <Link className="text-slate-200 no-underline opacity-40 hover:opacity-100 transition-all duration-200" to='/fastingTimes'><Moon /></Link>
            <Link className="text-slate-200 no-underline opacity-40 hover:opacity-100 transition-all duration-200" to='/asmaHusna'><Sparkles /></Link>
            <Link className="text-slate-200 no-underline opacity-40 hover:opacity-100 transition-all duration-200" to='/scholars'><UserStar /></Link>
        </div>
        <div className="bg-slate-600/20 fixed top-2 right-2 z-50 flex md:hidden items-center gap-6 px-2 py-2 rounded-3xl">
            <button className="text-slate-200 opacity-40 hover:opacity-100 transition-all duration-300 ease-in-out inline md:hidden" onClick={toggleLanguage}>{handleButtonTranslation()}</button>
        </div>
        <Outlet/>
        </>
    )
}