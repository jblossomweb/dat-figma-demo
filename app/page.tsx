import content from '@/data/content.json';

import PageHeader from '@/components/PageHeader';
import PageCta from '@/components/PageCta';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader nav={content.nav} />
      <PageCta cta={content.cta} />
    </div>
  );
}
