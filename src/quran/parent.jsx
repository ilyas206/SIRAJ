import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./app";
import Details from "./details";
export default function Parent(){



    const Quran_sourats = [
        {
            "id": 1,
            "name": "Al-Fatiha - الفاتحة",
            "type": "meccan - مكية",
            "total_verses": 7,
            "description_ar": "سورة الفاتحة، السبع المثاني وأم الكتاب.",
            "description_en": "Surah Al-Fatiha, the Opening, also known as the Seven Oft-Repeated Verses and the Mother of the Book."
        },
        {
            "id": 2,
            "name": "Al-Baqara - البقرة",
            "type": "medinan - مدنية",
            "total_verses": 286,
            "description_ar": "سورة البقرة، أطول سورة في القرآن الكريم.",
            "description_en": "Surah Al-Baqara, the longest chapter in the Quran."
        },
        {
            "id": 3,
            "name": "Al-iimran - آل عمران",
            "type": "medinan - مدنية",
            "total_verses": 200,
            "description_ar": "سورة آل عمران، تركز على أهل الكتاب ودعوتهم إلى الإسلام.",
            "description_en": "Surah Al-i Imran, focusing on the People of the Book and calling them to Islam."
        },
        {
            "id": 4,
            "name": "An-Nisaa - النساء",
            "type": "medinan - مدنية",
            "total_verses": 176,
            "description_ar": "سورة النساء، تتناول الأحكام الاجتماعية والأسرية.",
            "description_en": "Surah An-Nisaa, addressing social and family laws."
        },
        {
            "id": 5,
            "name": "Al-Maida - المائدة",
            "type": "medinan - مدنية",
            "total_verses": 120,
            "description_ar": "سورة المائدة، تتحدث عن الحلال والحرام وأحكام الطهارة.",
            "description_en": "Surah Al-Maida, discussing permissible and forbidden matters and purification rules."
        },
        {
            "id": 6,
            "name": "Al-Anaam - الأنعام",
            "type": "meccan - مكية",
            "total_verses": 165,
            "description_ar": "سورة الأنعام، تناقش التوحيد وعظمة الخالق.",
            "description_en": "Surah Al-Anaam, discussing monotheism and the greatness of the Creator."
        },
        {
            "id": 7,
            "name": "Al-Araf - الأعراف",
            "type": "meccan - مكية",
            "total_verses": 206,
            "description_ar": "سورة الأعراف، تتناول قصص الأنبياء وأقوامهم.",
            "description_en": "Surah Al-Araf, covering the stories of prophets and their peoples."
        },
        {
            "id": 8,
            "name": "Al-Anfal - الأنفال",
            "type": "medinan - مدنية",
            "total_verses": 75,
            "description_ar": "سورة الأنفال، تتناول أحكام الغنائم والجهاد.",
            "description_en": "Surah Al-Anfal, addressing the rules of spoils of war and jihad."
        },
        {
            "id": 9,
            "name": "At-Tawba - التوبة",
            "type": "medinan - مدنية",
            "total_verses": 129,
            "description_ar": "سورة التوبة، تتحدث عن المنافقين وأهل الكتاب.",
            "description_en": "Surah At-Tawba, discussing the hypocrites and the People of the Book."
        },
        {
            "id": 10,
            "name": "Yunus - يونس",
            "type": "meccan - مكية",
            "total_verses": 109,
            "description_ar": "سورة يونس، تركز على الدعوة إلى الإيمان.",
            "description_en": "Surah Yunus, focusing on the call to faith."
        },
        {
            "id": 11,
            "name": "Hud - هود",
            "type": "meccan - مكية",
            "total_verses": 123,
            "description_ar": "سورة هود، تتناول قصص الأنبياء والصبر.",
            "description_en": "Surah Hud, covering the stories of prophets and patience."
        },
        {
            "id": 12,
            "name": "Yusuf - يوسف",
            "type": "meccan - مكية",
            "total_verses": 111,
            "description_ar": "سورة يوسف، تتحدث عن قصة النبي يوسف.",
            "description_en": "Surah Yusuf, telling the story of Prophet Yusuf."
        },
        {
            "id": 13,
            "name": "Ar-Rad - الرعد",
            "type": "meccan - مكية",
            "total_verses": 43,
            "description_ar": "سورة الرعد، تناقش عظمة الله وقدرته.",
            "description_en": "Surah Ar-Rad, discussing Allah's greatness and power."
        },
        {
            "id": 14,
            "name": "Ibrahim - إبراهيم",
            "type": "meccan - مكية",
            "total_verses": 52,
            "description_ar": "سورة إبراهيم، تتحدث عن دعاء النبي إبراهيم.",
            "description_en": "Surah Ibrahim, recounting Prophet Ibrahim's supplication."
        },
        {
            "id": 15,
            "name": "Al-Hijr - الحجر",
            "type": "meccan - مكية",
            "total_verses": 99,
            "description_ar": "سورة الحجر، تتحدث عن عاقبة المكذبين.",
            "description_en": "Surah Al-Hijr, addressing the fate of disbelievers."
        },
        {
            "id": 16,
            "name": "An-Nahl - النحل",
            "type": "meccan - مكية",
            "total_verses": 128,
            "description_ar": "سورة النحل، تناقش نعم الله ووجوب شكره.",
            "description_en": "Surah An-Nahl, discussing Allah's blessings and the necessity of gratitude."
        },
        {
            "id": 17,
            "name": "Al-Israa - الإسراء",
            "type": "meccan - مكية",
            "total_verses": 111,
            "description_ar": "سورة الإسراء، تتحدث عن رحلة الإسراء والمعراج.",
            "description_en": "Surah Al-Israa, addressing the journey of Isra and Miraj."
        },
        {
            "id": 18,
            "name": "Al-Kahf - الكهف",
            "type": "meccan - مكية",
            "total_verses": 110,
            "description_ar": "سورة الكهف، تتناول قصة أهل الكهف ودروسها.",
            "description_en": "Surah Al-Kahf, covering the story of the People of the Cave and its lessons."
        },
        {
            "id": 19,
            "name": "Maryam - مريم",
            "type": "meccan - مكية",
            "total_verses": 98,
            "description_ar": "سورة مريم، تروي قصة مريم وابنها عيسى.",
            "description_en": "Surah Maryam, narrating the story of Mary and her son Jesus."
        },
        {
            "id": 20,
            "name": "Taha - طه",
            "type": "meccan - مكية",
            "total_verses": 135,
            "description_ar": "سورة طه، تتحدث عن دعوة موسى وفرعون.",
            "description_en": "Surah Taha, focusing on the call of Moses and Pharaoh."
        },
        {
            "id": 21,
            "name": "Al-Anbiya - الأنبياء",
            "type": "meccan - مكية",
            "total_verses": 112,
            "description_ar": "سورة الأنبياء، تتناول قصص الأنبياء ورسالتهم.",
            "description_en": "Surah Al-Anbiya, covering the stories of prophets and their missions."
        },
        {
            "id": 22,
            "name": "Al-Hajj - الحج",
            "type": "medinan - مدنية",
            "total_verses": 78,
            "description_ar": "سورة الحج، تتحدث عن مناسك الحج وعبادة الله.",
            "description_en": "Surah Al-Hajj, addressing the rituals of Hajj and worship of Allah."
        },
        {
            "id": 23,
            "name": "Al-Mu’minun - المؤمنون",
            "type": "meccan - مكية",
            "total_verses": 118,
            "description_ar": "سورة المؤمنون، تصف صفات المؤمنين الصالحين.",
            "description_en": "Surah Al-Mu’minun, describing the qualities of righteous believers."
        },
        {
            "id": 24,
            "name": "An-Nur - النور",
            "type": "medinan - مدنية",
            "total_verses": 64,
            "description_ar": "سورة النور، تركز على الطهارة والآداب العامة.",
            "description_en": "Surah An-Nur, emphasizing purity and public morals."
        },
        {
            "id": 25,
            "name": "Al-Furqan - الفرقان",
            "type": "meccan - مكية",
            "total_verses": 77,
            "description_ar": "سورة الفرقان، تفرق بين الحق والباطل.",
            "description_en": "Surah Al-Furqan, distinguishing between truth and falsehood."
        },
        {
            "id": 26,
            "name": "Ash-Shu’ara - الشعراء",
            "type": "meccan - مكية",
            "total_verses": 227,
            "description_ar": "سورة الشعراء، تروي قصص الأنبياء والتحذير للمكذبين.",
            "description_en": "Surah Ash-Shu’ara, recounting the stories of prophets and warnings to disbelievers."
        },
        {
            "id": 27,
            "name": "An-Naml - النمل",
            "type": "meccan - مكية",
            "total_verses": 93,
            "description_ar": "سورة النمل، تتحدث عن سليمان والنملة.",
            "description_en": "Surah An-Naml, addressing Solomon and the ant."
        },
        {
            "id": 28,
            "name": "Al-Qasas - القصص",
            "type": "meccan - مكية",
            "total_verses": 88,
            "description_ar": "سورة القصص، تتناول قصة موسى من ولادته.",
            "description_en": "Surah Al-Qasas, narrating the story of Moses from his birth."
        },
        {
            "id": 29,
            "name": "Al-Ankabut - العنكبوت",
            "type": "meccan - مكية",
            "total_verses": 69,
            "description_ar": "سورة العنكبوت، تتحدث عن الاختبار في الإيمان.",
            "description_en": "Surah Al-Ankabut, discussing tests in faith."
        },
        {
            "id": 30,
            "name": "Ar-Rum - الروم",
            "type": "meccan - مكية",
            "total_verses": 60,
            "description_ar": "سورة الروم، تتحدث عن انتصار الروم ودلالات التوحيد.",
            "description_en": "Surah Ar-Rum, mentioning the Roman victory and signs of monotheism."
        },
        {
            "id": 31,
            "name": "Luqman - لقمان",
            "type": "meccan - مكية",
            "total_verses": 34,
            "description_ar": "سورة لقمان، تحتوي على وصايا لقمان الحكيم.",
            "description_en": "Surah Luqman, containing the wise advice of Luqman."
        },
        {
            "id": 32,
            "name": "As-Sajda - السجدة",
            "type": "meccan - مكية",
            "total_verses": 30,
            "description_ar": "سورة السجدة، تتحدث عن خلق الإنسان وإحياء الموتى.",
            "description_en": "Surah As-Sajda, discussing human creation and resurrection."
        },
        {
            "id": 33,
            "name": "Al-Ahzab - الأحزاب",
            "type": "medinan - مدنية",
            "total_verses": 73,
            "description_ar": "سورة الأحزاب، تتحدث عن غزوة الأحزاب وأحكام الأسرة.",
            "description_en": "Surah Al-Ahzab, discussing the Battle of the Trench and family rulings."
        },
        {
            "id": 34,
            "name": "Saba - سبأ",
            "type": "meccan - مكية",
            "total_verses": 54,
            "description_ar": "سورة سبأ، تذكر نعم الله وقصة قوم سبأ.",
            "description_en": "Surah Saba, mentioning Allah's blessings and the story of the people of Saba."
        },
        {
            "id": 35,
            "name": "Fatir - فاطر",
            "type": "meccan - مكية",
            "total_verses": 45,
            "description_ar": "سورة فاطر، تتحدث عن عظمة خلق الله وحث البشر على الإيمان.",
            "description_en": "Surah Fatir, discussing the greatness of Allah’s creation and urging faith."
        },
        {
            "id": 36,
            "name": "Ya-Sin - يس",
            "type": "meccan - مكية",
            "total_verses": 83,
            "description_ar": "سورة يس، تُعرف بقلب القرآن وتتناول التوحيد والبعث.",
            "description_en": "Surah Ya-Sin, known as the heart of the Quran, addresses monotheism and resurrection."
        },
        {
            "id": 37,
            "name": "As-Saffat - الصافات",
            "type": "meccan - مكية",
            "total_verses": 182,
            "description_ar": "سورة الصافات، تركز على التوحيد وقصص الأنبياء.",
            "description_en": "Surah As-Saffat, focusing on monotheism and the stories of prophets."
        },
        {
            "id": 38,
            "name": "Sad - ص",
            "type": "meccan - مكية",
            "total_verses": 88,
            "description_ar": "سورة ص، تتحدث عن الأنبياء ودعوة التوحيد.",
            "description_en": "Surah Sad, discussing prophets and the call to monotheism."
        },
        {
            "id": 39,
            "name": "Az-Zumar - الزمر",
            "type": "meccan - مكية",
            "total_verses": 75,
            "description_ar": "سورة الزمر، تركز على التوحيد وأهوال يوم القيامة.",
            "description_en": "Surah Az-Zumar, emphasizing monotheism and the horrors of the Day of Judgment."
        },
        {
            "id": 40,
            "name": "Ghafir - غافر",
            "type": "meccan - مكية",
            "total_verses": 85,
            "description_ar": "سورة غافر، تتحدث عن رحمة الله وعقاب المكذبين.",
            "description_en": "Surah Ghafir, discussing Allah’s mercy and punishment of disbelievers."
        },
        {
            "id": 41,
            "name": "Fussilat - فصلت",
            "type": "meccan - مكية",
            "total_verses": 54,
            "description_ar": "سورة فصلت، تركز على الإيمان وعجائب خلق الله.",
            "description_en": "Surah Fussilat, focusing on faith and the wonders of Allah’s creation."
        },
        {
            "id": 42,
            "name": "Ash-Shura - الشورى",
            "type": "meccan - مكية",
            "total_verses": 53,
            "description_ar": "سورة الشورى، تدعو إلى التشاور وتوحيد الله.",
            "description_en": "Surah Ash-Shura, calling for mutual consultation and belief in Allah's oneness."
        },
        {
            "id": 43,
            "name": "Az-Zukhruf - الزخرف",
            "type": "meccan - مكية",
            "total_verses": 89,
            "description_ar": "سورة الزخرف، تحذر من التعلق بالزينة الدنيوية.",
            "description_en": "Surah Az-Zukhruf, warning against attachment to worldly adornments."
        },
        {
            "id": 44,
            "name": "Ad-Dukhan - الدخان",
            "type": "meccan - مكية",
            "total_verses": 59,
            "description_ar": "سورة الدخان، تتحدث عن إنذار المكذبين وأهوال القيامة.",
            "description_en": "Surah Ad-Dukhan, warning disbelievers and describing the horrors of the Day of Judgment."
        },
        {
            "id": 45,
            "name": "Al-Jathiya - الجاثية",
            "type": "meccan - مكية",
            "total_verses": 37,
            "description_ar": "سورة الجاثية، تركز على عاقبة الأمم المكذبة.",
            "description_en": "Surah Al-Jathiya, focusing on the fate of disbelieving nations."
        },
        {
            "id": 46,
            "name": "Al-Ahqaf - الأحقاف",
            "type": "meccan - مكية",
            "total_verses": 35,
            "description_ar": "سورة الأحقاف، تتحدث عن قوم عاد وتحذير المكذبين.",
            "description_en": "Surah Al-Ahqaf, discussing the people of Aad and warnings to disbelievers."
        },
        {
            "id": 47,
            "name": "Muhammad - محمد",
            "type": "medinan - مدنية",
            "total_verses": 38,
            "description_ar": "سورة محمد، تركز على الجهاد ودعوة الإسلام.",
            "description_en": "Surah Muhammad, focusing on jihad and the call to Islam."
        },
        {
            "id": 48,
            "name": "Al-Fath - الفتح",
            "type": "medinan - مدنية",
            "total_verses": 29,
            "description_ar": "سورة الفتح، تتحدث عن صلح الحديبية ونصر الله.",
            "description_en": "Surah Al-Fath, discussing the Treaty of Hudaybiyyah and Allah’s victory."
        },
        {
            "id": 49,
            "name": "Al-Hujurat - الحجرات",
            "type": "medinan - مدنية",
            "total_verses": 18,
            "description_ar": "سورة الحجرات، تركز على الأخلاق وآداب المجتمع الإسلامي.",
            "description_en": "Surah Al-Hujurat, emphasizing ethics and manners in Islamic society."
        },
        {
            "id": 50,
            "name": "Qaf - ق",
            "type": "meccan - مكية",
            "total_verses": 45,
            "description_ar": "سورة ق، تتحدث عن البعث وأدلة التوحيد.",
            "description_en": "Surah Qaf, addressing resurrection and proofs of monotheism."
        },
        {
            "id": 51,
            "name": "Adh-Dhariyat - الذاريات",
            "type": "meccan - مكية",
            "total_verses": 60,
            "description_ar": "سورة الذاريات، تركز على البعث والجزاء.",
            "description_en": "Surah Adh-Dhariyat, emphasizing resurrection and recompense."
        },
        {
            "id": 52,
            "name": "At-Tur - الطور",
            "type": "meccan - مكية",
            "total_verses": 49,
            "description_ar": "سورة الطور، تتحدث عن أهوال القيامة.",
            "description_en": "Surah At-Tur, discussing the terrors of the Day of Judgment."
        },
        {
            "id": 53,
            "name": "An-Najm - النجم",
            "type": "meccan - مكية",
            "total_verses": 62,
            "description_ar": "سورة النجم، تتحدث عن الوحي ومعجزة الإسراء والمعراج.",
            "description_en": "Surah An-Najm, addressing revelation and the miracle of Isra and Mi'raj."
        },
        {
            "id": 54,
            "name": "Al-Qamar - القمر",
            "type": "meccan - مكية",
            "total_verses": 55,
            "description_ar": "سورة القمر، تذكر انشقاق القمر وتحذيرات الله للأمم السابقة.",
            "description_en": "Surah Al-Qamar, mentioning the splitting of the moon and Allah’s warnings to past nations."
        },
        {
            "id": 55,
            "name": "Ar-Rahman - الرحمن",
            "type": "medinan - مدنية",
            "total_verses": 78,
            "description_ar": "سورة الرحمن، تُظهر نعم الله على الإنس والجن.",
            "description_en": "Surah Ar-Rahman, highlighting Allah’s blessings upon humans and jinn."
        },
        {
            "id": 56,
            "name": "Al-Waqia - الواقعة",
            "type": "meccan - مكية",
            "total_verses": 96,
            "description_ar": "سورة الواقعة، تتحدث عن أهوال يوم القيامة وتصنيف الناس.",
            "description_en": "Surah Al-Waqia, describing the horrors of the Day of Judgment and classifying people."
        },
        {
            "id": 57,
            "name": "Al-Hadid - الحديد",
            "type": "medinan - مدنية",
            "total_verses": 29,
            "description_ar": "سورة الحديد، تتحدث عن أهمية الإيمان والعمل الصالح.",
            "description_en": "Surah Al-Hadid, emphasizing the importance of faith and good deeds."
        },
        {
            "id": 58,
            "name": "Al-Mujadila - المجادلة",
            "type": "medinan - مدنية",
            "total_verses": 22,
            "description_ar": "سورة المجادلة، تناقش قضايا اجتماعية وأخلاقية.",
            "description_en": "Surah Al-Mujadila, addressing social and ethical issues."
        },
        {
            "id": 59,
            "name": "Al-Hashr - الحشر",
            "type": "medinan - مدنية",
            "total_verses": 24,
            "description_ar": "سورة الحشر، تصف إجلاء بني النضير وعظمة الله.",
            "description_en": "Surah Al-Hashr, describing the expulsion of Banu Nadir and Allah’s greatness."
        },
        {
            "id": 60,
            "name": "Al-Mumtahina - الممتحنة",
            "type": "medinan - مدنية",
            "total_verses": 13,
            "description_ar": "سورة الممتحنة، تحث على الولاء للإسلام وتجنب أعداء الدين.",
            "description_en": "Surah Al-Mumtahina, urging loyalty to Islam and avoiding enmity with Allah’s adversaries."
        },
        {
            "id": 61,
            "name": "As-Saff - الصف",
            "type": "medinan - مدنية",
            "total_verses": 14,
            "description_ar": "سورة الصف، تدعو إلى الجهاد في سبيل الله.",
            "description_en": "Surah As-Saff, calling for striving in Allah’s cause."
        },
        {
            "id": 62,
            "name": "Al-Jumu'a - الجمعة",
            "type": "medinan - مدنية",
            "total_verses": 11,
            "description_ar": "سورة الجمعة، تتحدث عن فضل يوم الجمعة وأهمية الصلاة.",
            "description_en": "Surah Al-Jumu'a, discussing the virtue of Friday and the importance of prayer."
        },
        {
            "id": 63,
            "name": "Al-Munafiqun - المنافقون",
            "type": "medinan - مدنية",
            "total_verses": 11,
            "description_ar": "سورة المنافقون، تكشف نفاق المنافقين وتحذر المؤمنين.",
            "description_en": "Surah Al-Munafiqun, exposing the hypocrisy of the hypocrites and warning the believers."
        },
        {
            "id": 64,
            "name": "At-Taghabun - التغابن",
            "type": "medinan - مدنية",
            "total_verses": 18,
            "description_ar": "سورة التغابن، تركز على البعث وحساب الأعمال.",
            "description_en": "Surah At-Taghabun, focusing on resurrection and accountability for deeds."
        },
        {
            "id": 65,
            "name": "At-Talaq - الطلاق",
            "type": "medinan - مدنية",
            "total_verses": 12,
            "description_ar": "سورة الطلاق، تتناول أحكام الطلاق وأهمية التقوى.",
            "description_en": "Surah At-Talaq, discussing the rules of divorce and the importance of piety."
        },
        {
            "id": 66,
            "name": "At-Tahrim - التحريم",
            "type": "medinan - مدنية",
            "total_verses": 12,
            "description_ar": "سورة التحريم، تناقش مواقف النبي وتحذيرات للمؤمنين.",
            "description_en": "Surah At-Tahrim, discussing the Prophet’s situations and warnings for the believers."
        },
        {
            "id": 67,
            "name": "Al-Mulk - الملك",
            "type": "meccan - مكية",
            "total_verses": 30,
            "description_ar": "سورة الملك، تتحدث عن عظمة الله في الكون.",
            "description_en": "Surah Al-Mulk, addressing Allah’s greatness in the universe."
        },
        {
            "id": 68,
            "name": "Al-Qalam - القلم",
            "type": "meccan - مكية",
            "total_verses": 52,
            "description_ar": "سورة القلم، تتحدث عن أخلاق النبي وتحذير المكذبين.",
            "description_en": "Surah Al-Qalam, discussing the Prophet’s character and warning disbelievers."
        },
        {
            "id": 69,
            "name": "Al-Haqqa - الحاقة",
            "type": "meccan - مكية",
            "total_verses": 52,
            "description_ar": "سورة الحاقة، تصف يوم القيامة وعاقبة الكافرين.",
            "description_en": "Surah Al-Haqqa, describing the Day of Judgment and the fate of disbelievers."
        },
        {
            "id": 70,
            "name": "Al-Ma'arij - المعارج",
            "type": "meccan - مكية",
            "total_verses": 44,
            "description_ar": "سورة المعارج، تناقش أهوال القيامة وأخلاق المؤمنين.",
            "description_en": "Surah Al-Ma'arij, discussing the horrors of the Day of Judgment and the virtues of believers."
        },
        {
            "id": 71,
            "name": "Nuh - نوح",
            "type": "meccan - مكية",
            "total_verses": 28,
            "description_ar": "سورة نوح، تسرد دعوة نوح وصبره مع قومه.",
            "description_en": "Surah Nuh, recounting Prophet Nuh’s call and his patience with his people."
        },
        {
            "id": 72,
            "name": "Al-Jinn - الجن",
            "type": "meccan - مكية",
            "total_verses": 28,
            "description_ar": "سورة الجن، تتحدث عن استماع الجن للقرآن وإيمانهم.",
            "description_en": "Surah Al-Jinn, discussing the jinn listening to the Quran and their faith."
        },
        {
            "id": 73,
            "name": "Al-Muzzammil - المزمل",
            "type": "meccan - مكية",
            "total_verses": 20,
            "description_ar": "سورة المزمل، تحث على قيام الليل والصبر.",
            "description_en": "Surah Al-Muzzammil, urging night prayer and patience."
        },
        {
            "id": 74,
            "name": "Al-Muddathir - المدثر",
            "type": "meccan - مكية",
            "total_verses": 56,
            "description_ar": "سورة المدثر، تدعو النبي إلى الدعوة وتحذر المكذبين.",
            "description_en": "Surah Al-Muddathir, calling the Prophet to preach and warning disbelievers."
        },
        {
            "id": 75,
            "name": "Al-Qiyama - القيامة",
            "type": "meccan - مكية",
            "total_verses": 40,
            "description_ar": "سورة القيامة، تتحدث عن يوم القيامة والحساب.",
            "description_en": "Surah Al-Qiyama, discussing the Day of Resurrection and the accountability."
        },
        {
            "id": 76,
            "name": "Al-Insan - الإنسان",
            "type": "medinan - مدنية",
            "total_verses": 31,
            "description_ar": "سورة الإنسان، تتناول خلق الإنسان وفضل أهل الجنة.",
            "description_en": "Surah Al-Insan, discussing the creation of humans and the virtues of the people of Paradise."
        },
        {
            "id": 77,
            "name": "Al-Mursalat - المرسلات",
            "type": "meccan - مكية",
            "total_verses": 50,
            "description_ar": "سورة المرسلات، تتحدث عن رسل الله وتحدي المكذبين.",
            "description_en": "Surah Al-Mursalat, talking about Allah’s messengers and challenging the disbelievers."
        },
        {
            "id": 78,
            "name": "An-Naba - النبأ",
            "type": "meccan - مكية",
            "total_verses": 40,
            "description_ar": "سورة النبأ، تسرد أحداث يوم القيامة وتهديد المكذبين.",
            "description_en": "Surah An-Naba, recounting the events of the Day of Judgment and threatening the disbelievers."
        },
        {
            "id": 79,
            "name": "An-Nazi'at - النازعات",
            "type": "meccan - مكية",
            "total_verses": 46,
            "description_ar": "سورة النازعات، تتحدث عن أهوال يوم القيامة ومصير الكافرين.",
            "description_en": "Surah An-Nazi'at, describing the horrors of the Day of Judgment and the fate of the disbelievers."
        },
        {
            "id": 80,
            "name": "Abasa - عبس",
            "type": "meccan - مكية",
            "total_verses": 42,
            "description_ar": "سورة عبس، تحذر من إهمال الناس الضعفاء في الدعوة.",
            "description_en": "Surah Abasa, warning against neglecting the poor and weak in the call to Islam."
        },
        {
            "id": 81,
            "name": "At-Takwir - التكوير",
            "type": "meccan - مكية",
            "total_verses": 29,
            "description_ar": "سورة التكوير، تصف أحداث يوم القيامة.",
            "description_en": "Surah At-Takwir, describing the events of the Day of Judgment."
        },
        {
            "id": 82,
            "name": "Al-Infitar - الإنفطار",
            "type": "meccan - مكية",
            "total_verses": 19,
            "description_ar": "سورة الإنفطار، تصف مشاهد القيامة وتخويف المكذبين.",
            "description_en": "Surah Al-Infitar, describing the scenes of the Day of Judgment and warning the disbelievers."
        },
        {
            "id": 83,
            "name": "Al-Mutaffifin - المطففين",
            "type": "meccan - مكية",
            "total_verses": 36,
            "description_ar": "سورة المطففين، تحذر من الغش والخداع في المعاملات.",
            "description_en": "Surah Al-Mutaffifin, warning against dishonesty and fraud in trade."
        },
        {
            "id": 84,
            "name": "Al-Inshiqaq - الإنشقاق",
            "type": "meccan - مكية",
            "total_verses": 25,
            "description_ar": "سورة الإنشقاق، تصف الانشقاق العظيم للسماء في يوم القيامة.",
            "description_en": "Surah Al-Inshiqaq, describing the great splitting of the sky on the Day of Judgment."
        },
        {
            "id": 85,
            "name": "Al-Buruj - البروج",
            "type": "meccan - مكية",
            "total_verses": 22,
            "description_ar": "سورة البروج، تحكي عن القصص العبرة لأمم سابقة.",
            "description_en": "Surah Al-Buruj, narrating the stories of past nations as lessons."
        },
        {
            "id": 86,
            "name": "At-Tariq - الطارق",
            "type": "meccan - مكية",
            "total_verses": 17,
            "description_ar": "سورة الطارق، تتحدث عن أحداث عظيمة في الكون.",
            "description_en": "Surah At-Tariq, discussing great events in the universe."
        },
        {
            "id": 87,
            "name": "Al-A'la - الأعلى",
            "type": "meccan - مكية",
            "total_verses": 19,
            "description_ar": "سورة الأعلى، تتحدث عن عظمة الله ونعمه.",
            "description_en": "Surah Al-A'la, describing the greatness of Allah and His blessings."
        },
        {
            "id": 88,
            "name": "Al-Ghashiyah - الغاشية",
            "type": "meccan - مكية",
            "total_verses": 26,
            "description_ar": "سورة الغاشية، تصف مشاهد يوم القيامة وعواقب الكافرين.",
            "description_en": "Surah Al-Ghashiyah, describing the scenes of the Day of Judgment and the consequences for the disbelievers."
        },
        {
            "id": 89,
            "name": "Al-Fajr - الفجر",
            "type": "meccan - مكية",
            "total_verses": 30,
            "description_ar": "سورة الفجر، تحذر من استكبار الأمم السابقة.",
            "description_en": "Surah Al-Fajr, warning against the arrogance of past nations."
        },
        {
            "id": 90,
            "name": "Al-Balad - البلد",
            "type": "meccan - مكية",
            "total_verses": 20,
            "description_ar": "سورة البلد، تتحدث عن الابتلاءات والأخلاق الإنسانية.",
            "description_en": "Surah Al-Balad, discussing trials and human ethics."
        },
        {
            "id": 91,
            "name": "Ash-Shams - الشمس",
            "type": "meccan - مكية",
            "total_verses": 15,
            "description_ar": "سورة الشمس، تُظهر علاقة الإنسان بالقيم النبيلة.",
            "description_en": "Surah Ash-Shams, illustrating the relationship between humans and noble values."
        },
        {
            "id": 92,
            "name": "Al-Lail - الليل",
            "type": "meccan - مكية",
            "total_verses": 21,
            "description_ar": "سورة الليل، تدعو للعمل الصالح والتقوى.",
            "description_en": "Surah Al-Lail, urging to good deeds and piety."
        },
        {
            "id": 93,
            "name": "Ad-Duha - الضحى",
            "type": "meccan - مكية",
            "total_verses": 11,
            "description_ar": "سورة الضحى، تتحدث عن رحمة الله وفضله.",
            "description_en": "Surah Ad-Duha, discussing Allah’s mercy and grace."
        },
        {
            "id": 94,
            "name": "Al-Sharh - الشرح",
            "type": "meccan - مكية",
            "total_verses": 8,
            "description_ar": "سورة الشرح، تبين التيسير والراحة التي أرسلها الله للنبي محمد.",
            "description_en": "Surah Al-Sharh, explaining the ease and comfort Allah provided to Prophet Muhammad."
        },
        {
            "id": 95,
            "name": "At-Tin - التين",
            "type": "meccan - مكية",
            "total_verses": 8,
            "description_ar": "سورة التين، تذكر نعم الله على الإنسان ودوره في إيمانه.",
            "description_en": "Surah At-Tin, mentioning the blessings of Allah upon humans and their role in faith."
        },
        {
            "id": 96,
            "name": "Al-Alaq - العلق",
            "type": "meccan - مكية",
            "total_verses": 19,
            "description_ar": "سورة العلق، تتحدث عن أولى آيات القرآن التي نزلت على النبي محمد.",
            "description_en": "Surah Al-Alaq, discussing the first revelations of the Quran to Prophet Muhammad."
        },
        {
            "id": 97,
            "name": "Al-Qadr - القدر",
            "type": "meccan - مكية",
            "total_verses": 5,
            "description_ar": "سورة القدر، تتحدث عن ليلة القدر وفضلها.",
            "description_en": "Surah Al-Qadr, discussing the Night of Decree and its greatness."
        },
        {
            "id": 98,
            "name": "Al-Bayyina - البينة",
            "type": "medinan - مدنية",
            "total_verses": 8,
            "description_ar": "سورة البينة، تؤكد على ضرورة الإيمان برسالة النبي محمد.",
            "description_en": "Surah Al-Bayyina, emphasizing the necessity of believing in the message of Prophet Muhammad."
        },
        {
            "id": 99,
            "name": "Az-Zalzalah - الزلزلة",
            "type": "medinan - مدنية",
            "total_verses": 8,
            "description_ar": "سورة الزلزلة، تصف الزلزال العظيم في يوم القيامة.",
            "description_en": "Surah Az-Zalzalah, describing the great earthquake on the Day of Judgment."
        },
        {
            "id": 100,
            "name": "Al-Adiyat - العاديات",
            "type": "meccan - مكية",
            "total_verses": 11,
            "description_ar": "سورة العاديات، تتحدث عن الغزو والركوب في سبيل الله.",
            "description_en": "Surah Al-Adiyat, discussing the horses charging in the cause of Allah."
        },
        {
            "id": 101,
            "name": "Al-Qari'ah - القارعة",
            "type": "meccan - مكية",
            "total_verses": 11,
            "description_ar": "سورة القارعة، تصف يوم القيامة ونتائج الأعمال.",
            "description_en": "Surah Al-Qari'ah, describing the Day of Judgment and the consequences of actions."
        },
        {
            "id": 102,
            "name": "At-Takathur - التكاثر",
            "type": "meccan - مكية",
            "total_verses": 8,
            "description_ar": "سورة التكاثر، تحذر من التفاخر بالمال والجاه.",
            "description_en": "Surah At-Takathur, warning against boasting of wealth and status."
        },
        {
            "id": 103,
            "name": "Al-Asr - العصر",
            "type": "meccan - مكية",
            "total_verses": 3,
            "description_ar": "سورة العصر، تحث على العمل الصالح والتواصي بالحق.",
            "description_en": "Surah Al-Asr, urging righteous deeds and mutual encouragement in truth."
        },
        {
            "id": 104,
            "name": "Al-Humazah - الهمزة",
            "type": "meccan - مكية",
            "total_verses": 9,
            "description_ar": "سورة الهمزة، تحذر من عواقب الطعن في الناس والنميمة.",
            "description_en": "Surah Al-Humazah, warning against backbiting and slandering others."
        },
        {
            "id": 105,
            "name": "Al-Fil - الفيل",
            "type": "meccan - مكية",
            "total_verses": 5,
            "description_ar": "سورة الفيل، تروي قصة هجوم أبرهة على مكة وتدمير جيشه.",
            "description_en": "Surah Al-Fil, narrating the story of Abraha's attack on Mecca and the destruction of his army."
        },
        {
            "id": 106,
            "name": "Quraish - قريش",
            "type": "meccan - مكية",
            "total_verses": 4,
            "description_ar": "سورة قريش، تذكر نعمة الله على قبيلة قريش.",
            "description_en": "Surah Quraish, mentioning the blessings of Allah upon the tribe of Quraish."
        },
        {
            "id": 107,
            "name": "Al-Ma'un - الماعون",
            "type": "meccan - مكية",
            "total_verses": 7,
            "description_ar": "سورة الماعون، تحذر من الإعراض عن الفقراء والمحتاجين.",
            "description_en": "Surah Al-Ma'un, warning against neglecting the poor and needy."
        },
        {
            "id": 108,
            "name": "Al-Kawthar - الكوثر",
            "type": "meccan - مكية",
            "total_verses": 3,
            "description_ar": "سورة الكوثر، تذكر نعمة الله الكبرى للنبي محمد.",
            "description_en": "Surah Al-Kawthar, mentioning Allah’s greatest blessing upon Prophet Muhammad."
        },
        {
            "id": 109,
            "name": "Al-Kafirun - الكافرون",
            "type": "meccan - مكية",
            "total_verses": 6,
            "description_ar": "سورة الكافرون، تبين عدم التوافق بين الإسلام والكفر.",
            "description_en": "Surah Al-Kafirun, highlighting the incompatibility between Islam and disbelief."
        },
        {
            "id": 110,
            "name": "An-Nasr - النصر",
            "type": "medinan - مدنية",
            "total_verses": 3,
            "description_ar": "سورة النصر، تتحدث عن انتصار الإسلام ودخول الناس في دين الله.",
            "description_en": "Surah An-Nasr, discussing the victory of Islam and the people entering the religion of Allah."
        },
        {
            "id": 111,
            "name": "Al-Masad - المسد",
            "type": "meccan - مكية",
            "total_verses": 5,
            "description_ar": "سورة المسد، تحذر من عقاب أبي لهب وزوجته.",
            "description_en": "Surah Al-Masad, warning about the punishment of Abu Lahab and his wife."
        },
        {
            "id": 112,
            "name": "Al-Ikhlas - الإخلاص",
            "type": "meccan - مكية",
            "total_verses": 4,
            "description_ar": "سورة الإخلاص، تبيّن توحيد الله بشكل مختصر.",
            "description_en": "Surah Al-Ikhlas, emphasizing the oneness of Allah in a concise manner."
        },
        {
            "id": 113,
            "name": "Al-Falaq - الفلق",
            "type": "meccan - مكية",
            "total_verses": 5,
            "description_ar": "سورة الفلق، تطلب من الله الحماية من الشرور.",
            "description_en": "Surah Al-Falaq, asking Allah for protection from evil forces."
        },
        {
            "id": 114,
            "name": "An-Nas - الناس",
            "type": "meccan - مكية",
            "total_verses": 6,
            "description_ar": "سورة الناس، تطلب من الله الحماية من شر الوسواس.",
            "description_en": "Surah An-Nas, asking Allah for protection from the whisperings of Satan."
        }
    ]   

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App Quran_sourats={Quran_sourats}/>}/>
                    <Route path="/sourah/:id" element={<Details Quran_sourats={Quran_sourats}/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}