import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, Plus, X } from 'lucide-react'
import PageDivider from '../../components/common/PageDivider.jsx'

const trustPoints = [
  'Google (4.2 out of 5)',
  'Justdial (4.5 out of 5)',
  '75,000+ Patients treated',
  '20+ Years of experience',
  'Practo (4 out of 5)',
]

const careFeatures = [
  {
    title: 'Beyond prakruti: Understanding your current imbalance',
    text: 'Each care plan begins with a focused Ayurvedic assessment to identify the underlying imbalance, ensuring treatment addresses the root cause rather than symptoms.',
  },
  {
    title: 'Disease pathway-based care, not generic prescriptions',
    text: 'Treatment is designed using Ayurvedic principles such as Prakruti, Vikruti, and disease progression, making fixed or generic approaches unsuitable.',
  },
  {
    title: 'Care that evolves with your response',
    text: 'Technology supports assessment and progress tracking, allowing care to be refined over time while treatment decisions remain clinician-led.',
  },
]

const categories = [
  {
    title: 'Digestive Care',
    symptomImage:
      'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=280&q=80',
    symptoms: [
      'Feeling bloated or heavy after meals',
      'Frequent acidity or burning sensation',
      'Gas or abdominal discomfort',
      'Loss of appetite',
      'Constipation or irregular bowel movements',
      'Digestion feels slow or incomplete',
    ],
    commonlyKnownAs: 'Dyspepsia, GERD, Gastritis, Chronic Constipation, IBS, Fatty Liver',
  },
  {
    title: 'Stress & Sleep Care',
    symptomImage:
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=280&q=80',
    symptoms: [
      'Difficulty falling asleep',
      'Waking up frequently at night',
      'Feeling mentally exhausted',
      'Constant overthinking or worry',
      'Difficulty concentrating',
      'Restless or unsettled mind',
    ],
    commonlyKnownAs: 'Insomnia, Anxiety, Chronic Stress, Burnout',
  },
  {
    title: 'Metabolic Care',
    symptomImage:
      'https://images.unsplash.com/photo-1517341729285-34ff5c92544c?auto=format&fit=crop&w=280&q=80',
    symptoms: [
      'Gradual or unexplained weight gain',
      'Feeling low on energy most days',
      'Strong sugar or snack cravings',
      'Body feels slow or sluggish',
      'Fat accumulation around the waist',
    ],
    commonlyKnownAs: 'Obesity, Prediabetes, Type 2 Diabetes, Hypothyroidism',
  },
  {
    title: 'Joint & Mobility Care - Common Symptoms',
    symptomImage:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=280&q=80',
    symptoms: [
      'Ongoing joint pain',
      'Back pain that comes and goes',
      'Stiffness after waking up or sitting',
      'Pain while walking or climbing stairs',
      'Difficulty getting up from the floor or chair',
      'Reduced flexibility or movement',
    ],
    commonlyKnownAs: 'Arthritis, Osteoarthritis, Sciatica, Chronic Back Pain, Spondylosis',
  },
  {
    title: "Women's Health Care - Common Symptoms",
    symptomImage:
      'https://images.unsplash.com/photo-1516589091380-5d60187151e7?auto=format&fit=crop&w=280&q=80',
    symptoms: [
      'Irregular or delayed periods',
      'Painful menstruation',
      'Discomfort before periods (PMS)',
      'Mood changes around cycles',
      'Feeling tired or drained during periods',
    ],
    commonlyKnownAs: 'PCOS, Dysmenorrhea, PMS, Hormonal Imbalance, Perimenopause Symptoms',
  },
]

const planSteps = [
  {
    step: 'Step 1',
    title: 'Comprehensive online consultation with ai-powered prakruti-vikruti assessment & root cause analysis',
    desc: 'Your consultation goes beyond symptom discussion. We evaluate your constitutional profile (Prakruti), current imbalance (Vikruti), disease stage, and relevant health parameters to understand how the condition has developed and where intervention is most effective.',
    image:
      'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f20e528d5b45f4804bfe33_imgaee-p-1600.jpg',
    points: [
      {
        title: 'Prakruti-vikruti assessment',
        text: 'A detailed evaluation of your inherent constitution (Prakruti) and present doshic imbalance (Vikruti) to understand how your system responds to ahara (diet), vihara (lifestyle), stress, and environmental factors.',
        icon:
          'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f20494b88bf69184063f76_icon1.svg',
      },
      {
        title: 'Samprapti-based root cause analysis',
        text: 'Systematic assessment of the disease pathway (Samprapti), agni status, and dhatu involvement to identify the core drivers of imbalance and determine the most appropriate line of treatment.',
        icon:
          'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f20494dfdaaed420092706_icon%20sc2.svg',
      },
    ],
  },
  {
    step: 'Step 2',
    title: 'AI-enabled personalized chikitsa protocol with clinical precision',
    desc: 'Based on detailed assessment findings, a structured chikitsa plan is developed targeting dosha balance, agni correction, and systemic restoration in a phased and individualized manner.',
    image:
      'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f20e528d5b45f4804bfe33_imgaee-p-1600.jpg',
    points: [
      {
        title: 'Truly individualized treatment design',
        text: 'Every prescription is tailored to your Prakruti, Vikruti, disease stage, strength (bala), and response capacity - avoiding generic, one-size-fits-all formulations.',
        icon:
          'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f20494b88bf69184063f76_icon1.svg',
      },
      {
        title: 'Clinically structured protocols supported by ai',
        text: 'Treatment pathways are designed using classical Ayurvedic principles and supported by data-driven refinement to enhance consistency, precision, and outcome tracking.',
        icon:
          'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f20494dfdaaed420092706_icon%20sc2.svg',
      },
      {
        title: 'Carefully selected & high-quality formulations',
        text: 'Medicines are chosen based on formulation logic, ingredient synergy, and therapeutic indication - ensuring suitability rather than routine prescribing.',
        icon:
          'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f20494b88bf69184063f76_icon1.svg',
      },
      {
        title: 'Practical diet & lifestyle guidance',
        text: 'Ahara and vihara recommendations are realistic and aligned with your daily routine, profession, and capacity - focusing on sustainable improvements rather than drastic lifestyle disruption.',
        icon:
          'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f20494dfdaaed420092706_icon%20sc2.svg',
      },
    ],
  },
  {
    step: 'Step 3',
    title: 'Continuous care with ai monitoring & adaptive treatment refinement',
    desc: 'Your treatment does not stop after the first consultation. We stay connected with you, track your progress regularly, and adjust your treatment whenever needed to ensure steady improvement.',
    image:
      'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f20e528d5b45f4804bfe33_imgaee-p-1600.jpg',
    points: [
      {
        title: 'Smart monitoring & dynamic adjustments',
        text: 'We regularly collect your symptom updates and responses. Based on your progress, doctors review and refine medicines and recommendations for better results.',
        icon:
          'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f20494b88bf69184063f76_icon1.svg',
      },
      {
        title: 'Interactive WhatsApp care & ongoing support',
        text: 'Your care plan is delivered via WhatsApp with guidance, educational content, reminders, and continuous support - with expert assistance available whenever required.',
        icon:
          'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f20494dfdaaed420092706_icon%20sc2.svg',
      },
    ],
  },
]

const programOutcomes = [
  {
    id: 'program-diabetes',
    title: 'Diabetes Care Program',
    desc:
      'A structured Ayurvedic metabolic care plan focused on improving blood sugar control, reducing insulin resistance, and restoring long-term metabolic balance.',
    duration: 'Average Outcomes (12-16 Weeks)',
    outcomes: [
      '1.0–1.8% HbA1c Reduction',
      '15–30 mg/dL Fasting Sugar Improvement',
      '4–6 kg Average Weight Reduction',
    ],
  },
  {
    id: 'program-digestive',
    title: 'Digestive Care Program',
    desc:
      'A root-cause digestive program designed to correct Agni imbalance, reduce acidity, bloating, and regulate bowel movements.',
    duration: 'Average Outcomes (8-12 Weeks)',
    outcomes: [
      '70% Reduction in Bloating Episodes',
      '60% Improvement in Acidity Symptoms',
      '80% Better Bowel Regularity',
    ],
  },
  {
    id: 'program-stress-sleep',
    title: 'Stress & Sleep Care Program',
    desc:
      'A nervous system–focused Ayurvedic care plan to reduce stress load, improve sleep quality, and restore mental clarity.',
    duration: 'Average Outcomes (8-12 Weeks)',
    outcomes: [
      '65% Improvement in Sleep Quality',
      '50% Reduction in Anxiety Symptoms',
      '40% Reduction in Night Awakenings',
    ],
  },
  {
    id: 'program-joint-arthritis',
    title: 'Joint & Arthritis Care Program',
    desc: 'An inflammation-focused care plan aimed at reducing joint pain, stiffness, and improving mobility.',
    duration: 'Average Outcomes (12-16 Weeks)',
    outcomes: [
      '60% Reduction in Joint Pain',
      '45% Improved Mobility Score',
      '50% Reduction in Morning Stiffness',
    ],
  },
  {
    id: 'program-womens-hormonal',
    title: "Women’s Hormonal Care Program",
    desc:
      'A hormone-balancing Ayurvedic program for PCOS, irregular cycles, PMS, and metabolic-hormonal imbalances.',
    duration: 'Average Outcomes (16-24 Weeks)',
    outcomes: [
      '70% Improvement in Cycle Regularity',
      '50% Reduction in Acne & Hair Fall',
      '20–30% Improvement in Insulin Resistance Markers',
    ],
  },
]

const discoverImage = 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f42d3b7620bde3f5ccf9ff_cta%20image1.jpg'
const featureIconImage = 'https://www.ayurcentralonline.com/wp-content/uploads/webp_images/Untitled-design-54.webp'
const stepImage = 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80'
const treatmentPackageImage =
  'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66fce877682406860bc9b924_Treatment%20(1).png'

const treatmentPackages = [
  {
    id: 'package-diabetes',
    title: 'Diabetes Care Program',
    desc:
      'A structured Ayurvedic metabolic care plan focused on improving blood sugar control, reducing insulin resistance, and restoring long-term metabolic balance.',
    averageLabel: 'Average outcomes (12-16 weeks)',
    metrics: [
      { value: '1.0-1.8%', label: 'HbA1c Reduction' },
      { value: '15-30 mg/dL', label: 'Fasting Sugar Improvement' },
      { value: '4-6 kg', label: 'Average Weight Reduction' },
    ],
    cta: '',
  },
  {
    id: 'package-digestive',
    title: 'Digestive Care Program',
    desc:
      'A root-cause digestive program designed to correct Agni imbalance, reduce acidity, bloating, and regulate bowel movements.',
    averageLabel: 'Average outcomes (8-12 weeks)',
    metrics: [
      { value: '70%', label: 'Reduction in Bloating Episodes' },
      { value: '60%', label: 'Improvement in Acidity Symptoms' },
      { value: '80%', label: 'Better Bowel Regularity' },
    ],
    cta: '',
  },
  {
    id: 'package-stress-sleep',
    title: 'Stress & Sleep Care Program',
    desc:
      'A nervous system?focused Ayurvedic care plan to reduce stress load, improve sleep quality, and restore mental clarity.',
    averageLabel: 'Average outcomes (8-12 weeks)',
    metrics: [
      { value: '65%', label: 'Improvement in Sleep Quality' },
      { value: '50%', label: 'Reduction in Anxiety Symptoms' },
      { value: '40%', label: 'Reduction in Night Awakenings' },
    ],
    cta: '',
  },
  {
    id: 'package-joint-arthritis',
    title: 'Joint & Arthritis Care Program',
    desc: 'An inflammation-focused care plan aimed at reducing joint pain, stiffness, and improving mobility.',
    averageLabel: 'Average outcomes (12-16 weeks)',
    metrics: [
      { value: '60%', label: 'Reduction in Joint Pain' },
      { value: '45%', label: 'Improved Mobility Score' },
      { value: '50%', label: 'Reduction in Morning Stiffness' },
    ],
    cta: '',
  },
  {
    id: 'package-womens-hormonal',
    title: "Women's Hormonal Care Program",
    desc:
      'A hormone-balancing Ayurvedic program for PCOS, irregular cycles, PMS, and metabolic-hormonal imbalances.',
    averageLabel: 'Average outcomes (16-24 weeks)',
    metrics: [
      { value: '70%', label: 'Improvement in Cycle Regularity' },
      { value: '50%', label: 'Reduction in Acne & Hair Fall' },
      { value: '20-30%', label: 'Improvement in Insulin Resistance Markers.' },
    ],
    cta: '',
  },
]

const experienceCardImage =
  'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f40a46802a8ddedec801b8_team%201.jpg'

const veteranExperts = Array.from({ length: 4 }, (_, index) => ({
  id: `veteran-${index + 1}`,
  name: 'Dr. Manoj Kumar Samantaray',
  credentials: 'BAMS, MD(Ayu), PhD',
  experience: '25+ Years of experience',
  description: 'Pellentesque massa morbi aliquet posuere molestie rhoncus porta vestibulum enim egestas litu aliquet.',
  image: experienceCardImage,
}))

const experienceMetricIcon =
  'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66fba0ffb89bd405a8ce0e6b_2.png'

const experienceMetrics = [
  { id: 'metric-1', value: '6 Years', label: 'Average heart age improvement' },
  { id: 'metric-2', value: '1.96%', label: 'Average HbA1c Reduction' },
  { id: 'metric-3', value: '50%', label: 'Improvement in physical fitness' },
  { id: 'metric-4', value: '58%', label: 'Reduction in diabetes distress' },
  { id: 'metric-5', value: '58%', label: 'Reduction in diabetes distress' },
  { id: 'metric-6', value: '5kg', label: 'Average Weight Loss' },
  { id: 'metric-7', value: '40%', label: 'Improvement in emotional health' },
  { id: 'metric-8', value: '6 Years', label: 'Average heart age improvement' },
]

const curiousBackgroundImage =
  'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f26747448116e5b286487d_cta%20image%20.jpg'

const curiousPoints = ['15 Questions', '60 Seconds', 'A lifetime of insights.']

const favoriteRoutineCards = [
  {
    id: 'routine-1',
    name: 'Sahara Smith',
    video:
      'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0%2F66f27d066b470d1610284255_video1-transcode.mp4',
    avatar: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f27f24c2bdf55afc6cb315_avatar%201.jpg',
  },
  {
    id: 'routine-2',
    name: 'Romin Wilson',
    video:
      'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0%2F66f281c85d1667682e1a37c4_video%202-transcode.mp4',
    avatar: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f27f2466d331bb3b60c8ba_avatar%202.jpg',
  },
  {
    id: 'routine-3',
    name: 'Katty Corl',
    video:
      'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0%2F66f282c3deef0306f858953e_video3-transcode.mp4',
    avatar: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f27f243a844ce3f33d0512_avatar%203.jpg',
  },
  {
    id: 'routine-4',
    name: 'Sahara Smith',
    video:
      'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0%2F66f27d066b470d1610284255_video1-transcode.mp4',
    avatar: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f27f24c2bdf55afc6cb315_avatar%201.jpg',
  },
  {
    id: 'routine-5',
    name: 'Katty Corl',
    video:
      'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0%2F66f281c85d1667682e1a37c4_video%202-transcode.mp4',
    avatar: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f27f243a844ce3f33d0512_avatar%203.jpg',
  },
]

const testimonialImage = 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f3b4f8e222a1653336cb4b_test1.jpg'
const testimonialAvatar = 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f27f24c2bdf55afc6cb315_avatar%201.jpg'
const lifetimeBannerImage = 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f356fabccb9f877ebc4ef6_c1.jpeg'
const transformCardImage = 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f356fabccb9f877ebc4ef6_c1-p-800.jpeg'

const clientTestimonials = Array.from({ length: 4 }, (_, index) => ({
  id: `testimonial-${index + 1}`,
  quote: '"My skin has never looked this flawless."',
  text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. it sed do eiusmod tempor incididunt ut labore et dolore magna alique.',
  author: '-Mary Smith, 24 years old',
  image: testimonialImage,
  avatar: testimonialAvatar,
}))

const transformSkinCards = Array.from({ length: 4 }, (_, index) => ({
  id: `transform-${index + 1}`,
  title: 'Unlocking the Power of Bhringarj: Enhancing Hair Health Naturally',
  image: transformCardImage,
}))

const faqGroups = [
  {
    id: 'get-started',
    label: 'Get Started',
    items: [
      {
        id: 'get-started-1',
        question: 'What is AyurCentral and how is it different?',
        answer:
          'AyurCentral offers structured, doctor-led Ayurvedic care plans powered by AI-supported Prakriti-Vikriti assessment and root cause analysis. Unlike generic treatments, every plan is personalized, monitored, and adjusted based on your progress.',
      },
      {
        id: 'get-started-2',
        question: 'How does the AI-powered Prakriti-Vikriti assessment work?',
        answer:
          'You complete a detailed health evaluation covering symptoms, lifestyle, digestion, sleep, stress, and medical history. Our AI system analyzes patterns to identify your Prakriti (constitution), Vikriti (current imbalance), and possible root causes, which are then reviewed by an Ayurvedic doctor before finalizing your plan.',
      },
      {
        id: 'get-started-3',
        question: 'Will I consult a real Ayurvedic doctor?',
        answer:
          'Yes. Every care plan is reviewed and prescribed by qualified Ayurvedic doctors. Technology supports the process, but clinical decisions are made by experienced practitioners.',
      },
      {
        id: 'get-started-4',
        question: 'Is the consultation completely online?',
        answer:
          'Yes. From assessment to follow-ups, everything happens online through structured consultations and guided communication, making it convenient and accessible from anywhere.',
      },
      {
        id: 'get-started-5',
        question: 'Is Ayurvedic treatment safe?',
        answer:
          'Ayurvedic treatment focuses on restoring natural balance through personalized medicines, diet, and lifestyle guidance. All recommendations are made after reviewing your health history to ensure suitability.',
      },
      {
        id: 'get-started-6',
        question: 'What information do I need to provide?',
        answer:
          "You'll share details about your symptoms, medical history, current medications, lifestyle habits, and any lab reports (if available). The more accurate the information, the more precise your care plan.",
      },
      {
        id: 'get-started-7',
        question: 'Is my health data secure?',
        answer:
          'Yes. Your medical information is handled with strict confidentiality and secure systems. It is used only for clinical evaluation and care management.',
      },
    ],
  },
  {
    id: 'care-plan',
    label: 'Care Plan',
    items: [
      {
        id: 'care-plan-1',
        question: 'How is my care plan personalized?',
        answer:
          'Your plan is designed based on your Prakriti (body constitution), Vikriti (current imbalance), root cause analysis, symptom patterns, lifestyle, digestion strength (Agni), stress levels, and medical history. It is not a standard template - every recommendation is tailored to you.',
      },
      {
        id: 'care-plan-2',
        question: 'What does the care plan include?',
        answer:
          'Your plan typically includes: Ayurvedic medicines, diet recommendations suited to your condition, practical lifestyle modifications, sleep and stress guidance, and follow-up and monitoring schedule. Everything is structured for real-world implementation.',
      },
      {
        id: 'care-plan-3',
        question: 'Are the medicines generic or customized?',
        answer:
          'Medicines are selected and formulated based on your specific imbalance and diagnosis. They are not one-size-fits-all combinations - they are chosen according to your clinical profile and treatment goals.',
      },
      {
        id: 'care-plan-4',
        question: 'Will I need to make drastic lifestyle changes?',
        answer:
          'No. Recommendations are realistic and aligned with your work schedule, food preferences, and daily routine. The goal is sustainable correction, not extreme restrictions.',
      },
      {
        id: 'care-plan-5',
        question: 'How long does the treatment usually take?',
        answer:
          'Duration depends on the condition, severity, and how long it has been present. Chronic conditions may require longer correction, while mild imbalances improve faster. Your doctor will guide you with a clear roadmap.',
      },
      {
        id: 'care-plan-6',
        question: "Can the treatment be adjusted if I don't see improvement?",
        answer:
          'Yes. Your progress is regularly reviewed. Based on response, medicines and recommendations are refined to improve effectiveness.',
      },
      {
        id: 'care-plan-7',
        question: 'Can I continue my existing medications?',
        answer:
          'In many cases, yes - but this must be discussed during consultation. Your doctor will evaluate compatibility and guide you safely.',
      },
    ],
  },
  {
    id: 'monitor-adjust',
    label: 'Monitor & Adjust',
    items: [
      {
        id: 'monitor-adjust-1',
        question: 'How is my progress monitored?',
        answer:
          'We track your symptoms, lab values (if applicable), energy levels, digestion, sleep, and overall response to treatment through structured follow-ups and regular check-ins via WhatsApp.',
      },
      {
        id: 'monitor-adjust-2',
        question: 'How often are follow-ups conducted?',
        answer:
          'Follow-ups are scheduled based on your condition and care plan. Typically, reviews happen at defined intervals to assess progress and adjust treatment if required.',
      },
      {
        id: 'monitor-adjust-3',
        question: 'Is there continuous support between consultations?',
        answer:
          'Yes. You can stay connected through our WhatsApp-based care system, where you receive guidance, reminders, and can ask questions related to your treatment.',
      },
      {
        id: 'monitor-adjust-4',
        question: 'What happens if my symptoms change?',
        answer:
          "If your symptoms improve, worsen, or change, the doctor is notified and your treatment plan may be modified accordingly. Ayurveda treatment evolves with your body's response.",
      },
      {
        id: 'monitor-adjust-5',
        question: 'Is the monitoring done by a person or AI?',
        answer:
          'Both. AI helps track patterns and flag changes, while qualified Ayurvedic doctors review your case and make clinical decisions when adjustments are needed.',
      },
      {
        id: 'monitor-adjust-6',
        question: 'What kind of content will I receive during the program?',
        answer:
          'You may receive educational guidance, diet tips, yoga or breathing recommendations, home remedies, and wellness resources - all aligned with your condition and care plan.',
      },
      {
        id: 'monitor-adjust-7',
        question: 'Can I talk to a human expert if needed?',
        answer:
          'Absolutely. If the AI assistant cannot resolve your query or you require clinical clarity, your case is escalated to a human expert.',
      },
    ],
  },
]

const HERO_FORM_STORAGE_KEY = 'ayurAptayuHomeHeroLastSubmittedAt'
const HERO_FORM_COOLDOWN_MS = 10 * 60 * 1000

function HomePage() {
  const [activeFaqGroupId, setActiveFaqGroupId] = useState(faqGroups[0].id)
  const [openFaqItems, setOpenFaqItems] = useState({})
  const [heroFormData, setHeroFormData] = useState({
    name: '',
    mobile: '',
  })
  const [heroFormErrors, setHeroFormErrors] = useState({
    name: '',
    mobile: '',
  })
  const [heroFormStatus, setHeroFormStatus] = useState({
    isSubmitting: false,
    message: '',
    type: '',
  })
  const [lastSubmittedAt, setLastSubmittedAt] = useState(null)
  const [showHeroFormSuccess, setShowHeroFormSuccess] = useState(false)

  const activeFaqGroup = useMemo(
    () => faqGroups.find((group) => group.id === activeFaqGroupId) ?? faqGroups[0],
    [activeFaqGroupId],
  )

  const handleFaqGroupChange = (groupId) => {
    setActiveFaqGroupId(groupId)
    setOpenFaqItems({})
  }

  const handleFaqToggle = (itemId) => {
    setOpenFaqItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }))
  }

  useEffect(() => {
    const storedTimestamp = localStorage.getItem(HERO_FORM_STORAGE_KEY)
    if (!storedTimestamp) {
      return
    }

    const parsedTimestamp = Number(storedTimestamp)
    if (!Number.isNaN(parsedTimestamp)) {
      setLastSubmittedAt(parsedTimestamp)
    }
  }, [])

  const getRemainingCooldownMs = () => {
    if (!lastSubmittedAt) {
      return 0
    }
    return Math.max(0, HERO_FORM_COOLDOWN_MS - (Date.now() - lastSubmittedAt))
  }

  const validateHeroForm = (formValues) => {
    const errors = { name: '', mobile: '' }
    const trimmedName = formValues.name.trim()
    const mobileValue = formValues.mobile.trim()

    if (!trimmedName) {
      errors.name = 'Name is required.'
    }

    if (!mobileValue) {
      errors.mobile = 'Mobile number is required.'
    } else if (!/^\d+$/.test(mobileValue)) {
      errors.mobile = 'Mobile number must contain only digits.'
    } else if (mobileValue.length !== 10) {
      errors.mobile = 'Mobile number must be exactly 10 digits.'
    }

    return errors
  }

  const handleHeroNameChange = (event) => {
    const { value } = event.target
    setHeroFormData((prev) => ({ ...prev, name: value }))
    setHeroFormErrors((prev) => ({ ...prev, name: '' }))
    setHeroFormStatus((prev) => ({ ...prev, message: '', type: '' }))
  }

  const handleHeroMobileChange = (event) => {
    const { value } = event.target
    const digitsOnly = value.replace(/\D/g, '').slice(0, 10)

    setHeroFormData((prev) => ({ ...prev, mobile: digitsOnly }))
    setHeroFormErrors((prev) => ({ ...prev, mobile: '' }))
    setHeroFormStatus((prev) => ({ ...prev, message: '', type: '' }))
  }

  const handleHeroFormSubmit = async (event) => {
    event.preventDefault()

    const remainingCooldown = getRemainingCooldownMs()
    if (remainingCooldown > 0) {
      setHeroFormStatus({
        isSubmitting: false,
        type: 'error',
        message: 'You have already submitted. Please try again after 10 minutes.',
      })
      return
    }

    const validationErrors = validateHeroForm(heroFormData)
    setHeroFormErrors(validationErrors)

    if (validationErrors.name || validationErrors.mobile) {
      return
    }

    setHeroFormStatus({
      isSubmitting: true,
      type: '',
      message: '',
    })

    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          const isSuccess = Math.random() >= 0.2
          if (isSuccess) {
            resolve(true)
          } else {
            reject(new Error('Failed'))
          }
        }, 1500)
      })

      const submittedAt = Date.now()
      localStorage.setItem(HERO_FORM_STORAGE_KEY, String(submittedAt))
      setLastSubmittedAt(submittedAt)
      setHeroFormData({
        name: '',
        mobile: '',
      })
      setHeroFormErrors({
        name: '',
        mobile: '',
      })
      setHeroFormStatus({
        isSubmitting: false,
        type: 'success',
        message: 'Form submitted successfully. Our support team will contact you shortly.',
      })
      setShowHeroFormSuccess(true)
    } catch (error) {
      setHeroFormStatus({
        isSubmitting: false,
        type: 'error',
        message: 'Something went wrong. Please try again.',
      })
    }
  }

  const handleHeroSuccessOk = () => {
    setShowHeroFormSuccess(false)
    setHeroFormStatus({
      isSubmitting: false,
      message: '',
      type: '',
    })
  }

  const renderHeroForm = ({ formId, formClassName = '', nameInputId, mobileInputId }) => (
    <form
      id={formId}
      className={`ayurAptayu-heroForm ${formClassName}`.trim()}
      onSubmit={handleHeroFormSubmit}
      noValidate
    >
      {showHeroFormSuccess ? (
        <div className="ayurAptayu-heroFormSuccess">
          <p className="ayurAptayu-heroFormStatus is-success">
            {heroFormStatus.message || 'Form submitted successfully. Our support team will contact you shortly.'}
          </p>
          <button type="button" className="ayurAptayu-cta ayurAptayu-cta-ok" onClick={handleHeroSuccessOk}>
            OK
          </button>
        </div>
      ) : null}
      {!showHeroFormSuccess ? (
        <>
          <div className="ayurAptayu-heroFormField">
            <label htmlFor={nameInputId}>Name</label>
            <input
              id={nameInputId}
              type="text"
              value={heroFormData.name}
              onChange={handleHeroNameChange}
              disabled={heroFormStatus.isSubmitting}
              autoComplete="name"
            />
            {heroFormErrors.name ? <p className="ayurAptayu-heroFormError">{heroFormErrors.name}</p> : null}
          </div>

          <div className="ayurAptayu-heroFormField">
            <label htmlFor={mobileInputId}>Mobile Number</label>
            <div className="ayurAptayu-heroPhoneInputWrap">
              <span className="ayurAptayu-heroPhonePrefix">+91</span>
              <input
                id={mobileInputId}
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                value={heroFormData.mobile}
                onChange={handleHeroMobileChange}
                disabled={heroFormStatus.isSubmitting}
                autoComplete="tel-national"
              />
            </div>
            {heroFormErrors.mobile ? <p className="ayurAptayu-heroFormError">{heroFormErrors.mobile}</p> : null}
          </div>

          <button type="submit" className="ayurAptayu-cta" disabled={heroFormStatus.isSubmitting}>
            {heroFormStatus.isSubmitting ? 'Submitting...' : 'Request Callback'}
          </button>

          {heroFormStatus.message ? (
            <p className={`ayurAptayu-heroFormStatus ${heroFormStatus.type === 'success' ? 'is-success' : 'is-error'}`}>
              {heroFormStatus.message}
            </p>
          ) : null}
        </>
      ) : null}
    </form>
  )

  return (
    <div className="ayurAptayu-homePage">
      <section className="ayurAptayu-hero ayurAptayu-container">
        <div className="ayurAptayu-heroContent">
          
          <div className="ayurAptayu-heroPills flex gap-[10px]" ><span className="ayurAptayu-pill" >AI-Powered</span><span className="ayurAptayu-pill">Fully Online</span></div>
          <h1>Evidence-based ayurvedic treatment, powered by technology!</h1>
          <h2 className="ayurAptayu-heroSubheading hidden">Discover personalised care plans based on Prakruti, Vikruti, and Samprapti</h2>
          <p className="ayurAptayu-heroSubtitle hidden">
            Our Ayurvedic care plans are meticulously crafted to address the root causes of health issues, integrating
            time-tested Ayurvedic wisdom with technology and AI-supported, evidence-informed approaches.
          </p>
          {renderHeroForm({
            formId: 'ayurAptayu-heroForm',
            nameInputId: 'ayurAptayu-heroName',
            mobileInputId: 'ayurAptayu-heroMobile',
          })}
        </div>
        <div className="ayurAptayu-heroVisual" aria-label="Family exploring care options" role="img" />
      </section>
      <PageDivider />

      <section className="ayurAptayu-trustStrip">
        <div className="ayurAptayu-container ayurAptayu-trustStripViewport">
          <div className="ayurAptayu-trustItems">
            <div className="ayurAptayu-trustItemsGroup">
              {trustPoints.map((point) => (
                <span key={`trust-primary-${point}`} className="ayurAptayu-trustItem">
                  <i />
                  {point}
                </span>
              ))}
            </div>

            <div className="ayurAptayu-trustItemsGroup" aria-hidden="true">
              {trustPoints.map((point) => (
                <span key={`trust-duplicate-${point}`} className="ayurAptayu-trustItem">
                  <i />
                  {point}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-splitSection">
        <img src={discoverImage} alt="Skincare ayurvedic treatment" className="ayurAptayu-discoverImage" />
        <div className="ayurAptayu-discoverContent">
          <span className="ayurAptayu-pill ayurAptayu-pillMuted">AI-Powered Prakruti-Vikruti Analysis</span>
          <h2>Discover personalised care plans based on Prakruti, Vikruti and Samprapti</h2>
          <p>
          Our Ayurvedic care plans are meticulously crafted to address the root causes of health issues, integrating time-tested Ayurvedic wisdom with technology and AI-supported, evidence-informed approaches.
          </p>
          <div className="ayurAptayu-featureList">
            {careFeatures.map((feature) => (
              <article key={feature.title} className="ayurAptayu-featureItem">
                <div className="ayurAptayu-featureItemConten flex gap-[0.75rem] items-center">
                <span className="ayurAptayu-featureIcon">
                  <img src={featureIconImage} alt="" aria-hidden="true" />
                </span>
                
                  <h3>{feature.title}</h3>
                  </div>
                  <p>{feature.text}</p>
               
              </article>
            ))}
          </div>
        </div>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-categorySection">
        <h2>#RootCauseTreatment using technology for measurable outcomes</h2>
        <p>
          Care begins by mapping how imbalance has developed - examining digestion, metabolic load, affected systems,
          and disease stage. Treatment is then delivered in phases.
        </p>
        <div className="ayurAptayu-categoryGrid">
          {categories.map((category) => (
            <article key={category.title} className="ayurAptayu-categoryItem">
              <h3>{category.title}</h3>
              <ul className="ayurAptayu-categorySymptoms">
                {category.symptoms.map((symptom) => (
                  <li key={symptom} className="ayurAptayu-categorySymptom">
                    <span className="ayurAptayu-categorySymptomImageWrap" aria-hidden="true">
                      <img src={category.symptomImage} alt="" className="ayurAptayu-categorySymptomImage" loading="lazy" />
                    </span>
                    <p className="ayurAptayu-categorySymptomText">{symptom}</p>
                  </li>
                ))}
              </ul>
              <div className="ayurAptayu-categoryFooter">
                <p className="ayurAptayu-categoryKnownAs">
                  <strong>Known as:</strong>{' '}
                  <span>{category.commonlyKnownAs}</span>
                </p>
                <div className="ayurAptayu-categoryCallbackWrap flex gap-[10px] align-center justify-center mt-[10px]">
                  <a href="#ayurAptayu-heroForm" className="ayurAptayu-categoryCallback">
                    View Details
                  </a>
                  <a type="button" className="ayurAptayu-categoryCallback">
                    Request Callback
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-stepsSection">
        <h2>3 step care plan - simple, effective & outcome-focused </h2>
        <div className="ayurAptayu-stepsList">
          {planSteps.map((item, index) => (
            <article
              key={item.step}
              className={`ayurAptayu-stepCard ayurAptayu-stepCardFirst ${
                index === 0 ? 'ayurAptayu-stepCardOne' : index === 1 ? 'ayurAptayu-stepCardTwo' : 'ayurAptayu-stepCardThree'
              }`}
            >
              <div className="ayurAptayu-stepContent">
                <span className="ayurAptayu-pill">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="ayurAptayu-pointGrid">
                  {item.points.map((point) => (
                    <div key={point.title} className="ayurAptayu-pointItem">
                       <div className="ayurAptayu-pointItemContent flex gap-[0.75rem] items-center">
                      <span className="ayurAptayu-dot">
                        {point.icon ? <img src={point.icon} alt="" aria-hidden="true" className="ayurAptayu-dotIcon" /> : null}
                      </span>
                     
                        <h4>{point.title}</h4>
                        </div>
                        <p>{point.text}</p>
                     
                    </div>
                  ))}
                </div>
              </div>
              <img src={item.image || stepImage} alt="Care plan visual" className="ayurAptayu-stepImage" />
            </article>
          ))}
        </div>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-packageSection">
        <div className="ayurAptayu-packageHeader">
          <h2>Measurable outcomes across our care programs</h2>
          <button type="button" className="ayurAptayu-packageHeaderLink hidden">
            <span>All treatment packages</span>
            <span className="ayurAptayu-packageHeaderLinkIcon" aria-hidden="true">
              <ArrowRight size={14} />
            </span>
          </button>
        </div>

        <div className="ayurAptayu-packageGrid">
          {treatmentPackages.map((pkg, index) => (
            <article
              key={pkg.id}
              className={`ayurAptayu-packageCard ${index % 2 === 1 ? 'ayurAptayu-packageCard-even' : ''}`.trim()}
            >
              <h3 className="ayurAptayu-packageCardTitle">{pkg.title}</h3>
              <div className="ayurAptayu-packageCardMain">
                <img src={treatmentPackageImage} alt={pkg.title} className="ayurAptayu-packageCardImage" />
                <div className="ayurAptayu-packageCardBody">
                  <p>{pkg.desc}</p>
                  

                  <div className="ayurAptayu-packageMetricGrid">
                    {pkg.metrics.map((metric, metricIndex) => (
                      <div key={`${metric.label}-${metricIndex}`} className="ayurAptayu-packageMetricItem">
                        <span className="ayurAptayu-packageMetricValue">{metric.value}</span>
                        <span className="ayurAptayu-packageMetricLabel">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="ayurAptayu-packageCardAverage">{pkg.averageLabel}</p>

                  {pkg.cta ? (
                    <button type="button" className="ayurAptayu-packageCardCta">
                      {pkg.cta}
                    </button>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-experienceSection">
        <h2>Built on decades of clinical excellence from India&apos;s leading vaidyas</h2>
        <p>
          Each care plan is thoughtfully designed, validated, and overseen to maintain the highest standards of
          classical integrity, modern relevance, and measurable patient progress.
        </p>
        <div className="ayurAptayu-experienceGrid">
          {veteranExperts.map((expert) => (
            <article key={expert.id} className="ayurAptayu-experienceCard">
              <img src={expert.image} alt={expert.name} className="ayurAptayu-experienceCardImage" />
              <h3>{expert.name}</h3>
              <p className="ayurAptayu-experienceMeta">{expert.credentials}</p>
              <p className="ayurAptayu-experienceYears">{expert.experience}</p>
              <p className="ayurAptayu-experienceDesc">{expert.description}</p>
            </article>
          ))}
        </div>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-experienceMetricSection hidden">
        <div className="ayurAptayu-experienceMetricGrid">
          {experienceMetrics.map((metric) => (
            <article key={metric.id} className="ayurAptayu-experienceMetricCard">
              <span className="ayurAptayu-experienceMetricPill">Diabetes Reversal Package</span>
              <div className="ayurAptayu-experienceMetricMain">
                <img src={experienceMetricIcon} alt="" aria-hidden="true" className="ayurAptayu-experienceMetricIcon" />
                <div className="ayurAptayu-experienceMetricText">
                  <p className="ayurAptayu-experienceMetricValue">{metric.value}</p>
                  <p className="ayurAptayu-experienceMetricLabel">{metric.label}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-curiousSection">
        <div className="ayurAptayu-curiousBackdrop" style={{ backgroundImage: `url('${curiousBackgroundImage}')` }}>
          <div className="ayurAptayu-curiousPanel">
            <h2>Curious about your Prakriti?</h2>
            <h3>Discover it with our AI-Powered tool</h3>
            <p>
              Based on thousands of years of Ayurvedic wisdom, this evaluation offers a fundamental approach to
              understanding how human body functions.
            </p>

            <div className="ayurAptayu-curiousStats">
              {curiousPoints.map((point) => (
                <article key={point} className="ayurAptayu-curiousStat">
                  <span className="ayurAptayu-curiousStatIcon">
                    <img src={featureIconImage} alt="" aria-hidden="true" />
                  </span>
                  <p>{point}</p>
                </article>
              ))}
            </div>

            <button type="button" className="ayurAptayu-curiousCta">
              <span>Take Assesment</span>
              <ArrowRight aria-hidden="true" size={16} />
            </button>
          </div>
        </div>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-favoriteSection">
        <h2>Stories of progress & recovery</h2>
        <div className="ayurAptayu-favoriteGrid">
          {favoriteRoutineCards.map((item) => (
            <article key={item.id} className="ayurAptayu-favoriteCard">
              <div className="ayurAptayu-favoriteMedia">
                <video className="ayurAptayu-favoriteVideo" autoPlay muted loop playsInline preload="metadata">
                  <source src={item.video} type="video/mp4" />
                </video>
                <div className="ayurAptayu-favoriteAuthor">
                  <img src={item.avatar} alt="" aria-hidden="true" className="ayurAptayu-favoriteAvatar" />
                  <span>{item.name}</span>
                </div>
              </div>
              <div className="ayurAptayu-favoriteBody">
                <h3>Diabetes Reversal Package</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-clientsSection">
        <div className="ayurAptayu-clientsHeader">
          <h2>What our clients say about us</h2>
          <div className="ayurAptayu-clientsNav" aria-hidden="true">
            <button type="button" aria-label="Previous testimonial">
              <ArrowLeft aria-hidden="true" size={16} />
            </button>
            <button type="button" aria-label="Next testimonial">
              <ArrowRight aria-hidden="true" size={16} />
            </button>
          </div>
        </div>

        <div className="ayurAptayu-clientsGrid">
          {clientTestimonials.map((item) => (
            <article key={item.id} className="ayurAptayu-clientCard">
              <div className="ayurAptayu-clientCardBody">
                <p className="ayurAptayu-clientQuote">{item.quote}</p>
                <p className="ayurAptayu-clientText">{item.text}</p>
                <div className="ayurAptayu-clientAuthor">
                  <img src={item.avatar} alt="" aria-hidden="true" className="ayurAptayu-clientAuthorAvatar" />
                  <p>{item.author}</p>
                </div>
              </div>
              <img src={item.image} alt="Client skincare routine" className="ayurAptayu-clientCardImage" />
            </article>
          ))}
        </div>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-lifetimeSection">
        <div className="ayurAptayu-lifetimeBanner" style={{ backgroundImage: `url('${lifetimeBannerImage}')` }}>
          <div className="ayurAptayu-lifetimeContent">
            <h2>Take the first step toward personalized, root-cause driven ayurvedic health restoration!
            </h2>
            {renderHeroForm({
              formId: 'ayurAptayu-lifetimeForm',
              formClassName: 'ayurAptayu-lifetimeForm',
              nameInputId: 'ayurAptayu-lifetimeName',
              mobileInputId: 'ayurAptayu-lifetimeMobile',
            })}
          </div>
        </div>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-transformSection">
        <h2>Transform your skin with our products</h2>
        <div className="ayurAptayu-transformGrid">
          {transformSkinCards.map((item) => (
            <article key={item.id} className="ayurAptayu-transformCard" style={{ backgroundImage: `url('${item.image}')` }}>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-faqSection">
        <div className="ayurAptayu-faqHeader">
          <h2>Frequently asked questions</h2>
          <div className="ayurAptayu-faqTabList" role="tablist" aria-label="FAQ categories">
            {faqGroups.map((group) => {
              const isActive = group.id === activeFaqGroup.id
              return (
                <button
                  key={group.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`ayurAptayu-faqTab ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleFaqGroupChange(group.id)}
                >
                  {group.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="ayurAptayu-faqGrid">
          {activeFaqGroup.items.map((item) => {
            const isOpen = !!openFaqItems[item.id]
            const answerId = `${item.id}-answer`
            return (
              <article key={item.id} className={`ayurAptayu-faqItem ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="ayurAptayu-faqTrigger"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => handleFaqToggle(item.id)}
                >
                  <span>{item.question}</span>
                  <span className="ayurAptayu-faqIcon" aria-hidden="true">
                    {isOpen ? <X size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div id={answerId} className="ayurAptayu-faqAnswerWrap">
                  <div className="ayurAptayu-faqAnswerInner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-newsletterSection">
        <div className="ayurAptayu-newsletterPanel">
          <div className="ayurAptayu-newsletterContent">
            <h2>Get trusted ayurvedic health insights delivered to you.</h2>
            <p>
              Receive curated health insights, lifestyle recommendations, and clinical updates directly from our
              expert team.
            </p>
          </div>

          <form className="ayurAptayu-newsletterForm" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="ayurAptayu-newsletter-email" className="ayurAptayu-newsletterLabel">
              Enter email id
            </label>
            <input
              id="ayurAptayu-newsletter-email"
              type="email"
              placeholder="Enter email id"
              className="ayurAptayu-newsletterInput"
            />
            <button type="submit" className="ayurAptayu-newsletterButton">
              <span>Subscribe</span>
              <ArrowRight aria-hidden="true" size={16} />
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default HomePage
