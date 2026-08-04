// Central place for placeholder identity/contact info used across the site.
// Replace these values with your real details.
export const site = {
  name: 'Jordan Rivera',
  role: 'Data Scientist & Analytics Engineer',
  tagline: 'Turning messy data into decisions people actually trust.',
  pitch:
    "I'm a data scientist who likes projects that end in a decision, not just a chart. My focus is machine learning, forecasting, and building analytics that non-technical teams can actually use.",
  location: 'Copenhagen, Denmark',
  email: 'jordan.rivera@example.com',
  resumeFile: `${import.meta.env.BASE_URL}resume/resume-placeholder.pdf`,
  social: {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
    email: 'mailto:jordan.rivera@example.com',
  },
  // Set to a real Formspree endpoint (https://formspree.io) to make the contact form work.
  // Example: 'https://formspree.io/f/abcdwxyz'
  formspreeEndpoint: '',
}
