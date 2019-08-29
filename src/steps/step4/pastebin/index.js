(() => {
  const template = "<div>lowLoaderModule</div>";
  let el;
  const app = {
    wake(id) {
      el = document.getElementById(id);
      el.innerHTML = template;
    },
    sleep() {
      if (el) {
        el.innerHTML = "";
      }
    }
  };

  if (window.lowloader) {
    const loader = lowloader.loader;
    loader.export(app);
  }
})();
