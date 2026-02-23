
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const Oetztaler = lazy(() => import("./pages/Oetztaler-Blog"));
const Übersetzungsrechner = lazy(() => import("./pages/Übersetzungsrechner"));
const Verpflegungsrechner = lazy(() => import("./pages/Verpflegungsrechner"));
const Blog = lazy(() => import("./pages/Blog"));

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Lädt...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/blog/oetztaler" element={<Oetztaler />} />
            <Route path="/tools/verpflegungsrechner" element={<Verpflegungsrechner />} />
            <Route path="/tools/uebersetzungsrechner" element={<Übersetzungsrechner />} />
            <Route path="/tools/übersetzungsrechner" element={<Navigate to="/tools/uebersetzungsrechner" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
