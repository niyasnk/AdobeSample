
(function () {
  window.dataLayer = window.dataLayer || [];

  function getPageName() {
    var pageObj = window.dataLayer.find(d => d.page);
    return pageObj ? pageObj.page.pageName : "";
  }

  document.addEventListener("click", function (e) {
    var el = e.target.closest("a, button");
    if (!el) return;

    var clickEvent = {
      event: "linkClickTrack",
      click: {
        linkText: el.innerText.trim(),
        linkId: el.id || "",
        linkClasses: el.className || "",
        linkUrl: el.href || "",
        pageName: getPageName()
      }
    };

    window.dataLayer.push(clickEvent);
    console.log("Click tracked:", clickEvent);
  });
})();
