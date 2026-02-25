import { Metadata } from 'next'
import CricketScoreBoard from '@/components/cricket/CricketScoreBoard'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Live Cricket Score Today - IPL 2026, T20, ODI, Test Match Updates',
  description: 'Live cricket scores, ball-by-ball updates for IPL 2026, T20 World Cup, ODI & Test matches. India vs Australia, IPL match scorecard. Free real-time updates.',
  keywords: [
    'live cricket score', 'cricket score today', 'ipl 2026 live score',
    'india vs australia live', 'ipl live score', 'cricket match today',
    'live score ball by ball', 't20 world cup live', 'test match live score',
  ],
}

export const revalidate = 30

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How to watch live cricket scores for free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can watch live cricket scores for free on LivePriceIndia. We provide real-time ball-by-ball updates for all international matches, IPL 2026, T20 World Cup, ODI and Test series. No login required.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does IPL 2026 start?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IPL 2026 season typically starts in late March and runs through May. Check our live scores page for all IPL match updates, team standings, and results.',
      },
    },
  ],
}

export default function CricketLivePage() {
  return (
    <>
      <Script id="cricket-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CricketScoreBoard />
    </>
  )
}
