
# ALX Blog Post Project

## Overview
This project is part of the final **ALX** capstone, marking the culmination of a 12-month journey. The blog platform allows users to post, read, and comment on blog articles with secure user authentication.

## Features
- **User Authentication**: Implemented using **JSON Web Tokens (JWT)** for secure login and registration.
- **Frontend**: Developed with **React.js**, offering a responsive and intuitive user interface.
- **Backend**: Built using **Node.js** and **MySQL**, providing a robust and scalable backend.
- **Database Management**: Managed using **MySQL**, with plans to improve database features and remote access in the future.
- **Future Enhancements**: Adding customizable user profiles and integrating payment gateways for newsletter billing.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js
- **Database**: MySQL
- **Authentication**: JSON Web Tokens (JWT)
- **Version Control**: Git

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/annmulwa/alx-blog-post.git
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd alx-blog-post
   ```

3. **Install Dependencies**
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```
   - For the backend:
     ```bash
     cd backend
     npm install
     ```

4. **Set Up Environment Variables**
   Create a `.env` file in the backend directory with the following variables:
   ```env
   DB_HOST=your_db_host
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   JWT_SECRET=your_jwt_secret
   ```

5. **Run the Project**
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd frontend
     npm start
     ```

## Usage
- Navigate to the frontend URL to access the blog platform.
- Register and log in to access blog posting and commenting features.

## Challenges Faced
- Configuring MySQL server and Workbench.
- Handling remote access and collaboration issues.
- Managing multiple technologies including Git, CSS, HTML, Python, and Node.js.

## Future Enhancements
- Expand user profile features.
- Integrate payment gateways for newsletter billing.
- Explore alternative databases like MongoDB for improved remote access and flexibility.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
- **ALX** for providing the platform and resources.
- Our team for their hard work and dedication.

## Team Members
- **Ann Mulwa**: annmulwa2000@gmail.com
- **Eddy Kamau**: worksofeddy@gmail.com
- **Tevin Owena**: tevinowena@gmail.com

---

Feel free to adjust any sections as needed. Let me know if you need further modifications!