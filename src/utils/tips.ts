export const tips = [
  "Check out the upcoming contests on Helix",
  "Read about Markdown to format your posts",
  "Did you know we have a live shader editor? Try it at /code-runner/canvas",
  "You can learn the basics of programming right here, on Helix",
  "Did you know you can upload and share images on Helix?",
  "Helix is fully free and open source!",
  "Our code execution engine is called Exec, you can find it on GitHub",
];

export const getRandomTip = () => {
  const index = Math.floor(Math.random() * tips.length);
  return tips[index];
};
