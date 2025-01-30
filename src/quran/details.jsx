import { Link, useParams } from "react-router-dom"

export default function Details({Quran_sourats}){
    const {id} = useParams()
    const sourah = Quran_sourats.find(sourah => sourah.id === parseInt(id))
    return(
        <div className="card p-3 w-75 mx-auto text-center details" >
            <h1><strong>{sourah.name}</strong></h1>
            <h4 className="my-2">{sourah.type}</h4>
            <h4 className="my-2"> Number of verses <strong>{sourah.total_verses}</strong> عدد الآيات</h4>
            <h6 className="my-2"><strong> وصف مختصر للسورة بالعربية : </strong>{sourah.description_ar}</h6>
            <h6 className="my-2"><strong>Brief description of the surah in English:</strong> {sourah.description_en} </h6>
            <Link to={'/'}><button className="btn btn-success my-2">Return to Home page</button></Link>
        </div>
    )
}