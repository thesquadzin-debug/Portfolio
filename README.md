# Avil — B.Tech CSE Developer Portfolio

A responsive, dark-themed personal portfolio built with HTML, CSS, and vanilla JavaScript.

## Included
- `index.html` — page structure and content
- `css/style.css` — responsive styling, layout, and animations
- `js/main.js` — mobile navigation, active section highlight, year, and email form
- `assets/` — place your profile photo, resume, and project screenshots here

## Run locally
Open `index.html` in your browser. No build tools are required.

For a local development server, you can use VS Code's Live Server extension.

## Before publishing
1. Replace `your.email@example.com` in `index.html` and `js/main.js` with your real email.
2. Confirm the GitHub and LinkedIn links are yours.
3. Update your education, college, graduation year, and skill levels if you want them displayed.
4. Project 02 and Project 03 are clearly marked as project ideas, not completed projects. Change their status once built.
5. Add a real resume PDF in `assets/` and link it from the page if desired.

## Deploy with GitHub Pages
1. Create a repository. For a root profile site, name it exactly `<your-github-username>.github.io`. For a project site, any repository name works.
2. Upload these files while keeping the `css/` and `js/` folders in place.
3. In GitHub, open **Settings → Pages** and select the branch and root folder as the source.
4. If using a custom domain, configure it in GitHub Pages and add the DNS records GitHub specifies at your domain provider.

## Tech direction
The current site is static. If you later add a Spring Boot backend and MySQL database, deploy the backend separately to a Java-compatible hosting provider and connect the frontend to its API. GitHub Pages itself does not run Java/Spring Boot or MySQL.
