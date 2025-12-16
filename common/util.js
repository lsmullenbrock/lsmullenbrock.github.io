const commonUrl = "common";
const pagesUrl = "pages";
const header = "header";
const sidebar = "sidebar";
const nav = "nav";
const footer = "footer";

export async function loadHtmlByFullUrlIntoComponentId(url, containerId) {
    const html = await fetch(url)
    document.getElementById(containerId).innerHTML = await html.text();
}

export async function renderMainSection(whichMainSection) {
    await loadHtmlByFullUrlIntoComponentId(`${pagesUrl}/${whichMainSection}.html`, "main")
}

export async function renderPageWithoutMainSection(commonUrl = "common") {
    //const masterHtmlFetch = await Promise.resolve(fetch(`${commonUrl}/${header}.html`));
    //document.html = await masterHtmlFetch.text();

    const [headerDivFetch, sidebarDivFetch, navDivFetch, footerDivFetch] = await Promise.all(
        [
            fetch(`${commonUrl}/${header}.html`),
            fetch(`${commonUrl}/${sidebar}.html`),
            fetch(`${commonUrl}/${nav}.html`),
            fetch(`${commonUrl}/${footer}.html`)
        ]);
    document.getElementById(header).innerHTML = await headerDivFetch.text();
    document.getElementById(sidebar).innerHTML = await sidebarDivFetch.text();
    document.getElementById(nav).innerHTML = await navDivFetch.text();
    document.getElementById(footer).innerHTML = await footerDivFetch.text();
}

export async function renderPageWithMainSection(pageName) {
    await renderPageWithoutMainSection();
    await renderMainSection(pageName);
}
