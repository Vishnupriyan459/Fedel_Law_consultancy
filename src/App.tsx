import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";


const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const MentorshipPage = lazy(() => import("./pages/MentorshipPage"));
const LoaderPage = lazy(() => import("./pages/LoaderPage"));

const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToHash />
        <Navbar />
         <Suspense fallback={<LoaderPage/>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/legal-mentorship-training" element={<MentorshipPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
