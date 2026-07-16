import { useState } from "react";
import { scholars, categories } from "../data/islamicScholars";
import { useLanguage } from "../context/languageContext";
import { Link } from "react-router-dom";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger" 

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Scholars(){
    const [selectedCategory, setSelectedCategory] = useState('All')
    const {language} = useLanguage()


    const filteredScholars = selectedCategory === 'All'
    ? scholars 
    : scholars.filter(s => s.field.includes(selectedCategory))

    // useGSAP(() => {
    //     if (!filteredScholars) return;

    //     gsap.utils.toArray('.scholar').forEach(scholar => {
    //         gsap.from(scholar, {
    //             opacity : 0,
    //             scrollTrigger :{
    //                 trigger : scholar,
    //                 start : "top bottom",
    //                 end : "bottom 75%",
    //                 // scrub : 1,
    //                 markers : true,
    //                 toggleActions : "play reverse play reverse"
    //             }
    //         })
    //     })

    // }, [filteredScholars])

    return(
        <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="w-full text-slate-200 p-4">
            <div className="mt-3 mb-5">
                {language === 'ar' ? <h1>علماء العصر <span className="text-yellow-400">الذهبي</span> الإسلامي</h1> : <h1>Islamic <span className="text-yellow-400">Golden</span> Age Scholars</h1>}
                <p className="font-thin my-2">
                    {language === 'ar' ? 'من القرن الثامن إلى الرابع عشر : عصر الثورة العلمية' : '8th - 14th Century: An Era of Scientific Revolution'}
                </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 mt-3 mb-20">
                {
                    categories.map(category => {
                        return <button 
                                    key={category.id} 
                                    className={`flex items-center gap-3 ${selectedCategory === category.id ? 'bg-slate-500' : 'bg-slate-700 hover:bg-slate-600'} transition duration-300 font-light rounded-md p-2`}
                                    onClick={() => setSelectedCategory(category.id)}>
                                {language === 'ar' ? category.ar : category.en}
                                <img src={category.icon} alt={category.id} className="w-6 h-6 md:w-7 md:h-7" />
                            </button>
                    })
                }
            </div>
            <div className="flex justify-center">
                <img src="assets/icons/down-arrow.png" alt="Down arrow" className="w-10 h-10" />
            </div>
            <div className="flex justify-center gap-2 flex-wrap my-8">
                {
                    filteredScholars.map(scholar => {
                        return(
                            <div key={scholar.id} className="scholar w-full flex flex-col justify-center flex-grow-1 md:w-[48%] bg-slate-700/40 hover:bg-slate-600/40 transition duration-300 backdrop-blur p-6 rounded-md text-center">
                                <Link to={`/scholars/${scholar.id}`} className="no-underline text-slate-200 cursor-pointer">
                                    <h3 className="font-bold">{scholar.name[language]}</h3>
                                </Link>
                                <p className="font-thin">{scholar.title[language]}</p>
                                <div className="flex items-center justify-center gap-1">
                                    <span className="bg-slate-400 p-2 rounded-xl text-slate-900">{scholar.birth} / {scholar.death}</span>
                                    <span className="bg-slate-400 p-2 rounded-xl text-slate-900">{scholar.birthplace[language]}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}