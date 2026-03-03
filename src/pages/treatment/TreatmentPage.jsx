import PageDivider from '../../components/common/PageDivider.jsx'

const proofItems = [
  { value: '5kg', trend: '↓', label: 'Average weight reduction' },
  { value: '5kg', trend: '↑', label: 'Average weight reduction' },
  { value: '5kg', trend: '↓', label: 'Average weight reduction' },
  { value: '5kg', trend: '↓', label: 'Average weight reduction' },
]

const benefits = [
  {
    title: 'Stress Care',
    image:
      'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66fa49b7dde36efb257e4e2b_1-p-500.png',
  },
  {
    title: 'Digestive Care',
    image:
      'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66fa49b7855ba4e9e0156caf_2-p-500.png',
  },
  {
    title: 'Joint Care',
    image:
      'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66fa49b79cf55f6314fa7707_3-p-500.png',
  },
  {
    title: 'Skin Care',
    image:
      'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66fa49b7e7d757f944c1c394_4-p-500.png',
  },
  {
    title: 'Pre-Diabetic Care',
    image:
      'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66fa49b7e7ab03a7d6704f36_5-p-500.png',
  },
  {
    title: 'Cardiac Protection Care',
    image:
      'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66fa49b7855ba4e9e0156ca3_6-p-500.png',
  },
]

const riskItems = [
  {
    title: 'Risk of Heart Disease',
    text: 'Increased blood sugar can strain blood vessels and raise cardiovascular complications.',
    icon: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f20494b88bf69184063f76_icon1.svg',
  },
  {
    title: 'Kidney Damage',
    text: 'Persistent imbalance may affect filtration function and increase chronic kidney risks.',
    icon: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f20494dfdaaed420092706_icon%20sc2.svg',
  },
  {
    title: 'Vision Loss',
    text: 'Unmanaged levels can impact retinal health and gradually reduce visual clarity.',
    icon: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f20494dfdaaed420092706_icon%20sc2.svg',
  },
  {
    title: 'Severe Nerve Damage',
    text: 'Nerve weakness can worsen over time, affecting sensation, mobility, and healing.',
    icon: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f20494dfdaaed420092706_icon%20sc2.svg',
  },
]

const outcomes = Array.from({ length: 5 }, (_, index) => ({
  id: `outcome-${index + 1}`,
  title: 'Unlocking the Power of Bhringaraj: Enhancing Hair Health Naturally',
  image:
    'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f356fabccb9f877ebc4ef6_c1-p-1600.jpeg',
}))

const planFeatures = ['1 Appointment', 'Follow up calls and assistance', 'Service from experts', '4 clinics available']

const doctors = Array.from({ length: 6 }, (_, index) => ({
  id: `doctor-${index + 1}`,
  name: 'Dr. Manoj Kumar Samantaray',
  role: 'BAMS, MD(Ayu), 25+ Years Experience',
  image:
    'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f77ab19afe7e33066f54ea_doctor%20imageprofile-p-500.png',
}))

const journeySteps = [
  {
    id: 'journey-1',
    step: 'Step 1',
    title: 'Counselling - refer all health',
    cardTitle: 'Counselling',
    text: 'Initial consultation and root-cause discussion with your care team to establish a guided treatment baseline.',
    type: 'icon',
    icon: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f4f363be5ac9f5bee474fb_call%20icon%20.svg',
  },
  {
    id: 'journey-2',
    step: 'Step 2',
    title: 'Counselling',
    cardTitle: 'Counselling',
    text: 'Personalized plan review with a structured routine across medicines, food guidance, and lifestyle updates.',
    type: 'media',
    image:
      'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f9a4465ab822134a1bec30_Icons%20(6).png',
  },
  {
    id: 'journey-3',
    step: 'Step 3',
    title: 'Counselling',
    cardTitle: 'lorem ipsum dolor sit amet',
    text: 'Progress monitoring with ongoing support to improve adherence and sustain measurable outcomes.',
    type: 'points',
    points: ['Lorem ipsum', 'Lorem ipsum dolor', 'Lorem ipsum id dol'],
    pointIcon: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f264cd2a4c746801b29424_sc%20icon1.svg',
  },
  {
    id: 'journey-4',
    step: 'Step 4',
    title: 'Counselling',
    cardTitle: 'Counselling',
    text: 'Final review and optimization phase to transition into long-term lifestyle maintenance with confidence.',
    type: 'icon',
    icon: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f4f363be5ac9f5bee474fb_call%20icon%20.svg',
  },
]

const quizItems = [
  {
    id: 'quiz-1',
    label: 'Resuable plastic',
    icon: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f264cd2a4c746801b29424_sc%20icon1.svg',
  },
  {
    id: 'quiz-2',
    label: 'New formula',
    icon: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f264cc9bb8bd16023dfea0_sc%20icon2.svg',
  },
  {
    id: 'quiz-3',
    label: 'Vegan',
    icon: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f264cc9d4b4868f0a4170b_sc%20icon%203.svg',
  },
  {
    id: 'quiz-4',
    label: 'Cruelty free',
    icon: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f264ccbdb1bfe1057990f5_sc%20icon4.svg',
  },
]

function TreatmentPage() {
  return (
    <div className="ayurAptayu-treatmentPage">
      <section className="ayurAptayu-container ayurAptayu-treatmentHero">
        <img
          src="https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66fd3bfa94fad5993e63c679_Treatment%20(4).png"
          alt="Doctor holding treatment device"
          className="ayurAptayu-treatmentHeroImage"
        />

        <div className="ayurAptayu-treatmentHeroContent">
          <span className="ayurAptayu-pill">AI Powered</span>
          <h1>Discover our mission for glowing, healthy skin</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>

          <div className="ayurAptayu-treatmentHeroRatings">
            <span>
              <img
                src="https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66fd44b6b10a305804e5a7f7_google-logo-search-new-svgrepo-com.svg"
                alt=""
                aria-hidden="true"
              />
              4.5/5 ratings
            </span>
            <span>
              <img
                src="https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66fd5c59c926622784f046bc_5.png"
                alt=""
                aria-hidden="true"
              />
              4.5/5 satisfaction
            </span>
            <span>
              <img
                src="https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66fd5c59e305741366633fb2_6.png"
                alt=""
                aria-hidden="true"
              />
              90% recommend
            </span>
          </div>
        </div>

        <div className="ayurAptayu-treatmentProofGrid">
          {proofItems.map((item, index) => (
            <article key={`${item.label}-${index}`} className="ayurAptayu-treatmentProofCard">
              <p className="ayurAptayu-treatmentProofMetric">
                <span className="ayurAptayu-treatmentProofTrend">{item.trend}</span>
                <span>{item.value}</span>
              </p>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-treatmentBenefits">
        <h2>Who Can Benefit from This Program?</h2>
        <p>
          Care begins by mapping how imbalance has developed - examining digestion, metabolic load, affected systems,
          and disease stage. Treatment is then delivered in phases, with technology supporting regular follow-ups and
          tracking changes in symptoms and relevant health markers to guide refinement over time.
        </p>

        <div className="ayurAptayu-treatmentBenefitsGrid">
          {benefits.map((item) => (
            <article key={item.title} className="ayurAptayu-treatmentBenefitCard">
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </article>
          ))}
        </div>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-treatmentRisks">
        <div className="ayurAptayu-treatmentRisksIntro">
          <h3>What Happens if Not Treated?</h3>
          <p>
            Ignoring imbalance may worsen over time and increase the chance of severe complications, pain, and reduced
            quality of life.
          </p>
        </div>
        <div className="ayurAptayu-treatmentRisksGrid">
          {riskItems.map((item) => (
            <article key={item.title} className="ayurAptayu-treatmentRiskItem">
              <span>
                <img src={item.icon} alt="" aria-hidden="true" />
              </span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-treatmentOutcomes">
        <h2>Treatment outcomes</h2>
        <div className="ayurAptayu-treatmentOutcomesGrid">
          {outcomes.map((item) => (
            <article key={item.id} className="ayurAptayu-treatmentOutcomeCard" style={{ backgroundImage: `url('${item.image}')` }}>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-treatmentPlan">
        <article className="ayurAptayu-treatmentPlanIntro">
          <h2>Premium plan</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse varius enim in eros elementum
            tristique.
          </p>
          <ul>
            {planFeatures.map((item) => (
              <li key={item}>
                <img
                  src="https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f69702babcc9edfe814a21_icons8-check-30.png"
                  alt=""
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="ayurAptayu-treatmentPlanCard">
          <h3>Get your Premium Plan</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.</p>
          <p className="ayurAptayu-treatmentPlanPrice">$ 300.00 USD</p>
          <button type="button" className="ayurAptayu-cta">
            Purchase Plan <span aria-hidden="true"></span>
          </button>
        </article>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-treatmentCost">
        <h2>Monetary Loss (Cost of Not Treating Diabetes)</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>

        <div className="ayurAptayu-treatmentCostGrid">
          <img
            src="https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f3ee4d1c18270b658a03a9_ctav3%204.jpeg"
            alt="Skincare treatment closeup"
          />
          <article className="ayurAptayu-treatmentCallbackCard">
            <h3>Request Call Back</h3>
            <p>Get a doctor callback and discuss your personalized plan today.</p>
            <form onSubmit={(event) => event.preventDefault()}>
              <input type="text" placeholder="Enter your name" />
              <input type="tel" placeholder="+91 Phone number" />
              <button type="submit" className="ayurAptayu-cta">
                Request Call Back <span aria-hidden="true"></span>
              </button>
            </form>
          </article>
        </div>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-treatmentDoctors">
        <h2>Leading Ayurvedic Practitioners Recommend This Program</h2>
        <p>
          Our scientifically-backed plans are designed by experienced Ayurvedic doctors focused on sustainable,
          root-cause healing.
        </p>
        <div className="ayurAptayu-treatmentDoctorsGrid">
          {doctors.map((doctor) => (
            <article key={doctor.id} className="ayurAptayu-treatmentDoctorCard">
              <span className="ayurAptayu-treatmentDoctorBadge">Bangalore</span>
              <div className="ayurAptayu-treatmentDoctorMain">
                <img src={doctor.image} alt={doctor.name} />
                <div>
                  <h3>{doctor.name}</h3>
                  <p>{doctor.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-treatmentStatBanner">
        <p>
          422 million people globally suffer from diabetes (WHO). Diabetes causes 1.5 million deaths annually.
          Reversing diabetes within the first 5 years dramatically reduces long-term complications by 40%.
        </p>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-treatmentJourney">
        <h2>Treatment journey.</h2>
        <p>
          Our scientifically-backed care plans target root causes, offering personalized treatment while ensuring
          sustainable health improvements.
        </p>

        <div className="ayurAptayu-treatmentJourneyList">
          {journeySteps.map((item) => (
            <article key={item.id} className="ayurAptayu-treatmentJourneyRow">
              <div className="ayurAptayu-treatmentJourneyStep">
                <span>{item.step}</span>
                <h3>{item.title}</h3>
              </div>
              <div className="ayurAptayu-treatmentJourneyDivider" aria-hidden="true" />
              <div className={`ayurAptayu-treatmentJourneyCard ayurAptayu-treatmentJourneyCard--${item.type}`}>
                {item.type === 'icon' ? (
                  <span className="ayurAptayu-treatmentJourneyIconWrap">
                    <img src={item.icon} alt="" aria-hidden="true" className="ayurAptayu-treatmentJourneyIcon" />
                  </span>
                ) : null}
                {item.type === 'media' ? (
                  <img src={item.image} alt="" aria-hidden="true" className="ayurAptayu-treatmentJourneyImage" />
                ) : null}
                <div className="ayurAptayu-treatmentJourneyBody">
                  <h4>{item.cardTitle}</h4>
                  <p>{item.text}</p>
                  {item.points ? (
                    <div className="ayurAptayu-treatmentJourneyPoints">
                      {item.points.map((point) => (
                        <span key={point}>
                          <img src={item.pointIcon} alt="" aria-hidden="true" />
                          <em>{point}</em>
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <PageDivider />

      <section className="ayurAptayu-container ayurAptayu-treatmentQuiz">
        <div
          className="ayurAptayu-treatmentQuizBackdrop"
          style={{
            backgroundImage:
              "url('https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f26747448116e5b286487d_cta%20image%20.jpg')",
          }}
        />
        <article className="ayurAptayu-treatmentQuizCard">
          <h2>Assesment/Quiz</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. In at orci lobortis, dictum est nec, faucibus
            sem.
          </p>
          <div className="ayurAptayu-treatmentQuizPoints">
            {quizItems.map((item) => (
              <span key={item.id}>
                <img src={item.icon} alt="" aria-hidden="true" />
                <em>{item.label}</em>
              </span>
            ))}
          </div>
          <button type="button" className="ayurAptayu-cta">
            Check <span aria-hidden="true"></span>
          </button>
        </article>
      </section>
    </div>
  )
}

export default TreatmentPage
