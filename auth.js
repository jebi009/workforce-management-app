const SUPABASE_URL =
  "https://gmnawryahwunceheeohe.supabase.co/";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtbmF3cnlhaHd1bmNlaGVlb2hlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3OTcwNTQsImV4cCI6MjA5NDM3MzA1NH0.6DlHV6hpYdPQoPOifSoBbfUKpkZzDHKqrarF53CPLEw";

const client = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function registerUser() {

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  const role =
    document.getElementById("role").value;

  const { data, error } =
    await client.auth.signUp({
      email,
      password
    });

  if (error) {
    alert(error.message);
    return;
  }

  localStorage.setItem("role", role);

  alert("Account Created Successfully");
}

async function loginUser() {

  const email =
    document.getElementById("loginEmail").value;

  const password =
    document.getElementById("loginPassword").value;

  const role =
    document.getElementById("loginRole").value;

  const { data, error } =
    await client.auth.signInWithPassword({
      email,
      password
    });

  if (error) {
    alert(error.message);
    return;
  }

  if (role === "Employer") {
    window.location.href =
      "employer-dashboard.html";
  }
  else {
    window.location.href =
      "employee-dashboard.html";
  }
}