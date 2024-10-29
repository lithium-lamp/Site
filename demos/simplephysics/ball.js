class Ball extends GameObject {
    constructor(pos_x, pos_y, radius, bounce, color) {
      super(pos_x, pos_y, 0.1, color, 5, 9.82, "ball");

      this.radius = radius;
      this.bounce = bounce;
      this.selected = false;
    }

    step(fps, dx, dy, vx, vy) {
      if (this.pos_y - this.radius > 0) {
        this.vel_y -= this.gravity * 1/(fps);
      }
      else if (this.pos_y - this.radius <= 0) {
        this.pos_y = this.radius;
        this.vel_y = Math.abs(this.bounce * this.vel_y);
      }

      if (this.pos_y - this.radius <= 0.1 && this.vel_y < 0.01) {
        this.vel_y = 0;
        this.pos_y = this.radius;
      }
      else {
        this.pos_x += this.vel_x;
        this.pos_y += this.vel_y;
      }

      return {
        dx: this.pos_x,
        dy: this.pos_y,
        vx: this.pos_vx,
        vy: this.pos_vy,
      };
    }

    draw(context) {
      context.beginPath();
      context.arc(this.pos_x, 300 - this.pos_y, this.radius, 0, 2 * Math.PI);

      
      if (this.selected) {
        context.fillStyle = "#ff0000";
      }
      else {
        context.fillStyle = this.color;
      }

      context.fill();
    }
};