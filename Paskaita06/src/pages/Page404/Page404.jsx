import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Page404() {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  function goHome() {
    navigate("/home");
  }

  useEffect(() => {
    const iterval = setInterval(() => {
      setSeconds((s) => s - 1);
    }, 1000);

    return () => clearInterval(iterval);
  }, []);

  useEffect(() => {
    if (seconds <= 0) {
      navigate("/home");
    }
  }, [seconds, navigate]);

  return (
    <div>
      <button onClick={goHome}>Go home</button>
      <div>404 Page not found</div>
      <h3>Redirecting home in {seconds}</h3>
    </div>
  );
}

export default Page404;
