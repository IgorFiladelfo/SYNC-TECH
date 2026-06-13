// Título usado nas seções principais da página
export default function SectionTitle({ label, title, labelColor = 'text-[#2563EB]' }) {
  return (
    <div className="mb-8">
      {label && (
        <p className={`text-sm font-extrabold tracking-[0.2em] uppercase ${labelColor}`}>
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-1">
        {title}
      </h2>
    </div>
  )
}
