import React from "react";

export default function App() {
  return (
    <>
      <style>{`
        /* RESET */
        html, body, #root {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          background: #ffffff;
        }

        * {
          box-sizing: border-box;
          font-family: Inter, system-ui, sans-serif;
        }

        /* PAGE */
        .page {
          min-height: 100vh;
          background: #ffffff;
          display: flex;
          flex-direction: column;
        }

        /* HEADER */
        .header {
          padding: 72px 20px;
          text-align: center;
          background: linear-gradient(135deg, #38bdf8, #6366f1, #8b5cf6);
        }

        .header h1 {
          font-size: 52px;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .header p {
          font-size: 18px;
          color: #eef2ff;
          max-width: 780px;
          margin: 0 auto;
        }

        /* CONTENT */
        .content {
          flex: 1;
          width: 100%;
          padding: 48px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 48px;
          background: #ffffff;
        }

        /* CARD */
        .card {
          width: 100%;
          max-width: 1200px;
          background: #ffffff;
          border-radius: 28px;
          padding: 64px;
          box-shadow: 0 28px 60px rgba(0, 0, 0, 0.08);
          border-top: 8px solid;
          border-image: linear-gradient(
            90deg,
            #38bdf8,
            #6366f1,
            #8b5cf6
          ) 1;
        }

        .badge {
          display: inline-block;
          padding: 10px 26px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 800;
          color: #ffffff;
          background: linear-gradient(
            90deg,
            #38bdf8,
            #6366f1,
            #8b5cf6
          );
          margin-bottom: 22px;
        }

        .card h2 {
          font-size: 36px;
          font-weight: 800;
          color: #111827;
          margin-bottom: 16px;
        }

        .card p {
          font-size: 20px;
          color: #4b5563;
          margin-bottom: 28px;
          max-width: 900px;
        }

        .card ul {
          list-style: none;
          display: grid;
          gap: 18px;
          padding: 0;
          margin: 0;
        }

        .card li {
          font-size: 20px;
          color: #1f2937;
          display: flex;
          align-items: center;
        }

        .card li::before {
          content: "✔";
          margin-right: 14px;
          color: #3b82f6;
          font-weight: bold;
        }

        /* FOOTER */
        .footer {
          text-align: center;
          padding: 28px 20px;
          font-size: 14px;
          color: #6b7280;
          border-top: 1px solid #e5e7eb;
          background: #ffffff;
        }
      `}</style>

      <div className="page">
        {/* HEADER */}
        <header className="header">
          <h1>React App Deployment on AWS</h1>
          <p>
            Complete production-ready guide to deploy React applications on AWS
            using GitHub Actions CI/CD
          </p>
        </header>

        {/* CONTENT */}
        <main className="content">
          <section className="card">
            <span className="badge">Step 1</span>
            <h2>Create React Application</h2>
            <p>Initialize a modern React application using Vite.</p>
            <ul>
              <li>Install Node.js LTS</li>
              <li>Create app using Vite</li>
              <li>Run app on local server</li>
            </ul>
          </section>

          <section className="card">
            <span className="badge">Step 2</span>
            <h2>Push Code to GitHub</h2>
            <p>Manage source code using GitHub.</p>
            <ul>
              <li>Initialize git repository</li>
              <li>Create GitHub repository</li>
              <li>Push code to main branch</li>
            </ul>
          </section>

          <section className="card">
            <span className="badge">Step 3</span>
            <h2>AWS S3 Setup</h2>
            <p>Host your React app as a static website.</p>
            <ul>
              <li>Create S3 bucket</li>
              <li>Enable static website hosting</li>
              <li>Allow public access</li>
            </ul>
          </section>

          <section className="card">
            <span className="badge">Step 4</span>
            <h2>GitHub Actions CI/CD</h2>
            <p>Automate build and deployment.</p>
            <ul>
              <li>Create workflow file</li>
              <li>Build React app</li>
              <li>Deploy to AWS S3</li>
            </ul>
          </section>

          <section className="card">
            <span className="badge">Step 5</span>
            <h2>Production & Domain</h2>
            <p>Make your app production ready.</p>
            <ul>
              <li>Configure CloudFront</li>
              <li>Enable HTTPS</li>
              <li>Attach custom domain</li>
            </ul>
          </section>
        </main>

        <footer className="footer">
          © 2026 • React • AWS • GitHub Actions
        </footer>
      </div>
    </>
  );
}

