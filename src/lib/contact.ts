/** Coordonnées de démonstration : aucune n'est réelle. */
export const PHONE_DISPLAY = "00 00 00 00 00"
export const PHONE_HREF = "tel:+33000000000"
export const EMAIL_DISPLAY = "contact@atelier.invalid"

/** Photo Unsplash (licence gratuite) servie par leur CDN, recadrée à la largeur voulue. */
export const unsplash = (photo: string, width: number) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=75`
