// Shared page header: eyebrow span + h1 + intro paragraph.
export default function SectionIntro({ eyebrow, title, description }) {
  return (
    <>
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p className="page-intro">{description}</p>
    </>
  )
}
