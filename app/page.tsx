import content from '@/data/content.json';

import PageHeader from '@/components/PageHeader';
import PageContent from '@/components/PageContent';
import PageCta from '@/components/PageCta';
import PageFooter from '@/components/PageFooter';

import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader nav={content.nav} />
      <PageContent>
        <Hero hero={content.hero} />
      </PageContent>
      <PageFooter footer={content.footer} />
      <PageCta cta={content.cta} />
    </div>
  );
}
