import { useParams } from "react-router-dom"
import { categories, scholars } from "../data/islamicScholars.js"
import { useLanguage } from "../context/languageContext";

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

    return(
        <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="bg-slate-600/20 text-slate-200 p-3">
            <div className="flex flex-col md:flex-row justify-around gap-3 md:gap-0 w-[95%] mt-2 mx-3">
                <div className="flex flex-col justify-center gap-10 w-full md:w-2/3 px-3 ">
                    <div>
                        <span className="italic text-sm font-thin">{scholar.legacy[language]}</span>
                        <h1 className="font-extrabold text-5xl my-2">{scholar.name[language]}</h1>
                        <p className="font_kufi text-xl mt-3">{scholar.title[language]}</p>
                        <div className="bg-slate-600/20 rounded-md p-2 font-light w-fit">
                            <span>{language === 'ar' ? 'ولد في' : 'Born in'} {scholar.birthplace[language]}</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                        <span>{language === 'ar' ? 'المجالات : ' : 'Fields : '}</span>
                        {
                            scholar.field.map(f => {
                                return <span key={f} className="bg-slate-600/20 p-2 rounded-md">{language === 'ar' ? categorieMapping[f]?.ar : categorieMapping[f]?.en}</span>
                            })
                        }
                    </div>
                </div>
                <div className="flex flex-col items-center mx-auto md:mx-0 gap-2 w-48 h-50 overflow-hidden">
                    <img src={scholar.image} alt={scholar.name[language]} className="w-full h-full object-cover rounded-xl drop-shadow-xl" />
                    <p className="text-slate-400">{scholar.birth} - {scholar.death}</p>
                    <p className="font_kufi italic text-center text-slate-200">"{scholar.quote[language]}"</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 w-full mt-6">
                <div className="w-full text-center">
                    <h3 className="bg-slate-600/20 p-2 text-center rounded-md">{language === 'ar' ? 'من مساهماته': 'From his contributions'}</h3>
                        <ul className="list-disc list-inside">
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