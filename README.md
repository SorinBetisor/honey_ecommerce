# Django Ecommerce Website (for Bee Products)

This is an ecommerce website developed for bee product sales, built as part of the Tekwill Junior Ambassadors Web Development Contest. The project integrates Django for the backend, with frontend components using React, Vue, and PHP. The site is supported by a PostgreSQL database and features dynamic templating for an enhanced shopping experience.

## Technologies Used

- **Django** - Backend framework for handling data, views, and business logic.
- **React** - Frontend library for building interactive components.
- **Vue** - Additional frontend framework for dynamic user interfaces.
- **PHP** - Server-side scripting for certain web functionalities.
- **PostgreSQL** - Relational database management for storing product, order, and user data.
- **HTML & CSS** - Markup and styling for the website's structure and design.

## Features

- **Cross-platform Compatibility**: Works across multiple devices and browsers.
- **Dynamic Templating**: Templates adapt to the needs of the content and user.
- **Shopping Cart Functionality**: Users can add products to a cart and manage their purchases.
- **Search and Filtering**: Allows users to search for specific products and filter results by category or price.
- **Secure Checkout Process**: Safeguards user data during checkout and payment processing.
- **Email Notifier**: Sends confirmation emails to users upon successful orders.

## Setup and Installation
   ```bash
   git clone https://github.com/yourusername/ecommerce-website.git
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
```

## Deployment
The site was initially hosted on Heroku, but due to the discontinuation of Heroku’s free tier, alternative deployment options are required. The project is compatible with any WSGI-compatible hosting service.

###Credits
This project was developed by me and @CartiologyDEV as part of the Tekwill Junior Ambassadors Web Development Contest. We thank Tekwill for organizing the competition and providing us with this platform to showcase our skills.

##Notes
The project was initially deployed on Heroku with WSGI configuration, but Heroku’s free plan has been discontinued, necessitating migration to other hosting services.
