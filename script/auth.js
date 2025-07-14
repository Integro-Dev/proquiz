// JavaScript Document
const supabase = supabase.createClient(
  'https://yzyjycqvgndhgwgzbmbo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6eWp5Y3F2Z25kaGd3Z3pibWJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MjQ0NTYsImV4cCI6MjA2ODEwMDQ1Nn0._hvPIEou6cNITbL9TlxBX5K0ikwcrvdrPwxlFpk7QWQ'
);

// LOGIN logic
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert('Login failed: ' + error.message);
  } else {
    window.location.href = 'dashboard.html';
  }
});

// SIGNUP logic
document.getElementById('signup-link').addEventListener('click', async () => {
  const email = prompt("Enter your email:");
  const password = prompt("Choose a password:");

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    alert("Signup failed: " + error.message);
  } else {
    alert("Check your email to confirm your account.");
  }
});
