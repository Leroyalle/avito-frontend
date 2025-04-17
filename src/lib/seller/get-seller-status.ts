export const getSellerStatus = (reviews: { id: string; stars: number }[]) => {
  if (reviews.length === 0) return '';
  const stars = reviews.reduce((acc, item) => acc + item.stars, 0);
  const average = stars / reviews.length;
  if (average >= 4.5) return 'Надёжный партнёр';
  if (average >= 3.5) return 'Средний рейтинг';
  if (average >= 2.5) return 'Низкий рейтинг';
};
