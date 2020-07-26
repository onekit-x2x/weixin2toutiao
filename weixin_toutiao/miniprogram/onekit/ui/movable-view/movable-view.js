// onekit/ui/movable-view/movable-view.js
Component({
  data: {

  },
  properties: {
    direction: "none",
    inertia: false,
    outOfBounds: false,
    x: 0,
    y: 0,
    damping: 20,
    friction: 2,
    disabled: false,
    scale: false,
    scaleMin: 0.5,
    scaleMax: 10,
    scaleValue: 1,
    animation: true
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    movable_Change(e) {
      if (this.props.change) {
        this.props.change()
      }
    },
    movable_scale(e) {
      if (this.props.scale) {
        this.props.scale()
      }
    }
  },
});
