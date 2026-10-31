import content from '@/data/content.json';

import PageHeader from '@/components/PageHeader';

export default function Home() {
  return (
    <div>
      <PageHeader
        navLinks={content.nav.links}
        navActions={content.nav.actions}
      />
    </div>
  );
}
