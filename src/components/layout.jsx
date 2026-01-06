import { Link, Outlet } from "react-router-dom";
import { useLanguage } from "../context/languageContext";
import { ARABICTRANSLATION } from "../constants/consts";

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
                <img className="w-6 h-6" src="/assets/images/united-states.png" alt="United States" />
                <span className="font-normal">English</span>
            </div>
        }
        return <div className="flex items-center justify-center gap-2">
                <img className="w-6 h-6" src="/assets/images/saoudi-arabia.png" alt="Saoudi Arabia" />
                <span className="font-normal">عربي</span>
            </div>
    }

    return(
        <>
        <nav dir={language === 'ar' ? 'rtl' : 'ltr'} className="bg-slate-600 flex items-center justify-around py-3">
            <Link to='/'>
                <img src="assets/images/logo.png" alt="Moon Logo" className="w-14 h-14 opacity-40 hover:opacity-100 transition-all duration-300" />
            </Link>
            <ul className="flex items-center justify-center gap-10 mb-2">
                <li><Link className="text-slate-200 opacity-40 no-underline hover:opacity-100 transition-all duration-200" to='/'>{handleTranslation('Home')}</Link></li>
                <li><Link className="text-slate-200 opacity-40 no-underline hover:opacity-100 transition-all duration-200" to='/prayerTimes'>{handleTranslation('Prayer Times')}</Link></li>
                <li><Link className="text-slate-200 opacity-40 no-underline hover:opacity-100 transition-all duration-200" to='/fastingTimes'>{handleTranslation('Fasting Times')}</Link></li>
                <li><Link className="text-slate-200 opacity-40 no-underline hover:opacity-100 transition-all duration-200" to='/asmaHusna'>{handleTranslation('Asma Husna')}</Link></li>
            </ul>
            <button className="text-slate-200 opacity-40 hover:opacity-100 transition-all delay-100 duration-300 ease-in-out" onClick={toggleLanguage}>{handleButtonTranslation()}</button>
        </nav>
        <Outlet/>
        </>
    )
}