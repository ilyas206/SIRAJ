import Search from "./search"
import Result from "./result"
import { useState } from "react"
import './index.css'
import Name from "./name"
import ResultName from "./resultName"

export default function App(props){

    const [result, setResult] = useState([])
    const [resultName, setResultName] = useState([])
    const [isArabic, setIsArabic] = useState(true)
    const [isNameRendered, setIsNameRendered] = useState(false)
    const [isSearchRendered, setIsSearchRendered] = useState(false)

    const searchVersesApp = (lowNumber, highNumber) => {
        setResult(props.Quran_sourats.filter(sourah => sourah.total_verses >= lowNumber && sourah.total_verses <= highNumber))
    }

    const handleLanguage = () => {
        setIsArabic(prevState => !prevState)
    }

    const displayNameComponent = () => {
        setIsNameRendered(prevState => !prevState)
        setIsSearchRendered(false)

    }

    const hideNameComponent = () => {
        setIsNameRendered(false)
    }

    const searchByName = (nameValue) => {
        setResultName(props.Quran_sourats.filter(sourah => sourah.name.startsWith(nameValue)))
    }

    const displaySearchComponent = () => {
        setIsSearchRendered(prevState => !prevState)
    }

    return(
        <div className="card p-3 mt-5 text-center w-75 mx-auto main">
            <button className="btn btn-success mb-3" onClick={handleLanguage}>{isArabic ? 'English' :  'العربية '}</button>   
            <button className="btn btn-success mb-3" onClick={displayNameComponent}>{isArabic ? 'البحث حسب الاسم' : 'Search by name'}</button>
            {isNameRendered ? 
                <Name isArabic={isArabic} searchName={searchByName} onClose={hideNameComponent}/>
                :  
                <>
                <ResultName result={resultName} isArabic={isArabic}/>
                
                <button onClick={displaySearchComponent} className="btn btn-success my-3">{isArabic  ? 'البحث حسب عدد الآيات' : 'Search By number of verses'}</button>
                </>
            }
            {
                isSearchRendered &&
                <>
                    <Search searchVerses={searchVersesApp} isArabic={isArabic}/>
                    <Result result={result} isArabic={isArabic}/>
                </>
                
                
            }
        </div>
    )
}