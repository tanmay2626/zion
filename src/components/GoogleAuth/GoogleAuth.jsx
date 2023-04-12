import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

function GoogleAuth(props) {
  const [user, setUser] = useState(null);
  const handleCallbackResponse = (res) => {
    const cred = jwt_decode(res.credential);
    setUser(cred.email);
    props.setEmail(cred.email);
    document.getElementById("signIn").hidden = true;
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize(
      {
        client_id:
          "73911737589-pet5993a7ellig1aikd1ljlf65ecdopf.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      },
      []
    );

    google.accounts.id.renderButton(document.getElementById("signIn"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className="App">
      <div id="signIn"></div>
      {user && <p>Verified Email : {user}</p>}
    </div>
  );
}

export default GoogleAuth;
