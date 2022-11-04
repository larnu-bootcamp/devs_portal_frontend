import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "whatwg-fetch";

const userMock = [
  {
    name: "Camila Isadora Valenzuela Fierro",
    profession: "FullStack Developer",
    email: "cami.valenzuela@uc.cl",
    city: "Santiago",
    country: "Chile",
    linkedin: "https://www.linkedin.com/in/camila-isadora-valenzuela-fierro/",
    github: "https://github.com/isavalenzuela",
    portafolio: "https://react-final-pi.vercel.app/",
    photo: "https://avatars.githubusercontent.com/u/73500613?v=4",
    description: "Soy una estudiante de LarnU, me gusta el diseño y la programación, me gusta aprender cosas nuevas y me gusta mucho el café",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "PostgreSQL",
      "Git",
      "GitHub"
    ]
  }, {
    name: "César Rivera",
    profession: "FullStack Developer",
    email: "riveramirandac@gmail.com",
    city: "Muisne",
    country: "Ecuador",
    linkedin: "https://www.linkedin.com/in/c%C3%A9sar-rivera316/",
    github: "",
    portafolio: "https://react-final-pi.vercel.app/",
    photo: "https://avatars.githubusercontent.com/u/77915616?v=4",
    description: "Soy una estudiante de LarnU, me gusta el diseño y la programación, me gusta aprender cosas nuevas y me gusta mucho el café",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "PostgreSQL",
      "Git",
      "GitHub"
    ]
  }
]

export const restHandlers = [
  rest.get("/src/components/StudentCard/api/students.json", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userMock));
  })
];
const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());