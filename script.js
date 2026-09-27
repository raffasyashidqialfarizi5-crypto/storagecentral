const menuToggle = document.querySelector(".menu-toggle");
const pageMenu = document.querySelector(".page-menu");

if (menuToggle && pageMenu) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    const shouldExpand = !isExpanded;

    menuToggle.setAttribute("aria-expanded", String(shouldExpand));
    pageMenu.classList.toggle("is-open", shouldExpand);
    pageMenu.setAttribute("aria-hidden", String(!shouldExpand));
    pageMenu.inert = !shouldExpand;
  });
}

const revealBoxes = document.querySelectorAll(".scroll-reveal");

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealBoxes.forEach((box) => revealObserver.observe(box));

const drives = {
  sn850x: {
    name: "WD Black SN850X",
    price: "5,500,000 rupiah",
    read: "7,300 MB/s",
    write: "6,600 MB/s",
    dram: "Includes DRAM"
  },
  sn8100x: {
    name: "WD Black SN8100X",
    price: "15,310,810 million rupiah (as listed)",
    read: "14,900 MB/s",
    write: "14,000 MB/s",
    dram: "Includes DRAM"
  },
  sn770: {
    name: "WD Black SN770",
    price: "3,797,768 million rupiah (as listed)",
    read: "5,510 MB/s (listed as 5.510mb/s)",
    write: "4,900 MB/s (listed as 4.900mb/s)",
    dram: "DRAM-less"
  },
  "990pro": {
    name: "Samsung 990 Pro",
    price: "4.5 million rupiah",
    read: "7,450 MB/s",
    write: "6,900 MB/s",
    dram: "Includes DRAM"
  },
  "9100pro": {
    name: "Samsung 9100 Pro",
    price: "Rp8.914.324",
    read: "14,700 MB/s",
    write: "13,400 MB/s",
    dram: "Includes DRAM"
  },
  t500: {
    name: "Crucial T500 (Gen 4, 1TB)",
    price: "Approx. Rp 2,000,000",
    read: "7,300 MB/s",
    write: "6,800 MB/s",
    dram: "Includes DRAM"
  },
  kc3000: {
    name: "Kingston KC3000 (Gen 4, 1TB)",
    price: "Approx. Rp 1,900,000",
    read: "7,000 MB/s",
    write: "6,000 MB/s",
    dram: "Includes DRAM"
  },
  t705: {
    name: "Crucial T705 (Gen 5, 1TB)",
    price: "Approx. Rp 4,500,000",
    read: "13,600 MB/s",
    write: "10,200 MB/s",
    dram: "Includes DRAM"
  },
  firecuda540: {
    name: "Seagate FireCuda 540 (Gen 5, 1TB)",
    price: "Approx. Rp 3,500,000",
    read: "10,000 MB/s",
    write: "10,000 MB/s",
    dram: "Includes DRAM"
  }
};

const detailPage = document.querySelector(".ssd-details-page");
if (detailPage) {
  const drive = drives[new URLSearchParams(window.location.search).get("drive")];
  if (drive) {
    document.title = `${drive.name} details`;
    document.querySelector("#drive-name").textContent = drive.name;
    document.querySelector("#drive-price").textContent = `Listed price: ${drive.price}`;
    document.querySelector("#read-speed").textContent = `Read speed: ${drive.read}`;
    document.querySelector("#write-speed").textContent = `Write speed: ${drive.write}`;
    document.querySelector("#dram-info").textContent = drive.dram;
  } else {
    document.querySelector("#drive-name").textContent = "SSD not found";
    document.querySelector("#drive-price").textContent = "Choose a drive from the SSD prices page.";
    detailPage.querySelector("ul").hidden = true;
  }
}
