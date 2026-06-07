## Football Dashboard — Angular Frontend

### Project Overview

This **Angular-based frontend** provides a simple football statistics dashboard.
It loads match data from static JSON files and displays key metrics such as goals, shots on target, fouls, and ball possession.
The UI dynamically changes background colors based on match results:
* Green → home team wins
* Red → home team loses
* Yellow → draw

The application serves as the UI layer for a **Java + Playwright** test automation framework and is designed to be stable, deterministic, and easily testable.


---
### Features
- Dynamic match statistics display
- Color‑coded UI based on match outcome
- Routing between dashboard and match details
- Service‑based JSON data loading
- Clean, modular Angular component structure
- Ready for automated UI testing (Playwright + Java)

---

### Project Structure

```
src/
│
├── app/
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── dashboard.component.ts      # Main UI logic for the dashboard page
│   │   │   ├── dashboard.component.html    # Template (layout) for data display
│   │   │   └── dashboard.component.css     # Visual styling of the dashboard
│   │   │
│   │   └── matchdetails/
│   │       ├── matchdetails.component.ts   # Main UI logic for chosen match stats displaying page
│   │       ├── matchdetails.component.html # Template (layout) for chosen match statistics display
│   │       └── matchdetails.component.css  # Visual styling of the chosen match statistics displaying page
│   │   
│   ├── services/
│   │   └── football.service.ts             # Handles JSON files for data fetching
│   │
│   ├── app.component.ts                    # Root component (embeds the dashboard)
│   ├── app.component.html                  # Entry template rendering <app-dashboard>
│   ├── app.component.css                   # Basic root-level styles
│   ├── app.config.ts                       # Application-wide configuration settings (e.g. environment flags, feature toggles, or global constants)
|   ├── app.routes.ts                       # Defines application routes and navigation paths for components
│   └── app.spec.ts                         # Root-level unit tests for the main application component
|
├── index.html                              # Root HTML file loaded by the browser
├── styles.css                              # Global CSS (applied across all components)
├── main.ts                                 # App starts here (bootstrapApplication)
├── assests/                                # Static JSON match data
└── README.md                               # This file
```

---

### Component Overview

#### `DashboardComponent`

* Fetches and displays **live match data**.
* Uses Angular’s built-in directives like `*ngIf`, `*ngFor`, and `ngStyle` for dynamic rendering.
* Updates background color according to match status.
* Can be extended to include AI-powered predictions (e.g., win probability).

#### `MatchDetailsComponent`
* Displays **detailed statistics** for a selected match.
* Accessed via routing from the dashboard -> uses routing parameters.
* Clean separation of UI and logic.

#### `FootballService`

* A dedicated **Angular service** that manages HTTP requests.
* Loads/Fetches static JSON data from assets/ folder.
* Provides/Returns structured match data to the `DashboardComponent` for rendering.
* Centralized data-handling logic.

#### `AppComponent`

* The **root component** of the application.
* Acts as a container for the dashboard and other potential modules (like settings or history) -> hosts the dashboard and other modules.
* Bootstraps the Angular application and renders `<app-dashboard>`.

---

### How to Run the Project

```bash
# Install dependencies
npm install

# Start the Angular development server
ng serve

# Open in browser
http://localhost:4200
```

---

### Build Instructions
```bash
ng build
```
This will compile the Angular application and (build) output the build artifacts to the `dist/` directory. The production build optimizes the application for performance and speed.

---

### Unit Testing
```bash
ng test
```
This command will execute unit tests using the Karma test runner (Runs Karma-based unit tests).

---

### Future Integrations

* **Playwright (Java)** → for automated UI & API testing.
* **GitHub Actions** → for continuous integration and report generation (CI pipeline).
* **Expandable UI** → to include multiple teams, leagues, or historical stats.
* AI-based match prediction or anomaly detection.
* Real-time data updates via WebSockets or polling.