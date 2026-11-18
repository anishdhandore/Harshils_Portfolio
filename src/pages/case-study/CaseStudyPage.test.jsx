import { render, screen, within } from '@testing-library/react';
import CaseStudyPage from './CaseStudyPage';
import { CASE_STUDIES, nextCaseStudy } from './caseStudies';
import { PROJECTS } from '../../components/deck/projects';
import { FEATURED } from '../../components/featured/featuredContent';

describe('case study content', () => {
  test('every project file and the featured aircraft have a case study', () => {
    [...PROJECTS.map((p) => p.slug), FEATURED.slug].forEach((slug) => {
      expect(CASE_STUDIES.find((c) => c.slug === slug)).toBeDefined();
    });
  });

  test('next project wraps around to the first', () => {
    const last = CASE_STUDIES[CASE_STUDIES.length - 1];
    expect(nextCaseStudy(last.slug)).toBe(CASE_STUDIES[0]);
  });
});

describe('CaseStudyPage', () => {
  test.each(CASE_STUDIES.map((c) => [c.slug, c]))('%s tells the engineering story', (slug, study) => {
    render(<CaseStudyPage slug={slug} />);

    expect(screen.getByRole('heading', { level: 1, name: study.name })).toBeInTheDocument();
    expect(screen.getByText(study.outcome)).toBeInTheDocument();
    study.meta.forEach(({ label, value }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
      expect(screen.getAllByText(value).length).toBeGreaterThan(0);
    });
    ['The engineering challenge', 'What I did', 'Design workflow', 'Key figures', 'Technical evidence', 'Design status'].forEach(
      (title) => {
        expect(screen.getByRole('heading', { level: 2, name: title })).toBeInTheDocument();
      }
    );
    study.built.forEach(({ title }) => expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument());
  });

  test.each(CASE_STUDIES.map((c) => [c.slug, c]))('%s numbers every analysis figure', (slug, study) => {
    render(<CaseStudyPage slug={slug} />);

    const evidence = screen.getByRole('region', { name: 'Technical evidence' });
    study.evidence.forEach(({ alt }, i) => {
      expect(within(evidence).getByRole('img', { name: alt })).toBeInTheDocument();
      expect(within(evidence).getByText(`Fig. ${String(i + 1).padStart(2, '0')}`)).toBeInTheDocument();
    });
  });

  test('shows the main render and two supporting views', () => {
    const [study] = CASE_STUDIES;
    render(<CaseStudyPage slug={study.slug} />);

    const hero = screen.getByRole('region', { name: `${study.name} renders` });
    expect(within(hero).getAllByRole('img')).toHaveLength(3);
  });

  test('only shows field photos when there are some', () => {
    const withPhotos = CASE_STUDIES.find((c) => c.photos.length > 0);
    const withoutPhotos = CASE_STUDIES.find((c) => c.photos.length === 0);

    const { unmount } = render(<CaseStudyPage slug={withPhotos.slug} />);
    expect(screen.getByRole('heading', { level: 2, name: 'In the field' })).toBeInTheDocument();
    unmount();

    render(<CaseStudyPage slug={withoutPhotos.slug} />);
    expect(screen.queryByRole('heading', { level: 2, name: 'In the field' })).not.toBeInTheDocument();
  });

  test('external links open safely in a new tab', () => {
    const [study] = CASE_STUDIES;
    render(<CaseStudyPage slug={study.slug} />);

    study.links.forEach(({ label, href }) => {
      const link = screen.getByRole('link', { name: label });
      expect(link).toHaveAttribute('href', href);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
    });
  });

  test('links back to all projects and on to the next one', () => {
    const [study] = CASE_STUDIES;
    render(<CaseStudyPage slug={study.slug} />);

    expect(screen.getByRole('link', { name: /all projects/i })).toHaveAttribute('href', '/#projects');
    const next = nextCaseStudy(study.slug);
    expect(screen.getByRole('link', { name: `Next project: ${next.name}` })).toHaveAttribute('href', `/work/${next.slug}`);
  });

  test('sets the document title', () => {
    const [study] = CASE_STUDIES;
    render(<CaseStudyPage slug={study.slug} />);

    expect(document.title).toBe(`${study.name} · Harshil Patel`);
  });

  test('handles an unknown project', () => {
    render(<CaseStudyPage slug="nope" />);

    expect(screen.getByRole('heading', { level: 1, name: /not found/i })).toBeInTheDocument();
  });
});
