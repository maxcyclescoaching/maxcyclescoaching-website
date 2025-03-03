
import React, { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";

const BrowserWarning = () => {
  const [isIncompatible, setIsIncompatible] = useState(false);

  useEffect(() => {
    // Check for Internet Explorer
    const isIE = !!document.documentMode;
    
    // Check for old Edge (non-Chromium)
    const isOldEdge = !isIE && !!window.StyleMedia;
    
    // Check for very old browsers that don't support modern features
    const isVeryOld = typeof window.IntersectionObserver === "undefined";
    
    setIsIncompatible(isIE || isOldEdge || isVeryOld);
  }, []);

  if (!isIncompatible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white p-4">
      <div className="max-w-md rounded-lg border border-yellow-400 bg-yellow-50 p-6 text-center shadow-xl">
        <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-yellow-500" />
        <h2 className="mb-2 text-xl font-bold text-gray-800">Nicht unterstützter Browser erkannt</h2>
        <p className="mb-4 text-gray-600">
          Es sieht so aus, als ob Sie einen Browser verwenden, der nicht vollständig unterstützt wird. 
          Für das beste Erlebnis empfehlen wir Ihnen, einen der folgenden modernen Browser zu verwenden:
        </p>
        <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <a 
            href="https://www.google.com/chrome/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-primary"
          >
            <img src="/images/browsers/chrome.png" alt="Chrome" className="h-10 w-10" />
            <span className="mt-1 text-sm">Chrome</span>
          </a>
          <a 
            href="https://www.mozilla.org/firefox/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-primary"
          >
            <img src="/images/browsers/firefox.png" alt="Firefox" className="h-10 w-10" />
            <span className="mt-1 text-sm">Firefox</span>
          </a>
          <a 
            href="https://www.microsoft.com/edge" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-primary"
          >
            <img src="/images/browsers/edge.png" alt="Edge" className="h-10 w-10" />
            <span className="mt-1 text-sm">Edge</span>
          </a>
          <a 
            href="https://www.apple.com/safari/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-primary"
          >
            <img src="/images/browsers/safari.png" alt="Safari" className="h-10 w-10" />
            <span className="mt-1 text-sm">Safari</span>
          </a>
        </div>
        <button
          className="rounded bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/80"
          onClick={() => setIsIncompatible(false)}
        >
          Trotzdem fortfahren
        </button>
      </div>
    </div>
  );
};

export default BrowserWarning;
