const supabase = supabase.createClient(
  'https://yzyjycqvgndhgwgzbmbo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6eWp5Y3F2Z25kaGd3Z3pibWJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MjQ0NTYsImV4cCI6MjA2ODEwMDQ1Nn0._hvPIEou6cNITbL9TlxBX5K0ikwcrvdrPwxlFpk7QWQ'
);

// LOGIN
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      alert('Login failed: ' + error.message);
    } else if (!data.session) {
      alert('You must confirm your email first.');
    } else {
      window.location.href = 'dashboard.html';
    }
  });
}

// SIGNUP
const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      alert("Signup failed: " + error.message);
    } else {
      alert("Check your email to confirm your account.");
      window.location.href = 'login.html';
    }
  });
}
