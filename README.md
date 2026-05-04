# 🏥 Health Insurance Premium Prediction App

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

A modern, responsive, and beautifully designed web application built with React and Vite that predicts health insurance premiums based on personal factors. It utilizes advanced UI concepts like glassmorphism and smooth animations to provide a premium user experience.

## ✨ Features

- **Real-time Prediction**: Instantly calculates estimated insurance premiums based on user input.
- **Dynamic Factors**: Takes into account various factors including Age, BMI, Smoking status, Number of children, Region, Nationality, and Marital Status.
- **Modern UI/UX**: Features a sleek glassmorphism design with a dark mode aesthetic and vibrant accents.
- **Micro-animations**: Smooth transitions, loading states, and dynamic number counters to enhance user engagement.
- **Fully Responsive**: Perfectly adapts to desktop, tablet, and mobile screens.

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (with modern variables and glassmorphism techniques)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sarathsaladi/CSE-274.git
   ```

2. Navigate into the project directory:
   ```bash
   cd CSE-274
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`.

## 📂 Project Structure

```text
cse274/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images and icons
│   ├── components/       # Reusable UI components
│   │   ├── PredictionForm.jsx
│   │   └── ResultCard.jsx
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles
│   ├── index.css         # Base styles and CSS variables
│   └── main.jsx          # React entry point
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
└── vite.config.js        # Vite configuration
```

## 📝 Usage

1. Enter the patient's details in the **Prediction Form** on the left side of the screen.
2. Select all the relevant options from the dropdowns (e.g., State/Region, Marital Status, Nationality).
3. Click the **"Predict Premium"** button.
4. The **Prediction Result** card on the right will display a loading animation while calculating the premium.
5. The final estimated premium will be displayed dynamically.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
