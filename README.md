# GitHub & Kaggle Workshop Website


This repository contains the source code for the official website of the "GitHub & Kaggle Workshop," a two-day hands-on training session designed for students at K.R. Mangalam University. The website is a single-page application that provides comprehensive details about the event, including the schedule, organizers, and a registration link.

A live version of the website can be viewed here: **[https://tarungoel93.github.io/work/](https://tarungoel93.github.io/work/)**

## ✨ Features

*   **Responsive Design:** Fully responsive layout that works on desktops, tablets, and mobile devices.
*   **Dynamic Content:** Features an animated typing effect in the hero section for a modern feel.
*   **Detailed Schedule:** A clear, two-day breakdown of the workshop agenda.
*   **Team Showcase:** Sections for workshop convenors and student volunteers with links to their LinkedIn profiles.
*   **Interactive FAQ:** An accordion-style FAQ section to answer common questions efficiently.
*   **Event Gallery:** A dedicated gallery page (`gallery.html`) with a lightbox feature for viewing event photos in fullscreen.
*   **Easy Registration:** Integrated "Register" and "Get Started" buttons that redirect to a Google Form for event registration.

## 🛠️ Technologies Used

*   **HTML5:** For the structure and content of the web pages.
*   **CSS3:** For styling, layout, animations, and responsive design. Key features include Flexbox, Grid, custom animations, and a dark theme.
*   **JavaScript (ES6):** For DOM manipulation, interactive elements like the mobile navigation menu, FAQ accordion, text animations, and the image lightbox.

## 📂 Repository Structure

```
.
├── index.html       # The main landing page for the workshop
├── gallery.html     # Dedicated page for the event photo gallery
├── l.css            # All CSS styles for the website
├── l.js             # All JavaScript for interactivity and dynamic features
├── pankaj.webp      # Image of Dr. Pankaj Agarwal
└── monika.webp      # Image of Dr. Monika Khatkar
```
*(Note: Event and volunteer images are referenced in the HTML but are not included in this repository.)*

## 🚀 How to Run Locally

To view or work on the project locally, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/TarunGoel93/Work.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd Work
    ```

3.  **Open the main page:**
    Open the `index.html` file in your preferred web browser.

    ```sh
    # On macOS
    open index.html

    # On Windows
    start index.html

    # On Linux
    xdg-open index.html
    ```

## 📄 Page Sections

### `index.html` (Main Page)

*   **Navbar:** Sticky navigation bar with links to different sections and a hamburger menu for mobile view.
*   **Hero Section:** Introduces the workshop with an animated tagline and a primary call-to-action button.
*   **Schedule:** A detailed, two-day agenda for the GitHub and Kaggle training sessions.
*   **Meet Our Team:** Introduces the workshop convenors, Dr. Pankaj Agarwal and Dr. Monika Khatkar.
*   **Volunteers:** A responsive card layout showcasing the student volunteer team.
*   **Gallery Preview:** A small selection of photos with a "See More" button linking to the full gallery.
*   **FAQ:** A list of frequently asked questions with expandable answers.

### `gallery.html` (Gallery Page)

*   **Full Gallery:** Displays all event photos in a responsive grid.
*   **Lightbox:** Clicking on any image opens it in a fullscreen lightbox overlay for a better viewing experience.
*   **Back Button:** A simple navigation link to return to the home page.
