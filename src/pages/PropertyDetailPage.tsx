import { Link, useParams } from 'react-router-dom'
import { PROPERTIES } from '../data/properties'
import { whatsappLink } from '../data/site'

export function PropertyDetailPage() {
  const { id } = useParams()
  const p = PROPERTIES.find((x) => x.id === id)

  if (!p) {
    return (
      <section className="section mx-auto max-w-7xl px-6">
        <div className="crumbs">
          <Link className="crumbLink" to="/">
            Home
          </Link>
          <span className="crumbSep">/</span>
          <Link className="crumbLink" to="/properties">
            Properties
          </Link>
          <span className="crumbSep">/</span>
          <span className="crumbHere">Not found</span>
        </div>

        <div className="detailCard">
          <h1 className="pageTitle">Property not found</h1>
          <p className="sectionSub">The property you’re looking for doesn’t exist.</p>
          <div style={{ marginTop: 14 }}>
            <Link className="ctaPrimary" to="/properties">
              Back to Properties
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const meta: Array<{ k: string; v: string }> = [
    { k: 'Transaction', v: p.transactionType },
    { k: 'Category', v: p.category },
    { k: 'Type', v: p.propertyType },
    { k: 'Configuration', v: p.configuration },
    { k: 'City', v: p.city },
    { k: 'Locality', v: p.locality },
  ]

  if (p.areaSqft) meta.push({ k: 'Area', v: `${p.areaSqft.toFixed(2)} sqft` })
  if (p.frontageFt) meta.push({ k: 'Frontage', v: `${p.frontageFt.toFixed(2)} ft` })
  if (p.seats) meta.push({ k: 'Seats', v: `${p.seats}` })
  if (p.baths) meta.push({ k: 'Baths', v: `${p.baths}` })
  if (p.floor) meta.push({ k: 'Floor', v: `${p.floor}` })

  return (
    <section className="section mx-auto max-w-7xl px-6">
      <div className="crumbs">
        <Link className="crumbLink" to="/">
          Home
        </Link>
        <span className="crumbSep">/</span>
        <Link className="crumbLink" to="/properties">
          Properties
        </Link>
        <span className="crumbSep">/</span>
        <span className="crumbHere">{p.title}</span>
      </div>

      <div className="detailCard">
        <div className="detailTop">
          <div>
            <div className="tag">{p.transactionType}</div>
            <h1 className="pageTitle" style={{ marginTop: 10 }}>
              {p.title}
            </h1>
            <div className="propLoc" style={{ marginTop: 6 }}>
              {p.locality}, {p.city}
            </div>
          </div>
          <div className="detailActions">
            <div className="detailPrice">{p.priceLabel}</div>
            <a
              className="btnSmall"
              href={whatsappLink(`Hi Elite Pincode, I am interested in: ${p.title} (${p.locality}). Please share more details.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>

        <div className="metaGrid">
          {meta.map((m) => (
            <div key={m.k} className="metaItem">
              <div className="metaK">{m.k}</div>
              <div className="metaV">{m.v}</div>
            </div>
          ))}
        </div>

        <div className="detailBottom">
          <Link className="ctaGhost" to="/properties">
            Back to Properties
          </Link>
        </div>
      </div>
    </section>
  )
}

