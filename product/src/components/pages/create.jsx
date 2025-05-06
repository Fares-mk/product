import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addproduct } from "../../services/courses.services";
import Swal from "sweetalert2";
function create() {
    const [product, setproduct] = useState({
        title: "",
        price: "",
        desc: ""
    });
    const navigate = useNavigate();
    const createnewproduct = (event ) =>{
        event.preventDefault();
        if(product.title === "" ||product.price === "" 
             ||product.desc === "" )
            Swal.fire({
                text:"All Inputs Are required",
                icon:"warning",
                title:"Missing fields"
            });
            else{
                addproduct(product)
                .then(()=>{
                    Swal.fire({
                        text:"product add Successfully",
                        icon:"success",
                        title:"well done"
                    });
                    navigate("/");
                })
            }
    }
    return ( 
        <>  
        <h1 className="bg-dark text-center py-3 shadow  text-white mt-2 fs-5 border w-50 rounded-3 mx-auto">create product</h1>
        <section className="container w-50 mx-auto">
            <form onSubmit={createnewproduct}>
                <div className="form-group my-2">
                    <label htmlFor="" className="fw-bold" >product title</label>
                    <input type="text" className="form-control" id="title"onChange={e=>setproduct({...product,title :e.target.value})}/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="" className="fw-bold" >product price</label>
                    <input type="number" className="form-control" id="price"onChange={e=>setproduct({...product,price:e.target.value})} />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="" className="fw-bold">product desc</label>
                    <textarea className="form-control" id="desc"onChange={e=>setproduct({...product,desc:e.target.value})} />
                </div>
                <input type="submit" className="btn btn-dark" value="Add product" />
            </form>
        </section>
        </>
    );
}
export default create;