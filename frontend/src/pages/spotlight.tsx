import React from 'react'
import Header from '../components/Header'

const figstyle: React.CSSProperties = {
  textAlign: 'center',
  fontSize: '20px',
  marginTop: '10px',
  color: '#555'
}

export default function SpotlightPage() {
  return (
    <><Header />
    <div style={{ padding: "16px", fontFamily: "Verdana, sans-serif", fontSize: "30px", textAlign: "center" }}>
      <h1 style={{ position: "relative", top: "30%", left: "50%", transform: "translateX(-50%)" }}>Spotlights</h1>
    </div>
    <div className="flex-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", padding: "20px" }}>
      {/* person 1 */}
      <figure style={{ margin: '0 auto', maxWidth: '500px' }}>
        <img
          src="https://picsum.photos/id/523/300"
          alt="Person"
          style={{ height: "150px", padding: "30px" }}
        />
        <figcaption style={ figstyle }>
          Joe Hills
        </figcaption>
      </figure>
      {/* person 2 */}
      <figure style={{ margin: '0 auto', maxWidth: '500px' }}>
        <img
          src="https://picsum.photos/id/512/300"
          alt="Person"
          style={{ height: "150px", padding: "30px" }}
        />
        <figcaption style={ figstyle }>
          Joe Hills
        </figcaption>
      </figure>
      {/* person 3 */}
      <figure style={{ margin: '0 auto', maxWidth: '500px' }}>
        <img
          src="https://picsum.photos/id/134/300"
          alt="Person"
          style={{ height: "150px", padding: "30px" }}
        />
        <figcaption style={ figstyle }>
          Joe Hills
        </figcaption>
      </figure>
      {/* person 4 */}
      <figure style={{ margin: '0 auto', maxWidth: '500px' }}>
        <img
          src="https://picsum.photos/id/241/300"
          alt="Person"
          style={{ height: "150px", padding: "30px" }}
        />
        <figcaption style={ figstyle }>
          Joe Hills
        </figcaption>
      </figure>
      {/* person 5 */}
      <figure style={{ margin: '0 auto', maxWidth: '500px' }}>
        <img
          src="https://picsum.photos/id/427/300"
          alt="Person"
          style={{ height: "150px", padding: "30px" }}
        />
        <figcaption style={ figstyle }>
          Joe Hills
        </figcaption>
      </figure>
    </div>
    </>
  )
}
