import { Link } from 'react-router-dom'
import { ArrowLeft, PawPrint } from 'lucide-react'

function MyPets() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
        <PawPrint className="h-8 w-8" />
      </span>
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900">
        Hewan Saya
      </h1>
      <p className="mt-3 max-w-md text-slate-600">
        Daftar hewan peliharaanmu sedang kami siapkan. Nantikan segera!
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

export default MyPets
