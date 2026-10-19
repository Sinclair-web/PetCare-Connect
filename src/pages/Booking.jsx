import { Link } from 'react-router-dom'
import { ArrowLeft, CalendarClock } from 'lucide-react'

function Booking() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
        <CalendarClock className="h-8 w-8" />
      </span>
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900">
        Halaman Booking
      </h1>
      <p className="mt-3 max-w-md text-slate-600">
        Formulir booking sedang kami siapkan. Segera hadir — nantikan ya!
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary-600 transition-colors hover:text-primary-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Kembali ke beranda
      </Link>
    </section>
  )
}

export default Booking
