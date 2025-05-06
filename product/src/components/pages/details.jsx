import { useState , useEffect} from "react";
import { getproduct } from "../../services/courses.services";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function details() {
    const [product , setproduct] = useState([])
    const id = useParams().id
    const navigate = useNavigate();
    useEffect(() =>{
            getproduct(id)
            .then(res => setproduct(res.data))
        } 
    , [])
    const redirectToHome = () =>{
        navigate("/");
    }
    return (  
        <>
            <h1 className="bg-dark py-3 text-white fs-5 text-center mt-2">Course Details</h1>
            <section className="cantainer w-50 mx-auto text-center">
                <div class="card">
                    <div class="card-header">
                        {product.title}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{product.desc}</h5>
                        <p class="card-text">{product.price} </p>
                        <button onClick={redirectToHome} className="btn btn.bordered bg-dark text-white text-center">Return</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default details;