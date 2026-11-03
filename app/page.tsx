import content from '@/data/content.json';

import PageHeader from '@/components/PageHeader';
import PageContent from '@/components/PageContent';
import PageCta from '@/components/PageCta';
import PageFooter from '@/components/PageFooter';

import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Spotlights from '@/components/Spotlights';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader nav={content.nav} />
      <PageContent>
        <Hero hero={content.hero} />
        <Features features={content.features} />
        <Spotlights spotlights={content.spotlights} />
      </PageContent>
      <PageFooter footer={content.footer} />
      <PageCta cta={content.cta} />
    </div>
  );
}
