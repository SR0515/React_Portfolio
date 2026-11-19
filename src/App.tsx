
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@/pages/Main';
import ProjectDetail from '@/pages/ProjectDetail';
import Wishlist from '@/pages/Wishlist';
import ScrollToTop from '@/components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
  );
}
