// script/auth.js

// Initialize Supabase client globally
const SUPABASE_URL = 'https://yzyjycqvgndhgwgzbmbo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmJhc2UiLCJyZWYiOiJ5enlqemNxdmduZGhnd2d6Ym1ibyIsInyb2xlIjoiYW5vbiIsImlhdCI6MTc1MjUyNDQ1NiwiZXhwIjoyMDY4MTAwNDU2fQ._hvPIEou6cNITbL9TlxBX5K0ikwcrvdrPwxlFpk7QWQ'; // Corrected placeholder for clarity
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
    alert('Login failed: ' + error.message);
  } else if (!data.session) {
    // If data.session is null, it means the user's email is not confirmed
    alert('Your email is not confirmed. Please check your inbox for a confirmation link.');
    window.location.href = 'login.html'; // Keep on login page
  } else {
    // Successfully logged in and session is valid
    console.log('User logged in:', data.user);
    window.location.href = 'dashboard.html';
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
    alert('Signup failed: ' + error.message);
  } else {
    console.log('Signup successful. User needs to confirm email:', data.user);
    alert('Account created! Please check your email to confirm your account before logging in.');
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
    alert('You must be logged in to view this page.');
    window.location.href = redirectPath;
  }