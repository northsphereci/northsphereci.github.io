/* ============================================================
   NORTH SPHERE CONSULTING — SCRIPT.JS
   ============================================================ */

/* ── TRANSLATIONS ────────────────────────────────────────── */
const TRANSLATIONS = {
  en: {
    /* NAV */
    "nav-home":       "Home",
    "nav-about":      "About",
    "nav-expertise":  "Expertise",
    "nav-services":   "Services",
    "nav-approach":   "Approach",
    "nav-contact":    "Contact",
    "nav-cta":        "Get in Touch",

    /* HERO */
    "hero-label":     "Advisory · Strategy · Impact",
    "hero-headline":  "Interdisciplinary Advisory for <em>Science, Innovation,</em> and Social Impact",
    "hero-sub":       "North Sphere Consulting delivers rigorous, evidence-based advisory services that bridge complex systems, empower institutions, and advance equitable outcomes across sectors and regions.",
    "hero-btn1":      "Explore Our Services",
    "hero-btn2":      "Our Approach",
    "stat-1-num":     "20<em>+</em>",
    "stat-1-lbl":     "Years of Experience",
    "stat-2-num":     "60<em>+</em>",
    "stat-2-lbl":     "Countries Engaged",
    "stat-3-num":     "350<em>+</em>",
    "stat-3-lbl":     "Mandates Completed",
    "stat-4-num":     "6",
    "stat-4-lbl":     "Domains of Expertise",

    /* ABOUT INTRO */
    "about-label":    "About Us",
    "about-heading":  "A trusted partner for <em>complex</em> challenges",
    "about-p1":       "North Sphere Consulting is an independent advisory firm serving governments, international organisations, development finance institutions, and civil society. We combine deep domain expertise with interdisciplinary thinking to address the world's most pressing challenges.",
    "about-p2":       "Founded on a commitment to evidence, equity, and long-term impact, our practice spans six interconnected domains, enabling us to see problems in their full systemic context.",
    "about-pill1":    "Engineering & Technology",
    "about-pill2":    "Health Systems",
    "about-pill3":    "Environmental Sustainability",
    "about-pill4":    "Social Development",
    "about-pill5":    "Education Systems",
    "about-pill6":    "Institutional Development",
    "about-quote":    '"The most complex challenges require the most integrated thinking."',
    "about-quote-attr": "North Sphere Consulting",
    "about-badge-num": "20+",
    "about-badge-lbl": "Years of Impact",
    "about-btn":      "Learn More About Us",

    /* EXPERTISE CARDS */
    "exp-label":      "Our Expertise",
    "exp-heading":    "Six <em>interconnected</em> domains",
    "exp-sub":        "We have built deep, practitioner-led expertise across six domains that together address the full complexity of sustainable development and institutional resilience.",
    "exp-1-title":    "Engineering & Technology",
    "exp-1-desc":     "Infrastructure systems, digital transformation, emerging technology policy, and engineering governance frameworks for the public and private sectors.",
    "exp-2-title":    "Health Systems",
    "exp-2-desc":     "Health system strengthening, policy analysis, service delivery reform, pandemic preparedness, and universal health coverage strategies.",
    "exp-3-title":    "Environmental Sustainability",
    "exp-3-desc":     "Climate adaptation and mitigation, environmental impact assessment, natural resource governance, and green transition planning.",
    "exp-4-title":    "Social Development",
    "exp-4-desc":     "Gender equity, social protection, community engagement, poverty reduction strategies, and inclusive policy design for vulnerable populations.",
    "exp-5-title":    "Education Systems",
    "exp-5-desc":     "Education system reform, curriculum development, teacher capacity building, early childhood development, and tertiary education strategy.",
    "exp-6-title":    "Institutional Development",
    "exp-6-desc":     "Organisational capacity building, governance reform, public administration, regulatory frameworks, and leadership development for public institutions.",
    "exp-btn":        "View All Expertise",

    /* SERVICES */
    "svc-label":      "Our Services",
    "svc-heading":    "How we deliver <em>impact</em>",
    "svc-intro-p":    "Our service lines are designed to address the full spectrum of advisory needs — from initial diagnosis to sustained implementation support.",
    "svc-1-name":     "Strategic Advisory",
    "svc-1-desc":     "High-level strategic counsel to decision-makers navigating complex policy environments, institutional reform, or large-scale transformation agendas.",
    "svc-2-name":     "Policy & Research Guidance",
    "svc-2-desc":     "Rigorous research design, evidence synthesis, and policy development support to inform sound, context-sensitive decision-making.",
    "svc-3-name":     "Program Design",
    "svc-3-desc":     "End-to-end design of programs, projects, and initiatives — from theory of change and logframes to implementation planning and risk management.",
    "svc-4-name":     "Institutional Capacity Building",
    "svc-4-desc":     "Tailored capacity development interventions that strengthen organisations, teams, and systems to achieve sustainable results independently.",
    "svc-5-name":     "Impact Evaluation",
    "svc-5-desc":     "Mixed-methods evaluation frameworks, real-time monitoring, learning systems, and rigorous assessment of program effectiveness and value for money.",

    /* APPROACH */
    "appr-label":     "Our Approach",
    "appr-heading":   "A <em>rigorous</em> four-phase methodology",
    "appr-sub":       "Every engagement follows a structured, adaptive process built on evidence, collaboration, and continuous learning.",
    "step-1-title":   "Diagnosis",
    "step-1-desc":    "Deep context analysis, stakeholder mapping, systems thinking, and root cause assessment to understand the full landscape of the challenge.",
    "step-2-title":   "Co-Design",
    "step-2-desc":    "Collaborative strategy and solution design with clients and partners, grounded in evidence and aligned to institutional realities.",
    "step-3-title":   "Implementation",
    "step-3-desc":    "Technically rigorous support through deployment, including adaptive management, risk mitigation, and real-time course corrections.",
    "step-4-title":   "Learning & Impact",
    "step-4-desc":    "Systematic evaluation, knowledge capture, and impact documentation to demonstrate value and embed continuous learning.",

    /* CTA */
    "cta-label":      "Start a Conversation",
    "cta-heading":    "Ready to tackle your most complex challenges?",
    "cta-sub":        "Our team of senior advisors is available to discuss your context and explore how North Sphere Consulting can support your goals.",
    "cta-btn1":       "Contact Us",
    "cta-btn2":       "Download Profile",

    /* CONTACT */
    "contact-label":  "Contact Us",
    "contact-heading":"Let's work together",
    "contact-intro":  "Whether you're exploring a potential engagement or have a specific brief, we welcome the conversation. Our senior advisors will respond within two business days.",
    "contact-loc-lbl":"Headquarters",
    "contact-loc":    "Ottawa, Canada · Global Offices",
    "contact-email-lbl":"Email",
    "contact-email":  "advisory@northsphereconsulting.com",
    "contact-ph-lbl": "Phone",
    "contact-ph":     "+1 (613) 555-0190",
    "form-fname":     "First Name",
    "form-lname":     "Last Name",
    "form-org":       "Organisation",
    "form-email":     "Email Address",
    "form-service":   "Area of Interest",
    "form-svc-opt0":  "Select a service area",
    "form-svc-opt1":  "Strategic Advisory",
    "form-svc-opt2":  "Policy & Research",
    "form-svc-opt3":  "Program Design",
    "form-svc-opt4":  "Capacity Building",
    "form-svc-opt5":  "Impact Evaluation",
    "form-svc-opt6":  "Other",
    "form-message":   "Brief Description of Your Needs",
    "form-submit":    "Submit Enquiry",
    "form-success-msg": "✓ Thank you. We'll be in touch within two business days.",

    /* ABOUT PAGE */
    "about-pg-label":   "About North Sphere",
    "about-pg-headline":"An independent advisory firm built on <em>expertise,</em> evidence, and impact",
    "about-pg-sub":     "For over two decades, we have supported governments, multilaterals, and civil society organisations to navigate complexity and achieve lasting change.",
    "val-label":        "Our Values",
    "val-heading":      "What guides us",
    "val-1-title":      "Intellectual Rigour",
    "val-1-desc":       "We bring the highest standards of analytical excellence, evidence-based reasoning, and critical thinking to every engagement.",
    "val-2-title":      "Partnership",
    "val-2-desc":       "We work alongside clients as trusted partners, co-creating solutions that are owned, sustained, and built upon long after we leave.",
    "val-3-title":      "Equity & Inclusion",
    "val-3-desc":       "We centre the voices and interests of marginalised communities, ensuring our work promotes just and equitable outcomes.",
    "val-4-title":      "Systems Thinking",
    "val-4-desc":       "We resist siloed solutions, always placing specific challenges within their broader systemic, political, and institutional context.",
    "val-5-title":      "Independence",
    "val-5-desc":       "Our advice is impartial, evidence-driven, and free from conflicts of interest, so clients can trust what we say.",
    "val-6-title":      "Adaptive Learning",
    "val-6-desc":       "We build learning into every engagement, remaining open to evidence that challenges assumptions and improving as we go.",
    "team-label":       "Our Team",
    "team-heading":     "Senior advisors with <em>global</em> experience",

    /* EXPERTISE PAGE */
    "exp-pg-label":     "Expertise",
    "exp-pg-headline":  "Deep knowledge across <em>six</em> domains",
    "exp-pg-sub":       "Our practitioner-led expertise spans the full breadth of sustainable development — enabling truly integrated advisory across sectors.",
    "exp-pg-1-tag1": "Infrastructure", "exp-pg-1-tag2": "Digital Policy", "exp-pg-1-tag3": "GovTech",
    "exp-pg-2-tag1": "Health Policy",  "exp-pg-2-tag2": "UHC", "exp-pg-2-tag3": "PHC Reform",
    "exp-pg-3-tag1": "Climate",        "exp-pg-3-tag2": "EIA", "exp-pg-3-tag3": "Green Finance",
    "exp-pg-4-tag1": "Gender",         "exp-pg-4-tag2": "Social Protection", "exp-pg-4-tag3": "Inclusion",
    "exp-pg-5-tag1": "Curriculum",     "exp-pg-5-tag2": "EdTech", "exp-pg-5-tag3": "TVET",
    "exp-pg-6-tag1": "Governance",     "exp-pg-6-tag2": "PFM", "exp-pg-6-tag3": "Leadership",

    /* SERVICES PAGE */
    "svc-pg-label":     "Services",
    "svc-pg-headline":  "Advisory services that <em>create</em> lasting impact",
    "svc-pg-sub":       "From strategic counsel to implementation support, our services cover the full advisory cycle.",
    "svc-pg-1-item1": "Policy environment analysis",    "svc-pg-1-item2": "Executive advisory",        "svc-pg-1-item3": "Reform roadmaps",
    "svc-pg-2-item1": "Systematic literature reviews",  "svc-pg-2-item2": "Policy briefs & reports",    "svc-pg-2-item3": "Research design",
    "svc-pg-3-item1": "Theory of change development",   "svc-pg-3-item2": "Logframe & MEL design",      "svc-pg-3-item3": "Inception reports",
    "svc-pg-4-item1": "Needs assessment & diagnostics", "svc-pg-4-item2": "Training design & delivery",  "svc-pg-4-item3": "Coaching & mentoring",
    "svc-pg-5-item1": "Evaluation framework design",    "svc-pg-5-item2": "Quantitative & qualitative methods", "svc-pg-5-item3": "Learning & adaptation",

    /* APPROACH PAGE */
    "appr-pg-label":    "Our Approach",
    "appr-pg-headline": "Methodology built for <em>complexity</em>",
    "appr-pg-sub":      "Our four-phase methodology is both rigorous and adaptive — designed to navigate uncertainty while maintaining momentum toward impact.",
    "adc-1-phase": "Phase 01", "adc-1-title": "Diagnosis & Context Analysis",
    "adc-1-desc":  "We begin by deeply understanding the problem landscape — its history, stakeholders, political economy, and root causes.",
    "adc-1-i1": "Stakeholder mapping and political economy analysis",
    "adc-1-i2": "Systems mapping and root cause assessment",
    "adc-1-i3": "Baseline data collection and evidence synthesis",
    "adc-1-i4": "Risk and opportunity identification",
    "adc-2-phase": "Phase 02", "adc-2-title": "Co-Design & Strategy",
    "adc-2-desc":  "Together with clients and key stakeholders, we design strategies and solutions that are evidence-based, contextually grounded, and politically feasible.",
    "adc-2-i1": "Theory of change co-development",
    "adc-2-i2": "Options analysis and scenario planning",
    "adc-2-i3": "Collaborative strategy workshops",
    "adc-2-i4": "Implementation planning and resource mapping",
    "adc-3-phase": "Phase 03", "adc-3-title": "Implementation Support",
    "adc-3-desc":  "We provide technically rigorous support throughout delivery, staying close to the work and ensuring adaptive management in practice.",
    "adc-3-i1": "Technical assistance and expert deployment",
    "adc-3-i2": "Adaptive management and real-time learning",
    "adc-3-i3": "Stakeholder facilitation and consensus building",
    "adc-3-i4": "Quality assurance and risk management",
    "adc-4-phase": "Phase 04", "adc-4-title": "Learning & Impact Evaluation",
    "adc-4-desc":  "We systematically document results, capture learning, and support clients in demonstrating the value and sustainability of change.",
    "adc-4-i1": "Mixed-methods evaluation design and implementation",
    "adc-4-i2": "Impact documentation and reporting",
    "adc-4-i3": "Knowledge management and lessons learned",
    "adc-4-i4": "Sustainability planning and exit strategy",

    /* HOME — WHY US */
    "why-label":      "Why North Sphere",
    "why-heading":    "Built differently, for <em>harder</em> problems",
    "why-sub":        "We are not a generalist consultancy. We are a specialised advisory firm that brings practitioner depth, interdisciplinary breadth, and genuine independence to every mandate.",
    "why-1-title":    "Practitioner-Led",
    "why-1-desc":     "Every engagement is led by senior advisors with hands-on experience in the field — not junior analysts supervised from a distance. Our partners have held leadership roles inside the systems they advise on.",
    "why-2-title":    "Interdisciplinary by Design",
    "why-2-desc":     "Most problems at the intersection of health, climate, governance, and equity require more than one discipline. We draw on six domain practices simultaneously, connecting dots that siloed firms miss.",
    "why-3-title":    "Evidence, Not Frameworks",
    "why-3-desc":     "We distrust one-size-fits-all methodologies. Every diagnostic is context-specific, every recommendation grounded in local evidence — not adapted from a global template.",
    "trust-label":    "Trusted by leading institutions worldwide",

    /* HOME — APPROACH TEASER */
    "appr-teaser-label":  "Our Methodology",
    "appr-teaser-head":   "A proven process for <em>complex</em> change",
    "appr-teaser-sub":    "Our four-phase methodology is both rigorous and adaptive — designed for the messy reality of institutional reform, not the clean lines of a textbook.",
    "appr-teaser-btn":    "Explore Our Full Methodology",

    /* ABOUT — MISSION */
    "mission-label":      "Our Mission",
    "mission-attr":       "North Sphere Consulting, founded 2004",
    "mission-statement":  "To strengthen the institutions, systems, and policies that determine whether people can live healthy, dignified, and <em>prosperous lives</em> — everywhere.",

    /* ABOUT — FOUNDING */
    "founding-label":     "Our Story",
    "founding-heading":   "Two decades of <em>evidence-led</em> advisory",
    "founding-p1":        "North Sphere was founded in Ottawa in 2004 by a group of senior advisors who had spent careers inside the institutions they sought to improve — the UN, bilateral development agencies, federal ministries, and multilateral banks. They believed that the most effective advisory came from people who understood the political economy of reform from the inside.",
    "founding-p2":        "Over twenty years, we have grown from a small team focused on health systems in Sub-Saharan Africa to a global practice spanning six domains and four continents. What has not changed is our commitment to rigour, independence, and the primacy of local context.",
    "founding-p3":        "Today, North Sphere operates through a hub-and-spoke model: a core permanent team of senior partners and directors, augmented by a carefully curated network of 80+ associate experts who are deployed based on the specific demands of each mandate.",
    "ms-2004": "2004", "ms-2004-title": "Founded in Ottawa",
    "ms-2004-desc": "Established as a health systems advisory firm serving USAID, DFID, and the World Bank.",
    "ms-2010": "2010", "ms-2010-title": "Expanded to Six Domains",
    "ms-2010-desc": "Broadened practice to include education, environment, and institutional development following demand from multilateral clients.",
    "ms-2016": "2016", "ms-2016-title": "Opened Geneva & Nairobi Offices",
    "ms-2016-desc": "Established regional hubs to better serve European institutions and the African Union.",
    "ms-2023": "2023", "ms-2023-title": "Asia-Pacific Practice Launched",
    "ms-2023-desc": "New Singapore office anchors growing work across South and Southeast Asia.",

    /* ABOUT — REACH */
    "reach-label":    "Global Reach",
    "reach-heading":  "Where we <em>work</em>",
    "reach-sub":      "Our engagements span 60+ countries across every major region, with permanent offices on three continents.",
    "reach-1-region": "Sub-Saharan Africa", "reach-1-countries": "22 countries including Kenya, Ghana, Ethiopia, Senegal, Mozambique",
    "reach-2-region": "South & Southeast Asia", "reach-2-countries": "12 countries including India, Bangladesh, Vietnam, Philippines",
    "reach-3-region": "Middle East & North Africa", "reach-3-countries": "8 countries including Jordan, Morocco, Egypt, Lebanon",
    "reach-4-region": "Latin America", "reach-4-countries": "10 countries including Colombia, Peru, Haiti, Guatemala",
    "reach-5-region": "Europe & Central Asia", "reach-5-countries": "Multilateral institutions, EU, Council of Europe",
    "reach-6-region": "Pacific & SIDS", "reach-6-countries": "Small island developing states, climate-vulnerable nations",
    "reach-7-region": "North America", "reach-7-countries": "Federal advisory in Canada, USAID programming",
    "reach-8-region": "Global Institutions", "reach-8-countries": "UN, World Bank, IFC, ADB, IADB, Global Fund",

    /* ABOUT — TEAM EXPANDED */
    "team-bio-ma": "Dr. Archambault brings 25 years of senior advisory experience across the UN system, the World Bank, and national governments. She has led health system reform programs in over 18 countries and served as a senior advisor to the WHO Director-General.",
    "team-bio-jo": "Dr. Okonkwo is a physician-turned-policy-expert who has advised health ministries across East and West Africa. His work on universal health coverage in Kenya and Ghana is cited in WHO global strategy documents.",
    "team-bio-sl": "Ms. Larouche has 18 years of experience in education system reform, specialising in francophone Africa and the Caribbean. She led the design of national curriculum frameworks in three countries and serves on the UNESCO International Expert Panel.",
    "team-bio-rv": "Dr. Verma is a civil engineer and technology policy expert who advises governments on digital infrastructure, GovTech strategy, and climate-resilient engineering standards. He has worked with the ADB and UNDP across South Asia.",
    "team-tag-health": "Health Systems",
    "team-tag-governance": "Governance",
    "team-tag-uhc": "UHC",
    "team-tag-education": "Education",
    "team-tag-curriculum": "Curriculum",
    "team-tag-francophone": "Francophone Africa",
    "team-tag-engineering": "Engineering",
    "team-tag-digital": "Digital Policy",
    "team-tag-climate": "Climate Resilience",
    "team-tag-strategy": "Strategy",
    "team-tag-reform": "Institutional Reform",

    /* FOOTER */
    "footer-desc":   "Independent advisory for a complex world. Bringing rigour, equity, and interdisciplinary thinking to the challenges that matter most.",
    "footer-nav-h":  "Navigation",
    "footer-svc-h":  "Services",
    "footer-contact-h": "Contact",
    "footer-copy":   "© 2025 North Sphere Consulting. All rights reserved.",
    "footer-privacy":"Privacy Policy",
    "footer-terms":  "Terms of Use",
  },

  fr: {
    /* NAV */
    "nav-home":       "Accueil",
    "nav-about":      "À propos",
    "nav-expertise":  "Expertise",
    "nav-services":   "Services",
    "nav-approach":   "Approche",
    "nav-contact":    "Contact",
    "nav-cta":        "Nous contacter",

    /* HERO */
    "hero-label":     "Conseil · Stratégie · Impact",
    "hero-headline":  "Conseil interdisciplinaire pour la <em>science, l'innovation</em> et l'impact social",
    "hero-sub":       "North Sphere Consulting offre des services-conseils rigoureux et fondés sur des données probantes, qui relient des systèmes complexes, renforcent les institutions et favorisent des résultats équitables.",
    "hero-btn1":      "Nos services",
    "hero-btn2":      "Notre approche",
    "stat-1-num":     "20<em>+</em>",
    "stat-1-lbl":     "Années d'expérience",
    "stat-2-num":     "60<em>+</em>",
    "stat-2-lbl":     "Pays engagés",
    "stat-3-num":     "350<em>+</em>",
    "stat-3-lbl":     "Mandats accomplis",
    "stat-4-num":     "6",
    "stat-4-lbl":     "Domaines d'expertise",

    /* ABOUT INTRO */
    "about-label":    "À propos",
    "about-heading":  "Un partenaire de confiance pour des défis <em>complexes</em>",
    "about-p1":       "North Sphere Consulting est un cabinet de conseil indépendant qui sert les gouvernements, les organisations internationales, les institutions de financement du développement et la société civile. Nous combinons une expertise approfondie et une pensée interdisciplinaire pour relever les défis les plus pressants.",
    "about-p2":       "Fondé sur un engagement envers les données probantes, l'équité et l'impact à long terme, notre pratique s'étend sur six domaines interconnectés, nous permettant de voir les problèmes dans leur contexte systémique complet.",
    "about-pill1":    "Ingénierie & Technologie",
    "about-pill2":    "Systèmes de santé",
    "about-pill3":    "Durabilité environnementale",
    "about-pill4":    "Développement social",
    "about-pill5":    "Systèmes éducatifs",
    "about-pill6":    "Développement institutionnel",
    "about-quote":    '"Les défis les plus complexes exigent la pensée la plus intégrée."',
    "about-quote-attr": "North Sphere Consulting",
    "about-badge-num": "20+",
    "about-badge-lbl": "Années d'impact",
    "about-btn":      "En savoir plus sur nous",

    /* EXPERTISE CARDS */
    "exp-label":      "Notre expertise",
    "exp-heading":    "Six domaines <em>interconnectés</em>",
    "exp-sub":        "Nous avons développé une expertise approfondie, menée par des praticiens, dans six domaines qui abordent ensemble toute la complexité du développement durable.",
    "exp-1-title":    "Ingénierie & Technologie",
    "exp-1-desc":     "Systèmes d'infrastructure, transformation numérique, politique sur les technologies émergentes et cadres de gouvernance de l'ingénierie.",
    "exp-2-title":    "Systèmes de santé",
    "exp-2-desc":     "Renforcement des systèmes de santé, analyse des politiques, réforme des services, préparation aux pandémies et couverture sanitaire universelle.",
    "exp-3-title":    "Durabilité environnementale",
    "exp-3-desc":     "Adaptation et atténuation climatiques, évaluation des impacts environnementaux, gouvernance des ressources naturelles et planification de la transition verte.",
    "exp-4-title":    "Développement social",
    "exp-4-desc":     "Équité de genre, protection sociale, engagement communautaire, stratégies de réduction de la pauvreté et conception de politiques inclusives.",
    "exp-5-title":    "Systèmes éducatifs",
    "exp-5-desc":     "Réforme des systèmes éducatifs, développement curriculaire, renforcement des capacités des enseignants et stratégie de l'enseignement supérieur.",
    "exp-6-title":    "Développement institutionnel",
    "exp-6-desc":     "Renforcement des capacités organisationnelles, réforme de la gouvernance, administration publique et développement du leadership pour les institutions publiques.",
    "exp-btn":        "Voir toute l'expertise",

    /* SERVICES */
    "svc-label":      "Nos services",
    "svc-heading":    "Comment nous créons de <em>l'impact</em>",
    "svc-intro-p":    "Nos gammes de services sont conçues pour répondre à l'ensemble des besoins en conseil, du diagnostic initial au soutien à la mise en œuvre.",
    "svc-1-name":     "Conseil stratégique",
    "svc-1-desc":     "Conseils stratégiques de haut niveau aux décideurs naviguant dans des environnements politiques complexes ou des agendas de transformation à grande échelle.",
    "svc-2-name":     "Politique & Recherche",
    "svc-2-desc":     "Conception rigoureuse de recherches, synthèse de preuves et soutien au développement de politiques pour une prise de décision éclairée et contextuelle.",
    "svc-3-name":     "Conception de programmes",
    "svc-3-desc":     "Conception de bout en bout de programmes et initiatives — de la théorie du changement aux cadres logiques, planification et gestion des risques.",
    "svc-4-name":     "Renforcement des capacités",
    "svc-4-desc":     "Interventions de développement des capacités qui renforcent les organisations, les équipes et les systèmes pour atteindre des résultats durables.",
    "svc-5-name":     "Évaluation de l'impact",
    "svc-5-desc":     "Cadres d'évaluation à méthodes mixtes, systèmes de suivi en temps réel et évaluation rigoureuse de l'efficacité des programmes.",

    /* APPROACH */
    "appr-label":     "Notre approche",
    "appr-heading":   "Une méthodologie <em>rigoureuse</em> en quatre phases",
    "appr-sub":       "Chaque engagement suit un processus structuré et adaptatif fondé sur des données probantes, la collaboration et l'apprentissage continu.",
    "step-1-title":   "Diagnostic",
    "step-1-desc":    "Analyse approfondie du contexte, cartographie des parties prenantes, pensée systémique et évaluation des causes profondes.",
    "step-2-title":   "Co-conception",
    "step-2-desc":    "Conception collaborative de stratégies et solutions avec les clients, fondée sur des données probantes et alignée aux réalités institutionnelles.",
    "step-3-title":   "Mise en œuvre",
    "step-3-desc":    "Soutien techniquement rigoureux tout au long du déploiement, incluant la gestion adaptative et les corrections en temps réel.",
    "step-4-title":   "Apprentissage & Impact",
    "step-4-desc":    "Évaluation systématique, capture des connaissances et documentation de l'impact pour démontrer la valeur et ancrer l'apprentissage continu.",

    /* CTA */
    "cta-label":      "Commencer une conversation",
    "cta-heading":    "Prêt à relever vos défis les plus complexes?",
    "cta-sub":        "Notre équipe de conseillers seniors est disponible pour discuter de votre contexte et explorer comment North Sphere Consulting peut soutenir vos objectifs.",
    "cta-btn1":       "Nous contacter",
    "cta-btn2":       "Télécharger le profil",

    /* CONTACT */
    "contact-label":  "Contactez-nous",
    "contact-heading":"Travaillons ensemble",
    "contact-intro":  "Que vous explorez un engagement potentiel ou ayez un mandat spécifique, nous sommes ouverts à la conversation. Nos conseillers seniors répondront dans les deux jours ouvrables.",
    "contact-loc-lbl":"Siège social",
    "contact-loc":    "Ottawa, Canada · Bureaux mondiaux",
    "contact-email-lbl":"Courriel",
    "contact-email":  "conseil@northsphereconsulting.com",
    "contact-ph-lbl": "Téléphone",
    "contact-ph":     "+1 (613) 555-0190",
    "form-fname":     "Prénom",
    "form-lname":     "Nom de famille",
    "form-org":       "Organisation",
    "form-email":     "Adresse courriel",
    "form-service":   "Domaine d'intérêt",
    "form-svc-opt0":  "Sélectionner un domaine",
    "form-svc-opt1":  "Conseil stratégique",
    "form-svc-opt2":  "Politique & Recherche",
    "form-svc-opt3":  "Conception de programmes",
    "form-svc-opt4":  "Renforcement des capacités",
    "form-svc-opt5":  "Évaluation de l'impact",
    "form-svc-opt6":  "Autre",
    "form-message":   "Brève description de vos besoins",
    "form-submit":    "Envoyer la demande",
    "form-success-msg": "✓ Merci. Nous vous répondrons dans les deux jours ouvrables.",

    /* ABOUT PAGE */
    "about-pg-label":   "À propos de North Sphere",
    "about-pg-headline":"Un cabinet de conseil indépendant fondé sur l'<em>expertise,</em> les preuves et l'impact",
    "about-pg-sub":     "Depuis plus de deux décennies, nous aidons les gouvernements, les multilatéraux et les organisations de la société civile à naviguer dans la complexité et à réaliser des changements durables.",
    "val-label":        "Nos valeurs",
    "val-heading":      "Ce qui nous guide",
    "val-1-title":      "Rigueur intellectuelle",
    "val-1-desc":       "Nous appliquons les plus hauts standards d'excellence analytique, de raisonnement fondé sur des preuves et de pensée critique à chaque engagement.",
    "val-2-title":      "Partenariat",
    "val-2-desc":       "Nous travaillons aux côtés des clients comme partenaires de confiance, co-créant des solutions qui sont appropriées et pérennisées bien après notre départ.",
    "val-3-title":      "Équité & Inclusion",
    "val-3-desc":       "Nous centrons les voix et les intérêts des communautés marginalisées, en veillant à ce que notre travail promeuve des résultats justes et équitables.",
    "val-4-title":      "Pensée systémique",
    "val-4-desc":       "Nous résistons aux solutions cloisonnées, plaçant toujours les défis spécifiques dans leur contexte systémique, politique et institutionnel plus large.",
    "val-5-title":      "Indépendance",
    "val-5-desc":       "Nos conseils sont impartiaux, fondés sur des preuves et libres de conflits d'intérêts, afin que les clients puissent faire confiance à ce que nous disons.",
    "val-6-title":      "Apprentissage adaptatif",
    "val-6-desc":       "Nous intégrons l'apprentissage dans chaque engagement, restant ouverts aux preuves qui remettent en question les hypothèses et en nous améliorant continuellement.",
    "team-label":       "Notre équipe",
    "team-heading":     "Conseillers seniors avec une expérience <em>mondiale</em>",

    /* EXPERTISE PAGE */
    "exp-pg-label":     "Expertise",
    "exp-pg-headline":  "Connaissances approfondies dans <em>six</em> domaines",
    "exp-pg-sub":       "Notre expertise, menée par des praticiens, couvre toute l'étendue du développement durable.",
    "exp-pg-1-tag1": "Infrastructure", "exp-pg-1-tag2": "Politique numérique", "exp-pg-1-tag3": "GouvernTech",
    "exp-pg-2-tag1": "Politique de santé","exp-pg-2-tag2": "CSU", "exp-pg-2-tag3": "Réforme SSP",
    "exp-pg-3-tag1": "Climat",           "exp-pg-3-tag2": "EIE", "exp-pg-3-tag3": "Finance verte",
    "exp-pg-4-tag1": "Genre",            "exp-pg-4-tag2": "Protection sociale", "exp-pg-4-tag3": "Inclusion",
    "exp-pg-5-tag1": "Curriculum",       "exp-pg-5-tag2": "TechÉd", "exp-pg-5-tag3": "EFTP",
    "exp-pg-6-tag1": "Gouvernance",      "exp-pg-6-tag2": "GFP", "exp-pg-6-tag3": "Leadership",

    /* SERVICES PAGE */
    "svc-pg-label":     "Services",
    "svc-pg-headline":  "Services-conseils qui créent un impact <em>durable</em>",
    "svc-pg-sub":       "Du conseil stratégique au soutien à la mise en œuvre, nos services couvrent le cycle complet du conseil.",
    "svc-pg-1-item1": "Analyse de l'environnement politique",  "svc-pg-1-item2": "Conseil aux dirigeants",          "svc-pg-1-item3": "Feuilles de route de réforme",
    "svc-pg-2-item1": "Revues systématiques de la littérature","svc-pg-2-item2": "Notes et rapports de politique",   "svc-pg-2-item3": "Conception de la recherche",
    "svc-pg-3-item1": "Développement de théorie du changement","svc-pg-3-item2": "Cadre logique et système SERA",     "svc-pg-3-item3": "Rapports de démarrage",
    "svc-pg-4-item1": "Évaluations des besoins et diagnostics","svc-pg-4-item2": "Conception et prestation de formations","svc-pg-4-item3": "Coaching et mentorat",
    "svc-pg-5-item1": "Conception de cadres d'évaluation",     "svc-pg-5-item2": "Méthodes quantitatives et qualitatives","svc-pg-5-item3": "Apprentissage et adaptation",

    /* APPROACH PAGE */
    "appr-pg-label":    "Notre approche",
    "appr-pg-headline": "Méthodologie conçue pour la <em>complexité</em>",
    "appr-pg-sub":      "Notre méthodologie en quatre phases est à la fois rigoureuse et adaptative — conçue pour naviguer dans l'incertitude tout en maintenant l'élan vers l'impact.",
    "adc-1-phase": "Phase 01", "adc-1-title": "Diagnostic & analyse contextuelle",
    "adc-1-desc":  "Nous commençons par comprendre profondément le paysage du problème — son histoire, ses parties prenantes, son économie politique et ses causes profondes.",
    "adc-1-i1": "Cartographie des parties prenantes et analyse de l'économie politique",
    "adc-1-i2": "Cartographie des systèmes et évaluation des causes profondes",
    "adc-1-i3": "Collecte de données de référence et synthèse des preuves",
    "adc-1-i4": "Identification des risques et des opportunités",
    "adc-2-phase": "Phase 02", "adc-2-title": "Co-conception & stratégie",
    "adc-2-desc":  "Avec les clients et les principales parties prenantes, nous concevons des stratégies et solutions fondées sur des preuves, ancrées dans le contexte.",
    "adc-2-i1": "Co-développement de la théorie du changement",
    "adc-2-i2": "Analyse des options et planification de scénarios",
    "adc-2-i3": "Ateliers de stratégie collaboratifs",
    "adc-2-i4": "Planification de la mise en œuvre et cartographie des ressources",
    "adc-3-phase": "Phase 03", "adc-3-title": "Soutien à la mise en œuvre",
    "adc-3-desc":  "Nous fournissons un soutien techniquement rigoureux tout au long de la livraison, en restant proches du travail et en assurant une gestion adaptative.",
    "adc-3-i1": "Assistance technique et déploiement d'experts",
    "adc-3-i2": "Gestion adaptative et apprentissage en temps réel",
    "adc-3-i3": "Facilitation des parties prenantes et recherche de consensus",
    "adc-3-i4": "Assurance qualité et gestion des risques",
    "adc-4-phase": "Phase 04", "adc-4-title": "Apprentissage & évaluation de l'impact",
    "adc-4-desc":  "Nous documentons systématiquement les résultats, capturons les apprentissages et aidons les clients à démontrer la valeur et la durabilité du changement.",
    "adc-4-i1": "Conception et mise en œuvre d'évaluations à méthodes mixtes",
    "adc-4-i2": "Documentation de l'impact et rapports",
    "adc-4-i3": "Gestion des connaissances et leçons apprises",
    "adc-4-i4": "Planification de la durabilité et stratégie de sortie",

    /* HOME — WHY US */
    "why-label":      "Pourquoi North Sphere",
    "why-heading":    "Conçu différemment, pour des problèmes <em>plus complexes</em>",
    "why-sub":        "Nous ne sommes pas un cabinet de conseil généraliste. Nous sommes une firme de conseil spécialisée qui apporte profondeur praticienne, largeur interdisciplinaire et indépendance réelle à chaque mandat.",
    "why-1-title":    "Dirigé par des praticiens",
    "why-1-desc":     "Chaque engagement est dirigé par des conseillers seniors ayant une expérience terrain — pas des analystes juniors supervisés à distance. Nos associés ont occupé des postes de direction au sein des systèmes qu'ils conseillent.",
    "why-2-title":    "Interdisciplinaire par conception",
    "why-2-desc":     "La plupart des problèmes à l'intersection de la santé, du climat, de la gouvernance et de l'équité exigent plus d'une discipline. Nous mobilisons six domaines simultanément, connectant des points que les cabinets cloisonnés manquent.",
    "why-3-title":    "Preuves, pas cadres",
    "why-3-desc":     "Nous nous méfions des méthodologies universelles. Chaque diagnostic est spécifique au contexte, chaque recommandation fondée sur des preuves locales — non adaptée d'un modèle mondial.",
    "trust-label":    "La confiance des principales institutions mondiales",

    /* HOME — APPROACH TEASER */
    "appr-teaser-label":  "Notre méthodologie",
    "appr-teaser-head":   "Un processus éprouvé pour le changement <em>complexe</em>",
    "appr-teaser-sub":    "Notre méthodologie en quatre phases est rigoureuse et adaptative — conçue pour la réalité difficile de la réforme institutionnelle, pas pour les lignes épurées d'un manuel.",
    "appr-teaser-btn":    "Explorer notre méthodologie complète",

    /* ABOUT — MISSION */
    "mission-label":      "Notre mission",
    "mission-attr":       "North Sphere Consulting, fondé en 2004",
    "mission-statement":  "Renforcer les institutions, les systèmes et les politiques qui déterminent si les gens peuvent vivre une vie saine, digne et <em>prospère</em> — partout dans le monde.",

    /* ABOUT — FOUNDING */
    "founding-label":     "Notre histoire",
    "founding-heading":   "Deux décennies de conseil <em>fondé sur les preuves</em>",
    "founding-p1":        "North Sphere a été fondé à Ottawa en 2004 par un groupe de conseillers seniors qui avaient passé leur carrière au sein des institutions qu'ils cherchaient à améliorer — l'ONU, les agences de développement bilatérales, les ministères fédéraux et les banques multilatérales.",
    "founding-p2":        "Au cours de vingt ans, nous sommes passés d'une petite équipe axée sur les systèmes de santé en Afrique subsaharienne à une pratique mondiale couvrant six domaines et quatre continents.",
    "founding-p3":        "Aujourd'hui, North Sphere opère selon un modèle hub-and-spoke : une équipe permanente de partenaires seniors, complétée par un réseau soigneusement sélectionné de 80+ experts associés.",
    "ms-2004": "2004", "ms-2004-title": "Fondé à Ottawa",
    "ms-2004-desc": "Établi comme cabinet de conseil en systèmes de santé au service de l'USAID, du DFID et de la Banque mondiale.",
    "ms-2010": "2010", "ms-2010-title": "Expansion à six domaines",
    "ms-2010-desc": "Élargissement de la pratique à l'éducation, l'environnement et le développement institutionnel.",
    "ms-2016": "2016", "ms-2016-title": "Bureaux de Genève et Nairobi",
    "ms-2016-desc": "Création de hubs régionaux pour mieux servir les institutions européennes et l'Union africaine.",
    "ms-2023": "2023", "ms-2023-title": "Lancement Asie-Pacifique",
    "ms-2023-desc": "Le bureau de Singapour ancre les travaux croissants en Asie du Sud et du Sud-Est.",

    /* ABOUT — REACH */
    "reach-label":    "Présence mondiale",
    "reach-heading":  "Où nous <em>travaillons</em>",
    "reach-sub":      "Nos engagements couvrent 60+ pays dans toutes les grandes régions, avec des bureaux permanents sur trois continents.",
    "reach-1-region": "Afrique subsaharienne", "reach-1-countries": "22 pays dont Kenya, Ghana, Éthiopie, Sénégal, Mozambique",
    "reach-2-region": "Asie du Sud et du Sud-Est", "reach-2-countries": "12 pays dont Inde, Bangladesh, Vietnam, Philippines",
    "reach-3-region": "Moyen-Orient et Afrique du Nord", "reach-3-countries": "8 pays dont Jordanie, Maroc, Égypte, Liban",
    "reach-4-region": "Amérique latine", "reach-4-countries": "10 pays dont Colombie, Pérou, Haïti, Guatemala",
    "reach-5-region": "Europe et Asie centrale", "reach-5-countries": "Institutions multilatérales, UE, Conseil de l'Europe",
    "reach-6-region": "Pacifique et PEID", "reach-6-countries": "Petits États insulaires en développement",
    "reach-7-region": "Amérique du Nord", "reach-7-countries": "Conseil fédéral au Canada, programmation USAID",
    "reach-8-region": "Institutions mondiales", "reach-8-countries": "ONU, Banque mondiale, FMI, BAsD, BID, Fonds mondial",

    /* ABOUT — TEAM EXPANDED */
    "team-bio-ma": "Dr. Archambault apporte 25 ans d'expérience de conseil senior au sein du système ONU, de la Banque mondiale et des gouvernements nationaux. Elle a dirigé des programmes de réforme des systèmes de santé dans plus de 18 pays.",
    "team-bio-jo": "Dr. Okonkwo est un médecin devenu expert en politique qui a conseillé des ministères de la santé à travers l'Afrique de l'Est et de l'Ouest. Ses travaux sur la CSU au Kenya et au Ghana sont cités dans les documents de stratégie mondiale de l'OMS.",
    "team-bio-sl": "Mme Larouche a 18 ans d'expérience en réforme des systèmes éducatifs, spécialisée en Afrique francophone et aux Caraïbes. Elle siège au Comité international d'experts de l'UNESCO.",
    "team-bio-rv": "Dr. Verma est un ingénieur civil et expert en politique technologique qui conseille les gouvernements sur l'infrastructure numérique et les normes d'ingénierie résilientes au climat.",
    "team-tag-health": "Systèmes de santé",
    "team-tag-governance": "Gouvernance",
    "team-tag-uhc": "CSU",
    "team-tag-education": "Éducation",
    "team-tag-curriculum": "Curriculum",
    "team-tag-francophone": "Afrique francophone",
    "team-tag-engineering": "Ingénierie",
    "team-tag-digital": "Politique numérique",
    "team-tag-climate": "Résilience climatique",
    "team-tag-strategy": "Stratégie",
    "team-tag-reform": "Réforme institutionnelle",

    /* FOOTER */
    "footer-desc":   "Conseil indépendant pour un monde complexe. Alliant rigueur, équité et pensée interdisciplinaire aux défis qui comptent le plus.",
    "footer-nav-h":  "Navigation",
    "footer-svc-h":  "Services",
    "footer-contact-h": "Contact",
    "footer-copy":   "© 2025 North Sphere Consulting. Tous droits réservés.",
    "footer-privacy":"Politique de confidentialité",
    "footer-terms":  "Conditions d'utilisation",
  }
};

/* ── STATE ───────────────────────────────────────────────── */
let currentLang = localStorage.getItem('nsc-lang') || 'en';

/* ── APPLY TRANSLATIONS ──────────────────────────────────── */
function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  currentLang = lang;
  localStorage.setItem('nsc-lang', lang);

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update html lang attr
  document.documentElement.lang = lang;
}

/* ── SCROLL: NAV STICKY ──────────────────────────────────── */
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  function updateNav() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  // Hamburger
  const hamburger = document.querySelector('.nav-hamburger');
  const drawer    = document.querySelector('.nav-drawer');
  const overlay   = document.querySelector('.nav-overlay');

  if (hamburger && drawer && overlay) {
    hamburger.addEventListener('click', () => {
      drawer.classList.toggle('open');
      overlay.classList.toggle('show');
    });
    overlay.addEventListener('click', () => {
      drawer.classList.remove('open');
      overlay.classList.remove('show');
    });
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        drawer.classList.remove('open');
        overlay.classList.remove('show');
      });
    });
  }

  // Active link highlight
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* ── SCROLL REVEAL ───────────────────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ── SERVICE ACCORDION ───────────────────────────────────── */
function initServiceAccordion() {
  document.querySelectorAll('.service-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      if (!body) return;
      const isOpen = body.classList.contains('open');

      // Close all
      document.querySelectorAll('.service-body').forEach(b => b.classList.remove('open'));

      if (!isOpen) body.classList.add('open');
    });
  });
}

/* ── CONTACT FORM ────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const t = TRANSLATIONS[currentLang];
    const successEl = document.getElementById('form-success');
    if (successEl) {
      successEl.textContent = t['form-success-msg'] || '✓ Thank you. We\'ll be in touch within two business days.';
      successEl.style.display = 'block';
      form.reset();
      setTimeout(() => { successEl.style.display = 'none'; }, 6000);
    }
  });
}

/* ── LANG TOGGLE ─────────────────────────────────────────── */
function initLangToggle() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(btn.dataset.lang);
    });
  });
}

/* ── INIT ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initServiceAccordion();
  initContactForm();
  initLangToggle();
  applyLang(currentLang);
});
