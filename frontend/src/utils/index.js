export const getStarClass = (value, starIndex) => {
  if (value >= starIndex) {
    return 'fas fa-star'
  } else if (value >= starIndex - 0.5) {
    return 'fas fa-star-half-alt'
  }
  return 'far fa-star'
}
