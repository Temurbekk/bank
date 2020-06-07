import React from "react";

const Login = ({ setSignedIn }) => {
  const onClick = () => {
    setSignedIn(true);
  };
  return (
    <>
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" className="box">
                  <div className="field">
                    <label for="" className="label">
                      Email
                    </label>
                    <div className="control">
                      <input
                        type="email"
                        placeholder="e.g. bobsmith@gmail.com"
                        className="input"
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label for="" className="label">
                      Password
                    </label>
                    <div className="control ">
                      <input
                        type="password"
                        placeholder="*******"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-success" onClick={onClick}>
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
