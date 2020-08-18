export const renderTemplate = (text: string, name: string) => {
  return `
  <h1>Meu assunto</h1>
  <p>Meu nome é ${name}.</p>
  <p>${text}</p>
  `;
};
