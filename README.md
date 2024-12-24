WanderLust is a comprehensive web application designed to facilitate seamless travel planning and sharing. It enables users to create, manage, and share travel experiences with a community of fellow travelers.

**Key Features:**

- **User Authentication:** Secure user registration and login functionalities ensure personalized experiences.

- **Travel Listings:** Users can create detailed travel listings, including destinations, itineraries, and personal notes.

- **Image Uploads:** Integration with Cloudinary allows users to upload and manage images for their travel listings.

- **Interactive Map:** An embedded map feature helps users visualize travel destinations and routes.

- **Review System:** Users can leave reviews and ratings on travel listings, fostering a community-driven platform.

**Technologies Used:**

- **Frontend:** HTML, CSS, JavaScript, and EJS for templating.

- **Backend:** Node.js with Express.js framework.

- **Database:** MongoDB for data storage.

- **Image Hosting:** Cloudinary for efficient image storage and retrieval.

- **Authentication:** Passport.js for managing user authentication.

**Setup Instructions:**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/KrishAhlawat/WanderLust_project.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd WanderLust_project
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add the following:
   ```
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   SESSION_SECRET=your_session_secret
   ```

5. **Start the Application:**
   ```bash
   npm start
   ```

6. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000`.

**Contributing:**

Contributions are welcome! Please fork the repository and create a pull request with your enhancements.

**License:**

This project is licensed under the MIT License.

For more details, visit the [WanderLust GitHub Repository](https://github.com/KrishAhlawat/WanderLust_project). 
