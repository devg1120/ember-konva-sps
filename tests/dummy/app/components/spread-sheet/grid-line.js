/* global dat */

import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';

export default class GridLineComponent extends Component {
  @tracked stageWidth = 1440
  @tracked stageHeight = 1440

  @tracked circleX = 50
  @tracked circleY = 200
  @tracked circleWidth = 50
  @tracked circleHeight = 50
  @tracked circleFill = '#000000'

  @tracked rectX = 100
  @tracked rectY = 175
  @tracked rectWidth = 50
  @tracked rectHeight = 50
  @tracked rectFill = '#000000'

  @tracked textX = 200
  @tracked textY = 200
  @tracked textWidth = 200
  @tracked textHeight = 50
  @tracked textFontSize = 16
  @tracked textFill = '#000000'
  @tracked textContent = 'Hello world'

  @tracked circleVisible = true
  @tracked rectVisible = true
  @tracked textVisible = true

  @tracked isCircleVisible = true
  @tracked isRectVisible = true
  @tracked isTextVisible = true

  @tracked image

  constructor(owner, args) {
    super(...arguments);

   console.log("line...");
   console.log(args.parent);

   this.cells = Array(100).fill(Array(100));
   //this.points = [100,100,200,100,300,100];
   this.points = new Array(100,100,200,200,300,300);

  }

}
