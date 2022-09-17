import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import "../style/pages/sign-page.css";

export default function SignPage() {
  const navigate = useNavigate();
  const [userinfo, setUserInfo] = useState({
    email: "",
    password: "",
    firstName: "",
    signUpEmail: "",
    signUpPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUserInfo({ ...userinfo, [name]: value });
  };
  const getUser = async () => {
    setLoading(true);
    await new Promise((resolve) => setInterval(() => resolve(), 2000));
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);
  const loginToAccount = async (e) => {
    e.preventDefault();

    const data = await fetch(
      `http://localhost:8080/login?email=${userinfo.email}&password=${userinfo.password}`
    );
    const response = await data.json();
    if (response.error) {
      toast.error(response.error);
    } else {
      toast.success("successfully login");
      localStorage.setItem("loginDone", true);
      navigate("/");
    }
  };

  const submitData = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(userinfo);

    if (userinfo.signUpPassword !== userinfo.confirmPassword) {
      return toast.error("password not matched, try again");
    }

    const { firstName, signUpEmail, signUpPassword } = userinfo;

    if (firstName && signUpEmail && signUpPassword) {
      const data = await fetch(
        "https://gucci-clothing-default-rtdb.firebaseio.com/shopping-products.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName,
            email: signUpEmail,
            password: signUpPassword,
          }),
        }
      );
      await new Promise((resolve) => setTimeout(() => resolve(), 2000));

      if (data) {
        toast.success("sign up complete, now you can login");
        setUserInfo({
          ...userinfo,
          firstName: "",
          signUpEmail: "",
          SignUpPassword: "",
          confirmPassword: "",
        });
        setLoading(false);
      } else {
        setLoading(false);
      }
    } else {
      toast.error("fill all data");
      setLoading(false);
    }
  };

  return (
    <div className="sign-page">
      <div className="sign">
        {loading ? (
          <>
            <Skeleton className="mt-2 pb-0" height={50} />
            <Skeleton height={16} />
            <Skeleton height={40} />
            <Skeleton height={40} />
            <div className="d-flex justify-content-start">
              <Skeleton className="ml-0 mx-1" height={40} width={180} />
              <Skeleton height={40} width={180} />
            </div>
          </>
        ) : (
          <form action="" onSubmit={loginToAccount}>
            <div>
              <h2>I already have an account!</h2>
              <span>sign in with email and password</span>
            </div>

            <input
              type="email"
              name="email"
              id="email"
              className="sign-input"
              placeholder="Email"
              value={userinfo.email}
              onChange={handleInput}
              required
            />
            <input
              type="password"
              name="password"
              className="sign-input"
              id="password"
              placeholder="Password"
              value={userinfo.password}
              onChange={handleInput}
              required
            />
            <div className="sign-btn">
              <button>sign in</button>
              <button className="google-btn">sign with google</button>
            </div>
          </form>
        )}
      </div>
      <div className="sign">
        {loading ? (
          <>
            <Skeleton className="mt-4" height={60} />
            <Skeleton height={16} />
            <Skeleton height={40} />
            <Skeleton height={40} />
            <Skeleton height={40} />
            <Skeleton height={40} />
            <Skeleton height={40} width={150} />
          </>
        ) : (
          <form action="" onSubmit={submitData}>
            <div>
              <h2>I do not have an account!</h2>
              <span>Sign up with email and password</span>
            </div>
            <input
              type="text"
              name="firstName"
              id="name"
              className="sign-input"
              placeholder="Display Name"
              value={userinfo.firstName}
              onChange={handleInput}
            />
            <input
              type="email"
              name="signUpEmail"
              id="signUpEmail"
              className="sign-input"
              placeholder="Email"
              value={userinfo.signUpEmail}
              onChange={handleInput}
              required
            />
            <input
              type="password"
              name="signUpPassword"
              id="pass"
              className="sign-input"
              placeholder="Password"
              value={userinfo.signUpPassword}
              onChange={handleInput}
              minLength={8}
            />

            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="sign-input"
              placeholder="Confirm Password"
              value={userinfo.confirmPassword}
              onChange={handleInput}
              minLength={8}
            />
            <div className="sign-btn">
              <button>{loading ? "please wait.." : "sign up"}</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
