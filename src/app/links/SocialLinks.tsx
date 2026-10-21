"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight as BsArrowUpRight, ArrowRight as BsArrowRight, Check as BsCheck2, Link as BsLink45Deg, Send as BiLogoTelegram, Phone as WhatsAppIcon, MessageCircle as BsDiscord } from "lucide-react";
import { GithubBrandIcon as BsGithub, LinkedinBrandIcon as BsLinkedin, YoutubeBrandIcon as BsYoutube, TiktokBrandIcon as BsTiktok } from "@/components/icons/BrandIcons";

function BsFacebook() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.4A24 24 0 0 0 15 1c-3 0-5 1.8-5 5v3H7v4h3v8z" /></svg>;
}

const links = [
  {
    name: 'WhatsApp',
    detail: '+971 55 288 3528',
    label: 'Message me on WhatsApp',
    url: 'https://wa.me/971552883528',
    icon: WhatsAppIcon,
    color: 'whatsapp',
    category: 'Social',
  },
  {
    name: 'GitHub',
    detail: 'A little code. A lot of curiosity.',
    label: 'Explore my projects',
    url: 'https://github.com/Nekromenzer',
    icon: BsGithub,
    color: 'github',
    category: 'Work & code',
  },
  {
    name: 'YouTube',
    detail: 'Ideas, tutorials, and things I learn.',
    label: 'Watch & learn',
    url: 'https://www.youtube.com/channel/UClZf7b8FYFnGQKzMIP2n4wg',
    icon: BsYoutube,
    color: 'youtube',
    category: 'Videos',
  },
  {
    name: 'LinkedIn',
    detail: 'The professional side of things.',
    label: 'Let’s connect',
    url: 'https://www.linkedin.com/in/maneesha-gimshan/',
    icon: BsLinkedin,
    color: 'linkedin',
    category: 'Work & code',
  },
  {
    name: 'Facebook',
    detail: 'A bit more of my everyday world.',
    label: 'Follow my journey',
    url: 'https://facebook.com/gimshan.nekromenzer99',
    icon: BsFacebook,
    color: 'facebook',
    category: 'Social',
  },
  {
    name: 'Telegram',
    detail: 'Good conversations start here.',
    label: 'Join the group',
    url: 'https://t.me/+0AQ16PogUEM1YThl',
    icon: BiLogoTelegram,
    color: 'telegram',
    category: 'Community',
  },
  {
    name: 'Discord',
    detail: 'Come hang out with the community.',
    label: 'Join the conversation',
    url: 'https://discord.gg/xxW4979axP',
    icon: BsDiscord,
    color: 'discord',
    category: 'Community',
  },
  {
    name: 'TikTok',
    detail: 'Small moments. Fresh perspectives.',
    label: 'Catch the short version',
    url: 'https://www.tiktok.com/@nekromenzer',
    icon: BsTiktok,
    color: 'tiktok',
    category: 'Videos',
  },
  {
    name: 'Facebook Page',
    detail: 'More from Nekromenzer Dev.',
    label: 'Follow the page',
    url: 'https://web.facebook.com/nekromenzerdev',
    icon: BsFacebook,
    color: 'facebook',
    category: 'Social',
  },
]
const categories = ['All links', 'Work & code', 'Social', 'Community', 'Videos']

export default function SocialLinks() {
  const [category, setCategory] = useState('All links')
  const [shareStatus, setShareStatus] = useState('')
  const [copyFallback, setCopyFallback] = useState(false)
  const resetTimer = useRef<number | null>(null)
  const [pageUrl, setPageUrl] = useState('')
  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current)
  }, [])
  const visibleLinks = links.filter(
    (link) => category === 'All links' || link.category === category,
  )

  async function sharePage() {
    setCopyFallback(false)
    setShareStatus('')
    setPageUrl(window.location.href)
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Maneesha Gimshan · All my links',
          url: window.location.href,
        })
      } else {
        await navigator.clipboard.writeText(window.location.href)
        setShareStatus('Link copied!')
        if (resetTimer.current) clearTimeout(resetTimer.current)
        resetTimer.current = window.setTimeout(() => setShareStatus(''), 3000)
      }
    } catch (error) {
      if (!(error instanceof Error && error.name === 'AbortError')) setCopyFallback(true)
    }
  }

  return (
    <section className="dz-links-content" id="links" aria-label="Social links">
      <div className="dz-links-toolbar">
        <div className="dz-links-filters" role="group" aria-label="Filter links">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <button type="button" className="dz-links-share" onClick={sharePage}>
          {shareStatus ? <BsCheck2 aria-hidden /> : <BsLink45Deg aria-hidden />}
          {shareStatus || 'Share this page'}
        </button>
      </div>
      {copyFallback && (
        <div className="dz-links-fallback">
          <label htmlFor="social-page-url">Copy this page link</label>
          <input
            id="social-page-url"
            readOnly
            value={pageUrl}
            onFocus={(event) => event.target.select()}
          />
          <button type="button" onClick={() => setCopyFallback(false)}>Done</button>
        </div>
      )}
      <p className="dz-links-count" role="status">{visibleLinks.length} links</p>
      <div className="dz-links-grid">
        {visibleLinks.map(({ name, detail, label, url, icon: Icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="dz-skill-card dz-social-card"
          >
            <div className="dz-social-card-top">
              <span className="dz-skill-chip"><Icon aria-hidden="true" /></span>
              <BsArrowUpRight aria-hidden className="dz-social-arrow" />
            </div>
            <div className="dz-skill-text">
              <h2>{name}</h2>
              <p>{detail}</p>
            </div>
            <span className="dz-social-label">{label}<BsArrowRight aria-hidden /></span>
          </a>
        ))}
      </div>
      <div role="status" className="dz-sr-only">{shareStatus}</div>
    </section>
  );
}
