# Meditation User Stories

**A : user stories for Login/Registration page**
  **1.**
      **Title:**
          Application registration: A user can register by entering their username, email, and password, and then clicking the Sign Up button.
      **Acceptance Criteria:**
          1. Users can enter valid details and click “Sign Up” to create an account.
          2. An error message is shown if any input is invalid or missing.
      **Story Points:** 1

  **2.**
      **Title:**
          Application login: For the login process, users will input their email and password, and then use the Login button to access their account.
      **Acceptance Criteria:**
          1. Users can log in with correct credentials and are redirected to their dashboard.
          2. An error message is displayed for incorrect credentials.
      **Story Points:** 1

  **3.**
      **Title:**
          Error feedback on signup and login: A user will receive a message if they attempt to click the Sign Up button without entering their details. If the user enters the incorrect username or password, they will receive a message indicating that the login attempt was unsuccessful.
      **Acceptance Criteria:**
          1. Error messages are displayed for missing fields on sign-up or login attempts.
      **Story Points:** 1

  **4.**
      **Title:**
          Store user data: User details will be saved in local storage so that the data persists between app sessions.
      **Acceptance Criteria:**
          1. User details are saved in local storage after registration and used for authentication during login.
      **Story Points:** 1

**B : user stories for the homepage**
  **1.**
      **Title:**
          As a user, I want to view an overview of my data on the home screen so that I can monitor my progress at a glance.
      **Acceptance Criteria:**
          1. Example: A fitness app displays steps walked, calories burned, and water intake on the home screen.
          2. Why: Helps users stay motivated by seeing their progress immediately.
      **Story Points:** 1

  **2.**
      **Title:**
          As a new user, I want to see a quick introductory guide on the home screen so that I can learn how to use the app.
      **Acceptance Criteria:**
          1. Example: A recipe app offers a carousel of tips for searching, saving, and rating recipes.
          2. Why: Ensures new users quickly understand key features.
      **Story Points:** 1

  **3.**
      **Title:**
          As a user, I want to access my most-used features from the home screen so that I can navigate the app efficiently.
      **Acceptance Criteria:**
          1. Example: An e-commerce app shows shortcuts to Track Orders, Saved Items, and Browse Categories.
          2. Why: Improves user experience by reducing clicks for common actions.
      **Story Points:** 1


**C : user stories for the detailed screen**
   **1.**
      **Title:**
          As a user, I want detailed information on a selected item so that I can make informed decisions.
      **Acceptance Criteria:**
          1. Example: An e-commerce app shows product images, specifications, reviews, and price on the detail screen.
          2. Why: Helps users evaluate items before adding them to the cart.
      **Story Points:** 1

  **2.**
      **Title:**
          As a user, I want to perform actions like saving or sharing an item from the detail screen so that I can share interesting content.
      **Acceptance Criteria:**
          1. Example: A recipe app detail screen lets users save recipes to their favorites or share them on social media.
          2. Why: Encourages interaction and sharing.
      **Story Points:** 1

  **3.**
      **Title:**
          As a user, I want to view related items on the detail screen so that I can explore more options.
      **Acceptance Criteria:**
          1. Example: A travel app detail screen for a hotel shows nearby attractions and alternative hotels.
          2. Why: Enhances user experience by offering contextual suggestions.
      **Story Points:** 1


**D : user stories for the add to favorites functionality**
    **1.**
      **Title:**
          As a user, I want to add an item to my Favorites, so that I can save activities or articles I like for quick access later.
      **Acceptance Criteria:**
          1. A heart icon with the text “Add to Favorites” is displayed next to each item.
          2. The outlined heart indicates the item is not in Favorites.
          3. Tapping the button adds the item to the Favorites list, updates the button text to “Remove from Favorites,” and changes the heart icon to filled.
      **Story Points:** 1

  **2.**
      **Title:**
          As a user, I want to remove an item from my Favorites, so that I can manage my saved content.
      **Acceptance Criteria:**
          1. The “Remove from Favorites” button with a filled heart is displayed for items already in Favorites.
          2. Tapping the button removes the item from the Favorites list and reverts the heart icon to outlined.
          3. Users can add or remove items anytime, and the button text updates accordingly.
      **Story Points:** 1

  **3.**
      **Title:**
          As a user, I want a “My Favorites” screen, so that I can view and manage all my saved items in one place.
      **Acceptance Criteria:**
          1. The “My Favorites” screen displays a list of saved items with their title, category, and duration.
          2. Users can tap any item to view details or start the activity.
          3. The Favorites list remains organized for easy browsing and quick access.
      **Story Points:** 1


**E : user stories for daily reminders**
    **1.**
      **Title:**
          As a user, I want to view the calendar for the current month and navigate between months, so that I can easily select dates for reminders.
      **Acceptance Criteria:**
          1. Display the current month with all the days visible.
          2. Provide navigation arrows to move between months.
      **Story Points:** 1

  **2.**
      **Title:**
          As a user, I want to select a date and time for a reminder, so that I can schedule it properly.
      **Acceptance Criteria:**
          1. Display a default text “Selected Date: None” and “Selected Time: 20:44” to indicate no date has been selected but a time is chosen.
          2. Allow users to select a specific time and date.
      **Story Points:** 1

  **3.**
      **Title:**
          As a user, I want to add a reminder after selecting a time, so that I can schedule it for a future date and time.
      **Acceptance Criteria:**
          1. After selecting a time, users can click the “Add Reminder” button to schedule the reminder.
      **Story Points:** 1

  **4.**
      **Title:**
          As a user, I want to see a list of all my reminders, so that I can manage them easily.
      **Acceptance Criteria:**
          1. Display a list of all reminders with the selected date and time.
          2. Provide an option to delete a reminder by clicking the red “Delete” button next to it.
      **Story Points:** 1



**F : user stories for sharing the exercises**
   **1.**
      **Title:**
          As a user, I want to easily share recommended exercises with friends or family, so that I can help others discover helpful activities.
      **Acceptance Criteria:**
          1. Provide a clear share button/icon on the exercise detail page for easy sharing.
          2. Allow users to share exercises via multiple platforms (e.g., social media, email, or messaging apps).
      **Story Points:** 1


**G : user stories for logout functionality**
  **1.**
      **Title:**
          As a user, I want a clear and visible logout button, so that I can easily log out of my account when I’m done using the app.
      **Acceptance Criteria:**
          1. Display a clear and visible “Logout” button in the app.
          2. Tapping the button logs the user out and redirects them to the login page.
          3. User session data is cleared upon logout to ensure secure access.
      **Story Points:** 1


**H : user stories for change settings**
   **1.**
      **Title:**
          As a user, I want to access a settings menu from any screen so that I can adjust preferences at my convenience.
      **Acceptance Criteria:**
          1. Example: A meditation app includes a settings icon in the top right corner of all screens, linking to the settings menu.
          2. Why: Easy accessibility encourages users to explore and customize their app experience.
      **Story Points:** 1

    **2.**
      **Title:**
          As a user, I want to see categorized sections in the settings menu so that I can quickly find the options I need.
      **Acceptance Criteria:**
          1. Example: A fitness app groups settings into categories like Profile, Notifications, and Data Sync.
          2. Why: Logical organization reduces user effort and enhances navigation.
      **Story Points:** 1

    **3.**
      **Title:**
          As an admin, I want to enable or disable certain settings for users so that I can maintain app security and compliance.
      **Acceptance Criteria:**
          1. Example: An admin dashboard includes toggles for restricting user access to sensitive settings.
          2. Why: This ensures user settings comply with company policies.
      **Story Points:** 1


**I : user stories for the add to Integrate Persistent Data**
    **1.**
      **Title:**
          As a user, I want my data like login state to persist across sessions so that I don't need to re-enter details every time.
      **Acceptance Criteria:**
          1. Example: A banking app automatically logs in verified users unless they log out manually.
          2. Why: Saves time and provides seamless access.
      **Story Points:** 1

  **2.**
      **Title:**
          As a user, I want to save my preferences such as dark mode so that the app remembers my settings.
      **Acceptance Criteria:**
          1. Example: A news app remembers the user's preferred language and font size across sessions.
          2. Why: Improves accessibility and user satisfaction.
      **Story Points:** 1

  **3.**
      **Title:**
          As an admin, I want user activity logs to persist so that I can track and analyze trends over time.
      **Acceptance Criteria:**
          1. Example: An educational app stores quiz performance to generate progress reports.
          2. Why: Enables long-term data analysis and user retention strategies.
      **Story Points:** 1




**J : user stories for the add to Integrate External API**
    **1.**
      **Title:**
          As a user, I want to view real-time weather updates on the home screen so that I can plan my day effectively.
      **Acceptance Criteria:**
          1. Example: A fitness app integrates a weather API to display whether it's sunny or rainy, helping users decide if they should work out indoors or outdoors.
          2. Why: This provides users with relevant external data, improving app value.
      **Story Points:** 1

  **2.**
      **Title:**
          As a user, I want to see live currency conversion rates when making purchases so that I can make informed financial decisions.
      **Acceptance Criteria:**
          1. Example: An e-commerce app uses a currency exchange API to display product prices in the user's preferred currency.
          2. Why: This creates a personalized and convenient experience.
      **Story Points:** 1

  **3.**
      **Title:**
          As a user, I want to see nearby restaurants on a map so that I can choose a dining location conveniently.
      **Acceptance Criteria:**
          1. Example: A food delivery app integrates Google Maps API to display restaurants near the user's location.
          2. Why: This enhances user navigation and helps users make better choices.
      **Story Points:** 1


**K : user stories for change settings**
   **1.**
      **Title:**
          As a user, I want to enable dark mode in the settings screen so that I can reduce eye strain during nighttime usage.
      **Acceptance Criteria:**
          1. Example: A reading app offers a toggle for dark mode under the Appearance section of the settings screen.
          2. Why: Improves accessibility and user comfort.
      **Story Points:** 1

    **2.**
      **Title:**
          As a user, I want to adjust notification preferences so that I only receive alerts relevant to me.
      **Acceptance Criteria:**
          1. Example: A news app allows users to turn on notifications for specific categories, like sports or finance.
          2. Why: Personalized notifications prevent annoyance and keep users engaged.
      **Story Points:** 1

    **3.**
      **Title:**
          As a user, I want to update my email and password on the settings screen so that I can keep my account secure.
      **Acceptance Criteria:**
          1. Example: A social media app includes an Account Settings section for users to update credentials.
          2. Why: Ensures security and user satisfaction.
      **Story Points:** 1



**J : user stories for the add to Implement Notifications**
    **1.**
      **Title:**
          As a user, I want to view real-time weather updates on the home screen so that I can plan my day effectively.
      **Acceptance Criteria:**
          1. Example: A fitness app integrates a weather API to display whether it's sunny or rainy, helping users decide if they should work out indoors or outdoors.
          2. Why: This provides users with relevant external data, improving app value.
      **Story Points:** 1

  **2.**
      **Title:**
          As a user, I want to see live currency conversion rates when making purchases so that I can make informed financial decisions.
      **Acceptance Criteria:**
          1. Example: An e-commerce app uses a currency exchange API to display product prices in the user's preferred currency.
          2. Why: This creates a personalized and convenient experience.
      **Story Points:** 1

  **3.**
      **Title:**
          As a user, I want to see nearby restaurants on a map so that I can choose a dining location conveniently.
      **Acceptance Criteria:**
          1. Example: A food delivery app integrates Google Maps API to display restaurants near the user's location.
          2. Why: This enhances user navigation and helps users make better choices.
      **Story Points:** 1




