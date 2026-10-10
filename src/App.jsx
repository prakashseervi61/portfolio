import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';

const BASENAME = '/portfolio';

/**
 * GitHub Pages serves 404.html for unknown paths, which redirects to the app
 * root and stashes the original location. Restore it here so a shared
 * /projects/<slug> link still lands on the right page after that bounce.
 */
function useRestoreRedirectedPath() {
  useEffect(() => {
    let saved = null;
    try {
      saved = sessionStorage.getItem('spa-redirect');
      if (saved) sessionStorage.removeItem('spa-redirect');
    } catch {
      saved = null;
    }

    if (!saved) return;

    const { pathname, search, hash } = window.location;
    const atRoot = pathname === BASENAME || pathname === `${BASENAME}/`;
    if (atRoot) {
      window.history.replaceState(null, '', `${saved}${search}${hash}`);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  }, []);
}

function App() {
  useRestoreRedirectedPath();

  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/projects/:slug" element={<Layout><ProjectPage /></Layout>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;