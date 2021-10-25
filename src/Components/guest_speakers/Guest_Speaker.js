import React from "react";
import "./Guest_Speaker.css";

function Guest_Speaker() {
  return (
    <div>
      <section class="special-guest spad">
        <div class="container p-3">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <h2>Special Guests</h2>
              </div>
            </div>
          </div>
          <div
            class="row newone p-2 pt-2 pb-2 m-2"
            style={{ border: "1px solid white", borderRadius: "10px" }}
          >
            <div class="col-xl-4 col-lg-5 p-4">
              <div class="guest-img">
                <img src={require("../../images/rahul.jpg").default} alt="" />
              </div>
            </div>
            <div class="col-xl-8 col-lg-7 p-4">
              <div class="guest-info">
                <h2>
                  Rahul Manneri <span>Former CISO</span>
                </h2>
                <p class="long-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  erat dui, tincidunt vitae tortor at, ultrices faucibus mauris.
                  Vestibulum quis auctor risus. Donec fringilla faucibus eros,
                  ut suscipit risus accumsan eu. Sed aliquam, mi in fermentum
                  aliquam, sem lectus fringilla felis, et faucibus felis turpis
                  ut turpis.{" "}
                </p>
                <p>
                  Fusce quis arcu aliquet, egestas nunc et, maximus tortor. In
                  fermentum pellentesque justo, at sollicitudin felis commodo
                  sed. Integer tempus lorem sem, vitae euismod felis sodales
                  non.
                </p>
                <div class="guest-links">
                  <a href="https://twitter.com/inctf">
                    <i class="fab fa-dribbble"></i>
                  </a>
                  <a href="https://twitter.com/inctf" class="behance">
                    <i class="fab fa-behance"></i>
                  </a>
                  <a href="https://twitter.com/inctf" class="facebook">
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a href="https://twitter.com/inctf" class="linkedin">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com/inctf" class="twitter">
                    <i class="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="row newone p-2 pt-2 pb-2 m-2"
            style={{ border: "1px solid white", borderRadius: "10px" }}
          >
            <div class="col-xl-4 col-lg-5 p-4">
              <div class="guest-img ">
                <img
                  src={require("../../images/rahul.jpg").default}
                  alt=""
                  data-pagespeed-url-hash="2156928296"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
              </div>
            </div>
            <div class="col-xl-8 col-lg-7 p-4">
              <div class="guest-info">
                <h2 className="">
                  Rahul Manneri <span>Former CISO</span>
                </h2>
                <p class="long-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  erat dui, tincidunt vitae tortor at, ultrices faucibus mauris.
                  Vestibulum quis auctor risus. Donec fringilla faucibus eros,
                  ut suscipit risus accumsan eu. Sed aliquam, mi in fermentum
                  aliquam, sem lectus fringilla felis, et faucibus felis turpis
                  ut turpis.{" "}
                </p>
                <p>
                  Fusce quis arcu aliquet, egestas nunc et, maximus tortor. In
                  fermentum pellentesque justo, at sollicitudin felis commodo
                  sed. Integer tempus lorem sem, vitae euismod felis sodales
                  non.
                </p>
                <div class="guest-links">
                  <a href="https://twitter.com/inctf">
                    <i class="fab fa-dribbble"></i>
                  </a>
                  <a href="https://twitter.com/inctf" class="behance">
                    <i class="fab fa-behance"></i>
                  </a>
                  <a href="https://twitter.com/inctf" class="facebook">
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a href="https://twitter.com/inctf" class="linkedin">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com/inctf" class="twitter">
                    <i class="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Guest_Speaker;
