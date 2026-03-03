import { useMemo } from 'react'
import { ArrowRight, Star } from 'lucide-react'

const heroImage =
  'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f2bb3c0705496192f57dc4_hero%20v2.jpg'

const missionCards = [
  {
    title: 'Mission',
    text: 'Aliquet purus vel arcu nec consectetur aliquet tincidunt felis ipsum pharetra ornare risus lorem amet vitae diam ultrices sapien elit vestibulum nulla ultrices mollis turpis.',
    icon: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f52a98576bd13b6c6835d9_c%20icon1.svg',
  },
  {
    title: 'Vision',
    text: 'Aliquet purus vel arcu nec consectetur aliquet tincidunt felis ipsum pharetra ornare risus lorem amet vitae diam ultrices sapien elit vestibulum nulla ultrices mollis turpis.',
    icon: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f52a984f75ce5791f02ffd_c%20icon2.svg',
  },
  {
    title: 'Values',
    text: 'Aliquet purus vel arcu nec consectetur aliquet tincidunt felis ipsum pharetra ornare risus lorem amet vitae diam ultrices sapien elit vestibulum nulla ultrices mollis turpis.',
    icon: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f52a988c5531b2a96e176e_cicon%203.svg',
  },
]

const experienceCardImage =
  'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f40a46802a8ddedec801b8_team%201.jpg'

const teamMembers = Array.from({ length: 4 }, (_, index) => ({
  id: `about-team-${index + 1}`,
  name: 'Dr. Manoj Kumar Samantaray',
  credentials: 'BAMS, MD(Ayu), PhD',
  experience: '25+ Years of experience',
  description: 'Pellentesque massa morbi aliquet posuere molestie rhoncus porta vestibulum enim egestas litu aliquet.',
  image: experienceCardImage,
}))

const socialLinks = ['Facebook', 'Instagram', 'Youtube', 'Twitter']

const founderImage =
  'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f24d08d7d40be97afeeacb_testimonials%20-p-1080.jpg'

const milestones = [
  { value: '100+', label: 'Brands' },
  { value: '200+', label: 'Doctors' },
  { value: '100+', label: 'Doctors' },
  { value: '100+', label: 'Doctors' },
]

const reviewCards = [
  {
    id: 'review-1',
    name: 'Olivia Evans',
    age: '28 years old',
    logo: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66fd44b6b10a305804e5a7f7_google-logo-search-new-svgrepo-com.svg',
    avatar: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f4a9057710ca11e9d518ee_ava1.jpg',
    rating: '4.5/5',
    text: 'Lorem ipsum dolor sit amet consectetur urna sodales eget est in tellus ultrices convallis elit dolor arcu vel et sit lacus lacus mauris eget pulvinar massa vitae eu ipsum tortor semper quis.',
  },
  {
    id: 'review-2',
    name: 'Michelle Brown',
    age: '28 years old',
    logo: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66fd5c59c926622784f046bc_5.png',
    avatar: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f27f2466d331bb3b60c8ba_avatar%202.jpg',
    rating: '4.5/5',
    text: 'Ipsum dolor sit amet consectetur. Aliquet purus vel arcu nec consectetur aliquet tincidunt felis. Ipsum pharetra ornare risus lorem amet vitae diam ultrices sapien elit vestibulum nulla ultrices. Mollis turpis adipiscing semper sit aliquet est ac sed. Dignissim platea eget non euismod vivamus amet donec quam. Diam.',
  },
  {
    id: 'review-3',
    name: 'Olivia Evans',
    age: '21 years old',
    logo: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66fd44b6b10a305804e5a7f7_google-logo-search-new-svgrepo-com.svg',
    avatar: 'https://cdn.prod.website-files.com/66e6d26d848a846c189a50e0/66f4a9057710ca11e9d518ee_ava1.jpg',
    rating: '4.5/5',
    text: 'Lorem ipsum dolor sit amet consectetur urna sodales eget est in tellus ultrices convallis elit dolor arcu vel et sit lacus lacus mauris eget pulvinar massa vitae eu ipsum tortor semper quis aliquam placerat et neque nunc nulla et nisl commodo sagittis posuere cras.',
  },
]

function AboutPage() {
  const teamSection = useMemo(
    () => (
      <section className="ayurAptayu-container ayurAptayu-experienceSection ayurAptayu-aboutTeamSection">
        <h2>Aptayu team</h2>
        <p>
          Our treatment packages are clinically designed and the medicines are meticulously formulated by industry
          leaders with decades of experience in Ayurveda, ensuring the highest quality of care and efficacy.
        </p>
        <div className="ayurAptayu-experienceGrid">
          {teamMembers.map((expert) => (
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
    ),
    [],
  )

  return (
    <div className="ayurAptayu-aboutPage">
      <section className="ayurAptayu-container ayurAptayu-aboutHero">
        <div className="ayurAptayu-aboutHeroContent">
          <span className="ayurAptayu-pill">AI-Powered</span>
          <h1>Explore the unique essence of Ayurveda reimagined at Aptayu</h1>
          <button type="button" className="ayurAptayu-cta">
            Request Call Back <ArrowRight aria-hidden="true" size={16} />
          </button>
          <div className="ayurAptayu-aboutSocialLinks" aria-label="Social links">
            {socialLinks.map((link) => (
              <button type="button" key={link} className="ayurAptayu-aboutSocialItem">
                <span>{link}</span>
                <ArrowRight aria-hidden="true" size={16} />
              </button>
            ))}
          </div>
        </div>
        <img src={heroImage} alt="Ayurvedic skincare consultation" className="ayurAptayu-aboutHeroImage" />
      </section>

      <section className="ayurAptayu-container ayurAptayu-aboutMissionSection">
        <h2>Mission &amp; Vision</h2>
        <p>
          Aliquet purus vel arcu nec consectetur aliquet tincidunt felis ipsum pharetra ornare risus lorem amet vitae
          diam ultrices sapien elit vestibulum nulla ultrices mollis turpis.
        </p>
        <div className="ayurAptayu-aboutMissionGrid">
          {missionCards.map((item) => (
            <article key={item.title} className="ayurAptayu-aboutMissionCard">
              <span className="ayurAptayu-aboutMissionIconWrap">
                <img src={item.icon} alt="" aria-hidden="true" className="ayurAptayu-aboutMissionIcon" />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {teamSection}

      <section className="ayurAptayu-container ayurAptayu-aboutFounderSection">
        <h2>Founders Message</h2>
        <div className="ayurAptayu-aboutFounderWrap">
          <img src={founderImage} alt="Founder portrait" className="ayurAptayu-aboutFounderImage" />
          <blockquote className="ayurAptayu-aboutFounderQuote">
            <p>&ldquo; Each creation stands as evidence of our unwavering commitment to the Path of Wellness.&rdquo;</p>
            <cite>
              - Heram Reddy <span>Founder &amp; Coo</span>
            </cite>
          </blockquote>
        </div>
      </section>

      <section className="ayurAptayu-container ayurAptayu-aboutMilestoneSection">
        <h2>Our milestones</h2>
        <p>
          Molestie congue velit mauris scelerisque lacinia sapien tellus in in laoreet massa habitant nunc ullamcorper
          morbi.
        </p>
        <div className="ayurAptayu-aboutMilestoneGrid">
          {milestones.map((item, index) => (
            <article key={`${item.label}-${index}`} className="ayurAptayu-aboutMilestoneCard">
              <p className="ayurAptayu-aboutMilestoneValue">{item.value}</p>
              <p className="ayurAptayu-aboutMilestoneLabel">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ayurAptayu-container ayurAptayu-aboutResultsSection">
        <div className="ayurAptayu-aboutResultsHeader">
          <h2>Real people, real results</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur urna sodales eget est in tellus ultrices convallis elit dolor arcu
            vel et sit lacus lacus mauris eget pulvinar massa vitae.
          </p>
        </div>
        <div className="ayurAptayu-aboutResultsGrid">
          {reviewCards.map((item) => (
            <article key={item.id} className="ayurAptayu-aboutResultCard">
              <header className="ayurAptayu-aboutResultTop">
                <img src={item.avatar} alt={item.name} className="ayurAptayu-aboutResultAvatar" />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.age}</p>
                </div>
              </header>
              <div className="ayurAptayu-aboutResultRating">
                <img src={item.logo} alt="Review platform logo" className="ayurAptayu-aboutResultLogo" />
                <p>
                  {item.rating}{' '}
                  <span className="ayurAptayu-aboutResultStars" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={`${item.id}-star-${index}`} size={12} />
                    ))}
                  </span>
                </p>
              </div>
              <p className="ayurAptayu-aboutResultBody">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ayurAptayu-container ayurAptayu-newsletterSection">
        <div className="ayurAptayu-newsletterPanel">
          <div className="ayurAptayu-newsletterContent">
            <h2>Subscribe to our newsletter</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Duis aute irure.
            </p>
          </div>

          <form className="ayurAptayu-newsletterForm" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="ayurAptayu-about-newsletter-email" className="ayurAptayu-newsletterLabel">
              Enter email id
            </label>
            <input
              id="ayurAptayu-about-newsletter-email"
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

export default AboutPage
