import $ from "jquery";
import { useEffect } from "react";
import Script from "next/script";
export default function showplan() {
  return (
    <>
      <div className="section master main">
        <div className="col span_12_of_12">
          <iframe id="sp" src="/sp.html"></iframe>
        </div>
      </div>
    </>
  );
}
