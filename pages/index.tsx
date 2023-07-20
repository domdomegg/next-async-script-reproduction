import Script from "next/script";
import { useEffect } from "react";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      globalThis.loadOrder = [];
    }
  }, [])

  return <div>
    <Script src="/script1.js" async={false}></Script>
    {/* Timestamp not necessary, but helps reproduce more consistently when Next tries to cache things */}
    <Script src={`/script2.js?at=${Date.now()}`} async={false}></Script>
    <Script src="/script3.js" async={false}></Script>
    <Script src="/script4.js" async={false}></Script>
    <Script src="/script5.js" async={false}></Script>
    <Script src="/script6.js" async={false}></Script>
    <Script src="/script7.js" async={false}></Script>
    <Script src="/script8.js" async={false}></Script>
    <Script src="/script9.js" async={false}></Script>
  </div>
}
