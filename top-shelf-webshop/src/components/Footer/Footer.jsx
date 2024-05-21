import React from "react";
import { LogoSection } from "./LogoSection";
import { PageLinks } from "./PageLinks";
import { Newsletter } from "./Newsletter";
import { LegislativeLinks } from "./LegislativeLinks";

function Footer() {
  return (
    <div className="grid grid-cols-1 bg-red-300 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="grid grid-cols-1 ">
          <div className="ring-1 ring-inset ring-white">
            <LogoSection />
          </div>
          <div className="ring-1 ring-inset ring-white">
            <PageLinks />
          </div>
        </div>
        <div className="ring-1 ring-inset ring-white">
          <Newsletter />
        </div>
      </div>

      <div className="ring-1 ring-inset ring-white">
        <LegislativeLinks />
      </div>
    </div>
  );
}

export { Footer };
