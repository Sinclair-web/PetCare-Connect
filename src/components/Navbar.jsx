import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LogIn, Menu, PawPrint, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/services', label: 'Layanan' },
  { to: '/my-pets', label: 'Hewan Saya' },
  { to: '/booking', label: 'Booking' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-primary-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-500 text-white">
            <PawPrint className="h-5 w-5" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-slate-900">
            PetCare <span className="text-primary-600">Connect</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors hover:text-primary-600 ${
                  isActive ? 'text-primary-600' : 'text-slate-600'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-full border border-primary-500 px-5 py-2 text-sm font-bold text-primary-600 transition-colors hover:bg-primary-50"
          >
            <LogIn className="h-4 w-4" />
            Masuk
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Buka menu navigasi"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-primary-50 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="space-y-1 border-t border-primary-100 bg-white px-4 pb-4 pt-3 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-slate-600 hover:bg-primary-50 hover:text-primary-600'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-600"
          >
            <LogIn className="h-4 w-4" />
            Masuk
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Navbar
