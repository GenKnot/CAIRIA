import React from "react";
import MobileHeader from "./DemoHeaderMobile";

export default function PageLayout({ children }) {
  return (
    <div>
      <MobileHeader /> {children}
    </div>
  );
}
