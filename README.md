# Front-end Assignment - MathonGo

This is the implementation of the sample task for Frontend Development required by MathonGo

#### TechStack used:

[![My Skills](https://skillicons.dev/icons?i=nextjs,tailwind,ts,nodejs)](https://skillicons.dev)

## Local Code Setup

**Clone the GitHub repository**

```bash
git clone https://github.com/harshu0001/Frontend-assignment.git
```

**Installing dependencies**

```bash
npm install
```

## Usage
**Run the following command in the terminal**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
**Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.**

### Deployed Link
The project is deployed on Vercel and can be found [here](https://frontend-assignment-three-delta.vercel.app/).

## Features

* Tabs for Physics, Chemistry, Mathematics
* Filters: Class, Units, Status, Weak Chapters
* Sorting toggle
* List of chapters with data-driven stats from the provided JSON
* Responsiveness for mobile & desktop
* Light/Dark mode switch (system preferred)
* The "Weak Chapters" toggle filters the list (mock logic)
* ***Updated Feature:*** Instead of just adding a "Not Started" filter, added a Status filter that can be used to filter out chapters based on whether the chapter has been **Started**, **In Progress**, or **Completed**. By Default, it shows **All** chapters.
* Count update on filters
* Icons & indicators (e.g., up/down arrow in green/red)
* Based on the data, find the list of unique Classes & Units for that particular subject and * show them in the dropdown filter.
* Values inside the Classes & Units (dropdown) are multi-selectable.
* Multiple filters can be selected at once.

## Images
#### Landing Page (default - Physics)
![Screenshot 2025-06-06 171539](https://github.com/user-attachments/assets/1c65b72a-5769-4e81-9b42-834ff0d2fa53)

#### Chemistry (It also depicts mode toggle (light/dark/system)
![Screenshot 2025-06-06 171558](https://github.com/user-attachments/assets/b195716e-83bc-429a-b377-641b0ba26599)

#### Mathematics:
![Screenshot 2025-06-06 171618](https://github.com/user-attachments/assets/80a4161c-509f-4533-ba17-c1b7e122a77a)


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
