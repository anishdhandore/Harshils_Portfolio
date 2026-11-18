// Footer in the hermeus.com manner: light, columns of small uppercase links,
// a legal line, and the name set full width in pale grey at the very bottom.
import React from 'react';
import styled from 'styled-components';
import { FiArrowUp } from 'react-icons/fi';
import { WingMark } from '../navbar/Logo';
import { NAV_LINKS } from '../navbar/navContent';
import { useLocalTime } from '../../hooks/useLocalTime';
import { FULL_NAME, RESUME_URL, SOCIALS, TIME_ZONE } from '../hero/heroContent';

const ELSEWHERE = [...SOCIALS, { label: 'Résumé', href: RESUME_URL }];

const SiteFooter = () => {
  const time = useLocalTime(TIME_ZONE);
  const year = new Date().getFullYear();

  return (
    <Footer>
      <Inner>
        <Top>
          <Brand>
            <WingMark size={34} />
            <span>{FULL_NAME}</span>
            <address>
              San Diego, California
              <br />
              USA · <time>{time}</time>
            </address>
          </Brand>

          <Columns>
            <nav aria-label="Footer">
              <h2>Sections</h2>
              <ul>
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h2>Elsewhere</h2>
              <ul>
                {ELSEWHERE.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Columns>
        </Top>

        <Legal>
          <span>© {year} {FULL_NAME}. All rights reserved.</span>
          <a href="/#home">
            Back to top <FiArrowUp aria-hidden="true" />
          </a>
        </Legal>
      </Inner>

      <Wordmark aria-hidden="true">{FULL_NAME}</Wordmark>
    </Footer>
  );
};

const Footer = styled.footer`
  overflow: hidden;
  padding: clamp(3rem, 2rem + 3vw, 5rem) var(--space-gutter) 0;
  background: #f8f8f8;
  border-top: 1px solid var(--color-line);
  color: var(--color-ink-soft);
  font-family: var(--font-body);
`;

const Inner = styled.div`
  max-width: var(--content-max);
  margin: 0 auto;
`;

const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2.5rem;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  svg {
    color: var(--color-amber);
  }

  span {
    color: var(--color-ink);
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  address {
    font-style: normal;
    font-size: 1.125rem;
    line-height: 1.3;
    text-transform: uppercase;
    color: #aeaeae;
    font-variant-numeric: tabular-nums;
  }
`;

const Columns = styled.div`
  display: flex;
  gap: clamp(2rem, 1rem + 4vw, 6rem);

  h2 {
    margin-bottom: 0.9rem;
    font-size: var(--text-label);
    font-weight: 400;
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    color: var(--color-ink);
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  a {
    color: #8f8d8d;
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    text-decoration: none;
    transition: color var(--duration-fast) ease;
  }

  a:hover {
    color: var(--color-ink);
  }

  a:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 3px;
  }
`;

const Legal = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  margin-top: clamp(2.5rem, 2rem + 2vw, 4rem);
  padding-top: 1.25rem;
  border-top: 1px solid var(--color-line);
  font-size: 0.6875rem;
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: #8f8d8d;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    color: var(--color-ink);
    text-decoration: none;
  }

  a svg {
    transition: transform var(--duration-normal) var(--ease-out-expo);
  }

  a:hover svg {
    transform: translateY(-3px);
  }

  a:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 3px;
  }
`;

/* the name across the full width, pale and cropped by the page bottom */
const Wordmark = styled.p`
  margin: clamp(1.5rem, 1rem + 2vw, 3rem) calc(-1 * var(--space-gutter)) 0;
  font-family: var(--font-condensed);
  font-size: 12.4vw;
  font-weight: 700;
  line-height: 0.78;
  letter-spacing: -0.01em;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  color: #e3e3e3;
  user-select: none;
  transform: translateY(8%);
`;

export default SiteFooter;
