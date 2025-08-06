import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { LoadingOverlay } from "@/components/ui/animations/LoadingOverlay";
import { useAppLoading } from "@/hooks/useAppLoading";
import CustomCursor from "@/components/festival/CustomCursor";
import WebGLBackground from "@/components/festival/WebGLBackground";
import FloatingStageElements from "@/components/festival/FloatingStageElements";
import ParticleField from "@/components/festival/ParticleField";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isLoading } = useAppLoading({
    minimumLoadTime: 3500,
    simulateNetworkDelay: true
  });

  return (
    <>
      {/* Festival Experience Background Effects */}
      <WebGLBackground />
      <ParticleField />
      <CustomCursor />
      <FloatingStageElements />
      
      <LoadingOverlay
        isLoading={isLoading}
        onLoadingComplete={() => {}}
        showMatrixAnimation={true}
      />
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth" element={<Auth />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
