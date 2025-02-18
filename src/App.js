import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import { QuizzesPage, QuizPage } from './pages/QuizPage';
import LifestylePage from './pages/LifestylePage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-[#ede7c7] text-[#5b0302]">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/article/:slug" element={<ArticlePage />} />
              <Route path="/quizzes" element={<QuizzesPage />} />
              <Route path="/quiz/:quizId" element={<QuizPage />} />
              <Route path="/lifestyle" element={<LifestylePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
