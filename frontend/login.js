// Assuming you have a base URL for your authentication API
const baseUrl = 'https://your-auth-api-url.com';

// Function to perform login
async function login(username, password) {
  try {
    const response = await fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Successful login
      const { token } = data;
      localStorage.setItem('token', token); // Store the token in local storage or a secure storage method
      return { success: true, message: 'Login successful' };
    } else {
      // Failed login
      return { success: false, message: data.message || 'Login failed' };
    }
  } catch (error) {
    console.error('Error during login:', error);
    return { success: false, message: 'An error occurred during login' };
  }
}

// Example usage:
// const loginResult = await login('yourUsername', 'yourPassword');
// console.log(loginResult);

// After a successful login, you can redirect to the course page or perform other actions
