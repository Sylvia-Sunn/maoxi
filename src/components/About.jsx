import portrait from '../assets/mao-xi-portrait.png';

function About({ t, headerRoles }) {
  return (
    <section id="about" className="section section-about">
      <div className="about-portrait">
        <img src={portrait} alt="毛溪 Mao Xi" />
      </div>
      <div className="about-body">
        <h1 className="about-name">
          毛溪 <span>Mao&nbsp;Xi</span>
        </h1>
        <p className="about-role-tag">{t.roleTag}</p>
        <div className="about-roles">
          {headerRoles.map((r) => (
            <div key={r} className="about-role">
              {r}
            </div>
          ))}
        </div>
        <div className="about-links">
          <a href="mailto:1132719443@qq.com" className="pill pill-accent">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2b5f8c" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 6-10 7L2 6"></path>
            </svg>
            1132719443@qq.com
          </a>
          <a href="#cv" className="pill">
            {t.cvLink}
          </a>
        </div>
        <p className="about-bio">{t.bioHeader}</p>
      </div>
    </section>
  );
}

export default About;
