// Create the main container for the page content
const container = document.createElement('div');
container.classList.add('no-js');

// Create the head element
const head = document.createElement('head');

// Create meta tags
const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'utf-8');
const metaXUaCompatible = document.createElement('meta');
metaXUaCompatible.setAttribute('http-equiv', 'X-UA-Compatible');
metaXUaCompatible.setAttribute('content', 'IE=edge');
const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1');

// Append meta tags to the head
head.appendChild(metaCharset);
head.appendChild(metaXUaCompatible);
head.appendChild(metaViewport);

// Create the title element
const title = document.createElement('title');
title.textContent = 'Devanna';

// Create a link element for the favicon
const faviconLink = document.createElement('link');
faviconLink.setAttribute('rel', 'shortcut icon');
faviconLink.setAttribute('type', 'image/icon');
faviconLink.setAttribute('href', 'assets/logo/favicon.png');

// Append the title and favicon link to the head
head.appendChild(title);
head.appendChild(faviconLink);

// Create a link element for font-awesome.min.css
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.setAttribute('rel', 'stylesheet');
fontAwesomeLink.setAttribute('href', 'assets/css/font-awesome.min.css');

// Create a link element for flaticon.css
const flaticonLink = document.createElement('link');
flaticonLink.setAttribute('rel', 'stylesheet');
flaticonLink.setAttribute('href', 'assets/css/flaticon.css');

// Create a link element for animate.css
const animateLink = document.createElement('link');
animateLink.setAttribute('rel', 'stylesheet');
animateLink.setAttribute('href', 'assets/css/animate.css');

// Create a link element for owl.carousel.css
const owlCarouselLink = document.createElement('link');
owlCarouselLink.setAttribute('rel', 'stylesheet');
owlCarouselLink.setAttribute('href', 'assets/css/owl.carousel.min.css');

// Create a link element for owl.theme.default.min.css
const owlThemeLink = document.createElement('link');
owlThemeLink.setAttribute('rel', 'stylesheet');
owlThemeLink.setAttribute('href', 'assets/css/owl.theme.default.min.css');

// Create a link element for bootstrap.min.css
const bootstrapLink = document.createElement('link');
bootstrapLink.setAttribute('rel', 'stylesheet');
bootstrapLink.setAttribute('href', 'assets/css/bootstrap.min.css');

// Create a link element for bootsnav
const bootsnavLink = document.createElement('link');
bootsnavLink.setAttribute('rel', 'stylesheet');
bootsnavLink.setAttribute('href', 'assets/css/bootsnav.css');

// Create a link element for style.css
const styleLink = document.createElement('link');
styleLink.setAttribute('rel', 'stylesheet');
styleLink.setAttribute('href', 'assets/css/style.css');

// Create a link element for responsive.css
const responsiveLink = document.createElement('link');
responsiveLink.setAttribute('rel', 'stylesheet');
responsiveLink.setAttribute('href', 'assets/css/responsive.css');

// Append all the CSS links to the head
head.appendChild(fontAwesomeLink);
head.appendChild(flaticonLink);
head.appendChild(animateLink);
head.appendChild(owlCarouselLink);
head.appendChild(owlThemeLink);
head.appendChild(bootstrapLink);
head.appendChild(bootsnavLink);
head.appendChild(styleLink);
head.appendChild(responsiveLink);

// Create the body element
const body = document.createElement('body');

// Create a conditional paragraph for outdated browsers
const browserUpgrade = document.createElement('p');
browserUpgrade.classList.add('browserupgrade');
browserUpgrade.textContent = 'You are using an outdated browser. Please upgrade your browser to improve your experience and security.';
const browserUpgradeLink = document.createElement('a');
browserUpgradeLink.setAttribute('href', 'https://browsehappy.com/');
browserUpgradeLink.textContent = 'upgrade your browser';
browserUpgrade.appendChild(browserUpgradeLink);

// Create the header element for the top area
const header = document.createElement('header');
header.classList.add('top-area');

// Create the header-area div
const headerArea = document.createElement('div');
headerArea.classList.add('header-area');

// Create the navigation element
const nav = document.createElement('nav');
nav.classList.add('navbar', 'navbar-default', 'bootsnav', 'navbar-fixed', 'dark', 'no-background');

// Create the container for navigation
const navContainer = document.createElement('div');
navContainer.classList.add('container');

// Create the navbar-header
const navbarHeader = document.createElement('div');
navbarHeader.classList.add('navbar-header');

// Create the button for toggling navigation
const navbarToggle = document.createElement('button');
navbarToggle.setAttribute('type', 'button');
navbarToggle.setAttribute('data-toggle', 'collapse');
navbarToggle.setAttribute('data-target', '#navbar-menu');
navbarToggle.innerHTML = '<i class="fa fa-bars"></i>';

// Create the anchor element for the logo
const logoAnchor = document.createElement('a');
logoAnchor.setAttribute('class', 'navbar-brand');
logoAnchor.setAttribute('href', 'index.html');
logoAnchor.textContent = 'Devanna Alandra';

// Create the collapsible navigation menu
const navbarCollapse = document.createElement('div');
navbarCollapse.classList.add('collapse', 'navbar-collapse', 'menu-ui-design');
navbarCollapse.setAttribute('id', 'navbar-menu');

// Create the navigation links
const navLinks = document.createElement('ul');
navLinks.classList.add('nav', 'navbar-nav', 'navbar-right');
navLinks.setAttribute('data-in', 'fadeInDown');
navLinks.setAttribute('data-out', 'fadeOutUp');

// Create list items for the navigation links
const listItems = [];
const links = [
  { text: 'home', href: 'home.html' },
  { text: 'education', href: 'education.html' },
  { text: 'experience', href: 'experience.html' },
  { text: 'portfolio', href: 'portfolio.html' },
  { text: 'contact', href: 'contact.html' },
  { text: 'about', href: 'about.html' },
];

for (const link of links) {
  const listItem = document.createElement('li');
  listItem.classList.add('smooth-menu');
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', link.href);
  linkElement.textContent = link.text;
  listItem.appendChild(linkElement);
  listItems.push(listItem);
}

// Append the list items to the navigation links
for (const listItem of listItems) {
  navLinks.appendChild(listItem);
}

// Build the navigation structure
navbarHeader.appendChild(navbarToggle);
navbarHeader.appendChild(logoAnchor);
navContainer.appendChild(navbarHeader);
navbarCollapse.appendChild(navLinks);
navContainer.appendChild(navCollapse);
nav.appendChild(navContainer);

// Build the header structure
headerArea.appendChild(nav);
header.appendChild(headerArea);

// Create a div for clearing floats
const clearfix = document.createElement('div');
clearfix.classList.add('clearfix');

// Create the welcome
