// Utility functions for emoji and flag support detection

/**
 * Detects if the current device/browser supports emoji flags
 * @returns {boolean} True if emoji flags are supported
 */
export function supportsEmojiFlags() {
  // Create a canvas to test emoji rendering
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Set canvas size
  canvas.width = 20;
  canvas.height = 20;
  
  // Test with a flag emoji
  ctx.font = '16px Arial';
  ctx.fillText('🇺🇸', 0, 16);
  
  // Check if the emoji was rendered (not just a placeholder)
  const imageData = ctx.getImageData(0, 0, 20, 20);
  const data = imageData.data;
  
  // Count non-transparent pixels
  let nonTransparentPixels = 0;
  for (let i = 3; i < data.length; i += 4) {
    if (data[i] > 0) {
      nonTransparentPixels++;
    }
  }
  
  // If we have very few pixels, emoji is likely not supported
  return nonTransparentPixels > 10;
}

/**
 * Detects the user's operating system
 * @returns {string} The detected OS
 */
export function detectOS() {
  const userAgent = navigator.userAgent;
  
  if (userAgent.indexOf('Windows') !== -1) {
    return 'Windows';
  } else if (userAgent.indexOf('Mac') !== -1) {
    return 'macOS';
  } else if (userAgent.indexOf('Linux') !== -1) {
    return 'Linux';
  } else if (userAgent.indexOf('Android') !== -1) {
    return 'Android';
  } else if (userAgent.indexOf('iOS') !== -1) {
    return 'iOS';
  }
  
  return 'Unknown';
}

/**
 * Detects if the device is likely to have emoji support issues
 * @returns {boolean} True if device might have emoji issues
 */
export function hasEmojiSupportIssues() {
  const os = detectOS();
  const userAgent = navigator.userAgent;
  
  // Windows devices often have emoji support issues
  if (os === 'Windows') {
    // Check for older Windows versions or specific browsers
    if (userAgent.indexOf('Windows NT 6.1') !== -1 || // Windows 7
        userAgent.indexOf('Windows NT 6.0') !== -1 || // Windows Vista
        userAgent.indexOf('Windows NT 5.') !== -1) {  // Windows XP
      return true;
    }
    
    // Check for Internet Explorer or older Edge
    if (userAgent.indexOf('MSIE') !== -1 || 
        userAgent.indexOf('Trident') !== -1 ||
        userAgent.indexOf('Edge/') !== -1) {
      return true;
    }
  }
  
  // Check for specific device manufacturers that might have issues
  if (userAgent.indexOf('HP') !== -1 || 
      userAgent.indexOf('Dell') !== -1 ||
      userAgent.indexOf('Lenovo') !== -1) {
    return true;
  }
  
  return false;
}

/**
 * Gets the appropriate flag display method for the current device
 * @returns {string} 'emoji', 'text', or 'image'
 */
export function getFlagDisplayMethod() {
  // First check if we have emoji support issues
  if (hasEmojiSupportIssues()) {
    return 'image';
  }
  
  // Then test actual emoji support
  if (supportsEmojiFlags()) {
    return 'emoji';
  }
  
  // Fallback to image
  return 'image';
}

/**
 * Gets flag text representation for fallback
 * @param {string} countryCode - The country code (e.g., 'US', 'ES')
 * @returns {string} Text representation of the flag
 */
export function getFlagText(countryCode) {
  const flagTextMap = {
    'US': 'US',
    'ES': 'ES', 
    'FR': 'FR',
    'DE': 'DE',
    'PK': 'PK',
    'JP': 'JP',
    'IN': 'IN',
    'CN': 'CN',
    'AT': 'AT',
    'RU': 'RU'
  };
  
  return flagTextMap[countryCode] || countryCode;
}

/**
 * Gets flag image path for fallback
 * @param {string} countryCode - The country code (e.g., 'US', 'ES')
 * @returns {string} Path to the flag image
 */
export function getFlagImagePath(countryCode) {
  const flagImageMap = {
    'US': '/images/flags/us.svg',
    'ES': '/images/flags/es.svg', 
    'FR': '/images/flags/fr.svg',
    'DE': '/images/flags/de.svg',
    'PK': '/images/flags/pk.svg',
    'JP': '/images/flags/jp.svg',
    'IN': '/images/flags/in.svg',
    'CN': '/images/flags/cn.svg',
    'AT': '/images/flags/at.svg',
    'RU': '/images/flags/ru.svg'
  };
  
  return flagImageMap[countryCode] || '/images/flags/default.svg';
}
