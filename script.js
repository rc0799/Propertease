const properties = [
  {
    id: 1,
    title: "Eternia",
    price: 7060000,
    location: "Eternia at Kalpataru Parkcity, Kolshet Road, Thane",
    bhk: 1,
    bathrooms: 1,
    sqft: 464,
    image: "images/Eternia.png",
    propertyType: "Apartment",
    description:
      "Stunning apartment with floor-to-ceiling windows, marble finishes, and state-of-the-art amenities. Located in the heart of Thane West with breathtaking city views.",
    fullDescription:
      "Eternia at Kalpataru Parkcity is a premium residential development located on the thriving Kolshet Road in Thane, offering contemporary 1,2 & 3 BHK homes designed for modern urban living. Set within the expansive and meticulously master-planned Kalpataru Parkcity township, the project features thoughtfully laid-out apartments with ample natural light and ventilation. The community enjoys excellent connectivity to key business hubs and daily conveniences, making it ideal for families and professionals alike. Residents benefit from a suite of world-class amenities including landscaped gardens, clubhouses, sports facilities, and green open spaces that promote a balanced lifestyle. With a focus on quality construction and sustainable design, Eternia combines comfort, convenience, and style in a serene neighbourhood setting. The project is under construction with scheduled possession in the coming years, presenting a compelling value proposition for homebuyers and investors in Thane.",
    agent: "Rohit Mehta",
    agentPhone: "9967525688",
    uploadedBy: null,
  },
  {
    id: 2,
    title: "Phoenix Residency, Vasai",
    price: 23000000,
    location: "Phoenix Residency, Golani Naka, Vasai East, Palghar",
    bhk: 3,
    bathrooms: 4,
    sqft: 1450,
    image: "images/Villa.jpg",
    propertyType: "Villa",
    description:
      "Premium coastal villa community with clubhouse, landscaped gardens and sea-breeze balconies. Ideal for families looking for spacious homes in Vasai’s fast-growing suburb.",
    fullDescription:
      "Located near Golani Naka in Vasai East, Phoenix Residency offers spacious 2 & 3 BHK villas and apartments in a secure, gated community. The project features landscaped internal roads, children’s play areas, temple space and a well-equipped clubhouse. Residents enjoy excellent connectivity to the Western Railway network, highways and nearby schools, colleges and markets. Thoughtfully planned layouts with cross ventilation, wide windows and private balconies ensure ample light and fresh air. With future infrastructure planned around Vasai–Virar, this project is ideal for both end-use and long-term investment in the Mumbai Metropolitan Region.",
    agent: "Ananya Iyer",
    agentPhone: "9892012345",
    uploadedBy: null,
  },
  {
    id: 3,
    title: "Raymond Realty Ten X Era",
    price: 20600000,
    location: "Pokharan Road, Thane West",
    bhk: 2,
    bathrooms: 2,
    sqft: 726,
    image: "images/Raymond.png",
    propertyType: "Apartment",
    description:
      "Modern high-rise apartments by a trusted Indian brand, with lifestyle amenities and excellent connectivity on Pokharan Road, Thane West.",
    fullDescription:
      "Ten X Era by Raymond Realty is a thoughtfully designed residential project on Pokharan Road in Thane West. The project offers efficiently planned 1, 2 & 3 BHK homes with smart space utilisation, premium fittings and large windows for natural light. Located close to Cadbury Junction, schools, hospitals, malls and business districts, it offers excellent liveability for working professionals and families. Residents have access to amenities like a swimming pool, indoor games, multi-purpose court, jogging track, landscaped gardens and dedicated work-from-home zones. With Raymond’s legacy of quality and Thane’s rapidly developing infrastructure, Ten X Era is a strong choice for end users as well as investors.",
    agent: "Karan Malhotra",
    agentPhone: "9820098765",
    uploadedBy: null,
  },
  {
    id: 4,
    title: "Lokhandwala Minerva",
    price: 9500000,
    location: "Lokhandwala Minerva, Adarsh Nagar, Mahalaxmi–Worli, Mumbai",
    bhk: 4,
    bathrooms: 4,
    sqft: 3600,
    image: "images/modern-luxury-penthouse-apartment.jpg",
    propertyType: "Penthouse",
    description:
      "Ultra-luxury sky residences with panoramic views of the Arabian Sea, Worli Sea Link and South Mumbai skyline.",
    fullDescription:
      "Lokhandwala Minerva is one of South Mumbai’s iconic luxury towers, offering expansive 3, 4 & 5 BHK residences with sweeping views of the city and the Arabian Sea. Located between Mahalaxmi and Worli, the project enjoys proximity to business hubs, high-street retail, fine dining and premium healthcare. Double-height lobbies, premium finishes, imported marble and thoughtfully planned layouts create an opulent yet practical living experience. Residents enjoy amenities like infinity pools, sky decks, banquet spaces, fitness centres and separate zones for children and senior citizens. With excellent connectivity via the Sea Link, Eastern Freeway and upcoming coastal road, Minerva is an address for those seeking landmark living in Mumbai.",
    agent: "Sneha Nair",
    agentPhone: "9819023456",
    uploadedBy: null,
  },
  {
    id: 5,
    title: "Rustomjee Azziano",
    price: 7500000,
    location: "Majiwada, Thane",
    bhk: 2,
    bathrooms: 2,
    sqft: 851,
    image: "images/industrial-urban-loft-modern-design.jpg",
    propertyType: "apartment",
    description:
      "Family-friendly gated community in the heart of Thane with schools, malls and healthcare within easy reach.",
    fullDescription:
      "Rustomjee Azziano is part of the larger Rustomjee Urbania township at Majiwada, Thane. The project offers well-ventilated 1, 2 & 3 BHK homes with efficient layouts, balconies and modern fittings. Residents benefit from township-level amenities such as multiple gardens, sports courts, swimming pools, clubhouses, jogging tracks and dedicated children’s zones. Located just off the Eastern Express Highway, it offers quick access to schools, colleges, hospitals, corporate parks and Viviana/R City malls. Azziano brings together community living, safety and convenience for growing urban families in Thane.",
    agent: "Arjun Deshpande",
    agentPhone: "9833011122",
    uploadedBy: null,
  },
  {
    id: 6,
    title: "Hiranandani Empress Hill",
    price: 2200000,
    location: "Hiranandani Gardens Powai, Mumbai",
    bhk: 4,
    bathrooms: 4,
    sqft: 2900,
    image: "images/luxury-desert-mansion-swimming-pool.jpg",
    propertyType: "villa",
    description:
      "Signature Hiranandani luxury residences overlooking Powai Lake and the green hills around Hiranandani Gardens.",
    fullDescription:
      "Hiranandani Empress Hill is a premium residential development within Hiranandani Gardens, Powai – one of Mumbai’s most sought-after integrated townships. The project offers large residences with lake and hill views, high ceilings and premium specifications. Residents enjoy access to township amenities including landscaped gardens, tree-lined avenues, schools, a hospital, retail high street, clubhouses and recreation zones. Excellent connectivity to Powai’s IT parks, the Eastern and Western Express Highways, JVLR and the upcoming Metro network makes it ideal for senior professionals and NRIs. Empress Hill combines the charm of a self-contained township with the convenience of central Mumbai connectivity.",
    agent: "Rohit Kulkarni",
    agentPhone: "9870012345",
    uploadedBy: null,
  },
]

const users = JSON.parse(localStorage.getItem("luxeHomeUsers")) || []
let currentUser = JSON.parse(localStorage.getItem("luxeHomeCurrentUser")) || null
const allProperties = [...properties]

let activeFilters = {
  bhk: null,
  bathrooms: null,
  priceMin: null,
  priceMax: null,
  types: [],
  amenities: [],
}

let anyClicked = {
  bhk: false,
  bath: false
}

function getFavorites() {
  if (!currentUser) return []
  const allFavorites = JSON.parse(localStorage.getItem("luxeHomeFavorites")) || {}
  return allFavorites[currentUser.id] || []
}

function renderFeaturedPropertiesHome() {
  const favorites = getFavorites()

  let cardsHTML = allProperties
    .slice(0, 3)
    .map(
      (property) => `
        <div class="property-card" onclick="showPropertyDetail(${property.id})">
          <img src="${property.image}" class="property-image">
          <button class="card-fav-btn ${favorites.includes(property.id) ? "active" : ""}"
            onclick="event.stopPropagation(); toggleFavorite(${property.id})">❤️</button>
          <div class="property-info">
            <div class="property-price">${formatINR(property.price)}</div>
            <div class="property-location">📍 ${property.location}</div>
            <div class="property-details">
              <span>🏠 ${property.bhk} BHK</span>
              <span>🚿 ${property.bathrooms}</span>
              <span>📐 ${property.sqft} sqft</span>
            </div>
            <button class="view-btn">View Details</button>
          </div>
        </div>
      `
    )
    .join("")

  // "View more" button below the 3 cards
  cardsHTML += `
  <div class="home-view-more-container grid-full">
    <button class="home-view-more-btn" onclick="navigateTo('properties')">
      View More
    </button>
  </div>
`


  homePropertiesGrid.innerHTML = cardsHTML
}

// Elements we use often (grab once)
const authNav = document.getElementById("authNav")
const authModal = document.getElementById("authModal")
const authModalClose = document.getElementById("authModalClose")
const authModalBody = document.getElementById("authModalBody")
const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")
const menuToggle = document.getElementById("menuToggle")
const navMenu = document.getElementById("navMenu")
const contactForm = document.getElementById("contactForm")
const homePage = document.getElementById("homePage")
const propertyDetailPage = document.getElementById("propertyDetailPage")
const dashboardPage = document.getElementById("dashboardPage")
const logoutModal = document.getElementById("logoutModal")
const propertyUploadForm = document.getElementById("propertyUploadForm")
const editProfileForm = document.getElementById("editProfileForm")
const homePropertiesGrid = document.getElementById("homePropertiesGrid")
const homeFilterPrice = document.getElementById("homeFilterPrice")
const homeFilterType = document.getElementById("homeFilterType")
const homeFilterBhk = document.getElementById("homeFilterBhk")
const minPriceInput = document.getElementById("minPriceInput")
const maxPriceInput = document.getElementById("maxPriceInput")
let propertiesSearchInput = document.getElementById("propertiesSearchInput")
const propertiesSearchBtn = document.getElementById("propertiesSearchBtn")
const clearFiltersBtn = document.getElementById("clearFiltersBtn")
const propertiesPage = document.getElementById("propertiesPage")
const emiPage = document.getElementById("emiPage")

function formatINR(price) {
  return "₹ " + price.toLocaleString("en-IN")
}

// money with decimals 
function formatINRValue(value, decimals) {
  let num = parseFloat(value)
  if (isNaN(num)) {
    num = 0
  }
  if (typeof decimals === "number") {
    return (
      "₹ " +
      num.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
    )
  }
  return "₹ " + num.toLocaleString("en-IN")
}

// "apartment" becomes "Apartment" for showing on screen
function prettyPropertyType(str) {
  if (!str) {
    return ""
  }
  let s = str.toLowerCase()
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function hideEveryPage() {
  document.getElementById("homePage").classList.add("hidden")
  document.getElementById("dashboardPage").classList.add("hidden")
  document.getElementById("propertiesPage").classList.add("hidden")
  document.getElementById("propertyDetailPage").classList.add("hidden")
  document.getElementById("emiPage").classList.add("hidden")
}

// start when page loads
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()

  if (editProfileForm) {
    editProfileForm.addEventListener("submit", handleEditProfile)
  }

  if (minPriceInput) minPriceInput.addEventListener("change", filterByPrice)
  if (maxPriceInput) maxPriceInput.addEventListener("change", filterByPrice)
  if (propertiesSearchBtn) {
    propertiesSearchBtn.addEventListener("click", applyFilters)
  }
  if (propertiesSearchInput) {
    propertiesSearchInput.addEventListener("input", applyFilters)
  }
// search bar on home
  if (searchBtn) {
    searchBtn.addEventListener("click", handleHomeSearch)
  }
  if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault()
        handleHomeSearch()
      }
    })
  }
})

function initializeApp() {
  updateAuthNav()
  renderFeaturedPropertiesHome()
  handlePageNavigation()
}


function updateAuthNav() {
  if (currentUser) {
    authNav.innerHTML = `
      <div class="user-menu">
        <span>${currentUser.name} (${currentUser.userType})</span>
        <button onclick="openLogoutConfirm()" class="logout-btn">Logout</button>
        <button onclick="navigateToDashboard()" class="dashboard-btn">Dashboard</button>
      </div>
    `
  } else {
    authNav.innerHTML = `<button onclick="openAuthModal()" class="auth-btn">Login / Register</button>`
  }
}

function openLogoutConfirm() {
  logoutModal.classList.add("active")
}

function confirmLogout() {
  currentUser = null
  localStorage.removeItem("luxeHomeCurrentUser")
  logoutModal.classList.remove("active")
  updateAuthNav()
  navigateTo("home")
}

function openAuthModal() {
  authModalBody.innerHTML = `
    <div class="auth-form-container">
      <div class="auth-tabs">
        <button class="auth-tab active" onclick="switchAuthTab('login')">Login</button>
        <button class="auth-tab" onclick="switchAuthTab('register')">Register</button>
      </div>

      <div id="errorMessage" class="error-message"></div>

      <!-- Login -->
      <form id="loginForm" class="auth-form active" onsubmit="handleLogin(event)">
        <div class="form-group">
          <label for="loginEmail">Email:</label>
          <input type="email" id="loginEmail" required>
        </div>
        <div class="form-group">
          <label for="loginPassword">Password:</label>
          <input type="password" id="loginPassword" required>
        </div>
        <button type="submit" class="submit-btn">Login</button>
      </form>

      <!-- Register -->
      <form id="registerForm" class="auth-form" onsubmit="handleRegister(event)">
        <div class="form-group">
          <label for="registerName">Full Name:</label>
          <input type="text" id="registerName" required>
        </div>
        <div class="form-group">
          <label for="registerEmail">Email:</label>
          <input type="email" id="registerEmail" required>
        </div>
        <div class="form-group">
          <label for="registerPassword">Password:</label>
          <input type="password" id="registerPassword" required>
        </div>
        <div class="form-group">
          <label for="userType">Register as:</label>
          <select id="userType" required>
            <option value="">Select User Type</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
            <option value="agent">Agent</option>
          </select>
        </div>

        <!-- Show only if user picked seller -->
        <div id="sellerFields" class="hidden">
          <div class="form-group">
            <label for="companyName">Company Name (optional):</label>
            <input type="text" id="companyName">
          </div>
        </div>

        <!-- Show only if user picked agent -->
        <div id="agentFields" class="hidden">
          <div class="form-group">
            <label for="licenseNumber">License Number:</label>
            <input type="text" id="licenseNumber">
          </div>
          <div class="form-group">
            <label for="brokerageName">Brokerage Name:</label>
            <input type="text" id="brokerageName">
          </div>
        </div>

        <button type="submit" class="submit-btn">Register</button>
      </form>
    </div>
  `

  setTimeout(() => {
    const userTypeSelect = document.getElementById("userType")
    userTypeSelect.addEventListener("change", handleUserTypeChange)
  }, 0)

  authModal.classList.add("active")
}

function switchAuthTab(tab) {
  document.querySelectorAll(".auth-tab").forEach((btn) => btn.classList.remove("active"))
  document.querySelectorAll(".auth-form").forEach((form) => form.classList.remove("active"))

  event.target.classList.add("active")
  document.getElementById(tab + "Form").classList.add("active")

  const errorMsg = document.getElementById("errorMessage")
  if (errorMsg) errorMsg.classList.remove("show")
}

function handleUserTypeChange() {
  const userType = document.getElementById("userType").value
  const sellerFields = document.getElementById("sellerFields")
  const agentFields = document.getElementById("agentFields")

  if (userType === "seller") {
    sellerFields.classList.remove("hidden")
  } else {
    sellerFields.classList.add("hidden")
  }

  if (userType === "agent") {
    agentFields.classList.remove("hidden")
  } else {
    agentFields.classList.add("hidden")
  }
}

function handleLogin(e) {
  e.preventDefault()
  const email = document.getElementById("loginEmail").value
  const password = document.getElementById("loginPassword").value

  let foundUser = null
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      foundUser = users[i]
      break
    }
  }

  if (foundUser === null) {
    showError("Invalid email or password")
    return
  }

  currentUser = foundUser
  localStorage.setItem("luxeHomeCurrentUser", JSON.stringify(foundUser))
  authModal.classList.remove("active")
  updateAuthNav()
}

function handleRegister(e) {
  e.preventDefault()
  const name = document.getElementById("registerName").value
  const email = document.getElementById("registerEmail").value
  const password = document.getElementById("registerPassword").value
  const userType = document.getElementById("userType").value

  if (!name || !email || !password || !userType) {
    showError("Please fill in all required fields")
    return
  }

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      showError("Email already registered")
      return
    }
  }

  const newUser = {
    id: Date.now(),
    name: name,
    email: email,
    password: password,
    userType: userType,
  }

  if (userType === "seller") {
    newUser.companyName = document.getElementById("companyName").value
  } else if (userType === "agent") {
    newUser.licenseNumber = document.getElementById("licenseNumber").value
    newUser.brokerageName = document.getElementById("brokerageName").value
  }

  users.push(newUser)
  localStorage.setItem("luxeHomeUsers", JSON.stringify(users))

  currentUser = newUser
  localStorage.setItem("luxeHomeCurrentUser", JSON.stringify(newUser))
  authModal.classList.remove("active")
  updateAuthNav()
}

function showError(message) {
  const errorMsg = document.getElementById("errorMessage")
  if (errorMsg) {
    errorMsg.textContent = message
    errorMsg.classList.add("show")
  }
}

function handlePageNavigation() {
  const params = new URLSearchParams(window.location.search)
  const propertyId = params.get("property")
  const page = params.get("page")

  if (propertyId) {
    showPropertyDetail(parseInt(propertyId, 10))
  } else if (page === "properties") {
    showPropertiesPage()
  } else {
    showHomePage()
  }
}

function navigateTo(page) {
  if (page === "dashboard" && currentUser === null) {
    openAuthModal()
    return
  }

  hideEveryPage()

  if (page === "home") {
    document.getElementById("homePage").classList.remove("hidden")
  } else if (page === "properties") {
    document.getElementById("propertiesPage").classList.remove("hidden")
    initializeFiltersPage()
    setupPropertiesSearch()
    applyFilters()
  } else if (page === "dashboard") {
    document.getElementById("dashboardPage").classList.remove("hidden")
    displayProfile()
    loadUserListings()
    loadUserFavorites()
  } else if (page === "emi") {
    document.getElementById("emiPage").classList.remove("hidden")
    initializeEMICalculator()
  }

  window.scrollTo(0, 0)
}

function showHomePage() {
  navigateTo("home")
}

function showPropertiesPage() {
  navigateTo("properties")
}

function renderPropertiesPage(properties = allProperties) {
  const favorites = getFavorites()
  const propertiesGridPage = document.getElementById("propertiesGridPage")

  if (!propertiesGridPage) return

   // Nothing matched the filters
  if (!properties || properties.length === 0) {
    propertiesGridPage.innerHTML =
      "<p style='grid-column: 1/-1; text-align: center; padding: 2rem;'>No properties found matching your criteria.</p>"
    return
  }

  propertiesGridPage.innerHTML = properties
    .map(
      (property) => `
        <div class="property-card" onclick="showPropertyDetail(${property.id})">
            <img src="${property.image}" alt="${property.title}" class="property-image">
            <button class="card-fav-btn ${favorites.includes(property.id) ? "active" : ""}" onclick="event.stopPropagation(); toggleFavorite(${property.id})" title="Add to favorites">
              ❤️
            </button>
            <div class="property-info">
                <div class="property-price">${formatINR(property.price)}</div>
                <div class="property-location">📍 ${property.location}</div>
                <div class="property-details">
                    <span class="property-detail">🏠 ${property.bhk} BHK</span>
                    <span class="property-detail">🚿 ${property.bathrooms}</span>
                    <span class="property-detail">📐 ${property.sqft.toLocaleString()} sqft</span>
                </div>
                <button class="view-btn">View Details</button>
            </div>
        </div>
    `,
    )
    .join("")
}

function showPropertyDetail(propertyId) {
  let property = null
  for (let i = 0; i < allProperties.length; i++) {
    if (allProperties[i].id === propertyId) {
      property = allProperties[i]
      break
    }
  }

  if (property === null) {
    showHomePage()
    return
  }

  hideEveryPage()
  document.getElementById("propertyDetailPage").classList.remove("hidden")

  const detailContent = document.getElementById("propertyDetailContent")
  const isFavorite = getFavorites().includes(propertyId)

  detailContent.innerHTML = `
    <div class="property-detail-container">
      <img src="${property.image}" alt="${property.title}" class="property-detail-image">
      <div class="property-detail-info">
        <div class="property-detail-header">
          <div class="detail-header-top">
            <h1 class="property-detail-title">${property.title}</h1>
            <button class="fav-btn ${isFavorite ? "active" : ""}" onclick="toggleFavorite(${property.id})" title="Add to favorites">
              ❤️
            </button>
          </div>
          <p class="property-detail-location">📍 ${property.location}</p>
          <p class="property-type">Type: ${prettyPropertyType(property.propertyType)}</p>
          <p class="property-detail-price">${formatINR(property.price)}</p>
        </div>

        <div class="property-detail-specs">
          <div class="spec-item">
            <span class="spec-label">BHK</span>
            <span class="spec-value">${property.bhk}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Bathrooms</span>
            <span class="spec-value">${property.bathrooms}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Square Feet</span>
            <span class="spec-value">${property.sqft.toLocaleString()}</span>
          </div>
        </div>

        <div class="property-detail-description">
          <h3>About This Property</h3>
          <p>${property.fullDescription}</p>
          <h3>Listing Agent</h3>
          <p><strong>${property.agent}</strong><br>${property.agentPhone}</p>
        </div>

        <div class="cta-buttons">
          <button class="cta-btn primary" onclick="handlePropertyInquiry(${property.id})">Request Information</button>
          <button class="cta-btn secondary" onclick="handleScheduleTour(${property.id})">Schedule Tour</button>
        </div>
      </div>
    </div>
  `

  window.history.pushState({}, "", `index.html?property=${propertyId}`)
  window.scrollTo(0, 0)
}

function handlePropertyInquiry(propertyId) {
  if (!currentUser) {
    alert("Please login to request information")
    openAuthModal()
    return
  }
  alert(`Inquiry sent for property ${propertyId}. The agent will contact you soon.`)
}

function handleScheduleTour(propertyId) {
  if (!currentUser) {
    alert("Please login to schedule a tour")
    openAuthModal()
    return
  }
  alert(`Tour scheduled for property ${propertyId}. Check your email for confirmation.`)
}

function toggleFavorite(propertyId) {
  if (!currentUser) {
    alert("Please login to add favorites")
    openAuthModal()
    return
  }

  const allFavorites = JSON.parse(localStorage.getItem("luxeHomeFavorites")) || {}
  if (!allFavorites[currentUser.id]) {
    allFavorites[currentUser.id] = []
  }

  const index = allFavorites[currentUser.id].indexOf(propertyId)
  if (index > -1) {
    allFavorites[currentUser.id].splice(index, 1)
  } else {
    allFavorites[currentUser.id].push(propertyId)
  }

  localStorage.setItem("luxeHomeFavorites", JSON.stringify(allFavorites))

  // Redraw lists so heart icons match saved favourites
  renderFeaturedPropertiesHome()
  applyFilters()
  renderMyListings()
  renderFavorites()

  const detailPage = document.getElementById("propertyDetailPage")
  if (!detailPage.classList.contains("hidden")) {
    const detailHeart = document.querySelector("#propertyDetailPage .fav-btn")
    if (detailHeart) {
      let stillFav = false
      for (let k = 0; k < allFavorites[currentUser.id].length; k++) {
        if (allFavorites[currentUser.id][k] === propertyId) {
          stillFav = true
          break
        }
      }
      if (stillFav) {
        detailHeart.classList.add("active")
      } else {
        detailHeart.classList.remove("active")
      }
    }
  }
}

function filterByBhk(value) {
  if (value === "any") {
    if (anyClicked.bhk) {
      // Click "Any" again to turn it off
      anyClicked.bhk = false
      activeFilters.bhk = null
    } else {
      // "Any" is selected
      anyClicked.bhk = true
      activeFilters.bhk = null
    }
  } else {
    const num = parseInt(value, 10)
    activeFilters.bhk = activeFilters.bhk === num ? null : num
    anyClicked.bhk = false
  }

  document
    .querySelectorAll(".filter-btn[data-filter='bhk']")
    .forEach((btn) => {
      btn.classList.remove("active")

      const btnValue = btn.dataset.value

      if (btnValue === "any" && anyClicked.bhk) {
        btn.classList.add("active")
      }

      if (
        btnValue !== "any" &&
        activeFilters.bhk !== null &&
        parseInt(btnValue, 10) === activeFilters.bhk
      ) {
        btn.classList.add("active")
      }
    })

  applyFilters()
}

function filterByBath(value) {
  if (value === "any") {
    if (anyClicked.bath) {
      anyClicked.bath = false
      activeFilters.bathrooms = null
    } else {
      anyClicked.bath = true
      activeFilters.bathrooms = null
    }
  } else {
    const num = parseInt(value, 10)
    activeFilters.bathrooms = activeFilters.bathrooms === num ? null : num
    anyClicked.bath = false
  }

  document
    .querySelectorAll(".filter-btn[data-filter='bath']")
    .forEach((btn) => {
      btn.classList.remove("active")

      const btnValue = btn.dataset.value

      if (btnValue === "any" && anyClicked.bath) {
        btn.classList.add("active")
      }

      if (
        btnValue !== "any" &&
        activeFilters.bathrooms !== null &&
        parseInt(btnValue, 10) === activeFilters.bathrooms
      ) {
        btn.classList.add("active")
      }
    })

  applyFilters()
}

function applyFilters() {
  let filtered = []

  for (let i = 0; i < allProperties.length; i++) {
    let p = allProperties[i]
    let keep = true

    if (activeFilters.bhk !== null && p.bhk < activeFilters.bhk) {
      keep = false
    }
    if (keep && activeFilters.bathrooms !== null && p.bathrooms < activeFilters.bathrooms) {
      keep = false
    }

    if (keep && activeFilters.types.length > 0) {
      let pType = (p.propertyType || "").toLowerCase()
      let matchedType = false
      for (let t = 0; t < activeFilters.types.length; t++) {
        if (activeFilters.types[t].toLowerCase() === pType) {
          matchedType = true
          break
        }
      }
      if (!matchedType) {
        keep = false
      }
    }

    if (keep && activeFilters.priceMin !== null && p.price < activeFilters.priceMin) {
      keep = false
    }
    if (keep && activeFilters.priceMax !== null && p.price > activeFilters.priceMax) {
      keep = false
    }

    if (keep && propertiesSearchInput) {
      let q = propertiesSearchInput.value.toLowerCase().trim()
      if (q.length > 0) {
        let inLoc = p.location.toLowerCase().indexOf(q) >= 0
        let inTitle = p.title.toLowerCase().indexOf(q) >= 0
        if (!inLoc && !inTitle) {
          keep = false
        }
      }
    }

    if (keep) {
      filtered.push(p)
    }
  }

  renderPropertiesPage(filtered)
}

function clearAllFilters() {
  activeFilters.bhk = null
  activeFilters.bathrooms = null
  activeFilters.priceMin = null
  activeFilters.priceMax = null
  activeFilters.types.length = 0
  activeFilters.amenities.length = 0

  anyClicked.bhk = false
  anyClicked.bath = false


  const minPriceInput = document.getElementById("minPriceInput")
  const maxPriceInput = document.getElementById("maxPriceInput")
  if (minPriceInput) minPriceInput.value = ""
  if (maxPriceInput) maxPriceInput.value = ""

  document.querySelectorAll('input[name="propertyType"]').forEach((cb) => {
    cb.checked = false
  })

  document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.classList.remove("active")
})

  document.querySelectorAll('input[name="amenities"]').forEach((cb) => {
    cb.checked = false
  })

  document.querySelectorAll('input[name="listingStatus"]').forEach((cb) => {
    cb.checked = false
  })

  const propertiesSearchInput = document.getElementById("propertiesSearchInput")
  if (propertiesSearchInput) propertiesSearchInput.value = ""

  applyFilters()
}

function handleHomeSearch() {
  if (!searchInput) return

  const term = searchInput.value.trim()

  navigateTo("properties")
  propertiesSearchInput = document.getElementById("propertiesSearchInput")

  if (propertiesSearchInput) {
    propertiesSearchInput.value = term || ""
  }

  applyFilters()
}

function applyHomeFiltersAndSearch() {
  // Clear old filter choices first
  activeFilters.bhk = null
  activeFilters.bathrooms = null
  activeFilters.priceMin = null
  activeFilters.priceMax = null
  activeFilters.types = []

  anyClicked.bhk = false
  anyClicked.bath = false

  // Home page price dropdown sets min and max on the search page
  if (homeFilterPrice && homeFilterPrice.value) {
    const priceVal = homeFilterPrice.value
    let min = null
    let max = null

    if (priceVal.includes("-")) {
      const dashIdx = priceVal.indexOf("-")
      const minPart = priceVal.slice(0, dashIdx).trim()
      const maxPart = priceVal.slice(dashIdx + 1).trim()
      min = minPart ? parseInt(minPart, 10) : null
      max = maxPart ? parseInt(maxPart, 10) : null
    } else {
      min = parseInt(priceVal, 10)
    }

    if (min !== null && !isNaN(min)) {
      activeFilters.priceMin = min
    } else {
      activeFilters.priceMin = null
    }
    if (max !== null && !isNaN(max)) {
      activeFilters.priceMax = max
    } else {
      activeFilters.priceMax = null
    }

    if (minPriceInput) {
      minPriceInput.value = activeFilters.priceMin === null ? "" : activeFilters.priceMin
    }
    if (maxPriceInput) {
      maxPriceInput.value = activeFilters.priceMax === null ? "" : activeFilters.priceMax
    }
  } else {
    if (minPriceInput) minPriceInput.value = ""
    if (maxPriceInput) maxPriceInput.value = ""
  }

  if (homeFilterType) {
    const typeVal = homeFilterType.value
    activeFilters.types = typeVal ? [typeVal] : []

    document
      .querySelectorAll('input[name="propertyType"]')
      .forEach((cb) => {
        cb.checked = activeFilters.types.includes(cb.value)
      })
  }

  if (homeFilterBhk) {
    const bhkVal = homeFilterBhk.value
    if (bhkVal) {
      activeFilters.bhk = parseInt(bhkVal, 10)
    } else {
      activeFilters.bhk = null
    }

    document
      .querySelectorAll(".filter-btn[data-filter='bhk']")
      .forEach((btn) => {
        btn.classList.remove("active")
        if (
          bhkVal &&
          btn.dataset.value !== "any" &&
          parseInt(btn.dataset.value, 10) === activeFilters.bhk
        ) {
          btn.classList.add("active")
        }
      })
  }

  const propsSearchInput = document.getElementById("propertiesSearchInput")
  if (propsSearchInput) propsSearchInput.value = ""

  navigateTo("properties")
}

function filterByPrice() {
  const minEl = document.getElementById("minPriceInput")
  const maxEl = document.getElementById("maxPriceInput")

  activeFilters.priceMin = null
  activeFilters.priceMax = null

  if (minEl && minEl.value !== "") {
    let n = parseInt(minEl.value, 10)
    if (!isNaN(n)) {
      activeFilters.priceMin = n
    }
  }
  if (maxEl && maxEl.value !== "") {
    let n = parseInt(maxEl.value, 10)
    if (!isNaN(n)) {
      activeFilters.priceMax = n
    }
  }

  applyFilters()
}

function filterByAmenities() {
  // Amenities not stored on each house yet; just refresh the list
  applyFilters()
}

function filterByListingStatus() {
  applyFilters()
}

function renderMyListings() {
  let myListings = []
  for (let i = 0; i < allProperties.length; i++) {
    if (allProperties[i].uploadedBy === currentUser.id) {
      myListings.push(allProperties[i])
    }
  }
  const grid = document.getElementById("myListingsGrid")
  if (myListings.length === 0) {
    grid.innerHTML =
      "<p style='grid-column: 1/-1; text-align: center; padding: 2rem;'>No properties uploaded yet. Upload your first property!</p>"
    return
  }
  const favorites = getFavorites()
  grid.innerHTML = myListings
    .map(
      (property) => `
        <div class="property-card" onclick="showPropertyDetail(${property.id})">
            <img src="${property.image}" alt="${property.title}" class="property-image">
            <button class="card-fav-btn ${favorites.includes(property.id) ? "active" : ""}" onclick="event.stopPropagation(); toggleFavorite(${property.id})" title="Toggle favorite">
              ❤️
            </button>
            <div class="property-info">
                <div class="property-price">${formatINR(property.price)}</div>
                <div class="property-location">📍 ${property.location}</div>
                <div class="property-details">
                    <span class="property-detail">🏠 ${property.bhk} BHK</span>
                    <span class="property-detail">🚿 ${property.bathrooms}</span>
                </div>
                <button class="view-btn">View Details</button>
            </div>
        </div>
    `,
    )
    .join("")
}

function renderFavorites() {
  const favorites = getFavorites()
  let favProperties = []
  for (let i = 0; i < allProperties.length; i++) {
    let pid = allProperties[i].id
    if (favorites.indexOf(pid) >= 0) {
      favProperties.push(allProperties[i])
    }
  }
  const grid = document.getElementById("favoritesGrid")
  if (favProperties.length === 0) {
    grid.innerHTML =
      "<p style='grid-column: 1/-1; text-align: center; padding: 2rem;'>No favorite properties yet. Start adding your favorites!</p>"
    return
  }
  grid.innerHTML = favProperties
    .map(
      (property) => `
        <div class="property-card" onclick="showPropertyDetail(${property.id})">
            <img src="${property.image}" alt="${property.title}" class="property-image">
            <button class="card-fav-btn active" onclick="event.stopPropagation(); toggleFavorite(${property.id})" title="Remove from favorites">
              ❤️
            </button>
            <div class="property-info">
                <div class="property-price">${formatINR(property.price)}</div>
                <div class="property-location">📍 ${property.location}</div>
                <div class="property-details">
                    <span class="property-detail">🏠 ${property.bhk} BHK</span>
                    <span class="property-detail">🚿 ${property.bathrooms}</span>
                </div>
                <button class="view-btn">View Details</button>
            </div>
        </div>
    `,
    )
    .join("")
}

if (propertyUploadForm) {
  propertyUploadForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const title = document.getElementById("propTitle").value
    const location = document.getElementById("propLocation").value
    const price = parseInt(document.getElementById("propPrice").value, 10)
    const propertyType = document.getElementById("propType").value
    const bhk = parseInt(document.getElementById("propBhk").value, 10)
    const bathrooms = parseInt(document.getElementById("propBathrooms").value, 10)
    const sqft = parseInt(document.getElementById("propSqft").value, 10)
    const description = document.getElementById("propDescription").value
    const image = document.getElementById("propImage").value

    const newProperty = {
      id: Date.now(),
      title: title,
      price: price,
      location: location,
      bhk: bhk,
      bathrooms: bathrooms,
      sqft: sqft,
      image: image,
      propertyType: propertyType,
      description: description,
      fullDescription: description,
      agent: currentUser.name,
      agentPhone: "Contact via dashboard",
      uploadedBy: currentUser.id,
    }

    allProperties.push(newProperty)
    propertyUploadForm.reset()
    alert("Property uploaded successfully!")
    renderMyListings()
  })
}

function toggleEditProfile() {
  const displayForm = document.querySelector(".profile-info-display")
  const editForm = document.getElementById("editProfileForm")

  displayForm.classList.toggle("hidden")
  editForm.classList.toggle("hidden")

  if (!editForm.classList.contains("hidden")) {
    document.getElementById("editName").value = currentUser.name
    document.getElementById("editEmail").value = currentUser.email

    const editSellerField = document.getElementById("editSellerField")
    const editAgentLicenseField = document.getElementById("editAgentLicenseField")
    const editAgentBrokerageField = document.getElementById("editAgentBrokerageField")

    if (currentUser.userType === "seller") {
      editSellerField.classList.remove("hidden")
      document.getElementById("editCompany").value = currentUser.companyName || ""
    } else {
      editSellerField.classList.add("hidden")
    }

    if (currentUser.userType === "agent") {
      editAgentLicenseField.classList.remove("hidden")
      editAgentBrokerageField.classList.remove("hidden")
      document.getElementById("editLicense").value = currentUser.licenseNumber || ""
      document.getElementById("editBrokerage").value = currentUser.brokerageName || ""
    } else {
      editAgentLicenseField.classList.add("hidden")
      editAgentBrokerageField.classList.add("hidden")
    }
  }
}

function handleEditProfile(e) {
  e.preventDefault()

  const newName = document.getElementById("editName").value
  const newEmail = document.getElementById("editEmail").value

  if (!newName || !newEmail) {
    alert("Please fill in all required fields")
    return
  }

  currentUser.name = newName
  currentUser.email = newEmail

  if (currentUser.userType === "seller") {
    currentUser.companyName = document.getElementById("editCompany").value
  } else if (currentUser.userType === "agent") {
    currentUser.licenseNumber = document.getElementById("editLicense").value
    currentUser.brokerageName = document.getElementById("editBrokerage").value
  }

  let userIndex = -1
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === currentUser.id) {
      userIndex = i
      break
    }
  }
  if (userIndex >= 0) {
    users[userIndex] = currentUser
    localStorage.setItem("luxeHomeUsers", JSON.stringify(users))
    localStorage.setItem("luxeHomeCurrentUser", JSON.stringify(currentUser))
  }

  displayProfile()
  toggleEditProfile()
  alert("Profile updated successfully!")
}

function displayProfile() {
  if (!currentUser) return

  document.getElementById("profileName").textContent = currentUser.name
  document.getElementById("profileEmail").textContent = currentUser.email
  document.getElementById("profileType").textContent = prettyPropertyType(currentUser.userType)

  if (currentUser.userType === "seller") {
    document.getElementById("sellerProfileField").classList.remove("hidden")
    document.getElementById("profileCompany").textContent = currentUser.companyName || "Not provided"
  } else {
    document.getElementById("sellerProfileField").classList.add("hidden")
  }

  if (currentUser.userType === "agent") {
    document.getElementById("agentProfileField").classList.remove("hidden")
    document.getElementById("agentBrokerageField").classList.remove("hidden")
    document.getElementById("profileLicense").textContent = currentUser.licenseNumber || "Not provided"
    document.getElementById("profileBrokerage").textContent = currentUser.brokerageName || "Not provided"
  } else {
    document.getElementById("agentProfileField").classList.add("hidden")
    document.getElementById("agentBrokerageField").classList.add("hidden")
  }
}

function setupPropertiesSearch() {
  propertiesSearchInput = document.getElementById("propertiesSearchInput")
  if (propertiesSearchInput) {
    propertiesSearchInput.addEventListener("input", applyFilters)
    propertiesSearchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        applyFilters()
      }
    })
  }
}

function loadUserListings() {
  renderMyListings()
}

function loadUserFavorites() {
  renderFavorites()
}

function initializeEMICalculator() {
  const loanAmountInput = document.getElementById("loanAmount")
  const loanAmountSlider = document.getElementById("loanAmountSlider")
  const loanAmountDisplay = document.getElementById("loanAmountDisplay")
  const interestRateInput = document.getElementById("interestRate")
  const interestRateSlider = document.getElementById("interestRateSlider")
  const interestRateDisplay = document.getElementById("interestRateDisplay")
  const loanTenureInput = document.getElementById("loanTenure")
  const loanTenureSlider = document.getElementById("loanTenureSlider")
  const loanTenureDisplay = document.getElementById("loanTenureDisplay")

  if (loanAmountInput && loanAmountDisplay) {
    loanAmountDisplay.textContent = formatINRValue(parseInt(loanAmountInput.value, 10))
  }

  // Loan amount: slider and text box must stay the same (3 groups like this)
  if (loanAmountInput && loanAmountSlider) {
    loanAmountInput.addEventListener("input", () => {
      loanAmountSlider.value = loanAmountInput.value
      loanAmountDisplay.textContent = formatINRValue(parseInt(loanAmountInput.value, 10))
    })

    loanAmountSlider.addEventListener("input", () => {
      loanAmountInput.value = loanAmountSlider.value
      loanAmountDisplay.textContent = formatINRValue(parseInt(loanAmountSlider.value, 10))
    })
  }

  if (interestRateInput && interestRateSlider) {
    interestRateInput.addEventListener("input", () => {
      interestRateSlider.value = interestRateInput.value
      interestRateDisplay.textContent = parseFloat(interestRateInput.value).toFixed(1) + "%"
    })

    interestRateSlider.addEventListener("input", () => {
      interestRateInput.value = interestRateSlider.value
      interestRateDisplay.textContent = parseFloat(interestRateSlider.value).toFixed(1) + "%"
    })
  }

  if (loanTenureInput && loanTenureSlider) {
    loanTenureInput.addEventListener("input", () => {
      loanTenureSlider.value = loanTenureInput.value
      const months = parseInt(loanTenureInput.value, 10)
      const years = (months / 12).toFixed(1)
      loanTenureDisplay.textContent = months + " months (" + years + " years)"
    })

    loanTenureSlider.addEventListener("input", () => {
      loanTenureInput.value = loanTenureSlider.value
      const months = parseInt(loanTenureSlider.value, 10)
      const years = (months / 12).toFixed(1)
      loanTenureDisplay.textContent = months + " months (" + years + " years)"
    })
  }

  calculateEMI()
}

function calculateEMI() {
  let loanAmount = parseFloat(document.getElementById("loanAmount").value)
  let interestRate = parseFloat(document.getElementById("interestRate").value)
  let loanTenure = parseInt(document.getElementById("loanTenure").value, 10)
  if (isNaN(loanAmount)) loanAmount = 0
  if (isNaN(interestRate)) interestRate = 0
  if (isNaN(loanTenure)) loanTenure = 0

  if (loanAmount <= 0 || loanTenure <= 0) {
    document.getElementById("monthlyEMI").textContent = "-"
    document.getElementById("totalAmount").textContent = "-"
    document.getElementById("totalInterest").textContent = "-"
    return
  }

  // Yearly % to monthly rate: divide by 12, then by 100
  const monthlyRate = interestRate / 12 / 100
  let monthlyEMI

  if (monthlyRate === 0) {
    monthlyEMI = loanAmount / loanTenure
  } else {
    monthlyEMI =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure)) / (Math.pow(1 + monthlyRate, loanTenure) - 1)
  }

  const totalAmount = monthlyEMI * loanTenure
  const totalInterest = totalAmount - loanAmount

  document.getElementById("monthlyEMI").textContent = formatINRValue(monthlyEMI, 2)
  document.getElementById("totalAmount").textContent =
    formatINRValue(totalAmount, 2)
  document.getElementById("totalInterest").textContent = formatINRValue(totalInterest, 2)
}

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

authModalClose.addEventListener("click", () => {
  authModal.classList.remove("active")
})

authModal.addEventListener("click", (e) => {
  if (e.target === authModal) {
    authModal.classList.remove("active")
  }
})

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Thank you for your message! We will contact you soon.")
    contactForm.reset()
  })
}

function initializeFiltersPage() {

document.querySelectorAll('input[name="propertyType"]').forEach((cb) => {
  cb.addEventListener("change", () => {
    if (cb.checked) {
      if (!activeFilters.types.includes(cb.value)) {
        activeFilters.types.push(cb.value)
      }
    } else {
      const index = activeFilters.types.indexOf(cb.value)
      if (index > -1) {
        activeFilters.types.splice(index, 1)
      }
    }

    applyFilters()
  })
})


  const clearBtn = document.getElementById("clearFiltersBtn")
  if (clearBtn) {
    // Clone so we do not add many click handlers on "Clear all"
    const newClearBtn = clearBtn.cloneNode(true)
    clearBtn.parentNode.replaceChild(newClearBtn, clearBtn)
    newClearBtn.addEventListener("click", clearAllFilters)
  }
}

function navigateToDashboard() {
  navigateTo("dashboard")
}

function switchDashboardTab(tabName) {
  const tabs = document.querySelectorAll(".dashboard-tab")
  const tabContents = document.querySelectorAll(".dashboard-tab-content")

  tabs.forEach((tab) => tab.classList.remove("active"))
  tabContents.forEach((content) => content.classList.remove("active"))

  document.querySelector(`.dashboard-tab[onclick="switchDashboardTab('${tabName}')"]`).classList.add("active")
  document.getElementById(`${tabName}Tab`).classList.add("active")

  if (tabName === "listings") {
    loadUserListings()
  } else if (tabName === "favorites") {
    loadUserFavorites()
  }
}
