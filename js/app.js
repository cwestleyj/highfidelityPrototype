$('.socket').on('click', function() {
  $('.button').toggleClass('active');
  if ($('.record').is(':hidden')) {
    $('.record').removeClass('hidden');
    $
}else {
    $('.record').addClass('hidden');
}
if ($('.timestamp').is(':hidden')) {
  $('.timestamp').removeClass('hidden');
  $
}else {
  $('.timestamp').addClass('hidden');
}
});
// $('.icon-tray-collapse').on('click', function() {
//       if ($('.iconCollapse').is(':hidden')) {
// 		        $('.iconCollapse').show("slide", {
// 		          direction: "left"
// 		        }, 1000);
// 		      } else {
// 		        $('.iconCollapse').hide("slide", {
// 		          direction: "right"
// 		        }, 1000);
// 		      }
// 				});
			 $('#ex1').slider({
      formatter: function(value) {
        return 'Zoom level: ' + value;
      }
    });


    $("#menu-close").click(function(e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("active");
    });
		$("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("active");
    });



    "use strict";

    var canvas, stage;
    var update = true;

    function initJoystick() {
      // Create stage and point it to the canvas:
      canvas = document.getElementById("canvas");
      // Check to see if we are running in a browser with touch support
      stage = new createjs.Stage(canvas);
      // Enable touch interactions if supported on the current device:
      createjs.Touch.enable(stage);
      // Enabled mouse over / out events
      stage.enableMouseOver(0);
      // keep tracking the mouse even when it leaves the canvas
      stage.mouseMoveOutside = true;
      // Create and populate the screen with orbs:
      for (var i = 0; i < 1; i++) {
        stage.addChild(new Shape());
      }
      // Add tick method.
      createjs.Ticker.addEventListener("tick", tick);
    }


    function tick(event) {
      // `update` boolean allows us to tick as needed.
      if (update) {
        update = false; // only update once
        stage.update(event);
      }
    }



    // Shape instance constructor
    // --------------------------
    function Shape() {
      // |0 has same effect as Math.floor
      this.x = 50;
      this.y = 50;
      //this.rotation = 360 * Math.random()|0;
      // `this.scale` stores the original scale.
      this.scaleX = this.scaleY = this.scale = 1;

      // Activate listeners (routed by handleEvent).
      this.addEventListener("mouseover", this);
      this.addEventListener("mouseout", this);
      this.addEventListener("mousedown", this);
    }
    // Shape class inheritance
    // -----------------------
    Shape.prototype = Object.create(
      createjs.Shape.prototype, {
        constructor: {
          value: Shape
        },
        graphics: {
          value: new createjs.Graphics()
            .setStrokeStyle(5)
            .s("rgba(17, 11, 8, 1)").f("rgba(43, 29, 22, 1)")
            .dc(0, 0, 30)
        }
        // Event handlers.
        ,
        handleEvent: {
          value: function(e) {
            this[e.type](e)
          }
        },
        mousedown: {
          value: function(e) {
            this.parent.addChild(this);
            var offset = {
              x: this.x - e.stageX,
              y: this.y - e.stageY
            };
            e.addEventListener("mousemove", function(event) {
              event.target.x = event.stageX + offset.x;
              event.target.y = event.stageY + offset.y;
              // updated on the next tick.
              update = true;
            });
          }
        },
        mouseover: {
          value: function(e) {
            this.scaleX = this.scaleY = this.scale * 1.2;
            update = true;
          }
        },
        mouseout: {
          value: function(e) {
            this.scaleX = this.scaleY = this.scale;
            update = true;
          }
        }

      });
			initJoystick();
    // // get a reference to an element
    // var stage = document.getElementById('stage');
    // $stage = jQuery(stage);
    //
    // // create a manager for that element
    // var manager = new Hammer.Manager(stage);
    //
    // // create recognizers
    // var Pan = new Hammer.Pan();
    // var Rotate = new Hammer.Rotate();
    // var Pinch = new Hammer.Pinch();
    // var Tap = new Hammer.Tap({
    //   taps: 1
    // });
    // var DoubleTap = new Hammer.Tap({
    //   event: 'doubletap',
    //   taps: 2
    // });
    //
    // // use them together
    // Rotate.recognizeWith([Pan]);
    // Pinch.recognizeWith([Rotate, Pan]);
    //
    // DoubleTap.recognizeWith([Tap]);
    // Tap.requireFailure([DoubleTap]);
    //
    // // add the recognizers
    // manager.add(Pan);
    // manager.add(Rotate);
    // manager.add(Pinch);
    // manager.add(DoubleTap);
    // manager.add(Tap);
    //
    // // subscribe to events
    // var liveScale = 1;
    // var currentRotation = 0;
    // manager.on('rotatemove', function(e) {
    //     // do something cool
    //     var rotation = currentRotation + Math.round(liveScale * e.rotation);
    //     $.Velocity.hook($stage, 'rotateZ', rotation + 'deg');
    // });
    // manager.on('rotateend', function(e) {
    //     // cache the rotation
    //     currentRotation += Math.round(e.rotation);
    // });

    // var deltaX = 0;
    // var deltaY = 0;
    // manager.on('panmove', function(e) {
    //   // do something cool
    //   var dX = deltaX + (e.deltaX);
    //   var dY = deltaY + (e.deltaY);
    //   $.Velocity.hook($stage, 'translateX', dX + 'px');
    //   $.Velocity.hook($stage, 'translateY', dY + 'px');
    // });
    // manager.on('panend', function(e) {
    //   deltaX = deltaX + e.deltaX;
    //   deltaY = deltaY + e.deltaY;
    // });
    //
    // // subscribe to events
    // var currentScale = 1;
    // function getRelativeScale(scale) {
    //   return scale * currentScale;
    // }
    // manager.on('pinchmove', function(e) {
    //   // do something cool
    //   var scale = getRelativeScale(e.scale);
    //   $.Velocity.hook($stage, 'scale', scale);
    // });
    // manager.on('pinchend', function(e) {
    //   // cache the scale
    //   currentScale = getRelativeScale(e.scale);
    //   liveScale = currentScale;
    // });
    //
    // var colors = [
    //   [20, 187, 95],
    //   [20, 95, 187],
    //   [187, 95, 20],
    //   [187, 20, 95],
    //   [95, 20, 187],
    //   [95, 187, 20]
    // ];
    // function mult(a, b) {
    //   return Math.round(a * b);
    // }
    // function makeColor(rgb, adj) {
    //   adj = adj || 1;
    //   return 'rgb('+mult(rgb[0], adj)+','+mult(rgb[1], adj)+','+ mult(rgb[2], adj)+')';
    // }
    // var currentColorIndex = 0;
    // manager.on('tap', function(e) {
    //   currentColorIndex++;
    //   if (currentColorIndex >= colors.length) {
    //     currentColorIndex = 0;
    //   }
    //   stage.style.backgroundColor = makeColor(colors[currentColorIndex]);
    //   stage.style.borderColor = makeColor(colors[currentColorIndex], 0.13);
    // });
    //
    // var isShrunken = false;
    // manager.on('doubletap', function() {
    //   console.log('doubletapped');
    //   var scale = $.Velocity.hook($stage, 'scale');
    //   if (isShrunken) {
    //     $.Velocity.hook($stage, 'scale', 2 * scale);
    //   } else {
    //     $.Velocity.hook($stage, 'scale', .5 * scale);
    //   }
    //   isShrunken = !isShrunken;
    // });
