export type InitTicketProps = {
    id : string,
    title : string,
    content: string,
    status : string
}

export const initialTicket = [
  {
    "id": "TKT001",
    "title": "Login Page Loading Issue",
    "content": "Users are experiencing slow loading times on the login page, sometimes up to 10 seconds delay. This occurs on both mobile and desktop browsers.",
    "status": "OPEN" as const
  },
  {
    "id": "TKT002",
    "title": "Payment Gateway Integration",
    "content": "Need to integrate Stripe payment gateway for subscription plans. API keys have been obtained, need implementation in checkout flow.",
    "status": "OPEN" as const
  },
  {
    "id": "TKT003",
    "title": "User Profile Update Bug",
    "content": "When users update their profile picture, the changes are not reflected immediately. Requires page refresh to see updated image.",
    "status": "DONE" as const
  },
  {
    "id": "TKT004",
    "title": "Mobile Responsiveness Fix",
    "content": "Dashboard layout breaks on mobile devices below 375px screen width. Need to adjust CSS media queries and grid layouts.",
    "status": "OPEN" as const
  },
  {
    "id": "TKT005",
    "title": "Email Notification System",
    "content": "Implement email notifications for new user registrations. Should include welcome email and verification link.",
    "status": "DONE" as const
  }
]