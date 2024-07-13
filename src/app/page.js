"use client"; // Add this line at the top

import React from "react";
import ParticlesComponent from "../components/particles";
import CodeForces from "../components/Codeforces";
import Leetcode from "../components/Leetcode";
import Codechef from "../components/Codechef";

const Home = () => {
  return (
    <div className="App">
      <div className="content">
        <section id="codeforces">
          <CodeForces />
        </section>
        <section id="leetcode">
          <Leetcode />
        </section>
        <section id="codechef">
          <Codechef />
        </section>
      </div>
      <ParticlesComponent id="particles" />

      {/* <div className="arrows">
        <svg class="arrows">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div> */}
    </div>
  );
};

export default Home;
