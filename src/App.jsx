import { useState } from 'react';
import { getContent } from './data/content';
import Header from './components/Header';
import About from './components/About';
import News from './components/News';
import Research from './components/Research';
import Publications from './components/Publications';
import Ventures from './components/Ventures';
import CV from './components/CV';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [lang, setLang] = useState('zh');
  const content = getContent(lang);

  return (
    <div className="page">
      <Header nav={content.nav} lang={lang} onSetLang={setLang} />
      <main className="main">
        <About t={content.t} headerRoles={content.headerRoles} />
        <News t={content.t} news={content.news} />
        <Research t={content.t} areas={content.areas} projects={content.projects} />
        <Publications
          t={content.t}
          papers={content.papers}
          books={content.books}
          patents={content.patents}
        />
        <Ventures t={content.t} ventures={content.ventures} />
        <CV t={content.t} timeline={content.timeline} appointments={content.appointments} />
        <Contact t={content.t} />
      </main>
      <Footer t={content.t} />
    </div>
  );
}

export default App;
