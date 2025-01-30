import { useState } from "react"

export default function Search(props){

    const [lowNumber, setLowNumber] = useState()
    const [highNumber, setHighNumber] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        props.searchVerses(lowNumber, highNumber)
    }
    return(
        <div>
            {props.isArabic ? <h1>البحث عن السور حسب عدد الآيات</h1> : <h1>Search for surahs according to the number of verses</h1>}   
            {props.isArabic ? <h5>عدد الآيات محصور بين</h5> : <h5>the number of verses is trapped between</h5>}
            <br />
            <form onSubmit={handleSubmit}>
                <input placeholder={props.isArabic ? 'أدخل أدنى رقم للآية' : 'Enter the lowest verse number'} className="form-control w-50 mx-auto" type="number" onChange={(e) => setLowNumber(e.target.value)} /><br />
                {props.isArabic ? <h5> و </h5> : <h5>And</h5>}
                <br />
                <input placeholder={props.isArabic ? 'أدخل أعلى رقم للآية ' : 'Enter the highest verse number'} className="form-control w-50 mx-auto" type="number" onChange={(e) => setHighNumber(e.target.value)}/><br />
                <button className="btn btn-success my-3" type="submit">{props.isArabic ?'بحث':'Search'}</button>
            </form>
        </div>
    )
}