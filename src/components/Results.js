import { Card, Rate } from 'antd'
import { Link } from 'react-router-dom'
import './Results.css'
import { books } from '../books.js'

function Results({ category, rating, priceMin, priceMax }) {
  const bookCategory = books[category]
    .filter((x) => x.rating >= rating)
    .filter((x) => x.price > priceMin)
    .filter((x) => x.price <= priceMax)

  return (
    <>
      {bookCategory.map((e, i) => {
        return (
          <Card key={i}>
            <div style={{ display: 'flex' }}>
              <img
                src={e.image}
                alt={i}
                style={{ width: '300px', marginRight: '20px' }}
              ></img>
              <div>
                <p className="title">{e.name}</p>
                <Rate value={e.rating} disabled={true}></Rate>
                <h2> ${e.price}</h2>
                <p>Digital Download</p>
                <Link to="/product" state={e} className="login">
                  Product Page
                </Link>
              </div>
            </div>
          </Card>
        )
      })}
    </>
  )
}

export default Results
