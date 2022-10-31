import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

const login = () => {
  return (
    // <Layout>
    <div className="loginBg heightPage py-5">
      <div className="container-md mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 loginWidth">
            <div className="loginContainer mb-5 row justify-content-center bg-opacity-25 bg-white shadow-lg">
              <div className="col-md-10">
                <div className="row justify-content-center">
                  <div className="col-md-10 ">
                    <h3 className="mt-5 text-center text-white textLogin">
                      LOGIN
                    </h3>
                    <label for="username" className="form-label mt-3"></label>
                    <div className="input-group mb-2">
                      <span
                        className="input-group-text bg-black"
                        id="basic-addon1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="25"
                          fill="currentColor"
                          className="bi bi-people-fill"
                          viewBox="0 0 16 16"
                          color="white"
                        >
                          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          <path
                            fill-rule="evenodd"
                            d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                          />
                          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <label for="password" className="form-label mt-4"></label>

                    <div className="input-group mb-2 align-items-center">
                      {/*test pake imported icon*/}
                      <Icon
                        icon="cib:next-js"
                        width={40}
                        height={40}
                        color="red"
                        className="justify-content-center border border-danger"
                      />
                      <span
                        className="input-group-text bg-black"
                        id="basic-addon1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="25"
                          fill="currentColor"
                          className="bi bi-key-fill"
                          viewBox="0 0 16 16"
                          color="white"
                        >
                          <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                      </span>
                      <input
                        type="Password"
                        className="form-control"
                        placeholder="Password"
                        aria-label="Password"
                        aria-describedby="basic-addon1"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center p-3 mt-3">
                  <div className="col-md-10">
                    <div className="row">
                      <Link href="/" passHref>
                        <button
                          style={{
                            color: "white",
                            backgroundColor: "#064663",
                          }}
                          type="button"
                          className="btn rounded-pill mb-4"
                        >
                          Login
                        </button>
                      </Link>

                      <Link href="/" passHref>
                        <button
                          style={{
                            color: "white",
                            backgroundColor: "black",
                          }}
                          type="button"
                          className="btn inidia rounded-pill mb-5"
                        >
                          Back to Home
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Layout>
  );
};

export default login;
