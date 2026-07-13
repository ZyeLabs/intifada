import postcssImport from 'postcss-import'
import purgecss from '@fullhuman/postcss-purgecss'
import cssnano from 'cssnano'

/**
 * Flatten the CSS partials, purge unused rules, minify.
 *
 * The source keeps complete styles for components no page renders (news, campaign
 * cards, an alternate event card) — finished design work the WordPress build may
 * want. Purge drops them from the bundle so they cost nothing.
 *
 * See src/assets/css/README.md.
 */
export default {
  plugins: [
    postcssImport(),
    purgecss({
      // Built pages + the JS, which is where the state classes live.
      content: ['_site/**/*.html', 'src/assets/js/site.js'],
      // Assigned as string literals in site.js. Never purge these.
      safelist: ['is-nav-open', 'site-body--nav-open', 'is-header-condensed', 'motion-word'],
      // Keeps BEM (`__`, `--`) intact.
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) ?? [],
    }),
    cssnano({ preset: 'default' }),
  ],
}
