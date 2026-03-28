import React from 'react'
import Header from '../components/Header'

const people = [
  { id: 523, name: 'Joe Hills', role: 'Engineer' },
  { id: 512, name: 'Jane Doe', role: 'Designer' },
  { id: 134, name: 'Sam Park', role: 'Product' },
  { id: 241, name: 'Mia Chen', role: 'Marketing' },
  { id: 427, name: 'Leon Brandt', role: 'Operations' },
]

const styles: Record<string, React.CSSProperties> = {
  page: {
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    fontFamily: "'DM Sans', 'Helvetica Neue', Helvetica, sans-serif",
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '48px 32px',
  },
  pageTitle: {
    fontSize: '22px',
    fontWeight: 600,
    color: '#212529',
    marginBottom: '32px',
    letterSpacing: '-0.01em',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '16px',
  },
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid #e9ecef',
    borderRadius: '8px',
    padding: '24px 20px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '12px',
    transition: 'border-color 150ms ease',
    cursor: 'default',
  },
  avatar: {
    width: '72px',
    height: '72px',
    borderRadius: '50%',
    objectFit: 'cover' as const,
    display: 'block',
  },
  name: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#212529',
    margin: 0,
    textAlign: 'center' as const,
  },
  role: {
    fontSize: '13px',
    color: '#6c757d',
    margin: 0,
    textAlign: 'center' as const,
  },
}

export default function SpotlightPage() {
  return (
    <div style={styles.page}>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.pageTitle}>Spotlights</h1>
        <div style={styles.grid}>
          {people.map((person) => (
            <div
              key={person.id}
              style={styles.card}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.borderColor = '#adb5bd'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.borderColor = '#e9ecef'
              }}
            >
              <img
                src={`https://picsum.photos/id/${person.id}/300`}
                alt={person.name}
                style={styles.avatar}
              />
              <div>
                <p style={styles.name}>{person.name}</p>
                <p style={styles.role}>{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
