export const loginUser = async (
    username: string,
    password: string
  ): Promise<{ token: string }> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
  
    const responseData = await response.json();
  
    if (!response.ok) {
      throw new Error(responseData.message || "Failed to log in");
    }
  
    return responseData;
  };
  
  export const signupUser = async (
    username: string,
    email: string,
    password: string
  ): Promise<{ token: string }> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to sign up");
    }
  
    const data = await response.json();
    return data;
  };
  