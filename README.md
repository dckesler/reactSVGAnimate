# reactSVGAnimate
React component for animating SVG elements.
Intended for use in another of my projects, but it seemed possibly useful in other situations.

##The component takes in 4 props.
- passive: A animation object that is the default animation for this component.
- animation: What animation to switch to from the passive (also an animation object).
- width: Width of the SVG window.
- height: Height of the SVG window.

###Example
```javascript
<Animator passive={passiveObj} animation={animationObj} width="500px" height="500px" />
```

###Animation Objects
An animation object will have three properties.
- looping: Either true or false.
- repeat: A number between one and `Infinity`.
- animation: An array of objects with two properties.
 - frame: A SVG React element.
 - delay: How long to stay on the current frame.
Here's an example.
```javascript
var animation = {
  looping: true,
  repeat: 2,
  animation: [
    {
      frame: <rect x="0" y="230" width="1" height="1"></rect>,
      delay: 100
    },
    {
      frame: <rect x="0" y="130" width="1" height="1"></rect>,
      delay: 100
    },
    {
      frame: <rect x="130" y="130" width="1" height="1"></rect>,
      delay: 100
    },
    {
      frame: <rect x="230" y="130" width="1" height="1"></rect>,
      delay: 100
    }
  ]
}
```
