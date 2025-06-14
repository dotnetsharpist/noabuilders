import { createI18n } from "vue-i18n";

const messages = {
  rus: {
    navbar_home_text: "Главная",
    product_catalog: " Мнения наших клиентов",
    login: "Вход",
    hero_title: "Надежное снабжение и комплектация для строительства",
    hero_subtitle: "Мы NOA Builders – поддерживаем ваши строительные проекты высококачественными материалами, современным оборудованием и комплексным снабжением. Наша цель – сделать ваш строительный процесс быстрым, эффективным и надежным.",
    modern_equipment: "Современное оборудование",
    successful_clients: "Клиенты",
    successful_projects: "Успешные проекты",
    delivery_construction_materials: "Доставка строительных материалов",
    building_materials: "Бетон, цемент, кирпич, арматура, облицовочные и отделочные материалы",
    technical_equipment: "Обеспечение техническим оборудованием",
    construction_machinery: "Строительные машины и механизмы. Электрооборудование и устройства",
    logistics: "Комплектация и логистика",
    xizmatlar: "Наши услуги",
    complex_delivery: "Комплексная доставка для строительных объектов. Точная доставка и мониторинг материалов",
    footer_uptitle: "Благодаря нашим услугам технологические решения становятся доступнее!",
    why_noa_builders: "Почему именно компания NOA Builders?",
    guaranteed_quality: "Гарантированное качество и надежные материалы",
    guaranteed_quality_desc: "Мы предоставляем только сертифицированные, высококачественные строительные материалы. Каждый продукт соответствует стандартам прочности, долговечности и экологической безопасности.",
    modern_approach: "Комплексный подход и современные технологии",
    modern_approach_desc: "NOA Builders не только поставляет строительные материалы, но и предоставляет техническое оборудование и комплексные логистические услуги.",
    fast_delivery: "Быстрая доставка",
    fast_delivery_desc: "Мы учитываем потребности каждого клиента и эффективно распределяем наши услуги индивидуально.",
    quick_links_title: "Быстрые ссылки",
    about_us: "О нас",
    services: "Услуги",
    home: "Главная",
    contact: "Почему именно мы",
    email: "Введите свой адрес электронной почты",
    construction_materials: "Доставка строительных материалов",
    construction_materials_desc: "Мы поставляем высококачественные материалы для строительства любой сложности и объема. Все наши партнеры – проверенные и надежные производители.",
    technical_equipment: "Обеспечение техническим оборудованием",
    logistics: "Комплектация и логистика",
    more_details: "Подробнее",
    customer_feedback: "Отзывы наших клиентов",
    customer_news: "Эксклюзивные новости и предложения от NOA Builders!",
    customer_recommendations: "Будьте в числе первых, кто узнает о наших рекомендациях, отзывах и последних новостях в строительной сфере.",
    customer_subscribe: "Подписаться",
    construction_support: "Поддерживаем ваши строительные проекты качественными материалами и современным оборудованием.",
    construction_materials: "Строительные материалы",
    technical_equipment: "Техническое оборудование",
    cardTitle: "Доставка строительных материалов",
    logistics: "Комплектация и логистика",
    contact_info: "Контактная информация",
    tashkent_city: "Город Ташкент",
    independence_street: "Улица Мустакиллик, 25",
    contact_navbar: "Контакт",
    ourProjects: "Наши проекты",
    catalog_products: "Каталог товаров",
    consulting_project_design: "Консультации по проектированию",
consulting_project_design_desc: "Оптимальные решения, варианты дизайна и технические параметры для строительного проекта.",
consulting_legal_help: "Юридическая помощь",
consulting_legal_help_desc: "Консультации по правовым вопросам, договорам, разрешениям и законодательству, связанным со строительством.",
consulting_engineering_services: "Инженерные услуги",
consulting_engineering_services_desc: "Специалисты, отвечающие за технические расчеты и контроль строительных проектов.",
consulting_technical_supervision: "Технадзор",
consulting_technical_supervision_desc: "Строгий контроль качества материалов и технологий, используемых в строительстве.",
consulting_general_advice: "Строй-консультация",
consulting_general_advice_desc: "Общие советы по строительству от опытных специалистов.",
special_service_title: "У нас есть специальная услуга:",
    special_service_desc: '"Услуги найма" – направляем квалифицированных, но временно безработных специалистов на необходимые строительные проекты.',
    
    question_1_title: "Вы — специалист, ищущий работу?",
    question_1_desc: "Мы предложим вам постоянную или временную работу.",
    
    question_2_title: "Вы — строительная компания, ищущая рабочую силу?",
    question_2_desc: "Мы поможем найти и связать вас с нужными специалистами.",
    
    bu_orqali_title: "Через это:",
      construction_problem:
      "Обращайтесь к нам по любым вопросам строительства — мы предложим вам необходимые решения, специалистов и услуги.",
    texnika_uskuna_div_title: "Любое оборудование – от больших бетонных насосов до малых генераторов – доставляется на ваш объект с транспортной логистикой.",
    benefit_1: "Безработные специалисты обеспечиваются работой",
    benefit_2: "Строительные компании экономят время и ресурсы",
    benefit_3: "Повышается качество работы, так как каждый мастер — опытный представитель своей области",
qurilish_muhandislari: "Строительные инженеры",
    elektromontajorlar: "Электромонтажники",
    goplomachlar_shpaklyovkachlar_suvaqchilar_va_boshqa_ustalar: "Гопломач, шпаклевщики, штукатуры и другие мастера",
    gast_mutaxassislar: "Специалисты ГАСТ",
    gast_mutaxassislar_desc: "(по газовой и тепловой технике)",
    elektrik_xizmat_korsatuvchilar: "Электрики обслуживания",
    santexniklar: "Сантехники",
      feedback_1: "Команда NOA Builders поразила меня своим профессионализмом и подходом к качеству на каждом этапе проекта. Они выполнили работу вовремя и в соответствии с высокими стандартами.",
  feedback_2: "Работа с NOA Builders стала для меня отличным опытом. Команда уделяла внимание каждой мелочи в процессе строительства и выполняла работу с высоким качеством. Спасибо!",
  consaltingTitle: "Консалтинг, комплектация и логистические услуги",
  consaltingSubtitle: "	Комплексная поставка для строительных объектов. Точная отправка и мониторинг материалов",
  texnikUskunaTitle: "Обеспечение техническим оборудованием",
  texnikaUskunaSubtitle: "Строительные машины и механизмы. Электрооборудование и инструменты",
  viewAll: "Посмотреть все",
  yuborish: "Отправить",
   texnikaIshonch: "Строительная техника — надежные решения для любого проекта",
    nimaKerak: "Почему стоит использовать нашу технику?",
    ijaragaOlish: "Арендуя технику или пользуясь логистикой у нас, вы облегчаете себе задачу",
    texnikKurik: "Каждая единица техники прошла техосмотр и надежна.",
    servisZaxira: "Доступны запасные части и сервисное обслуживание.",
    moslashuvchanIjara: "Гибкие условия аренды — для кратко- и долгосрочных проектов.",
    operatorTalim: "Быстрое обучение и инструкции для операторов.",
    markazBozor: "Продукция рынков Куйлюк, Жума, Урикзор",
    xizmatToshkent: "Услуги для города Ташкента",
    texnikaTurlari: "Различные виды техники",
  yerIshlari_title: "Для земляных работ:",
  yerIshlari_description: "Экскаваторы (гусеничные/колесные): копка, перемещение, углубление. Грузовая техника (самосвалы, прицепные машины).",
  yolAsfalt_title: "Для дорожных и асфальтовых работ:",
  yolAsfalt_description: "Асфальтоукладчики, Катки: вибрационные и статические, Грейдеры: выравнивание и отделка дорожного покрытия.",
  kotaruv_title: "Подъемное оборудование:",
  kotaruv_description: "Автокраны: подъем бетонных плит, металлических блоков и других тяжелых строительных материалов.",
  texnik_uskunadivtitle: "Любая техника – от больших бетонных насосов до малых генераторов – доставляется на ваш объект с транспортной логистикой.",
  mutaxasislar_bilan_taminlash: "Обеспечение специалистами",
  consalting_taklif_etamiz: "Мы предлагаем вам следующие услуги",
  qurilishMaterialTitle: "Строительные материалы в одном месте – Качественная, быстрая, надежная доставка!",
  qurilishMaterialSubtitle: "Мы предлагаем комплексную доставку основных и отделочных материалов, необходимых для различных этапов строительства. Наши продукты отличаются высоким качеством, соответствуют стандартам и подходят как для массового, так и для индивидуального строительства.",
   hero_titleKonsalt: "Надежное снабжение, комплектация и консалтинг для строительства",
    hero_subtitleKonsalt: "Строительный процесс — это сложная система, которая опирается не только на материалы и технику, но и достигает идеального результата через точное планирование, экспертные консультации и правильно подобранных специалистов."
  },
  
  eng: {
    navbar_home_text: "Home",
    product_catalog: "Our customers' opinions",
    login: "Login",
    hero_title: "Reliable Supply and Equipment for Construction",
    hero_subtitle: "We are NOA Builders – supporting your construction projects with high-quality materials, modern equipment, and comprehensive supply solutions. Our goal is to ensure your construction process is fast, efficient, and reliable.",
    modern_equipment: "Modern Equipment",
    successful_clients: "Clients",
    successful_projects: "Successful Projects",
    delivery_construction_materials: "Construction Materials Delivery",
    building_materials: "Concrete, cement, bricks, rebar, cladding, and finishing materials",
    technical_equipment: "Technical Equipment Supply",
    construction_machinery: "Construction Machinery and Mechanisms. Electrical Equipment and Devices",
    logistics: "Completion and Logistics",
    xizmatlar: "Our Services",
    complex_delivery: "Comprehensive delivery for construction projects. Accurate material delivery and monitoring",
    footer_uptitle: "Technological solutions become more accessible with our services!",
    why_noa_builders: "Why Choose NOA Builders?",
    guaranteed_quality: "Guaranteed Quality and Reliable Materials",
    guaranteed_quality_desc: "We provide only certified, high-quality construction materials. Every product meets strength, durability, and environmental safety standards.",
    modern_approach: "Comprehensive Approach and Modern Technologies",
    modern_approach_desc: "NOA Builders not only supplies construction materials but also provides technical equipment and comprehensive logistics services.",
    fast_delivery: "Fast Delivery",
    fast_delivery_desc: "We consider the needs of each client and efficiently distribute our services individually.",
    quick_links_title: "Quick Links",
    about_us: "About Us",
    services: "Services",
    home: "Home",
     construction_problem:
      "Contact us for any construction-related issue — we will offer you the necessary solution, specialist, and service.",
     qurilish_muhandislari: "Construction Engineers",
    elektromontajorlar: "Electrical Installers",
    goplomachlar_shpaklyovkachlar_suvaqchilar_va_boshqa_ustalar: "Plasterers, putty workers, plasterers, and other craftsmen",
    gast_mutaxassislar: "GAST Specialists",
    gast_mutaxassislar_desc: "(gas and heating technology specialists)",
    elektrik_xizmat_korsatuvchilar: "Electrical Service Providers",
    santexniklar: "Plumbers",
    contact: "Why exactly us?",
    construction_materials: "Construction Materials Delivery",
    construction_materials_desc: "We deliver high-quality materials for construction of any scale and complexity. All our partners are trusted and reliable manufacturers.",
    technical_equipment: "Technical Equipment Supply",
    ourProjects: "Our Projects",
    logistics: "Completion and Logistics",
    more_details: "More Details",
    customer_feedback: "Customer Feedback",
    customer_news: "Exclusive News and Offers from NOA Builders!",
    customer_recommendations: "Be the first to learn about our recommendations, reviews, and the latest news in the construction industry.",
    customer_subscribe: "Subscribe",
    construction_support: "Supporting your construction projects with high-quality materials and modern equipment.",
    construction_materials: "Construction Materials",
    technical_equipment: "Technical Equipment",
    logistics: "Completion and Logistics",
    contact_info: "Contact Information",
    tashkent_city: "Tashkent City",
    email: "Enter your email address",
     texnikaIshonch: "Construction equipment – Reliable solutions for any project",
    nimaKerak: "Why use our equipment?",
    ijaragaOlish: "Make your job easier with equipment rental or logistics services from us",
    texnikKurik: "Every machine is inspected and reliable.",
    servisZaxira: "Spare parts and maintenance services available.",
    moslashuvchanIjara: "Flexible rental terms – suitable for short and long-term projects.",
    operatorTalim: "Quick training and instructions provided for operators.",
    markazBozor: "Products from Qo'yliq, Jome, and O'rikzor markets",
    xizmatToshkent: "Services for Tashkent city",
    texnikaTurlari: "Various types of equipment",
    independence_street: "Independence Street 25",
    contact_navbar: "Contact",
  catalog_products: "Product catalog",
  consulting_project_design: "Project Design Consulting",
consulting_project_design_desc: "Advice on optimal solutions, design options, and technical specifications for construction projects.",
consulting_legal_help: "Legal Assistance",
consulting_legal_help_desc: "Advice on legal issues, contracts, permits, and legislation related to construction.",
consulting_engineering_services: "Engineering Services",
consulting_engineering_services_desc: "Experts responsible for technical calculations and supervision for construction projects.",
consulting_technical_supervision: "Technical Supervision",
consulting_technical_supervision_desc: "Strict quality control over materials and technologies used in construction.",
consulting_general_advice: "Construction Advice",
consulting_general_advice_desc: "General construction advice from industry specialists.",
 special_service_title: "We offer a special service:",
    special_service_desc: '"Hire services" – directing qualified but temporarily unemployed specialists to necessary construction projects.',
    
    question_1_title: "Are you a specialist looking for a job?",
    question_1_desc: "We provide you with permanent or temporary work.",
    
    question_2_title: "Are you a construction company looking for workforce?",
    question_2_desc: "We help you find and connect with the needed specialists.",
    
    bu_orqali_title: "Through this:",
    texnik_uskunadivtitle: "Any equipment – from large concrete pumps to small generators – delivered to your site with transport logistics.",
    benefit_1: "Unemployed specialists get employment",
    benefit_2: "Construction companies save time and resources",
    benefit_3: "Work quality improves because each craftsman is an experienced representative of their field",
    cardTitle: "Delivery of construction materials",
     feedback_1: "The NOA Builders team impressed me with their professionalism and commitment to quality at every stage of the project. They completed the work on time and to high standards.",
  feedback_2: "Working with NOA Builders was a great experience for me. The team paid attention to every little detail during the construction process and delivered high-quality work. Thank you!",
  consaltingTitle: "Consulting, procurement and logistics services",
  consaltingSubtitle: "Comprehensive supply for construction sites. Accurate delivery and material monitoring",
  texnikUskunaTitle: "Supply of technical equipment",
  texnikaUskunaSubtitle: "Construction machines and mechanisms. Electrical equipment and tools",
    viewAll: "View All",
    yuborish: "Send",
      yerIshlari_title: "For Earthworks:",
  yerIshlari_description: "Excavators (crawler/wheeled): digging, moving, deepening. Hauling equipment (dumpers, trailer trucks).",
  yolAsfalt_title: "For Road and Asphalt Works:",
  yolAsfalt_description: "Asphalt pavers, Rollers: vibratory and static, Graders: leveling and finishing the road surface.",
  kotaruv_title: "Lifting Equipment:",
  kotaruv_description: "Cranes: lifting concrete slabs, metal blocks, and other heavy construction materials.",
    mutaxasislar_bilan_taminlash: "Provision of specialists",
    consalting_taklif_etamiz: "We offer you the following services",
    qurilishMaterialTitle: "Construction materials in one place – Quality, fast, reliable delivery!",
    hero_titleKonsalt: "Reliable supply, procurement and consulting for construction",
    hero_subtitleKonsalt: "The construction process is a complex system that relies not only on materials and equipment, but achieves perfect results through precise planning, expert advice and properly selected specialists.",
    qurilishMaterialSubtitle: "We offer complete delivery of essential and finishing materials needed for various stages of construction. Our products are of high quality, meet standards, and are suitable for both mass and individual construction."
  },
  lotin: {
    navbar_home_text: "Бош саҳифа",
    product_catalog: "Мижозларимиз фикрлари",
    login: "Кириш",
    ourProjects: "Бизнинг лойиҳаларимиз",
    hero_title: "Қурилиш учун ишончли таъминот ва комплектация",
    hero_subtitle: "Биз НОА Буилдерс - қурилиш лойиҳаларингизни юқори сифатли материаллар, замонавий ускуналар ва комплекс таъминот билан қўллаб-қувватлаймиз. Бизнинг мақсадимиз - сизнинг қурилиш жараёнларингизни тез, самарали ва ишончли таъминлашдир.",
    modern_equipment: "Замонавий ускуналар",
    successful_clients: "Мижозлар",
    successful_projects: "Муваффақиятли лойиҳалар",
    delivery_construction_materials: "Қурилиш материаллари етказиб бериш",
    building_materials: "Бетон, цемент, ғишт, арматура, қоплама ва пардозлаш материаллари",
    technical_equipment: "Техник ускуналар билан таъминлаш",
    construction_machinery: "Қурилиш машиналари ва механизмлар. Электр жиҳозлари ва ускуналар",
    logistics: "Комплектация ва логистика",
    xizmatlar: "Бизнинг хизматлар",
    complex_delivery: "Қурилиш объектлари учун комплекс етказиб бериш. Материалларни аниқ бир жойга етказиш ва мониторинг қилиш",
    footer_uptitle: "Технологические решения становятся доступнее благодаря нашим услугам!",
    why_noa_builders: "Нега айнан NOA Builders компанияси?",
    guaranteed_quality: "Кафолатланган сифат ва ишончли материаллар",
    guaranteed_quality_desc: "Биз фақат сертификатланган, юқори сифатли қурилиш материаллари билан таъминлаймиз. Ҳар бир маҳсулот мустаҳкамлик, чидамлилик ва экологик хавфсизлик стандартларига жавоб беради.",
    modern_approach: "Комплекс ёндашув ва замонавий технологиялар",
    modern_approach_desc: "NOA Builders нафақат қурилиш материалларини етказиб беради, балки техник ускуналар билан таъминлаш ва комплекс логистика хизматларини ҳам кўрсатади.",
    fast_delivery: "Тезкор етказиб бериш",
    fast_delivery_desc: "Биз ҳар бир мижознинг эҳтиёжини инобатга олиб, хизматларимизни индивидуал тарзда самарали тақсим этамиз.",
    quick_links_title: "Быстрые ссылки",
    about_us: "О нас",
    services: "Хизматлар",
    home: "Главная",
    contact: "Нега айнан биз?",
     construction_problem:
      "Қурилишдаги ҳар қандай муаммо бўйича бизга мурожаат қилинг — сизга керакли ечим, мутахассис ва хизматни таклиф этамиз.",
    construction_materials: "Қурилиш материалларини етказиб бериш",
    construction_materials_desc: "Биз ҳар қандай ҳажм ва мураккабликдаги қурилиш учун юқори сифатли материалларни етказиб берамиз. Ҳамкорларимиз ишончли ишлаб чиқарувчилар бўлган танланган барча, сифатли ва рақобатбардош калькуляцияли",
    technical_equipment: "Техник ускуналар билан таъминлаш",
    logistics: "Комплектация ва логистика",
    more_details: "Батафсил",
    customer_feedback: "Мижозларимизнинг биз ҳақимизда фикрлари",
    customer_news: "NOA Builders'дан эксклюзив янгиликлар ва таклифлар!",
    customer_recommendations: "Тавсияларимиз, шарҳларимиз ва энг сўнгги қурилиш соҳасидаги янгиликлар билан биринчилардан бўлиб хабардор бўлинг ва энг сўнгги янгиликлар ва таклифлар бўйинг.",
    customer_subscribe: "Обуна бўлиш",
    construction_support: "Қурилиш лойиҳаларингизни юқори сифатли материаллар ва замонавий ускуналар билан қўллаб-қувватлаймиз.",
    construction_materials: "Қурилиш материаллари",
    technical_equipment: "Техник ускуналар",
    logistics: "Комплектация ва логистика",
    contact_info: "Боғланиш учун маълумотлар",
    tashkent_city: "Тошкент шаҳри",
    independence_street: "Мустақиллик кўчаси 25",
        cardTitle: "Қурилиш материаллари етказиб бериш",
  email: "Электрон почтангизни киритинг",
  contact_navbar: "Контакт",
  catalog_products: "Маҳсулот каталоги",
    feedback_1: "NOA Builders жамоаси лойиҳанинг ҳар бир босқичида ўз профессионаллиги ва сифатга бўлган ёндашуви билан мени ҳайратда қолдирди. Ишни ўз вақтида ва юқори стандартларда бажаришди.",
  feedback_2: "NOA Builders билан ишлаш мен учун ажойиб тажриба бўлди. Жамоа қурилиш жараёнида ҳар бир майда деталга эътибор қаратди ва ишни юқори сифат билан бажарди. Рахмат!",
  consaltingTitle: "	Консалтинг, комплектация ва логистика хизматлари",
  consaltingSubtitle: "Қурилиш объектлари учун комплекс етказиб бериш. Материалларни аниқлик билан жўнатиш ва мониторинг қилиш",
    texnikUskunaTitle: "	Техник ускуналар билан таъминлаш",
    texnikaUskunaSubtitle: "Қурилиш машиналари ва механизмлар. Электр жиҳозлари ва асбоб-ускуналар",
    viewAll: "Барчасини кўриш",
    qurilishMaterialTitle: "Қурилиш материаллари бир жойда – Сифатли, тез, ишончли етказиб бериш!",
     hero_titleKonsalt: "Қурилиш учун ишончли таъминот, комплектация ва консалтинг",
     consulting_project_design: "Лойиҳалаштириш бўйича маслаҳатлар",
consulting_project_design_desc: "Қурилиш лойиҳасини учун оптимал ечимлар, дизайн вариантлари ва техник параметрлар бўйича маслаҳатлар.",
consulting_legal_help: "Юридик ёрдам",
consulting_legal_help_desc: "Қурилиш билан боғлиқ ҳуқуқий масалалар, шартномалар, рухсатномалар ва қонунчилик бўйича маслаҳатлар.",
consulting_engineering_services: "Инженерлик хизматлари",
consulting_engineering_services_desc: "Қурилиш лойиҳалари учун техник ҳисобларга ва назоратларга жавоб берувчи мутахассислар.",
consulting_technical_supervision: "Техназор",
consulting_technical_supervision_desc: "Қурилишда ишлатилаётган материаллар ва технологиянинг сифатга қатъий назорат олиб бориш.",
consulting_general_advice: "Строй-маслаҳат",
 qurilish_muhandislari: "Қурилиш муҳандислари",
    elektromontajorlar: "Электромонтажорлар",
     special_service_title: "Бизда махсус хизмат мавжуд:",
    special_service_desc: '"Hire хизматлари" – малакали, аммо вақтинча ишсиз мутахассисларни керакли қурилиш лойиҳаларига йўналтириш.',
     texnikaIshonch: "Қурилиш техникалари – Ҳар қандай лойиҳа учун ишончли ечимлар",
    nimaKerak: "Нега бизнинг техникалардан фойдаланиш керак?",
    ijaragaOlish: "Биздан техникани ижарага олиш ёки логистика хизматларидан фойдаланиш орқали ишингизни енгиллаштирасиз",
    texnikKurik: "Ҳар бир ускуна техник кўрикдан ўтган ва ишончли.",
    servisZaxira: "Захира қисмлари ва сервис хизмати мавжуд.",
    moslashuvchanIjara: "Мослашувчан ижара шартлари – қисқа ва узоқ муддатли лойиҳалар учун.",
    operatorTalim: "Операторлар учун тезкор ўргатиш ва йўриқнома берилади.",
    markazBozor: "Қўйлиқ, Жоме ва Ўрикзор бозорлари маҳсулотлари",
    xizmatToshkent: "Хизматлар Тошкент шаҳри учун",
    texnikaTurlari: "Ҳар хил турдаги техникалар",
    question_1_title: "Сиз — иш излаяпган мутахассисизмиз?",
    question_1_desc: "Биз сизга доимий ёки вақтинча иш топширамиз.",
    
    question_2_title: "Сиз — ишчи кучи излаяпган қурилиш ташкилотисизмиз?",
    question_2_desc: "Биз сизга керакли мутахассисларни топиб, боғлаб берамиз.",
    
    bu_orqali_title: "Бу орқали:",
    
    benefit_1: "Ишсиз мутахассислар иш билан таъминланади",
    benefit_2: "Қурилиш компаниялари вақт ва ресурс тежайди",
    benefit_3: "Иш сифати кўтаради, сабаби ҳар бир уста ўз соҳасининг тажрибали вакили бўлади",
    goplomachlar_shpaklyovkachlar_suvaqchilar_va_boshqa_ustalar: "Гопломачлар, шпакльовкачлар, сувақчилар ва бошқа усталар",
    gast_mutaxassislar: "ГАСТ мутахассислар",
    gast_mutaxassislar_desc: "(газ ва иссиқлик техникаси бўйича)",
    elektrik_xizmat_korsatuvchilar: "Электрик хизмат кўрсатувчилар",
    santexniklar: "Сантехниклар",
    yuborish: "Юбориш",
     yerIshlari_title: "Ёр ишлари учун:",
  yerIshlari_description: "Экскаваторлар (занжирли/г‘илдиракли): қазиш, кўчириш, чуқурлаштириш. Юк ташувчи техника (думпер, тиркамали машиналар)",
  yolAsfalt_title: "Йўл ва асфальт ишлари учун",
  yolAsfalt_description: "Асфальт ётқизгичлар: паверс, Валиклар: вибрацион ва статик, Грейдерлар: йўл юзасини текислаш ва тугатиш ишлари.",
  kotaruv_title: "Кўтарув ускуналари:",
  kotaruv_description: "Автокранлар: бетон плиталар, металл блоклар ва бошқа оғир қурилиш материалларини кўтариш.",
    texnik_uskunadivtitle: "Ҳар қандай техника - катта бетон насосидан кичик генераторгача транспорт логистикаси билан жойингизгача етказилади.",
    mutaxasislar_bilan_taminlash: "Мутахассислар билан таъминлаш",
    consalting_taklif_etamiz: "Биз сизга қуйидаги хизматларимизни таклиф этамиз",
consulting_general_advice_desc: "Қурилиш бўйича суҳбат мутахассислар томонидан берилаётган умумий маслаҳатлар.",
    hero_subtitleKonsalt: "Қурилиш жараёни - бу фақатгина материал ва техникаларга таянмайдиган, балки аниқ режалаштириш, эксперт маслиҳатлари ва тўғри танланган мутахассислар орқали мукаммал натижага эришиладиган мураккаб тизимдир.",
    qurilishMaterialSubtitle: "Биз турли қурилиш босқичлари учун зарур бўлган асосий ва пардозлаш материалларини тўлиқ етказиб беришни таклиф қиламиз. Маҳсулотларимиз юқори сифатли бўлиб, стандартларга жавоб беради ва оммавий ҳамда индивидуал қурилиш учун мос келади."
  },
  uz: {
    navbar_home_text: "Bosh sahifa",
    product_catalog: "Mijozlarimiz fikrlari",
    login: "Kirish",
    ourProjects: "Bizning loyihalarimiz",
    hero_title: "Qurilish uchun ishonchli ta'minot va komplektatsiya",
    hero_subtitle: "Biz NOA Builders - qurilish loyihalaringizni yuqori sifatli materiallar, zamonaviy uskunalar va kompleks ta'minot bilan qo'llab-quvvatlaymiz. Bizning maqsadimiz - sizning qurilish jarayonlaringizni tez, samarali va ishonchli ta'minlashdir.",
    modern_equipment: "Zamonaviy uslub",
    successful_clients: "Mijozlar",
    successful_projects: "Muvaffaqiyatli loyihalar",
    delivery_construction_materials: "Qurilish materiallari yetkazib berish",
    building_materials: "Beton, tsement, g'isht, armatura, qoplama va pardozlash materiallari",
    technical_equipment: "Texnik uskunalar bilan ta'minlash",
    construction_machinery: "Qurilish mashinalari va mexanizmlar. Elektr jihozlari va uskunalar",
    logistics: "Komplektatsiya va logistika",
    complex_delivery: "Qurilish obyektlari uchun kompleks yetkazib berish. Materiallarni aniq bir joyga yetkazish va monitoring qilish",
    xizmatlar: "Bizning xizmatlar",
    construction_materials: "Qurilish materiallarini yetkazib berish",
    construction_materials_desc: "Biz har qanday hajm va murakkablikdagi qurilish uchun yuqori sifatli materiallarni yetkazib beramiz. Hamkorlarimiz ishonchli ishlab chiqaruvchilar bo'lgan tanlangan barcha, sifatli va raqobatbardosh kalkulatsiyali",
    technical_equipment: "Texnik uskunalar bilan ta'minlash",
    logistics: "Komplektatsiya va logistika",
    more_details: "Batafsil",
   why_noa_builders: "Nega aynan NOA Builders kompaniyasi?",
  guaranteed_quality: "Kafolatlangan sifat va ishonchli materiallar",
  guaranteed_quality_desc: "Biz faqat sertifikatlangan, yuqori sifatli qurilish materiallari bilan ta'minlaymiz. Har bir mahsulot mustahkamlik, chidamlilik va ekologik xavfsizlik standartlariga javob beradi.",
  modern_approach: "Kompleks yondashuv va zamonaviy texnologiyalar",
  modern_approach_desc: "NOA Builders nafaqat qurilish materiallarini yetkazib beradi, balki texnik uskunalar bilan ta'minlash va kompleks logistika xizmatlarini ham ko'rsatadi.",
  fast_delivery: "Tezkor yetkazib berish",
  fast_delivery_desc: "Biz har bir mijozning ehtiyojini inobatga olib, xizmatlarimizni individual tarzda samarali taqsim etamiz.",
    footer_uptitle: "Bizning xizmatlarimiz orqali texnologik yechimlar yanada qulayroq!",
    message: "Salom",
    features_title: "Bizning xususiyatlarimiz",
    feature_1: "24/7 Qo'llab-quvvatlash",
    feature_2: "Ishonchlilik",
    feature_3: "Oddiylik",
    quick_links_title: "Tez havolalar",
    about_us: "Biz haqimizda",
    services: "Xizmatlar",
    home: "Bosh sahifa",
     construction_problem:
      "Qurilishdagi har qanday muammo bo‘yicha bizga murojaat qiling — sizga kerakli yechim, mutaxassis va xizmatni taklif etamiz.",
    contact: "Nega aynan biz?",
    customer_feedback: "Mijozlarimizning biz haqimizda fikrlari",
    customer_news: "NOA Builders'dan ekskluziv yangiliklar va takliflar!",
    customer_recommendations: "Tavsiyalarimiz, sharhlarimiz va eng so'nggi qurilish sohasidagi yangiliklar bilan birinchilardan bo'lib xabardor bo'ling va eng so'nggi yangiliklar va takliflar bo'ying.",
    customer_subscribe: "Obuna bo'lish",
    construction_support: "Qurilish loyihalaringizni yuqori sifatli materiallar va zamonaviy uskunalar bilan qo'llab-quvvatlaymiz.",
    construction_materials: "Qurilish materiallari",
    technical_equipment: "Texnik uskunalar",
    logistics: "Komplektatsiya va logistika",
    contact_info: "Bog'lanish uchun ma'lumotlar",
    tashkent_city: "Toshkent shahri",
    independence_street: "Mustaqillik ko'chasi 25",
     contact_navbar: "Kontakt",
  catalog_products: "Mahsulot katalogi",
  cardTitle: "Qurilish materiallari yetkazib berish",
     feedback_1: "NOA Builders jamoasi loyihaning har bir bosqichida o'z professionalligi va sifatga bo'lgan yondashuvi bilan meni hayratda qoldirdi. Ishni o'z vaqtida va yuqori standartlarda bajarishdi.",
  feedback_2: "NOA Builders bilan ishlash men uchun ajoyib tajriba bo'ldi. Jamoa qurilish jarayonida har bir mayda detalga e'tibor qaratdi va ishni yuqori sifat bilan bajardi. Rahmat!",
  email: "Emailingizni kiriting",
  consaltingTitle: "Konsalting, komplektatsiya va logistika xizmatlari",
  consaltingSubtitle: "	Qurilish ob’ektlari uchun kompleks yetkazib berish. Materiallarni aniqlik bilan jo‘natish va monitoring qilish",
    texnikUskunaTitle: "Texnik uskunalar bilan ta’minlash",
    texnikaUskunaSubtitle: "	Qurilish mashinalari va mexanizmlar. Elektr jihozlari va asbob-uskunalar",
    viewAll: "Barchasini ko'rish",
    qurilishMaterialTitle: "Qurilish materiallari bir joyda – Sifatli, tez, ishonchli yetkazib berish!",
     hero_titleKonsalt: "Qurilish uchun ishonchli ta'minot, komplektatsiya va konsalting",
     consulting_project_design: "Loyihalashtirish bo'yicha maslahatlar",
consulting_project_design_desc: "Qurilish loyihasini uchun optimal yechimlar, dizayn variantlari va texnik parametrlar bo'yicha maslahatlar.",
consulting_legal_help: "Yuridik yordam",
consulting_legal_help_desc: "Qurilish bilan bog'liq huquqiy masalalar, shartnomalar, ruxsatnomalar va qonunchilik bo'yicha maslahatlar.",
consulting_engineering_services: "Injenerlik xizmatlari",
consulting_engineering_services_desc: "Qurilish loyihalari uchun texnik hisoblarga va nazoratlarga javob beruvchi mutaxassislar.",
consulting_technical_supervision: "Texnazor",
consulting_technical_supervision_desc: "Qurilishda ishlatilayotgan materiallar va texnologiyaning sifatiga qat'iy nazorat olib borish.",
consulting_general_advice: "Stroy-maslahat",
consulting_general_advice_desc: "Qurilish bo'yicha sohbat mutaxassislar tomonidan berilayotgan umumiy maslahatlar.",
qurilish_muhandislari: "Qurilish muhandislari",
    elektromontajorlar: "Elektromontajorlar",
    goplomachlar_shpaklyovkachlar_suvaqchilar_va_boshqa_ustalar: "Goplomachlar, shpaklyovkachlar, suvaqchilar va boshqa ustalar",
    gast_mutaxassislar: "GAST mutaxassislar",
    gast_mutaxassislar_desc: "(gaz va issiqlik texnikasi bo'yicha)",
    elektrik_xizmat_korsatuvchilar: "Elektrik xizmat ko'rsatuvchilar",
    santexniklar: "Santexniklar",
    special_service_title: "Bizda maxsus xizmat mavjud:",
    special_service_desc: '"Hire xizmatlari" – malakalı, ammo vaqtincha ishsiz mutaxassislarni kerakli qurilish loyihalariga yo\'naltirish.',
    
    question_1_title: "Siz — ish izlayotgan mutaxassisizmiz?",
    question_1_desc: "Biz sizga doimiy yoki vaqtincha ish topshiramiz.",
      texnikaIshonch: "Qurilish texnikalari – Har qanday loyiha uchun ishonchli yechimlar",
    nimaKerak: "Nega bizning texnikalardan foydalanish kerak?",
    ijaragaOlish: "Bizdan texnikalarni ijaraga olish yoki logistika xizmatlaridan foydalanish orqali ishlaringizni osonlashtirasiz",
    texnikKurik: "Har bir uskuna texnik ko'rikdan o'tgan va ishonchli.",
    servisZaxira: "Zaxira qismlari va servis xizmati mavjud.",
    moslashuvchanIjara: "Moslashuvchan ijaraga olish shartlari - qisqa va uzoq muddatli loyihalar uchun.",
    operatorTalim: "Operatorlar uchun tezkor o'rgatish va yo'riqnoma beriladi.",
    markazBozor: "Qo'yliq bozor, Jome Bozor, O'rikzor bozor mahsulotlari",
    xizmatToshkent: "Xizmatlar Toshkent shahri uchun",
    texnikaTurlari: "Har xil turdagi texnikalar",
    question_2_title: "Siz — ishchi kuchi izlayotgan qurilish tashkilotisizmiz?",
    question_2_desc: "Biz sizga kerakli mutaxassislarni topib, bog'lab beramiz.",
    mutaxasislar_bilan_taminlash: "Mutaxassislar bilan ta'minlash",
    bu_orqali_title: "Bu orqali:",
    consalting_taklif_etamiz: "Biz sizga quyidagi xizmatlarimizni taklif etamiz",
    benefit_1: "Ishsiz mutaxassislar ish bilan ta'minlanadi",
    benefit_2: "Qurilish kompaniyalari vaqt va resurs tejaydi",
    yuborish: "Yuborish",
     yerIshlari_title: "Yer ishlari uchun:",
  yerIshlari_description: "Ekskavatorlar (zanjirli/g‘ildirakli): qazish, ko‘chirish, chuqurlashtirish. Yuk tashuvchi texnika (dumper, tirkamali mashinalar)",
  yolAsfalt_title: "Yo‘l va asfalt ishlari uchun",
  yolAsfalt_description: "Asfalt yotqizgichlar: pavers, Valiklar: vibratsion va statik, Graderlar: yo‘l yuzasini tekislash va tugatish ishlari.",
  kotaruv_title: "Ko‘taruv uskunalari:",
  kotaruv_description: "Avtokranlar: beton plitalar, metall bloklar va boshqa og‘ir qurilish materiallarini ko‘tarish.",
    texnik_uskunadivtitle: "Har qanday texnika - katta beton nasosidan kichik generatorgacha transport logistikasi bilan joyingizgacha yetkaziladi.",
    benefit_3: "Ish sifati ko'tariladi, sababi har bir usta o'z sohasining tajribali vakili bo'ladi",
    hero_subtitleKonsalt: "Qurilish jarayoni — bu faqatgina material va texnikalarga tayanmaydigan, balki aniq rejalashtirish, ekspert maslahatlari va to'g'ri tanlangan mutaxassislar orqali mukammal natijaga erishiladigan murakkab tizimdir.",
    qurilishMaterialSubtitle: "Biz turli qurilish bosqichlari uchun zarur bo‘lgan asosiy va pardozlash materiallarini to‘liq yetkazib berishni taklif qilamiz. Mahsulotlarimiz yuqori sifatli bo‘lib, standartlarga javob beradi va ommaviy hamda individual qurilish uchun mos keladi."
  }
};


const i18n = createI18n({
  locale: "uz",
  fallbackLocale: "en",
  messages,
});

export default i18n;
