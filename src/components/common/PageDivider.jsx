import './PageDivider.css'

function PageDivider({ className = '' }) {
  const dividerClassName = ['ac_page-divider', className].filter(Boolean).join(' ')

  return (
    <div className={dividerClassName}>
      <span className="ac_page-divider_element ac_page-divider_element-left" />
      <span className="ac_page-divider_element ac_page-divider_element-right" />
    </div>
  )
}

export default PageDivider
