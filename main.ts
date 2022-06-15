let x = 2;
let y = 2;

loops.everyInterval(200, function () {
    led.unplot(x, y);

    if (200 < input.acceleration(Dimension.X) && x < 4) {
        x += 1;
    }
    if (-200 > input.acceleration(Dimension.X) && x > 0) {
        x += -1;
    }
    if (200 < input.acceleration(Dimension.Y) && y < 4) {
        y += 1;
    }
    if (-200 > input.acceleration(Dimension.Y) && y > 0) {
        y += -1;
    }

    led.plot(x, y);
});
