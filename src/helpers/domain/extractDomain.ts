export const extractDomain = (url: string): string => {
  const domainRegex = /^(?:https?:\/\/)?(?:www\.)?([^/?#]+)/;
  const match = url.match(domainRegex);
  return match ? match[1] : '';
};
