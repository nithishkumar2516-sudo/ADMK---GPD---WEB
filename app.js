// ==========================================================================
// AIADMK Gummidipoondi JavaScript Logic
// ==========================================================================

// Translation Dictionary (English and Tamil)
const translations = {
  en: {
    navTitle: "AIADMK",
    navSub: "Gummidipoondi Constituency",
    linkHome: "Home",
    linkLeaders: "Leaders",
    linkAbout: "About Us",
    linkAchievements: "Achievements",
    linkUpdates: "Updates & Events",
    linkJoin: "Join Party",
    navLogin: "Login",
    navRegister: "Register",
    heroBadge: "Official Constituency Portal",
    heroHeading: "Revolutionizing Gummidipoondi Through Dedicated Leadership",
    heroSubtext: "Welcome to the digital gateway of All India Anna Dravida Munnetra Kazhagam (AIADMK) for Gummidipoondi Constituency. Join us in carrying forward the vision of our great leaders.",
    liveCountLabel: "Total Registered Members:",
    heroBtnJoin: "Generate Membership Card",
    heroBtnExplore: "Meet Our Leaders",
    
    // Pillars Dashboard
    leadersTitle: "Pillars of AIADMK",
    leadersSubtitle: "Honoring the visionary leaders who shaped the history, welfare, and progress of Tamil Nadu.",
    annaRole: "C. N. Annadurai (Inspirational Beacon)",
    annaQuote: '"Duty, Dignity, Discipline"',
    mgrRole: "Dr. M. G. Ramachandran (Founder & Former CM)",
    mgrQuote: '"Welfare of the poor is the highest duty of the state"',
    ammaRole: "Dr. J. Jayalalithaa (People's Leader & Former CM)",
    ammaQuote: '"I am by the people, and I am for the people"',
    epsRole: "Edappadi K. Palaniswami (General Secretary)",
    epsQuote: '"Development and public service are our ultimate goals"',
    
    // Group Titles in About Us
    aboutTitle: "Constituency Leadership",
    aboutSubtitle: "Dedicated party functionaries serving the citizens of Gummidipoondi and surrounding Unions.",
    districtGroupTitle: "Thiruvallur North District Party",
    districtSubTitle: "District Secretaries",
    unionSubTitle: "Union Secretaries",

    // Leader Designations (Designations above photos)
    balaramanHeader: "Thiruvallur North District Party Secretary",
    vijayakumarHeader: "District Secretary - Amma Peravai Thiruvallur North",
    sridharHeader: "Gummidipoondi East Union Party Secretary",
    rameshHeader: "Gummidipoondi West Union Party Secretary",
    mahendranHeader: "Gummidipoondi South Union Party Secretary",
    sivakumarHeader: "Gummidipoondi North Union Party Secretary & Former Union Chairman",
    kothandanHeader: "Ellapuram East Union Party Secretary",
    vedhagiriHeader: "Ellapuram West Union Party Secretary",
    prasadHeader: "Poondi East Union Party Secretary",

    // Leader Names (Names below photos, with Thiru prefix)
    balaramanName: "Thiru. Siruniyam P. Balaraman MA., Ex-MLA",
    vijayakumarName: "Thiru. K.S. Vijayakumar Ex-MLA",
    sridharName: "Thiru. S.M. Sridhar B.Sc.",
    rameshName: "Thiru. J. Ramesh Kumar",
    mahendranName: "Thiru. T.C. Mahendran",
    sivakumarName: "Thiru. K.M.S. Sivakumar M.Com.",
    kothandanName: "Thiru. E.K.K. Kothandan",
    vedhagiriName: "Thiru. V.P. Vedhagiri B.Sc.",
    prasadName: "Thiru. B.M. Prasad B.A",

    achievementsTitle: "Historical Achievements",
    achievementsSubtitle: "Key milestones and welfare accomplishments of AIADMK governments from 1972 to the present.",
    ach1972Title: "Foundation of AIADMK (1972)",
    ach1972Text: "Puratchi Thalaivar MGR founded the All India Anna Dravida Munnetra Kazhagam, initiating a new era of grassroots public service and social justice in Tamil Nadu.",
    ach1982Title: "Nutritious Meal Scheme (1982)",
    ach1982Text: "MGR introduced the path-breaking Nutritious Noon Meal Scheme, which drastically improved school enrollment and wiped out malnutrition among children across Tamil Nadu.",
    ach1992Title: "Cradle Baby Scheme (1992)",
    ach1992Text: "Puratchi Thalaivi Amma launched the historic Cradle Baby Scheme to combat female infanticide, saving thousands of female children and ensuring their education.",
    ach2011Title: "Amma Welfare Revolution (2011)",
    ach2011Text: "Introduction of standard welfare revolutions: free laptops for students, gold for marriage assistance (Thalikku Thangam), and free mixies, grinders, and fans for households.",
    ach2013Title: "Amma Unavagam (Canteens) (2013)",
    ach2013Text: "Amma launched the highly acclaimed 'Amma Unavagam' canteens, providing clean, nutritious food at extremely low prices (Re. 1 for Idli, Rs. 5 for Sambar rice) to laborers and students.",
    achEpsTitle: "Edappadiyar's Governance Achievements (2017-2021)",
    achEpsText: "Governance led by Puratchi Thamilar Edappaadiyar: implemented 7.5% reservation for government school students in medical admissions, declared Cauvery Delta as Protected Agricultural Zone, and launched massive highway flyovers and irrigation projects.",
    achGpdDate: "Constituency Focus",
    achGpdTitle: "Gummidipoondi Local Infrastructure Development",
    achGpdText: "Focused implementation of clean drinking water systems in rural wards, laying of high-quality interior roads in agricultural unions, and setting up prompt grievance redressal desks.",
    
    updatesTitle: "Updates & Event Schedules",
    updatesSubtitle: "Stay informed about official AIADMK events, local Gummidipoondi meetings, and news updates.",
    notifHeader: "Notifications & Press Releases",
    tabConstituency: "Gummidipoondi News",
    tabParty: "Party News",
    meetHeader: "Upcoming Event Schedules",
    
    memberTitle: "Get Your AIADMK Membership Card",
    memberSubtitle: "Join the movement! Fill in your details below to generate and download your personalized official Gummidipoondi Constituency Membership Card.",
    formHeader: "Enter Membership Bio Data",
    labelName: "Full Name / பெயர் *",
    labelFather: "Father's / Husband's Name / தந்தை / கணவர் பெயர் *",
    labelDob: "Date of Birth / பிறந்த தேதி *",
    labelAge: "Age / வயது (Auto)",
    labelPhone: "Mobile Number / மொபைல் எண் *",
    labelBlood: "Blood Group / இரத்த வகை *",
    labelUnion: "Union / ஒன்றியம் *",
    labelPhoto: "Upload Photo / புகைப்படம் *",
    optSelect: "Select your Union",
    optBlood: "Select Group",
    btnUpload: "Choose Image",
    fileHint: "Supported formats: JPG, PNG. Passport size recommended.",
    btnGenerate: "Register & Generate Card",
    previewHeader: "Digital Card Preview",
    canvasFront: "Front View (முன்பக்கம்)",
    canvasBack: "Back View (பின்பக்கம்)",
    credHeader: "Membership Registered Successfully!",
    credCardId: "Your Card ID:",
    credPass: "Login PIN (Password):",
    credNote: "Save these credentials. You can use them to login and download your card later.",
    previewHint: "Both sides of the card will be compiled and downloaded as a PDF.",
    btnDownloadText: "Download Card (PDF)",
    footerCopyright: "All Rights Reserved.",
    footerDisclaimer: "Designed for official party joiners & constituency updates.",
    
    memberLoginHeader: "Access Your Membership Card",
    labelPin: "PIN (Password) *",
    btnLoginSubmit: "Login & Retrieve Card",
    welcomeUser: "Welcome,",
    lockedHeader: "Unlock Membership Card Generator",
    lockedSub: "To generate, preview, and download your official Gummidipoondi Constituency Membership Card, please register a new account or log in with your email address."
  },
  ta: {
    navTitle: "அஇஅதிமுக",
    navSub: "கும்மிடிப்பூண்டி சட்டமன்றத் தொகுதி",
    linkHome: "முகப்பு",
    linkLeaders: "தலைவர்கள்",
    linkAbout: "எங்களைப் பற்றி",
    linkAchievements: "சாதனைகள்",
    linkUpdates: "செய்திகள் & நிகழ்வுகள்",
    linkJoin: "கழகத்தில் இணையுங்கள்",
    navLogin: "உள்நுழைவு",
    navRegister: "பதிவு செய்க",
    heroBadge: "அதிகாரப்பூர்வ தொகுதி இணையதளம்",
    heroHeading: "அர்ப்பணிப்புமிக்க தலைமையால் கும்மிடிப்பூண்டியை மாற்றுவோம்",
    heroSubtext: "அனைத்திந்திய அண்ணா திராவிட முன்னேற்றக் கழகத்தின் (அஇஅதிமுக) கும்மிடிப்பூண்டி சட்டமன்றத் தொகுதி அதிகாரப்பூர்வ டிஜிட்டல் தளத்திற்கு உங்களை வரவேற்கிறோம். நமது தலைவர்களின் தொலைநோக்குப் பார்வையைத் தொடர்ந்து முன்னெடுத்துச் செல்ல எங்களுடன் இணையுங்கள்.",
    liveCountLabel: "மொத்தப் பதிவு செய்யப்பட்ட உறுப்பினர்கள்:",
    heroBtnJoin: "உறுப்பினர் அட்டை பெற",
    heroBtnExplore: "எங்கள் தலைவர்களைச் சந்திக்க",
    
    // Pillars Dashboard
    leadersTitle: "அஇஅதிமுகவின் தூண்கள்",
    leadersSubtitle: "தமிழகத்தின் வரலாறு, நல்வாழ்வு மற்றும் முன்னேற்றத்தை வடிவமைத்த தொலைநோக்குத் தலைவர்களைப் போற்றுகிறோம்.",
    annaRole: "பேரறிஞர் அண்ணா (கழகத்தின் வழிகாட்டி)",
    annaQuote: '"கடமை, கண்ணியம், கட்டுப்பாடு"',
    mgrRole: "புரட்சித் தலைவர் எம்.ஜி.ஆர் (கழக நிறுவனர் & முன்னாள் முதல்வர்)",
    mgrQuote: '"ஏழைகளின் நலனே அரசின் மிக உயர்ந்த கடமை"',
    ammaRole: "புரட்சித் தலைவி அம்மா (மக்களின் தலைவர் & முன்னாள் முதல்வர்)",
    ammaQuote: '"மக்களால் நான், மக்களுக்காகவே நான்"',
    epsRole: "புரட்சித் தமிழர் எடப்பாடியார் (பொதுச் செயலாளர்)",
    epsQuote: '"வளர்ச்சியும் மக்கள் பணியுமே நமது இறுதி இலக்குகள்"',
    
    // Group Titles in About Us
    aboutTitle: "தொகுதி கழகத் தலைமை",
    aboutSubtitle: "கும்மிடிப்பூண்டி மற்றும் சுற்றியுள்ள ஒன்றியங்களின் மக்களுக்கு அர்ப்பணிப்புடன் பணியாற்றும் கழக நிர்வாகிகள்.",
    districtGroupTitle: "திருவள்ளூர் வடக்கு மாவட்ட கழகம்",
    districtSubTitle: "மாவட்டச் செயலாளர்கள்",
    unionSubTitle: "ஒன்றியச் செயலாளர்கள்",

    // Leader Designations in Tamil (Designations above photos)
    balaramanHeader: "திருவள்ளூர் வடக்கு மாவட்ட கழக செயலாளர்",
    vijayakumarHeader: "மாவட்ட செயலாளர் - அம்மா பேரவை திருவள்ளூர் வடக்கு",
    sridharHeader: "கும்மிடிப்பூண்டி கிழக்கு ஒன்றிய கழக செயலாளர்",
    rameshHeader: "கும்மிடிப்பூண்டி மேற்கு ஒன்றிய கழக செயலாளர்",
    mahendranHeader: "கும்மிடிப்பூண்டி தெற்கு ஒன்றிய கழக செயலாளர்",
    sivakumarHeader: "கும்மிடிப்பூண்டி வடக்கு ஒன்றியக் கழகச் செயலாளர் முன்னாள் ஒன்றிய பெருந்தலைவர்",
    kothandanHeader: "எல்லாபுரம் கிழக்கு ஒன்றியக் கழகச் செயலாளர்",
    vedhagiriHeader: "எல்லாபுரம் மேற்கு ஒன்றிய கழக செயலாளர்",
    prasadHeader: "பூண்டி கிழக்கு ஒன்றிய செயலாளர்",

    // Leader Names in Tamil (Names below photos, with திரு. prefix)
    balaramanName: "திரு. சிறுணியம் P.பலராமன் MA., EX MLA.,",
    vijayakumarName: "திரு. K.S.விஜயகுமார் Ex.MLA.,",
    sridharName: "S.M.ஸ்ரீதர் B.sc.,",
    rameshName: "திரு. J.ரமேஷ் குமார்",
    mahendranName: "திரு. T.C. மகேந்திரன்",
    sivakumarName: "திரு. K.M.S.சிவகுமார் M.com.,",
    kothandanName: "திரு. E.K.K.கோதண்டன்",
    vedhagiriName: "திரு. V.P. வேதகிரி BSC.,",
    prasadName: "திரு. B.M.பிரசாத் B.A",

    achievementsTitle: "வரலாற்றுச் சாதனைகள்",
    achievementsSubtitle: "1972 முதல் இன்று வரை அஇஅதிமுக அரசுகளின் முக்கிய மைல்கற்கள் மற்றும் மக்கள் நல சாதனைகள்.",
    ach1972Title: "அஇஅதிமுக தொடக்கம் (1972)",
    ach1972Text: "புரட்சித் தலைவர் எம்.ஜி.ஆர் அவர்கள் அனைத்திந்திய அண்ணா திராவிட முன்னேற்றக் கழகத்தை நிறுவி, தமிழகத்தில் அடித்தட்டு மக்கள் சேவை மற்றும் சமூக நீதிக்கான புதிய சகாப்தத்தைத் தொடங்கினார்.",
    ach1982Title: "சத்துணவுத் திட்டம் (1982)",
    ach1982Text: "எம்.ஜி.ஆர் அவர்கள் வரலாற்றுச் சிறப்புமிக்க சத்துணவுத் திட்டத்தை அறிமுகப்படுத்தினார், இது பள்ளி சேர்க்கையை வியத்தகு முறையில் அதிகரித்ததுடன் தமிழகக் குழந்தைகளின் ஊட்டச்சத்துக் குறைபாட்டை முற்றிலும் ஒழித்தது.",
    ach1992Title: "தொட்டில் குழந்தைத் திட்டம் (1992)",
    ach1992Text: "பெண் சிசுக்கொலையை ஒழிக்கவும், பெண் குழந்தைகளின் பாதுகாப்பான கல்விக்கும் புரட்சித் தலைவி அம்மா அவர்கள் வரலாற்று முக்கியத்துவம் வாய்ந்த தொட்டில் குழந்தைத் திட்டத்தைத் தொடங்கினார்.",
    ach2011Title: "அம்மா நலத்திட்டப் புரட்சி (2011)",
    ach2011Text: "மாணவர்களுக்கான விலையில்லா மடிக்கணினி, திருமண உதவிக்கான தங்கம் (தாலிக்கு தங்கம்) மற்றும் குடும்பங்களுக்கு விலையில்லா மிக்ஸி, கிரைண்டர், மின்விசிறிகள் போன்ற புரட்சிகர நலத்திட்டங்கள்.",
    ach2013Title: "அம்மா உணவகம் (2013)",
    ach2013Text: "தொழிலாளர்கள் மற்றும் ஏழை மக்களுக்கு மிகக் குறைந்த விலையில் தரமான உணவு வழங்க புரட்சித் தலைவி அம்மா அவர்கள் 'அம்மா உணவகங்களைத்' தொடங்கினார் (இட்லி ரூ.1, சாம்பார் சாதம் ரூ.5).",
    achEpsTitle: "எடப்பாடியாரின் அரசு சாதனைகள் (2017-2021)",
    achEpsText: "புரட்சித் தமிழர் எடப்பாடியார் தலைமையிலான அரசின் சாதனைகள்: அரசுப் பள்ளி மாணவர்களுக்கு மருத்துவச் சேர்க்கையில் 7.5% இடஒதுக்கீடு, காவிரி டெல்டா பாதுகாக்கப்பட்ட வேளாண் மண்டலமாக அறிவிப்பு, மற்றும் பிரம்மாண்ட மேம்பாலங்கள், பாசனத் திட்டங்கள்.",
    achGpdDate: "தொகுதி கவனம்",
    achGpdTitle: "கும்மிடிப்பூண்டி உள்ளூர் உள்கட்டமைப்பு மேம்பாடு",
    achGpdText: "கிராமப்புற வார்டுகளில் சுத்தமான குடிநீர் விநியோக திட்டங்கள், விவசாய ஒன்றியங்களில் உயர்தர உள்ளூர் சாலைகள் அமைத்தல் மற்றும் தொகுதி மக்களின் குறைகளை உடனுக்குடன் தீர்க்க சிறப்பு மக்கள் குறைதீர்ப்பு மையங்களை உருவாக்குதல்.",
    
    updatesTitle: "செய்திகள் & நிகழ்வுகள்",
    updatesSubtitle: "அஇஅதிமுகவின் அதிகாரப்பூர்வ செய்திகள், கும்மிடிப்பூண்டி தொகுதி கூட்டங்கள் மற்றும் நிகழ்வுகளை உடனுக்குடன் தெரிந்துகொள்ளுங்கள்.",
    notifHeader: "அறிவிப்புகள் & செய்திக் குறிப்புகள்",
    tabConstituency: "கும்மிடிப்பூண்டி செய்திகள்",
    tabParty: "கழக செய்திகள்",
    meetHeader: "வரவிருக்கும் நிகழ்வுகள் & கூட்டங்கள்",
    
    memberTitle: "உறுப்பினர் அட்டை பெறுங்கள்",
    memberSubtitle: "கழகப் பணியில் இணையுங்கள்! கீழேயுள்ள படிவத்தில் உங்கள் விவரங்களை உள்ளிட்டு, உங்களது தனிப்பயனாக்கப்பட்ட கும்மிடிப்பூண்டி தொகுதி உறுப்பினர் அட்டையை உருவாக்கி பதிவிறக்கம் செய்து கொள்ளுங்கள்.",
    formHeader: "விவரங்களை உள்ளிடவும்",
    labelName: "பெயர் / Full Name *",
    labelFather: "தந்தை / கணவர் பெயர் *",
    labelDob: "பிறந்த தேதி / Date of Birth *",
    labelAge: "வயது / Age (தானியங்கி)",
    labelPhone: "மொபைல் எண் / Mobile Number *",
    labelBlood: "இரத்த வகை / Blood Group *",
    labelUnion: "ஒன்றியம் / Union *",
    labelPhoto: "புகைப்படம் பதிவேற்றுக / Upload Photo *",
    optSelect: "உங்கள் ஒன்றியத்தைத் தேர்ந்தெடுக்கவும்",
    optBlood: "இரத்த வகை",
    btnUpload: "புகைப்படத்தை தேர்வு செய்க",
    fileHint: "ஆதரிக்கப்படும் வடிவங்கள்: JPG, PNG. பாஸ்போர்ட் அளவு பரிந்துரைக்கப்படுகிறது.",
    btnGenerate: "பதிவுசெய்து அட்டை உருவாக்கு",
    previewHeader: "உறுப்பினர் அட்டை முன்னோட்டம்",
    canvasFront: "Front View (முன்பக்கம்)",
    canvasBack: "Back View (பின்பக்கம்)",
    credHeader: "உறுப்பினர் பதிவு வெற்றிகரமாக முடிந்தது!",
    credCardId: "உறுப்பினர் அட்டை எண்:",
    credPass: "உள்நுழைவு PIN (கடவுச்சொல்):",
    credNote: "இந்த நற்சான்றிதழ்களைச் சேமிக்கவும். பின்னர் உள்நுழைந்து உங்கள் அட்டையை பதிவிறக்க இதைப் பயன்படுத்தலாம்.",
    previewHint: "அட்டையின் இரு பக்கங்களும் தொகுக்கப்பட்டு PDF வடிவில் பதிவிறக்கம் செய்யப்படும்.",
    btnDownloadText: "உறுப்பினர் அட்டை பதிவிறக்கு (PDF)",
    footerCopyright: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    footerDisclaimer: "கழக உறுப்பினர்கள் சேர்க்கை மற்றும் தொகுதி தகவல்களுக்கான தளம்.",
    
    memberLoginHeader: "உறுப்பினர் அட்டை உள்நுழைவு",
    labelPin: "PIN (கடவுச்சொல்) *",
    btnLoginSubmit: "உள்நுழைந்து அட்டை பெற",
    welcomeUser: "வரவேற்கிறோம்,",
    lockedHeader: "உறுப்பினர் அட்டை உருவாக்கத்தை அன்லாக் செய்க",
    lockedSub: "உங்களது அதிகாரப்பூர்வ கும்மிடிப்பூண்டி தொகுதி உறுப்பினர் அட்டையை உருவாக்க, முன்னோட்டம் பார்க்க மற்றும் பதிவிறக்க, தயவுசெய்து புதிய கணக்கை பதிவு செய்யவும் அல்லது உங்கள் மின்னஞ்சல் முகவரி மூலம் உள்நுழையவும்."
  }
};

// Application State
let currentLang = 'en';
const BASE_MEMBER_COUNT = 0;

// LocalStorage Member Data
let membersDatabase = [];
let updatesDatabase = [];
let currentMemberCard = null;
let tempAuthData = null;
let currentOtpCode = null;
let currentOtpType = null; // 'login' or 'register'

// Mock Data for Notifications & Meetings
const notificationsData = {
  constituency: [
    {
      id: 1,
      tag: "Development",
      tagTa: "வளர்ச்சி",
      date: "Aug 15, 2026",
      title: "Drinking Water Project Initiated in Gummidipoondi Union",
      titleTa: "கும்மிடிப்பூண்டி ஒன்றியத்தில் புதிய குடிநீர் சுத்திகரிப்பு ஆலை தொடக்கம்",
      desc: "Local secretaries inspected the site for the new RO water processing facility catering to 5 rural wards.",
      descTa: "5 கிராமப்புற வார்டுகளின் தேவையைப் பூர்த்தி செய்யும் புதிய குடிநீர் சுத்திகரிப்பு நிலைய அமைவிடத்தைக் கழக நிர்வாகிகள் நேரில் பார்வையிட்டு ஆய்வு செய்தனர்."
    },
    {
      id: 2,
      tag: "Welfare",
      tagTa: "நலத்திட்டம்",
      date: "Aug 10, 2026",
      title: "Educational Aid Distribution Event at Ellapuram Union",
      titleTa: "எல்லாபுரம் ஒன்றியத்தில் விலையில்லா கல்வி உபகரணங்கள் வழங்குதல்",
      desc: "Free notebooks and stationery distributed to 250 government school children by our union representatives.",
      descTa: "நமது ஒன்றிய கழக பிரதிநிதிகள் மூலம் 250 அரசு பள்ளி மாணவர்களுக்கு விலையில்லா நோட்டு புத்தகங்கள் மற்றும் உபகரணங்கள் வழங்கப்பட்டன."
    },
    {
      id: 3,
      tag: "Grievance",
      tagTa: "குறைதீர்ப்பு",
      date: "Aug 05, 2026",
      title: "Successful Public Grievance Camp at Gummidipoondi East",
      titleTa: "கும்மிடிப்பூண்டி கிழக்கில் நடைபெற்ற மக்கள் குறைதீர்க்கும் முகாம்",
      desc: "Over 120 petitions received regarding street lights, drinking water facility and immediate solutions dispatched.",
      descTa: "தெருவிளக்குகள் மற்றும் குடிநீர் வசதிகள் தொடர்பாக 120-க்கும் மேற்பட்ட மனுக்கள் பெறப்பட்டு, உடனுக்குடன் தீர்வுகள் காணப்பட்டன."
    }
  ],
  party: [
    {
      id: 1,
      tag: "State News",
      tagTa: "மாநில செய்தி",
      date: "Aug 14, 2026",
      title: "General Secretary Edappadiyar Condemns Rise in Electricity Tariff",
      titleTa: "மின்கட்டண உயர்வை கண்டித்து பொதுச்செயலாளர் எடப்பாடியார் கண்டனம்",
      desc: "AIADMK General Secretary EPS demands rollback of electricity charges hikes across Tamil Nadu.",
      descTa: "தமிழகம் முழுவதும் உயர்த்தப்பட்ட மின்கட்டண உயர்வை உடனடியாக திரும்பப் பெற வேண்டும் என கழகப் பொதுச்செயலாளர் எடப்பாடியார்வலியுறுத்தல்."
    },
    {
      id: 2,
      tag: "Party Event",
      tagTa: "கழக நிகழ்வு",
      date: "Aug 12, 2026",
      title: "AIADMK General Body Meeting Scheduled in Chennai",
      titleTa: "சென்னையில் அஇஅதிமுக பொதுக்குழு கூட்டம் நடைபெறும் தேதி அறிவிப்பு",
      desc: "High-level meeting to discuss constituency-wise developmental works and public engagement policies.",
      descTa: "தொகுதி வாரியானவளர்ச்சிப் பணிகள் மற்றும் மக்கள் நலன் சார்ந்த கொள்கைகள் குறித்து விவாதிக்க உயர்மட்ட ஆலோசனைக் கூட்டம் அறிவிப்பு."
    }
  ]
};

const meetingsData = [
  {
    id: 1,
    day: "22",
    month: "Aug",
    monthTa: "ஆகஸ்ட்",
    title: "Gummidipoondi North Executive Committee Meeting",
    titleTa: "கும்மிடிப்பூண்டி வடக்கு ஒன்றிய செயற்குழு கூட்டம்",
    time: "10:00 AM",
    location: "Union Office, Gummidipoondi",
    locationTa: "ஒன்றிய அலுவலகம், கும்மிடிப்பூண்டி"
  },
  {
    id: 2,
    day: "28",
    month: "Aug",
    monthTa: "ஆகஸ்ட்",
    title: "Ellapuram East Wards Coordination Committee Meet",
    titleTa: "எல்லாபுரம் கிழக்கு வார்டு ஒருங்கிணைப்புக் குழுக் கூட்டம்",
    time: "04:30 PM",
    location: "Kalyana Mandapam, Ellapuram",
    locationTa: "கல்யாண மண்டபம், எல்லாபுரம்"
  },
  {
    id: 3,
    day: "02",
    month: "Sep",
    monthTa: "செப்டம்பர்",
    title: "Constituency Level Youth Wing Recruitment Drive",
    titleTa: "தொகுதி அளவிலான இளைஞர் அணி சேர்க்கை முகாம்",
    time: "11:00 AM",
    location: "Party Ground, Gummidipoondi Bypass",
    locationTa: "கழக திடல், கும்மிடிப்பூண்டி பைபாஸ்"
  }
];

// Document Elements
const langToggleBtn = document.getElementById('lang-toggle');
const langLabel = document.getElementById('lang-label');
const mobileToggleBtn = document.getElementById('mobile-toggle');
const mobileSidebar = document.getElementById('mobile-sidebar');
const sidebarCloseBtn = document.getElementById('sidebar-close');
const liveCountBadge = document.getElementById('live-member-count');

// Preloaded background image
let cardBgImageObj = new Image();
cardBgImageObj.src = 'assets/card_bg_v7.jpg?v=' + Date.now();

// Run initialization
document.addEventListener('DOMContentLoaded', () => {
  // One-time fresh database reset to clear all registered test IDs
  if (!localStorage.getItem('aiadmk_fresh_db_reset_v8')) {
    localStorage.removeItem('aiadmk_members_db');
    localStorage.removeItem('aiadmk_users_db');
    localStorage.removeItem('aiadmk_updates_db');
    localStorage.removeItem('aiadmk_user_logged');
    localStorage.removeItem('aiadmk_user_name');
    localStorage.removeItem('admk_admin_logged');
    localStorage.setItem('aiadmk_fresh_db_reset_v8', 'true');
  }

  loadDatabase();
  setupLanguage();
  updateLanguageUI();
  setupMobileNav();
  setupNotifications();
  setupMeetingsList();
  setupMembershipGenerator();
  updateLiveCounter();
  checkUserSession();
  
  // Repopulate table if admin is already logged in
  if (localStorage.getItem('admk_admin_logged') === 'true') {
    showAdminDashboard();
  }
});

// Load members from localStorage
function loadDatabase() {
  const data = localStorage.getItem('aiadmk_members_db');
  if (data) {
    membersDatabase = JSON.parse(data);
  } else {
    membersDatabase = [];
    localStorage.setItem('aiadmk_members_db', JSON.stringify(membersDatabase));
  }
  loadUpdatesDatabase();
}

function loadUpdatesDatabase() {
  const data = localStorage.getItem('aiadmk_updates_db');
  if (data) {
    updatesDatabase = JSON.parse(data);
  } else {
    updatesDatabase = [];
    
    // Add default constituency news
    notificationsData.constituency.forEach(n => {
      updatesDatabase.push({
        id: 'c_' + n.id,
        type: 'Gummidipoondi News',
        tag: n.tag,
        tagTa: n.tagTa,
        date: n.date,
        title: n.title,
        titleTa: n.titleTa,
        desc: n.desc,
        descTa: n.descTa
      });
    });
    
    // Add default party news
    notificationsData.party.forEach(n => {
      updatesDatabase.push({
        id: 'p_' + n.id,
        type: 'Party News',
        tag: n.tag,
        tagTa: n.tagTa,
        date: n.date,
        title: n.title,
        titleTa: n.titleTa,
        desc: n.desc,
        descTa: n.descTa
      });
    });
    
    // Add default meetings
    meetingsData.forEach(m => {
      updatesDatabase.push({
        id: 'e_' + m.id,
        type: 'Upcoming Event',
        tag: 'Meeting',
        tagTa: 'கூட்டம்',
        date: m.month + ' ' + m.day + ', 2026',
        title: m.title,
        titleTa: m.titleTa,
        desc: 'Time: ' + m.time + ', Location: ' + m.location,
        descTa: 'நேரம்: ' + m.time + ', இடம்: ' + m.locationTa,
        day: m.day,
        month: m.month,
        monthTa: m.monthTa,
        time: m.time,
        location: m.location,
        locationTa: m.locationTa
      });
    });
    
    localStorage.setItem('aiadmk_updates_db', JSON.stringify(updatesDatabase));
  }
}

// Update live member counter
function updateLiveCounter() {
  const totalCount = BASE_MEMBER_COUNT + membersDatabase.length;
  liveCountBadge.textContent = totalCount.toLocaleString();
}

// 1. Language System
function setupLanguage() {
  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ta' : 'en';
    updateLanguageUI();
  });
}

function updateLanguageUI() {
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[currentLang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'SELECT') {
        if (el.tagName === 'INPUT') {
          el.setAttribute('placeholder', translations[currentLang][key]);
        }
      } else {
        el.textContent = translations[currentLang][key];
      }
    }
  });

  langLabel.textContent = currentLang === 'en' ? 'தமிழ்' : 'English';
  
  // Set html document lang attribute
  document.documentElement.lang = currentLang;

  // Refresh dynamic announcement and meetings list to switch language!
  const btnConst = document.getElementById('tab-constituency');
  const activeTab = (btnConst && btnConst.classList.contains('active')) ? 'constituency' : 'party';
  populateNotifications(activeTab);
  setupMeetingsList();
  
  if (currentMemberCard) {
    drawCardOnCanvases(currentMemberCard);
  }
}

// 2. Mobile Menu System
function setupMobileNav() {
  mobileToggleBtn.addEventListener('click', () => {
    mobileSidebar.classList.add('open');
  });

  sidebarCloseBtn.addEventListener('click', () => {
    mobileSidebar.classList.remove('open');
  });

  document.querySelectorAll('#mobile-sidebar a').forEach(link => {
    link.addEventListener('click', () => {
      mobileSidebar.classList.remove('open');
    });
  });
}

// 3. Notifications System
function setupNotifications() {
  const btnConst = document.getElementById('tab-constituency');
  const btnParty = document.getElementById('tab-party');

  btnConst.addEventListener('click', () => {
    btnConst.classList.add('active');
    btnParty.classList.remove('active');
    populateNotifications('constituency');
  });

  btnParty.addEventListener('click', () => {
    btnParty.classList.add('active');
    btnConst.classList.remove('active');
    populateNotifications('party');
  });

  populateNotifications('constituency');
}

function populateNotifications(tab) {
  const container = document.getElementById('notif-list');
  if (!container) return;
  container.innerHTML = '';
  
  const filterType = tab === 'constituency' ? 'Gummidipoondi News' : 'Party News';
  const items = updatesDatabase.filter(u => u.type === filterType);
  
  items.forEach(item => {
    const isTa = currentLang === 'ta';
    const tagText = isTa ? (item.tagTa || item.tag) : item.tag;
    const titleText = isTa ? (item.titleTa || item.title) : item.title;
    const descText = isTa ? (item.descTa || item.desc) : item.desc;
    
    const div = document.createElement('div');
    div.className = 'notif-item';
    div.innerHTML = `
      <div class="notif-meta">
        <span class="notif-badge">${tagText}</span>
        <span>${item.date || 'Aug 2026'}</span>
      </div>
      <h4 class="notif-title">${titleText}</h4>
      <p class="notif-desc">${descText}</p>
    `;
    container.appendChild(div);
  });
}

// 4. Meetings System
function setupMeetingsList() {
  const container = document.getElementById('meetings-list');
  if (!container) return;
  container.innerHTML = '';

  const items = updatesDatabase.filter(u => u.type === 'Upcoming Event');
  
  items.forEach(meet => {
    const isTa = currentLang === 'ta';
    const monthText = isTa ? (meet.monthTa || meet.month) : meet.month;
    const titleText = isTa ? (meet.titleTa || meet.title) : meet.title;
    const locationText = isTa ? (meet.locationTa || meet.location) : meet.location;

    const div = document.createElement('div');
    div.className = 'meet-card';
    div.innerHTML = `
      <div class="meet-date-box">
        <span class="meet-day">${meet.day || '20'}</span>
        <span class="meet-month">${monthText || 'Aug'}</span>
      </div>
      <div class="meet-details">
        <h4 class="meet-title">${titleText}</h4>
        <div class="meet-info-row">
          <div class="meet-info-item">
            <i class="fa-regular fa-clock"></i>
            <span>${meet.time || '10:00 AM'}</span>
          </div>
          <div class="meet-info-item">
            <i class="fa-solid fa-location-dot"></i>
            <span>${locationText || 'Gummidipoondi'}</span>
          </div>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}

// 5. Membership Card Generator System
let userUploadedImage = null;

function setupMembershipGenerator() {
  const dobInput = document.getElementById('mb-dob');
  const ageInput = document.getElementById('mb-age');
  const fileInput = document.getElementById('mb-photo');
  const form = document.getElementById('membership-form');
  const btnDownload = document.getElementById('btn-download');
  const fileNameHint = document.getElementById('file-name-hint');

  // Dynamic Age Calculation
  dobInput.addEventListener('change', () => {
    const dob = new Date(dobInput.value);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    
    ageInput.value = isNaN(age) ? '' : age;
  });

  // Handle Photo File upload
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      fileNameHint.textContent = file.name;
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          userUploadedImage = img;
          if (currentMemberCard) {
            drawCardOnCanvases(currentMemberCard);
          }
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  // Form submission (Registration)
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const loggedEmail = localStorage.getItem('aiadmk_user_logged');
    if (!loggedEmail) {
      alert(currentLang === 'ta' ? "உறுப்பினர் அட்டையை உருவாக்க முதலில் உள்நுழையவும்!" : "Please login first to generate your membership card!");
      openLoginModal();
      return;
    }
    
    const name = document.getElementById('mb-name').value;
    const fatherName = document.getElementById('mb-father') ? document.getElementById('mb-father').value.trim() : '';
    const phone = document.getElementById('mb-phone').value;
    
    // Check if phone already registered
    const existing = membersDatabase.find(m => m.phone === phone);
    if (existing && existing.email !== loggedEmail) {
      alert(currentLang === 'ta' ? "இந்த மொபைல் எண் ஏற்கனவே மற்றொரு கணக்கிற்கு பதிவு செய்யப்பட்டுள்ளது!" : "This mobile number is already registered to another account!");
      return;
    }

    const dob = dobInput.value;
    const age = parseInt(ageInput.value);
    const blood = document.getElementById('mb-blood').value;
    const union = document.getElementById('mb-union').value;
    
    // Generate credentials
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const cardId = `ADMK-GPD-2026-${randomNum}`;
    const pin = Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit PIN
    
    const today = new Date();
    const joinDate = `${today.getDate().toString().padStart(2,'0')}/${(today.getMonth()+1).toString().padStart(2,'0')}/${today.getFullYear()}`;

    // Add Thiru prefix to name
    const prefixName = name.startsWith("திரு. ") || name.startsWith("Thiru. ") ? name : `திரு. ${name}`;

    const newMember = {
      id: existing ? existing.id : cardId,
      email: loggedEmail || 'guest',
      name: prefixName,
      fatherName: fatherName,
      dob: dob,
      age: age,
      blood: blood,
      phone: phone,
      union: union,
      photo: userUploadedImage ? userUploadedImage.src : (existing ? existing.photo : ''),
      joinDate: existing ? existing.joinDate : joinDate,
      pin: existing ? existing.pin : pin
    };

    // Save to Database
    if (existing) {
      const idx = membersDatabase.findIndex(m => m.id === existing.id);
      membersDatabase[idx] = newMember;
    } else {
      membersDatabase.push(newMember);
    }
    localStorage.setItem('aiadmk_members_db', JSON.stringify(membersDatabase));
    
    // Update count
    updateLiveCounter();
    if (localStorage.getItem('admk_admin_logged') === 'true') {
      populateAdminTable();
    }

    // Display Credentials Box
    document.getElementById('cred-card-id').textContent = cardId;
    document.getElementById('cred-pin').textContent = pin;
    document.getElementById('credentials-box').style.display = 'block';

    currentMemberCard = newMember;
    drawCardOnCanvases(currentMemberCard);

    // Enable Download
    btnDownload.classList.remove('disabled');
    btnDownload.removeAttribute('disabled');
    
    // Reset Form
    form.reset();
    fileNameHint.textContent = translations[currentLang]['fileHint'];
    
    document.querySelector('.membership-preview-side').scrollIntoView({ behavior: 'smooth' });
  });

  // Handle Download Click (PDF Download Front + Back)
  btnDownload.addEventListener('click', () => {
    if (!currentMemberCard) return;
    downloadMembershipCardPDF();
  });

  drawPlaceholderCanvases();
}

// Draw initial placeholders on canvases
function drawPlaceholderCanvases() {
  const frontCanvas = document.getElementById('card-canvas-front');
  const backCanvas = document.getElementById('card-canvas-back');
  
  if (!frontCanvas || !backCanvas) return;

  // Set high resolution canvas sizes (4x scale of 360x600)
  frontCanvas.width = 1440;
  frontCanvas.height = 2400;
  backCanvas.width = 1440;
  backCanvas.height = 2400;

  [frontCanvas, backCanvas].forEach((canvas, i) => {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 1440, 2400);
    ctx.save();
    ctx.scale(4, 4); // Scale standard 360x600 coordinates up to 1440x2400 vector drawing

    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, 360, 600);
    
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#0a5c36';
    ctx.strokeRect(3, 3, 354, 594);
    
    ctx.font = '700 16px Outfit';
    ctx.fillStyle = '#0a5c36';
    ctx.textAlign = 'center';
    ctx.fillText(i === 0 ? 'CARD FRONT VIEW' : 'CARD BACK VIEW', 180, 290);
    
    ctx.font = '500 11px Outfit';
    ctx.fillStyle = '#64748b';
    ctx.fillText('Fill details & Register to preview', 180, 312);
    ctx.restore();
  });
}

// Generate Front and Back Canvases in high resolution (HD)
function drawCardOnCanvases(member) {
  if (member.photo) {
    const img = new Image();
    img.onload = () => {
      renderCanvasWithPhoto(member, img);
    };
    img.src = member.photo;
  } else if (userUploadedImage) {
    renderCanvasWithPhoto(member, userUploadedImage);
  } else {
    renderCanvasWithPhoto(member, null);
  }
}

// Synchronous rendering helper to prevent image drawing race conditions
function renderCanvasWithPhoto(member, photoImgObj) {
  const frontCanvas = document.getElementById('card-canvas-front');
  const backCanvas = document.getElementById('card-canvas-back');
  
  if (!frontCanvas || !backCanvas) return;

  // Set high resolution canvas sizes (4x scale of 360x600)
  frontCanvas.width = 1440;
  frontCanvas.height = 2400;
  backCanvas.width = 1440;
  backCanvas.height = 2400;

  const ctxFront = frontCanvas.getContext('2d');
  const ctxBack = backCanvas.getContext('2d');

  ctxFront.clearRect(0, 0, 1440, 2400);
  ctxBack.clearRect(0, 0, 1440, 2400);

  ctxFront.save();
  ctxBack.save();

  ctxFront.scale(4, 4); // Vector scale standard coordinates up
  ctxBack.scale(4, 4);

  // --- DRAW BACK CANVAS (Pure Portrait Background Poster) ---
  ctxBack.fillStyle = '#ffffff';
  ctxBack.fillRect(0, 0, 360, 600);
  if (cardBgImageObj.complete) {
    ctxBack.drawImage(cardBgImageObj, 0, 0, 360, 600);
  } else {
    cardBgImageObj.onload = () => {
      ctxBack.save();
      ctxBack.scale(4, 4);
      ctxBack.drawImage(cardBgImageObj, 0, 0, 360, 600);
      ctxBack.restore();
    };
  }

  // --- DRAW FRONT CANVAS (Clean Portrait White Background + Bio Data) ---
  ctxFront.fillStyle = '#ffffff';
  ctxFront.fillRect(0, 0, 360, 600);
  
  // 2. Draw card base plate
  ctxFront.fillStyle = '#ffffff';
  ctxFront.beginPath();
  const plateX = 14;
  const plateY = 14;
  const plateW = 360 - 28; // 332
  const plateH = 600 - 28; // 572
  const plateR = 12;
  
  ctxFront.moveTo(plateX + plateR, plateY);
  ctxFront.lineTo(plateX + plateW - plateR, plateY);
  ctxFront.quadraticCurveTo(plateX + plateW, plateY, plateX + plateW, plateY + plateR);
  ctxFront.lineTo(plateX + plateW, plateY + plateH - plateR);
  ctxFront.quadraticCurveTo(plateX + plateW, plateY + plateH, plateX + plateW - plateR, plateY + plateH);
  ctxFront.lineTo(plateX + plateR, plateY + plateH);
  ctxFront.quadraticCurveTo(plateX, plateY + plateH, plateX, plateY + plateH - plateR);
  ctxFront.lineTo(plateX, plateY + plateR);
  ctxFront.quadraticCurveTo(plateX, plateY, plateX + plateR, plateY);
  ctxFront.closePath();
  ctxFront.fill();

  // Draw gold/green double line border around the inner plate
  ctxFront.lineWidth = 2.5;
  ctxFront.strokeStyle = '#0a5c36';
  ctxFront.stroke();
  ctxFront.lineWidth = 1;
  ctxFront.strokeStyle = '#d4af37';
  ctxFront.stroke();

  // 3. Draw Header Flag stripes inside the plate
  const headerY = 22;
  const flagStripeH = 4.5;
  ctxFront.fillStyle = '#111111'; // black
  ctxFront.fillRect(plateX + 10, headerY, plateW - 20, flagStripeH);
  ctxFront.fillStyle = '#ffffff'; // white
  ctxFront.fillRect(plateX + 10, headerY + flagStripeH, plateW - 20, flagStripeH);
  ctxFront.fillStyle = '#d62728'; // red
  ctxFront.fillRect(plateX + 10, headerY + (flagStripeH * 2), plateW - 20, flagStripeH);

  // 4. Header Titles (Centered for Portrait Layout)
  ctxFront.fillStyle = '#0a5c36';
  ctxFront.font = '800 13px Outfit';
  ctxFront.textAlign = 'center';
  ctxFront.fillText(currentLang === 'ta' ? 'அஇஅதிமுக உறுப்பினர் அட்டை' : 'AIADMK MEMBERSHIP CARD', 180, 54);
  
  ctxFront.fillStyle = '#d62728';
  ctxFront.font = '700 9px Outfit';
  ctxFront.fillText(currentLang === 'ta' ? 'கும்மிடிப்பூண்டி தொகுதி (திருவள்ளூர் வடக்கு)' : 'GUMMIDIPOONDI CONSTITUENCY (THIRUVALLUR NORTH)', 180, 69);

  // 5. Draw Photo (Centered in portrait mode)
  const photoW = 120;
  const photoH = 150;
  const photoX = (360 - photoW) / 2;
  const photoY = 86;
  
  ctxFront.fillStyle = '#f8fafc';
  ctxFront.fillRect(photoX, photoY, photoW, photoH);
  ctxFront.lineWidth = 1.5;
  ctxFront.strokeStyle = '#0a5c36';
  ctxFront.strokeRect(photoX, photoY, photoW, photoH);

  if (photoImgObj) {
    ctxFront.save();
    ctxFront.beginPath();
    ctxFront.rect(photoX, photoY, photoW, photoH);
    ctxFront.clip();
    
    const imgRatio = photoImgObj.width / photoImgObj.height;
    const targetRatio = photoW / photoH;
    let drawW, drawH, drawX, drawY;
    
    if (imgRatio > targetRatio) {
      drawH = photoH;
      drawW = photoH * imgRatio;
      drawX = photoX - (drawW - photoW) / 2;
      drawY = photoY;
    } else {
      drawW = photoW;
      drawH = photoW / imgRatio;
      drawX = photoX;
      drawY = photoY - (drawH - photoH) / 2;
    }
    
    ctxFront.drawImage(photoImgObj, drawX, drawY, drawW, drawH);
    ctxFront.restore();
  } else {
    // Place a placeholder icon
    ctxFront.fillStyle = '#94a3b8';
    ctxFront.font = '30px Arial';
    ctxFront.textAlign = 'center';
    ctxFront.fillText('👤', photoX + photoW/2, photoY + photoH/2 + 10);
  }

  // 6. Draw Member ID Prominently
  ctxFront.fillStyle = '#d62728';
  ctxFront.font = '800 13px Outfit';
  ctxFront.textAlign = 'center';
  ctxFront.fillText(member.id, 180, 258);

  // 7. Draw Member details (List items aligned in portrait)
  const textStartX = 34;
  const textStartY = 282;
  const lineSpacing = 25;

  function drawFieldFront(label, value, idx) {
    const y = textStartY + (idx * lineSpacing);
    ctxFront.fillStyle = '#64748b';
    ctxFront.font = '700 8px Outfit';
    ctxFront.textAlign = 'left';
    ctxFront.fillText(label.toUpperCase(), textStartX, y);
    
    ctxFront.fillStyle = '#0f172a';
    ctxFront.font = '800 11px Outfit';
    ctxFront.textAlign = 'right';
    ctxFront.fillText(value, 360 - textStartX, y);
  }

  // Define bilingual fields mapping
  const fields = currentLang === 'ta' ? [
    { label: 'பெயர் / Name', value: member.name },
    { label: 'தந்தை / கணவர் பெயர்', value: member.fatherName || '-' },
    { label: 'இரத்த வகை / Blood', value: member.blood },
    { label: 'பிறந்த தேதி / DOB', value: member.dob ? member.dob.split('-').reverse().join('/') : '' },
    { label: 'ஒன்றியம் / Union', value: member.union ? member.union.split(' / ')[0] : '' },
    { label: 'சேர்க்கை தேதி / Joined', value: member.joinDate }
  ] : [
    { label: 'Full Name', value: member.name },
    { label: "Father's / Husband's Name", value: member.fatherName || '-' },
    { label: 'Blood Group', value: member.blood },
    { label: 'Date of Birth', value: member.dob ? member.dob.split('-').reverse().join('/') : '' },
    { label: 'Union / Ward', value: member.union ? member.union.split(' / ')[0] : '' },
    { label: 'Date of Joining', value: member.joinDate }
  ];

  fields.forEach((field, i) => drawFieldFront(field.label, field.value, i));

  // 8. Stamp / Authorized Signature section (Bottom centered)
  const sigX = 180;
  const sigY = 600 - 70;
  
  ctxFront.fillStyle = '#64748b';
  ctxFront.font = '700 7px Outfit';
  ctxFront.textAlign = 'center';
  ctxFront.fillText(currentLang === 'ta' ? 'அங்கீகரிக்கப்பட்ட கையொப்பம்' : 'AUTHORIZED SIGNATURE', sigX, sigY + 12);
  
  ctxFront.lineWidth = 1;
  ctxFront.strokeStyle = '#0a5c36';
  ctxFront.beginPath();
  ctxFront.moveTo(sigX - 55, sigY);
  ctxFront.lineTo(sigX + 55, sigY);
  ctxFront.stroke();
  
  // Simulated blue signature drawing
  ctxFront.strokeStyle = '#1d4ed8';
  ctxFront.lineWidth = 1.5;
  ctxFront.beginPath();
  ctxFront.moveTo(sigX - 25, sigY - 12);
  ctxFront.quadraticCurveTo(sigX, sigY - 22, sigX + 15, sigY - 12);
  ctxFront.quadraticCurveTo(sigX + 25, sigY - 2, sigX + 35, sigY - 10);
  ctxFront.stroke();
  
  // 9. Watermark Flag (Bottom center)
  const flagLogoImg = document.querySelector('.nav-flag');
  if (flagLogoImg) {
    ctxFront.drawImage(flagLogoImg, 180 - 15, 600 - 42, 30, 20);
  }

  // 10. Background Watermark in the middle
  if (flagLogoImg) {
    ctxFront.save();
    ctxFront.globalAlpha = 0.08; // subtle transparency
    ctxFront.drawImage(flagLogoImg, 180 - 80, 380 - 53, 160, 107);
    ctxFront.restore();
  }

  ctxFront.restore();
  ctxBack.restore();
}

function downloadMembershipCardPDF() {
  if (!currentMemberCard) return;

  const frontCanvas = document.getElementById('card-canvas-front');
  const backCanvas = document.getElementById('card-canvas-back');

  const { jsPDF } = window.jspdf;
  
  // Create a portrait orientation PDF (360x600)
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: [360, 600]
  });

  // Page 1: Front Canvas (Embedded in HD since canvas is 1440x2400)
  pdf.addImage(frontCanvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, 360, 600);
  
  // Page 2: Back Canvas
  pdf.addPage([360, 600], 'portrait');
  pdf.addImage(backCanvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, 360, 600);

  // Save the PDF file
  pdf.save(`aiadmk_membership_card_${currentMemberCard.id}.pdf`);
}

// 6. User Login Portal System
function openLoginModal() {
  document.getElementById('login-modal').style.display = 'flex';
  switchLoginTab('login');
}

function openRegisterModalDirect() {
  document.getElementById('login-modal').style.display = 'flex';
  switchLoginTab('register');
}

function openAdminModalDirect() {
  document.getElementById('login-modal').style.display = 'flex';
  switchLoginTab('admin');
}

function openAuthModal(tab) {
  document.getElementById('login-modal').style.display = 'flex';
  switchLoginTab(tab);
}

function closeLoginModal() {
  document.getElementById('login-modal').style.display = 'none';
}

function switchLoginTab(tab) {
  const btnLogin = document.getElementById('tab-user-login');
  const btnRegister = document.getElementById('tab-user-register');
  const btnAdmin = document.getElementById('tab-admin-login');
  
  const formLogin = document.getElementById('user-login-form');
  const formRegister = document.getElementById('user-register-form');
  const formAdmin = document.getElementById('admin-login-form');
  
  // Hide all error messages
  document.getElementById('user-login-error').style.display = 'none';
  document.getElementById('user-register-error').style.display = 'none';
  document.getElementById('admin-login-error').style.display = 'none';
  
  // Reset active classes
  if (btnLogin) btnLogin.classList.remove('active');
  if (btnRegister) btnRegister.classList.remove('active');
  if (btnAdmin) btnAdmin.classList.remove('active');
  
  // Hide all forms
  if (formLogin) formLogin.style.display = 'none';
  if (formRegister) formRegister.style.display = 'none';
  if (formAdmin) formAdmin.style.display = 'none';
  
  if (tab === 'login') {
    if (btnLogin) btnLogin.classList.add('active');
    if (formLogin) formLogin.style.display = 'block';
  } else if (tab === 'register') {
    if (btnRegister) btnRegister.classList.add('active');
    if (formRegister) formRegister.style.display = 'block';
  } else if (tab === 'admin') {
    if (btnAdmin) btnAdmin.classList.add('active');
    if (formAdmin) formAdmin.style.display = 'block';
  }
}

// User Registration Handler
function handleUserRegisterSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('register-name').value.trim();
  const email = document.getElementById('register-email').value.trim().toLowerCase();
  const password = document.getElementById('register-password').value;
  const rePassword = document.getElementById('register-confirm-password').value;
  const errorEl = document.getElementById('user-register-error');
  
  errorEl.style.display = 'none';
  
  if (password !== rePassword) {
    errorEl.textContent = currentLang === 'ta' ? "கடவுச்சொற்கள் பொருந்தவில்லை!" : "Passwords do not match!";
    errorEl.style.display = 'block';
    return;
  }
  
  // Check if email already registered
  const users = JSON.parse(localStorage.getItem('aiadmk_users_db') || '[]');
  if (users.some(u => u.email === email)) {
    errorEl.textContent = currentLang === 'ta' ? "மின்னஞ்சல் ஏற்கனவே பதிவு செய்யப்பட்டுள்ளது!" : "Email ID is already registered!";
    errorEl.style.display = 'block';
    return;
  }
  
  // Save new user account directly without OTP
  const newUser = { name, email, password };
  users.push(newUser);
  localStorage.setItem('aiadmk_users_db', JSON.stringify(users));
  
  // Auto login directly
  localStorage.setItem('aiadmk_user_logged', email);
  localStorage.setItem('aiadmk_user_name', name);
  
  // Close login modal
  closeLoginModal();
  
  // Refresh user UI session state
  checkUserSession();
}

// User Login Handler
function handleUserLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const password = document.getElementById('login-password').value;
  const errorEl = document.getElementById('user-login-error');
  
  errorEl.style.display = 'none';
  
  const users = JSON.parse(localStorage.getItem('aiadmk_users_db') || '[]');
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    errorEl.textContent = currentLang === 'ta' ? "தவறான மின்னஞ்சல் அல்லது கடவுச்சொல்!" : "Invalid email or password!";
    errorEl.style.display = 'block';
    return;
  }
  
  // Directly log in the user without simulated OTP
  localStorage.setItem('aiadmk_user_logged', user.email);
  localStorage.setItem('aiadmk_user_name', user.name);
  
  // Close login modal
  closeLoginModal();
  
  // Refresh user UI session state
  checkUserSession();
}

// OTP Validation Handler
function handleOtpSubmit(e) {
  e.preventDefault();
  const enteredOtp = document.getElementById('otp-input').value.trim();
  const errorEl = document.getElementById('otp-error');
  
  errorEl.style.display = 'none';
  
  if (enteredOtp === currentOtpCode) {
    if (currentOtpType === 'register') {
      // Save new user account
      const users = JSON.parse(localStorage.getItem('aiadmk_users_db') || '[]');
      users.push(tempAuthData);
      localStorage.setItem('aiadmk_users_db', JSON.stringify(users));
      
      // Auto login
      localStorage.setItem('aiadmk_user_logged', tempAuthData.email);
      localStorage.setItem('aiadmk_user_name', tempAuthData.name);
    } else if (currentOtpType === 'login') {
      // Login
      localStorage.setItem('aiadmk_user_logged', tempAuthData.email);
      localStorage.setItem('aiadmk_user_name', tempAuthData.name);
    }
    
    // Close OTP Modal
    document.getElementById('otp-modal').style.display = 'none';
    
    // Refresh user UI session state
    checkUserSession();
    
    // Reset temp auth data
    tempAuthData = null;
    currentOtpCode = null;
    currentOtpType = null;
  } else {
    errorEl.textContent = currentLang === 'ta' ? "தவறான OTP குறியீடு! மீண்டும் முயற்சிக்கவும்." : "Invalid OTP code! Please try again.";
    errorEl.style.display = 'block';
  }
}

function closeOtpModal() {
  document.getElementById('otp-modal').style.display = 'none';
  tempAuthData = null;
  currentOtpCode = null;
  currentOtpType = null;
}

// Session State Management
function checkUserSession() {
  const loggedEmail = localStorage.getItem('aiadmk_user_logged');
  const loggedName = localStorage.getItem('aiadmk_user_name');
  
  const lockedEl = document.getElementById('membership-locked-card');
  const formSideEl = document.getElementById('membership-form-side');
  const previewSideEl = document.getElementById('membership-preview-side');
  const nameDisplayEl = document.getElementById('logged-user-name-display');
  
  const loginBtn = document.getElementById('nav-login-btn');
  const registerBtn = document.getElementById('nav-register-btn');
  
  if (loggedEmail) {
    // Show generator form & preview, hide lock screen
    if (lockedEl) lockedEl.style.display = 'none';
    if (formSideEl) formSideEl.style.display = 'block';
    if (previewSideEl) previewSideEl.style.display = 'block';
    if (nameDisplayEl) nameDisplayEl.textContent = loggedName;
    
    // Hide top navigation buttons
    if (loginBtn) loginBtn.style.display = 'none';
    if (registerBtn) registerBtn.style.display = 'none';
    
    // Pre-fill existing member card
    checkUserExistingCard();
    
    // Preload registered name if name input is currently empty
    const nameInput = document.getElementById('mb-name');
    if (nameInput && !nameInput.value) {
      nameInput.value = loggedName;
    }
  } else {
    // Show lock screen, hide generator form & preview
    if (lockedEl) lockedEl.style.display = 'flex';
    if (formSideEl) formSideEl.style.display = 'none';
    if (previewSideEl) previewSideEl.style.display = 'none';
    
    // Show top navigation buttons
    if (loginBtn) loginBtn.style.display = 'flex';
    if (registerBtn) registerBtn.style.display = 'flex';
  }
}

function checkUserExistingCard() {
  const loggedEmail = localStorage.getItem('aiadmk_user_logged');
  if (!loggedEmail) return;
  
  const existingCard = membersDatabase.find(m => m.email === loggedEmail);
  if (existingCard) {
    currentMemberCard = existingCard;
    drawCardOnCanvases(existingCard);
    
    // Enable Download
    const btnDownload = document.getElementById('btn-download');
    if (btnDownload) {
      btnDownload.classList.remove('disabled');
      btnDownload.removeAttribute('disabled');
    }
    
    // Pre-fill form fields
    let cleanName = existingCard.name;
    if (cleanName.startsWith("திரு. ")) cleanName = cleanName.replace("திரு. ", "");
    if (cleanName.startsWith("Thiru. ")) cleanName = cleanName.replace("Thiru. ", "");
    
    const dobInput = document.getElementById('mb-dob');
    const ageInput = document.getElementById('mb-age');
    const phoneInput = document.getElementById('mb-phone');
    const bloodInput = document.getElementById('mb-blood');
    const unionInput = document.getElementById('mb-union');
    
    if (dobInput) dobInput.value = existingCard.dob;
    if (ageInput) ageInput.value = existingCard.age;
    if (phoneInput) phoneInput.value = existingCard.phone;
    if (bloodInput) bloodInput.value = existingCard.blood;
    if (unionInput) unionInput.value = existingCard.union;
    
    // Preload name input
    const nameInput = document.getElementById('mb-name');
    if (nameInput) nameInput.value = cleanName;
  }
}

function logoutUser() {
  localStorage.removeItem('aiadmk_user_logged');
  localStorage.removeItem('aiadmk_user_name');
  
  // Clear generated preview
  currentMemberCard = null;
  drawPlaceholderCanvases();
  
  // Disable Download
  const btnDownload = document.getElementById('btn-download');
  if (btnDownload) {
    btnDownload.classList.add('disabled');
    btnDownload.setAttribute('disabled', 'true');
  }
  
  // Reset form
  const form = document.getElementById('membership-form');
  if (form) form.reset();
  
  checkUserSession();
}

function handleUserLogout() {
  logoutUser();
}

// 7. Admin Dashboard Portal System
function handleAdminLogin(e) {
  e.preventDefault();
  const user = document.getElementById('admin-user').value.trim();
  const pass = document.getElementById('admin-pass').value.trim();
  const errorEl = document.getElementById('admin-login-error');

  if (user === 'gummidipoodiadmk@gmail.com' && pass === 'GDP_ADMK_01') {
    localStorage.setItem('admk_admin_logged', 'true');
    showAdminDashboard();
    closeLoginModal();
    
    // Reset forms
    document.getElementById('admin-login-form').reset();
    document.getElementById('admin-dashboard').scrollIntoView({ behavior: 'smooth' });
  } else {
    errorEl.textContent = "Incorrect admin user or password credentials!";
    errorEl.style.display = 'block';
  }
}

function showAdminDashboard() {
  document.getElementById('admin-dashboard').style.display = 'block';
  populateAdminTable();
  updateAdminMetrics();
  populateAdminUpdatesTable();
}

function updateAdminMetrics() {
  document.getElementById('admin-member-count').textContent = (BASE_MEMBER_COUNT + membersDatabase.length).toLocaleString();
}

function logoutAdmin() {
  localStorage.removeItem('admk_admin_logged');
  document.getElementById('admin-dashboard').style.display = 'none';
}

function populateAdminTable() {
  const tableBody = document.getElementById('admin-table-body');
  if (!tableBody) return;
  tableBody.innerHTML = '';

  if (membersDatabase.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="9" style="text-align:center; color:var(--text-muted);">No members registered yet.</td></tr>`;
    return;
  }

  membersDatabase.forEach(member => {
    const tr = document.createElement('tr');
    tr.id = `admin-row-${member.id}`;
    
    // Construct columns
    tr.innerHTML = `
      <td><strong>${member.id}</strong></td>
      <td>${member.name}</td>
      <td>${member.fatherName || '-'}</td>
      <td>${member.dob.split('-').reverse().join('/')} (${member.age} Yrs)</td>
      <td><span class="notif-badge">${member.blood}</span></td>
      <td>${member.phone}</td>
      <td>${member.union}</td>
      <td>${member.joinDate}</td>
      <td>
        <button class="btn-admin-action btn-admin-download" onclick="adminDownloadCard('${member.id}')" title="Download PDF Card">
          <i class="fa-solid fa-file-pdf"></i>
        </button>
        <button class="btn-admin-action btn-admin-delete" onclick="adminDeleteMember('${member.id}')" title="Delete Member">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
    `;
    
    tableBody.appendChild(tr);
  });
}

function filterAdminTable() {
  const searchVal = document.getElementById('admin-search').value.toLowerCase();
  const unionVal = document.getElementById('admin-filter-union').value;
  const bloodVal = document.getElementById('admin-filter-blood').value;

  membersDatabase.forEach(member => {
    const row = document.getElementById(`admin-row-${member.id}`);
    if (!row) return;

    const matchesSearch = member.name.toLowerCase().includes(searchVal) || 
                          member.phone.includes(searchVal) || 
                          member.id.toLowerCase().includes(searchVal);
    const matchesUnion = unionVal === "" || member.union === unionVal;
    const matchesBlood = bloodVal === "" || member.blood === bloodVal;

    if (matchesSearch && matchesUnion && matchesBlood) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

// Admin downloads card of a member
function adminDownloadCard(memberId) {
  const member = membersDatabase.find(m => m.id === memberId);
  if (!member) return;

  // Render this member temporarily on previews
  currentMemberCard = member;
  drawCardOnCanvases(member);
  
  // Trigger PDF compile
  downloadMembershipCardPDF();
}

// Admin deletes a member
function adminDeleteMember(memberId) {
  if (confirm(`Are you sure you want to delete member registration ID ${memberId}?`)) {
    membersDatabase = membersDatabase.filter(m => m.id !== memberId);
    localStorage.setItem('aiadmk_members_db', JSON.stringify(membersDatabase));
    
    populateAdminTable();
    updateAdminMetrics();
    updateLiveCounter();
  }
}

// 8. Admin Updates and Events Manager
function toggleEventFields() {
  const type = document.getElementById('update-type').value;
  const fieldsDiv = document.getElementById('update-event-fields');
  if (!fieldsDiv) return;
  
  const inputs = fieldsDiv.querySelectorAll('input');
  
  if (type === 'Upcoming Event') {
    fieldsDiv.style.display = 'grid';
    inputs.forEach(input => input.setAttribute('required', 'true'));
  } else {
    fieldsDiv.style.display = 'none';
    inputs.forEach(input => input.removeAttribute('required'));
  }
}

function handleAddUpdateEvent(e) {
  e.preventDefault();
  const type = document.getElementById('update-type').value;
  const tag = document.getElementById('update-tag').value.trim();
  const tagTa = document.getElementById('update-tag-ta').value.trim();
  const title = document.getElementById('update-title').value.trim();
  const titleTa = document.getElementById('update-title-ta').value.trim();
  const desc = document.getElementById('update-desc').value.trim();
  const descTa = document.getElementById('update-desc-ta').value.trim();
  
  let newUpdate = {
    id: Date.now().toString(),
    type: type,
    tag: tag,
    tagTa: tagTa,
    title: title,
    titleTa: titleTa,
    desc: desc,
    descTa: descTa,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  };
  
  if (type === 'Upcoming Event') {
    newUpdate.day = document.getElementById('update-event-day').value.trim();
    newUpdate.month = document.getElementById('update-event-month').value.trim();
    newUpdate.monthTa = document.getElementById('update-event-month-ta').value.trim();
    newUpdate.time = document.getElementById('update-event-time').value.trim();
    newUpdate.location = document.getElementById('update-event-loc').value.trim();
    newUpdate.locationTa = document.getElementById('update-event-loc-ta').value.trim();
  }
  
  updatesDatabase.unshift(newUpdate);
  localStorage.setItem('aiadmk_updates_db', JSON.stringify(updatesDatabase));
  
  // Refresh lists
  const btnConst = document.getElementById('tab-constituency');
  const activeTab = (btnConst && btnConst.classList.contains('active')) ? 'constituency' : 'party';
  populateNotifications(activeTab);
  setupMeetingsList();
  populateAdminUpdatesTable();
  
  // Reset Form
  document.getElementById('admin-add-update-form').reset();
  toggleEventFields();
}

function deleteUpdateItem(id) {
  if (confirm("Are you sure you want to delete this announcement / event?")) {
    updatesDatabase = updatesDatabase.filter(u => u.id !== id);
    localStorage.setItem('aiadmk_updates_db', JSON.stringify(updatesDatabase));
    
    const btnConst = document.getElementById('tab-constituency');
    const activeTab = (btnConst && btnConst.classList.contains('active')) ? 'constituency' : 'party';
    populateNotifications(activeTab);
    setupMeetingsList();
    populateAdminUpdatesTable();
  }
}

function populateAdminUpdatesTable() {
  const tbody = document.getElementById('admin-updates-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  if (updatesDatabase.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted);">No active updates or events schedule.</td></tr>`;
    return;
  }
  
  updatesDatabase.forEach(u => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${u.type}</strong></td>
      <td>${u.tag} / ${u.tagTa}</td>
      <td>${u.title} <br><small style="color:var(--primary-green);">${u.titleTa}</small></td>
      <td>${u.desc.substring(0, 50)}...</td>
      <td>
        <button class="btn-admin-action btn-admin-delete" onclick="deleteUpdateItem('${u.id}')" title="Delete Update">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// 9. Admin CSV Export Database
function exportMembersToCSV() {
  if (membersDatabase.length === 0) {
    alert("No registered member cards to export.");
    return;
  }

  // Construct CSV Header with UTF-8 BOM so Excel opens Tamil text correctly
  let csvContent = "\uFEFF";
  csvContent += "ID No,User Email,Full Name,Father's Name,DOB,Age,Blood Group,Mobile Number,Union/Ward,Join Date\n";

  membersDatabase.forEach(m => {
    const row = [
      m.id,
      m.email || 'N/A',
      `"${m.name.replace(/"/g, '""')}"`,
      `"${(m.fatherName || '').replace(/"/g, '""')}"`,
      m.dob,
      m.age,
      m.blood,
      m.phone,
      `"${m.union.replace(/"/g, '""')}"`,
      m.joinDate
    ];
    csvContent += row.join(",") + "\n";
  });

  // Trigger file download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "admk_members_database.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
