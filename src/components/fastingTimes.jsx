import { useEffect, useState } from "react"
import { useLanguage } from "../context/languageContext"
import { ARABICTRANSLATION } from "../constants/consts"

export default function FastingTimes(){

    const API_KEY = process.env.REACT_APP_ISLAMIC_API_KEY

    const [fastingData, setFastingData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const {language} = useLanguage();

    const handleTranslation = (key) => {
        if(language === 'ar'){
            return ARABICTRANSLATION[key] 
        }
        return key
    }

    const getCurrentLocation = () => {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error('Geolocation not supported'));
                return;
            }

            navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                });
            },
            (error) => reject(error.message || error)
            );
        });
    }

    const fetchFastingTimes = async (latitude, longitude) => {
        setFastingData(null)
        setError(null)
        try {
            const res = await fetch(`https://islamicapi.com/api/v1/fasting/?lat=${latitude}&lon=${longitude}&api_key=${API_KEY}`)
            if(!res.ok) throw new Error(`HTTP ${res.status}`)
            const data = await res.json()
            if(data.status === 'success') setFastingData(data)
            else setError(new Error(data.message || 'API error'))
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
    (async () => {
        try {
            setIsLoading(true)
            const { latitude, longitude } = await getCurrentLocation();
            fetchFastingTimes(latitude, longitude);
        } catch(error){
            setError(error)
        }
    })();
    }, []);

    const getDayFromDate = dateString => {
        if(isNaN(Number(dateString.split("-")[2]))){
            return null
        }
        return Number(dateString.split("-")[2])
    }

    const getYearFromDate = dateString => {
        return Number(dateString.split("-")[0]);
    }

    const getMonthFromDate = (dateString, locale = "en-US") => {
        const date = new Date(dateString)
        return date.toLocaleString(locale, {month : "long"})
    }

    const getHijriMonthIndex = (dateString) => {
        if(!dateString) return null;
        const enMonths = [
            "Muharram","Safar","Rabi al-awwal","Rabi al-thani","Jumada al-ula","Jumada al-akhir",
            "Rajab","Sha'ban","Ramadan","Shawwal","Dhu al-Qi'dah","Dhu al-Hijjah"
        ];
        const normalize = s => s.toLowerCase().replace(/['’`.,]/g,'').replace(/\s+/g,' ').trim();
        const cleaned = dateString.replace(/AH/gi,'').replace(/,/g,'').trim();
        const tokens = cleaned.split(/\s+/);

        for(let i=0;i<tokens.length;i++){
            const t = normalize(tokens[i]);
            for(let j=0;j<enMonths.length;j++){
                if(normalize(enMonths[j]) === t || normalize(enMonths[j]).startsWith(t)){
                    return j;
                }
            }
            if(i+1 < tokens.length){
                const pair = normalize(tokens[i] + ' ' + tokens[i+1]);
                for(let j=0;j<enMonths.length;j++){
                    if(normalize(enMonths[j]) === pair) return j;
                }
            }
        }
        return null;
    }

    const parseHijriDate = (dateString) => {
        if(!dateString) return { day: null, monthIndex: null, year: null };
        const convertArabicDigits = s => s
            .replace(/[\u0660-\u0669]/g, c => String(c.charCodeAt(0) - 0x0660))
            .replace(/[\u06F0-\u06F9]/g, c => String(c.charCodeAt(0) - 0x06F0));
        const cleaned = convertArabicDigits(dateString.replace(/AH/gi,'').replace(/,/g,'').trim());
        const tokens = cleaned.split(/\s+/);

        const dayToken = tokens.find(t => /^\d{1,2}$/.test(t));
        let yearToken = null;
        for(let i = tokens.length - 1; i >= 0; i--) {
            if(/^\d{3,4}$/.test(tokens[i])){ yearToken = tokens[i]; break; }
        }

        const monthIndex = getHijriMonthIndex(cleaned);
        return {
            day: dayToken ? Number(dayToken) : null,
            monthIndex: monthIndex,
            year: yearToken ? Number(yearToken) : null
        }
    }

    const getHijriDay = (dateString) => parseHijriDate(dateString).day;
    const getHijriYear = (dateString) => parseHijriDate(dateString).year;

    const getHijriMonthFromDate = (dateString, locale = "") => {
        const arabicMonths = [
            "محرم",
            "صفر",
            "ربيع الأول",
            "ربيع الثاني",
            "جمادى الأولى",
            "جمادى الثانية",
            "رجب",
            "شعبان",
            "رمضان",
            "شوال",
            "ذو القعدة",
            "ذو الحجة"
        ];
        const enMonths = [
            "Muharram","Safar","Rabi al-awwal","Rabi al-thani","Jumada al-ula","Jumada al-akhir",
            "Rajab","Sha'ban","Ramadan","Shawwal","Dhu al-Qi'dah","Dhu al-Hijjah"
        ];
        const p = parseHijriDate(dateString);
        const idx = p.monthIndex;
        if(idx === null) return dateString.replace(/AH/gi,'').trim();
        if(locale === 'ar-EG'){
            return arabicMonths[idx];
        }
        return enMonths[idx];
    }

    const handleDuration = (durationString, locale = '') => {
        if(!durationString) return durationString;
        if(locale === 'ar-EG'){
            return durationString
                .replace(/\bhours?\b/i, 'ساعات')
                .replace(/\bminutes?\b/i, 'دقائق')
        }
        return durationString
    }

    return(
        <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="w-full text-slate-200 p-4">
            {
                isLoading
                &&
                <div className="fixed inset-0 z-50 flex items-center justify-center gap-4">
                    <div className="dot-spinner">
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                    </div>
                    <h2 className="text-slate-200">{handleTranslation('Please wait')}</h2>
                </div>
            }
            {
                fastingData?.status === 'success' 
                &&
                <div className="text-slate-200">
                    <h1>{handleTranslation("Fasting Times")}</h1>
                    <div className="mt-4">
                        <h3 className="bg-slate-600/40 p-2 rounded-md font-light">
                            <span>{getDayFromDate(fastingData?.data.fasting[0].date)} </span>
                            <span>{getMonthFromDate(fastingData?.data.fasting[0].date, language === 'ar' && 'ar-EG')} </span>
                            <span>{getYearFromDate(fastingData?.data.fasting[0].date)}</span>
                            <span> / {getHijriDay(fastingData?.data.fasting[0].hijri_readable)} {getHijriMonthFromDate(fastingData?.data.fasting[0].hijri_readable, language === 'ar' && 'ar-EG')} {getHijriYear(fastingData?.data.fasting[0].hijri_readable)}</span>
                        </h3> 
                        
                        <div className="bg-slate-600/20 rounded-md mb-3 p-3">
                            <div className=" flex items-center justify-evenly rounded-md p-3 my-2">
                                <div className="min-h-32 flex flex-col items-center justify-around p-2">
                                    <img src="assets/images/sunrise.png" alt="Sahur" className="w-10 h-10 mb-2" />
                                    <span className="font-bold">{handleTranslation("Sahur")}</span>
                                    <span className="font-thin">{fastingData?.data.fasting[0].time.sahur}</span>
                                </div>
                                <div className="flex flex-col items-center justify-center p-2">
                                    <span className="font-bold">{handleTranslation("Duration")}</span>
                                    <span className="font-thin">{handleDuration(fastingData?.data.fasting[0].time.duration, language === 'ar' && 'ar-EG')}</span>
                                </div>
                                <div className="min-h-32 flex flex-col items-center justify-around p-2">
                                    <img src="assets/images/sunset.png" alt="Iftar" className="w-10 h-10 mb-2" />
                                    <span className="font-bold">{handleTranslation("Iftar")}</span>
                                    <span className="font-thin">{fastingData?.data.fasting[0].time.iftar}</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-600/80 rounded-md p-3 flex items-center justify-around">
                            <h5 className="font-light">{handleTranslation("White days")}</h5>
                            <span>
                                <span className="font-thin">{getDayFromDate(fastingData?.data.white_days.days["13th"])}</span> , {' '}
                                <span className="font-thin">{getDayFromDate(fastingData?.data.white_days.days["14th"])}</span> {handleTranslation("And")} {' '}
                                <span className="font-thin">{getDayFromDate(fastingData?.data.white_days.days["15th"])}</span> {' '}
                                {getMonthFromDate(fastingData?.data.fasting[0].date, language === 'ar' && 'ar-EG')}{' '}
                                <span className="font-thin">{getYearFromDate(fastingData?.data.fasting[0].date)}</span>
                            </span>
                        </div>      
                    </div>
                </div>
            }
            {
                error !== null 
                &&
                <div className="fixed inset-0 z-50 flex items-center justify-center w-1/2 mx-auto gap-5">
                    <img src="./assets/images/warning.svg" alt="Warning" className="w-10 h-10"/>
                    <h2 className="text-slate-200 mt-1">{error?.message}</h2>
                </div>
            }
        </div>
    )
}