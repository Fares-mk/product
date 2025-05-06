import { useEffect, useState } from "react";
import { deleteproduct, getproducts } from "../../services/courses.services";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Home() {
    const [products, setproductes] = useState([]);
    const [searched, setSearched] = useState("");

    useEffect(() => {
        getproducts().then(res => setproductes(res.data));
    }, []);

    const deleteproducts = (id) => {
        deleteproduct(id).then(() => {
            Swal.fire({
                text: "Product deleted successfully",
                icon: "success",
                title: "Well done"
            });
            setproductes(products.filter(product => product.id !== id));
        });
    };

    return (
        <>
            <h1 className="bg-dark text-center py-3 text-white mt-2 fs-5 shadow border w-50 rounded-3 mx-auto">Home</h1>

            <div className="container-md d-flex justify-content-center">
                <input
                    className="form-control w-50"
                    type="search"
                    placeholder="Search by title..."
                    onChange={(event) => setSearched(event.target.value)}
                />
            </div>

            <section className="container my-5 text-center">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Description</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    {products.length > 0 &&
                        <tbody>
                            {products
                                .filter(p => p.title.toLowerCase().includes(searched.toLowerCase()))
                                .map(product => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.title}</td>
                                        <td>{product.price}</td>
                                        <td>{product.desc}</td>
                                        <td>
                                            <Link to={`/${product.id}`} className="btn btn-sm mx-1 btn-info rounded-3">Show</Link>
                                            <Link to={`/edit/${product.id}`} className="btn btn-sm mx-1 btn-success rounded-3">Edit</Link>
                                            <button onClick={() => deleteproducts(product.id)} className="btn btn-sm mx-1 btn-danger rounded-3">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    }
                </table>
            </section>
        </>
    );
}

export default Home;
