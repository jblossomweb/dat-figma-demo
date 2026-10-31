import content from '@/data/content.json';

import PageHeader from '@/components/PageHeader';
import GetStarted from '@/components/GetStarted';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader
        navLinks={content.nav.links}
        navActions={content.nav.actions}
      />
      <GetStarted />
    </div>
  );
}
