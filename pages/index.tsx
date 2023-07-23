import Banner from '@/components/Banner/Banner'
import Collaborate from '@/components/Collaborate/Collaborate'
import CommonGoals from '@/components/CommonGoals/CommonGoals'
import Hero from '@/components/Hero/Hero'
import MemberBenefits from '@/components/MemberBenefits/MemberBenefits'
import MemberFrom from '@/components/MemberFrom/MemberFrom'
import MemberRewards from '@/components/MemberRewards/MemberRewards'
import Minting from '@/components/Minting/Minting'
import Roadmap from '@/components/Roadmap/Roadmap'
import Tokenomics from '@/components/Tokenomics/Tokenomics'
import Head from 'next/head'
import { Fragment } from 'react'

export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Young Birds Club</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Hero />
      <Minting />
      <CommonGoals />
      <MemberBenefits />
      <MemberRewards />
      <Banner />
      <Tokenomics />
      <MemberFrom />
      <Roadmap />
      <Collaborate />
    </Fragment>
  )
}
