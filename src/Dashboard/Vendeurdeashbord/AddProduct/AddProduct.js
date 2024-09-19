import React, { useState, useEffect } from "react";

import "./AddProduct.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
 
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [quantity, setQuantity] = useState(""); // New state for quantity
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(window.localStorage.getItem("userr"));
    const userId = user?._id;

    const formData = new FormData();
    formData.append("name", title);
    formData.append("price", parseFloat(price));
    formData.append("description", description);
    formData.append("image", image);
    formData.append("category", category);
    formData.append("company", company);
    // formData.append("quantity", parseInt(quantity)); // Append quantity to formData
    formData.append("sellerId", userId);

    try {
      const response = await fetch("https://develop-yourself.onrender.com/api/products", {
        method: "POST",
        body: formData,
      });
      const json = await response.json();
      console.log("Success:", json);
      toast.success(("product_added_success"));
      setTimeout(() => navigate("/Service"), 2000); // Navigate to the shop after 2 seconds
    } catch (err) {
      console.error("Error:", err);
      toast.error(("error_adding_product"));
    }
  };

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = JSON.parse(window.localStorage.getItem("userr"));
        setCurrentUser(user);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>{("loading")}</div>;
  }

  if (error) {
    return <div>{("error")}: {error}</div>;
  }

  if (!currentUser) {
    return <div>{("user_not_found")}</div>;
  }

  if (currentUser.role !== "seller") {
    return <div>{("you_must_be_active")}</div>;
  }

  if (currentUser.sellerStatus === "requested") {
    return (
      <div>
        {("review_request")}
      </div>
    );
  }

  if (currentUser.sellerStatus === "refused") {
    return <div>{("request_refused")}</div>;
  }

  if (currentUser.sellerStatus === "accepted") {
    return (
      <div className="add-product-container">
        <h2>{("add_product")}</h2>
        <form onSubmit={handleSubmit} className="add-product-form">
          <div className="form-group">
            <label htmlFor="title">{("title")}</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">{("price")}</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">{("description")}</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">{("image")}</label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">{("your_state")}</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">{("select_wilaya")}</option>
              <option value="Adrar">Adrar</option>
              <option value="Chlef">Chlef</option>
              <option value="Laghouat">Laghouat</option>
              <option value="Oum El Bouaghi">Oum El Bouaghi</option>
              <option value="Batna">Batna</option>
              <option value="Bejaia">Bejaia</option>
              <option value="Biskra">Biskra</option>
              <option value="Bechar">Bechar</option>
              <option value="Blida">Blida</option>
              <option value="Bouira">Bouira</option>
              <option value="Tamanrasset">Tamanrasset</option>
              <option value="Tebessa">Tebessa</option>
              <option value="Tlemcen">Tlemcen</option>
              <option value="Tiaret">Tiaret</option>
              <option value="Tizi Ouzou">Tizi Ouzou</option>
              <option value="Algiers">Algiers</option>
              <option value="Djelfa">Djelfa</option>
              <option value="Jijel">Jijel</option>
              <option value="Setif">Setif</option>
              <option value="Saida">Saida</option>
              <option value="Skikda">Skikda</option>
              <option value="Sidi Bel Abbes">Sidi Bel Abbes</option>
              <option value="Annaba">Annaba</option>
              <option value="Guelma">Guelma</option>
              <option value="Constantine">Constantine</option>
              <option value="Medea">Medea</option>
              <option value="Mostaganem">Mostaganem</option>
              <option value="Msila">Msila</option>
              <option value="Mascara">Mascara</option>
              <option value="Ouargla">Ouargla</option>
              <option value="Oran">Oran</option>
              <option value="El Bayadh">El Bayadh</option>
              <option value="Illizi">Illizi</option>
              <option value="Bordj Bou Arreridj">Bordj Bou Arreridj</option>
              <option value="Boumerdes">Boumerdes</option>
              <option value="El Tarf">El Tarf</option>
              <option value="Tindouf">Tindouf</option>
              <option value="Tissemsilt">Tissemsilt</option>
              <option value="El Oued">El Oued</option>
              <option value="Khenchela">Khenchela</option>
              <option value="Souk Ahras">Souk Ahras</option>
              <option value="Tipaza">Tipaza</option>
              <option value="Mila">Mila</option>
              <option value="Ain Defla">Ain Defla</option>
              <option value="Naama">Naama</option>
              <option value="Ain Temouchent">Ain Temouchent</option>
              <option value="Ghardaia">Ghardaia</option>
              <option value="Relizane">Relizane</option>
              <option value="Timimoun">Timimoun</option>
              <option value="Bordj Badji Mokhtar">Bordj Badji Mokhtar</option>
              <option value="Ouled Djellal">Ouled Djellal</option>
              <option value="Beni Abbes">Beni Abbes</option>
              <option value="In Salah">In Salah</option>
              <option value="In Guezzam">In Guezzam</option>
              <option value="Touggourt">Touggourt</option>
              <option value="Djanet">Djanet</option>
              <option value="El Meghaier">El Meghaier</option>
              <option value="El Menia">El Menia</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="company">{("category")}</label>
            <select
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            >
              <option value="">{("select_category")}</option>
              <option value="Nanny">{("nanny")}</option>
              <option value="House Keeper">{("house_keeper")}</option>
              <option value="Kindergartens">{("kindergartens")}</option>
            </select>
          </div>

          <button type="submit">{("add_service")}</button>
        </form>
        <ToastContainer />
      </div>
    );
  }

  return null;
};

export default AddProduct;
