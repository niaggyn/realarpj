import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import { useState, useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";


// Local hash-location factory to avoid importing from "wouter/use-location"
function createHashLocation() {
  return function useHashLocation() {
    const [loc, setLoc] = useState(() => {
      if (typeof window === "undefined") return "/";
      return window.location.hash ? window.location.hash.slice(1) : "/";
    });

    useEffect(() => {
      function onHash() {
        setLoc(window.location.hash ? window.location.hash.slice(1) : "/");
      }

      window.addEventListener("hashchange", onHash);
      return () => window.removeEventListener("hashchange", onHash);
    }, []);

    const setLocation = (to: string) => {
      if (!to) return;
      if (!to.startsWith("#") && !to.startsWith("/")) to = "/" + to;
      const newHash = to.startsWith("#") ? to : `#${to}`;
      if (window.location.hash !== newHash) {
        window.location.hash = newHash;
        setLoc(newHash.slice(1));
      }
    };

    return [loc, setLocation] as [string, (to: string) => void];
  };
}

function AppRouter() {
  const hook = createHashLocation();

  return (
    <WouterRouter hook={hook}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
