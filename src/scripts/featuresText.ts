export function renderTextWithStrong(text: string, strongParts: string[] = []) {
  if (!strongParts || strongParts.length === 0) {
    return text;
  }

  let result = text;
  strongParts.forEach(part => {
    result = result.replace(part, `<strong>${part}</strong>`);
  });

  return result;
}
