changeThemeModeClick();

function fadeIn(element, duration = 600) {
    element.style.display = "";
    element.style.opacity = "0";
    let last = +new Date();
    let tick = function () {
        element.style.opacity = (+element.style.opacity + (new Date() - last) / duration).toString();
        last = +new Date();
        if (+element.style.opacity < 1) {
            window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
        }
    };
    tick();
}

function changeThemeModeClick(newMode) {
    let isDarkTheme = false;
    let init = false;
    switch (newMode) {
        case 0:
            localStorage.setItem("theme", "light");
            isDarkTheme = false;
            console.info("User changed theme variation to Light.");
            break;
        case 1:
            localStorage.setItem("theme", "dark");
            isDarkTheme = true;
            console.info("User changed theme variation to Dark.");
            break;
        default:
            init = true;
            const defaultTheme = localStorage.getItem("theme");
            if (defaultTheme === "light") {
                isDarkTheme = false;
            }
            else if (defaultTheme === "dark") {
                isDarkTheme = true;
            }
            else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                isDarkTheme = true;
            } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
                isDarkTheme = false;
            }
            break;
    }
    renderThemeVariation(isDarkTheme, init);
}

function renderThemeVariation(isDarkTheme, init = false) {
    const codeHlLight = document.querySelector("link[title=hl-light]");
    const codeHlDark = document.querySelector("link[title=hl-dark]");
    const codeHlEnabled = codeHlLight !== null || codeHlDark !== null;
    const diagramEnabled = document.querySelector("script[title=mermaid]") !== null;
    const body = document.body;
    if (isDarkTheme === false) {
        document.documentElement.removeAttribute('theme')
        if (!init) {
            Object.assign(body.style, {
                opacity: 0,
                visibility: "visible"
            });
            fadeIn(body, 600);
            body.classList.remove("dark");
        }
        if (codeHlEnabled) {
            console.debug("Setting HLJS theme to light");
            if (codeHlLight) {
                codeHlLight.disabled = false;
            }
            if (codeHlDark) {
                codeHlDark.disabled = true;
            }
        }
        if (diagramEnabled) {
            console.debug("Initializing Mermaid with light theme");
            if (init) {
                window.mermaid.initialize({
                    theme: "default",
                    securityLevel: "loose"
                });
            } else {
                location.reload();
            }
        }
    } else if (isDarkTheme === true) {
        document.documentElement.setAttribute('theme', 'dark');
        if (!init) {
            Object.assign(body.style, {
                opacity: 0,
                visibility: "visible"
            });
            fadeIn(body, 600);
            body.classList.add("dark");
        }
        if (codeHlEnabled) {
            console.debug("Setting HLJS theme to dark");
            if (codeHlLight) {
                codeHlLight.disabled = true;
            }
            if (codeHlDark) {
                codeHlDark.disabled = false;
            }
        }
        if (diagramEnabled) {
            console.debug("Initializing Mermaid with dark theme");
            if (init) {
                window.mermaid.initialize({
                    theme: "dark",
                    securityLevel: "loose"
                });
            } else {
                location.reload();
            }
        }
    }
}