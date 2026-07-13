/**
 * Social Intifada — template kit.
 *
 * Output paths match the old site (flat .html, no pretty URLs) so the pixel-diff
 * harness compares like with like. WordPress replaces them with permalinks —
 * HANDOFF §4.
 */
export default function (eleventyConfig) {
  // README.md under src/ is docs, not a page. Without this Eleventy renders it
  // into the site.
  eleventyConfig.ignores.add('src/**/README.md')

  for (const asset of [
    // Not src/assets wholesale — src/assets/css is a PostCSS source tree,
    // compiled by `npm run build`, not copied.
    'src/assets/events',
    'src/assets/img',
    'src/assets/js',
  ]) {
    eleventyConfig.addPassthroughCopy({ [asset]: asset.replace(/^src\//, '') })
  }

  // Relative paths so the build also works opened from file://.
  // `root` is the hop up: "" at top level, "../" inside events/.
  eleventyConfig.addGlobalData('eleventyComputed', {
    root: (data) => {
      const depth = (data.page.url.match(/\//g) ?? []).length - 1
      return '../'.repeat(Math.max(0, depth))
    },
  })

  // --- Event dates -----------------------------------------------------------
  // An event stores ONE timestamp (`startsAt`, +02:00); every date string is
  // derived from it. `dateHijri` is the exception — Intl's transliteration
  // ("Dhū al-Qaʿdah") doesn't match the site's ("Dhu al-Qidah"), so it's stored.
  // A null `startsAt` means TBC.
  const TZ = 'Africa/Johannesburg'
  const fmt = (opts) => new Intl.DateTimeFormat('en-ZA', { timeZone: TZ, ...opts })
  const F = {
    date: fmt({ weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
    time: new Intl.DateTimeFormat('en-GB', { timeZone: TZ, hour: '2-digit', minute: '2-digit', hour12: false }),
    day: new Intl.DateTimeFormat('en-GB', { timeZone: TZ, day: 'numeric' }),
    month: new Intl.DateTimeFormat('en-GB', { timeZone: TZ, month: 'short' }),
  }
  const TBC = 'TBC'

  eleventyConfig.addFilter('eventDate', (iso) => (iso ? F.date.format(new Date(iso)) : TBC))
  eleventyConfig.addFilter('eventTime', (iso) => (iso ? F.time.format(new Date(iso)) : TBC))

  // The homepage "Latest" list splits these into separate elements.
  eleventyConfig.addFilter('eventWeekday', (iso) => (iso ? F.date.format(new Date(iso)).split(',')[0] : TBC))
  eleventyConfig.addFilter('eventDayMonthYear', (iso) =>
    iso ? F.date.format(new Date(iso)).split(',').slice(1).join(',').trim() : TBC
  )
  eleventyConfig.addFilter('stampDay', (iso) => (iso ? F.day.format(new Date(iso)) : '--'))
  eleventyConfig.addFilter('stampMonth', (iso) => (iso ? F.month.format(new Date(iso)).toUpperCase() : TBC))
  eleventyConfig.addFilter('eventUrl', (slug) => `events/${slug}.html`)

  // Both were hand-authored on every surface. Derive them.
  eleventyConfig.addFilter('supporting', (location) =>
    location ? `Location: ${location}` : 'Venue to be confirmed'
  )
  eleventyConfig.addFilter('eventStatus', (section) => (section === 'completed' ? 'Completed' : 'Upcoming'))

  eleventyConfig.addFilter('bySlug', (events, slug) => events.find((e) => e.slug === slug))

  // --- Event queries ---------------------------------------------------------
  // WordPress must reproduce these as WP_Query args, with `section` DERIVED from
  // the event date rather than stored. HANDOFF §1.
  const asc = (a, b) => new Date(a.startsAt) - new Date(b.startsAt)

  eleventyConfig.addFilter('upcoming', (events) => events.filter((e) => e.section === 'upcoming').sort(asc))
  eleventyConfig.addFilter('completed', (events) => events.filter((e) => e.section === 'completed').sort((a, b) => -asc(a, b)))
  eleventyConfig.addFilter('featured', (events) => events.find((e) => e.featured) ?? null)
  eleventyConfig.addFilter('limit', (arr, n) => arr.slice(0, n))

  // --- Date bar no-JS fallback -----------------------------------------------
  // site.js overwrites these on load. Rendered at build time so the no-JS value
  // is at worst as old as the last deploy.
  // → WordPress: use wp_date() and it is never stale.
  const now = new Date()
  eleventyConfig.addGlobalData('buildDate', {
    gregorian: F.date.format(now),
    hijri:
      new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: TZ,
      }).format(now) + ' AH',
  })

  return {
    dir: { input: 'src', output: '_site', includes: '_includes', data: '_data' },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  }
}
