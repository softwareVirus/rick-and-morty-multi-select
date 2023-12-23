export default function pluralize(data: string, number: number) {
  if (number > 1) {
    return data + "s";
  }
  return data;
}
