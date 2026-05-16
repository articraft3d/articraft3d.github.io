(() => {
  const comparisonMethods = [
    {
      label: "Articraft (GPT-5.5)",
      dir: "articraft_5.5",
      note: "Ours: a GPT-5.5-driven Articraft agent builds articulated URDF assets with generated geometry, part structure, and joint behavior."
    },
    {
      label: "Articraft (GPT-5.4)",
      dir: "articraft",
      note: "Ours with GPT-5.4, using the same Articraft workflow for procedural geometry, articulation design, and executable URDF output."
    },
    {
      label: "Articulate-Anything (ICLR 2025)",
      dir: "articulate-anything",
      note: "VLM-based articulation baseline that retrieves meshes and generates Python programs compiling to articulated URDFs from text, image, or video inputs."
    },
    {
      label: "PhysX-Anything (CVPR 2026)",
      dir: "physx-anything",
      note: "Single-image physical 3D generation baseline that predicts simulation-ready assets with explicit geometry, articulation, and physical attributes."
    },
    {
      label: "Codex (GPT-5.5, 2026)",
      dir: "codex_5.5",
      note: "Codex-only GPT-5.5 baseline using a general agentic coding model directly, without the Articraft-specific generation workflow."
    },
    {
      label: "URDF-Anything+ (arXiv 2026)",
      dir: "urdf-anything",
      note: "Autoregressive visual reconstruction baseline that sequentially generates part geometries and joint parameters as executable URDF models."
    }
  ];

  const comparisonSets = [
    {
      object: "Keyboard",
      title: "Keyboard comparison",
      description: "Keyboard with individually articulated keys.",
      slug: "keyboard"
    },
    {
      object: "Oven",
      title: "Oven comparison",
      description: "Oven with a hinged door and rotary dial.",
      slug: "oven"
    },
    {
      object: "Door",
      title: "Door comparison",
      description: "Door with a revolute hinge.",
      slug: "door"
    }
  ];

  const demoMedia = {
    generation: [
      {
        title: "MIDI keyboard",
        description: "Agent builds a keyboard with per-key prismatic joints.",
        src: "webpage/generation/turn_vis_rec_a-midi-keyboard_20260322_164952_491478_ce96f1d3.mp4"
      },
      {
        title: "Bicycle crankset",
        description: "Crankset with revolute pedals and chain sprocket.",
        src: "webpage/generation/turn_vis_rec_bicycle_crankset_and_pedal_assembly_54d5cb42dd2f4a6783594c35403ebfc4.mp4"
      },
      {
        title: "Drone",
        description: "Quadcopter with four spinning rotors.",
        src: "webpage/generation/turn_vis_rec_drone_3841c83833864d36a7f95384646cad21.mp4"
      },
      {
        title: "Gear assembly",
        description: "Meshing gears that rotate in sync.",
        src: "webpage/generation/turn_vis_rec_gear_assemblies_5edb006b8c0447569d8901510d2ef8d9.mp4"
      },
      {
        title: "Office chair",
        description: "Swivel chair with adjustable seat height.",
        src: "webpage/generation/turn_vis_rec_office_chair_a096695885434a94868e2de826775da9.mp4"
      },
      {
        title: "Light bulb socket",
        description: "Bulb that screws into a threaded socket.",
        src: "webpage/generation/turn_vis_rec_screwin_light_bulb_with_socket_1dc69a231a07414994cd08d1fb1f1513.mp4"
      },
      {
        title: "Stove top",
        description: "Stove top with four rotary burner knobs.",
        src: "webpage/generation/turn_vis_rec_stove_top_acb31ee0dc114085ab1521da4209f87e.mp4"
      },
      {
        title: "Turntable",
        description: "Vinyl turntable with a spinning platter and tonearm.",
        src: "webpage/generation/turn_vis_rec_turntable_412ace408b7f48eeb54139da2940abae.mp4"
      }
    ],
    robotics: [
      {
        title: "Manipulating a generated oven",
        description: "Simulation of an imported Articraft (GPT-5.5) oven asset with an articulated pull-down door.",
        src: "webpage/simulation/manipulate_oven.mp4"
      },
      {
        title: "Manipulating a generated drawer",
        description: "Simulation of an imported Articraft (GPT-5.5) cabinet asset with an articulated sliding drawer.",
        src: "webpage/simulation/manipulate_drawer.mp4"
      }
    ],
    reconstruction: [
      {
        title: "Nintendo DS Lite",
        description: "Clamshell hinge recovered from a single product photo.",
        src: "webpage/reconstruction/01_nintendo_ds_lite.mp4"
      },
      {
        title: "Penny-farthing",
        description: "Large and small wheels with independent axle joints.",
        src: "webpage/reconstruction/02_penny_farthing.mp4"
      },
      {
        title: "Storage shelves",
        description: "Sliding drawers reconstructed from a catalog image.",
        src: "webpage/reconstruction/03_storage_shelves.mp4"
      },
      {
        title: "Game Boy",
        description: "Hinged battery cover and pressable buttons.",
        src: "webpage/reconstruction/04_game_boy.mp4"
      },
      {
        title: "Pixar lamp",
        description: "Multi-joint arm matching the iconic desk-lamp pose.",
        src: "webpage/reconstruction/05_pixar_lamp.mp4"
      },
      {
        title: "WALL-E",
        description: "Tracked chassis and articulated arms from a film still.",
        src: "webpage/reconstruction/06_wall_e.mp4"
      },
      {
        title: "Wooden mannequin",
        description: "Ball-and-socket limbs reconstructed from a product shot.",
        src: "webpage/reconstruction/07_wooden_mannequin.mp4"
      }
    ],
    scenes: [
      {
        title: "Bedroom scene",
        description: "Scene scan, side-by-side comparison with the scanner reconstruction, and articulations of the Articraft-generated assets populating the bedroom.",
        src: "webpage/scenes/Darwin_BedRoom_final_compressed.mp4"
      },
      {
        title: "Tea room scene",
        description: "Scene scan, side-by-side comparison with the scanner reconstruction, and articulations of the Articraft-generated assets populating the tea room.",
        src: "webpage/scenes/SigProc_Tea_Room_final_compressed.mp4"
      },
      {
        title: "Study room scene",
        description: "Scene scan, side-by-side comparison with the scanner reconstruction, and articulations of the Articraft-generated assets populating the study room.",
        src: "webpage/scenes/Girton_Study_Room_final_compressed.mp4"
      }
    ],
    vr: [
      {
        title: "VR kitchen interaction",
        description: "VR user interacts with articulated kitchen objects.",
        src: "webpage/vr/vr_demo.mp4"
      }
    ]
  };

  const makeElement = (tagName, className, text) => {
    const element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    if (text !== undefined) {
      element.textContent = text;
    }
    return element;
  };

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let isLightboxOpen = false;
  let syncQueued = false;

  const playInlineVideo = (video) => {
    if (isLightboxOpen || prefersReducedMotion.matches || !video.closest(".is-active")) {
      return;
    }
    video.play().catch(() => {});
  };

  const pauseInlineVideos = () => {
    document.querySelectorAll("main video").forEach((video) => video.pause());
  };

  const isNearViewport = (element) => {
    const margin = 240;
    const rect = element.getBoundingClientRect();
    return rect.bottom >= -margin && rect.top <= window.innerHeight + margin;
  };

  const syncInlineVideos = () => {
    syncQueued = false;
    document.querySelectorAll("main video").forEach((video) => {
      if (video.closest(".is-active") && isNearViewport(video)) {
        playInlineVideo(video);
      } else {
        video.pause();
      }
    });
  };

  const scheduleInlineVideoSync = () => {
    if (syncQueued) {
      return;
    }
    syncQueued = true;
    window.requestAnimationFrame(syncInlineVideos);
  };

  const videoObserver =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const video = entry.target;
              if (entry.isIntersecting) {
                playInlineVideo(video);
              } else {
                video.pause();
              }
            });
          },
          { rootMargin: "240px 0px", threshold: 0.01 }
        )
      : null;

  const observeVideo = (video) => {
    if (videoObserver) {
      videoObserver.observe(video);
    }
  };

  /* ---- Lightbox ---- */

  const lightboxOverlay = makeElement("div", "lightbox-overlay");
  lightboxOverlay.setAttribute("role", "dialog");
  lightboxOverlay.setAttribute("aria-modal", "true");
  lightboxOverlay.setAttribute("aria-label", "Video preview");
  const lightboxInner = makeElement("div", "lightbox-inner");
  const lightboxVideo = document.createElement("video");
  lightboxVideo.controls = true;
  lightboxVideo.loop = true;
  lightboxVideo.playsInline = true;
  lightboxVideo.preload = "metadata";

  const lightboxBar = makeElement("div", "lightbox-bar");
  const lightboxTitle = makeElement("span", "lightbox-title");
  const lightboxClose = makeElement("button", "lightbox-close", "Close");
  lightboxClose.type = "button";
  lightboxBar.append(lightboxTitle, lightboxClose);
  lightboxInner.append(lightboxVideo, lightboxBar);
  lightboxOverlay.append(lightboxInner);
  document.body.append(lightboxOverlay);

  const openLightbox = (src, title) => {
    isLightboxOpen = true;
    pauseInlineVideos();
    lightboxVideo.src = src;
    lightboxVideo.muted = false;
    lightboxTitle.textContent = title;
    lightboxOverlay.classList.add("active");
    lightboxVideo.play().catch(() => {});
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    lightboxOverlay.classList.remove("active");
    lightboxVideo.pause();
    lightboxVideo.removeAttribute("src");
    lightboxVideo.load();
    document.body.style.overflow = "";
    isLightboxOpen = false;
    syncInlineVideos();
  };

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxOverlay.addEventListener("click", (e) => {
    if (e.target === lightboxOverlay) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightboxOverlay.classList.contains("active")) {
      closeLightbox();
    }
  });

  const makeVideo = (src, title) => {
    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.setAttribute("aria-label", title);
    video.addEventListener("loadedmetadata", () => {
      if (!video.videoWidth || !video.videoHeight) {
        return;
      }

      const frame = video.closest(".video-frame, .asset-frame");
      if (frame) {
        frame.style.aspectRatio = `${video.videoWidth} / ${video.videoHeight}`;
      }
    });
    return video;
  };

  const makeEmptyFrame = (title, path, frameClass) => {
    const frame = makeElement("div", frameClass);
    const empty = makeElement("div", "empty-media");
    const label = makeElement("strong", "", title);
    const detail = makeElement("span", "", path);
    empty.append(label, detail);
    frame.append(empty);
    return frame;
  };

  const renderMedia = (item, isActive = false) => {
    const fragment = document.createDocumentFragment();
    if (item.src) {
      const frame = makeElement("div", "video-frame carousel-panel");
      if (isActive) {
        frame.classList.add("is-active");
      }
      frame.append(makeVideo(item.src, item.title));
      fragment.append(frame);
    } else {
      const frame = makeEmptyFrame(item.title, item.missing, "video-frame carousel-panel");
      if (isActive) {
        frame.classList.add("is-active");
      }
      fragment.append(frame);
    }

    const caption = makeElement("div", "media-caption carousel-panel");
    if (isActive) {
      caption.classList.add("is-active");
    }
    const copy = document.createElement("div");
    copy.append(makeElement("h3", "", item.title));
    copy.append(makeElement("p", "", item.description));
    caption.append(copy);

    if (item.src) {
      const btn = makeElement("button", "source-link", "View \u2192");
      btn.type = "button";
      btn.addEventListener("click", () => openLightbox(item.src, item.title));
      caption.append(btn);
    }

    fragment.append(caption);
    return fragment;
  };

  const setPanelActive = (panel, active) => {
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
    panel.querySelectorAll("video").forEach((video) => {
      if (active) {
        try {
          video.currentTime = 0;
        } catch {
          // Metadata may not be ready yet; playback will still start from the beginning.
        }
        playInlineVideo(video);
      } else {
        video.pause();
      }
    });
  };

  const renderCarousel = (root) => {
    const items = demoMedia[root.dataset.carousel] || [];
    let index = 0;

    if (!items.length) {
      root.hidden = true;
      return;
    }

    const frameHost = makeElement("div", "carousel-stage");
    const panels = items.map((item, itemIndex) => {
      const panel = makeElement("div", "carousel-item");
      panel.append(renderMedia(item, itemIndex === index));
      panel.hidden = itemIndex !== index;
      panel.classList.toggle("is-active", itemIndex === index);
      frameHost.append(panel);
      return panel;
    });

    const controls = makeElement("div", "carousel-controls");
    const count = makeElement("span", "carousel-count");
    const buttons = makeElement("div", "button-row");
    const prev = makeElement("button", "carousel-button", "Previous");
    const next = makeElement("button", "carousel-button", "Next");
    prev.type = "button";
    next.type = "button";
    buttons.append(prev, next);
    controls.append(count, buttons);

    const update = () => {
      panels.forEach((panel, itemIndex) => setPanelActive(panel, itemIndex === index));
      count.textContent = `${index + 1} / ${items.length}`;
      prev.disabled = items.length <= 1;
      next.disabled = items.length <= 1;
      scheduleInlineVideoSync();
    };

    prev.addEventListener("click", () => {
      index = (index - 1 + items.length) % items.length;
      update();
    });

    next.addEventListener("click", () => {
      index = (index + 1) % items.length;
      update();
    });

    root.replaceChildren(frameHost, controls);
    controls.hidden = items.length <= 1;
    update();
  };

  const renderComparisonCard = (method, set) => {
    const src = `webpage/comparisons/videos/${method.dir}/${set.slug}.mp4`;
    const card = makeElement("article", "comparison-card");
    const frame = makeElement("div", "asset-frame");
    frame.append(makeVideo(src, `${method.label} ${set.object}`));

    const body = makeElement("div", "comparison-body");
    body.append(makeElement("h3", "", method.label));
    body.append(makeElement("p", "", method.note));

    const btn = makeElement("button", "comparison-model-link", "View \u2192");
    btn.type = "button";
    btn.addEventListener("click", () => openLightbox(src, `${method.label} \u2014 ${set.object}`));
    body.append(btn);
    card.append(frame, body);
    return card;
  };

  const renderComparisonCarousel = (root) => {
    let index = 0;
    const head = makeElement("div", "comparison-carousel-head");
    const title = makeElement("div", "comparison-set-title");
    const heading = document.createElement("h3");
    const description = document.createElement("p");
    title.append(heading, description);

    const controls = makeElement("div", "carousel-controls");
    const count = makeElement("span", "carousel-count");
    const buttons = makeElement("div", "button-row");
    const prev = makeElement("button", "carousel-button", "Previous");
    const next = makeElement("button", "carousel-button", "Next");
    prev.type = "button";
    next.type = "button";
    buttons.append(prev, next);
    controls.append(count, buttons);
    head.append(title, controls);

    const gridStage = makeElement("div", "comparison-stage");
    const panels = comparisonSets.map((set, setIndex) => {
      const panel = makeElement("div", "comparison-grid carousel-panel");
      panel.replaceChildren(...comparisonMethods.map((method) => renderComparisonCard(method, set)));
      panel.hidden = setIndex !== index;
      panel.classList.toggle("is-active", setIndex === index);
      gridStage.append(panel);
      return panel;
    });

    const update = () => {
      const set = comparisonSets[index];
      heading.textContent = set.title;
      description.textContent = set.description;
      count.textContent = `${index + 1} / ${comparisonSets.length}`;
      panels.forEach((panel, setIndex) => setPanelActive(panel, setIndex === index));
      scheduleInlineVideoSync();
    };

    prev.addEventListener("click", () => {
      index = (index - 1 + comparisonSets.length) % comparisonSets.length;
      update();
    });

    next.addEventListener("click", () => {
      index = (index + 1) % comparisonSets.length;
      update();
    });

    root.replaceChildren(head, gridStage);
    update();
  };

  document.querySelectorAll("[data-carousel]").forEach(renderCarousel);
  document.querySelectorAll("[data-comparison-carousel]").forEach(renderComparisonCarousel);
  window.addEventListener("resize", scheduleInlineVideoSync, { passive: true });
  window.addEventListener("scroll", scheduleInlineVideoSync, { passive: true });
  scheduleInlineVideoSync();
})();
