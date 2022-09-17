import { useState } from "react";
import "../style/components/payment.css";

export default function Payment({ country }) {
  const [countryValue, setCountryValue] = useState("India");

  console.log(countryValue);
  return (
    <div className="container d-lg-flex">
      <div className="box-2">
        <div className="box-inner-2">
          <div>
            <p className="fw-bold">Payment Details</p>
          </div>
          <form action="">
            <div className="mb-3">
              <p className="dis fw-bold mb-2">Email address</p>
              <input
                className="form-control"
                type="email"
                value="luke@skywalker.com"
              />
            </div>
            <div>
              <div className="address">
                <p className="dis fw-bold mb-3">Billing address</p>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setCountryValue(e.target.value)}
                >
                  <option selected hidden>
                    {countryValue}
                  </option>
                  {country.map((item, i) => (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <div className="d-flex">
                  <input
                    className="form-control zip"
                    type="text"
                    placeholder="ZIP"
                  />
                  <input
                    className="form-control state"
                    type="text"
                    placeholder="City"
                  />
                </div>

                <div className="d-flex flex-column dis">
                  <div className="btn btn-primary mt-2">
                    Pay<span className="fas fa-dollar-sign px-1"></span>35.80
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
