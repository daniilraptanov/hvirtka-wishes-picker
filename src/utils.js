export async function loadTemplate(path, containerId) {
    const res = await fetch(path);
    if (!res?.ok) throw new Error(`Failed to load template: ${path}`);
    const html = await res.text();

    const container = document.createElement("div");
    container.innerHTML = html;

    const target = document.querySelector(containerId);
    if (!target) throw new Error(`Selector ${containerId} not found`);

    target.innerHTML = "";
    target.append(...container.childNodes);
}
