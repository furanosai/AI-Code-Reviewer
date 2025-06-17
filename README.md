## 🧠 AI Code Reviewer

An AI-integrated web project that reviews your code for better and faster development. Powered by Google Gemini AI, this tool analyzes your code in real-time and gives helpful suggestions—all within a smooth, developer-friendly UI.

🔗 [Live Demo](https://my-ai-codereviewer.vercel.app/)


## 🚀 Tech Stack
- Frontend : Next.js 15, React.js, Tailwind CSS, Shadcn UI
- Editor : Custom Markdown editor with Prism.js & Rehype Highlight
-	AI Integration : Google Gemini AI API
-	Utilities : Axios, Markdown Parsing
-	Deployment : Vercel


## 📦 Features
-	Real-time AI code analysis using Google Gemini AI
-	Built-in markdown editor with syntax highlighting
-	Sleek, responsive UI using Tailwind CSS + Shadcn UI
-	Token-based prompt handling for reviewing specific parts of code
-	Fully deployed and optimized for web via Vercel

## 🛠 Getting Started

To run this project locally :

```bash
git clone https://github.com/your-username/ai-code-reviewer.git
cd ai-code-reviewer
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.


## 🗂️ Important Folder Structure

```bash
├── app               # Contains Next.js App Router pages & logic
├── components        # Reusable UI components (Editor, Buttons, Layouts)
├── lib               # Utilities, helper functions, and Gemini API integration
├── public            # Static assets (icons, favicons, etc.)
├── .gitignore        # Git ignore rules
├── README.md         # Project documentation
├── components.json   # Component configuration
├── eslint.config.mjs # ESLint configuration
├── jsconfig.json     # JavaScript path aliasing
├── next.config.mjs   # Next.js configuration
├── package.json      # Project dependencies & scripts
├── package-lock.json # Lock file for dependencies
├── postcss.config.mjs# PostCSS configuration (for TailwindCSS)
```


## 🧠 AI Integration

Integrated with Google Gemini AI API, this tool takes your code input and returns structured suggestions and improvements. Useful for beginners, students, or anyone looking for AI-based feedback while coding.


## 🧪 Want to Learn More ?
-	[Next.js Documentation](https://nextjs.org/docs)
-	[Shadcn UI](https://ui.shadcn.com/)
-	[Tailwind CSS Docs](https://tailwindcss.com/)
-	[Google Gemini AI](https://deepmind.google/technologies/gemini/)


## 📤 Deploy Your Own

You can easily deploy it using Vercel in just a few steps :


## 🚀 Steps to Deploy on Vercel

1.	Push the project to GitHub
  -	Make sure your code is committed and pushed to a GitHub repository.
2.	Login to Vercel
  -	Go to vercel.com and sign in with GitHub.
3.	Import your GitHub Repository
	-	Click on + New Project → Import Git Repository.
	-	Select the Stock-Manager repo from the list.
4.	Configure Environment Variables
	-	Add your environment variables during the setup:

```bash
MONGODB_URI=your_mongodb_connection_string
```

5.	Choose Framework Preset
	-	Vercel will auto-detect the Next.js framework. Leave the default settings unless custom.
6.	Deploy
	-	Click Deploy and wait for Vercel to build and deploy your app.
	-	Once done, you’ll get a live URL like:

```bash
https://your-project-name.vercel.app
```

7.	Post-Deployment
	-	Optionally, go to your project settings on Vercel and :
	-	Set up a custom domain.
	-	Configure automatic re-deployment on GitHub pushes.
	-	Enable serverless function logs and analytics.

🔗 Vercel Docs - [Getting Started](https://vercel.com/docs/getting-started-with-vercel)


## 📫 Connect

Built with ❤️‍🩹 by Vinayak Gore

For queries or feedback, feel free to connect : [@vinayakgore.vercel.app](https://vinayakgore.vercel.app)

Let me know if you’d like a badge section, GIF demo preview, or GitHub stats added as well !


💻 Happy coding ! 🎉

⌲ Design.Implement.Inspire
