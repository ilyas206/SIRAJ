import { Link } from 'react-router-dom'
import './index.css'

export default function Result({result, isArabic}){
    return(
        <>
        
        {
            result.length > 0 
            ?
            
            <div >
                {isArabic ? <h3> {result.length} : عدد السور المتاحة  </h3> :<h3>Number of available surahs : {result.length}</h3>}
                <div className="parent">
                {result.map(sourah => {
                    return <div className="card my-2 mx-1 p-3 child" key={sourah.id}>
                        <Link className='content' to={`/sourah/${sourah.id}`}>
                        <h3>{sourah.name}</h3>
                        </Link>
                        <h6>{sourah.type}</h6>
                        <h5>{isArabic ? `${sourah.total_verses} : عدد الآيات ` : `Total Verses : ${sourah.total_verses}`}</h5>
                    </div>
                })}
                </div>
            </div>
            : <h5>{isArabic ? 'لا توجد نتائج' : 'No results'}</h5>
        }

        
        </>
        
        
    )
}