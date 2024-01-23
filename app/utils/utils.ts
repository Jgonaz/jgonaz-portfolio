export const isMobile = () => {
  const isMobile =
    navigator.userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    ) || // Or native in-app browsers
    navigator.userAgent.includes('FBAN') ||
    navigator.userAgent.includes('FBAV') ||
    navigator.userAgent.includes('Instagram') ||
    navigator.userAgent.includes('TikTok') ||
    navigator.userAgent.includes('LinkedIn')

  return isMobile
}
