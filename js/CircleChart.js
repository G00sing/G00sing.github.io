function CircleChart(_id, _data, _options) {
    /*
        Canvas Init
    */
    this.canvas = document.getElementById(_id);
    this.ctx = this.canvas.getContext('2d');
    /*
        Colors
    */
    this.COLORS = {
        white: '#FFFFFF',
        black: '#000000'
    };
    /*
        Fonts
    */
    this.FONT = "Arial";
    /*
        Configuration And Options
    */
    this.CONFIG = _options;
    /*
        
    */
    this.DATA = _data;
    /*
        Initialize Bar Chart Calculations
    */
    this.Resize();
    /*

    */
    this.CanResize = true;
    window.addEventListener("resize", this.HandleResize.bind(this));
}

/**
 * The Resize Event Handler
 * It throttles down how often the canvas is resized to
 * once every half second.
 */
CircleChart.prototype.HandleResize = function () {
    if (this.CanResize) {
        this.CanResize = false;
        this.Resize();
        setTimeout(function () {
            this.CanResize = true;
            this.Resize();
        }.bind(this), 250);
    }
};

/**
 * The function that actually resizes the canvas and it's contents.
 * There is another Resize Event Handler function, that dictates
 * when this function is allowed to run.
 */
CircleChart.prototype.Resize = function () {
    // Not caching in case they move from one monitor to another
    // Which is common in presentations and screensharing
    var PIXEL_RATIO = (function () {
        var ctx = document.createElement("canvas").getContext("2d"),
            // FYI Macbook Pro is 2
            dpr = window.devicePixelRatio || 1,
            bsr = ctx.webkitBackingStorePixelRatio ||
                ctx.mozBackingStorePixelRatio ||
                ctx.msBackingStorePixelRatio ||
                ctx.oBackingStorePixelRatio ||
                ctx.backingStorePixelRatio || 1;
        return dpr / bsr;
    }.bind(this))();
    // The desired width and height (aspect ratio)
    //this.WIDTH = window.innerWidth * .6; /* .8 */
    this.WIDTH = this.canvas.parentElement.clientWidth;
    this.HEIGHT = this.WIDTH * 0.74; /* .6 */
    // Set the Canvas width to be PIXEL_RATIO times the canvas's css width
    this.canvas.width = this.WIDTH * PIXEL_RATIO;
    this.canvas.height = this.HEIGHT * PIXEL_RATIO;
    this.canvas.style.width = this.WIDTH + "px";
    this.canvas.style.height = this.HEIGHT + "px";
    this.ctx.setTransform(PIXEL_RATIO, 0, 0, PIXEL_RATIO, 0, 0);
    // Adjust Font Sizes
    this.FONTSCALE = this.WIDTH * .02;
    this.XXXLARGE = (this.FONTSCALE * 1.6) + "px";
    this.XXLARGE = (this.FONTSCALE * 1.4) + "px";
    this.XLARGE = (this.FONTSCALE * 1.2) + "px";
    this.LARGE = (this.FONTSCALE * 1) + "px";
    this.MEDIUM = (this.FONTSCALE * 0.85) + "px";
    //
    this.Calculate();
    this.Draw();
};

/*

*/
CircleChart.prototype.Calculate = function () {
    /*
        Calculate the new radius of the Chart
    */
    this.RADIUS = Math.ceil(this.HEIGHT / 2) - 2;
    /*
        Calculate the Legend Blocks and Labels
    */
    this.LB_WIDTH = .14 * this.RADIUS;
    this.LB_X = this.RADIUS * 2 - (.02 * this.RADIUS);
    this.LB_Y = this.RADIUS + (.47 * this.RADIUS);
    this.LB_LABEL_X = this.LB_X + (1.5 * this.LB_WIDTH);
    /*
        The Title's Line Height and Y-Offset
    */
    this.TITLE_LH = this.FONTSCALE * 1.8;
    var num_lines = this.CONFIG.title.length;
    this.TITLE_OFFY = (num_lines <= 1) ? 0 : (num_lines * this.TITLE_LH) / 4;

    /*
        Round Everything to whole numbers
    */
    this.LB_WIDTH = Math.ceil(this.LB_WIDTH);
    this.LB_X = Math.ceil(this.LB_X);
    this.LB_Y = Math.ceil(this.LB_Y);
    this.LB_LABEL_X = Math.ceil(this.LB_LABEL_X);
    this.TITLE_LH = Math.ceil(this.TITLE_LH);
    this.TITLE_OFFY = Math.ceil(this.TITLE_OFFY);
};

/*
    The Main Draw Function
    Orchestrates the drawing of the entire view by
    calling a series of more specific draw functions.
*/
CircleChart.prototype.Draw = function () {
    /*
        Wipe the canvas clean
    */
    this.ctx.fillStyle = this.COLORS.white;
    this.ctx.fillRect(0, 0, this.WIDTH, this.HEIGHT);
    /*
        Draw the Outer Ring
    */
    this.DrawRing(
        this.RADIUS,
        this.RADIUS,
        this.RADIUS,
        this.DATA.outer.val,
        this.DATA.outer.fg,
        this.DATA.outer.bg
    );
    /*
        Draw the Separator between outer and inner rings
    */
    this.DrawWedge(
        this.RADIUS, /* Center X */
        this.RADIUS, /* Center Y */
        this.RADIUS * .72, /* Radius */
        0, /* Start Angle */
        2 * Math.PI, /* End Angle */
        this.COLORS.white /* Color */
    );
    /*
        Draw the Inner Ring
    */
    this.DrawRing(
        this.RADIUS, /* x */
        this.RADIUS, /* y */
        this.RADIUS * .7, /* Radius */
        this.DATA.inner.val, /* Fill Amount */
        this.DATA.inner.fg,
        this.DATA.inner.bg
    );
    /*
        Draw the center of the "Donut" 
        (Really just a white circle)
    */
    this.DrawWedge(
        this.RADIUS, /* Center X */
        this.RADIUS, /* Center Y */
        this.RADIUS * .4, /* Radius */
        0, /* Start Angle */
        2 * Math.PI, /* End Angle */
        this.COLORS.white /* Color */
    );
    /*
        Draw the textual values with a '%' suffix for the two rings
    */
    this.ctx.font = this.XXXLARGE + " " + this.FONT;
    this.ctx.fillStyle = this.COLORS.white;
    this.ctx.fillText( this.DATA.outer.val + "%", this.RADIUS + 8, .19 * this.RADIUS );
    this.ctx.fillText( this.DATA.inner.val + "%", this.RADIUS + 8,  .5 * this.RADIUS );
    /*
        Write the Title of this chart in the center
    */
    this.ctx.fillStyle = this.CONFIG.titleColor;
    this.ctx.font = this.XXXLARGE + " " + this.FONT;
    this.ctx.textAlign = "center";
    for (var i = 0; i < this.CONFIG.title.length; i++) {
        this.ctx.fillText(
            this.CONFIG.title[i],
            this.RADIUS,
            this.RADIUS - this.TITLE_OFFY + (i * this.TITLE_LH)
        );
    }
    /*
        Draw the color block and legend for the outer ring.
    */
    this.ctx.fillStyle = this.DATA.outer.fg;
    this.ctx.font = this.XXLARGE + " " + this.FONT;
    this.ctx.textAlign = "left";
    this.ctx.fillRect(this.LB_X, this.LB_Y, this.LB_WIDTH, this.LB_WIDTH);
    this.ctx.fillText(
        this.DATA.outer.label,
        this.LB_LABEL_X,
        this.LB_Y + .6 * this.LB_WIDTH
    );
    /*
        Draw the color block and legend for the inner ring.
    */
    this.ctx.fillStyle = this.DATA.inner.fg;
    this.ctx.fillRect(
        this.LB_X,
        this.LB_Y + 1.5 * this.LB_WIDTH,
        this.LB_WIDTH,
        this.LB_WIDTH
    );
    this.ctx.fillText(
        this.DATA.inner.label,
        this.LB_LABEL_X,
        this.LB_Y + 2.1 * this.LB_WIDTH
    );
}; /* End .Draw() */

/*

*/
CircleChart.prototype.DrawWedge = function (
    centerX, centerY, radius, startAngle, endAngle, color
) {
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.moveTo(centerX + 1, centerY + 1);
    this.ctx.arc(centerX + 1, centerY + 1, radius, startAngle, endAngle, false);
    this.ctx.closePath();
    this.ctx.fill();
}

/*

*/
CircleChart.prototype.DrawRing = function (x, y, radius, fillAmount, fg, bg) {
    /*
        Calculate the Offset - Justin wanted chart to start filling
        at the top (North), which is -1/2PI Radians if filling
        clockwise, or 1/2PI if filling counter clockwise.
    */
    var start_angle = (-1) * (0.5 * Math.PI);
    /*
        Draw the Background Color of this Ring
    */
    this.DrawWedge(x, y, radius, 0, 2 * Math.PI, bg);
    /*
        Calculate the radians that this arc should draw
    */
    var angle = 2 * Math.PI * (fillAmount / 100);
    /*
        Draw the Foreground Color of this Ring
    */
    this.DrawWedge(x, y, radius, start_angle, start_angle + angle, fg);

    this.ctx.fillStyle = "#000000";

}