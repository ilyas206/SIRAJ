import { useCallback, useEffect, useState } from "react"
import { useLanguage } from "../context/languageContext"
import { ARABICTRANSLATION } from "../data/consts"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger" 

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function AsmaHusna(){
    const {language} = useLanguage()
    const [asmaHusna, setAsmaHusna] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const API_KEY = process.env.REACT_APP_ISLAMIC_API_KEY

    useGSAP(() => {
        if (!asmaHusna?.data?.names) return;

        gsap.utils.toArray('.asma-card').forEach(card => {
            gsap.from(card, {
                opacity : 0,
                y : 100,
                scale : .5,
                scrollTrigger :{
                    trigger : card,
                    start : "top bottom",
                    end : "bottom 75%",
                    scrub : 1,
                    toggleActions : "play reverse play reverse"
                }
            })
        })

        gsap.from('.header', {
            y : 100,
            opacity : 0
        })
    }, [asmaHusna])

    const fetchAsmaHusna = useCallback(async () => {
        setAsmaHusna(null)
        setIsLoading(true)
        setError(null)
        try {
            const res = await fetch(`https://islamicapi.com/api/v1/asma-ul-husna/?language=${language}&api_key=${API_KEY}`)
            if(!res.ok) throw new Error(`HTTP ${res.status}`)
            const data = await res.json()
            if(data.status === 'success') setAsmaHusna(data)
            else setError(new Error(data.message || 'API error'))
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }, [API_KEY, language])

    useEffect(() => {
        fetchAsmaHusna()
    }, [fetchAsmaHusna])

    const handleTranslation = (key) => {
        if(language === 'ar'){
            return ARABICTRANSLATION[key] 
        }
        return key
    }

    const handleErrorTranslation = (key) => {
        if(language === 'ar'){
            return `رمز اللغة ${language} غير متوفر. يرجى إرسال طلب إلينا لإضافة لغتك.`
        }
        return key
    }

    return(
        <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="relative w-full text-slate-200 p-4">
            {
                isLoading
                &&
                <div className="absolute inset-x-0 top-0 h-52 md:inset-0 md:h-[calc(100vh-88px)] z-50 flex items-center justify-center gap-4">
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
                asmaHusna?.status ===  'success' && 
                    <>
                        <div className="header flex flex-col md:flex-row gap-3 items-center justify-between my-3">
                            <div>
                                <h1 className="mt-4">{asmaHusna?.data.title}</h1>
                                <p className="text-sm font-thin mb-3">{asmaHusna?.data.description}</p>
                            </div>
                            <div className="w-full md:w-2/5 bg-slate-600 p-3 rounded-tl-3xl rounded-md">
                                <p className="text-sm font-thin">{asmaHusna?.data.recitation_benefits}</p>
                                <p className="font-bold">{asmaHusna?.data.hadith}</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-wrap justify-around gap-y-3 mt-5">
                            {asmaHusna?.data.names.map(ism => {
                                return <div key={ism.number} className="asma-card bg-slate-600 rounded-md p-3 text-center w-full md:w-[32%] relative">
                                    <span className="text-slate-200 opacity-40 absolute right-3 top-3">{ism.number}</span>
                                    <h3 className="font-bold mt-3">{language === 'en' ? ism.transliteration : ism.name }</h3>
                                    {
                                        language === 'en' && <p className="font-light">{ism.translation}</p>
                                    }
                                    <p className="text-sm font-thin mt-4">{ism.meaning}</p>
                                </div>
                            })}
                        </div>
                        <div className="h-60 text-center"></div>
                    </>
            }

            {
                error !== null 
                &&
                <div className="absolute inset-x-0 top-0 h-52 md:inset-0 md:h-[calc(100vh-88px)] z-50 flex items-center justify-center w-1/2 mx-auto gap-4">
                    <img src="./assets/icons/warning.svg" alt="Warning" className="w-10 h-10"/>
                    <h2 className="text-slate-200 mt-1">{handleErrorTranslation(error?.message)}</h2>
                </div>
            }   
        </div>
    )
}