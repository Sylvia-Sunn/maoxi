function Header({ nav, lang, onSetLang }) {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#about" className="brand">
          <span className="brand-zh">毛溪</span>
          <span className="brand-en">Mao Xi</span>
        </a>
        <nav className="nav">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="lang-toggle">
          <span
            className={`lang-tab ${lang === 'zh' ? 'is-active' : ''}`}
            onClick={() => onSetLang('zh')}
          >
            中
          </span>
          <span
            className={`lang-tab ${lang === 'en' ? 'is-active' : ''}`}
            onClick={() => onSetLang('en')}
          >
            EN
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
