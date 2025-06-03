# 🌐 Lexify

**Lexify** is a modern, open-source, AI-powered translation app that helps you break language barriers with ease. Translate text, documents, and even website homepages—all in a beautiful, intuitive interface.

---

## ✨ Features

- **Instant Text Translation:**  
  Translate between popular languages with a single click.

- **Speech Recognition:**  
  Speak and transcribe directly into the app using your microphone.

- **Text-to-Speech:**  
  Listen to translations in your targeted language.

- **File Upload:**  
  Upload `.rtf` files and instantly extract and translate their content.

- **Website Translation:**  
  Paste a website URL and translate the homepage content.

- **Favorites & Feedback:**  
  Save favorite translations and provide feedback with like/dislike.

- **Responsive & Accessible:**  
  Fully responsive design for mobile and desktop, with accessible controls.

- **Beautiful UI:**  
  Clean, dark-mode-friendly interface powered by Tailwind CSS and Tabler Icons.

---

## 🚀 Getting Started (step by step)

### 1. Clone the repository

```sh
git clone https://github.com/Chirantan2002/Lexify.git
cd lexify
```
### 2. Installing All Dependencies from a Text File

All required package names are listed in `packages-to-install.txt`.

### On Linux & macOS (or Git Bash on Windows)

```sh
xargs -a packages-to-install.txt npm install
```

<h3>Or with yarn:</h3>

```sh
xargs -a packages-to-install.txt yarn add
```

<h3>On Windows(Command Prompt):</h3>

```sh
for /f %i in (packages-to-install.txt) do npm install %i
```

<h3>On Windows(Command Prompt) with yarn:</h3>

```sh
for /f %i in (packages-to-install.txt) do yarn add %i
```

<h3>On Windows(PowerShell):</h3>

```sh
Get-Content packages-to-install.txt | ForEach-Object { npm install $_ }
```

<h3>On Windows(PowerShell) with yarn:</h3>

```sh
Get-Content packages-to-install.txt | ForEach-Object { yarn add $_ }
```

<h3>Tip:</h3>
Make sure you are in your project directory before running these commands!<br>
<strong>You will need OpenAI API Key(your own) to use this project ;)</strong>


## 3. Install dependencies
```sh
npm install
```
# or
```sh
yarn install
```
<hr>

## 🛠️ Project Structure
<div>
<div>lingua-app/</div>
<div>├── src/</div>
<div>│ &nbsp; ├── app/ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;# Main Next.js app pages and layout</div>
<div>│ &nbsp; ├── components/ &nbsp; &nbsp; &nbsp; &nbsp; # Reusable UI components (Inputs, Buttons, SpeechRecognition, etc.)</div>
<div>│ &nbsp; ├── hooks/ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;# Custom React hooks (e.g., useTranslate)</div>
<div>│ &nbsp; ├── lib/ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;# Utility functions (e.g., cn, rtfToText)</div>
<div>│ &nbsp; └── styles/ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; # Global styles and Tailwind config</div>
<div>├── public/ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; # Static assets</div>
<div>├──</div>
<div>└── ...</div>
</div>
<hr>

## 🧩 Tech Stack
<ol>
<li> Next.js (App Router)</li>
<li> React (with hooks)</li>
<li> Tailwind CSS (utility-first styling)</li>
<li> Tabler Icons (beautiful icon set)</li>
<li> React Toastify (toast notifications)</li>
<li> SpeechRecognition API (browser-based speech-to-text)</li>
<li> TypeScript (type safety)</li>
</ol>
<hr>

## 🌍 Supported Languages
<ol>
<li> Bengali</li>
<li> Chinese</li>
<li> Hindi</li>
<li> English</li>
<li> Spanish</li>
<li> French</li>
<li> German</li>
</ol>
<hr>

## 🤝 Contributing
Contributions are welcome!
Feel free to open issues, submit pull requests, or suggest new features.
<ol>
<li> Fork the repo</li>
<li> Create your feature branch (git checkout -b feature/your-feature)</li>
<li> Commit your changes (git commit -m 'Add some feature')</li>
<li> Push to the branch (git push origin feature/your-feature)</li>
<li> Open a pull request</li>
</ol>
<hr>

### 📄 License
MIT License
<hr>

### 💡 Inspiration
Lexify was built to make translation accessible, fast, and delightful for everyone—whether you’re a student, traveler, or global communicator.

Lexify: Bridging Voices, Connecting Worlds.
<hr>