import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Reframe helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="https://calendly.com/skupin-franciszek/reframe-ai"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-fuchsia-950/30"
            >
              Book a free consultation to assess your automation needs.
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-8xl">
          Building AI Agents
          that do real work.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
          Streamline mundane and costly processes with customized AI automation solutions tailored to your needs.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://calendly.com/skupin-franciszek/reframe-ai">Get started</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
        Fully automate your phone calls.
        </Heading>
        <Screenshot
          width={2400}
          height={1618}
          src="/screenshots/app.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Sales</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
      Next-Level Customer Engagement.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Conversational AI"
          title="Talk, Don’t Type"
          description="Our AI voicebot brings a human-like touch to every interaction. Whether it's answering customer queries or scheduling appointments, it listens, understands, and responds naturally—just like a real person would."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile1.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Instant Integration"
          title="Plug Into Your Favorite Platforms"
          description="Seamlessly connect with Slack, Zoom, and more. Our voicebot is built to integrate into your current systems with zero hassle, allowing you to elevate your customer service with minimal setup time."
          graphic={
            <LogoCluster />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Adaptive Learning"
          title="Gets Smarter With Every Conversation"
          description="Our voicebot uses advanced AI and machine learning to continuously improve. Each interaction is a learning moment, making the bot more efficient, personalized, and responsive with time."
          graphic={
            <div className="flex size-full pl-10 pt-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Global Reach"
          title="Speak Any Language, Serve Any Market"
          description="Expand your reach effortlessly. Our AI voicebot is multilingual, enabling businesses to offer the same seamless, natural conversations to customers across different countries and languages."
          graphic={<Map />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Always On"
          title="24/7 Support, No Breaks Needed"
          description="Never miss a customer inquiry. With our voicebot, your business stays open around the clock, providing consistent, reliable support whenever it’s needed—day or night."
          graphic={<div className="absolute inset-0 bg-[url(/screenshots/competitors1.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Outreach</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
        Solutions that fit into your workflows.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Real Conversations"
            title="Chat That Feels Natural"
            description="Our AI chatbot engages users in realistic, flowing conversations. It doesn’t just answer questions—it provides personalized, contextual responses that make interactions feel human."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Omnichannel Presence"
  title="Available Everywhere, Anytime"
  description="Whether it’s on your website, social media, or messaging apps, our chatbot is always ready to assist. Stay connected with your customers wherever they are, 24/7."
            graphic={<LogoTimeline />}
            // `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Smart Personalization"
  title="Tailored Responses for Every User"
  description="With advanced natural language processing, our chatbot customizes every interaction to the user’s preferences, learning from past conversations to provide even more accurate responses over time."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Interactive"
  title="Customized Interaction"
  description="Enhance user engagement with ease. Our AI chatbot supports custom components within the chat, offering tailored interactions and functional features that streamline communication and provide a seamless experience for your users."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      {/* <Testimonials /> */}
      <Footer />
    </div>
  )
}
