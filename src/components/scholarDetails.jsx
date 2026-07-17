import { useParams } from "react-router-dom"
import { categories, scholars } from "../data/islamicScholars.js"
import { useLanguage } from "../context/languageContext";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

export default function ScholarDetails(){

    const {language} = useLanguage()
    const {id} = useParams()
    const scholar = scholars.find(s => s.id === parseInt(id))

    const categorieMapping = categories.reduce((acc, cat) => {
        if(cat.id !== 'all'){
            acc[cat.id] = {
                en : cat.en,
                ar : cat.ar
            } 
        }
        return acc
    }, {});

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults : {
                ease : "none",
                duration : .3
            }
        })
        tl.from('.legacy', {
            opacity : 0,
            y : 70
        })
        tl.from('.name', {
            opacity : 0,
            y : 10
        }, '<1')
        tl.from('#scholarImg', {
            opacity : 0,
            y : 10
        }, '<')
        tl.from('.title', {
            opacity : 0,
            y : 10
        })
        tl.from('.birth', {
            opacity : 0,
            y : 10
        })
        tl.from('#age', {
            opacity : 0,
            y : 10
        }, '<')
        tl.from('#fieldsSpan', {
            opacity : 0
        })
        gsap.utils.toArray('.field').forEach(field => {
            tl.from(field, {
                opacity : 0,
                x : -10,
            })
        })
        tl.from('#quote', {
            opacity : 0,
            y : 10
        })
        tl.from('#achievements', {
            opacity : 0,
            y : 20
        })
    })

    return(
        <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="text-slate-200 p-3 mt-5 md:mt-2">
            <div className="flex flex-col md:flex-row justify-around gap-3 md:gap-0 w-[95%] mt-2 mx-3">
                <div className="flex flex-col justify-center text-center gap-10 w-full md:w-2/3 px-3 ">
                    <div>
                        <span className="legacy italic text-sm font-thin">{scholar.legacy[language]}</span>
                        <h1 className="name font-extrabold text-3xl md:text-5xl my-2">{scholar.name[language]}</h1>
                        <p className="title font_kufi text-xl mt-3">{scholar.title[language]}</p>
                        <div className="birth mx-auto bg-slate-600/20 rounded-md p-2 font-light w-fit">
                            <span>{language === 'ar' ? 'ولد في' : 'Born in'} {scholar.birthplace[language]}</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                        <span className="hidden md:inline" id="fieldsSpan">{language === 'ar' ? 'المجالات : ' : 'Fields : '}</span>
                        {
                            scholar.field.map(f => {
                                return <span key={f} className="field flex-1 text-center bg-slate-600/20 p-2 rounded-md">{language === 'ar' ? categorieMapping[f]?.ar : categorieMapping[f]?.en}</span>
                            })
                        }
                    </div>
                </div>
                <div className="flex flex-col items-center mx-auto md:mx-0 gap-2 w-48 h-50 overflow-hidden">
                    <img src={scholar.image} alt={scholar.name[language]} id="scholarImg" className="w-full h-full object-cover rounded-xl drop-shadow-xl" />
                    <p id="age" className="text-slate-400">{scholar.birth} - {scholar.death}</p>
                    <p id="quote" className="font_kufi italic text-center text-slate-200">"{scholar.quote[language]}"</p>
                </div>
            </div>
            <div id="achievements" className="flex flex-col md:flex-row gap-2 w-full mt-6">
                <div className="w-full text-center">
                    <h3 className="bg-slate-600/20 p-2 text-center rounded-md">{language === 'ar' ? 'من مساهماته': 'From his contributions'}</h3>
                        <ul className="list-disc md:list-inside">
                            {
                                scholar.contributions[language].map(c => <li key={c} className="font-light">{c}</li>)
                            }
                        </ul>
                </div>
                <div className="w-full text-center">
                    <h3 className="bg-slate-600/20 p-2 text-center rounded-md">{language === 'ar' ? 'أكثر أعماله شهرة' : 'His most famous work'}</h3>
                    <p className="font-light">{language === 'ar' ? scholar.famousWorks[0].title : scholar.famousWorks[0].translation}</p>
                </div>
            </div>
        </div>
    )
}