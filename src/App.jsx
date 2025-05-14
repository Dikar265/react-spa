import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop ";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Services1 from "./Pages/Services/Service1";
import Services2 from "./Pages/Services/Service2";
import Services3 from "./Pages/Services/Service3";
import Services4 from "./Pages/Services/Service4";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import BlogDetail from "./Pages/BlogDetail";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/" element={<Services />} />
        <Route path="/service/1" element={<Services1 />} />
        <Route path="/service/2" element={<Services2 />} />
        <Route path="/service/3" element={<Services3 />} />
        <Route path="/service/4" element={<Services4 />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
