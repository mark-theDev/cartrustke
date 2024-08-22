'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ClientComponent({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    console.log("Router object:", router);
  if (!router) {
    console.error("Router is not available.");
    return;
  }
  
    const handleStart = (url: string) => {
      if (url !== router.asPath) {
        setLoading(true);
      }
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/75 z-50">
          <div className="loading-spinner">Loading...</div>
        </div>
      )}
      {children}
    </>
  );
}
