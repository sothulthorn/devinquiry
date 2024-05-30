# Dev Inquiry

![](/screenshot/home.png)

A community-driven plateform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.

## Technologies Used

<details>
  <summary>DevOverflow is built using the following technologies:</summary>

- **TypeScript**: TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- **Next.js**: Next.js is a React framework for building server-side rendered and statically generated web applications.
- **Tailwind CSS**: Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.
- **Clerk**: Clerk is a developer-first authentication API that handles all the logic for user sign up, sign in, and more.
- **Shadcn-UI**: Shadcn UI is a React UI library that helps developers rapidly build modern web applications.
- **TinyMCE**: TinyMCE is the world's most popular JavaScript library for rich text editing.
- **MongoDB**: MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.
- **Mongoose**: Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
- **Prism.js**: Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind.
- **Query String**: Parse and stringify URL query strings.
- **Svix**: Svix is a webhook proxy that allows you to receive webhooks locally.
- **Zod**: Zod is a TypeScript-first schema declaration and validation library.
- **Vercel**: Vercel is a cloud platform for frontend developers, providing the frameworks, workflows, and infrastructure to build a faster, more personalized Web.

</details>

## Getting Started

Follow these steps to set up the project locally on your machine:

### Prerequisites

Make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/)
- [NPM](https://docs.npmjs.com/getting-started)
- [Git](https://git-scm.com/downloads)

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/sothulthorn/devinquiry.git
```

2. Create a `.env` file:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY=YOUR_CLERK_SECRET_KEY

NEXT_PUBLIC_CLERK_SIGN_IN_URL=YOUR_NEXT_PUBLIC_CLERK_SIGN_IN_URL
NEXT_PUBLIC_CLERK_SIGN_UP_URL=YOUR_NEXT_PUBLIC_CLERK_SIGN_UP_URL
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=YOUR_NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=YOUR_NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL

NEXT_CLERK_WEBHOOK_SECRET=YOUR_NEXT_CLERK_WEBHOOK_SECRET

NEXT_PUBLIC_TINY_EDITOR_API_KEY=YOUR_NEXT_PUBLIC_TINY_EDITOR_API_KEY

MONGODB_URL=YOUR_MONGODB_URL

NEXT_PUBLIC_SERVER_URL=YOUR_NEXT_PUBLIC_SERVER_URL
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
```

4. Install dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm run dev
```

### Usage

Visit `http://localhost:3000/` in your browser to access the full application.

## Project Preview

### Home

![](/screenshot/home.png)

### Signup

![](/screenshot/sign-up.png)

### Signin

![](/screenshot/sign-in.png)

### Community

![](/screenshot/community.png)

### Collections

![](/screenshot/collections.png)

### Profile

![](/screenshot/profile.png)

### Ask a Question

![](/screenshot/ask-a-question.png)

### Question and Answer

![](/screenshot/question-answer.png)
