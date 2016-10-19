const keyCodeFunctions = self => {
  const obj = {
    37: () => self.offsetX += self.speed,
    39: () => self.offsetX -= self.speed,
    38: () => {
      self.offsetY += self.speed;
      self.player.advancement += self.speed;
    },
    40: () => {
      self.offsetY -= self.speed;
      self.player.advancement -= (self.speed);
    }
  };

  return obj;
};

module.exports = keyCodeFunctions;
