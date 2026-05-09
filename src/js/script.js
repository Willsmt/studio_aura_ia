const portfolioItems = [
  {
    title: "Residência Atmosfera",
    image: "./src/assets/images/projeto-banheiro.png",
  },
  {
    title: "Cobertura Horizonte",
    image: "./src/assets/images/projeto-biblioteca.png",
  },
  {
    title: "Loft Essencial",
    image: "./src/assets/images/projeto-cozinha.png",
  },
  {
    title: "Casa Pátio",
    image: "./src/assets/images/projeto-quarto.png",
  },
  {
    title: "Suíte Orla",
    image: "./src/assets/images/projeto-sala.png",
  },
  {
    title: "Apartamento Galeria",
    image: "./src/assets/images/projeto-sala-2.png",
  },
  // {
  //   title: "Estúdio Trama",
  //   image: "./src/assets/images/projeto-terracota.png",
  // },
];

const grid = document.getElementById("portfolio-grid");

if (grid) {
  portfolioItems.forEach((item, index) => {
    const article = document.createElement("article");
    article.className = `portfolio-item portfolio-item--${index + 1} reveal`;

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;
    img.loading = "lazy";
    img.decoding = "async";
    img.onerror = () => {
      img.classList.add("asset-missing");
      img.alt = `${item.title} (asset não encontrado)`;
    };

    const caption = document.createElement("div");
    caption.className = "portfolio-caption";
    caption.innerHTML = `<p>${item.title}</p>`;

    article.append(img, caption);
    grid.append(article);
  });
}

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

if (contactForm && feedback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    const hasEmptyField = Object.values(data).some(
      (value) => String(value).trim().length < 3
    );

    feedback.classList.remove("error", "success");

    if (hasEmptyField) {
      feedback.textContent = "Preencha todos os campos corretamente.";
      feedback.classList.add("error");
      return;
    }

    feedback.textContent = "Briefing enviado. Retornaremos em até 1 dia útil.";
    feedback.classList.add("success");
    contactForm.reset();
  });
}

const initScrollVideoEffects = () => {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });

  // Garante que o conteúdo do hero não fique oculto.
  gsap.set(".hero-content.reveal", { autoAlpha: 1, y: 0 });

  // Entrada elegante do hero ao carregar a página.
  const heroIntro = gsap.timeline({ defaults: { ease: "power3.out" } });
  heroIntro
    .from(".hero .eyebrow", { y: 24, autoAlpha: 0, duration: 0.7 })
    .from(".hero h1", { y: 34, autoAlpha: 0, duration: 1 }, "-=0.45")
    .from(".hero .hero-content p", { y: 24, autoAlpha: 0, duration: 0.8 }, "-=0.55")
    .from(".hero .hero-actions .btn", { y: 18, autoAlpha: 0, duration: 0.6, stagger: 0.12 }, "-=0.45");

  const mm = gsap.matchMedia();
  mm.add("(min-width: 900px)", () => {
    gsap.to(".hero-video", {
      yPercent: 12,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      },
    });

    gsap.fromTo(
      ".camadas-media video",
      { yPercent: -6 },
      {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: ".camadas",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      }
    );

    // Parallax sutil nas fotos do portfólio somente no desktop.
    gsap.utils.toArray(".portfolio-item img").forEach((image) => {
      gsap.fromTo(
        image,
        { yPercent: -3 },
        {
          yPercent: 3,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );
    });
  });

  // Revela elementos em lote conforme entram na viewport.
  ScrollTrigger.batch(".section .reveal", {
    interval: 0.1,
    batchMax: 4,
    start: "top 84%",
    onEnter: (batch) => {
      gsap.to(batch, {
        y: 0,
        autoAlpha: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        overwrite: true,
      });
    },
  });

  // Microinteração nos botões para resposta mais tátil.
  gsap.utils.toArray(".btn").forEach((button) => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, { y: -2, duration: 0.25, ease: "power2.out" });
    });
    button.addEventListener("mouseleave", () => {
      gsap.to(button, { y: 0, duration: 0.25, ease: "power2.out" });
    });
  });

  ScrollTrigger.refresh();
};

const setVideoPlaybackRates = () => {
  const heroVideo = document.querySelector(".hero-video");
  if (heroVideo) {
    heroVideo.playbackRate = 0.6;
  }

  const camadasVideo = document.querySelector(".camadas-media video");
  if (camadasVideo) {
    camadasVideo.playbackRate = 0.8;
  }
};

window.addEventListener("load", () => {
  setVideoPlaybackRates();
  initScrollVideoEffects();
});
