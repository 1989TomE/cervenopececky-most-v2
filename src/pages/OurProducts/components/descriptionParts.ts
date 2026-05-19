export type DescriptionPart = {
  text: string;
  highlight?: boolean;
};

export const text = (value: string): DescriptionPart => ({ text: value });

export const flavor = (value: string): DescriptionPart => ({
  text: value,
  highlight: true,
});

export const joinFlavors = (
  flavors: string[],
  separator = ", "
): DescriptionPart[] =>
  flavors.flatMap((name, index) => [
    ...(index > 0 ? [text(separator)] : []),
    flavor(name),
  ]);
