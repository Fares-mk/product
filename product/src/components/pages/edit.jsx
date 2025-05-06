import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getproducts, updateproduct } from "../../services/courses.services";
function edit() {
    const id = useParams().id
    const [product , setproduct] = useState({
        id : id,
        title : "",
        price : "",
        desc : "",
    })
    useEffect(()=>{
        getproducts(id)
        .then(res => setcourse(res.data))
    } , [])
    const navigate = useNavigate();

    const editproduct = (event) =>{
        event.preventDefault()
        if(product.title === "" ||product.price === "" 
            ||product.desc === "" )
            alert("All Inputs Are required")
        else{
            updateproduct( id , product )
            .then(() => {alert("Course Updated Successfully")})
            navigate("/")
        }
    }
    return ( 
        <>
            <h1 className="bg-dark py-3 text-white fs-5 text-center mt-2">Create Course</h1>
            <section className="container w-50 mx-auto my-5">
            <form onSubmit={editproduct}>
                    <div className="form-group my-2">
                        <label htmlFor="title" className="fw-bolder">product Title</label>
                        <input type="text" id="title" className="form-control"
                        value={course.title}
                        onChange={e => setproduct({...product , title : e.target.value})}/>
                        </div>
                    <div className="form-group my-2">
                        <label htmlFor="price" className="fw-bolder">product Price</label>
                        <input type="text" id="price" className="form-control"
                        value={course.price}
                        onChange={e => setproduct({...product , price : e.target.value})}/>
                        </div>
                    <div className="form-group my-2">
                        <label htmlFor="desc" className="fw-bolder">desc</label>
                        <textarea type="text" id="desc" className="form-control"
                        value={course.desc}
                        onChange={e => setproduct({...product , desc : e.target.value})}></textarea>
                    </div>
                    <input type="submit" value="Edit course" className="btn btn-dark my-2"/>
                </form>
            </section>
        </>
    );
}
export default edit;