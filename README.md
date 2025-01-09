# GuitarShop

## **Live Demo**

[**GuitarShop**](https://guitarshop-production.up.railway.app)

---

## **Intro**

GuitarShop is a full-stack e-commerce application project that simulates an online guitar store. The project was created to learn the Vue.js framework and understand the full-stack application development process. The backend is built using **Node.js** and **Express.js**, while the frontend leverages **Vue 3** and **Pinia** for state management.

---

## **Technology Stack**

- **Frontend**: Vue.js 3, Pinia, SASS/SCSS
- **Backend**: Node.js, Express.js
- **Authentication**: Firebase
- **Hosting**: Railway
- **Database**: JSON (custom-built, simplified)

---

## **Features**

- **Shopping Cart**:  
  Users can add and remove products from the cart. Inventory management is handled with **Pinia**, ensuring that when a product is out of stock, a notification appears on its product card.
- **User Authentication**:  
  User login and registration are implemented using **Firebase**.
- **REST API**:  
  A custom **Node.js** and **Express.js** backend serves product data stored in a JSON file, functioning as a simplified database.
- **Dynamic Page Rendering**:  
  Products are automatically displayed based on data retrieved from the backend.
- **Modern Styling**:  
  The application uses **SASS/SCSS** for responsive and visually appealing styling.

---

## **Architecture**

- **Frontend**:  
  The frontend is built with **Vue.js** and modular components, dynamically rendering data fetched from the backend via API calls.
- **Backend**:  
  The backend serves static files from the `dist` folder and exposes a REST API for product data, retrieved from a `guitars.json` file.

---

## **Planned Features**

In future updates, the following features are planned:

- **Payment Simulation**: Implementing a mock payment system for orders.
- **Order History**: Allowing logged-in users to view their order history.
- **User Reviews**: Enabling users to leave reviews and rate products.

---

## **Technical Notes**

- **REST API**:  
  The backend exposes a REST API at `/api/guitars`, providing product data from `data/guitars.json`.
- **Images**:  
  All guitar images were generated using AI (**Leonardo.ai**).
- **CORS**:  
  Proper **CORS** settings allow seamless communication between the frontend and backend.

---
