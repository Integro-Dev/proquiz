// script/auth.js

// Initialize Supabase client globally
const SUPABASE_URL = 'https://yzyjycqvgndhgwgzbmbo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6eWp5Y3F2Z25kaGd3Z3pibWJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MjQ0NTYsImV4cCI6MjA2ODEwMDQ1Nn0._hvPIEou6cNITbL9TlxBX5K0ikwcrvdrPwxlFpk7QWQ'; 
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// --- Authentication Functions ---

/**
 * Handles user login.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 */
async function loginUser(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    console.error('Login failed:', error.message);
    alert('Login failed: ' + error.message); // This alert should now appear on failure
  } else if (!data.session) {
    // If data.session is null, it means the user's email is not confirmed
    alert('Your email is not confirmed. Please check your inbox for a confirmation link.'); // This alert should appear
    // No redirection here, user stays on login to re-attempt after confirming email
  } else {
    // Successfully logged in and session is valid
    console.log('User logged in:', data.user);
    window.location.href = 'dashboard.html'; // Redirect to dashboard
  }
}

/**
 * Handles user signup.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 */
async function signupUser(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    console.error('Signup failed:', error.message);
    alert('Signup failed: ' + error.message); // This alert should now appear on failure
  } else {
    console.log('Signup successful. User needs to confirm email:', data.user);
    alert('Account created! Please check your email to confirm your account before logging in.'); // This alert should appear
    window.location.href = 'login.html'; // Redirect to login after signup
  }
}

/**
 * Logs out the current user.
 */
async function logoutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Logout failed:', error.message);
    alert('Logout failed: ' + error.message);
  } else {
    console.log('User logged out successfully.');
    window.location.href = 'login.html'; // Redirect to login page after logout
  }
}

/**
 * Checks if a user is currently authenticated.
 * If not authenticated, redirects to the login page.
 * @param {string} redirectPath - The path to redirect to if not authenticated (e.g., 'login.html').
 */
async function checkAuthAndRedirect(redirectPath = 'login.html') {
  const { data: { session }, error } = await supabase.auth.getSession();

  if (error) {
    console.error('Error fetching session:', error.message);
    alert('Error checking login status. Please try again.');
    window.location.href = redirectPath;
  } else if (!session) {
    // No active session, redirect
    console.log('No active session found, redirecting to login.');
    window.location.href = redirectPath;
  }
  // If session exists, do nothing (allow page to load)
}

// --- Event Listeners (attached once DOM is ready) ---
document.addEventListener('DOMContentLoaded', () => {
  // Attach event listener for Login Form
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent default form submission (page reload)
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      loginUser(email, password);
    });
  }

  // Attach event listener for Signup Form
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent default form submission (page reload)
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;
      signupUser(email, password);
    });
  }

  // Attach event listener for Logout button (assuming it has an ID 'logout-button' in dashboard.html)
  const logoutButton = document.getElementById('logout-button');
  if (logoutButton) {
    logoutButton.addEventListener('click', logoutUser);
  }
});

// Expose logoutUser globally for backward compatibility if needed, though event listener is preferred.
// window.logout = logoutUser;