import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CalendarCheck,
  HeartHandshake,
  House,
  PawPrint,
  Scissors,
  ShieldCheck,
  Star,
  Syringe,
  Stethoscope,
  Users,
} from 'lucide-react'
import ServiceCard from '../components/ServiceCard.jsx'

const services = [
  {
    name: 'Grooming',
    description:
      'Mandi, potong kuku, dan perawatan bulu oleh groomer berpengalaman agar hewan peliharaan Anda tampil bersih dan sehat.',
    price: 'Rp75.000',
    icon: Scissors,
  },
  {
    name: 'Vaksinasi',
    description:
      'Lindungi hewan peliharaan Anda dari penyakit dengan program vaksinasi lengkap yang ditangani tenaga medis bersertifikat.',
    price: 'Rp150.000',
    icon: Syringe,
  },
  {
    name: 'Konsultasi Dokter Hewan',
    description:
      'Konsultasikan kesehatan hewan peliharaan Anda dengan dokter hewan profesional, baik secara langsung maupun daring.',
    price: 'Rp100.000',
    icon: Stethoscope,
  },
  {
    name: 'Penitipan Hewan',
    description:
      'Titipkan hewan peliharaan Anda saat bepergian. Ruang nyaman dengan pengawasan dan pemberian makan terjadwal.',
    price: 'Rp50.000/hari',
    icon: House,
  },
]

const features = [
  {
    icon: ShieldCheck,
    title: 'Mitra Terpercaya',
    description: 'Semua mitra dan klinik telah terverifikasi',
  },
  {
    icon: HeartHandshake,
    title: 'Perawatan Penuh Kasih',
    description: 'Hewan Anda ditangani dengan sabar dan telaten',
  },
  {
    icon: Users,
    title: 'Ratusan Pelanggan Puas',
    description: 'Dipercaya pemilik hewan di berbagai kota',
  },
]

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-60 w-60 rounded-full bg-amber-100 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-1.5 text-xs font-bold text-primary-700">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              Marketplace layanan perawatan hewan
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Perawatan Terbaik untuk{' '}
              <span className="text-primary-600">Sahabat Berbulu</span> Anda
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 lg:mx-0">
              Temukan grooming, vaksinasi, konsultasi dokter hewan, dan
              penitipan dari mitra terpercaya — semua dalam satu platform.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                to="/booking"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-500/25 transition-colors hover:bg-primary-600 sm:w-auto"
              >
                <CalendarCheck className="h-5 w-5" />
                Booking Sekarang
              </Link>
              <Link
                to="/services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary-200 bg-white px-8 py-3.5 text-sm font-bold text-primary-700 transition-colors hover:border-primary-300 hover:bg-primary-50 sm:w-auto"
              >
                Lihat Layanan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="flex aspect-square items-center justify-center rounded-full bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 shadow-2xl">
              <PawPrint className="h-40 w-40 text-white/90" strokeWidth={1.25} />
            </div>
            <div className="absolute -left-2 top-8 rounded-2xl bg-white px-4 py-3 shadow-lg sm:-left-8">
              <p className="text-xs text-slate-500">Pelanggan puas</p>
              <p className="text-lg font-extrabold text-slate-900">500+</p>
            </div>
            <div className="absolute -right-2 bottom-10 rounded-2xl bg-white px-4 py-3 shadow-lg sm:-right-8">
              <p className="text-xs text-slate-500">Mitra terverifikasi</p>
              <p className="text-lg font-extrabold text-slate-900">50+</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                <feature.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-0.5 text-sm text-slate-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary-600">
            Layanan Unggulan
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Semua kebutuhan hewan peliharaan Anda
          </h2>
          <p className="mt-4 text-slate-600">
            Pilih layanan yang dibutuhkan dan booking dalam hitungan menit.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 transition-colors hover:text-primary-700"
          >
            Lihat semua layanan
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-primary-500">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Siap booking layanan untuk hewan kesayangan?
            </h2>
            <p className="mt-2 font-medium text-primary-100">
              Proses cepat, mitra terverifikasi, tanpa ribet.
            </p>
          </div>
          <Link
            to="/booking"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-primary-700 shadow-lg transition-colors hover:bg-primary-50"
          >
            <CalendarCheck className="h-5 w-5" />
            Booking Sekarang
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
