
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Main from '@/pages/Main';
import ProjectDetail from '@/pages/ProjectDetail';
import Wishlist from '@/pages/Wishlist';
import ScrollToTop from '@/components/ScrollToTop';
import Chatbot from '@/components/Chatbot';
import MyPage from '@/pages/Mypage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Toaster
        position="top-center"
        containerStyle={{
          top: '70px',
        }}
        toastOptions={{
          duration: 1500,
          style: {
            background: '#333D4B',
            color: '#fff',
            borderRadius: '12px',
            padding: '12px 18px',
            fontSize: '14px',
            fontWeight: 500,
            animation: 'toastFade 0.4s ease-in-out',
          },
          success: {
            iconTheme: {
              primary: '#5B91FF',
              secondary: '#fff',
            },
          },
        }}
      />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>

      {/* 모든 페이지에서 공통으로 표시 */}
      <Chatbot />
    </BrowserRouter>
  );
}
