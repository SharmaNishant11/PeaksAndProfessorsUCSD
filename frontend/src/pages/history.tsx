import React from 'react'
import Header from '../components/Header'

const milestones = [
  {
    year: '2013',
    title: 'Peaks & Professors Founded at USC',
    description:
      'Allegra Bishop, inspired by a conversation with a professor during an 8-day trek in Gates of the Arctic National Park, co-founded Peaks & Professors at USC with Adrienne Visani and Jack Koppa. The first hike launched on September 13th, 2013.',
  },
  {
    year: '2017',
    title: 'Expansion Beyond USC',
    description:
      'The Peaks & Proliferation initiative brought chapters to Stanford and UCLA in November 2017. That same year, Peaks & Patagonia won the Tommy\'s Award for Sustainable Program of the Year.',
  },
  {
    year: '2024',
    title: 'UCSD Chapter Established',
    description:
      'Peaks and Professors at UC San Diego was founded as an affiliated chapter, bringing the mission of connecting students and faculty through outdoor experiences to the UCSD community. The chapter is directly affiliated with the USC founding chapter.',
  },
  {
    year: '2025',
    title: 'First Hikes at UCSD',
    description:
      'The UCSD chapter began organizing hikes around San Diego County, inviting professors from departments across campus to join students on beginner-friendly trails. No annual dues — just show up and explore.',
  },
  {
    year: '2026',
    title: 'Growing the Community',
    description:
      'With a growing roster of trip leads and faculty connections, Peaks & Professors at UCSD continues to expand its trip offerings and build a community around adventure, learning, and meaningful conversation.',
  },
]

const values = [
  {
    title: 'Connection',
    description:
      'We create spaces where students and professors can have real conversations outside the classroom — on the trail, around a campfire, or at a summit.',
  },
  {
    title: 'Accessibility',
    description:
      'No expensive gear required, no annual membership fees. Trip costs only cover gas and parking. The outdoors should be for everyone.',
  },
  {
    title: 'Community',
    description:
      'From trip leads to first-time hikers, Peaks is built on the idea that shared experiences in nature create lasting bonds.',
  },
]

const styles: Record<string, React.CSSProperties> = {
  page: {
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    fontFamily: "'DM Sans', 'Helvetica Neue', Helvetica, sans-serif",
  },
  heroSection: {
    backgroundColor: '#1a1a2e',
    color: 'white',
    padding: '80px 32px 64px',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '40px',
    fontWeight: 800,
    margin: '0 0 16px',
    letterSpacing: '-0.02em',
  },
  heroSubtitle: {
    fontSize: '18px',
    fontWeight: 400,
    color: '#b0b0b0',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '48px 32px',
  },
  sectionTitle: {
    fontSize: '22px',
    fontWeight: 600,
    color: '#212529',
    marginBottom: '32px',
    letterSpacing: '-0.01em',
  },
  originBlock: {
    backgroundColor: '#ffffff',
    border: '1px solid #e9ecef',
    borderRadius: '8px',
    padding: '32px',
    marginBottom: '48px',
    lineHeight: 1.7,
  },
  originText: {
    fontSize: '16px',
    color: '#343a40',
    margin: '0 0 16px',
    lineHeight: 1.7,
  },
  timeline: {
    position: 'relative' as const,
    paddingLeft: '32px',
    borderLeft: '2px solid #dee2e6',
  },
  timelineItem: {
    marginBottom: '32px',
    position: 'relative' as const,
  },
  timelineDot: {
    position: 'absolute' as const,
    left: '-39px',
    top: '4px',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#0b3d91',
    border: '2px solid #ffffff',
  },
  timelineYear: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#0b3d91',
    margin: '0 0 4px',
    letterSpacing: '0.02em',
  },
  timelineTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#212529',
    margin: '0 0 8px',
  },
  timelineDescription: {
    fontSize: '14px',
    color: '#495057',
    margin: 0,
    lineHeight: 1.6,
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '16px',
    marginTop: '32px',
  },
  valueCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #e9ecef',
    borderRadius: '8px',
    padding: '24px',
    transition: 'border-color 150ms ease',
  },
  valueTitle: {
    fontSize: '15px',
    fontWeight: 600,
    color: '#212529',
    margin: '0 0 8px',
  },
  valueDescription: {
    fontSize: '14px',
    color: '#6c757d',
    margin: 0,
    lineHeight: 1.6,
  },
  affiliation: {
    backgroundColor: '#ffffff',
    border: '1px solid #e9ecef',
    borderRadius: '8px',
    padding: '24px 32px',
    marginTop: '48px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
  },
  affiliationIcon: {
    fontSize: '20px',
    flexShrink: 0,
    marginTop: '2px',
  },
  affiliationText: {
    fontSize: '14px',
    color: '#495057',
    margin: 0,
    lineHeight: 1.6,
  },
}

export default function HistoryPage() {
  return (
    <div style={styles.page}>
      <Header />

      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Our History</h1>
        <p style={styles.heroSubtitle}>
          From a conversation on an Alaskan trail to a growing community at UC San Diego — how Peaks & Professors came to be.
        </p>
      </div>

      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>How It Started</h2>
        <div style={styles.originBlock}>
          <p style={styles.originText}>
            Peaks & Professors began with a simple idea: what if students could get to know their professors outside the classroom, on the trail? In 2013, USC student Allegra Bishop turned that idea into reality after an 8-day trek through Gates of the Arctic National Park in Alaska, where wide-ranging conversations with a professor showed her how much depth a shared outdoor experience could unlock.
          </p>
          <p style={styles.originText}>
            Together with co-founders Adrienne Visani and Jack Koppa, she launched Peaks & Professors at USC on September 13th, 2013. The concept was new — no existing playbook, no model to follow — but with persistence and creativity they built an organization focused on accessible, affordable outdoor trips that paired students with faculty for genuine conversation.
          </p>
          <p style={{ ...styles.originText, marginBottom: 0 }}>
            The idea spread. By 2017, chapters had launched at Stanford and UCLA through the Peaks & Proliferation initiative. In 2024, the mission arrived at UC San Diego, where a new team of student leaders established an affiliated chapter to bring the same spirit of adventure and connection to the UCSD community.
          </p>
        </div>

        <h2 style={styles.sectionTitle}>Timeline</h2>
        <div style={styles.timeline}>
          {milestones.map((item, i) => (
            <div key={i} style={styles.timelineItem}>
              <div style={styles.timelineDot} />
              <p style={styles.timelineYear}>{item.year}</p>
              <p style={styles.timelineTitle}>{item.title}</p>
              <p style={styles.timelineDescription}>{item.description}</p>
            </div>
          ))}
        </div>

        <h2 style={{ ...styles.sectionTitle, marginTop: '48px' }}>What We Stand For</h2>
        <div style={styles.valuesGrid}>
          {values.map((value, i) => (
            <div
              key={i}
              style={styles.valueCard}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.borderColor = '#adb5bd'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.borderColor = '#e9ecef'
              }}
            >
              <p style={styles.valueTitle}>{value.title}</p>
              <p style={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>

        <div style={styles.affiliation}>
          <span style={styles.affiliationIcon}>🔗</span>
          <p style={styles.affiliationText}>
            Peaks and Professors at UC San Diego is directly affiliated with Peaks & Professors at USC, the founding chapter. Our shared mission connects students and professors through outdoor experiences while fostering community and academic engagement. Learn more about the original chapter at{' '}
            <a href="https://www.peaksandprofessors.org" target="_blank" rel="noopener noreferrer" style={{ color: '#0b3d91' }}>
              peaksandprofessors.org
            </a>.
          </p>
        </div>
      </div>
    </div>
  )
}