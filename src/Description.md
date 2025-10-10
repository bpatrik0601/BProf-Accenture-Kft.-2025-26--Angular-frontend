## ⚽ Football Dashboard — Angular Frontend Overview

### 📘 Project Summary

This **Angular-based frontend** serves as the visualization layer for a football statistics dashboard.
It retrieves live football match data from a public API (e.g., SofaScore) and displays key metrics such as goals, shots, and ball possession.
The dashboard dynamically updates its UI colors based on the match state:

* 🟢 Green background → when the favorite team is winning
* 🔴 Red background → when the team is losing

This initialized project can be later connected to the **Java + Playwright** backend for automated testing, CI pipelines, and API validation.

---

### 🧩 Project Structure

```
src/
│
├── app/
│   ├── components/
│   │   └── dashboard/
│   │       ├── dashboard.component.ts      # Main UI logic for live match stats
│   │       ├── dashboard.component.html    # Template (layout) for data display
│   │       └── dashboard.component.css     # Visual styling of the dashboard
│   │
│   ├── services/
│   │   └── football.service.ts             # Handles API calls and data fetching
│   │
│   ├── app.component.ts                    # Root component (embeds the dashboard)
│   ├── app.component.html                  # Entry template rendering <app-dashboard>
│   ├── app.component.css                   # Basic root-level styles
│   ├── app.config.ts
|   ├── app.routes.ts
│   └── app.spec.ts
|
├── index.html                              # Root HTML file loaded by the browser
├── styles.css                              # Global CSS (applied across all components)
├── main.ts                                 # App starts here (bootstrapApplication)
└── Description.md                          # This file
```

---

### ⚙️ Component Breakdown

#### 🧠 `DashboardComponent`

* Fetches and displays **live match data**.
* Uses Angular’s built-in directives like `*ngIf`, `*ngFor`, and `ngStyle` for dynamic rendering.
* Updates background color according to match status.
* Can be extended to include AI-powered predictions (e.g., win probability).

#### 🌐 `FootballService`

* A dedicated **Angular service** that manages HTTP requests.
* Communicates with the SofaScore (or similar) public API.
* Returns structured match data to the `DashboardComponent` for rendering.

#### 🏠 `AppComponent`

* The **root component** of the application.
* Acts as a container for the dashboard and other potential modules (like settings or history).
* Bootstraps the Angular app and renders `<app-dashboard>`.

---

### 🚀 Future Integrations

* **Playwright (Java)** → for automated UI & API testing
* **Jenkins CI/CD** → for continuous integration and report generation
* **AI Predictions** → using live match data to estimate future outcomes
* **Expandable UI** → to include multiple teams, leagues, or historical stats

---

### 🧭 How to Run the Project

```bash
# Install dependencies
npm install

# Start the Angular development server
ng serve

# Open in browser
http://localhost:4200
```

---
