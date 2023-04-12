import "./success.scss";

export default function Success() {
    localStorage.clear();
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
      <div>
        <p>Registered</p>
        <img
          src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png"
          alt="green-tick"
        />
      </div>
    </section>
  );
}
