import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <article className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg">
      <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="text-lg font-bold text-slate-900">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
        {service.description}
      </p>
      <p className="mt-4 text-sm text-slate-500">
        Mulai dari{' '}
        <span className="font-bold text-primary-600">{service.price}</span>
      </p>
      <Link
        to="/booking"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary-600 transition-colors hover:text-primary-700"
      >
        Pesan sekarang
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  )
}

export default ServiceCard
