# Social Intifada Static Site

This branch is a plain static website for GitHub Pages. It has no server runtime, no database, no admin area, and no build step.

## Structure

- `index.html` - homepage
- `about-us/index.html` - about page
- `about/index.html` - static redirect shim to `about-us/`
- `news/index.html` - news archive
- `events/index.html` - events catalogue
- `campaigns/index.html` - campaigns catalogue
- `donate/index.html` - donation page
- `assets/css/site.css` - all styling
- `assets/js/site.js` - all browser behavior
- `assets/img/` - images, logos, and icons

## Local Preview

```bash
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080/`.

## GitHub Pages

Configure Pages to deploy from the branch root:

1. Go to repository Settings.
2. Open Pages.
3. Set Source to "Deploy from a branch".
4. Select this branch and `/(root)`.
5. Save.

The `.nojekyll` file is included so GitHub Pages serves these files directly.

## Editing Content

Edit the HTML files directly. Keep links relative, without a leading slash, so the site works under both the repository URL and a future custom domain.
