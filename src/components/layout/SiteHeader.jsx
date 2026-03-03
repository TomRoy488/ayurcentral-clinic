function SiteHeader() {
  return (
    <header className="ayurAptayu-siteHeader">
      <div className="ayurAptayu-container ayurAptayu-siteHeaderInner">
        <a className="ayur-logo-link" href="#" aria-label="AyurCentral">
          <div className="ayur-logo">
            <span className="ayur-logo-icon">
              <span className="ayur-logo-icon-letter">a</span>
            </span>
            <span className="ayur-logo-name">AyurCentral Clinic</span>
          </div>
        </a>

        <div className="ayurAptayu-siteHeaderActions" aria-label="Header actions">
          <button type="button" className="ayurAptayu-siteHeaderAction" aria-label="Change language">
            <img
              src="https://www.ayurcentralonline.com/wp-content/uploads/2025/10/Icons-10.png"
              alt=""
              loading="lazy"
              width="30"
              height="30"
            />
          </button>
          <button type="button" className="ayurAptayu-siteHeaderAction ayurAptayu-siteHeaderActionLogin" aria-label="Profile">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
