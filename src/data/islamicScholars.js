export const categories = [
    { id:'All', en: 'All Fields', ar: 'الكل', icon: 'assets/icons/all.png' },//0
    { id: 'Mathematics', en: 'Mathematics', ar: 'الرياضيات', icon: 'assets/icons/maths.png' },//1
    { id: 'Astronomy', en: 'Astronomy', ar: 'الفلك', icon: 'assets/icons/astronomy.png' },//2
    { id: 'Medicine', en: 'Medicine', ar: 'الطب', icon: 'assets/icons/medicine.png' },//3
    { id: 'Physics', en: 'Physics', ar: 'الفيزياء', icon: 'assets/icons/physics.png' },//4
    { id: 'Chemistry', en: 'Chemistry', ar: 'الكيمياء', icon: 'assets/icons/chemistry.png' },//5
    { id: 'Philosophy', en: 'Philosophy', ar: 'الفلسفة', icon: 'assets/icons/philosophy.png' },//6
    { id: 'History', en: 'History', ar: 'التاريخ', icon: 'assets/icons/history.png' },//7
    { id: 'Geography', en: 'Geography', ar: 'الجغرافيا', icon: 'assets/icons/geography.png' },//8
    { id: 'Sociology', en: 'Sociology', ar: 'الإجتماع', icon: 'assets/icons/sociology.png' },//9
    { id: 'Economics', en: 'Economics', ar: 'الإقتصاد', icon: 'assets/icons/economy.png' },//10
    { id: 'Optics', en: 'Optics', ar: 'البصريات', icon: 'assets/icons/optical.png'},//11
    { id: 'Surgery', en: 'Surgery', ar: 'الجراحة', icon: 'assets/icons/surgery.png'},//12
    { id: 'Anatomy', en: 'Anatomy', ar: 'التشريح', icon: 'assets/icons/anatomy.png'},//13
    { id: 'Alchemy', en: 'Alchemy', ar: 'الخيمياء', icon: 'assets/icons/alchemy.png'},//14
    { id: 'Logic', en: 'Logic', ar: 'المنطق', icon: 'assets/icons/logic.png'},//15
    { id: 'Law', en: 'Law', ar: 'القانون', icon: 'assets/icons/law.png'},//16
    { id: 'Theology', en: 'Theology', ar: 'اللاهوت', icon: 'assets/icons/theology.png'},//17
    { id: 'Cartography', en: 'Cartography', ar: 'رسم الخرائط', icon: 'assets/icons/map.png'},//18
    { id: 'Travel', en: 'Travel', ar: 'السفر', icon: 'assets/icons/travel.png'},//19
    { id: 'Biology', en: 'Biology', ar: 'الأحياء', icon: 'assets/icons/biology.png'},//20
    { id: 'Literature', en: 'Literature', ar: 'الأدب', icon: 'assets/icons/literature.png'},//21
];

export const scholars = [
  {
    id: 1,
    name: {
      en: "Muhammad ibn Musa al-Khwarizmi",
      ar: "محمد بن موسى الخوارزمي"
    },
    title: {
      en: "The Father of Algebra",
      ar: "أبو الجبر"
    },
    birth: "780",
    death: "850",
    birthplace: {
      en: "Khwarezm (  Uzbekistan)",
      ar: "خوارزم (أوزبكستان حاليًا)"
    },
    field: [categories[1].id, categories[2].id, categories[8].id],
    contributions: {
      en: [
        "Founded algebra as an independent mathematical discipline",
        "Introduced algorithms, later named after him",
        "Advanced astronomical calculations and tables",
        "Popularized Hindu-Arabic numerals"
      ],
      ar: [
        "أسس علم الجبر كفرع رياضي مستقل",
        "قدم مفهوم الخوارزميات التي سميت باسمه",
        "طور الحسابات والجداول الفلكية",
        "نشر استخدام الأرقام الهندية العربية"
      ]
    },
    famousWorks: [
      {
        title: "الكتاب المختصر في حساب الجبر والمقابلة",
        translation: "The Compendious Book on Calculation by Completion and Balancing"
      }
    ],
    quote: {
      en: "Knowledge is the foundation upon which certainty is built.",
      ar: "العلم هو الأساس الذي تُبنى عليه اليقينيات."
    },
    image: "/assets/images/scholars/khawarizmi.jpg",
    legacy: {
      en: "Who laid the mathematical foundations of algebra and algorithmic thinking",
      ar: "من وضع الأسس الرياضية لعلم الجبر والتفكير الخوارزمي "
    }
  },

  {
    id: 2,
    name: {
      en: "Ahmad ibn Muhammad ibn Kathir al-Farghani",
      ar: "أحمد بن محمد بن كثير الفرغاني"
    },
    title: {
      en: "Pioneer of Astronomical Measurement",
      ar: "رائد القياسات الفلكية"
    },
    birth: "805",
    death: "880",
    birthplace: {
      en: "Farghana (Central Asia)",
      ar: "فرغانة (آسيا الوسطى)"
    },
    field: [categories[2].id, categories[1].id],
    contributions: {
      en: [
        "Measured the diameter of the Earth",
        "Influenced European astronomy through Latin translations"
      ],
      ar: [
        "قاس محيط الأرض بدقة",
        "أثر في علم الفلك الأوروبي عبر الترجمات اللاتينية"
      ]
    },
    famousWorks: [
      {
        title: "كتاب في الحركات السماوية وجوامع علم النجوم",
        translation: "Elements of Astronomy on the Celestial Motions"
      }
    ],
    quote: {
      en: "The heavens follow laws no less precise than those of numbers.",
      ar: "تخضع السماوات لقوانين لا تقل دقة عن قوانين الأعداد."
    },
    image: "/assets/images/scholars/farghani.png",
    legacy: {
      en: "Who his works shaped medieval astronomical understanding in both East and West",
      ar: "من أسهمت أعماله في تشكيل الفهم الفلكي في الشرق والغرب "
    }
  },

  {
    id: 3,
    name: {
      en: "Abu Rayhan al-Biruni",
      ar: "أبو الريحان البيروني"
    },
    title: {
      en: "Master of the Sciences",
      ar: "عالم العلوم"
    },
    birth: "973",
    death: "1048",
    birthplace: {
      en: "Khwarezm",
      ar: "خوارزم"
    },
    field: [categories[2].id, categories[4].id, categories[8].id, categories[1].id],
    contributions: {
      en: [
        "Calculated Earth's radius with remarkable accuracy",
        "Advanced comparative cultural studies",
        "Developed scientific geography"
      ],
      ar: [
        "حسب نصف قطر الأرض بدقة مذهلة",
        "أسس للدراسات الحضارية المقارنة",
        "طور علم الجغرافيا العلمية"
      ]
    },
    famousWorks: [
      {
        title: "تحقيق ما للهند من مقولة مقبولة في العقل أو مرذولة",
        translation: "Critical Study of What India Says"
      }
    ],
    quote: {
      en: "Truth is sought for its own sake, not for victory in argument.",
      ar: "تُطلب الحقيقة لذاتها، لا للغلبة في الجدل."
    },
    image: "/assets/images/scholars/al_bayrouni.jpg",
    legacy: {
      en: "who exemplified objective, experimental scholarship centuries ahead of his time",
      ar: "من جسد البحث العلمي الموضوعي والتجريبي قبل عصره بقرون"
    }
  },

  {
    id: 4,
    name: {
      en: "Ibn Sina (Avicenna)",
      ar: "ابن سينا"
    },
    title: {
      en: "Prince of Physicians",
      ar: "أمير الأطباء"
    },
    birth: "980",
    death: "1037",
    birthplace: {
      en: "Afshana (Bukhara region)",
      ar: "أفشنة (منطقة بخارى)"
    },
    field: [categories[3].id, categories[6].id],
    contributions: {
      en: [
        "Systematized medical knowledge",
        "Integrated philosophy with medicine"
      ],
      ar: [
        "نظم المعرفة الطبية",
        "دمج الفلسفة بالطب"
      ]
    },
    famousWorks: [
      {
        title: "القانون في الطب",
        translation: "The Canon of Medicine"
      }
    ],
    quote: {
      en: "Medicine is the art of preserving health and curing disease.",
      ar: "الطب هو فن حفظ الصحة وبرء المرض."
    },
    image: "/assets/images/scholars/ibno_sina.jpg",
    legacy: {
      en: "Who his medical encyclopedia remained authoritative for centuries",
      ar: "من ظل كتابه الطبي مرجعًا أساسيًا لقرون طويلة"
    }
  },

  {
    id: 5,
    name: {
      en: "Ibn al-Haytham",
      ar: "ابن الهيثم"
    },
    title: {
      en: "Father of Optics",
      ar: "رائد علم البصريات"
    },
    birth: "965",
    death: "1040",
    birthplace: {
      en: "Basra",
      ar: "البصرة"
    },
    field: [categories[4].id, "Optics"],
    contributions: {
      en: [
        "Established experimental scientific method",
        "Explained vision through light reflection"
      ],
      ar: [
        "أسس المنهج العلمي التجريبي",
        "فسر الإبصار بانعكاس الضوء"
      ]
    },
    famousWorks: [
      {
        title: "كتاب المناظر",
        translation: "The Book of Optics"
      }
    ],
    quote: {
      en: "The seeker of truth is not one who studies the writings of the ancients, but one who questions them.",
      ar: "طالب الحقيقة ليس من يدرس كتب القدماء فحسب، بل من يشكك فيها."
    },
    image: "/assets/images/scholars/Ibn_Haytam.jpg",
    legacy: {
      en: "Who laid the foundations of modern optics and experimental science",
      ar: "من وضع الأسس الحديثة لعلم البصريات والمنهج التجريبي"
    }
  },

    {
    id: 6,
    name: {
      en: "Abu Bakr Muhammad ibn Zakariya al-Razi",
      ar: "أبو بكر محمد بن زكريا الرازي"
    },
    title: {
      en: "Pioneer of Clinical Medicine",
      ar: "رائد الطب السريري"
    },
    birth: "865",
    death: "925",
    birthplace: {
      en: "Rayy (  Iran)",
      ar: "الري (إيران حاليًا)"
    },
    field: [categories[3].id, categories[5].id],
    contributions: {
      en: [
        "Differentiated between smallpox and measles",
        "Advanced clinical observation and diagnosis",
        "Developed chemical substances for medical use"
      ],
      ar: [
        "ميز بين الجدري والحصبة",
        "طور الملاحظة السريرية والتشخيص",
        "استخدم المواد الكيميائية في العلاج الطبي"
      ]
    },
    famousWorks: [
      {
        title: "الحاوي في الطب",
        translation: "The Comprehensive Book of Medicine"
      }
    ],
    quote: {
      en: "When you can heal, do so; when you cannot, do no harm.",
      ar: "إذا استطعت العلاج فافعل، وإن لم تستطع فلا تُلحق الضرر."
    },
    image: "/assets/images/scholars/al_razi.jfif",
    legacy: {
      en: "Who transformed medicine into an evidence-based clinical science",
      ar: "من حوّل الطب إلى علم قائم على الملاحظة والدليل"
    }
  },

  {
    id: 7,
    name: {
      en: "Abu al-Qasim al-Zahrawi",
      ar: "أبو القاسم الزهراوي"
    },
    title: {
      en: "Father of Surgery",
      ar: "أبو الجراحة"
    },
    birth: "936",
    death: "1013",
    birthplace: {
      en: "Cordoba, Al-Andalus",
      ar: "قرطبة، الأندلس"
    },
    field: [categories[3].id, "Surgery"],
    contributions: {
      en: [
        "Invented surgical instruments",
        "Established surgery as a scientific discipline"
      ],
      ar: [
        "اخترع أدوات جراحية متقدمة",
        "أسس الجراحة كعلم مستقل"
      ]
    },
    famousWorks: [
      {
        title: "التصريف لمن عجز عن التأليف",
        translation: "The Method of Medicine"
      }
    ],
    quote: {
      en: "A physician must act with both knowledge and compassion.",
      ar: "يجب على الطبيب أن يعمل بعلم ورحمة."
    },
    image: "/assets/images/scholars/al_zahrawi.png",
    legacy: {
      en: "Who his surgical manuals influenced Europe for centuries",
      ar: "من أثرت كتبه الجراحية في أوروبا لقرون طويلة"
    }
  },

  {
    id: 8,
    name: {
      en: "Ibn al-Nafis",
      ar: "ابن النفيس"
    },
    title: {
      en: "Discoverer of Pulmonary Circulation",
      ar: "مكتشف الدورة الدموية الصغرى"
    },
    birth: "1213",
    death: "1288",
    birthplace: {
      en: "Damascus",
      ar: "دمشق"
    },
    field: [categories[3].id, "Anatomy"],
    contributions: {
      en: [
        "Discovered pulmonary blood circulation",
        "Corrected Galenic anatomy"
      ],
      ar: [
        "اكتشف الدورة الدموية الرئوية",
        "صحح أخطاء جالينوس التشريحية"
      ]
    },
    famousWorks: [
      {
        title: "شرح تشريح القانون",
        translation: "Commentary on the Anatomy of the Canon"
      }
    ],
    quote: {
      en: "Truth is revealed through observation, not imitation.",
      ar: "الحقيقة تُدرك بالملاحظة لا بالتقليد."
    },
    image: "/assets/images/scholars/ibn_nafis.png",
    legacy: {
      en: "Who revolutionized human anatomical understanding",
      ar: "من أحدث ثورة في فهم تشريح الإنسان"
    }
  },

  {
    id: 9,
    name: {
      en: "Jabir ibn Hayyan",
      ar: "جابر بن حيان"
    },
    title: {
      en: "Father of Chemistry",
      ar: "أبو الكيمياء"
    },
    birth: "721",
    death: "815",
    birthplace: {
      en: "Kufa",
      ar: "الكوفة"
    },
    field: [categories[5].id, "Alchemy"],
    contributions: {
      en: [
        "Introduced experimental methods in chemistry",
        "Developed distillation and crystallization"
      ],
      ar: [
        "أدخل المنهج التجريبي إلى الكيمياء",
        "طور التقطير والتبلور"
      ]
    },
    famousWorks: [
      {
        title: "كتاب الكيمياء",
        translation: "The Book of Chemistry"
      }
    ],
    quote: {
      en: "Experiment is the path to certainty.",
      ar: "التجربة هي الطريق إلى اليقين."
    },
    image: "/assets/images/scholars/ibn_hayyan.png",
    legacy: {
      en: "Who laid the foundations of modern chemical science",
      ar: "من وضع أسس علم الكيمياء الحديث"
    }
  },

  {
    id: 10,
    name: {
      en: "Al-Kindi",
      ar: "الكندي"
    },
    title: {
      en: "Philosopher of the Arabs",
      ar: "فيلسوف العرب"
    },
    birth: "801",
    death: "873",
    birthplace: {
      en: "Kufa",
      ar: "الكوفة"
    },
    field: [categories[6].id, categories[1].id, categories[4].id],
    contributions: {
      en: [
        "Integrated Greek philosophy into Islamic thought",
        "Applied mathematics to natural sciences"
      ],
      ar: [
        "دمج الفلسفة اليونانية بالفكر الإسلامي",
        "طبق الرياضيات على العلوم الطبيعية"
      ]
    },
    famousWorks: [
      {
        title: "رسالة في الفلسفة الأولى",
        translation: "Treatise on First Philosophy"
      }
    ],
    quote: {
      en: "We must not be ashamed to appreciate truth from any source.",
      ar: "لا ينبغي أن نستحي من قبول الحق من أي مصدر."
    },
    image: "/assets/images/scholars/al_kindi.jfif",
    legacy: {
      en: "Who opened the door for philosophical inquiry in Islam",
      ar: "من فتح باب البحث الفلسفي في الحضارة الإسلامية"
    }
  },

  {
    id: 11,
    name: {
      en: "Al-Farabi",
      ar: "الفارابي"
    },
    title: {
      en: "Second Teacher",
      ar: "المعلم الثاني"
    },
    birth: "872",
    death: "950",
    birthplace: {
      en: "Farab",
      ar: "فاراب"
    },
    field: [categories[6].id, "Logic"],
    contributions: {
      en: [
        "Developed political philosophy",
        "Systematized logic"
      ],
      ar: [
        "طور الفلسفة السياسية",
        "نظم علم المنطق"
      ]
    },
    famousWorks: [
      {
        title: "آراء أهل المدينة الفاضلة",
        translation: "The Virtuous City"
      }
    ],
    quote: {
      en: "The aim of philosophy is human perfection.",
      ar: "غاية الفلسفة هي كمال الإنسان."
    },
    image: "/assets/images/scholars/al_farabi.jfif",
    legacy: {
      en: "Who profoundly shaped Islamic and Western philosophy",
      ar: "من أثر بعمق في الفلسفة الإسلامية والغربية"
    }
  },

  {
    id: 12,
    name: {
      en: "Ibn Rushd (Averroes)",
      ar: "ابن رشد"
    },
    title: {
      en: "Defender of Reason",
      ar: "نصير العقل"
    },
    birth: "1126",
    death: "1198",
    birthplace: {
      en: "Cordoba",
      ar: "قرطبة"
    },
    field: [categories[6].id, "Law", categories[3].id],
    contributions: {
      en: [
        "Defended rational philosophy",
        "Commented extensively on Aristotle"
      ],
      ar: [
        "دافع عن الفلسفة العقلية",
        "شرح مؤلفات أرسطو"
      ]
    },
    famousWorks: [
      {
        title: "تهافت التهافت",
        translation: "The Incoherence of the Incoherence"
      }
    ],
    quote: {
      en: "Ignorance leads to fear; fear leads to oppression.",
      ar: "الجهل يولد الخوف، والخوف يولد الاستبداد."
    },
    image: "/assets/images/scholars/ibn_rushd.jpg",
    legacy: {
      en: "Who influenced European Enlightenment thinkers",
      ar: "من أثر في مفكري عصر التنوير الأوروبي"
    }
  },

  {
    id: 13,
    name: {
      en: "Al-Ghazali",
      ar: "أبو حامد الغزالي"
    },
    title: {
      en: "Renewer of the Faith",
      ar: "حجة الإسلام"
    },
    birth: "1058",
    death: "1111",
    birthplace: {
      en: "Tus",
      ar: "طوس"
    },
    field: ["Theology", categories[6].id],
    contributions: {
      en: [
        "Reconciled faith and reason",
        "Critiqued excessive rationalism"
      ],
      ar: [
        "وفق بين العقل والدين",
        "نقد الإفراط في العقلانية"
      ]
    },
    famousWorks: [
      {
        title: "إحياء علوم الدين",
        translation: "Revival of the Religious Sciences"
      }
    ],
    quote: {
      en: "Knowledge without action is wastefulness.",
      ar: "العلم بلا عمل هو تبذير."
    },
    image: "/assets/images/scholars/al_ghazali.jpg",
    legacy: {
      en: "Who reshaped Islamic theology and ethics",
      ar: "من أعاد تشكيل علم الكلام والأخلاق الإسلامية"
    }
  },

  {
    id: 14,
    name: {
      en: "Al-Idrisi",
      ar: "الإدريسي"
    },
    title: {
      en: "Master Cartographer",
      ar: "إمام الجغرافيين"
    },
    birth: "1100",
    death: "1165",
    birthplace: {
      en: "Ceuta",
      ar: "سبتة"
    },
    field: [categories[8].id, "Cartography"],
    contributions: {
      en: [
        "Created accurate world maps",
        "Advanced geographic documentation"
      ],
      ar: [
        "رسم خرائط دقيقة للعالم",
        "طور التوثيق الجغرافي"
      ]
    },
    famousWorks: [
      {
        title: "نزهة المشتاق في اختراق الآفاق",
        translation: "The Pleasure of Him Who Longs to Cross the Horizons"
      }
    ],
    quote: {
      en: "The Earth reveals itself to those who observe it carefully.",
      ar: "تكشف الأرض أسرارها لمن يتأملها."
    },
    image: "/assets/images/scholars/al_idrissi.png",
    legacy: {
      en: "Who his maps guided explorers for centuries",
      ar: "من وجهت خرائطه الرحالة لقرون طويلة"
    }
  },

  {
    id: 15,
    name: {
      en: "Ibn Battuta",
      ar: "ابن بطوطة"
    },
    title: {
      en: "The Great Traveler",
      ar: "أمير الرحالة"
    },
    birth: "1304",
    death: "1369",
    birthplace: {
      en: "Tangier",
      ar: "طنجة"
    },
    field: [categories[8].id, "Travel"],
    contributions: {
      en: [
        "Documented cultures across three continents",
        "Expanded geographic knowledge"
      ],
      ar: [
        "وثق حضارات ثلاث قارات",
        "وسع المعرفة الجغرافية"
      ]
    },
    famousWorks: [
      {
        title: "تحفة النظار في غرائب الأمصار",
        translation: "The Gift to Those Who Contemplate the Wonders of Cities"
      }
    ],
    quote: {
      en: "Travel leaves you speechless, then turns you into a storyteller.",
      ar: "السفر يجعلك عاجزًا عن الكلام، ثم يحولك إلى راوٍ."
    },
    image: "/assets/images/scholars/ibn_batouta.jpg",
    legacy: {
      en: "Who left one of the greatest travel records in history",
      ar: "من ترك أعظم سجل رحلات في التاريخ"
    }
  },

  {
    id: 16,
    name: {
      en: "Ibn Khaldun",
      ar: "ابن خلدون"
    },
    title: {
      en: "Founder of Sociology",
      ar: "مؤسس علم الاجتماع"
    },
    birth: "1332",
    death: "1406",
    birthplace: {
      en: "Tunis",
      ar: "تونس"
    },
    field: [categories[7].id, categories[9].id, categories[10].id],
    contributions: {
      en: [
        "Founded social science methodology",
        "Analyzed rise and fall of civilizations"
      ],
      ar: [
        "أسس المنهج العلمي لعلم الاجتماع",
        "حلل قيام وسقوط الحضارات"
      ]
    },
    famousWorks: [
      {
        title: "المقدمة",
        translation: "The Muqaddimah"
      }
    ],
    quote: {
      en: "Civilization is a process, not a constant state.",
      ar: "العمران عملية وليس حالة ثابتة."
    },
    image: "/assets/images/scholars/ibn_khaldoun.png",
    legacy: {
      en: "Who pioneered modern historical and sociological analysis",
      ar: "من سبق عصره في التحليل التاريخي والاجتماعي"
    }
  },
    {
    id: 17,
    name: {
      en: "Al-Battani",
      ar: "البتاني"
    },
    title: {
      en: "Master Astronomer",
      ar: "إمام علم الفلك"
    },
    birth: "858",
    death: "929",
    birthplace: {
      en: "Harran, Upper Mesopotamia (Turkey)",
      ar: "حرّان، الجزيرة الفراتية (تركيا حاليًا)"
    },
    field: [categories[2].id, categories[1].id],
    contributions: {
      en: [
        "Refined measurements of the solar year",
        "Advanced trigonometry using sine and tangent"
      ],
      ar: [
        "حسّن قياس السنة الشمسية",
        "طور علم المثلثات باستخدام الجيب والظل"
      ]
    },
    famousWorks: [
      {
        title: "الزيج الصابي",
        translation: "The Sabian Astronomical Tables"
      }
    ],
    quote: {
      en: "Precision is the soul of astronomical truth.",
      ar: "الدقة هي روح الحقيقة الفلكية."
    },
    image: "/assets/images/scholars/albatani.gif",
    legacy: {
      en: "Who his calculations influenced Copernicus and later astronomers",
      ar: "من أثرت حساباته في كوبرنيكوس ومن جاء بعده"
    }
  },

  {
    id: 18,
    name: {
      en: "Nasir al-Din al-Tusi",
      ar: "نصير الدين الطوسي"
    },
    title: {
      en: "Architect of Astronomical Theory",
      ar: "مهندس النظرية الفلكية"
    },
    birth: "1201",
    death: "1274",
    birthplace: {
      en: "Tus, Khorasan (Iran)",
      ar: "طوس، خراسان (إيران حاليًا)"
    },
    field: [categories[2].id, categories[1].id],
    contributions: {
      en: [
        "Developed the Tusi Couple",
        "Founded the Maragha Observatory"
      ],
      ar: [
        "ابتكر زوج الطوسي",
        "أسس مرصد مراغة"
      ]
    },
    famousWorks: [
      {
        title: "تحرير المجسطي",
        translation: "Commentary on the Almagest"
      }
    ],
    quote: {
      en: "Mathematics unveils the hidden order of the universe.",
      ar: "تكشف الرياضيات النظام الخفي للكون."
    },
    image: "/assets/images/scholars/al_tusi.jfif",
    legacy: {
      en: "Who reshaped planetary models before the Copernican revolution",
      ar: "من أعاد تشكيل النماذج الكوكبية قبل الثورة الكوبرنيكية"
    }
  },

  {
    id: 19,
    name: {
      en: "Abd al-Rahman al-Sufi",
      ar: "عبد الرحمن الصوفي"
    },
    title: {
      en: "Observer of the Fixed Stars",
      ar: "راصد النجوم الثابتة"
    },
    birth: "903",
    death: "986",
    birthplace: {
      en: "Rayy, Jibal region (Iran)",
      ar: "الري، إقليم الجبال (إيران حاليًا)"
    },
    field: [categories[2].id],
    contributions: {
      en: [
        "Cataloged stars with precise magnitudes",
        "Documented the Andromeda Galaxy"
      ],
      ar: [
        "فهرس النجوم بدرجات سطوع دقيقة",
        "وثق مجرة أندروميدا"
      ]
    },
    famousWorks: [
      {
        title: "كتاب صور الكواكب الثابتة",
        translation: "The Book of Fixed Stars"
      }
    ],
    quote: {
      en: "The heavens are a manuscript written in light.",
      ar: "السماء مخطوطة مكتوبة بالنور."
    },
    image: "/assets/images/scholars/soufi.png",
    legacy: {
      en: "Who his stellar observations remained authoritative for centuries",
      ar: "من ظلت أرصاده النجمية مرجعًا لقرون"
    }
  },

  {
    id: 20,
    name: {
      en: "Thabit ibn Qurra",
      ar: "ثابت بن قرة"
    },
    title: {
      en: "Mathematical Innovator",
      ar: "مجدد الرياضيات"
    },
    birth: "826",
    death: "901",
    birthplace: {
      en: "Harran, Upper Mesopotamia (Turkey)",
      ar: "حرّان، الجزيرة الفراتية (تركيا حاليًا)"
    },
    field: [categories[1].id, categories[2].id, categories[4].id],
    contributions: {
      en: [
        "Advanced number theory",
        "Translated and expanded Greek science"
      ],
      ar: [
        "طور نظرية الأعداد",
        "ترجم ووسّع العلوم اليونانية"
      ]
    },
    famousWorks: [
      {
        title: "كتاب في تحليل المسائل الهندسية",
        translation: "Treatise on Geometric Analysis"
      }
    ],
    quote: {
      en: "Numbers reveal truths beyond perception.",
      ar: "تكشف الأعداد حقائق تتجاوز الإدراك."
    },
    image: "/assets/images/scholars/ibn_qurra.jfif",
    legacy: {
      en: "Who bridged ancient mathematics and Islamic innovation",
      ar: "من ربط بين الرياضيات القديمة والابتكار الإسلامي"
    }
  },
  {
    id: 21,
    name: {
      en: "Al-Masudi",
      ar: "المسعودي"
    },
    title: {
      en: "Historian of the World",
      ar: "مؤرخ العالم"
    },
    birth: "896",
    death: "956",
    birthplace: {
      en: "Baghdad, Abbasid Caliphate (Iraq)",
      ar: "بغداد، الخلافة العباسية (العراق حاليًا)"
    },
    field: [categories[7].id, categories[8].id],
    contributions: {
      en: [
        "Integrated history with geography",
        "Documented global civilizations"
      ],
      ar: [
        "دمج التاريخ بالجغرافيا",
        "وثق حضارات العالم"
      ]
    },
    famousWorks: [
      {
        title: "مروج الذهب ومعادن الجوهر",
        translation: "The Meadows of Gold"
      }
    ],
    quote: {
      en: "History is the mirror in which nations see themselves.",
      ar: "التاريخ مرآة ترى فيها الأمم نفسها."
    },
    image: "/assets/images/scholars/masudi.png",
    legacy: {
      en: "Who pioneered global historical writing",
      ar: "من كان من أوائل من كتب التاريخ العالمي"
    }
  },

  {
    id: 22,
    name: {
      en: "Qutb al-Din al-Shirazi",
      ar: "قطب الدين الشيرازي"
    },
    title: {
      en: "Interpreter of Light",
      ar: "مفسر الظواهر الضوئية"
    },
    birth: "1236",
    death: "1311",
    birthplace: {
      en: "Shiraz, Fars region (Iran)",
      ar: "شيراز، إقليم فارس (إيران حاليًا)"
    },
    field: [categories[4].id, categories[2].id],
    contributions: {
      en: [
        "Explained rainbow formation scientifically",
        "Expanded optical theories"
      ],
      ar: [
        "فسر تكون قوس قزح علميًا",
        "وسع نظريات علم البصريات"
      ]
    },
    famousWorks: [
      {
        title: "نهاية الإدراك في دراية الأفلاك",
        translation: "The Limits of Knowledge in Astronomy"
      }
    ],
    quote: {
      en: "Light is the language through which nature speaks.",
      ar: "الضوء هو لغة الطبيعة."
    },
    image: "/assets/images/scholars/shirazi.jfif",
    legacy: {
      en: "Who advanced optical physics beyond classical explanations",
      ar: "من طور الفيزياء الضوئية بما تجاوز الشروح الكلاسيكية"
    }
  },
  {
    id: 23,
    name: {
      en: "Al-Jahiz",
      ar: "الجاحظ"
    },
    title: {
      en: "Observer of Life",
      ar: "مراقب الحياة"
    },
    birth: "776",
    death: "868",
    birthplace: {
      en: "Basra, Iraq",
      ar: "البصرة، العراق"
    },
    field: ["Biology", "Literature"],
    contributions: {
      en: [
        "Proposed early ideas of evolution",
        "Studied animal behavior"
      ],
      ar: [
        "قدم أفكارًا مبكرة عن التطور",
        "درس سلوك الحيوانات"
      ]
    },
    famousWorks: [
      {
        title: "كتاب الحيوان",
        translation: "The Book of Animals"
      }
    ],
    quote: {
      en: "Nature is a classroom open to all who observe.",
      ar: "الطبيعة مدرسة مفتوحة لمن يتأمل."
    },
    image: "/assets/images/scholars/jahiz.jpeg",
    legacy: {
      en: "Who anticipated biological concepts centuries ahead of time",
      ar: "من سبق عصره في المفاهيم البيولوجية"
    }
  },

  {
    id: 24,
    name: {
      en: "Omar Khayyam",
      ar: "عمر الخيام"
    },
    title: {
      en: "Poet of Mathematics",
      ar: "شاعر الرياضيات"
    },
    birth: "1048",
    death: "1131",
    birthplace: {
      en: "Nishapur, Khorasan (  Iran)",
      ar: "نيسابور، خراسان (إيران حاليًا)"
    },
    field: [categories[1].id, categories[2].id],
    contributions: {
      en: [
        "Solved cubic equations geometrically",
        "Reformed the Persian calendar"
      ],
      ar: [
        "حل المعادلات التكعيبية هندسيًا",
        "أصلح التقويم الفارسي"
      ]
    },
    famousWorks: [
      {
        title: "رسالة في شرح ما أشكل من مصادرات إقليدس",
        translation: "Treatise on Euclid’s Difficult Postulates"
      }
    ],
    quote: {
      en: "Be happy for this moment; this moment is your life.",
      ar: "كن سعيدًا بهذه اللحظة، فهذه اللحظة هي حياتك."
    },
    image: "/assets/images/scholars/khayyam.png",
    legacy: {
      en: "Who united mathematical rigor with poetic insight",
      ar: "من جمع بين الصرامة الرياضية والعمق الشعري"
    }
  }

];
