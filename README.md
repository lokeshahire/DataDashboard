# Data Dashboard Assignment

## Screenshots

![Game Screenshot](https://github.com/user-attachments/assets/057e5c0c-717b-4ba8-b048-bf5133b40d21)

## Live Demo

You can try the live demo here: [Demo](https://)

---

## **Assignment Overview**

This project involves building a **Data Dashboard** to display a list of items, each showcasing key metrics like engagement score and reach. The dashboard includes layout design, filtering and sorting functionalities, and a modal for additional details. The project is hosted online, with a GitHub repository available for code review.

---

## **Features**

### **Page Layout and Styling (HTML/CSS)**:

- **Main Dashboard**:
  - Display a **list of items** in **cards**, each showing:
    - **Name/Title** (e.g., "Product A")
    - **Engagement score** (calculated as `likes + shares + comments`)
    - **Reach** (calculated as `followers * engagement / 100`)
    - **Category** (e.g., "Tech")
    - **Location** (e.g., "USA")
    - A **button** to open a modal with more details.
- **Filter Options**:
  - Dropdown to filter by **category** (e.g., "Tech", "Fashion", "Sports").
  - Filter by **Engagement Score** ranges (e.g., "0–1000", "1000–5000").
- **Sort Options**:
  - **Sort by Engagement Score** (ascending/descending).
  - **Sort by Reach** (ascending/descending).
- **Responsive Design**:
  - Fully responsive dashboard.

### **JavaScript/React.js (Core Functionality)**:

- **Mock Data**:
  - Includes at least 5 items in JSON format with properties like:
    - **name**, **likes**, **shares**, **comments**, **followers**, **category**, **location**.
- **Data Rendering**:
  - Dynamically renders the list of items using React.
- **Modal for Item Details**:
  - Shows detailed information (engagement history, category, location) when **View Details** is clicked.
- **Filter Functionality**:
  - Filters by **category** and **engagement score**.
- **Sorting Functionality**:
  - Sorts by **engagement score** and **reach** in both ascending and descending order.

---

## **Technologies Used**

- **React.js**: Frontend library for building the UI components.
- **HTML5/CSS3**: For layout and styling.
- **JavaScript (ES6+)**: Core functionality.
- **Bootstrap**: For responsive design.
- **JSON**: Mock data.
- **Netlify/Vercel**: Hosting platform.

---

## **Installation Procedure**

To run the project locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd data-dashboard
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

---

## **Project Structure**

```plaintext
src/
├── components/
│   ├── Filter.jsx
│   ├── Sort.jsx
│   ├── ItemCard.jsx
│   ├── ItemModal.jsx
├── data/
│   └── mockData.json
├── App.js
├── index.js
└── styles/
    └── App.css
```
