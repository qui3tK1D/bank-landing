import React from "react";
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className="paddingX flexCenter">
      <div className="xl:max-w-xxl w-full">
        <Navbar />
      </div>
    </div>

    <div className="bg-primary flexCenter">
      <div className="xl:max-w-xxl w-full">
        <Hero />
      </div>
    </div>

    <div className="bg-primary paddingX flexCenter">
      <div className="xl:max-w-xxl w-full">
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
