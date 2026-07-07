# 🌍 Wanderlust

<h1 align="center">
🏡 Wanderlust
</h1>

<p align="center">
<b>Airbnb-inspired Full Stack Vacation Rental Platform</b>
</p>

<p align="center">
Discover, share, and review unique stays around the world with a secure and modern booking-inspired web application built using the MERN backend ecosystem.
</p>

---

<p align="center">

![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-Templates-B4CA65?style=for-the-badge)
![Passport](https://img.shields.io/badge/Passport.js-Authentication-34E27A?style=for-the-badge)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Image_Storage-3448C5?style=for-the-badge&logo=cloudinary)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![GitHub Stars](https://img.shields.io/github/stars/rajlaxmi12/wanderlust?style=for-the-badge)
![GitHub Forks](https://img.shields.io/github/forks/rajlaxmi12/wanderlust?style=for-the-badge)

</p>

---

# ✨ Project Overview

**Wanderlust** is a full-stack vacation rental platform inspired by Airbnb that enables users to discover, publish, and manage rental properties through a clean and responsive interface.

The application provides a complete authentication system, secure listing management, cloud-based image storage, user reviews, and role-based authorization while following the **MVC Architecture** for maintainability and scalability.

Whether you're a traveler looking for your next destination or a host wanting to showcase your property, Wanderlust provides an intuitive experience for managing vacation listings.

---

# 🚀 Features

## 🔐 Authentication & Authorization

- User Registration
- Secure Login & Logout
- Passport.js Authentication
- Session-based Authentication
- Protected Routes
- Authorization Middleware
- Owner-only Listing Management
- Review Ownership Validation

---

## 🏡 Listing Management

- Create New Listings
- View All Listings
- Detailed Listing Pages
- Edit Existing Listings
- Delete Listings
- Upload Cover Images
- Listing Description
- Country Information
- Location Details
- Pricing Support

---

## ☁️ Cloudinary Image Storage

- Cloudinary Integration
- Multer File Upload
- Secure Cloud Storage
- Optimized Image Delivery
- Automatic Image URL Management

---

## ⭐ Review System

- Add Reviews
- Rating Support
- Delete Reviews
- Review Authorization
- Listing-wise Reviews

---

## 🛡 Validation & Security

- Joi Server-side Validation
- Authentication Middleware
- Authorization Checks
- Flash Messages
- Centralized Error Handling
- Express Sessions
- MongoDB Session Store

---

## 🎨 User Experience

- Responsive Bootstrap 5 UI
- Dynamic Flash Notifications
- Clean Navigation
- RESTful Routes
- EJS Templating
- Reusable Layouts
- MVC Project Structure

---

# 🛠 Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | HTML5, CSS3, Bootstrap 5, JavaScript, EJS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Authentication** | Passport.js, Passport Local |
| **Validation** | Joi |
| **File Upload** | Multer |
| **Image Hosting** | Cloudinary |
| **Session Store** | connect-mongo |
| **Templating Engine** | EJS + EJS Mate |
| **Version Control** | Git & GitHub |

---

# 📂 Project Structure

```text
wanderlust/
│
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── views/
│   ├── listings/
│   ├── users/
│   ├── includes/
│   ├── layouts/
│   ├── error.ejs
│   └── home.ejs
│
├── public/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── logo.png
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── init/
│   ├── index.js
│   └── data.js
│
├── uploads/
│
├── middleware.js
├── cloudConfig.js
├── schema.js
├── index.js
├── package.json
└── README.md
```

---

# 🌟 Project Highlights

✅ MVC Architecture

✅ RESTful Routing

✅ Passport Authentication

✅ Cloudinary Image Upload

✅ MongoDB Integration

✅ Session Authentication

✅ Flash Messages

✅ Responsive Bootstrap UI

✅ Joi Validation

✅ Express Middleware

---

> 💡 **Wanderlust** demonstrates modern full-stack web development practices using Node.js, Express, MongoDB, Passport.js, Cloudinary, and EJS. The project emphasizes clean architecture, secure authentication, scalable code organization, and an intuitive user experience, making it an excellent portfolio project for showcasing backend and full-stack development skills.

---

# ⚙️ Installation

Follow these steps to set up Wanderlust on your local machine.

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/rajlaxmi12/wanderlust.git
```

Navigate to the project directory:

```bash
cd wanderlust
```

---

## 2️⃣ Install Dependencies

Install all required Node.js packages.

```bash
npm install
```

---

## 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory.

```env
ATLASDB_URL=your_mongodb_atlas_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name

CLOUD_API_KEY=your_cloudinary_api_key

CLOUD_API_SECRET=your_cloudinary_api_secret
```

---

## 4️⃣ Start MongoDB

If using MongoDB locally:

```bash
mongod
```

If using **MongoDB Atlas**, simply ensure your connection string is correctly configured.

---

## 5️⃣ Run the Application

```bash
node index.js
```

or (if using Nodemon)

```bash
nodemon index.js
```

The application will be available at

```
http://localhost:8080
```

---

# 🔑 Environment Variables

| Variable | Description | Example |
|-----------|-------------|---------|
| `ATLASDB_URL` | MongoDB Atlas Connection String | mongodb+srv://... |
| `SECRET` | Express Session Secret | mySuperSecretKey |
| `CLOUD_NAME` | Cloudinary Cloud Name | wanderlust-demo |
| `CLOUD_API_KEY` | Cloudinary API Key | 123456789 |
| `CLOUD_API_SECRET` | Cloudinary API Secret | **************** |

> ⚠️ Never commit your `.env` file to GitHub.

---

# 🚀 Usage Guide

Once the application is running, users can perform the following operations.

## 👤 Register

Create a new account to access all platform features.

✔ Secure password hashing

✔ Persistent login session

✔ Flash notifications

---

## 🔐 Login

Authenticate using your registered credentials.

After successful login, users can

- Create Listings
- Edit Their Listings
- Delete Their Listings
- Add Reviews
- Manage Their Content

---

## 🏡 Create Listing

Users can publish a new vacation rental by providing

- Property Title
- Description
- Price
- Country
- Location
- Property Image

Uploaded images are securely stored using **Cloudinary**.

---

## 🖼 Upload Images

Image uploads are handled using

- Multer
- Cloudinary

Benefits include

- Secure storage
- Fast image delivery
- Optimized image URLs

---

## ⭐ Add Reviews

Authenticated users can

- Rate listings
- Write reviews
- View community feedback

Listing owners and review authors have appropriate authorization controls.

---

## 🚪 Logout

Users can securely logout at any time, ending their authenticated session.

---

# 🌐 REST API Routes

## Authentication

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/signup` | Registration Page |
| POST | `/signup` | Register New User |
| GET | `/login` | Login Page |
| POST | `/login` | Authenticate User |
| GET | `/logout` | Logout Current User |

---

## Listings

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/listings` | View All Listings |
| GET | `/listings/new` | New Listing Form |
| POST | `/listings` | Create Listing |
| GET | `/listings/:id` | Listing Details |
| GET | `/listings/:id/edit` | Edit Listing Form |
| PUT | `/listings/:id` | Update Listing |
| DELETE | `/listings/:id` | Delete Listing |

---

## Reviews

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/listings/:id/reviews` | Add Review |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete Review |

---

# 🗄 Database Schema

The project follows a relational document structure using **MongoDB** and **Mongoose**.

---

## 👤 User

Stores authentication and account information.

### Fields

- Username
- Email (optional implementation)
- Password (Hashed)
- Session Information

---

## 🏡 Listing

Represents a vacation rental.

### Fields

- Title
- Description
- Image
- Price
- Country
- Location
- Owner
- Reviews

Each listing belongs to one authenticated user.

---

## ⭐ Review

Represents user feedback for a listing.

### Fields

- Rating
- Comment
- Author

Each review belongs to

- One Listing
- One User

---

# 🔗 Entity Relationships

```text
User
 │
 ├──────────────┐
 │              │
 ▼              ▼
Listing ------ Review
      ▲           │
      └───────────┘
```

### Relationship Summary

| Entity | Relationship |
|----------|--------------|
| User → Listing | One-to-Many |
| User → Review | One-to-Many |
| Listing → Review | One-to-Many |
| Review → User | Many-to-One |
| Listing → Owner | Many-to-One |

---

# 📋 Application Workflow

```text
User Registration
        │
        ▼
User Login
        │
        ▼
Create Session
        │
        ▼
Browse Listings
        │
 ┌──────┴────────┐
 │               │
 ▼               ▼
Create Listing   View Listing
 │               │
 ▼               ▼
Upload Image   Add Review
 │               │
 └──────┬────────┘
        ▼
Cloudinary + MongoDB
```

---

> 💡 **Wanderlust** follows modern RESTful principles and an MVC architecture to deliver a secure, scalable, and maintainable vacation rental platform. With Passport.js authentication, Cloudinary image management, MongoDB persistence, and structured routing, the application provides a solid foundation for learning and building production-ready full-stack web applications.
>
> ---

# 🏗 Project Architecture

Wanderlust follows the **Model-View-Controller (MVC)** architectural pattern, ensuring clean code organization, separation of concerns, and maintainability.

```text
                Client (Browser)
                       │
                       ▼
               Express Routes
                       │
         ┌─────────────┴─────────────┐
         ▼                           ▼
   Controllers                  Middleware
         │                           │
         ▼                           ▼
      Models  ◄──────────────►  MongoDB Atlas
         │
         ▼
      EJS Views
         │
         ▼
      HTML Response
```

---

## 📂 Architecture Components

### 🛣 Routes

Routes define the application's endpoints and map incoming HTTP requests to their corresponding controller functions.

Responsibilities include:

- Defining RESTful endpoints
- Applying middleware
- Request forwarding
- Route organization

Example:

```
routes/
├── listing.js
├── review.js
└── user.js
```

---

### 🎯 Controllers

Controllers contain the application's business logic.

They handle:

- Listing CRUD operations
- User Authentication
- Review Management
- Database communication
- Rendering views
- Redirecting responses

Example:

```
controllers/
├── listings.js
├── reviews.js
└── users.js
```

---

### 🗄 Models

Models define MongoDB collections using Mongoose Schemas.

Current models include:

- User
- Listing
- Review

Responsibilities

- Database Schema
- Validation
- Relationships
- CRUD Operations

---

### 🎨 Views

Views are rendered using **EJS Templates**.

Responsibilities:

- Display listings
- Forms
- Authentication pages
- Reviews
- Flash messages
- Responsive layouts

Folder Structure

```
views/
├── listings/
├── users/
├── layouts/
├── includes/
└── error.ejs
```

---

### ⚙ Middleware

Custom middleware keeps controllers clean by handling reusable logic.

Examples include

- Authentication
- Authorization
- Validation
- Error handling

---

### ☁ Utilities

Utility modules simplify repetitive tasks.

Examples

- Async Error Wrapper
- Custom Express Errors
- Cloudinary Configuration
- Joi Validation Schemas

---

# 🔒 Security Features

Wanderlust incorporates several security best practices to protect user data and application resources.

| Feature | Description |
|----------|-------------|
| 🔑 Passport Authentication | Secure local authentication |
| 🔐 Password Hashing | Passwords stored securely using Passport Local Mongoose |
| 👤 Session Authentication | Persistent login sessions |
| 🛡 Authorization | Only owners can edit/delete listings |
| ⭐ Review Authorization | Users can only manage their own reviews |
| 🚫 Protected Routes | Login required for sensitive actions |
| ✅ Joi Validation | Prevents invalid user input |
| ⚠ Flash Messages | Secure feedback for users |
| ☁ Cloudinary Storage | Secure cloud image hosting |
| 🍪 Express Sessions | Session management |

---

## 🛡 Authentication Flow

```text
User
 │
 ▼
Login
 │
 ▼
Passport.js
 │
 ▼
Session Created
 │
 ▼
Authenticated User
 │
 ▼
Protected Routes
```

---

## 🔐 Authorization Flow

```text
User Request
      │
      ▼
Authentication Check
      │
      ▼
Authorization Check
      │
      ▼
Owner?
   │        │
 Yes        No
 │          │
 ▼          ▼
Allow     Access Denied
```

---

# ⚡ Performance Optimizations

The application includes several optimizations for improved performance and scalability.

## ☁ Cloudinary Integration

- Cloud-based image storage
- Optimized image delivery
- Reduced server storage usage
- Faster media loading

---

## 🗄 MongoDB Optimization

- Indexed document retrieval
- Efficient schema relationships
- Optimized database queries
- Mongoose population support

---

## 🚀 Express Optimization

- Modular routing
- MVC architecture
- Middleware reuse
- Async error handling

---

## 🖼 Optimized Assets

- Bootstrap CDN
- Cloudinary image delivery
- Lightweight frontend
- Reusable layouts

---

## 📦 Session Management

- Persistent user sessions
- Secure authentication state
- Efficient session storage

---

# 🚀 Deployment

The project is deployment-ready and can be hosted on cloud platforms like **Render**.

## Deployment Steps

### 1️⃣ Push Repository

```bash
git push origin main
```

---

### 2️⃣ Create Render Web Service

- Connect GitHub Repository
- Select Branch
- Build Command

```bash
npm install
```

Start Command

```bash
node index.js
```

---

### 3️⃣ Configure Environment Variables

Configure the following variables on Render.

| Variable |
|----------|
| ATLASDB_URL |
| SECRET |
| CLOUD_NAME |
| CLOUD_API_KEY |
| CLOUD_API_SECRET |

---

### 4️⃣ MongoDB Atlas

Create a MongoDB Atlas cluster.

Whitelist Render's IP (or allow access as appropriate).

Update

```
ATLASDB_URL
```

with the Atlas connection string.

---

### 5️⃣ Launch

After deployment, your application will be accessible via your Render URL.

---

# 🚧 Future Improvements

Wanderlust provides a strong foundation for future enhancements.

| Feature | Status |
|----------|--------|
| 🛏 Booking System | ⏳ Planned |
| ❤️ Wishlist/Favorites | ⏳ Planned |
| 💳 Payment Gateway Integration | ⏳ Planned |
| 🌍 Google OAuth Login | ⏳ Planned |
| 🗺 Interactive Maps | ⏳ Planned |
| 🔍 Advanced Search | ⏳ Planned |
| 🎯 Smart Filters | ⏳ Planned |
| 📊 Admin Dashboard | ⏳ Planned |
| 🔔 Real-time Notifications | ⏳ Planned |
| 🌙 Dark Mode | ⏳ Planned |
| 📱 Progressive Web App (PWA) | ⏳ Planned |
| 🌐 Multi-language Support | ⏳ Planned |

---

# 📈 Why This Project?

Wanderlust demonstrates industry-standard full-stack development practices, including:

- ✅ MVC Architecture
- ✅ RESTful API Design
- ✅ Secure Authentication
- ✅ Authorization Middleware
- ✅ MongoDB Relationships
- ✅ Cloudinary Integration
- ✅ Session Management
- ✅ Modular Codebase
- ✅ Scalable Folder Structure
- ✅ Production-ready Deployment

---

> **💡 Recruiter Note:**  
> Wanderlust showcases practical experience with backend development, authentication, database modeling, cloud storage, RESTful architecture, and scalable application design. It reflects the skills expected in modern full-stack web development and serves as a strong portfolio project for internships and software engineering roles.
```
---

# 🤝 Contributing

Contributions are always welcome and greatly appreciated!

Whether you'd like to fix a bug, improve the UI, optimize performance, or introduce a new feature, your contributions help make **Wanderlust** even better.

## 📌 Contribution Workflow

1. **Fork** the repository

2. **Clone** your fork

```bash
git clone https://github.com/rajlaxmi12/wanderlust.git
```

3. Create a new branch

```bash
git checkout -b feature/your-feature-name
```

4. Make your changes

5. Commit your work

```bash
git commit -m "Add: Your Feature"
```

6. Push the branch

```bash
git push origin feature/your-feature-name
```

7. Open a Pull Request 🚀

---

## 💡 Contribution Guidelines

- Follow the existing MVC project structure.
- Write clean, readable, and maintainable code.
- Keep commits meaningful.
- Test your changes before submitting.
- Update documentation whenever necessary.
- Follow consistent naming conventions.

---

You are free to:

- ✅ Use
- ✅ Modify
- ✅ Distribute
- ✅ Contribute

for personal and commercial purposes under the terms of the MIT License.

For more details, see the **LICENSE** file.

---

# 👨‍💻 Author

<table>
<tr>
<td width="170">

### 👤 Developer

</td>

<td>

## **Raj Laxmi**

Full Stack Web Developer

Passionate about building scalable, user-friendly, and modern web applications using the JavaScript ecosystem.

</td>
</tr>
</table>

### 🌐 Connect with Me

| Platform | Link |
|----------|------|
| 💻 GitHub | https://github.com/rajlaxmi12 |
| 💼 LinkedIn | https://www.linkedin.com/in/raj-laxmi-4007a7332/ |
| 🌍 Portfolio | https://portfolio-rl.vercel.app/ |
| 📧 Email | raj.laxmi.1236@gmail.com |

> Replace the placeholder links above with your actual LinkedIn, Portfolio, and Email before publishing.

---

# 🙏 Acknowledgements

Special thanks to the amazing technologies and communities that made this project possible.

### 📚 Learning Resources

- ❤️ Apna College
- 📖 MDN Web Docs
- 📘 Express.js Documentation
- 📗 MongoDB Documentation
- 📙 Mongoose Documentation

### 🛠 Technologies

- Node.js
- Express.js
- MongoDB Atlas
- Passport.js
- Cloudinary
- Bootstrap 5
- EJS
- Multer
- Joi

### 🌍 Community

- Open Source Community
- GitHub
- Stack Overflow
- npm Ecosystem

---

# ⭐ Show Your Support

If you found this project helpful or learned something from it,

please consider giving it a ⭐ on GitHub.

It motivates developers to continue building and improving open-source projects.

```bash
⭐ Star the repository
🍴 Fork the project
🐛 Report issues
🚀 Contribute improvements
```

---

# 📊 Project Summary

| Category | Details |
|-----------|----------|
| 🏗 Architecture | MVC (Model-View-Controller) |
| 💻 Backend | Node.js + Express.js |
| 🎨 Frontend | EJS, Bootstrap 5, JavaScript |
| 🗄 Database | MongoDB Atlas |
| 🔐 Authentication | Passport.js |
| ☁️ Image Storage | Cloudinary |
| 📁 File Upload | Multer |
| ✅ Validation | Joi |
| 🍪 Session Store | connect-mongo |
| 🚀 Deployment | Render |

---

# 📌 Repository Statistics

- ✅ Full Stack Web Application
- ✅ RESTful Architecture
- ✅ Secure Authentication
- ✅ Cloud Image Upload
- ✅ Responsive User Interface
- ✅ MongoDB Integration
- ✅ MVC Design Pattern
- ✅ Production Ready
- ✅ Recruiter Friendly
- ✅ Portfolio Worthy

---

# 🚀 Roadmap

- [ ] Booking Management
- [ ] Favorite Listings
- [ ] Google OAuth Login
- [ ] Interactive Maps
- [ ] Advanced Search
- [ ] Category Filters
- [ ] Payment Integration
- [ ] Admin Dashboard
- [ ] User Profiles
- [ ] Notification System
- [ ] Dark Mode
- [ ] Progressive Web App (PWA)

---

## 💙 Built With

<p align="center">

<img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,js,bootstrap,git,github,vscode" />

</p>

---

<div align="center">

# 🌍 Wanderlust

### Airbnb-inspired Full Stack Vacation Rental Platform

**Discover • Share • Explore • Experience**

Built with ❤️ using **Node.js**, **Express.js**, **MongoDB**, **Passport.js**, **Cloudinary**, and **Bootstrap 5**.

⭐ **If you like this project, don't forget to star the repository!** ⭐

</div>
