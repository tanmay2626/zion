import { useState } from "react";
import "./success.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Success() {
  const navigate = useNavigate();
  localStorage.removeItem("token");
  localStorage.removeItem("details");
  localStorage.removeItem("eventsSelected");
  localStorage.removeItem("cartValue");
  const referenceid = localStorage.getItem("id");

  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(referenceid);
    setCopySuccess(true);
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (!id) {
      navigate("/details");
    }
  }, [navigate]);

  return (
    <section id="success">
      <img className="logo" src="./images/ZION.png" alt="zion-logo" />
      <h2>
        Thankyou for registering in <span>Zion</span>
      </h2>
      <p>
        You will recieve a confirmation with further steps in your registered
        email.
      </p>
      <div onClick={handleCopyClick}>
        <p>{referenceid}</p>
        <img
          src={
            !copySuccess
              ? "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_content_copy_48px-256.png"
              : "https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png"
          }
          alt="clipboard"
        />
      </div>
    </section>
  );
}
