import { useState } from 'react'

function SiteFooter() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <footer className="ac_footer">
      <div className="ac_footerAboutTxtBanner">
        <div className="ac_footerAboutTxtBanner-content">
          <span className="ac_footerAboutTxtBanner-SubTxt hidden">#StayHealthyTheOriginalWay!</span>
          <span className="ac_footerAboutTxtBanner-MainTxt hidden
          ">India's ayurvedic wellness hub!</span>
          <span className="ac_footerAboutTxtBanner-MainTxt">
            Integrating India&apos;s Ayurvedic legacy with technology to provide structured, personalized
            & outcome-driven care.
          </span>
          <div className="ac_footerAboutTxtBannerBottom">
            <span className="ac_footerAboutTxtBannerBottomIcon">
              <a className="ayur-logo-link" href="https://www.ayurcentralonline.com/" target="_blank" rel="noreferrer">
                <div className="ayur-logo">
                  <span className="ayur-logo-icon">
                    <span className="ayur-logo-icon-letter">a</span>
                  </span>
                  <span className="ayur-logo-name">AyurCentral Clinic</span>
                </div>
              </a>
            </span>
            <span className="ac_footerAboutTxtBannerBottomTxt">Crafted with love in Bengaluru, India.</span>
          </div>
        </div>
      </div>

      <div className={`ac_footerAboutCountDetailsContainer ${isExpanded ? 'is-open' : ''}`}>
        <button
          type="button"
          className={`ac_footerAboutCountDetailsHead ${isExpanded ? 'ac_footerAboutCountDetailsContainerOpen' : ''}`}
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
          aria-controls="ac-footer-details"
        >
          <span className="ac_footerAboutCountDetails-HeadTxt ac_footerAboutCountDetails-SubTxt">
            Explore more about AyurCentral
          </span>
          <span className="ac_footerAboutCountDetails-HeadIcon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
            </svg>
          </span>
        </button>

        <div id="ac-footer-details" className={`ac_footerAboutCountDetails ${isExpanded ? 'is-open' : ''}`}>
          <div className="ac_footerAboutCountDetails-content">
            <span className="ac_footerAboutCountDetails-SubTxt">India's largest ayurvedic platform!</span>

            <div className="ac_footerAboutCountList">
              <div className="ac_footerAboutCountListItem">
                <span className="ac_footerAboutCountListItemNum">11,000+</span>
                <span className="ac_footerAboutCountListItemTxt">Products</span>
              </div>
              <div className="ac_footerAboutCountListItem">
                <span className="ac_footerAboutCountListItemNum">400+</span>
                <span className="ac_footerAboutCountListItemTxt">Brands</span>
              </div>
              <div className="ac_footerAboutCountListItem">
                <span className="ac_footerAboutCountListItemNum">20,000+</span>
                <span className="ac_footerAboutCountListItemTxt">Pincodes</span>
              </div>
              <div className="ac_footerAboutCountListItem">
                <span className="ac_footerAboutCountListItemNum">75+</span>
                <span className="ac_footerAboutCountListItemTxt">Stores</span>
              </div>
              <div className="ac_footerAboutCountListItem">
                <span className="ac_footerAboutCountListItemNum">250+</span>
                <span className="ac_footerAboutCountListItemTxt">Doctors</span>
              </div>
            </div>

            <div className="ac_footerExtra">
              <div className="ac_footerExtraSection">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="https://www.ayurcentralonline.com/">Home</a></li>
                  <li><a href="https://www.ayurcentralonline.com/brands/">Shop By Brands</a></li>
                  <li><a href="https://www.ayurcentralonline.com/blogs/">Blog</a></li>
                  <li><a href="https://www.ayurcentralonline.com/franchise-opportunity/">Franchise Opportunity</a></li>
                  <li><a href="https://www.ayurcentralonline.com/contact-us/">Contact Us</a></li>
                  <li><a href="https://www.ayurcentralonline.com/store-locator/">Store Locator</a></li>
                </ul>
              </div>

              <div className="ac_footerExtraSection">
                <h4>Information</h4>
                <ul>
                  <li><a href="https://www.ayurcentralonline.com/about-us/">About Us</a></li>
                  <li><a href="https://www.ayurcentralonline.com/my-account/">My Account</a></li>
                  <li><a href="https://www.ayurcentralonline.com/my-account/orders/">Order History</a></li>
                  <li><a href="https://www.ayurcentralonline.com/faqs/">FAQ</a></li>
                </ul>
              </div>

              <div className="ac_footerExtraSection">
                <h4>Our Policy</h4>
                <ul>
                  <li><a href="https://www.ayurcentralonline.com/privacy-policy/">Privacy Policy</a></li>
                  <li><a href="https://www.ayurcentralonline.com/shipping-policy/">Shipping &amp; Taxes</a></li>
                  <li><a href="https://www.ayurcentralonline.com/refund-and-return-policy/">Return Policy</a></li>
                  <li><a href="https://www.ayurcentralonline.com/disclaimer/">Disclaimer</a></li>
                </ul>
              </div>

              <div className="ac_footerExtraSection">
                <h4>Corporate Address</h4>
                <p>
                  Sarvahitha Ayurvedalaya Pvt Ltd,<br />
                  No.93/23, Industrial Suburb,<br />
                  Yeswanthpur, Bangalore - 560022<br />
                  <a href="tel:08049670477">Phone: 08049670477</a> <br />
                  <a href="https://wa.me/917349744446">WhatsApp: 7349744446</a><br />
                  <a href="mailto:contact@ayurcentral.com">Email: contact@ayurcentral.com</a>
                </p>
              </div>

              <div className="ac_footerExtraSection">
                <h4>Follow Us</h4>
                <div className="ac_footerSocials">
                  <a href="https://www.facebook.com/AyurCentral" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://twitter.com/AYURCENTRAL1" aria-label="X">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/ayurcentralonline/" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@ayurcentral1069" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/ayurcentral/mycompany/" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="ac_footerBottom">
              <p>(c) 2025 AyurCentral. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
