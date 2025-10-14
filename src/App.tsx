import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load components for better performance
const Index = lazy(() => import("./pages/Index"));
const SkillsPage = lazy(() => import("src/pages/SkillsPage"));
const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const RecognitionsPage = lazy(() => import("./pages/RecognitionsPage"));
const CertificationsPage = lazy(() => import("./pages/CertificationsPage"));
const CommunityPage = lazy(() => import("./pages/CommunityPage"));
const Community = lazy(() => import("./pages/Community"));
const SpeakerSessions = lazy(() => import("./pages/SpeakerSessions"));
const EventsConferences = lazy(() => import("./pages/EventsConferences"));
const AIFilms = lazy(() => import("./pages/AIFilms"));
const ARProjects = lazy(() => import("./pages/ARProjects"));
const Gallery = lazy(() => import("./pages/Gallery"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Optimize QueryClient configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={
          <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-400"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/recognitions" element={<RecognitionsPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/community" element={<Community />} />
            <Route path="/speaker-sessions" element={<SpeakerSessions />} />
            <Route path="/events-conferences" element={<EventsConferences />} />
            <Route path="/ai-films" element={<AIFilms />} />
            <Route path="/ar-projects" element={<ARProjects />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* Legacy community page route - keeping for backward compatibility */}
            <Route path="/community-page" element={<CommunityPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
