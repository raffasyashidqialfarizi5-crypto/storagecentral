const comparisonDrives = {
  sn850x: {
    name: "WD Black SN850X",
    price: "5,500,000 rupiah",
    read: "7,300 MB/s",
    write: "6,600 MB/s",
    dram: "Includes DRAM",
    image: "https://uploads.onecompiler.io/452t4skdg/454752cu3/IMG_0278.png",
    details: "sn850x"
  },
  sn8100x: {
    name: "WD Black SN8100X",
    price: "15,310,810 million rupiah (as listed)",
    read: "14,900 MB/s",
    write: "14,000 MB/s",
    dram: "Includes DRAM",
    image: "https://uploads.onecompiler.io/452t4skdg/454752cu3/IMG_0308.png",
    details: "sn8100x"
  },
  sn770: {
    name: "WD Black SN770",
    price: "3,797,768 million rupiah (as listed)",
    read: "5,510 MB/s",
    write: "4,900 MB/s",
    dram: "DRAM-less",
    image: "https://uploads.onecompiler.io/452t4skdg/454752cu3/IMG_0311.png",
    details: "sn770"
  },
  "990pro": {
    name: "Samsung 990 Pro",
    price: "4.5 million rupiah",
    read: "7,450 MB/s",
    write: "6,900 MB/s",
    dram: "Includes DRAM",
    image: "https://uploads.onecompiler.io/452t4skdg/454752cu3/IMG_0312-removebg-preview.png",
    details: "990pro"
  },
  "9100pro": {
    name: "Samsung 9100 Pro",
    price: "Rp8.914.324",
    read: "14,700 MB/s",
    write: "13,400 MB/s",
    dram: "Includes DRAM",
    image: "https://uploads.onecompiler.io/452t4skdg/454752cu3/sg-9100-pro-nvme-m2-ssd-mz-vap1t0bw-545872888.avif",
    details: "9100pro"
  },
  t500: {
    name: "Crucial T500 1TB",
    price: "Approx. Rp 2,000,000",
    read: "7,300 MB/s",
    write: "6,800 MB/s",
    dram: "Includes DRAM",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNWpVTBm2xNcxUj8olDE5DiWlR6KCx-1xUX4Ksu3DiXg&s=10",
    details: "t500"
  },
  t705: {
    name: "Crucial T705 1TB",
    price: "Approx. Rp 4,500,000",
    read: "13,600 MB/s",
    write: "10,200 MB/s",
    dram: "Includes DRAM",
    image: "https://www.pcworld.com/wp-content/uploads/2025/04/Crucial-T705-hero-3.jpg?quality=50&strip=all&w=1024",
    details: "t705"
  },
  kc3000: {
    name: "Kingston KC3000 1TB",
    price: "Approx. Rp 1,900,000",
    read: "7,000 MB/s",
    write: "6,000 MB/s",
    dram: "Includes DRAM",
    image: "https://media.kingston.com/kingston/product/ktc-product-ssd-kc3000-2048gb-1-lg.jpg",
    details: "kc3000"
  },
  firecuda540: {
    name: "Seagate FireCuda 540 1TB",
    price: "Approx. Rp 3,500,000",
    read: "10,000 MB/s",
    write: "10,000 MB/s",
    dram: "Includes DRAM",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhMrPScsiEkD6tz3qeDeTyahMpfdL_2uyWgUfq3pdSjQ&s",
    details: "firecuda540"
  },
  wdblue: {
    category: "HDD",
    name: "WD Blue 1TB HDD",
    price: "Check current retailer pricing",
    capacity: "1 TB",
    interface: "3.5-inch SATA, 6 Gb/s",
    rotation: "7,200 RPM",
    cache: "64 MB",
    transfer: "Up to 150 MB/s",
    image: "https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-blue-desktop-sata-hdd/gallery/wd-blue-pc-desktop-hard-drive-1tb.png.wdthumb.1280.1280.webp",
    details: "wd-blue"
  },
  p300: {
    category: "HDD",
    name: "Toshiba P300 2TB HDD",
    price: "Check current retailer pricing",
    capacity: "2 TB",
    interface: "3.5-inch SATA, 6 Gb/s",
    rotation: "Varies by capacity (up to 7,200 RPM)",
    cache: "Varies by model capacity",
    transfer: "Not listed by the manufacturer",
    image: "https://www.toshiba-storage.com/wp/wp-content/uploads/2019/09/P300_Highlihgt_Product_Image.png",
    details: "p300"
  },
  x300: {
    category: "HDD",
    name: "Toshiba X300 4TB HDD",
    price: "Check current retailer pricing",
    capacity: "4 TB",
    interface: "3.5-inch SATA, 6 Gb/s",
    rotation: "7,200 RPM",
    cache: "256 or 512 MB, capacity dependent",
    transfer: "Not listed by the manufacturer",
    image: "https://www.toshiba-storage.com/wp/wp-content/uploads/2019/09/X300_Highlihgt_Product_Image.png",
    details: "x300"
  }
};

const comparisonIds = Object.keys(comparisonDrives);
const comparisonColumns = document.querySelectorAll(".drive-column");
const startingDrives = new URLSearchParams(window.location.search).get("type") === "hdd"
  ? ["wdblue", "p300", "x300"]
  : ["sn850x", "sn8100x", "990pro"];
const comparisonGroups = [
  { label: "Solid-state drives (SSD)", ids: comparisonIds.filter(id => comparisonDrives[id].category !== "HDD") },
  { label: "Hard disk drives (HDD)", ids: comparisonIds.filter(id => comparisonDrives[id].category === "HDD") }
];

comparisonColumns.forEach((column, index) => {
  const select = column.querySelector(".drive-select");
  comparisonGroups.forEach((group) => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = group.label;
    group.ids.forEach((id) => {
      const option = document.createElement("option");
      option.value = id;
      option.textContent = comparisonDrives[id].name;
      optgroup.appendChild(option);
    });
    select.appendChild(optgroup);
  });
  select.value = startingDrives[index];
  select.addEventListener("change", () => updateComparisonColumn(column, select.value));
  updateComparisonColumn(column, select.value);
});

function updateComparisonColumn(column, driveId) {
  const drive = comparisonDrives[driveId];
  column.querySelector(".drive-image").src = drive.image;
  column.querySelector(".drive-image").alt = drive.name;
  column.querySelector(".drive-name").textContent = drive.name;
  column.querySelector(".drive-details").href = drive.category === "HDD"
    ? `hdd.html#${encodeURIComponent(drive.details)}`
    : `details.html?drive=${encodeURIComponent(drive.details)}`;
  const specs = drive.category === "HDD"
    ? [["Retail price", drive.price], ["Capacity", drive.capacity], ["Interface", drive.interface], ["Rotational speed", drive.rotation], ["Cache / buffer", drive.cache], ["Transfer rate", drive.transfer]]
    : [["Listed price", drive.price], ["Sequential read", drive.read], ["Sequential write", drive.write], ["DRAM", drive.dram]];
  const specList = column.querySelector(".spec-list");
  specList.replaceChildren(...specs.map(([label, value]) => {
    const row = document.createElement("div");
    const term = document.createElement("dt");
    const definition = document.createElement("dd");
    term.textContent = label;
    definition.textContent = value;
    row.append(term, definition);
    return row;
  }));
}
