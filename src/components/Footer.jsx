import { Link } from 'react-router-dom'
import { PawPrint } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-500 text-white">
            <PawPrint className="h-5 w-5" />
          </span>
          <div>
            <p className="font-extrabold tracking-tight text-slate-900">
              PetCare <span className="text-primary-600">Connect</span>
            </p>
            <p className="text-xs text-slate-500">
              Marketplace layanan perawatan hewan
            </p>
          </div>
        </div>
        <nav className="flex gap-6 text-sm font-semibold text-slate-600">
          <Link to="/" className="transition-colors hover:text-primary-600">
            Beranda
          </Link>
          <Link
            to="/services"
            className="transition-colors hover:text-primary-600"
          >
            Layanan
          </Link>
          <Link
            to="/booking"
            className="transition-colors hover:text-primary-600"
          >
            Booking
          </Link>
        </nav>
        <p className="text-xs text-slate-500">
          © 2026 PetCare Connect. Hak cipta dilindungi.
        </p>
      </div>
    </footer>
  )
}

export default Footer
