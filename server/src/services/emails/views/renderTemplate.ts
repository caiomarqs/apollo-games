export const renderTemplate = (text: string, name: string) => {
  return `  
    <p>Meu nome é ${name}.</p>
    <p>${text}</p>
  `;
};
