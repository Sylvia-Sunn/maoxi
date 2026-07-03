const L = (lang) => (zh, en) => (lang === 'zh' ? zh : en);

export function getContent(lang) {
  const zh = lang === 'zh';
  const t = L(lang);

  const nav = [
    ['about', '简介', 'About'],
    ['news', '近况', 'News'],
    ['research', '研究', 'Research'],
    ['publications', '论著', 'Publications'],
    ['ventures', '创业', 'Ventures'],
    ['cv', '履历', 'CV'],
    ['contact', '联系', 'Contact'],
  ].map(([id, z, e]) => ({ id, label: zh ? z : e }));

  const headerRoles = zh
    ? [
        '华东师范大学设计学院 · 副教授',
        '心理与认知科学学院 · MPA 导师',
        '中国近现代设计文献研究中心 · 研究成员',
      ]
    : [
        'Associate Professor · School of Design, ECNU',
        'MPA Supervisor · School of Psychology & Cognitive Science',
        'Research Member · Center for Modern Chinese Design Literature',
      ];

  const news = [
    { date: '2026', text: t('《〈实用美术〉选辑及研究》书稿进入二审。', 'Book manuscript "Selected Works & Study of Practical Arts" enters second review.') },
    { date: '2026', text: t('论文《民国广告符号的视觉现代性》被期刊 Design History 接收。', 'Paper on the visual modernity of Republican-era advertising symbols accepted at Design History.') },
    { date: '2025', text: t('论文 PPJudge 被 ACM MM 2025 接收。', 'Paper "PPJudge" accepted at ACM MM 2025.') },
    { date: '2023', text: t('联合创办上海炎阳萌獅教育科技，获上海国际创新创业大赛二等奖。', 'Co-founded Yanyang Mengshi Education Technology; 2nd Prize at the Shanghai Int’l Innovation & Entrepreneurship Competition.') },
    { date: '2020', text: t('主持国家社科基金艺术类项目「基于知识图谱技术的中国近现代工业设计资源库建设」。', 'Began leading the National Social Science Fund (Arts) project on a knowledge-graph-based resource library of modern Chinese industrial design.') },
    { date: '2015', text: t('《中国民族工业设计100年》获出版系统金牛奖银奖，并入选法兰克福书展。', '"100 Years of Chinese National Industrial Design" won Silver at the Jinniu Award and was selected for the Frankfurt Book Fair.') },
  ];

  const areas = [
    { no: '01', title: t('中国近现代设计史 · 工业设计史', 'Modern Chinese & Industrial Design History'), desc: t('长期深耕的核心领域；2020 年后拓展至改革开放后的设计研究。', 'A long-standing core field; extended since 2020 to design studies of the post-Reform era.') },
    { no: '02', title: t('人工智能与新产品开发', 'AI & New Product Development'), desc: t('将生成式技术与知识图谱引入设计研究与创新方法。', 'Bringing generative technology and knowledge graphs into design research and innovation.') },
    { no: '03', title: t('智能教育', 'Intelligent Education'), desc: t('探索人工智能交互教室与教学系统的开发与应用。', 'Developing AI-driven interactive classrooms and teaching systems.') },
  ];

  const projects = [
    { meta: t('国家社科基金艺术类 · 2020BH157 · 结项阶段', 'Nat’l Social Science Fund (Arts) · 2020BH157 · Nearing completion'), title: t('基于知识图谱技术的中国近现代工业设计资源库建设', 'A Knowledge-Graph-Based Resource Library of Modern Chinese Industrial Design'), desc: t('运用知识图谱技术系统整理与关联中国近现代工业设计资源，构建可检索、可视化的研究基础设施。', 'Uses knowledge-graph technology to organize and interlink resources of modern Chinese industrial design into a searchable, visual research infrastructure.') },
    { meta: t('国家可信嵌入式软件工程技术研究中心 · 开放研究项目', 'Nat’l Trusted Embedded Software Eng. Center · Open Research Project'), title: t('人工智能交互教室及系统开发', 'AI Interactive Classroom & System Development'), desc: t('面向智能教育场景，研发人工智能交互教室与配套教学系统。', 'Develops AI interactive classrooms and supporting teaching systems for intelligent-education scenarios.') },
    { meta: t('书稿 · 2026 年二审中', 'Book manuscript · in second review, 2026'), title: t('《〈实用美术〉选辑及研究》', 'Selected Works & Study of "Practical Arts"'), desc: t('以改革开放后第一本设计期刊《实用美术》（1979–1995）为研究对象，融合文献研究与数字分析技术。', 'A study of Practical Arts (1979–1995), the first design journal of the post-Reform era, combining archival research with digital analysis.') },
  ];

  const papers = [
    { tag: 'ACM MM', year: '2025', teaserBg: 'linear-gradient(135deg,#2b5f8c,#5f93bd)', title: 'PPJudge: Towards Human-Aligned Assessment of Artistic Painting Process', pre: 'Jiang, S., Li, X., ', self: 'Mao, X.', post: ', Wang, C., & Li, C. (2025).', venue: 'In Proceedings of ACM MM 2025.', doi: '10.1145/3746027.3754960', doiUrl: 'https://doi.org/10.1145/3746027.3754960' },
    { tag: 'Design History', year: '2026', teaserBg: 'linear-gradient(135deg,#7c4a86,#b07fb8)', title: 'Visual Modernity in Advertising Symbols in Republican China: A Visual Analytics Study Based on the China Machine Federation Journal (1930–1937)', pre: 'Lin, Y., You, Y., Li, K., & ', self: 'Mao, X.', post: ' (2026).', venue: 'Design History.', doi: '10.59528/ms.dh2026.0422a1', doiUrl: 'https://doi.org/10.59528/ms.dh2026.0422a1' },
  ];

  const books = [
    { title: t('《中国民族工业设计 100 年》', '100 Years of Chinese National Industrial Design'), note: t('入选法兰克福书展；荣获 2015 年出版系统金牛奖银奖', 'Selected for the Frankfurt Book Fair; Silver, 2015 Jinniu Publishing Award') },
    { title: t('《品牌百年》', 'A Century of Brands'), note: '' },
    { title: t('《中国工业设计百年》· 专栏结集', 'A Century of Chinese Industrial Design — collected columns'), note: '' },
    { title: t('教材与专著，累计十二本', 'Textbooks & monographs — twelve in total'), note: '' },
  ];

  const patents = [
    { title: t('基于生成网络的创意生成物求解器及其应用', 'Creativity-Generation Solver Based on Generative Networks'), role: t('第一发明人', 'Lead inventor'), code: 'CN202110873799.5' },
    { title: t('一种基于生成对抗网络的三维仿生设计方法', 'A GAN-Based 3D Bionic Design Method'), role: t('第一发明人', 'Lead inventor'), code: 'CN202230823386.1' },
  ];

  const ventures = [
    { year: '2016–', title: t('乐波空间 · 联合创始人', 'Lebo Space — Co-founder'), note: t('国家级众创空间', 'National-level makerspace') },
    { year: '2018–19', title: t('华东师范大学设计学院 × 乐波空间 · 校企合作', 'ECNU School of Design × Lebo Space'), note: t('上海市教委项目（负责人）', 'Shanghai Municipal Education Commission project — PI') },
    { year: '2018–', title: t('上海市文创示范空间 · 联合创始人', 'Shanghai Cultural-Creative Demonstration Space — Co-founder'), note: '' },
    { year: '2021', title: t('设鸣（上海）文化科技发展有限公司 · 联合创始人', 'Sheming (Shanghai) Culture & Technology — Co-founder'), note: t('获上海市雏鹰大学生创业基金', 'Shanghai Eaglet Student Entrepreneurship Fund') },
    { year: '2023', title: t('上海炎阳萌獅教育科技有限公司 · 联合创始人', 'Shanghai Yanyang Mengshi Education Technology — Co-founder'), note: t('上海市雏鹰基金 · 觉群文创基金 · 上海国际创新创业大赛二等奖', 'Eaglet Fund · Juequn Cultural-Creative Fund · 2nd Prize, Shanghai Int’l Innovation & Entrepreneurship Competition') },
  ];

  const timeline = [
    { year: '1993–2000', event: t('江南大学设计学院，获学士、硕士学位', 'Jiangnan University, School of Design — BA & MA') },
    { year: '2000–02', event: t('上海工艺美术职业学院 · 教师', 'Lecturer, Shanghai Arts & Crafts Vocational College') },
    { year: '2002–', event: t('华东师范大学设计学院 · 创始团队成员', 'School of Design, ECNU — founding faculty') },
    { year: '2013', event: t('起于《domus》国际中文版开设专栏', 'Begins columns in domus (Int’l Chinese Edition)') },
    { year: '2015', event: t('《中国民族工业设计 100 年》获金牛奖银奖，入选法兰克福书展', '"100 Years of Chinese National Industrial Design" — Silver Jinniu Award; Frankfurt Book Fair') },
    { year: '2016', event: t('联合创办国家级众创空间「乐波空间」', 'Co-founds Lebo Space, a national-level makerspace') },
    { year: '2020', event: t('主持国家社科基金艺术类项目', 'Leads National Social Science Fund (Arts) project') },
    { year: '2023', event: t('联合创办炎阳萌獅教育科技', 'Co-founds Yanyang Mengshi Education Technology') },
  ];

  const appointments = [
    { org: t('华东师范大学 心理与认知科学学院', 'School of Psychology & Cognitive Science, ECNU'), role: t('MPA 导师', 'MPA Supervisor') },
    { org: t('中国图象图形学会 · 可视化专业委员会', 'China Society of Image and Graphics · Visualization Committee'), role: t('委员', 'Member') },
    { org: t('上海市人工智能协会 · 媒体与传播设计专委会', 'Shanghai AI Association · Media & Communication Design Committee'), role: t('委员', 'Member') },
    { org: t('上海市心理学会 · 心理 + 人工智能专委会', 'Shanghai Psychological Society · Psychology + AI Committee'), role: t('委员', 'Member') },
    { org: t('上海市执业经纪人协会 · 数字资产专业委员会', 'Shanghai Licensed Brokers Assoc. · Digital Assets Committee'), role: t('执委', 'Executive Member') },
    { org: t('中国近现代设计文献研究中心', 'Center for Modern Chinese Design Literature'), role: t('研究成员', 'Research Member') },
  ];

  const text = {
    roleTag: t('设计史学者 · 人工智能与新产品开发研究者', 'Design Historian · Researcher in AI & New Product Development'),
    cvLink: t('查看履历', 'View CV'),
    bioHeader: t('长期从事中国近现代设计史与工业设计史研究，近年拓展至人工智能与智能教育领域，致力于以数字技术重新整理、分析与讲述中国近现代设计的历史。', 'Her work spans the history of modern Chinese and industrial design and, more recently, artificial intelligence and intelligent education — using digital technology to reorganize, analyze, and retell the history of modern Chinese design.'),
    newsTitle: t('近况', 'News'),
    researchTitle: t('研究方向与项目', 'Research'),
    projLabel: t('主要科研项目', 'Selected Projects'),
    pubTitle: t('论著', 'Publications'),
    papersLabel: t('精选论文', 'Selected Papers'),
    coreText: t('并在《中国艺术》《装饰》等核心刊物发表多篇论文。', 'Also numerous papers in core journals including Chinese Art and Zhuangshi (Art & Design).'),
    booksLabel: t('专著与教材', 'Books & Textbooks'),
    columnsLabel: t('专栏', 'Columns'),
    columnsText: t('自 2013 年起于《domus》国际中文版开设专栏，累计 26 期，包括《中国工业设计百年》《中国城市百年》等系列。', 'A running column in domus (International Chinese Edition) since 2013 — 26 installments to date, including A Century of Chinese Industrial Design and A Century of Chinese Cities.'),
    patentsLabel: t('发明专利', 'Patents'),
    venTitle: t('创业与孵化', 'Ventures & Incubation'),
    cvTitle: t('教育与经历', 'Education & Experience'),
    apptTitle: t('学术与社会任职', 'Appointments'),
    contactTitle: t('联系', 'Contact'),
    emailLabel: t('电子邮箱', 'Email'),
    affLabel: t('工作单位', 'Affiliation'),
    affValue: t('华东师范大学设计学院', 'School of Design, ECNU'),
  };

  return {
    nav,
    headerRoles,
    news,
    areas,
    projects,
    papers,
    books,
    patents,
    ventures,
    timeline,
    appointments,
    t: text,
  };
}
