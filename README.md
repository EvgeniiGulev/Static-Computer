# Computer Portfolio

## My Computer Styled Portfolio

Welcome to the Computer Portfolio, a dynamic showcase styled like a computer desktop. This GitHub project is designed to present your digital presence in a unique and engaging way.

## A Dynamic Computer-Styled Showcase

Welcome to PowerUp Portfolio, where your digital presence gets a sleek upgrade! This GitHub project is more than just a typical portfolio – it's a virtual computer experience designed to impress.

At the heart of PowerUp Portfolio lies a unique feature: a power button that illuminates your screen, inviting visitors to explore your professional journey. Once activated, users are greeted with an intuitive interface, resembling a computer desktop, offering seamless navigation to the About, Projects, and Contact pages.

The About page provides a glimpse into your background and expertise, while the Projects page showcases your finest works, complete with external links for further exploration. And when visitors are ready to connect, the Contact page offers a convenient form powered by EmailJS, ensuring that messages are sent swiftly and securely.

Crafted with attention to detail and a focus on user experience, PowerUp Portfolio is not just a portfolio – it's a digital masterpiece that elevates your online presence to new heights. Explore the future of personal branding with PowerUp Portfolio today!

## Requirements

To run this project locally, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) (including npm)
- [Vite](https://vitejs.dev/)

And the following Node.js modules:

- [emailjs](https://www.npmjs.com/package/emailjs)
- [typewriter-effect](https://www.npmjs.com/package/typewriter-effect)
- [@react-three/drei](https://www.npmjs.com/package/@react-three/drei)
- [@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber)
- [tailwindcss](https://www.npmjs.com/package/tailwindcss)

## How to Install and Run

1. Clone this repository to your local machine using `git clone https://github.com/your-username/your-repository.git`
2. Navigate to the project directory: `cd your-repository`
3. Install the required dependencies: `npm install`
4. Add a `.env.local` file for all the EmailJS keys. This file should include the following keys:
   ```env
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_APP_EMAILJS_USER_ID=your_user_id
   ```
5. For development, run: `npm run dev`
6. For the final version, run: `npm run build`
7. Open your web browser and navigate to `http://localhost:5173` to view the portfolio.

**Note:** This project is not optimized for devices with a width less than 768 pixels.
