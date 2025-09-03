# 💰 FinWealth  

> A modern personal finance management app — built with **Next.js 15, Clerk, Prisma, and Arcjet** — that helps you take control of your money.  

![FinWealth Dashboard Preview](/preview/3.png)  

---

## ✨ What is FinWealth?

FinWealth is a **next-gen financial dashboard** that lets you securely manage your accounts, track transactions, and visualize spending patterns.  

It’s not just a budgeting app — it’s a **personal wealth companion**, with **bot protection, secure authentication, automated workflows, and rich analytics**.  

---

## 🚀 Features

- 🔐 **Secure Auth** — Powered by [Clerk](https://clerk.com/) for login, signup, and session management.  
- 🛡 **Arcjet Shield** — Middleware protection against malicious traffic and bots.  
- 📊 **Data Visualization** — Interactive charts with [Recharts](https://recharts.org/).  
- 📅 **Smart Transaction Management** — Add, view, and track your transactions in real-time.  
- ✉️ **Email Notifications** — Built with [React Email](https://react.email/) for reminders and alerts.  
- ⚡ **Edge-Ready** — Optimized with Vercel & Next.js middleware for speed.  
- 🎨 **Modern UI/UX** — Styled with TailwindCSS + Radix UI, responsive on all devices.  
- 🛠 **Developer-Friendly** — Prisma ORM + PostgreSQL for robust data persistence.  

---

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | **Next.js 15 (App Router, Turbopack)** |
| Frontend | React 18 (downgraded for package compatibility), TailwindCSS, Radix UI |
| Auth | Clerk |
| Security | Arcjet (Shield + Bot Detection) |
| DB | Prisma ORM + PostgreSQL (or SQLite for dev) |
| Visualization | Recharts |
| Workflows | Inngest |
| Email | React Email, Resend |

---

## Screenshots

![Screenshot 1](/preview/3.png)  
![Screenshot 2](/preview/2.png)  
![Screenshot 3](/preview/Screenshot%202025-09-03%20180725.png)  
![Screenshot 4](/preview/4.png)  

---

## ⚡ Getting Started

### 1️⃣ Clone & Install  
```bash
git clone https://github.com/ayu-yishu13/FinWealth_next.git
cd FinWealth_next

# Use React 18 (important for Recharts)
npm uninstall react react-dom
npm install react@18.3.1 react-dom@18.3.1

npm install


```
---

### 2️⃣ Setup Database
```bash 

npx prisma migrate dev

```
---

### 3️⃣ Environment Variables
```bash 

Create .env.local:

DATABASE_URL="postgresql://..."
ARCJET_KEY="your_arcjet_key"

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_key"
CLERK_SECRET_KEY="your_key"

EMAIL_HOST="smtp.example.com"
EMAIL_PORT=587
EMAIL_USER="user@example.com"
EMAIL_PASSWORD="password"
EMAIL_FROM="FinWealth <no-reply@finwealth.com>"

```

### 4️⃣ Run Dev Server
```

npm run dev

Visit 👉 http://localhost:3000

```

## 📊 Project Structure
FinWealth_next/
 ┣ app/               # Next.js App Router pages
 ┣ components/        # Reusable UI components
 ┣ lib/               # Utils (checkUser, auth helpers)
 ┣ prisma/            # Prisma schema & migrations
 ┣ styles/            # Tailwind setup
 ┣ middleware.js      # Arcjet + Clerk middleware
 ┣ package.json
 ┗ README.md


---
### 🚀 Deployment

```

FinWealth is optimized for Vercel.
To deploy:

vercel --prod


Make sure:

React = 18.x

All env vars are set in Vercel Dashboard
```

---

### 🤝 Contributing

Pull requests are welcome. Open an issue first for major changes.
Please make sure to update tests as appropriate.

📜 License
```

MIT © 2025 Ayush Kumar Rai