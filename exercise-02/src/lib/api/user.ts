// src/lib/api/user.ts
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

export async function fetchUserProfile(): Promise<UserProfile> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock data
  return {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrator",
    avatar: "/avatar.jpg"
  };
}