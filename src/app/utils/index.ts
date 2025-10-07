
export const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
};

export const generateGradient = (name: string) => {
  const hash = name.split("").reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);

  const h = hash % 360;
  return `linear-gradient(135deg, hsl(${h}, 70%, 80%), hsl(${(h + 60) % 360}, 70%, 80%))`;
};
