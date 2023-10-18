// Create the document element
const documentElement = document.implementation.createHTMLDocument("My Document");

// Create the HTML element
const htmlElement = document.createElement("html");
htmlElement.setAttribute("lang", "en");

// Create the head element
const headElement = document.createElement("head");

// Create the meta elements
const metaCharset = document.createElement("meta");
metaCharset.setAttribute("charset", "utf-8");
const metaViewport = document.createElement("meta");
metaViewport.setAttribute("name", "viewport");
metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");

// Append meta elements to the head
headElement.appendChild(metaCharset);
headElement.appendChild(metaViewport);

// Create the title element
const titleElement = document.createElement("title");
titleElement.textContent = "Devanna";

// Create a link element for the favicon
const faviconLink = document.createElement("link");
faviconLink.setAttribute("rel", "shortcut icon");
faviconLink.setAttribute("type", "image/icon");
faviconLink.setAttribute("href", "assets/logo/favicon.png");

// Append the title and favicon link to the head
headElement.appendChild(titleElement);
headElement.appendChild(faviconLink);

// Create a link element for font-awesome.min.css
const fontAwesomeLink = document.createElement("link");
fontAwesomeLink.setAttribute("rel", "stylesheet");
fontAwesomeLink.setAttribute("href", "assets/css/font-awesome.min.css");

// Create a link element for flaticon.css
const flaticonLink = document.createElement("link");
flaticonLink.setAttribute("rel", "stylesheet");
flaticonLink.setAttribute("href", "assets/css/flaticon.css");

// Create a link element for animate.css
const animateLink = document.createElement("link");
animateLink.setAttribute("rel", "stylesheet");
animateLink.setAttribute("href", "assets/css/animate.css");

// Create a link element for owl.carousel.css
const owlCarouselLink = document.createElement("link");
owlCarouselLink.setAttribute("rel", "stylesheet");
owlCarouselLink.setAttribute("href", "assets/css/owl.carousel.min.css");

// Create a link element for owl.theme.default.min.css
const owlThemeLink = document.createElement("link");
owlThemeLink.setAttribute("rel", "stylesheet");
owlThemeLink.setAttribute("href", "assets/css/owl.theme.default.min.css");

// Create a link element for bootstrap.min.css
const bootstrapLink = document.createElement("link");
bootstrapLink.setAttribute("rel", "stylesheet");
bootstrapLink.setAttribute("href", "assets/css/bootstrap.min.css");

// Create a link element for bootsnav
const bootsnavLink = document.createElement("link");
bootsnavLink.setAttribute("rel", "stylesheet");
bootsnavLink.setAttribute("href", "assets/css/bootsnav.css");

// Create a link element for style.css
const styleLink = document.createElement("link");
styleLink.setAttribute("rel", "stylesheet");
styleLink.setAttribute("href", "assets/css/style.css");

// Create a link element for responsive.css
const responsiveLink = document.createElement("link");
responsiveLink.setAttribute("rel", "stylesheet");
responsiveLink.setAttribute("href", "assets/css/responsive.css");

// Append all the CSS links to the head
headElement.appendChild(fontAwesomeLink);
headElement.appendChild(flaticonLink);
headElement.appendChild(animateLink);
headElement.appendChild(owlCarouselLink);
headElement.appendChild(owlThemeLink);
headElement.appendChild(bootstrapLink);
headElement.appendChild(bootsnavLink);
headElement.appendChild(styleLink);
headElement.appendChild(responsiveLink);

// Create the body element
const bodyElement = document.createElement("body");

// Create the portfolio section
const portfolioSection = document.createElement("section");
portfolioSection.setAttribute("id", "portfolio");
portfolioSection.classList.add("portfolio");

// Create the portfolio details div
const portfolioDetailsDiv = document.createElement("div");
portfolioDetailsDiv.classList.add("portfolio-details");

// Create the section heading
const sectionHeading = document.createElement("div");
sectionHeading.classList.add("section-heading", "text-center");
const sectionHeadingTitle = document.createElement("h2");
sectionHeadingTitle.textContent = "portfolio";
sectionHeading.appendChild(sectionHeadingTitle);

// Create the container
const container = document.createElement("div");
container.classList.add("container");

// Create the portfolio content
const portfolioContent = document.createElement("div");
portfolioContent.classList.add("portfolio-content");

// Create the isotope div
const isotopeDiv = document.createElement("div");
isotopeDiv.classList.add("isotope");

// Create a row
const row = document.createElement("div");
row.classList.add("row");

// Create portfolio items
const portfolioItems = [
  {
    imageSrc: "assets/images/portfolio/p1.jpg",
    title: "Project membuat tampilan aplikasi untuk memesan kebutuhan hewan (e-pet)",
    link: "#",
  },
  {
    imageSrc: "assets/images/portfolio/p2.jpg",
    title: "Project membuat tampilan aplikasi untuk Calon Mahasiswa Baru",
    link: "#",
  },
  {
    imageSrc: "assets/images/portfolio/p3.jpg",
    title: "Project tampilan Website Google Drive",
    link: "#",
  },
  {
    imageSrc: "assets/images/portfolio/p4.jpg",
    title: "Sertifikat Peserta Lomba UI/UX babak final",
    link: "#",
  },
  {
    imageSrc: "assets/images/portfolio/p5.jpg",
    title: "Imajine place photo",
    link: "#",
  },
];

for (const itemData of portfolioItems) {
  const col = document.createElement("div");
  col.classList.add("col-sm-4");

  const item = document.createElement("div");
  item.classList.add("item");

  const itemImage = document.createElement("img");
  itemImage.setAttribute("src", itemData.imageSrc);
  itemImage.setAttribute("alt", "portfolio image");

  const isotopeOverlay = document.createElement("div");
  isotopeOverlay.classList.add("isotope-overlay");

  const link = document.createElement("a");
  link.setAttribute("href", itemData.link);
  link.textContent = itemData.title;

  isotopeOverlay.appendChild(link);
  item.appendChild(itemImage);
  item.appendChild(isotopeOverlay);
  col.appendChild(item);
  row.appendChild(col);
}

// Append the row to the isotope div
isotopeDiv.appendChild(row);

// Append the isotope div to the portfolio content
portfolioContent.appendChild(isotopeDiv);

// Append the portfolio content to the container
container.appendChild(portfolioContent);

// Append the container to the portfolio details div
portfolioDetailsDiv.appendChild(sectionHeading);
portfolioDetailsDiv.appendChild(container);

// Append the portfolio details div to the portfolio section
portfolioSection.appendChild(portfolioDetailsDiv);

// Append the portfolio section to the body
bodyElement.appendChild(portfolioSection);

// Append the body to the HTML element
htmlElement.appendChild(headElement);
htmlElement.appendChild(bodyElement);

// Append the HTML element to the document
documentElement.appendChild(htmlElement);

// Append the document to the current document
document.documentElement.replaceWith(documentElement.documentElement);
