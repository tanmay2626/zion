import "./finished.scss";

export default function Success() {
  localStorage.clear();

  return (
    <section id="success">
      <img className="logo" src="./images/ZION.png" alt="zion-logo" />
      <h2>
        Thank you for joining us at <span>Zion 2023</span>. We appreciate your
        participation and look forward to seeing you again next year!
      </h2>
    </section>
  );
}
