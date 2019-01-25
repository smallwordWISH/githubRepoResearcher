module.exports = {
  plugins: [
    require('autoprefixer')({
      // 當前瀏覽器延後五個版本
      browsers: ['last 5 versions', 'ie 6-8', 'Firefox > 20'],
      grid: true,
    }),
  ],
};
