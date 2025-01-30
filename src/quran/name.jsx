import { useState } from "react"

export default function Name({isArabic, onClose, searchName}){

    const [nameValue, setNameValue] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        searchName(nameValue)
        onClose()
    }
    return(
        <>
            <h3>{isArabic ? 'البحث حسب الاسم' : 'Search by name'}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={isArabic ? 'أدخل حروف السور التي تريد البحث عنها بالانجليزية' : 'Enter the letters of the surahs you want to search for in English'} className="form-control w-50 mx-auto" onChange={(e) => setNameValue(e.target.value)} />
                <button type="submit" className="btn btn-success my-3">{isArabic ? 'بحث':'Search'}</button>
            </form>
                <button className="btn btn-success m-3" onClick={onClose}>{isArabic ? 'العودة إلى الرئيسية' : 'Back to Home'}</button>
        </>
    )
}